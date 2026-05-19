# Z11 Travessia — Landing Page

Site institucional da Z11 Travessia (expedições de barco no sul de Florianópolis).

## Stack

- [Astro](https://astro.build) (output estático)
- Deploy: [Vercel](https://vercel.com)
- Fontes: Cormorant Garamond + DM Sans (Google Fonts)

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Conteúdo

A página foi gerada a partir de um bundle HTML auto-extraível (`Z11 Travessia - Landing Page.html`, fora do repo). Os assets foram decodificados via `npm run extract` para `public/assets/`. Para regerar:

```bash
npm run extract
```

## Configuração pós-aprovação

Pontos com placeholder, a substituir quando os proprietários confirmarem:

- Número de WhatsApp (`5548900000000`) — buscar e substituir.
- Handle do Instagram (`@z11travessia` / `instagram.com/z11travessia`).
- Embed do vídeo institucional em `src/components/Video.astro`.

## Deploy

Push para `main` → Vercel detecta Astro automaticamente.
