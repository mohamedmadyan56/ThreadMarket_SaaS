# FashionConnect — System Design Document

---

## 1. Architecture Overview

**Style**: Microservices + Event-Driven Architecture  
**Communication**: REST (sync) + RabbitMQ/Kafka (async events)  
**Frontend**: Next.js (SSR for SEO) + React Native (mobile)  
**Container Orchestration**: Docker + Kubernetes  
**Storage**: PostgreSQL + MongoDB + Redis + Elasticsearch + S3/MinIO

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                           │
│    Web (Next.js)     Mobile (RN)    Delivery App (RN)      │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS/WSS
┌──────────────────────────▼──────────────────────────────────┐
│                    API Gateway (Kong/Nginx)                  │
│         Rate Limiting · Auth · Routing · Throttling         │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    Service Layer                             │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Auth   │  │  Brand   │  │ Product  │  │  Order   │    │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Payment  │  │Delivery  │  │  Chat    │  │Notification│   │
│  │ Service  │  │ Service  │  │ Service  │  │ Service   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Search   │  │ Ranking  │  │  Review  │  │  Admin   │    │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  Wallet  │  │ Dispute  │  │Moderation│                   │
│  │ Service  │  │ Service  │  │ Service  │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                   Message Broker (RabbitMQ)                  │
│     Events: order.created, payment.confirmed, delivery.*    │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    Data Layer                                │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │PostgreSQL│  │ MongoDB  │  │  Redis   │  │Elasticsearch│  │
│  │ (Orders, │  │(Catalog, │  │(Cache,   │  │ (Search,   │  │
│  │  Users,  │  │ Categories│  │ Session, │  │  Logs)     │  │
│  │  Finance)│  │ )        │  │ Real-time)│  │            │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐                                               │
│  │MinIO/S3  │                                               │
│  │ (Images, │                                               │
│  │  Docs)   │                                               │
│  └──────────┘                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Service Breakdown

### 2.1 Auth Service
- **Role**: Authentication, authorization, OTP, SSO
- **Endpoints**: `/auth/register`, `/auth/login`, `/auth/verify-otp`, `/auth/refresh`
- **Storage**: PostgreSQL (`users` table with role enum)
- **Notes**: SMS OTP primary (WhatsApp/email fallback), JWT + refresh tokens
- **Tables**: `users`, `roles`, `permissions`, `refresh_tokens`, `otp_codes`

### 2.2 Brand Service
- **Role**: Brand CRUD, verification workflow, subscription tiers
- **Endpoints**: `/brands`, `/brands/{id}/verify`, `/brands/{id}/documents`
- **Storage**: PostgreSQL (`brands`, `brand_documents`, `brand_subscriptions`)
- **Notes**: Multi-tier verification (Pending → Basic → Trusted), document upload to S3

### 2.3 Product Service
- **Role**: Product CRUD, categories, variants, inventory, bulk CSV
- **Endpoints**: `/products`, `/products/{id}/variants`, `/categories`, `/products/bulk-upload`
- **Storage**: MongoDB (product catalog, flexible schema for variants) + PostgreSQL (inventory, SKU tracking)
- **Notes**: Variants (size/color) with per-variant stock, soft-delete, low-stock alerts

### 2.4 Cart Service
- **Role**: Multi-brand cart management
- **Endpoints**: `/cart`, `/cart/items`, `/cart/checkout`
- **Storage**: Redis (active carts, fast read/write) + PostgreSQL (persisted carts)
- **Notes**: Cart supports items from multiple brands → split into per-brand sub-orders at checkout

### 2.5 Order Service
- **Role**: Order lifecycle, sub-order splitting, status management
- **Endpoints**: `/orders`, `/orders/{id}/sub-orders`, `/orders/{id}/status`
- **Storage**: PostgreSQL (`orders`, `sub_orders`, `order_items`, `order_status_history`)
- **Notes**: Order → Sub-Order per brand, each sub-order has its own delivery, status tracking

### 2.6 Payment Service
- **Role**: Stripe (intl), Paymob (local), COD, Fawry, installments (valU/Aman), wallet
- **Endpoints**: `/payments/charge`, `/payments/callback/{provider}`, `/payments/refund`
- **Storage**: PostgreSQL (`transactions`, `payment_methods`, `payouts`)
- **Notes**: COD reconciliation is critical — track cash collected vs. remitted. Payout engine for brands.

### 2.7 Delivery Service
- **Role**: Delivery company onboarding, order dispatch, courier assignment, fee calculation
- **Endpoints**: `/delivery/companies`, `/delivery/dispatch`, `/delivery/tracking`
- **Storage**: PostgreSQL (`delivery_companies`, `couriers`, `delivery_assignments`, `delivery_zones`)
- **Notes**: Fee calculation by governorate/zone/weight, auto-assignment rules engine, multi-courier fallback

