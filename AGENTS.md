# fernando.is

Personal site, SvelteKit on Cloudflare.

## Worktrees

T3 opens each thread in `.worktrees/<branch>` and runs `scripts/worktree-setup`
(wired in `t3.json`), which writes this checkout's `PORT` and `PREVIEW_PORT` to
`.env` and installs dependencies. Dev, preview, and Playwright read those ports
with `strictPort`, so a collision fails instead of drifting.

## Commands

- `bun run dev` — dev server on `PORT`
- `bun run test` — builds, serves on `PREVIEW_PORT`, runs Playwright from `e2e/`
- `bun run check` — svelte-check

Every test leaves a screenshot under `test-results/`.
