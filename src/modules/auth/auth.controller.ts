import { Request, Response } from "express"
import { authService } from "./auth.service"
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";
import { ENV } from "../../config/env";


const isProduction = ENV.NODE_ENV === 'production';

const baseCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax" as "none" | "lax",
    path: "/",
}





export const register = asyncHandler(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const filePath = req.file?.path;
    const result = await authService.register(username, email, password, filePath);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "OTP sent to email. Please verify to complete registration.",
        data: result,
    })

})











