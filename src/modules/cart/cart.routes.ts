import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => { res.json({ message: 'Get cart' }); });
router.post('/items', authenticate, (req, res) => { res.json({ message: 'Add to cart' }); });
router.delete('/items/:id', authenticate, (req, res) => { res.json({ message: 'Remove from cart' }); });
router.post('/checkout', authenticate, (req, res) => { res.json({ message: 'Checkout' }); });

export default router;
