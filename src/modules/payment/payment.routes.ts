import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.post('/charge', authenticate, (req, res) => { res.json({ message: 'Initiate payment' }); });
router.post('/callback/stripe', (req, res) => { res.json({ message: 'Stripe webhook' }); });
router.post('/callback/paymob', (req, res) => { res.json({ message: 'Paymob webhook' }); });
router.post('/refund', authenticate, (req, res) => { res.json({ message: 'Refund' }); });
router.get('/payouts/brands/:id', authenticate, (req, res) => { res.json({ message: 'Brand payouts' }); });

export default router;
