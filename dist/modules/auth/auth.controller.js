"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshAccessToken = exports.resetPassword = exports.verifyOtp = exports.sendOtp = exports.logout = exports.login = exports.verifyRegisterOtp = exports.register = void 0;
const auth_service_1 = require("./auth.service");
const http_status_codes_1 = require("http-status-codes");
const asyncHandler_1 = require("../../shared/utils/asyncHandler");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const env_1 = require("../../config/env");
const isProduction = env_1.ENV.NODE_ENV === "production";
const baseCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
};
exports.register = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username) {
        throw new AppError_1.default("Username is required", http_status_codes_1.StatusCodes.BAD_REQUEST);
    }
    const filePath = req.file?.path;
    const result = await auth_service_1.authService.register(username, email, password, filePath);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: "OTP sent to email. Please verify to complete registration.",
        data: result,
    });
});
exports.verifyRegisterOtp = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { token, otp } = req.body;
    await auth_service_1.authService.verifyRegisterOtp(token, otp);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Email verified successfully. You can now login.",
    });
});
exports.login = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { identifier, password } = req.body;
    const result = await auth_service_1.authService.login(identifier, password);
    res.cookie("refreshToken", result.refreshToken, {
        ...baseCookieOptions,
        maxAge: Number(env_1.ENV.REFRESH_TOKEN_EXPIRY) * 1000,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Login successful",
        data: {
            accessToken: result.accessToken,
            accessTokenExpiration: result.accessTokenExpiration,
            user: result.user,
        },
    });
});
exports.logout = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    const accessToken = req.headers.authorization?.split(" ")[1];
    await auth_service_1.authService.logout(refreshToken, accessToken);
    res.clearCookie("refreshToken", baseCookieOptions);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Logged out successfully",
    });
});
exports.sendOtp = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, purpose } = req.body;
    const result = await auth_service_1.authService.sendOtp(email, purpose);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "OTP sent to email",
        data: result,
    });
});
exports.verifyOtp = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { token, otp } = req.body;
    const result = await auth_service_1.authService.verifyOtp(token, otp);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "OTP verified successfully",
        data: result,
    });
});
exports.resetPassword = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { token, newPassword } = req.body;
    await auth_service_1.authService.resetPassword(token, newPassword);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Password reset successfully",
    });
});
exports.refreshAccessToken = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken;
    if (!incomingRefreshToken) {
        throw new AppError_1.default("No refresh token provided", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
    const result = await auth_service_1.authService.refreshAccessToken(incomingRefreshToken);
    res.cookie("refreshToken", result.refreshToken, {
        ...baseCookieOptions,
        maxAge: Number(env_1.ENV.REFRESH_TOKEN_EXPIRY) * 1000,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Access token refreshed",
        data: {
            accessToken: result.accessToken,
            accessTokenExpiration: result.accessTokenExpiration,
        },
    });
});
//# sourceMappingURL=auth.controller.js.map