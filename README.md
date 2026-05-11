# Meridian Billing — Marketing Site

Premium dark marketing website for a behavioral health medical billing company. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 15 with App Router and Turbopack
- React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config.js`)
- `lucide-react` for icons
- Inter via `next/font`
- Resend (optional) for contact form email delivery

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>.

### Useful scripts

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run start      # Run production server
npm run lint       # Lint with ESLint flat config
npm run typecheck  # Run tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata / sitemap / OG. |
| `CONTACT_EMAIL_TO` | Where contact submissions are delivered. |
| `CONTACT_EMAIL_FROM` | Verified sending address (Resend). |
| `RESEND_API_KEY` | API key from <https://resend.com>. Optional in dev. |

In development, if no email provider is configured, contact submissions are logged to the console instead of failing.

## Project structure

```
src/
  app/                       # App Router routes
    api/contact/route.ts     # Contact form endpoint (POST)
    services/                # Services landing + specialty deep dive
    ...                      # about, compliance, pricing, faq, resources, contact, client-login
    sitemap.ts | robots.ts | opengraph-image.tsx
  components/
    navigation/              # Navbar, Footer, Logo
    sections/                # Hero, FeaturePillars, ProcessSteps, Testimonials, etc.
    forms/ContactForm.tsx
    ui/                      # Button, Card, Container, Section, Badge, PageHeader, SectionHeader
    StructuredData.tsx       # JSON-LD for org + service
  content/siteCopy.ts        # Centralized marketing copy (CMS-ready shape)
  lib/
    site.ts                  # Brand info, nav structure
    validation/contact.ts    # Server-side contact payload validation
    rateLimit.ts             # In-memory IP rate limit
    email.ts                 # Resend integration with safe fallback
    analytics.ts             # Pluggable analytics tracker (Plausible / GTM)
```

## Design system

Tokens live in `src/app/globals.css` under the Tailwind v4 `@theme` block:

- Surfaces: deep navy / slate / charcoal layers
- Accents: muted teal/cyan primary, subtle violet secondary for behavioral health context
- Typography: Inter with tabular numerals, tight tracking on headings
- Radii, shadows, and utility patterns (`bg-grid`, `glass`, `noise`, `text-gradient-accent`) are token-driven

Avoid:

- bright hospital blue
- generic doctor stock photography
- ECG line clichés

## Compliance posture

The site uses **HIPAA-aligned language only**. No certification claims are made. The compliance page describes operational safeguards (encryption, RBAC, BAAs, audit logging, incident response, training) and includes a clear disclaimer. Have legal review the page before publishing.

The contact form explicitly warns users not to submit PHI through the public form.

## Deployment

Optimized for Vercel:

1. Push the repo to GitHub
2. Import the project in Vercel
3. Set the environment variables above
4. Deploy

The OpenGraph image is rendered dynamically via `next/og` at the edge.
