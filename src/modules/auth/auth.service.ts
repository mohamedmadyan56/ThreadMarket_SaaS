import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './auth.model';
import { AppError } from '../../shared/errors/AppError';
import { env } from '../../config/env';

export class AuthService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async register(data: {
    phone: string;
    password: string;
    fullNameAr: string;
    email?: string;
    role: 'end_user' | 'brand' | 'delivery_company';
  }) {
    const existing = await this.userModel.findByPhone(data.phone);
    if (existing) {
      throw new AppError('Phone number already registered', 409);
    }

    const passwordHash = await bcrypt.hash(data.password, 12);
    const user = await this.userModel.create({
      phone: data.phone,
      email: data.email,
      passwordHash,
      fullNameAr: data.fullNameAr,
      role: data.role,
    });

    const token = this.generateTokens(user.id, user.role);
    return { user: this.sanitizeUser(user), ...token };
  }

  async login(phone: string, password: string) {
    const user = await this.userModel.findByPhone(phone);
    if (!user) throw new AppError('Invalid credentials', 401);

    const isValid = await bcrypt.compare(password, user.password_hash!);
    if (!isValid) throw new AppError('Invalid credentials', 401);

    const token = this.generateTokens(user.id, user.role);
    return { user: this.sanitizeUser(user), ...token };
  }

  async verifyOtp(phone: string, otp: string) {
    const user = await this.userModel.findByPhone(phone);
    if (!user) throw new AppError('User not found', 404);

    await this.userModel.updateVerification(user.id, true);
    return this.sanitizeUser(user);
  }

  private generateTokens(userId: string, role: string) {
    const accessToken = jwt.sign(
      { id: userId, role },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN as any }
    );

    const refreshToken = jwt.sign(
      { id: userId },
      env.JWT_REFRESH_SECRET,
      { expiresIn: env.JWT_REFRESH_EXPIRES_IN as any }
    );

    return { accessToken, refreshToken };
  }

  private sanitizeUser(user: any) {
    const { password_hash, ...rest } = user;
    return rest;
  }
}
