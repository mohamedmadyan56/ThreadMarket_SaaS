import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { catchAsync } from '../../shared/utils/catchAsync';
import { registerSchema, loginSchema, verifyOtpSchema } from './auth.validators';

const authService = new AuthService();

export const register = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const data = registerSchema.parse(req.body);
  const result = await authService.register(data);
  res.status(201).json({ status: 'success', data: result });
});

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const data = loginSchema.parse(req.body);
  const result = await authService.login(data.phone, data.password);
  res.status(200).json({ status: 'success', data: result });
});

export const verifyOtp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const data = verifyOtpSchema.parse(req.body);
  const user = await authService.verifyOtp(data.phone, data.otp);
  res.status(200).json({ status: 'success', data: { user } });
});
