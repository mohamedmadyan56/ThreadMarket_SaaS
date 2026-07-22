import prisma from "../utils/connectDB";
import Otp from "../classes/Otp.class";
import { sendEmail } from "../helpers/sendEmail";
import ApiError from "./ApiError";
import { StatusCodes } from "http-status-codes";
import { otpEmailTemplate } from "../helpers/emailTemplates";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ENV } from "../helpers/ENV";
import { type Request, type Response, type NextFunction } from "express";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../helpers/generateTokens";

import { uploadToCloudinary, deleteFromCloudinary } from "../utils/cloudinary";
import { removePicsFromLocal } from "../helpers/removeLocalFiles";
class User {
  constructor() { }
  async register(
    username: string,
    email: string,
    password: string,
    filePath?: string,
  ) {
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser)
      throw new ApiError(
        `User with email ${email} already exists`,
        StatusCodes.CONFLICT,
      );

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let picture: { url: string; id: string } | undefined;

    if (filePath) {
      picture = await User.uploadPicture(filePath);
    }

    const otpUtil = new Otp(5);
    const generatedOtp = otpUtil.generateOtp();
    console.log(generatedOtp);
    const otpSalt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(generatedOtp, otpSalt);

    try {
      await sendEmail(
        email,
        "Sign up Verification",
        otpEmailTemplate({
          name: username,
          otp: generatedOtp,
          expiresInMinutes: otpUtil.otp_expiration_minutes,
          appName: "Fashion Connect",
          supportEmail: "example@gmail.com",
        }),
      );
    } catch (error) {
      // Email failed to send — nothing was persisted, but the picture
      // was already uploaded, so clean it up
      if (picture?.id) await User.deletePicture(picture.id);
      throw error;
    }

    // Carry the pending registration in the token itself — nothing
    // touches the User table until the OTP is verified
    const Token = jwt.sign(
      {
        purpose: "signup-pending",
        username,
        email,
        password: hashedPassword,
        picture,
        otpHash: hashedOtp,
      },
      ENV.ACCESS_TOKEN_SECRET!,
      { expiresIn: otpUtil.otp_expiration_minutes * 60 * 1000 },
    );

