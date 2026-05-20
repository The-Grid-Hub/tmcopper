# TM Copper Limited — Marketing Website

Single-page marketing site for **TM Copper Limited**, a specialist engineering firm focused on pipeline right-of-way erosion control in the Niger Delta, Nigeria.

## About

TM Copper provides engineering services to oil & gas operators across challenging swamp and riverine terrain in the Niger Delta. The site targets B2B clients — NNPC, Chevron Nigeria, Seplat Energy, Oando, Renaissance Africa Energy, and government infrastructure agencies.

**Core service disciplines:**
- Pipeline ROW erosion control (gully remediation, slope stabilization, pipeline exposure prevention)
- Civil & geotechnical engineering (gabion walls, riprap, geotextiles, sheet piling, drainage)
- Swamp & riverine engineering (canal stabilization, mangrove protection, creek crossings)
- Environmental protection & compliance (NUPRC, NOSDRA, FMEnv)
- Emergency washout repairs

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Contact form:** Resend SDK
- **Fonts:** Outfit (headings) + DM Sans (body) via `next/font`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build (runs TypeScript + ESLint checks)
npm run lint     # ESLint only
```

There are no tests configured. `npm run build` is the primary correctness check.

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=info@tmcopperltd.com   # optional, defaults to this value
```

Without `RESEND_API_KEY`, contact form submissions are logged server-side (safe for development).

## Project Structure

```
src/
  app/
    page.tsx              # Root page — composes all 11 sections in order
    layout.tsx            # Font loading, metadata
    api/contact/          # Contact form POST endpoint (Resend)
  components/
    sections/             # Hero, About, Vision, Services, Stats, Projects,
                          # Features, HSSE, Technology, Quality, Contacts
    layout/               # Header, Footer
  lib/
    constants.ts          # All site copy and content (single source of truth)
  hooks/                  # Custom React hooks
```

## Editing Content

All text copy, nav links, service descriptions, stats, project bullets, and contact details live in [`src/lib/constants.ts`](src/lib/constants.ts). Edit there — never hardcode strings inside components.
