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
class User {
  constructor() {}

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
        otp: user.otp!,
        expiresInMinutes: otpUtil.otp_expiration_minutes * 60 * 1000,
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
          req.headers?.authorization?.split("_")[1]);

      const payload = (await jwt.verify(
        token,
        ENV.ACCESS_TOKEN_SECRET!,
      )) as JwtPayload;

      // check if the token is on another purpose
      if (payload?.purpose !== "reset-password")
        throw new ApiError("Invalid Cookie Session", StatusCodes.BAD_REQUEST);
      // get User using id stored in accessToken
      const user = await prisma.user.findFirst({
        where: {
          id: payload.id,
        },
      });

      if (!user)
        throw new ApiError(`We Couldn't Found User`, StatusCodes.NOT_FOUND);
      // Check if otp is expired then verify given otp with user saved otp
      if (new Date(Date.now()) < user.otp_expiration!)
        throw new ApiError(
          "Otp is Expired .. Reset Password Again",
          StatusCodes.BAD_REQUEST,
        );

      if (user.otp !== otp)
        throw new ApiError(
          `Otp is not Matched or Correct`,
          StatusCodes.BAD_REQUEST,
        );
      // Remove token of reset-password-purpose
      res.clearCookie("accessToken", {
        maxAge: payload.exp,
      });

      // Sign Token With Purpose verify-otp
      const Token = await jwt.sign(
        {
          id: user.id,
          purpose: "verify-otp",
        },
        ENV.ACCESS_TOKEN_SECRET!,
        {
          expiresIn: 5 * 60 * 1000,
        },
      );

      // Update Otp and Otp_Expiration and otp-purpose to null
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          otp: null,
          otp_expiration: null,
          otp_purpose: undefined,
        },
      });

      return {
        success: true,
        data: {
          Token,
          expiration: 5 * 60 * 1000,
        },
        message: "Otp Verified Successfully",
      };
    };
  }

  async resetPassword(newPassword: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const token =
        req.cookies?.accessToken ||
        (req.headers?.authorization?.startsWith("Bearer") &&
          req.headers?.authorization?.split("_")[1]);

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
}

export default User;
