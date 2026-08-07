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
- `components/BlueprintMark.tsx` — the hero diagram (hand-built SVG)
- `app/globals.css` — base styles, focus states, reduced-motion handling
- `tailwind.config.ts` — color tokens and fonts

## Design direction

The site borrows the visual language of an architectural blueprint —
dashed structural lines, dimension marks, mono-spaced annotations — to
literalize the tagline "the right website for your business, nothing
more, nothing less." It's a deliberate alternative to the generic
cream/serif or near-black/neon looks that AI-generated sites default to.

Palette: Ink Navy `#0F1B2D`, Blueprint Blue `#1E3A5F`, Grid Line `#3D6D8C`,
Paper `#F5F3EC`, Signal Amber `#E8A33D`.

Type: Space Grotesk (display), Inter (body), IBM Plex Mono (labels, prices,
annotations).

## Making the contact form send emails

The form uses [Web3Forms](https://web3forms.com) — submissions get emailed
directly to your inbox with no backend server to host or maintain.

1. Go to https://web3forms.com and enter **palaganasjohnashley@gmail.com**.
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
