# backend/

This folder is currently **empty and unused**.

CHPX.ph doesn't need a backend today: the site (`web/`) is a static Vite/React build, and the Contact form submits directly to [Formspree](https://formspree.io/) from the browser — no server-side code required.

This folder is reserved for later, in case the project needs a real backend service down the line — for example:

- A custom API instead of Formspree for contact/inquiry submissions
- Server-side handling for creator/talent bookings or applications
- Any integration that needs a secret key or credential that can't live in the client-side site

If you add a backend here, remember:

- `backend/node_modules/` is already gitignored (see root `.gitignore`)
- Keep secrets in an untracked `.env` file (`.env` and `.env.*` are gitignored, except `.env.example`)
- Update `netlify.toml` and/or `docker-compose.yml` at the repo root if the backend needs its own build/deploy step
