import { z } from "zod";

export const createCategorySchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
    name: z.string().min(1, "Category name is required"),
    imageUrl: z.string().url("Invalid image URL format").optional(),

})