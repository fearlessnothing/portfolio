# Test Plan

## Approach
Manual testing plus automated checks before every release. Run at the end of each sprint and before v1.0.

## Automated checks
| Check | Command / tool | Pass criteria |
|---|---|---|
| Type & template check | `npm run check` | 0 errors |
| Production build | `npm run build` | Completes, all pages generated |
| Lighthouse | Chrome DevTools → Lighthouse (mobile), or https://pagespeed.web.dev | ≥ 90 in all 4 categories |

## Manual test cases
| ID | Test | Steps | Expected | Result (2026-11-05, live site) |
|---|---|---|---|---|
| TC-01 | Navigation | Click every menu item (desktop + mobile) | Correct page; current page highlighted | Pass |
| TC-02 | Theme toggle | Switch theme, reload | Choice remembered; all text readable | Pass |
| TC-03 | Case study page | Open each case study | Summary, context, role, journey, results and lessons shown | Pass (all 5) |
| TC-04 | Contact form | Submit test message | Success message; email received | Pass (owner) |
| TC-05 | Résumé download | Click download | PDF opens | N/A: no download; CV is on the About page |
| TC-06 | Mobile 390 px | DevTools device mode | No horizontal scroll; tap targets ≥ 44 px | Pass after fix (see below) |
| TC-07 | Keyboard | Tab through Home | Visible focus; all controls reachable | Pass (29 stops, all with visible focus) |
| TC-08 | Broken links | Check every link | No 404s | Pass |
| TC-09 | Confidentiality | Read every page | No confidential data | Pass |

## Run log — 2026-11-05 (first launch, https://minheinzaw.pages.dev)
Automated with a headless Edge script and a link crawler against the live site.

- **Overflow:** no horizontal scroll on any of the 12 pages (including 404) at 360, 390, 768, 1024 and 1440 px, light and dark.
- **Links:** every internal page, script, stylesheet, image and `#anchor` returns 200 / exists. Unknown URLs return the 404 page.
- **Tap targets:** wordmark, footer link, stand-alone "→" links and case-study back links were 19–42 px tall. Fixed to a 44 px minimum. One inline link inside a sentence on About is exempt (WCAG 2.5.8 inline exception).
- **Security headers:** CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy present.
- **Confidentiality:** page text scanned for company names, salaries, currency amounts and personal names. Only the contact email found.
- **Console:** no script errors.
- **Lighthouse (pagespeed.web.dev, Home, owner run):** Mobile: Performance 95, Accessibility 100, Best Practices 100, SEO 100 (FCP 1.5 s, LCP 2.5 s, TBT 0 ms, CLS 0, Speed Index 3.9 s). Desktop: 100 / 100 / 100 / 100. **Pass** (target ≥ 90). Remaining hints: render-blocking CSS (~0.7 s on mobile) and image size (~54 KiB on mobile); the hero crop task in `TODO.md` covers the image.
- **Open:** check on a real phone; UAT below.

## UAT
2–3 people (e.g. a colleague in IT, a friend in HR) review the live preview and answer:
1. What does this person do? 2. What is one result you remember? 3. Anything confusing?
