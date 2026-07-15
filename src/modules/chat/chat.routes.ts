import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/conversations', authenticate, (req, res) => { res.json({ message: 'Conversations list' }); });
router.post('/conversations', authenticate, (req, res) => { res.json({ message: 'Create conversation' }); });

export default router;
