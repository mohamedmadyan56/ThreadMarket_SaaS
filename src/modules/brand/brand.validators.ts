import { z } from "zod";

export const brandVerificationStatusSchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});

export const getBrandProfileSchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});

export const deleteBrandCategorySchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
    catId: z.string().uuid({ message: "Invalid category ID format" }),
});