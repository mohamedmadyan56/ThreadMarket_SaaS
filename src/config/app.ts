import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { globalErrorHandler } from '../shared/middleware/errorHandler';
import { AppError } from '../shared/errors/AppError';
import { env } from './env';

import authRoutes from '../modules/auth/auth.routes';
import brandRoutes from '../modules/brand/brand.routes';
import productRoutes from '../modules/product/product.routes';
import orderRoutes from '../modules/order/order.routes';
import paymentRoutes from '../modules/payment/payment.routes';
import deliveryRoutes from '../modules/delivery/delivery.routes';
import cartRoutes from '../modules/cart/cart.routes';
import chatRoutes from '../modules/chat/chat.routes';
import notificationRoutes from '../modules/notification/notification.routes';
import searchRoutes from '../modules/search/search.routes';
import rankingRoutes from '../modules/ranking/ranking.routes';
import reviewRoutes from '../modules/review/review.routes';
import adminRoutes from '../modules/admin/admin.routes';
import walletRoutes from '../modules/wallet/wallet.routes';
import disputeRoutes from '../modules/dispute/dispute.routes';
import moderationRoutes from '../modules/moderation/moderation.routes';
import fraudRoutes from '../modules/fraud/fraud.routes';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { status: 'fail', message: 'Too many requests' },
});
app.use('/api', limiter);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/brands', brandRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/delivery', deliveryRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/chat', chatRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/search', searchRoutes);
app.use('/api/v1/ranking', rankingRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/wallet', walletRoutes);
app.use('/api/v1/disputes', disputeRoutes);
app.use('/api/v1/moderation', moderationRoutes);
app.use('/api/v1/fraud', fraudRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.all('*', (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
