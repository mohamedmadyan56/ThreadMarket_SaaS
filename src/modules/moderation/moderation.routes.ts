import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/queue', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Moderation queue' }); });
router.post('/flag', (req, res) => { res.json({ message: 'Flag content' }); });
router.put('/review/:id', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Review flagged item' }); });

export default router;