    return {
      success: true,
      data: { Token, expiration: otpUtil.otp_expiration_minutes },
      message: `Otp Sent to Your Email ${email}. Verify to complete registration`,
    };
  }
  
  async login(identifier: string, password: string) {
    // Find user by email or phone.
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier }
        ]
      }
    });

    if (!user) {
      throw new ApiError("Invalid credentials", 401);
    }

    // Check if account is locked.
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      throw new ApiError("Account is locked. Please try again later.", 403);
    }
    // check if account is banned
    if (user.isBanned) {
      throw new ApiError("Account is banned. Please contact support.", 403);
    }
    // Compare password using bcrypt.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const failedAttempts = user.failedLoginAttempts + 1;
      const updateData: any = { failedLoginAttempts: failedAttempts };

      if (failedAttempts >= 5) {
        updateData.lockedUntil = new Date(Date.now() + 30 * 60 * 1000); // Lock for 30 minutes
      }

      await prisma.user.update({
        where: { id: user.id },
        data: {
          ...updateData
        }
      })
      throw new ApiError("Invalid credentials", 401);
    }
    //  Generate:
    //        access token (15 min)
    const accessToken = generateAccessToken({ id: user.id, role: user.role });
    //        refresh token (7 days)
    const refreshToken = generateRefreshToken({ id: user.id , role: user.role });

    // Update user:
    //        failedLoginAttempts = 0
    //        lockedUntil = null
    //        isOnline = true
    //        refreshToken = generated token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
        isOnline: true,
        refreshToken
      }
    });
    //  Return tokens + user data.
    const safeUser = {
      id: user.id,
      username: user.username,
      phone: user.phone,
      email: user.email,
      role: user.role,
      picture_url: user.picture_url,
    };
    
    return {
      success: true,
      data: {
        accessToken,
        refreshToken,
        accessTokenExpiration: Number(ENV.ACCESS_TOKEN_EXPIRY),
        refreshTokenExpiration: Number(ENV.REFRESH_TOKEN_EXPIRY),
        user: safeUser,
      },
      message: "Login Successfully",
    };
  }
  logout() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const token =
        req.cookies?.accessToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split(" ")[1]);

      if (!token)
        throw new ApiError(
          "Registration Session is Missing",
          StatusCodes.UNAUTHORIZED,
        );

      const payload = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET!) as JwtPayload;
      console.log(payload);
      await prisma.user.update({
        where: {
          id: payload.id,
        },
        data: {
          refreshToken: null,
          isOnline: false,
        },
      });
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return {
        success: true,
        message: "Logout Successfully",
        data: null,
      };
    };
  }
  async verifyRegisterOtp(otp: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const token =
        req.cookies?.accessToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split(" ")[1]);

      console.log(req.cookies?.accessToken);
      if (!token)
        throw new ApiError(
          "Registration Session is Missing",
          StatusCodes.UNAUTHORIZED,
        );

      const payload = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET!) as JwtPayload;
      console.log(payload);
      if (payload?.purpose !== "signup-pending")
        throw new ApiError(
          "Invalid Registration Session",
          StatusCodes.BAD_REQUEST,
        );

      const otpMatches = await bcrypt.compare(otp, payload.otpHash!);
      console.log(`otp Checking ${otpMatches}`);
      if (!otpMatches)
        throw new ApiError(
          "Otp is not Matched or Correct",
          StatusCodes.BAD_REQUEST,
        );

      // Someone else could've registered this email while this token
      // was still pending — re-check before creating
      const existingUser = await prisma.user.findFirst({
        where: { email: payload.email },
      });

      if (existingUser) {
        if (payload.picture?.id) await User.deletePicture(payload.picture.id);
        throw new ApiError(
          `User with email ${payload.email} already exists`,
          StatusCodes.CONFLICT,
        );
      }

      try {
        await prisma.user.create({
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            picture_url: payload.picture?.url,
            picture_url_id: payload.picture?.id,
            isVerified: true,
          },
        });

        res.clearCookie("accessToken");

        return {
          success: true,
          data: null,
          message: "Account Verified and Created Successfully",
        };
      } catch (error) {
        if (payload.picture?.id) await User.deletePicture(payload.picture.id);
        throw error;
      }
    };
  }
  async sendOtp(email: string, purpose: string) {
    // generate Otp Using Otp Class
    const otpUtil = new Otp(5);
    const generatedOtp = otpUtil.generateOtp();
    // Verify Existence of the User using email
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user)
      throw new ApiError(
        `There is no user with email ${email}`,
        StatusCodes.NOT_FOUND,
      );
    if (purpose !== "resetpassword" && purpose !== "signup")
      throw new ApiError(
        "We Can't Send Otp For Other Purpose",
        StatusCodes.BAD_REQUEST,
      );

    // Send Email To User Email and Include User Details to the template
    await sendEmail(
      email,
      "Otp Verification",
      otpEmailTemplate({
        name: user.username,
        otp: generatedOtp,
        expiresInMinutes: otpUtil.otp_expiration_minutes,
        appName: "Fashion Connect",
        supportEmail: "example@gmail.com",
      }),
    );
    // generate resetPasswordToken and assign its expiration
    const Token = await jwt.sign(
      {
        id: user.id,
        purpose: "reset-password",
      },
      ENV.ACCESS_TOKEN_SECRET!,
      { expiresIn: otpUtil.otp_expiration_minutes * 60 * 1000 },
    );
    // Update User with otp , otp_expiration , otp_purpose in both otp Purpose
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        otp: generatedOtp,
        otp_expiration: otpUtil.otp_expiration_date,
        otp_purpose: purpose,
      },
    });

    return {
      success: true,
      data: {
        Token,
        expiration: otpUtil.otp_expiration_minutes,
      },
      message: `Otp Sent to Your Email ${user.email} Check Your Inbox`,
    };
  }

  async verifyOtp(otp: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const token =
        req.cookies?.accessToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split(" ")[1]);

      const payload = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET!) as JwtPayload;

      if (payload?.purpose !== "reset-password")
        throw new ApiError("Invalid Cookie Session", StatusCodes.BAD_REQUEST);

      const user = await prisma.user.findFirst({ where: { id: payload.id } });
      if (!user)
        throw new ApiError(`We Couldn't Found User`, StatusCodes.NOT_FOUND);

      if (new Date(Date.now()) > user.otp_expiration!)
        throw new ApiError(
          "Otp is Expired .. Reset Password Again",
          StatusCodes.BAD_REQUEST,
        );

      if (user.otp !== otp)
        throw new ApiError(
          `Otp is not Matched or Correct`,
          StatusCodes.BAD_REQUEST,
        );

      res.clearCookie("accessToken");

      const Token = jwt.sign(
        { id: user.id, purpose: "verify-otp" },
        ENV.ACCESS_TOKEN_SECRET!,
        { expiresIn: 5 * 60 },
      );

      await prisma.user.update({
        where: { id: user.id },
        data: { otp: null, otp_expiration: null, otp_purpose: null },
      });

      return {
        success: true,
        data: { Token, expiration: 5 },
        message: "Otp Verified Successfully",
      };
    };
  }

  async resetPassword(newPassword: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const token =
        req.cookies?.accessToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split(" ")[1]);

      const payload = (await jwt.verify(
        token,
        ENV.ACCESS_TOKEN_SECRET!,
      )) as JwtPayload;

      if (payload?.purpose !== "verify-otp")
        throw new ApiError("Invalid Cookie Session", StatusCodes.BAD_REQUEST);

      const user = await prisma.user.findFirst({
        where: {
          id: payload?.id,
        },
      });

      // Generate new Hashed Password and save to user data
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // update user password
      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          password: hashedPassword,
          passwordChangedAt: new Date(),
        },
      });

      return {
        success: true,
        data: null,
        message: "Password-reseted Successfully",
      };
    };
  }

  async refreshAccessToken() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const incomingRefreshToken =
        req.cookies?.refreshToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split(" ")[1]);

      if (!incomingRefreshToken)
        throw new ApiError(
          "Refresh Token is Missing",
          StatusCodes.UNAUTHORIZED,
        );

      const payload = (await jwt.verify(
        incomingRefreshToken,
        ENV.REFRESH_TOKEN_SECRET!,
      )) as JwtPayload;

      // get User using id stored in refreshToken
      const user = await prisma.user.findFirst({
        where: {
          id: payload.id,
        },
      });

      if (!user)
        throw new ApiError(`We Couldn't Found User`, StatusCodes.NOT_FOUND);

      // Compare against DB-stored refreshToken — allows revocation/rotation
      if (user.refreshToken !== incomingRefreshToken)
        throw new ApiError(
          "Refresh Token is Invalid or Has Been Revoked",
          StatusCodes.UNAUTHORIZED,
        );

      if (user.isBanned)
        throw new ApiError("Account is Banned", StatusCodes.FORBIDDEN);

      if (user.lockedUntil && user.lockedUntil > new Date())
        throw new ApiError(
          "Account is Temporarily Locked",
          StatusCodes.FORBIDDEN,
        );

      // Rotate both tokens
      const tokenPayload = { id: user.id , role: user.role };
      const newAccessToken = generateAccessToken(tokenPayload);
      const newRefreshToken = generateRefreshToken(tokenPayload);

      // Persist new refreshToken, invalidating the old one
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: newRefreshToken,
        },
      });

      return {
        success: true,
        data: {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          accessTokenExpiration: Number(ENV.ACCESS_TOKEN_EXPIRY),
          refreshTokenExpiration: Number(ENV.REFRESH_TOKEN_EXPIRY),
        },
        message: "Access Token Refreshed Successfully",
      };
    };
  }

  static async uploadPicture(filePath: string, folder: string = "users") {
    try {
      const result = await uploadToCloudinary(filePath, folder);
      return {
        url: result.secure_url,
        id: result.public_id,
      };
    } finally {
      // Best-effort cleanup — don't let a delete failure mask
      // an upload error (or hide a successful upload's result)
      try {
        removePicsFromLocal(filePath);
      } catch (cleanupError) {
        console.log("Failed to remove temp file:", cleanupError);
      }
    }
  }

  static async deletePicture(publicId: string) {
    try {
      await deleteFromCloudinary(publicId);
    } catch (error) {
      // Usually called as a rollback — don't let this crash the caller
      console.log("Failed to delete picture during rollback:", error);
    }
  }
}

export default User;
