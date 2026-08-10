# Local Development Guide

## Prerequisites
- Node.js >= 18.0.0
- npm >= 10.0.0
- PostgreSQL Database

## Environment Variables
Always copy `.env.example` to `.env` before running the applications locally.

## Workspaces
This monorepo uses npm workspaces managed by Turborepo.

### Common Commands:
- `npm run dev`: Starts all Next.js applications in parallel.
- `npm run typecheck`: Validates TypeScript strict mode across all apps and packages.
- `npm run lint`: Runs ESLint checks across all projects.
- `npm run build`: Executes production builds for all applications.

## Strict Coding Guidelines
- All packages and apps must strictly adhere to TypeScript strict mode.
- Shared UI components must be created in `packages/ui`.
- Never put hardcoded domain strings in components; use `NEXT_PUBLIC_*_URL` environment variables.
