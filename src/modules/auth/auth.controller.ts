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