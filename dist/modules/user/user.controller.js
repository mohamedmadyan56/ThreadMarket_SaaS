"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurrentUser = exports.getCurrentUser = void 0;
const user_service_1 = require("./user.service");
const http_status_codes_1 = require("http-status-codes");
const asyncHandler_1 = require("../../shared/utils/asyncHandler");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
exports.getCurrentUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = req.user?.id; // ← جاية من authenticate
    if (!userId) {
        throw new AppError_1.default("Not authenticated", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
    const profile = await user_service_1.userService.getCurrentUser(userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Profile retrieved successfully",
        data: profile,
    });
});
exports.updateCurrentUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new AppError_1.default("Not authenticated", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
    const updated = await user_service_1.userService.updateCurrentUser(userId, req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Profile updated successfully",
        data: updated,
    });
});
//# sourceMappingURL=user.controller.js.map