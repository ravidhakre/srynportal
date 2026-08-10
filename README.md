# SRYN MANAGEMENT PVT. LTD. — Enterprise Platform

Production-ready multi-business digital platform for **SRYN Management Pvt. Ltd.** operating across Corporate, Technology, FinServ, and Recruitment verticals.

---

## 🏛️ System Architecture Overview

```
                            sryn.online
                     SRYN MANAGEMENT PVT LTD
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
technology.sryn.online   finserv.sryn.online    recruitment.sryn.online
   SRYN Technology         SRYN FinServ            SRYN Recruitment
        │                       │                       │
        ▼                       ▼                       ▼
    Tech CRM               Finance CRM              Job Portal
        │                       │                       │
        └───────────────────────┼───────────────────────┘
                                ▼
                        admin.sryn.online
                           MASTER ADMIN
```

---

## 📁 Repository Structure

- `apps/`
  - `corporate`: Corporate Website (`www.sryn.online`)
  - `technology`: SRYN Technology Portal (`technology.sryn.online`)
  - `finserv`: SRYN FinServ Portal (`finserv.sryn.online`)
  - `recruitment`: SRYN Recruitment Portal (`recruitment.sryn.online`)
  - `master-admin`: Master Admin & Vertical Dashboards (`admin.sryn.online`)
- `packages/`
  - `ui`: Shared React UI components & Tailwind styling
  - `database`: PostgreSQL Prisma ORM database models & client singleton
  - `auth`: System roles, permissions, and Auth.js RBAC configuration
  - `crm`: Lead pipeline definitions & activity schemas
  - `notifications`: Notification channel dispatchers (In-App, Email, WhatsApp, SMS)
  - `storage`: Public & Private storage abstractions with signed temporary URLs
  - `analytics`: UTM tracking & analytics event parsers
  - `config`: Shared TypeScript, Tailwind, ESLint, and Zod environment schemas
- `docs/`: Technical & deployment documentation

---

## 🚀 Quick Start

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Copy environment variable template:
   ```bash
   cp .env.example .env
   ```

3. Run development servers:
   ```bash
   npm run dev
   ```

4. Ports mapping in development:
   - Corporate: `http://localhost:3000`
   - Technology: `http://localhost:3001`
   - FinServ: `http://localhost:3002`
   - Recruitment: `http://localhost:3003`
   - Master Admin: `http://localhost:3004`
