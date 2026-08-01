import { z } from "zod";

export const brandVerificationStatusSchema = z.object({
  brandId: z.string().uuid({ message: "Invalid brand ID format" }),
});

export const createBrandSchema = z.object({
  name: z.string().nonempty("Brand name is required"),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});
