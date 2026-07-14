# CHPX Backend

Placeholder for future backend work (API, database, auth, etc). Nothing here yet — the site currently runs fully static from `../web` with the contact form posting directly to Formspree.

## Secrets and environment variables

Whenever real backend work starts, it will almost certainly need secrets (database URLs, API keys, JWT signing keys, etc). Rules to follow once that happens:

Never commit real secret values to this repo. Use a `.env` file for local development and keep it out of git — the root `.gitignore` already excludes `.env` and `.env.*` (except `.env.example`). Commit a `.env.example` alongside your code listing the variable names only, so anyone setting up the project locally knows what's needed without seeing real values.

If you end up on .NET instead, the same idea applies to `appsettings.json`: the base `appsettings.json` (non-secret defaults) is fine to commit, but environment-specific files like `appsettings.Development.json` or `appsettings.Production.json` usually hold real secrets and are already excluded in `.gitignore`.

For production, put real secret values directly into your hosting provider's own environment-variable settings (Netlify, Railway, Render, etc, whichever ends up hosting this), never in a file in the repo.

Nothing here needs this yet since there's no backend code, but the `.gitignore` is already set up so it's safe whenever you start.
