import { Pool } from 'pg';
import { getPostgres } from '../../config/database';
import { UserRole } from '../../shared/types';

export interface UserRow {
  id: string;
  phone: string;
  email: string | null;
  password_hash: string | null;
  full_name_ar: string;
  full_name_en: string | null;
  role: UserRole;
  is_verified: boolean;
  preferred_language: 'ar' | 'en';
  created_at: Date;
  updated_at: Date;
}

export class UserModel {
  private db: Pool;

  constructor() {
    this.db = getPostgres();
  }

  async create(data: {
    phone: string;
    email?: string;
    passwordHash: string;
    fullNameAr: string;
    role: UserRole;
  }): Promise<UserRow> {
    const { rows } = await this.db.query<UserRow>(
      `INSERT INTO users (phone, email, password_hash, full_name_ar, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [data.phone, data.email || null, data.passwordHash, data.fullNameAr, data.role]
    );
    return rows[0];
  }

  async findByPhone(phone: string): Promise<UserRow | null> {
    const { rows } = await this.db.query<UserRow>(
      'SELECT * FROM users WHERE phone = $1',
      [phone]
    );
    return rows[0] || null;
  }

  async findById(id: string): Promise<UserRow | null> {
    const { rows } = await this.db.query<UserRow>(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
    return rows[0] || null;
  }

  async updateVerification(id: string, isVerified: boolean): Promise<void> {
    await this.db.query(
      'UPDATE users SET is_verified = $1, updated_at = NOW() WHERE id = $2',
      [isVerified, id]
    );
  }
}
