import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/products/:id', (req, res) => { res.json({ message: 'Product reviews' }); });
router.get('/brands/:id', (req, res) => { res.json({ message: 'Brand reviews' }); });
router.post('/', authenticate, (req, res) => { res.json({ message: 'Create review' }); });

export default router;
