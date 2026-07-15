import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/companies', (req, res) => { res.json({ message: 'Delivery companies' }); });
router.post('/dispatch', authenticate, (req, res) => { res.json({ message: 'Dispatch order' }); });
router.put('/assignments/:id/status', authenticate, authorize('delivery_company', 'courier'), (req, res) => { res.json({ message: 'Update status' }); });
router.get('/tracking/:subOrderId', (req, res) => { res.json({ message: 'Live tracking' }); });
router.get('/zones', (req, res) => { res.json({ message: 'Delivery zones' }); });

export default router;
