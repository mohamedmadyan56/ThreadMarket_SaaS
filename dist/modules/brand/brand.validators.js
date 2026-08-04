"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrandDocumentsSchema = exports.updateBrandProfileSchema = exports.getBrandProfileSchema = exports.createBrandSchema = exports.brandVerificationStatusSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../generated/prisma/enums");
const booleanLikeSchema = zod_1.z.preprocess((value) => {
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "true")
            return true;
        if (lower === "false")
            return false;
    }
    return value;
}, zod_1.z.boolean().optional());
exports.brandVerificationStatusSchema = zod_1.z.object({
    brandId: zod_1.z.string().uuid({ message: "Invalid brand ID format" }),
});
exports.createBrandSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2, "Brand name is required"),
    location: zod_1.z.object({
        latitude: zod_1.z.number(),
        longitude: zod_1.z.number(),
    }),
});
exports.getBrandProfileSchema = zod_1.z.object({
    brandId: zod_1.z.string().uuid({ message: "Invalid brand ID format" }),
});
exports.updateBrandProfileSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(2, "Brand name must be at least 2 characters long")
        .optional(),
    isActive: booleanLikeSchema,
});
const brandDocTypeValues = Object.values(enums_1.BrandDocType);
const normalizeDocTypes = (value) => {
    if (typeof value === "string")
        return JSON.parse(value);
    if (Array.isArray(value))
        return value;
    return value;
};
exports.createBrandDocumentsSchema = zod_1.z
    .object({
    brandId: zod_1.z.string().uuid({ message: "Invalid brand ID format" }),
    docTypes: zod_1.z.preprocess(normalizeDocTypes, zod_1.z
        .array(zod_1.z.enum(brandDocTypeValues, { message: "Invalid document type" }))
        .nonempty("At least one document type is required")
        .min(1, "At least one document type is required")),
})
    .transform((data) => ({ ...data, docTypes: data.docTypes ?? [] }));
//# sourceMappingURL=brand.validators.js.map