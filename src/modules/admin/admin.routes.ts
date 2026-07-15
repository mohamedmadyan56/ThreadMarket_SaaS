import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/dashboard', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Admin dashboard' }); });
router.get('/brands/pending', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Pending brands' }); });
router.post('/brands/:id/approve', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'Approve brand' }); });
router.get('/reports/gmv', authenticate, authorize('admin'), (req, res) => { res.json({ message: 'GMV report' }); });

export default router;
