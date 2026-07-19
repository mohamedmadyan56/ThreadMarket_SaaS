import { asyncHandler } from "../helpers/asyncHandler";
import ApiError from "../classes/ApiError";
import ApiResponse from "../classes/ApiResponse";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../helpers/generateTokens";
import { ENV } from "../helpers/ENV";
import { Request, Response, NextFunction } from "express";
import User from "../classes/User.class";
import { StatusCodes } from "http-status-codes";

export const forgetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    // Send Otp to email
    // First instantiate an instance from User
    const user = new User();
    const result = await user.sendOtp(email, "resetpassword");

    // Setting access Token in Cookies
    res.cookie("accessToken", result.data.Token, {
      maxAge: result.data.expiration,
    });
    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(result.success, result.message, result.data));
  },
);

export const verifyOtp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { otp } = req.body;

    // Verify given Otp With User Stored Otp
    const user = new User();
    const otpMiddleware = await user.verifyOtp(otp);
    const result = await otpMiddleware(req, res, next);

    res.cookie("accessToken", result.data.Token, {
      maxAge: result.data.expiration,
    });
    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(result.success, result.message, result.data));
  },
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    const user = new User();
    const resetPasswordMidle = await user.resetPassword(password);
    const result = await resetPasswordMidle(req, res, next);

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(result.success, result.message, result.data));
  },
);

export const refreshAccessToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = new User();
    const refreshMiddleware = await user.refreshAccessToken();
    const result = await refreshMiddleware(req, res, next);

    res.cookie("accessToken", result.data.accessToken, {
      maxAge: result.data.accessTokenExpiration,
    });
    res.cookie("refreshToken", result.data.refreshToken, {
      maxAge: result.data.refreshTokenExpiration,
    });

    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(result.success, result.message, result.data));
  },
);
