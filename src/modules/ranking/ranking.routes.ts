import { Router } from 'express';

const router = Router();

router.get('/brands', (req, res) => { res.json({ message: 'Brand ranking' }); });
router.get('/score/:brandId', (req, res) => { res.json({ message: 'Brand score' }); });

export default router;
