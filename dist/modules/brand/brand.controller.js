"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrandDocument = exports.brandVerificationStatus = exports.updateBrandProfile = exports.getPublicBrandProfile = exports.createBrand = void 0;
const brand_service_1 = require("./brand.service");
const asyncHandler_1 = require("../../shared/utils/asyncHandler");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const auth_model_1 = require("../auth/auth.model");
const cloudinary_1 = require("../../shared/utils/cloudinary");
const http_status_codes_1 = require("http-status-codes");
exports.createBrand = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, location, branchName, } = req.body;
    const user = req.user;
    const filePath = req.file?.path;
    const brand = await brand_service_1.brandService.createBrand({
        userId: user.id,
        name,
        logoUrl: filePath,
    });
    // Update the brand's role to "brand" after creating the brand
    await auth_model_1.authModel.updateUser(user.id, { role: "brand" });
    const locationDetails = await brand_service_1.brandService.getLocation(location.longitude, location.latitude);
    const branchLocation = await brand_service_1.brandService.createBranchLocation(brand.id, branchName, locationDetails, true);
});
exports.getPublicBrandProfile = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { brandId } = req.params;
    const result = await brand_service_1.brandService.getPublicBrandProfile(brandId);
    return res.status(200).json({
        success: true,
        message: "Brand profile retrieved successfully",
        data: result,
    });
});
exports.updateBrandProfile = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const user = req.user;
    const { brandId } = req.params;
    const { name, isActive } = req.body;
    if (!user?.id) {
        throw new AppError_1.default("Not authenticated", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
    const filePath = req.file?.path;
    const brand = await brand_service_1.brandService.updateBrandProfile(user.id, brandId, {
        name,
        isActive,
        logoFilePath: filePath,
    });
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Brand profile updated successfully",
        data: brand,
    });
});
exports.brandVerificationStatus = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { brandId } = req.params;
    const user = req.user;
    if (!user?.id) {
        throw new AppError_1.default("Not authenticated", 401);
    }
    const result = await brand_service_1.brandService.getBrandVerificationStatus(brandId, user.id, user.role);
    return res.status(200).json({ success: true, message: "OK", data: result });
});
exports.createBrandDocument = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    console.log(req.body, req.files);
    const { brandId } = req.params;
    const user = req.user;
    const files = req.files;
    const rawDocTypes = req.body?.docTypes;
    const docTypes = Array.isArray(rawDocTypes)
        ? rawDocTypes
        : typeof rawDocTypes === "string"
            ? JSON.parse(rawDocTypes)
            : [];
    if (!files || files.length === 0) {
        throw new AppError_1.default("No document provided", http_status_codes_1.StatusCodes.BAD_REQUEST);
    }
    console.log(docTypes);
    if (!Array.isArray(docTypes) || docTypes.length === 0) {
        throw new AppError_1.default("Document types are required", http_status_codes_1.StatusCodes.BAD_REQUEST);
    }
    console.log(`User Id ${user.id} and brandId ${brandId}`);
    const brand = await brand_service_1.brandService.getBrandByCondition({
        id: brandId,
        userId: user.id,
    });
    if (!brand) {
        throw new AppError_1.default("You are not authorized to upload documents for this brand", http_status_codes_1.StatusCodes.FORBIDDEN);
    }
    if (files.length !== docTypes.length) {
        throw new AppError_1.default("Number of uploaded documents must match the number of document types", http_status_codes_1.StatusCodes.BAD_REQUEST);
    }
    const uploadedDocuments = await Promise.all(files.map(async (file, index) => {
        const { public_id, secure_url } = await (0, cloudinary_1.uploadToCloudinary)(file.path, `brand-documents/${brandId}/${docTypes[index]}`);
        return {
            docType: docTypes[index],
            fileUrl: secure_url,
            fileUrl_id: public_id,
        };
    }));
    const createDocuments = await brand_service_1.brandService.createBrandDocuments(brandId, uploadedDocuments);
    return res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: "Brand documents created successfully",
        data: createDocuments,
    });
});
//# sourceMappingURL=brand.controller.js.map