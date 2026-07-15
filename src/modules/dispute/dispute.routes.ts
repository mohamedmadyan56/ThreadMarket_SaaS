import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => { res.json({ message: 'User disputes' }); });
router.post('/', authenticate, (req, res) => { res.json({ message: 'Create dispute' }); });
router.put('/:id/resolve', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Resolve dispute' }); });

export default router;
