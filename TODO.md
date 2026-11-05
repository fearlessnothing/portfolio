# TODO

> Only what is still open. Finished work is recorded in `CHANGELOG.md` and the sprint file:
> [`docs/04-development/sprints/sprint-01.md`](docs/04-development/sprints/sprint-01.md).
> Rule: when a task is done, remove it here **and** mark it Done in the sprint file.

_Last updated: 2026-11-05_

## Waiting on me (Claude needs this from me)

- [ ] Update the CV itself to IT Manager (Jan 2026) and Guston Amava from 2023, so CV, site and LinkedIn agree
- [ ] Optional: year for each certificate, issuer for the three without one

## Sprint 1 — still open

- [ ] #8 Export wireframes PDF into `docs/03-design/`

## Before first launch

- [ ] Connect the GitHub repo to Cloudflare Pages
- [ ] Add the live URL as `site:` in `astro.config.mjs`, then add canonical, Open Graph tags and robots.txt
- [ ] Web3Forms dashboard: restrict the access key to the live domain
- [ ] After deploy: check security headers (`curl -I <url>`) and send one test message through the contact form
- [ ] Run the test plan (`docs/05-testing/test-plan.md`) on desktop and mobile
- [ ] After launch: publish the portfolio case study (draft: `docs/04-development/portfolio-case-study-draft.md`); needs live URL, launch month and my lessons learned

## Later (from the 2026-11-04 project review)

- [ ] Align About "How I approach a problem" (5 steps) with the six Process stages; About could keep beliefs and link to Process
- [ ] Shared components for case cards and the case-study CTA; keep project data in one file
- [ ] Contact form thank-you page on the site (after the live URL is known)
- [ ] Crop the hero photo to a wide ratio to make it lighter
- [ ] Upgrade Astro 5 → 7 (clears the last 5 npm audit advisories; breaking change, own task)
