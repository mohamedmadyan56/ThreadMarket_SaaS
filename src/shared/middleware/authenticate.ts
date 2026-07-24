import { type Request, type Response, type NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { ENV } from "../../config/env";
import { asyncHandler } from "../utils/asyncHandler";
import AppError from "../errors/AppError";


/******************************************************
 * Version 1: try / catch (explicit)
 * - jwt.verify() throws on invalid / expired token
 * - we catch it and re-throw AppError with 401
 ******************************************************/
const authenticateWithTryCatch = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const token =
      req.cookies?.accessToken ||
      req.headers.authorization?.split(" ")[1];

    if (!token) throw new AppError("No token provided", StatusCodes.UNAUTHORIZED);

    try {
      const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET!) as JwtPayload;
      (req as any).user = decoded;
      next();
    } catch (error) {
      throw new AppError("Invalid or expired token", StatusCodes.UNAUTHORIZED);
    }
  },
);

export default authenticateWithTryCatch;
// export default authenticateWithPureAsyncHandler;   // switch when ready


/******************************************************
 * Version 2: pure asyncHandler (no try / catch)
 * - jwt.verify() throws on invalid / expired token
 * - asyncHandler catches the rejection → passes to global error handler
 * - raw JwtError still reaches the client unless your global handler
 *   knows how to convert it
 ******************************************************/
const authenticateWithPureAsyncHandler = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const token =
      req.cookies?.accessToken ||
      req.headers.authorization?.split(" ")[1];

    if (!token) throw new AppError("No token provided", StatusCodes.UNAUTHORIZED);

    const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET!) as JwtPayload;
    (req as any).user = decoded;
    next();
  },
);

// export default authenticateWithTryCatch;            // switch when ready
// export default authenticateWithPureAsyncHandler;
