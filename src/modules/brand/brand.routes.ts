import { Router } from 'express';
import { registerBrand, getBrand, listBrands, approveBrand } from './brand.controller';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/', listBrands);
router.get('/:id', getBrand);
router.post('/', authenticate, authorize('brand'), registerBrand);
router.post('/:id/verify', authenticate, authorize('admin'), approveBrand);

export default router;
