
import { z } from "zod";


export const loginSchema = z.object({
    identifier: z
        .string()
        .trim()
        .min(1, "Email or phone number is required")
        .max(100, "Email or phone number is too long")
        .refine((value) => {
            const isEmail = z.string().email().safeParse(value).success;
            const isPhone = /^01[0125][0-9]{8}$/.test(value);
            return isEmail || isPhone;
        }, {
            message: "Enter a valid email or phone number"
        }),
    password: z
        .string()
        .min(6,"Password must be at least 6 characters")
        .max(100,"Password is too long")

});