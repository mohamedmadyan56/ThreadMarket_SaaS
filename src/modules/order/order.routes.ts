import { Router } from 'express';
import { authenticate } from '../../shared/middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => { res.json({ message: 'User orders' }); });
router.post('/', authenticate, (req, res) => { res.json({ message: 'Create order' }); });
router.get('/:id', authenticate, (req, res) => { res.json({ message: 'Order detail' }); });
router.put('/:id/status', authenticate, (req, res) => { res.json({ message: 'Update status' }); });
router.post('/:id/cancel', authenticate, (req, res) => { res.json({ message: 'Cancel order' }); });

export default router;
