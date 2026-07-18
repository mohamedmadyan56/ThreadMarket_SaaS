import { type Response, type NextFunction } from "express";
import ApiError from "../classes/ApiError";
import { StatusCodes } from "http-status-codes";
export const isAuthorized = (...roles: string[]) => {
  return async (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          "You are not Authorized to Access This Route",
          StatusCodes.FORBIDDEN,
        ),
      );
    }
    return next();
  };
};
