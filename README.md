# diego-cerri

Consolidated repository for the Diego Cerri HR product.

## Layout

```
diego-cerri/
├── landing-page/              # Static landing site (HTML/CSS/JS)
├── employee-manager-portal/   # Next.js 14 employee & manager portal
└── backend-api/               # Express + TypeScript + Prisma API
```

Each folder is self-contained with its own `package.json`, `.gitignore`, and README. Commit history for each app is preserved — `git log -- <folder>` shows the full prior history.

## Local development

### Landing page

Static site — no build step.

```bash
cd landing-page
open index.html
```

### Employee / manager portal

```bash
cd employee-manager-portal
npm install
npm run dev
```

Requires Node.js 20+. See `employee-manager-portal/README.md` for details.

### Backend API

```bash
cd backend-api
cp .env.example .env         # fill in values
npm install
npm run prisma:migrate
npm run dev
```

Requires Node.js 20+ and a Postgres database. See `backend-api/README.md` for the full setup (Prisma, S3, auth, mail).

## History

This repo was created by merging three previously independent repos via `git subtree`:

- `landing-page/` ← `code-with-amin/diego-app`
- `employee-manager-portal/` ← `code-with-amin/diego-cerri-hr-app`
- `backend-api/` ← `code-with-amin/diego-cerri-hr-app-be`
