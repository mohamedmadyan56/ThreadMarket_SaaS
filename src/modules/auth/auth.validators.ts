import { z } from 'zod';

export const registerSchema = z.object({
  phone: z.string().regex(/^01[0-9]{9}$/, 'Must be a valid Egyptian phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  fullNameAr: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email().optional(),
  role: z.enum(['end_user', 'brand', 'delivery_company']).default('end_user'),
});

export const loginSchema = z.object({
  phone: z.string().regex(/^01[0-9]{9}$/, 'Must be a valid Egyptian phone number'),
  password: z.string().min(1, 'Password is required'),
});

export const verifyOtpSchema = z.object({
  phone: z.string().regex(/^01[0-9]{9}$/),
  otp: z.string().length(6, 'OTP must be 6 digits'),
});
