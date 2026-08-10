# Production Deployment Guide

## Target Platform: Vercel

### Subdomain Mapping:
1. `apps/corporate` -> `sryn.online` & `www.sryn.online`
2. `apps/technology` -> `technology.sryn.online`
3. `apps/finserv` -> `finserv.sryn.online`
4. `apps/recruitment` -> `recruitment.sryn.online`
5. `apps/master-admin` -> `admin.sryn.online`

## Vercel Monorepo Configuration
For each application project in Vercel:
- **Root Directory**: `apps/<app-name>` (e.g. `apps/corporate`)
- **Build Command**: `cd ../.. && npx turbo run build --filter=@sryn/<app-name>`
- **Output Directory**: `.next`

## Database Migrations
Run Prisma migrations on deployment:
```bash
npx prisma migrate deploy --schema=packages/database/prisma/schema.prisma
```
