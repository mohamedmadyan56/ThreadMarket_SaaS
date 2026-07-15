import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => { res.json({ message: 'User notifications' }); });
router.put('/:id/read', authenticate, (req, res) => { res.json({ message: 'Mark as read' }); });

export default router;