### 2.8 Chat Service
- **Role**: Real-time chat between user ↔ brand (pre-sale, order support)
- **Endpoints**: WebSocket (Socket.io or WS), `/chat/conversations`, `/chat/messages`
- **Storage**: MongoDB (chat history, flexible schema)
- **Notes**: Flagged message moderation, chat history persistence

### 2.9 Notification Service
- **Role**: Push, WhatsApp Business API, SMS (Twilio/Ooredoo), Email
- **Events consumed**: `order.*`, `payment.*`, `delivery.*`, `chat.*`
- **Storage**: PostgreSQL (`notifications`, `notification_templates`)
- **Notes**: WhatsApp-first for Egypt, SMS OTP fallback, notification preferences per user

### 2.10 Search Service
- **Role**: Full-text search for products, brands, categories
- **Endpoints**: `/search/products`, `/search/brands`
- **Storage**: Elasticsearch (indexed from Product/Brand services via events)
- **Notes**: Arabic stemmer support, faceted search (category, price range, rating, verified)

### 2.11 Ranking Service
- **Role**: Brand ranking score calculation
- **Endpoints**: `/ranking/brands`, `/ranking/score/{brandId}`
- **Storage**: PostgreSQL (ranking config, weights) + Redis (cached scores)
- **Notes**: Scheduled job (daily) recalculates scores. Formula from README section 3.4.

### 2.12 Review Service
- **Role**: Product & brand ratings and reviews
- **Endpoints**: `/reviews/products/{id}`, `/reviews/brands/{id}`
- **Storage**: PostgreSQL (`reviews`, `review_images`)
- **Notes**: Photo/video evidence in disputes, verified purchase badge on reviews

### 2.13 Admin Service
- **Role**: Admin dashboard, reports, analytics, sub-admin management
- **Endpoints**: `/admin/dashboard`, `/admin/reports`, `/admin/brands/approve`
- **Storage**: PostgreSQL (reports, analytics materialized views, admin audit log)
- **Notes**: Role-based sub-admins (finance, support, operations)

### 2.14 Wallet Service
- **Role**: In-app wallet for refunds, cashback, loyalty points
- **Endpoints**: `/wallet/balance`, `/wallet/transactions`, `/wallet/refund`
- **Storage**: PostgreSQL (`wallets`, `wallet_transactions`)
- **Notes**: Instant refund-to-wallet, loyalty points earn/burn

### 2.15 Dispute Service
- **Role**: Order disputes, chat abuse reports, fake product reports
- **Endpoints**: `/disputes`, `/disputes/{id}/resolve`
- **Storage**: PostgreSQL (`disputes`, `dispute_evidence`, `dispute_messages`)
- **Notes**: Photo/video evidence, admin resolution workflow

### 2.16 Content Moderation Service
- **Role**: Flagged chat messages, product image/text moderation
- **Endpoints**: `/moderation/queue`, `/moderation/flag`, `/moderation/review`
- **Storage**: PostgreSQL (moderation queue, flagged items)
- **Notes**: AI-assisted (image moderation via AWS Rekognition/Google Vision), manual review fallback

### 2.17 Fraud/Risk Service
- **Role**: Fraud detection, COD trust score, abnormal pattern detection
- **Endpoints**: `/risk/score/{userId}`, `/risk/flag`
- **Storage**: PostgreSQL + Redis (real-time counters)
- **Notes**: Rule-based + ML scoring, COD refusal rate tracking, card-testing detection

---

## 3. Data Model (Core Tables — PostgreSQL)

### 3.1 Users
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    full_name_ar VARCHAR(100) NOT NULL,
    full_name_en VARCHAR(100),
    role ENUM('admin', 'sub_admin', 'brand', 'end_user', 'delivery_company', 'courier'),
    is_verified BOOLEAN DEFAULT FALSE,
    preferred_language ENUM('ar', 'en') DEFAULT 'ar',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3.2 Brands
