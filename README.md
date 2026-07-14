# chpx-website

Marketing website for CHPX (Choppedstyx).

## Structure

`web/` is the static frontend (HTML/CSS/JS + assets) and is what's deployed to Netlify. `backend/` is a placeholder for future backend work and is empty for now.

## Local development (Docker)

Preview changes locally before pushing, so Netlify isn't rebuilt for every small tweak.

Install Docker Desktop if you don't have it, then from the repo root run: `docker compose up`

Open http://localhost:8080 in your browser to view the site. Edit any file inside `web/`, save, and refresh the browser — the container mounts the folder directly so there's no rebuild step.

Stop the preview with `docker compose down` (or Ctrl+C).

Once changes look right, commit and push to `main` and Netlify will redeploy the live site automatically.

## Deployment

Deployed via Netlify, connected to this repo's `main` branch. Netlify's publish directory is set to `web`.
