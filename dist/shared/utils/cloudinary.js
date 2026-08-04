"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromCloudinary = exports.uploadBufferToCloudinary = exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const env_1 = require("../../config/env");
const AppError_1 = __importDefault(require("../errors/AppError"));
const path_1 = __importDefault(require("path"));
console.log(env_1.ENV.CLOUDINARY_NAME, env_1.ENV.CLOUDINARY_API_KEY, env_1.ENV.CLOUDINARY_API_SECRET);
cloudinary_1.v2.config({
    cloud_name: env_1.ENV.CLOUDINARY_NAME,
    api_key: env_1.ENV.CLOUDINARY_API_KEY,
    api_secret: env_1.ENV.CLOUDINARY_API_SECRET,
});
// Upload from file path
const uploadToCloudinary = async (filePath, folder) => {
    if (!filePath) {
        throw new AppError_1.default("File path is required", 400);
    }
    const filePathResolved = path_1.default.resolve(filePath);
    try {
        const result = await cloudinary_1.v2.uploader.upload(filePathResolved, {
            folder,
        });
        return result;
    }
    catch (error) {
        throw new AppError_1.default(error?.message || "Cloudinary upload failed", 500);
    }
};
exports.uploadToCloudinary = uploadToCloudinary;
// Upload from Buffer (MemoryStorage)
const uploadBufferToCloudinary = async (buffer, folder) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.v2.uploader.upload_stream({ folder }, (error, result) => {
            if (error || !result) {
                reject(new AppError_1.default(error?.message || "Buffer upload failed", 500));
            }
            else {
                resolve(result);
            }
        });
        stream.end(buffer);
    });
};
exports.uploadBufferToCloudinary = uploadBufferToCloudinary;
// Delete
const deleteFromCloudinary = async (publicId, resource_type = "image") => {
    if (!publicId) {
        throw new AppError_1.default("publicId is required", 400);
    }
    try {
        const result = await cloudinary_1.v2.uploader.destroy(publicId, {
            resource_type,
        });
        return result;
    }
    catch (error) {
        throw new AppError_1.default(error?.message || "Cloudinary delete failed", 500);
    }
};
exports.deleteFromCloudinary = deleteFromCloudinary;
//# sourceMappingURL=cloudinary.js.map