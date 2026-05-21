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

- Video embed in `src/components/Video.astro`
- Production URL in `astro.config.mjs` and JSON-LD in `src/layouts/Base.astro` (currently `z11travessia.vercel.app`, pending custom domain)

## Deploy

Push to `main` → Vercel auto-detects Astro and deploys.
