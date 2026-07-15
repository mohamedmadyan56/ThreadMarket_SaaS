import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/score/:userId', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Fraud score' }); });
router.post('/flag', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Flag user' }); });

export default router;
