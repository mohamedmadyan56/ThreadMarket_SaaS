import { BrandModel } from './brand.model';
import { AppError } from '../../shared/errors/AppError';

export class BrandService {
  private brandModel: BrandModel;

  constructor() {
    this.brandModel = new BrandModel();
  }

  async register(userId: string, legalName: string, displayName: string) {
    const existing = await this.brandModel.findByUserId(userId);
    if (existing) throw new AppError('Brand already registered for this user', 409);

    return this.brandModel.create({ userId, legalName, displayName });
  }

  async getProfile(id: string) {
    const brand = await this.brandModel.findById(id);
    if (!brand) throw new AppError('Brand not found', 404);
    return brand;
  }

  async list(filters: { page: number; limit: number; status?: string }) {
    return this.brandModel.list(filters);
  }

  async verifyBrand(id: string, status: 'basic_verified' | 'trusted_verified') {
    const brand = await this.brandModel.findById(id);
    if (!brand) throw new AppError('Brand not found', 404);
    await this.brandModel.updateVerification(id, status);
    return { message: `Brand ${status === 'basic_verified' ? 'basic' : 'trusted'} verified` };
  }
}
