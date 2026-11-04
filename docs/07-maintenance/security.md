# Security

Static Astro site on Cloudflare Pages. No server, database or user accounts. The only
runtime input is the Web3Forms contact form.

## Current controls

| Area | Control | Where |
|---|---|---|
| Secrets | `.env` is gitignored; only `PUBLIC_WEB3FORMS_ACCESS_KEY` exists and is a public form key. `.env.example` holds a placeholder. | `.gitignore`, `.env.example` |
| HTTPS | Enforced by Cloudflare Pages; HSTS sent for one year. | `public/_headers` |
| Clickjacking | `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`. | `public/_headers` |
| MIME sniffing | `X-Content-Type-Options: nosniff`. | `public/_headers` |
| Referrer | `Referrer-Policy: strict-origin-when-cross-origin`. | `public/_headers` |
| Browser features | `Permissions-Policy` disables camera, microphone, geolocation, payment and USB. | `public/_headers` |
| Content Security Policy | Scripts only from this origin (no inline scripts). Styles from this origin plus Google Fonts. Form posts only to Web3Forms (`api.web3forms.com`, plus `web3forms.com` for its success page redirect). Objects and `<base>` changes blocked. | `public/_headers` |
| Inline scripts | Theme init and menu/theme logic moved to `public/scripts/theme-init.js` and `public/scripts/site.js` so CSP can use `script-src 'self'`. | `src/layouts/BaseLayout.astro` |
| Form spam | Hidden `botcheck` honeypot field. Web3Forms filters submissions. | `src/pages/contact.astro` |
| Privacy | Contact page says the form is handled by Web3Forms and nothing is stored on this site. | `src/pages/contact.astro` |

`style-src` still allows `'unsafe-inline'` because a few templates set spacing with inline
`style` attributes. Inline styles cannot execute script, so this does not weaken
`script-src`.

## Manual checks (owner)

- **Web3Forms key:** in the Web3Forms dashboard, restrict the access key to the production
  domain (and any preview domain if forms should work there). A `PUBLIC_` key is visible in
  the page source by design, so domain restriction is what stops reuse.
- **Deployment:** confirm the live response includes the headers above
  (`curl -I https://<site>/` or browser dev tools → Network → Headers).
- **Dependencies:** run `npm audit` monthly with the maintenance plan. The site has no
  runtime server, so most Astro advisories do not apply, but keep the framework current.

## Known follow-ups

- Upgrade Astro 5 → 7 when the project is ready for a breaking change; re-run
  `npm run check` and `npm run build` afterwards.
- `npm audit fix` and minor updates done 2026-11-04 (8 → 5 advisories). The 5 left (astro, esbuild, sharp, zod) clear only with Astro 7. They affect the build and dev server on this laptop, not the published static files.
- Consider self-hosting the Google Fonts files to remove the third-party request.
- Consider removing the remaining inline `style` attributes to drop `'unsafe-inline'` from
  `style-src`.
