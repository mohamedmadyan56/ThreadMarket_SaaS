import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/balance', authenticate, (req, res) => { res.json({ message: 'Wallet balance' }); });
router.get('/transactions', authenticate, (req, res) => { res.json({ message: 'Transactions' }); });
router.post('/refund', authenticate, (req, res) => { res.json({ message: 'Refund to wallet' }); });

export default router;
