# Requirements

## Functional requirements
| ID | Requirement | Priority (MoSCoW) |
|---|---|---|
| FR-01 | Home page shows name, title, short positioning and at-a-glance figures | Must |
| FR-02 | Work page lists case studies with a result-first headline | Must |
| FR-03 | Each case study has: Context, My role, Options considered, Execution by SDLC phase, Challenges & risks, Results, Lessons learned | Must |
| FR-04 | Case studies are written as Markdown files and ordered by an `order` field | Must |
| FR-05 | Lab page lists learning projects: what I wanted to learn, what I built, what I learned, status | Must |
| FR-06 | About page shows experience timeline, capabilities and certifications | Must |
| FR-07 | Contact page has a working form, email and LinkedIn link | Must |
| FR-08 | Visitor can download my résumé as PDF | Should |
| FR-09 | Light and dark mode with remembered choice | Should |
| FR-10 | "How this site was built" page links to these SDLC docs | Should |
| FR-11 | Case study filter by type | Could |
| FR-12 | Live demo app (IT helpdesk & asset tracker) | Won't (v1.0) |

## Non-functional requirements
| ID | Requirement | Measure |
|---|---|---|
| NFR-01 | Performance | Lighthouse Performance ≥ 90 on mobile |
| NFR-02 | Accessibility | WCAG 2.1 AA: text contrast ≥ 4.5:1, keyboard navigable, touch targets ≥ 44 px |
| NFR-03 | Responsive | Works from 360 px to 1440 px wide with no horizontal scroll |
| NFR-04 | Cost | USD 0 per month |
| NFR-05 | Security | No secrets in the repository; HTTPS only |
| NFR-06 | Maintainability | New case study = one Markdown file, no code change |
| NFR-07 | Confidentiality | No confidential employer data (see risk R1) |
