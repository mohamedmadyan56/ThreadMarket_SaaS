# ThreadMarket — Multi-Vendor Fashion Marketplace

**Modular Monolith** architecture for a multi-vendor clothing marketplace SaaS platform connecting brands, retail shops, customers, and delivery partners across Egypt.

## Architecture: Modular Monolith

```
┌──────────────────────────────────────────────────────────────┐
│                    ThreadMarket API (Single Process)          │
│                                                              │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│   │  Auth   │  │  Brand  │  │ Product │  │  Order  │       │
│   │ Module  │  │ Module  │  │ Module  │  │ Module  │       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│   │ Payment │  │Delivery │  │  Chat   │  │  Notif  │       │
│   │ Module  │  │ Module  │  │ Module  │  │ Module  │       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│   │ Search  │  │ Ranking │  │ Review  │  │  Admin  │       │
│   │ Module  │  │ Module  │  │ Module  │  │ Module  │       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│   │ Wallet  │  │ Dispute │  │Moderation│  │  Fraud  │       │
│   │ Module  │  │ Module  │  │ Module   │  │ Module  │       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│                                                              │
│   ┌──────────────────────────────────────────────────────┐   │
│   │              Shared Kernel                            │   │
│   │   (Middleware · Types · Utils · Error Handler)         │   │
│   └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

### Why Modular Monolith?

| Aspect | Microservices | Modular Monolith (✅ Here) |
|--------|---------------|---------------------------|
| **Deployment** | 17 separate services | Single deployment |
| **Communication** | HTTP/RabbitMQ between services | In-process function calls |
| **Dev velocity** | Slow (coordination, infra) | Fast (one codebase) |
| **Scaling** | Per service | Vertical or clone |
| **MVP time** | Weeks | Days |
| **Modularity** | Yes | Yes (within code) |
| **Path to scale** | Already microservices | Split modules → services later |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js + TypeScript |
| **Framework** | Express 5 |
| **ORM (SQL)** | Prisma + PostgreSQL 16 |
| **ODM (NoSQL)** | Mongoose + MongoDB 7 |
| **Cache** | Redis 7 (ioredis) |
| **Validation** | Zod |
| **Auth** | JWT + Refresh Tokens |
| **Messaging** | RabbitMQ (for future async flows) |
| **Real-time** | Socket.io |
| **Storage** | MinIO / S3 |

## Project Structure

```
src/
├── server.ts                    # Entry point
├── config/
│   ├── env.ts                   # Environment config
│   ├── database.ts              # DB connections (PostgreSQL, MongoDB, Redis)
│   └── app.ts                   # Express app setup + route registration
├── shared/
│   ├── types/                   # Shared TypeScript types
│   ├── middleware/              # Auth, validation, error handling
│   ├── utils/                   # catchAsync, helpers
│   └── errors/                  # AppError class
└── modules/
    ├── auth/                    # Register, login, OTP, refresh tokens
    ├── brand/                   # Brand CRUD, verification, subscriptions
    ├── product/                 # Product catalog, variants, categories
    ├── order/                   # Orders, sub-orders, status lifecycle
    ├── payment/                 # Stripe, Paymob, COD, Fawry, refunds
    ├── delivery/                # Companies, couriers, zones, dispatching
    ├── cart/                    # Multi-brand cart, checkout
    ├── chat/                    # Real-time messaging (WebSocket)
    ├── notification/            # Push, SMS, Email, WhatsApp
    ├── search/                  # Full-text search (Elasticsearch)
    ├── ranking/                 # Brand scoring algorithm
    ├── review/                  # Product & brand ratings
    ├── admin/                   # Dashboard, reports, moderation
    ├── wallet/                  # In-app wallet, loyalty points
    ├── dispute/                 # Order disputes, resolution
    ├── moderation/              # Content moderation
    └── fraud/                   # Fraud detection, risk scoring
```

Each module follows the same pattern:

```
module/
├── module.routes.ts       # Express Router
├── module.controller.ts   # Request handlers
├── module.service.ts      # Business logic
├── module.model.ts        # Data access layer
└── module.validators.ts   # Zod schemas
```

## Module Communication

Modules communicate **in-process** (direct function calls), NOT via HTTP:

```
// auth/service.ts — other modules call this
export class AuthService {
  async getUser(id: string): Promise<User> { ... }
}

// order/service.ts — calls auth directly
const user = await authService.getUser(order.clientId);
```

For async flows (future), modules emit events via an internal EventBus:

```
EventBus.emit('order.placed', { orderId, total });
// Handled by: NotificationModule, DeliveryModule
```

## Quick Start

```bash
# Install
npm install

# Set up env
cp .env.example .env

# Start databases
docker compose up -d postgres mongo redis

# Run migrations
npm run db:migrate

# Start dev server
npm run dev
```

## API Overview

| Prefix | Module | Auth |
|--------|--------|------|
| `/api/v1/auth` | Authentication | ✗ |
| `/api/v1/brands` | Brand management | Mixed |
| `/api/v1/products` | Product catalog | Mixed |
| `/api/v1/orders` | Order lifecycle | ✓ |
| `/api/v1/payments` | Payment processing | Mixed |
| `/api/v1/delivery` | Delivery management | Mixed |
| `/api/v1/cart` | Shopping cart | ✓ |
| `/api/v1/chat` | Messaging | ✓ |
| `/api/v1/notifications` | Notifications | ✓ |
| `/api/v1/search` | Search | ✗ |
| `/api/v1/ranking` | Brand ranking | ✗ |
| `/api/v1/reviews` | Ratings & reviews | Mixed |
| `/api/v1/admin` | Admin panel | Admin |
| `/api/v1/wallet` | Wallet | ✓ |
| `/api/v1/disputes` | Disputes | ✓ |
| `/api/v1/moderation` | Content moderation | Admin |
| `/api/v1/fraud` | Fraud detection | Admin |

## Scaling Path

```
MVP (Modular Monolith) → Growth (Split hot modules) → Scale (Full microservices)
```

## License

MIT
