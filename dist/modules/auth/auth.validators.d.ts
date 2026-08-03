import { z } from "zod";
export declare const loginSchema: z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    identifier: string;
}, {
    password: string;
    identifier: string;
}>;
export declare const registerSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    username: string;
    password: string;
    phone?: string | undefined;
}, {
    email: string;
    username: string;
    password: string;
    phone?: string | undefined;
}>;
export declare const otpSchema: z.ZodObject<{
    token: z.ZodString;
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    otp: string;
    token: string;
}, {
    otp: string;
    token: string;
}>;
export declare const forgetPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    otp: string;
}, {
    email: string;
    password: string;
    otp: string;
}>;
//# sourceMappingURL=auth.validators.d.ts.map