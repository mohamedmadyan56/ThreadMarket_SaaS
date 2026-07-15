import { Router } from 'express';
import { authenticate, authorize } from '../../shared/middleware/auth';

const router = Router();

router.get('/', (req, res) => { res.json({ message: 'Product list' }); });
router.get('/:id', (req, res) => { res.json({ message: 'Product detail' }); });
router.post('/', authenticate, authorize('brand'), (req, res) => { res.json({ message: 'Create product' }); });
router.put('/:id', authenticate, authorize('brand'), (req, res) => { res.json({ message: 'Update product' }); });
router.delete('/:id', authenticate, authorize('brand'), (req, res) => { res.json({ message: 'Delete product' }); });
router.post('/bulk-upload', authenticate, authorize('brand'), (req, res) => { res.json({ message: 'Bulk upload' }); });

export default router;
