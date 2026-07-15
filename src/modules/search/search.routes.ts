import { Router } from 'express';

const router = Router();

router.get('/products', (req, res) => { res.json({ message: 'Search products' }); });
router.get('/brands', (req, res) => { res.json({ message: 'Search brands' }); });

export default router;
