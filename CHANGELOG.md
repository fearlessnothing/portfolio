# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org).

## [Unreleased]
### Planned (Sprint 1)
- Soft blue design system, Work / Lab structure, first real case study.
### Changed
- Company names removed from the whole site (About and Home timeline): employers now shown as "Garment manufacturing group", "Both Myanmar factories", "Pathein factory", "Garment factory", "Computer training centre" and "Private company". The Police years stay as they are.
- Projects page rebuilt from real work: "Built at work" (Fabric Age Control dashboard, interim visitor register) and "Lab" (Style Control Workbook, hourly production automation). Template example projects removed. About page systems lists updated to match; PTS note now says it is being rebuilt.
- VMS case study role corrected to IT Manager. "Group IT team in Sri Lanka" replaced by "the group’s overseas IT team" on About and in case studies; company names stay out of case studies.
- PTS case study rewritten: the system is being rebuilt to fit the two Myanmar factories, not retired. Adds overview cards, a project journey, three options and the owner's lessons; no placeholders left. URL changed to `/case-studies/production-tracking-rebuild/`.
- VMS case study rewritten and retitled "From UAT Findings to a Successful Visitor Management Rollout": the Microsoft 365 register is shown as an interim continuity solution, retired once the improved main system was in use at both Myanmar factories. Adds project overview cards, a project journey timeline, UAT cycle, interim architecture and transition diagrams, capabilities, lessons learned and a closing call to action. No placeholders remain.
- Case study template: optional overview fields (system, focus, environment, technologies); bullets restored in case study text.
- Soft glow behind the hero headline (light glow, copper on "IT") and behind page and section titles (washed-blue glow in light mode, light glow in dark mode).
- Colour palette changed from soft blue to denim: cotton off-white background, indigo accents, copper "stitching" details; dark mode uses raw indigo.
- Text made easier to read: small labels and tags enlarged (smallest now 10–12 px), secondary text 14 px and darker, hero headline heavier.
- Home hero background changed from a night-time globe to a denim fabric photo, to show the garment industry.
- Home page rebuilt in nine sections: hero, expertise hexagons (Infrastructure, Security & Backup, Microsoft 365, Business Systems, Automation), philosophy, case studies, technology ecosystem, how I work, career timeline, certifications, contact. Five new Unsplash photos; the four old tile photos removed.
- About page rebuilt from my CV: experience timeline, systems I've worked on, skills, education and certifications, languages. Data in `src/data/career.ts`.
- Title updated to IT Manager (since January 2026) in the header and home hero.
- Header wordmark shows my name and title; browser tab titles end in my name.
- Home page redesigned: full-width photo hero with navy overlay and a hexagon grid linking to the main pages (replaces the focus-area strip). Image sources in `docs/03-design/image-credits.md`.
- Home hero copy rewritten in a personal voice ("Curious by nature. IT by choice.") and now includes my name.
- Design switched from green to soft blue (light + dark); dark mode uses navy (`#0b1426`).
### Changed (docs)
- Positioning changed to customer-first: freelance clients first, employers second (ADR-005). Charter, sitemap and risk register updated.
### Added
- Security hardening: Cloudflare Pages security headers (CSP, HSTS, nosniff, frame/referrer/permissions policies) in `public/_headers`; theme and menu scripts moved to `public/scripts/` so the CSP can forbid inline scripts; privacy note on the Contact page; `docs/07-maintenance/security.md`. CSP `form-action` also allows `web3forms.com`, so the Web3Forms success redirect is not blocked.
- SDLC wheel on the Process page: seven stages (Planning to Maintenance) as a decorative SVG, with the same stages as an accessible list and an Idea → Business impact path.
- Focus-area strip under the home hero: Infrastructure • Cybersecurity • Microsoft 365 • Business Systems • Automation.
- Two real case study drafts: rebuilding the visitor system on Microsoft 365, and retiring the production tracking system. Unconfirmed facts are marked `[placeholder]`.
- Email address on the Contact page, next to the form.
- `TODO.md` at the root: one-page view of next tasks, inputs I owe, and launch steps.
- Profile photo on the About page (cropped, metadata removed, served as WebP).
- Project pushed to GitHub (`main` branch) for sync between laptops.
### Removed
- Illustrative (fictional) sample case study.
### Fixed
- Dependencies: `npm audit fix` and minor updates (Tailwind 4.3.4, @astrojs/check 0.9.12); 8 advisories down to 5. The rest need Astro 7 (breaking) and only affect build tools, not the static site.
- `TODO.md` no longer lists the GitHub push as pending (nothing was unpushed), and its rule now says a repeated task number must be ticked in every section it appears in.
- `CLAUDE.md` route pattern corrected to `/case-studies/[...slug]/` (rest parameter, not `[slug]`).
- Sample case study no longer claims the "IT Manager" job title; replaced with `[placeholder]` until the real title is confirmed.
- `CLAUDE.md` now lists the routes that actually exist; `/work/` and `/lab/` marked as planned.
- Light-mode `theme-color` meta now matches the soft blue background (`#f3f8ff`) instead of the old green design.

## [0.1.0] — 2026-10-15 — Sprint 0 (prototype)
### Added
- Astro + Tailwind static site: Home, About, Case studies, Projects, Process, Contact.
- Markdown case study collection.
- Light/dark mode, Web3Forms contact form.
- SDLC documentation in `docs/`.
- Recommended VS Code extensions (`.vscode/extensions.json`).
### Fixed
- Dark mode hero text unreadable.
- Hero secondary button showed a filled background.
### Changed
- Project moved from OneDrive to a local folder; GitHub used for sync.
