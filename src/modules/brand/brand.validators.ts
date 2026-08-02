import { z } from "zod";

export const brandVerificationStatusSchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});

export const getBrandProfileSchema = z.object({
    brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});
