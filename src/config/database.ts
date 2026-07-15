import { Pool } from 'pg';
import mongoose from 'mongoose';
import Redis from 'ioredis';
import { env } from './env';

let pgPool: Pool;
let mongoConnection: typeof mongoose;
let redisClient: Redis;

export async function connectPostgres(): Promise<Pool> {
  pgPool = new Pool({ connectionString: env.POSTGRES_URL });
  await pgPool.connect();
  console.log('[DB] PostgreSQL connected');
  return pgPool;
}

export async function connectMongo(): Promise<void> {
  mongoConnection = await mongoose.connect(env.MONGO_URL);
  console.log('[DB] MongoDB connected');
}

export async function connectRedis(): Promise<Redis> {
  redisClient = new Redis(env.REDIS_URL);
  console.log('[DB] Redis connected');
  return redisClient;
}

export function getPostgres(): Pool {
  if (!pgPool) throw new Error('PostgreSQL not initialized');
  return pgPool;
}

export function getRedis(): Redis {
  if (!redisClient) throw new Error('Redis not initialized');
  return redisClient;
}
