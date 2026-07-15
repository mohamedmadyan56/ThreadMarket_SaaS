import { Router } from 'express';
import { register, login, verifyOtp } from './auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOtp);
router.post('/refresh', login);
router.post('/logout', login);

export default router;
