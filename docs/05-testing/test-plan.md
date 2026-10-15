# Test Plan

## Approach
Manual testing plus automated checks before every release. Run at the end of each sprint and before v1.0.

## Automated checks
| Check | Command / tool | Pass criteria |
|---|---|---|
| Type & template check | `npm run check` | 0 errors |
| Production build | `npm run build` | Completes, all pages generated |
| Lighthouse | Chrome DevTools → Lighthouse (mobile) | ≥ 90 in all 4 categories |

## Manual test cases
| ID | Test | Steps | Expected | Result |
|---|---|---|---|---|
| TC-01 | Navigation | Click every menu item (desktop + mobile) | Correct page; current page highlighted | |
| TC-02 | Theme toggle | Switch theme, reload | Choice remembered; all text readable | |
| TC-03 | Case study page | Open each case study | 7 sections + results shown | |
| TC-04 | Contact form | Submit test message | Success message; email received | |
| TC-05 | Résumé download | Click download | PDF opens | |
| TC-06 | Mobile 390 px | DevTools device mode | No horizontal scroll; tap targets ≥ 44 px | |
| TC-07 | Keyboard | Tab through Home | Visible focus; all controls reachable | |
| TC-08 | Broken links | Check every link | No 404s | |
| TC-09 | Confidentiality | Read every page | No confidential data | |

## UAT
2–3 people (e.g. a colleague in IT, a friend in HR) review the live preview and answer:
1. What does this person do? 2. What is one result you remember? 3. Anything confusing?
