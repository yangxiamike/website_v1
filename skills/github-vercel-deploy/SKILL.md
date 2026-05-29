---
name: github-vercel-deploy
description: Prepare and guide deployment of a frontend app from this repo to Vercel using the preferred GitHub-to-Vercel flow. Use when Codex needs to verify build readiness, identify the correct app root, define Vercel project settings, explain first-time setup, or standardize a low-friction no-token deployment path for demos and generated sites.
---

# GitHub Vercel Deploy

Use this skill when the user wants a site in this repo deployed to Vercel and the preferred long-term path is `GitHub -> Vercel` rather than repeated CLI deploys.

For the concrete first-run checklist and handoff fields, read `references/github-vercel-deploy-checklist.md`.

## What This Skill Optimizes For

- Prefer GitHub-connected auto deploys over manual `vercel deploy`
- Treat "no token" as "no project-level deploy token required for normal deploys"
- Verify the app locally before recommending Vercel settings
- Produce reusable deployment guidance for `sites/<company-id>/app` style projects

## Recommended Decision Order

1. Identify the deploy target:
   - Confirm the exact app directory.
   - Detect framework, package manager, build script, and output directory.
2. Verify local health:
   - Run the strongest available local build first.
   - If lint/typecheck exist and are cheap, run them when relevant.
3. Choose the deployment path:
   - Default: `GitHub -> Vercel`
   - Fallback: manual Vercel CLI deploy only when the user explicitly wants it or Git integration is not viable
4. Derive Vercel settings:
   - Root Directory
   - Install Command if needed
   - Build Command
   - Output Directory
   - Environment variables if the app actually needs them
5. Explain the first-time setup and future reuse path:
   - First connection/import in Vercel
   - What future `git push` deploys will do
   - Whether any token is needed for the user's chosen path

## Default Workflow

### 1. Inspect Before Recommending

- Read `package.json`, framework config, and any deployment config already in the app.
- Check whether `.vercel/` or `vercel.json` already exists.
- Check whether the repo appears intended for static hosting, SSR, or another setup.

### 2. Prove the App Can Build

- Run the app's build command from the real app root.
- If build fails, fix or clearly report blockers before describing deployment as ready.
- Do not assume Vercel will fix local build problems.

### 3. Prefer GitHub to Vercel

Recommend this path by default:

1. Push the repo to GitHub
2. Import the repo in Vercel
3. Set the app root as the Vercel Root Directory
4. Confirm build and output settings
5. Deploy once
6. Reuse the connection for future preview and production deploys

This path is the normal "no token" answer for recurring demo deploys.

## When "No Token" Is True

For recurring deploys, say it plainly:

- No `VERCEL_TOKEN` is needed in the repo when normal deploys happen through GitHub integration
- No project script is required just to redeploy after code changes
- A token is usually only needed for API-driven or CI-driven direct deploys

Do not over-promise:

- The user may still need to log into GitHub and Vercel during first setup
- Environment variables may still be required for the app itself
- A local Vercel CLI login is separate from the preferred Git-driven flow

## When Manual CLI Deploy Is Acceptable

Only recommend `vercel deploy` as the primary path when one of these is true:

- The user explicitly wants manual CLI-driven deploys
- The repo cannot be connected to GitHub
- The user needs an ephemeral one-off preview outside the normal repo flow

If you discuss CLI deploys, frame them as the exception path, not the default reusable workflow.

## Vercel Setting Hints

For Vite-style apps in this repo, the common target settings are:

- Root Directory: app folder such as `sites/haiyue/app`
- Build Command: usually `npm run build`
- Output Directory: usually `dist`

Do not hardcode those values without checking the actual app files first.

## Handoff Expectations

Before finishing:

- State whether the app built locally
- Name the exact app root to import into Vercel
- Give the expected Vercel build and output settings
- State whether the recommended path is no-token
- Call out anything the user still must do in GitHub or the Vercel UI
