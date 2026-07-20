import { type Response, type NextFunction, type Request } from "express";
import ApiError from "../classes/ApiError";
import jwt from "jsonwebtoken";
import { ENV } from "../helpers/ENV";
import { StatusCodes } from "http-status-codes";

export const isAuthenticated = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id =
      req.cookies?.accessToken ||
      (req.headers?.authorization?.startsWith("Bearer") &&
        req.headers.authorization.split(" ")[1]);

    if (!id) {
      return next(
        new ApiError("User not authenticated", StatusCodes.UNAUTHORIZED),
      );
    }

    if (id) {
      const user = jwt.verify(id, ENV.ACCESS_TOKEN_SECRET!);
      req.user = user;
      return next();
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError("User not authenticated", StatusCodes.UNAUTHORIZED),
    );
  }
};
