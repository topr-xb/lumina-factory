# Lumina Factory | مصنع الضوء

AI-powered visual identity cloning platform for e-commerce product photography.

> **صوّر البيئة مرة واحدة، واستنسخها مليون مرة.**

Lumina Factory is a SaaS platform that lets you capture the "Visual DNA" of any photo studio once, then inject that same lighting, shadows, color grading, and mood into thousands of new product images using `fal-ai/nano-banana-2/edit`.

---

## Core Principles

1. **Zero Hardcoding** — Prices, API endpoints, keys, and limits are read live from `system_configs` in Supabase.
2. **Usage-Based Billing** — Wallet + audit logs. Failed generations are refunded.
3. **Batch Queue** — BullMQ + Redis for parallel, throttled processing.
4. **Error Jail** — Failed nodes are isolated and can be regenerated individually.
5. **Dual UI** — Spatial Canvas (React Flow) + Data Grid.

---

## Tech Stack

- **Frontend:** Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui
- **Backend:** Next.js API Routes + Server Actions
- **Auth & DB:** Supabase (Auth + Postgres)
- **AI Engine:** fal.ai `nano-banana-2/edit`
- **Queue:** BullMQ + Redis / Upstash
- **Hosting:** Netlify

---

## Setup

### 1. Clone and install

```bash
git clone https://github.com/topr-xb/lumina-factory.git
cd lumina-factory
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
```

Fill in:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `FAL_KEY` | fal.ai API key |
| `REDIS_URL` | Redis / Upstash connection URL |

### 3. Apply database schema

Open `supabase/schema.sql` in the Supabase SQL Editor and run it.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  api/              # API routes (batches, cost, dna-profiles, upload)
  dashboard/        # Dashboard page
  dna-profiles/new/ # DNA Builder
  login/            # Login page
  signup/           # Signup page
  workspace/        # Batch creation + list
components/ui/      # shadcn/ui components
lib/
  auth.ts           # Auth helpers
  billing.ts        # Cost calculation + wallet
  config.ts         # Live config from system_configs
  fal.ts            # fal.ai payload constructor
  queue.ts          # BullMQ workers
  supabase/         # Supabase clients
supabase/schema.sql # Full DB schema
```

---

## Deploy

### Netlify

1. Connect the GitHub repository to Netlify.
2. Add all environment variables in **Site settings > Environment variables**.
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## Roadmap

- [x] Foundation: Next.js + Supabase schema + RLS
- [x] Auth + approval gate
- [x] DNA Builder
- [x] Dynamic cost calculator
- [x] Batch creation + queue
- [x] Error Jail + regenerate
- [ ] Spatial Canvas (React Flow)
- [ ] Admin panel
- [ ] Payment integration
- [ ] Landing page polish
