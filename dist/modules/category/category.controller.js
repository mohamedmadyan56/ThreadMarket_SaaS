"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const category_service_1 = require("./category.service");
const http_status_codes_1 = require("http-status-codes");
const asyncHandler_1 = require("../../shared/utils/asyncHandler");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
exports.createCategory = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { brandId } = req.params;
    const { name, imageUrl } = req.body;
    const user = req.user;
    if (!user?.id) {
        throw new AppError_1.default("Not authenticated", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
    const result = await category_service_1.categoryService.createCategory(brandId, user.id, user.role, name, imageUrl);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: "Category created successfully",
        data: result,
    });
});
//# sourceMappingURL=category.controller.js.map