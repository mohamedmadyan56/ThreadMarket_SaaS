import { Pool } from 'pg';
import { getPostgres } from '../../config/database';
import { BrandVerificationStatus, SubscriptionTier } from '../../shared/types';

export interface BrandRow {
  id: string;
  user_id: string;
  legal_name: string;
  display_name: string;
  commercial_registration: string | null;
  tax_id: string | null;
  verification_status: BrandVerificationStatus;
  subscription_tier: SubscriptionTier;
  commission_rate: number;
  rating: number;
  logo_url: string | null;
  is_active: boolean;
  created_at: Date;
}

export class BrandModel {
  private db: Pool;

  constructor() {
    this.db = getPostgres();
  }

  async create(data: {
    userId: string;
    legalName: string;
    displayName: string;
  }): Promise<BrandRow> {
    const { rows } = await this.db.query<BrandRow>(
      `INSERT INTO brands (user_id, legal_name, display_name)
       VALUES ($1, $2, $3) RETURNING *`,
      [data.userId, data.legalName, data.displayName]
    );
    return rows[0];
  }

  async findById(id: string): Promise<BrandRow | null> {
    const { rows } = await this.db.query<BrandRow>(
      'SELECT * FROM brands WHERE id = $1',
      [id]
    );
    return rows[0] || null;
  }

  async findByUserId(userId: string): Promise<BrandRow | null> {
    const { rows } = await this.db.query<BrandRow>(
      'SELECT * FROM brands WHERE user_id = $1',
      [userId]
    );
    return rows[0] || null;
  }

  async list(filters: { page: number; limit: number; status?: string }) {
    const offset = (filters.page - 1) * filters.limit;
    const where = filters.status && filters.status !== 'all' ? 'WHERE verification_status = $1' : '';
    const params = filters.status && filters.status !== 'all' ? [filters.status] : [];

    const { rows } = await this.db.query<BrandRow>(
      `SELECT * FROM brands ${where} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, filters.limit, offset]
    );
    const { rows: countRows } = await this.db.query<{ count: string }>(
      `SELECT COUNT(*) FROM brands ${where}`, params
    );

    return { data: rows, total: parseInt(countRows[0].count, 10) };
  }

  async updateVerification(id: string, status: BrandVerificationStatus): Promise<void> {
    await this.db.query(
      'UPDATE brands SET verification_status = $1, updated_at = NOW() WHERE id = $2',
      [status, id]
    );
  }
}
