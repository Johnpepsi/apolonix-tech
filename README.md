# Apolonix Tech — marketing site

Next.js (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/page.tsx` — assembles the one-page site
- `components/` — Nav, Hero, Services, Pricing, Process, Contact, Footer
- `components/SiteMock.tsx` — the hero browser illustration (plain Tailwind divs)
- `app/globals.css` — base styles, focus states, reduced-motion handling
- `tailwind.config.ts` — color tokens and fonts

## Design direction

A bright, friendly light theme: white pages, soft mist-blue section
backgrounds, rounded cards, and one confident cobalt accent with mint
used sparingly for bullets. The hero shows a simplified browser window
to say what the business does: build websites.

Palette: Ink `#0F172A`, Cobalt `#2F5BFF`, Mint `#0FB586`, Mist `#F3F6FC`,
Edge `#DCE3EF`, Quiet `#55627A` (secondary text).

Type: Bricolage Grotesque (display) and DM Sans (body), loaded with
`next/font` in `app/layout.tsx`.

Reusable styles (`.label`, `.panel`, `.btn-primary`, `.btn-secondary`)
live in `app/globals.css`; colors and fonts live in `tailwind.config.ts`.

## Making the contact form send emails

The form uses [Web3Forms](https://web3forms.com) — submissions get emailed
directly to your inbox with no backend server to host or maintain.

1. Go to https://web3forms.com and enter **apolonixtech@gmail.com**.
2. It emails you an access key (a long string) — copy it.
3. Copy `.env.local.example` to a new file named `.env.local`.
4. Paste the key in: `NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here`
5. Restart `npm run dev` (env files are only read on startup).

Submit the form once to test it — you should get an email at
palaganasjohnashley@gmail.com within a few seconds. Check spam the first
time. If you deploy the site (e.g. to Vercel), add the same
`NEXT_PUBLIC_WEB3FORMS_KEY` variable in your hosting provider's environment
variable settings — `.env.local` never gets deployed.

## Editing content

- Prices and plan features: `components/Pricing.tsx`
- Service descriptions: `components/Services.tsx`
- Hero headline/story copy: `components/Hero.tsx`
- Contact form fields: `components/Contact.tsx` (currently front-end only —
  wire the `<form>` up to your email service or an API route to receive
  submissions)
# apolonix-tech
# apolonix-tech
