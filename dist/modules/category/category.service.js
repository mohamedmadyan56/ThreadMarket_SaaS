"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const category_model_1 = require("./category.model");
const brand_model_1 = require("../brand/brand.model");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
class CategoryService {
    async createCategory(brandId, userId, role, name, imageUrl) {
        const brand = await brand_model_1.brandModel.findBrandWithDocuments(brandId);
        if (!brand) {
            throw new AppError_1.default("Brand not found", http_status_codes_1.StatusCodes.NOT_FOUND);
        }
        if (brand.userId !== userId && role !== "admin") {
            throw new AppError_1.default("You are not authorized to create categories for this brand", http_status_codes_1.StatusCodes.FORBIDDEN);
        }
        const existing = await category_model_1.categoryModel.findByNameWithinBrand(brandId, name);
        if (existing) {
            throw new AppError_1.default("Category name already exists in this brand", http_status_codes_1.StatusCodes.CONFLICT);
        }
        const category = await category_model_1.categoryModel.create(brandId, name, imageUrl);
        return { id: category.id };
    }
}
exports.categoryService = new CategoryService();
//# sourceMappingURL=category.service.js.map