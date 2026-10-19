# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org).

## [Unreleased]
### Planned (Sprint 1)
- Soft blue design system, Work / Lab structure, first real case study.
### Changed
- Home page redesigned: full-width photo hero with navy overlay and a hexagon grid linking to the main pages (replaces the focus-area strip). Image sources in `docs/03-design/image-credits.md`.
- Home hero copy rewritten in a personal voice ("Curious by nature. IT by choice.") and now includes my name.
- Design switched from green to soft blue (light + dark); dark mode uses navy (`#0b1426`).
### Changed (docs)
- Positioning changed to customer-first: freelance clients first, employers second (ADR-005). Charter, sitemap and risk register updated.
### Added
- Profile photo on the About page (cropped, metadata removed, served as WebP).
- Project pushed to GitHub (`main` branch) for sync between laptops.
### Fixed
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
