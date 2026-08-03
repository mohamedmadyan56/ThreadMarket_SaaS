import { z } from "zod";

const booleanLikeSchema = z.preprocess((value) => {
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "true") return true;
    if (lower === "false") return false;
  }
  return value;
}, z.boolean().optional());

export const brandVerificationStatusSchema = z.object({
  brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});

export const createBrandSchema = z.object({
  name: z.string().trim().min(2, "Brand name is required"),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export const updateBrandProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Brand name must be at least 2 characters long")
    .optional(),
  isActive: booleanLikeSchema,
});
