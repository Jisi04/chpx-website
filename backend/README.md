# backend/

A small Express + TypeScript API for CHPX.ph. Built as a plain Node service — no Netlify Functions, no platform-specific SDK — so it can run anywhere that runs Node: Render, Railway, Fly.io, a VPS, a Docker host, or Netlify itself if you ever want that. Moving hosts later means redeploying this folder, not rewriting it.

## Why this exists

The site (`web/`) is a static, client-only build. Anything shipped in its JavaScript is visible to anyone who views the page source — there's no way to keep a real secret (an API key, SMTP password, etc.) hidden from visitors in a client-only app. This backend exists to hold that kind of secret safely: it lives in environment variables on whatever server runs this code, and never gets shipped to the browser.

## What it does today

- `GET /api/health` — liveness check, used by Docker's `HEALTHCHECK` and by any host's uptime monitor.
- `POST /api/contact` — receives the Contact form's `name`, `email`, `inquiry_type`, and `message`, validates them, and emails the submission to `CONTACT_TO_EMAIL` via SMTP. Includes:
  - A honeypot field (`company`) — hidden from real visitors via CSS on the frontend, only bots that blindly fill every field trip it.
  - Rate limiting — 5 submissions per 15 minutes per IP.
  - CORS locked to `ALLOWED_ORIGIN` — only your site (and local dev) can call the API.

Email sends over plain SMTP (via [Nodemailer](https://nodemailer.com/)) rather than a vendor-specific SDK, so switching providers later (Gmail, SendGrid, Mailgun, Resend, Postmark, your host's own mail relay) is an environment variable change, not a code change.

**Note:** the live site's Contact form still posts to Formspree right now (see `web/.env.example`). Pointing it at this backend instead is a separate step — update `web/src/components/Contact.tsx`'s form action once this backend is actually deployed somewhere with a real URL.

## Local development

```bash
cd backend
cp .env.example .env   # then fill in real SMTP values
npm install
npm run dev
```

Runs at `http://localhost:4000`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with auto-reload (`tsx watch`) |
| `npm run build` | Type-check and compile to `backend/dist/` |
| `npm run start` | Run the compiled output (`node dist/index.js`) — what a real host should run |

## Running with Docker

```bash
docker compose up backend
```

Builds and runs on port `4000` with a `HEALTHCHECK` against `/api/health`, matching the pattern used for `web/`.

## Environment variables

See `.env.example` for the full list with comments. In short:

| Variable | Purpose |
| --- | --- |
| `PORT` | Port the server listens on (default `4000`) |
| `ALLOWED_ORIGIN` | Comma-separated list of origins allowed to call the API |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | SMTP credentials for sending email |
| `CONTACT_TO_EMAIL` | Where contact-form submissions get sent |
| `SMTP_FROM` | The "from" address on outgoing emails |

`.env` is gitignored — never commit real credentials. Whatever host you deploy this to, set these as that host's own environment variables (Render, Railway, and Fly.io all have a dashboard or CLI for this); don't rely on shipping a `.env` file to production.

## Deploying elsewhere

Because this is a standard Express app with `npm run build` / `npm run start` scripts and no platform-specific code, deploying to a new host is generally:

1. Point the host at this `backend/` folder.
2. Set the environment variables above in that host's dashboard.
3. Build command: `npm install && npm run build`. Start command: `npm run start`.
4. Update `ALLOWED_ORIGIN` to match wherever `web/` is actually deployed, and update the Contact form's endpoint in `web/` to this backend's new URL.
