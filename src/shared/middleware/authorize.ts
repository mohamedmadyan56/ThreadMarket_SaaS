import { type Response, type NextFunction } from "express";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";

export const authorize = (...roles: string[]) => {
  return async (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You are not Authorized to Access This Route", StatusCodes.FORBIDDEN),
      );
    }
    return next();
  };
};