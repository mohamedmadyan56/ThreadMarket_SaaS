import { Request } from 'express';

export type UserRole = 'admin' | 'sub_admin' | 'brand' | 'end_user' | 'delivery_company' | 'courier';

export type BrandVerificationStatus = 'pending' | 'basic_verified' | 'trusted_verified';
export type SubscriptionTier = 'starter' | 'growth' | 'enterprise';
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
export type PaymentMethod = 'card_stripe' | 'card_paymob' | 'wallet' | 'cod' | 'fawry' | 'installment';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded' | 'partial_refund';

export interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    role: UserRole;
    phone: string;
  };
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
  sort?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
