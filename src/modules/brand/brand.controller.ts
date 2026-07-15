import { Request, Response, NextFunction } from 'express';
import { BrandService } from './brand.service';
import { catchAsync } from '../../shared/utils/catchAsync';
import { AuthenticatedRequest } from '../../shared/types';

const brandService = new BrandService();

export const registerBrand = catchAsync(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { legalName, displayName } = req.body;
  const brand = await brandService.register(req.user.id, legalName, displayName);
  res.status(201).json({ status: 'success', data: { brand } });
});

export const getBrand = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const brand = await brandService.getProfile(req.params.id);
  res.status(200).json({ status: 'success', data: { brand } });
});

export const listBrands = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { page = 1, limit = 10, status } = req.query;
  const result = await brandService.list({ page: Number(page), limit: Number(limit), status: status as string });
  res.status(200).json({ status: 'success', ...result });
});

export const approveBrand = catchAsync(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { status } = req.body;
  const result = await brandService.verifyBrand(req.params.id, status);
  res.status(200).json({ status: 'success', ...result });
});
