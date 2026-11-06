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
| Content Security Policy | Scripts only from this origin (no inline scripts). Styles from this origin plus Google Fonts. Form posts only to Web3Forms (`api.web3forms.com`, plus `web3forms.com` for its error page). `form-action` also allows `'self'`, because browsers check the redirect back to `/thanks/` against it too. Objects and `<base>` changes blocked. | `public/_headers` |
| Inline scripts | Theme init and menu/theme logic moved to `public/scripts/theme-init.js` and `public/scripts/site.js` so CSP can use `script-src 'self'`. | `src/layouts/BaseLayout.astro` |
| Form spam | Hidden `botcheck` honeypot field. Web3Forms filters submissions. | `src/pages/contact.astro` |
| Privacy | Contact page says the form is handled by Web3Forms and nothing is stored on this site. | `src/pages/contact.astro` |

`style-src` still allows `'unsafe-inline'` because a few templates set spacing with inline
`style` attributes. Inline styles cannot execute script, so this does not weaken
`script-src`.

## Manual checks (owner)

- **Web3Forms key:** domain restriction needs a paid Web3Forms plan, so it was skipped
  (owner decision, 2026-11-05). A `PUBLIC_` key is visible in the page source by design.
  The honeypot field and Web3Forms' own filtering are the spam controls. If spam becomes a
  problem, rotate the key in the dashboard and update `.env`.
- **Deployment:** confirm the live response includes the headers above
  (`curl -I https://<site>/` or browser dev tools → Network → Headers).
- **Dependencies:** run `npm audit` monthly with the maintenance plan. The site has no
  runtime server, so most Astro advisories do not apply, but keep the framework current.

## Known follow-ups

- `npm audit fix` and minor updates done 2026-11-04 (8 → 5 advisories). Astro 5 → 7 upgrade done 2026-11-06: `npm audit` reports 0 vulnerabilities.
- Consider self-hosting the Google Fonts files to remove the third-party request.
- Consider removing the remaining inline `style` attributes to drop `'unsafe-inline'` from
  `style-src`.
