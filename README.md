# Z11 Travessia — Landing Page

Institutional landing page for Z11 Travessia (boat expeditions in southern Florianópolis, Brazil).

## Stack

- [Astro](https://astro.build) (static output)
- Deploy: [Vercel](https://vercel.com)
- Fonts: Cormorant Garamond + DM Sans (Google Fonts)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Assets

The page assets (images) were decoded from a bundled HTML file via `npm run extract`. To regenerate:

```bash
# Place the original bundle at the project root, then:
npm run extract
```

## Placeholder content

Items to replace once the owners (Kaio & Gabriel) confirm:

- WhatsApp number (`5548900000000`) — search and replace in `src/` and `src/data/expeditions.ts`
- Instagram handle (`@z11travessia` / `instagram.com/z11travessia`) — confirm if correct
- Video embed in `src/components/Video.astro`

## Deploy

Push to `main` → Vercel auto-detects Astro and deploys.
