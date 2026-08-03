"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.forgetPasswordSchema = exports.otpSchema = exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    identifier: zod_1.z.string().nonempty("Email or phone number is required"),
    password: zod_1.z.string().min(6),
});
exports.registerSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(2, "Username must be at least 2 characters long")
        .nonempty("Username is required"),
    email: zod_1.z
        .string()
        .email("Please enter a valid email address")
        .nonempty("Email is required"),
    password: zod_1.z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .nonempty("Password is required"),
    phone: zod_1.z.string().optional(),
});
exports.otpSchema = zod_1.z.object({
    token: zod_1.z.string().nonempty("Token is required"),
    otp: zod_1.z.string().length(5).nonempty("OTP is required"),
});
exports.forgetPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email().nonempty("Email is required"),
});
exports.resetPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email().nonempty("Email is required"),
    otp: zod_1.z.string().length(5).nonempty("OTP is required"),
    password: zod_1.z.string().min(6).nonempty("Password is required"),
});
//# sourceMappingURL=auth.validators.js.map