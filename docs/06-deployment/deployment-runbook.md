# Deployment Runbook (Cloudflare Pages)

## One-time setup
1. Push the repository to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select the repo.
3. Build settings: framework **Astro**, build command `npm run build`, output directory `dist`.
4. Environment variable: `PUBLIC_WEB3FORMS_ACCESS_KEY` (Production, and Preview if needed).
5. Deploy → note the `*.pages.dev` URL.

## Every release
1. All tests in `05-testing/test-plan.md` pass.
2. Update `CHANGELOG.md` and the version in `package.json`.
3. Commit, tag (`git tag v1.0.0`), push → Cloudflare deploys automatically.
4. Open the live URL and smoke-test: Home, one case study, contact form.
5. Check the response headers include the rules in `public/_headers` (browser dev tools → Network → Headers, or `curl -I <url>`).

## Rollback
Cloudflare Pages → Deployments → choose the last good deployment → **Rollback**.

**Caution:** **Retry deployment** rebuilds the *same* commit. Using it on an older deployment puts that old version back in production. To fix a missing deploy, push a new commit or use **Rollback** on the newest good deployment. (On 2026-11-06, retrying an older deployment undid a CSP fix until it was rolled forward.)
