"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandService = void 0;
const browser_1 = require("../../generated/prisma/browser");
const brand_model_1 = require("./brand.model");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const cloudinary_1 = require("../../shared/utils/cloudinary");
const upload_1 = require("../../shared/utils/upload");
const env_1 = require("../../config/env");
const axios_1 = __importDefault(require("axios"));
class BrandService {
    async createBrand(data) {
        const userBrand = await brand_model_1.brandModel.getUserBrand(data.userId);
        if (userBrand) {
            throw new AppError_1.default("You have already created a brand", http_status_codes_1.StatusCodes.BAD_REQUEST);
        }
        const brandName = await brand_model_1.brandModel.getBrandByCondition({ name: data.name });
        if (brandName) {
            throw new AppError_1.default("Brand name already exists", http_status_codes_1.StatusCodes.BAD_REQUEST);
        }
        let logoUrl = null;
        let logoUrl_id = null;
        if (data.logoUrl) {
            const { secure_url, public_id } = await (0, cloudinary_1.uploadToCloudinary)(data.logoUrl, "brand-logos");
            logoUrl = secure_url;
            logoUrl_id = public_id;
        }
        const brandData = {
            userId: data.userId,
            name: data.name,
            logoUrl: logoUrl ?? undefined,
            logoUrl_id: logoUrl_id ?? undefined,
        };
        const brand = await brand_model_1.brandModel.createBrand(brandData);
        if (!brand) {
            throw new AppError_1.default("Brand creation failed", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return brand;
    }
    async getPublicBrandProfile(brandId) {
        const brand = await brand_model_1.brandModel.findApprovedBrandById(brandId);
        if (!brand)
            throw new AppError_1.default("Brand not found", 404);
        return {
            id: brand.id,
            name: brand.name,
            verificationStatus: brand.verificationStatus,
            rating: Number(brand.rating),
            logoUrl: brand.logoUrl,
        };
    }
    async updateBrandProfile(userId, brandId, data) {
        const brand = await brand_model_1.brandModel.findBrandById(brandId);
        if (!brand) {
            throw new AppError_1.default("Brand not found", http_status_codes_1.StatusCodes.NOT_FOUND);
        }
        if (brand.userId !== userId) {
            throw new AppError_1.default("Unauthorized", http_status_codes_1.StatusCodes.FORBIDDEN);
        }
        const updateData = {};
        if (typeof data.name === "string") {
            const trimmedName = data.name.trim();
            if (!trimmedName) {
                throw new AppError_1.default("Brand name cannot be empty", http_status_codes_1.StatusCodes.BAD_REQUEST);
            }
            const nameExists = await brand_model_1.brandModel.getBrandByCondition({
                name: trimmedName,
                NOT: { id: brandId },
            });
            if (nameExists) {
                throw new AppError_1.default("Brand name already exists", http_status_codes_1.StatusCodes.BAD_REQUEST);
            }
            updateData.name = trimmedName;
        }
        if (typeof data.isActive === "boolean") {
            updateData.isActive = data.isActive;
        }
        if (data.logoFilePath) {
            try {
                const { secure_url, public_id } = await (0, cloudinary_1.uploadToCloudinary)(data.logoFilePath, "brand-logos");
                updateData.logoUrl = secure_url;
                updateData.logoUrl_id = public_id;
                if (brand.logoUrl_id) {
                    try {
                        await (0, cloudinary_1.deleteFromCloudinary)(brand.logoUrl_id);
                    }
                    catch (error) {
                        console.warn("Failed to delete previous brand logo", error);
                    }
                }
            }
            finally {
                (0, upload_1.removeFileFromDisk)(data.logoFilePath);
            }
        }
        if (Object.keys(updateData).length === 0) {
            throw new AppError_1.default("No changes provided", http_status_codes_1.StatusCodes.BAD_REQUEST);
        }
        return brand_model_1.brandModel.updateBrand(brandId, updateData);
    }
    async getBrandVerificationStatus(brandId, userId, role) {
        const brand = await brand_model_1.brandModel.findBrandWithDocuments(brandId);
        if (!brand)
            throw new AppError_1.default("Brand not found", 404);
        if (brand.userId !== userId && role !== "admin") {
            throw new AppError_1.default("Unauthorized", 403);
        }
        const allTypes = Object.values(browser_1.BrandDocType);
        const submitted = new Set(brand.documents.map((d) => d.docType));
        const missing = allTypes.filter((t) => !submitted.has(t));
        return {
            verificationStatus: brand.verificationStatus,
            submittedDocuments: brand.documents.map((d) => ({
                docType: d.docType,
                fileUrl: d.fileUrl,
                status: d.status,
                rejectionReason: d.rejectionReason ?? null,
            })),
            missingDocuments: missing,
        };
    }
    async getLocation(longitude, latitude) {
        try {
            const response = await axios_1.default.get(`https://geocode.googleapis.com/v4/geocode/location?location.latitude=${latitude}&location.longitude=${longitude}&key=${env_1.ENV.Google_Maps_Key}`);
            return {
                latitude: response.data.results[0].location.latitude,
                longitude: response.data.results[0].location.longitude,
                placeId: response.data.results[0].placeId,
                formattedAddress: response.data.results[0].formattedAddress,
                addressLine: response.data.results[0].addressLine,
                city: response.data.results[0].city,
                state: response.data.results[0].state,
                country: response.data.results[0].country,
                postalCode: response.data.results[0].postalCode,
                locationGranularity: response.data.results[0].granularity,
            };
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.default("Failed to get location details", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async createBranchLocation(brandId, branchName, locationDetails, isMain, isActive) {
        const branchLocation = await brand_model_1.brandModel.CreateBrandLocation({
            brandId,
            name: branchName,
            ...locationDetails,
            isMain: isMain || false,
        });
        if (!branchLocation) {
            throw new AppError_1.default("Failed to create branch location", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return branchLocation;
    }
    async createBrandDocuments(brandId, data) {
        const brand = await brand_model_1.brandModel.findBrandById(brandId);
        if (!brand) {
            throw new AppError_1.default("Brand not found", http_status_codes_1.StatusCodes.NOT_FOUND);
        }
        const brandDocument = await brand_model_1.brandModel.createBrandDocuments(brandId, data);
        if (!brandDocument || brandDocument.length === 0) {
            throw new AppError_1.default("Failed to create brand document", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return brandDocument;
    }
    async getBrandByCondition(where) {
        return await brand_model_1.brandModel.getBrandByCondition(where);
    }
}
exports.brandService = new BrandService();
//# sourceMappingURL=brand.service.js.map