# CHPX.ph

Website for **CHPX (Choppedstyx)** — a creator collective, talent agency, digital marketing agency, and production company based in the Philippines.

Live at [chpx.ph](https://chpx.ph), deployed automatically from `main` via Netlify.

## Project structure

```
chpx-website/
├── web/                  # The site — Vite + React + TypeScript (single-page, hash-anchor nav)
├── backend/              # Reserved for future backend services (currently unused — see backend/README.md)
├── brand-assets-raw/     # Raw/source brand assets from Notion (not shipped — gitignored)
├── docker-compose.yml    # Local dev via Docker
└── netlify.toml          # Netlify build config
```

The site is a single page (`web/`) with in-page sections (About, Meet CHPX, Roadmap, Contact) linked via hash anchors and scroll-spy nav — there is no separate multi-page/router build.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) for scroll-reveal and entrance animations
- Plain CSS with custom properties (`web/src/styles.css`) — no CSS framework
- [Formspree](https://formspree.io/) for the contact form (no backend required)
- Deployed on [Netlify](https://www.netlify.com/), with DNS pointed at `chpx.ph`

## Local development

```bash
cd web
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

Other scripts (run from `web/`):

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production into `web/dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Running with Docker

```bash
docker compose up
```

This builds and runs the `web` service (`node:20-alpine`, Vite dev server on port `5173`, live-reloading against your local `web/` folder). The container has a `HEALTHCHECK` so `docker compose ps` reports `healthy`/`unhealthy` once the dev server is actually responding, not just running.

## Deployment

Netlify builds are configured in `netlify.toml`:

- **Base directory:** `web`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Builds are skipped automatically if nothing under `web/` or `netlify.toml` changed since the last deploy.

Pushing to `main` triggers an automatic Netlify deploy.

## Contact form

The Contact section posts to Formspree. Before going live, replace the placeholder form endpoint in `web/src/components/Contact.tsx` (`https://formspree.io/f/YOUR_FORM_ID`) with a real Formspree form ID.

## Brand assets

Source/raw brand assets (logos, member photos, patterns) pulled from the team's Notion live in `brand-assets-raw/` and are gitignored — they're a working archive, not something the deployed site needs. Processed, web-ready assets used by the site live in `web/public/assets/`.
