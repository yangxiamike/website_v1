# GitHub to Vercel Checklist

Use this checklist when preparing a handoff or validating a new deployment target in this repo.

## Preflight

- Confirm the exact app path to deploy
- Read the app `package.json`
- Check whether `vercel.json` or `.vercel/` already exists
- Identify framework, package manager, build command, and output directory
- Check whether the app requires environment variables

## Local Validation

- Run the real local build from the app root
- Optionally run lint/typecheck if they help expose deployment blockers
- Record any failures before recommending deployment

## Vercel Import Settings

- Repository: target GitHub repo
- Root Directory: exact app path such as `sites/haiyue/app`
- Build Command: from the app, often `npm run build`
- Output Directory: from the app, often `dist`
- Install Command: default unless the repo needs something special

## Reuse Path

Preferred reusable path:

1. Push changes to GitHub
2. Let Vercel auto-build preview or production deploys
3. Use branch and PR deploys for review

## No-Token Guidance

Safe wording:

- "For normal GitHub-connected deploys, this project does not need a `VERCEL_TOKEN` in the repo."
- "A token is only needed if you want direct CLI/API-driven deploy automation."

Avoid saying:

- "Vercel never needs auth"
- "No login is needed"
- "Manual CLI deploys are token-free by default"

## Common Exceptions

- Monorepo root mismatch: Vercel imports the repo but points at the wrong root
- Build command mismatch: local build works only from the app directory
- Output mismatch: Vite apps usually emit `dist`, not `.next`
- Secret-backed apps: deployment works only after setting env vars in Vercel
- Static SPA routing: direct refresh behavior may need verification
