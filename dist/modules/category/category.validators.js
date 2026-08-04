"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    brandId: zod_1.z.string().uuid({ message: "Invalid brand ID format" }),
    name: zod_1.z.string().min(1, "Category name is required"),
    imageUrl: zod_1.z.string().url("Invalid image URL format").optional(),
});
//# sourceMappingURL=category.validators.js.map