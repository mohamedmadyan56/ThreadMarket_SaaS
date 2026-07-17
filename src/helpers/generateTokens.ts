import jwt from "jsonwebtoken";
import ApiError from "../classes/ApiError";
import { ENV } from "../helpers/ENV";

export const generateAccessToken = (payload: object) => {
  try {
    return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET!, {
      expiresIn: Number(ENV.ACCESS_TOKEN_EXPIRY),
    });
  } catch (error) {
    throw new ApiError("Error generating access token", 500);
  }
};

export const generateRefreshToken = (payload: object) => {
  try {
    return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET!, {
      expiresIn: Number(ENV.REFRESH_TOKEN_EXPIRY),
    });
  } catch (error) {
    throw new ApiError("Error generating refresh token", 500);
  }
};
