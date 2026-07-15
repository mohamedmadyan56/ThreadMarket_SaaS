import app from './config/app';
import { env } from './config/env';
import { connectPostgres, connectMongo, connectRedis } from './config/database';

async function bootstrap() {
  try {
    await connectPostgres();
    await connectMongo();
    await connectRedis();

    app.listen(env.PORT, () => {
      console.log(`[Server] ThreadMarket running on port ${env.PORT} (${env.NODE_ENV})`);
      console.log(`[Server] Health check: http://localhost:${env.PORT}/health`);
    });
  } catch (err) {
    console.error('[Server] Failed to start:', err);
    process.exit(1);
  }
}

bootstrap();
