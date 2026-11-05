# Wireframes — v1

Created 2026-10-14 in a Claude design canvas: 7 artboards.

| # | Artboard | Size |
|---|---|---|
| 01 | Home | 1280 desktop |
| 02 | Case studies (Work) list | 1280 desktop |
| 03 | Case study detail | 1280 desktop |
| 04 | About | 1280 desktop |
| 05 | Contact | 1280 desktop |
| 06 | Home | 390 mobile |
| 07 | Case study detail | 390 mobile |

Export: save the PDF export as `docs/03-design/wireframes-v1.pdf`.

## Wireframes v2 (as built)
`wireframes-v2.pdf` is generated from the live site, so it always matches what is built. It has 7 pages (Home, Case studies, Case study detail, Projects, About, Process, Contact) at 1280 px desktop and 390 px mobile. Colours are removed, and photos are shown as grey boxes with a cross.

To regenerate it after a design change, run `npm run wireframes`. To use a local build instead, run `npm run wireframes -- http://localhost:4321`. The script is `scripts/export-wireframes.mjs`. It uses the installed Microsoft Edge and needs no extra packages.

Figma: https://www.figma.com/design/Kd9ruAifTtahQ1F1ij50cG
- Page "Wireframes v3 (as built, Nov 2026)": the same 14 wireframes as editable Figma layers (text and boxes, no screenshots). They were imported from the live site on 2026-11-05.
- Page "Archive: wireframes v2 (Oct 2026)": the earlier hand-drawn wireframes, kept for reference.

## Design iterations
| Date | Change | Reason |
|---|---|---|
| 2026-10-14 | v1 green palette | Matched the scaffolded prototype |
| 2026-10-14 | Switched to blue | Owner preference |
| 2026-10-14 | Switched to soft (light) blue base | Owner preference; accent kept dark for contrast |
| 2026-10-14 | Decided Work / Lab split | Keeps delivered work and learning projects clearly separate |

## Planned changes for v2
- ~~Rename "Case studies" to **Work**; add **Lab** page~~ — dropped 2026-11-05 (Lab is a section of Projects)
- Result-first case study headlines
- Rounded cards (12–16 px)
- Dark royal-blue footer