```sql
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    legal_name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    commercial_registration VARCHAR(100),
    tax_id VARCHAR(100),
    owner_national_id VARCHAR(100),
    bank_iban VARCHAR(50),
    verification_status ENUM('pending', 'basic_verified', 'trusted_verified') DEFAULT 'pending',
    subscription_tier ENUM('starter', 'growth', 'enterprise') DEFAULT 'starter',
    commission_rate DECIMAL(5,2),
    rating DECIMAL(2,1) DEFAULT 0,
    logo_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3.3 Products (MongoDB Document)
```json
{
  "_id": ObjectId,
  "brand_id": UUID,
  "name_ar": "قميص قطني",
  "name_en": "Cotton Shirt",
  "description_ar": "...",
  "description_en": "...",
  "category_ids": [ObjectId, ObjectId],
  "variants": [
    {
      "sku": "BRD-SHIRT-BLK-L",
      "size": "L",
      "color": "Black",
      "price": 450.00,
      "stock": 50,
      "images": ["url1", "url2"]
    }
  ],
  "tags": ["casual", "summer"],
  "is_active": true,
  "created_at": ISODate
}
```

### 3.4 Orders
```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    status ENUM('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2),
    payment_status ENUM('unpaid', 'paid', 'refunded', 'partial_refund') DEFAULT 'unpaid',
    payment_method ENUM('card_stripe', 'card_paymob', 'wallet', 'cod', 'fawry', 'installment'),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE sub_orders (
    id UUID PRIMARY KEY,
    order_id UUID REFERENCES orders(id),
    brand_id UUID REFERENCES brands(id),
    status ENUM('pending', 'accepted', 'preparing', 'ready', 'picked_up', 'in_transit', 'delivered', 'returned', 'cancelled'),
    delivery_fee DECIMAL(10,2),
    cod_amount DECIMAL(10,2),
    brand_earnings DECIMAL(10,2),
    platform_commission DECIMAL(10,2),
    delivery_company_id UUID REFERENCES delivery_companies(id),
    courier_id UUID REFERENCES couriers(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3.5 Delivery Zones
```sql
CREATE TABLE delivery_zones (
    id UUID PRIMARY KEY,
    name_ar VARCHAR(100) NOT NULL,
    name_en VARCHAR(100) NOT NULL,
    governorate VARCHAR(100) NOT NULL,
    base_fee DECIMAL(10,2) NOT NULL,
    per_km_fee DECIMAL(5,2) DEFAULT 0,
    estimated_days_min INT,
    estimated_days_max INT,
    is_active BOOLEAN DEFAULT TRUE
);
```

---

## 4. API Design (Key Endpoints)

### Auth (`/api/v1/auth`)
| Method | Path | Description |
|--------|------|-------------|
| POST | `/register` | Register (phone OTP) |
| POST | `/verify-otp` | Verify phone |
| POST | `/login` | Login (phone/email + password) |
| POST | `/refresh` | Refresh token |
| POST | `/logout` | Invalidate session |

### Brands (`/api/v1/brands`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | List brands (public, ranked) |
| GET | `/{id}` | Brand profile |
| POST | `/` | Register brand (brand only) |
| PUT | `/{id}` | Update brand |
| POST | `/{id}/verify` | Submit verification docs |
| GET | `/{id}/analytics` | Brand analytics (brand/admin) |

### Products (`/api/v1/products`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | List products (filtered, paginated) |
| GET | `/{id}` | Product detail with variants |
| POST | `/` | Create product (brand) |
| PUT | `/{id}` | Update product |
| DELETE | `/{id}` | Soft-delete product |
| POST | `/bulk-upload` | CSV bulk upload |

### Orders (`/api/v1/orders`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | List user's orders |
| POST | `/` | Create order (from cart) |
| GET | `/{id}` | Order detail + sub-orders |
| PUT | `/{id}/status` | Update order status |
| POST | `/{id}/cancel` | Cancel order |

### Delivery (`/api/v1/delivery`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/companies` | List delivery companies |
| POST | `/dispatch` | Dispatch order to delivery co. |
| PUT | `/assignments/{id}/status` | Update delivery status |
| GET | `/tracking/{subOrderId}` | Live tracking |
| GET | `/zones` | List delivery zones with fees |

### Chat (`/api/v1/chat`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/conversations` | List user's conversations |
| POST | `/conversations` | Create conversation |
| WS | `/ws` | WebSocket for real-time messaging |

### Payments (`/api/v1/payments`)
| Method | Path | Description |
|--------|------|-------------|
| POST | `/charge` | Initiate payment |
| POST | `/callback/stripe` | Stripe webhook |
| POST | `/callback/paymob` | Paymob webhook |
| POST | `/refund` | Initiate refund |
| GET | `/payouts/brands/{id}` | Brand payout history |

### Admin (`/api/v1/admin`)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/dashboard` | Aggregated platform metrics |
| GET | `/brands/pending` | Pending verification queue |
| POST | `/brands/{id}/approve` | Approve/reject brand |
| GET | `/reports/gmv` | GMV report |
| GET | `/reports/delivery-sla` | Delivery SLA report |
| PUT | `/ranking/weights` | Adjust ranking weights |

---

## 5. Event Flow (Key Scenarios)

### 5.1 Order Placement
```
Cart Service → Order Service → Payment Service
                                   │
                          ┌────────▼────────┐
                          │  Payment OK?    │
                          └──┬──────────┬───┘
                          No │          │ Yes
                             ▼          ▼
                      Order Cancelled  Order Confirmed
                                       │
                                ┌──────▼──────┐
                                │  Event Bus   │
                                └──┬───┬───┬──┘
                                   │   │   │
                          ┌────────┘   │   └────────┐
                          ▼            ▼            ▼
                   Notification   Delivery    Brand Service
                   Service        Service     (notify brand)
```

### 5.2 Delivery Lifecycle
```
Delivery Service dispatches to delivery company API
       │
       ▼
Courier assigned (auto or manual)
       │
       ▼
Courier picks up → updates status: "picked_up"
       │
       ▼
Courier in transit → updates GPS
       │
       ▼
Delivered → OTP/Signature + Photo confirmation
       │
       ▼
COD collected: triggers reconciliation
       │
       ▼
Payment Service: mark COD as collected → brand payout
```

### 5.3 Brand Verification
```
Brand submits verification docs (S3)
       │
       ▼
Event: brand.verification.submitted
       │
       ▼
Admin dashboard updates (pending queue)
       │
       ▼
Admin reviews (manual + optional AI doc check)
       │
       ▼
Approve/Reject → Event emitted
       │
       ▼
Notification Service → brand is notified
       │
       ▼
Brand goes live or resubmits docs
```

---

## 6. Tech Stack Recommendations

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Web** | Next.js 14 (App Router) | SSR for SEO, RTL/Arabic support, TypeScript |
| **Frontend Mobile** | React Native (Expo) | Shared TS types with web, fast iteration |
| **Backend** | Node.js + NestJS | TypeScript, decorators, module system, microservices-ready |
| **API Gateway** | Kong / Nginx + Lua | Rate limiting, auth, routing, transformation |
| **Database (Transactional)** | PostgreSQL 16 | ACID, JSONB, excellent for orders/finance |
| **Database (Catalog)** | MongoDB 7 | Flexible schema for product variants/categories |
| **Cache** | Redis 7 | Session, cart, ranking cache, pub/sub |
| **Search** | Elasticsearch 8 | Full-text with Arabic support, faceted search |
| **Message Broker** | RabbitMQ | Reliable delivery, dead-letter queues, RPC |
| **Object Storage** | MinIO (self-hosted) / AWS S3 | Product images, verification docs |
| **Container** | Docker + Kubernetes | Scalability, self-healing, rolling updates |
| **Monitoring** | Prometheus + Grafana | Metrics, dashboards, alerts |
| **Logging** | ELK Stack (Elasticsearch, Logstash, Kibana) | Centralized logging |
| **CI/CD** | GitHub Actions + ArgoCD | CI pipelines, GitOps deployment |
| **CDN** | Cloudflare / AWS CloudFront | Image optimization, caching, DDoS protection |
| **SMS/WhatsApp** | Twilio / Ooredoo API | OTP, notifications, WhatsApp Business API |
| **Payment** | Stripe + Paymob SDK | International + local payment methods |

---

## 7. Security Considerations

- **JWT with refresh tokens** — short-lived access tokens (15 min), long-lived refresh (7 days)
- **Role-based access control (RBAC)** — per-endpoint authorization middleware
- **API Rate Limiting** — per user/IP, tiered by endpoint sensitivity
- **Encryption at rest** — PostgreSQL TDE, S3 server-side encryption
- **Encryption in transit** — TLS 1.3 for all external + internal service communication
- **Webhook signature verification** — validate Stripe/Paymob webhooks with HMAC
- **Input sanitization** — XSS prevention, SQL injection via parameterized queries
- **GDPR/Law 151 compliance** — data retention policies, user data export/deletion

---

## 8. Scaling Strategy

| Phase | Users | Orders/mo | Infrastructure |
|-------|-------|-----------|----------------|
| **MVP** | 1K | 500 | Monolith + single PG + Redis |
| **Growth** | 50K | 25K | Microservices split, read replicas, Elasticsearch |
| **Scale** | 500K | 250K | Kubernetes, sharding, CDN, event-driven async |
| **Enterprise** | 2M+ | 1M+ | Multi-region, CQRS, data lake for analytics |

---

*This document is a technical system design complementing the functional README. It should be used as the starting point for sprint-zero architecture discussions.*
