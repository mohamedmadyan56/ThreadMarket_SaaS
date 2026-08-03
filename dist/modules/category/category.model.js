"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const database_1 = __importDefault(require("../../config/database"));
class CategoryModel {
    async findByNameWithinBrand(brandId, name) {
        return database_1.default.category.findFirst({
            where: { brandId, name },
            select: { id: true },
        });
    }
    async create(brandId, name, imageUrl) {
        return database_1.default.category.create({
            data: {
                brandId,
                name,
                media: {},
                ...(imageUrl ? { imageUrl } : {}),
            },
            select: { id: true },
        });
    }
}
exports.categoryModel = new CategoryModel();
//# sourceMappingURL=category.model.js.map