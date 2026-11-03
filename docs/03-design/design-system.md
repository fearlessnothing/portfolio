# Design System

**Direction:** denim — indigo blues, a cotton off-white base and copper "stitching" details. It links the site to the garment industry (changed from soft blue on 2026-11-03).
Inspired by result-first case study layouts (reference research on Pinterest, 2026-10-14).

## Colours

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#f4f2ed` (cotton) | `#111b2c` (raw indigo) | Page background |
| `--surface` | `#ffffff` | `#1a2740` | Cards, strips |
| `--ink` | `#17233a` | `#eeeae2` | Headings and body text |
| `--muted` | `#3f4a5a` | `#c0c8d3` | Secondary text |
| `--line` | `#dad5ca` | `#2d3c56` | Borders, dividers |
| `--accent` | `#2b4a7a` (indigo) | `#a3bddc` (washed denim) | Buttons, links, labels |
| `--accent-soft` | `#dce5f0` | `#263a5c` | Soft fills, status tags |
| `--marker` | `#a14f12` (copper) | `#e0a35f` | Small numbers, label lines, rules |

Photo overlay (hero, hexagons, SDLC wheel centre): indigo `#13203a`, white text, in both themes. Hero highlight ("IT"): `#e0a35f`.

**Rules:** every text pair ≥ 4.5:1 (lowest: copper on cotton, 5.15). White text never goes on light backgrounds.

## Typography

| Role | Font | Size |
|---|---|---|
| Display / headings | Manrope 600–700 (hero 400) | 56–84 px desktop, 32–44 px mobile |
| Body | Manrope 400 | 15–17 px; secondary text 14 px |
| Labels, metadata | DM Mono 400, uppercase | 12 px (tags 11 px; never below 10 px) |

## Layout
- Max content width 1120 px, 24 px side padding (16 px on mobile)
- Cards: white surface, 1 px `--line` border
- Touch targets ≥ 44 px
