"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandModel = void 0;
const database_1 = __importDefault(require("../../config/database"));
class BrandModel {
    async findBrandWithDocuments(brandId) {
        return database_1.default.brand.findUnique({
            where: { id: brandId },
            include: { documents: true }
        });
    }
    async findBrandById(brandId) {
        return database_1.default.brand.findUnique({ where: { id: brandId } });
    }
    async createBrand(data) {
        return await database_1.default.brand.create({ data });
    }
    async updateBrand(brandId, data) {
        return database_1.default.brand.update({
            where: { id: brandId },
            data,
        });
    }
    async getUserBrand(userId) {
        return await database_1.default.brand.findUnique({
            select: {
                id: true,
                userId: true,
                name: true,
                verificationStatus: true,
            },
            where: {
                userId: userId,
            },
        });
    }
    async getBrandByCondition(where) {
        return await database_1.default.brand.findFirst({ where });
    }
    async CreateBrandLocation(data) {
        return await database_1.default.brandBranch.create({ data });
    }
    async createBrandDocuments(brandId, data) {
        return await database_1.default.brandDocument.createManyAndReturn({
            data: [
                ...data.map((doc) => ({
                    brandId,
                    docType: doc.docType,
                    fileUrl: doc.fileUrl,
                    fileUrl_id: doc.fileUrl_id,
                })),
            ],
        });
    }
    async findApprovedBrandById(brandId) {
        return database_1.default.brand.findFirst({
            where: {
                id: brandId,
                isActive: true,
                verificationStatus: { notIn: ["pending", "suspended"] },
            },
        });
    }
}
exports.brandModel = new BrandModel();
//# sourceMappingURL=brand.model.js.map