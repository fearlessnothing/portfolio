---
title: "From UAT Findings to a Successful Visitor Management Rollout"
system: "Visitor Management System"
order: 1
role: "IT Manager"
duration: "May – Aug 2026"
environment: "Manufacturing / factory operations"
focus:
  - "UAT"
  - "Requirements"
  - "User coordination"
  - "Implementation"
  - "Business continuity"
technologies:
  - "Microsoft 365"
  - "Microsoft Forms"
  - "Power Automate"
  - "SharePoint"
technologiesNote: "Interim solution only"
tags:
  - "UAT"
  - "Requirements"
  - "Business continuity"
  - "Microsoft 365"
summary: "How factory feedback, iterative improvements and an interim Microsoft 365 solution helped move a visitor management system into successful operation across our Myanmar factories."
featured: true
category: "Systems implementation"
problem: "Factory testing showed the group's new visitor system did not yet fit how visitors are handled on site, so it could not go live as it was."
roleSummary: "Factory-side coordinator: ran UAT, turned user feedback into change requests, and kept visitor registration running with a temporary Microsoft 365 register."
outcome: "The improved system is in use at both Myanmar factories, and the temporary register has been retired."
results:
  - "Factory UAT findings and requirements fed into the improvement of the main visitor system."
  - "The improved system was validated and is in use at both Myanmar factories."
  - "The interim Microsoft 365 register was retired once the main system was operational."
---

## Executive summary

The group's Visitor Management System (VMS) needed significant changes after testing on the factory side showed gaps between what the system did and how our factories actually work. I coordinated user feedback and requirements between the factories and the development team. While the changes were made, I set up a temporary visitor register on Microsoft 365 so that visitor registration kept running. Once the main VMS had been improved and validated, it went into use at both Myanmar factories, and the temporary solution was retired.

## Business context

Visitor management is an everyday operational process in a factory: people arrive, are registered, and the person they are visiting needs to know and approve the visit. The group IT team developed a VMS for the factories in which visitors check in at a kiosk and the host approves the visit.

The challenge was not whether the software worked in a technical sense, but whether it fitted the real workflow at our factories. A system that does not match how people work tends to be bypassed, so operational fit had to be confirmed before rollout.

## My role

I worked on the Myanmar factory side, as the link between the people who would use the system and the team building it.

<div class="cs-bridge" aria-label="My position between users and developers">
  <div class="cs-bridge-node">Factory users</div>
  <div class="cs-bridge-link" aria-hidden="true">↕</div>
  <div class="cs-bridge-node cs-bridge-me">IT — my role</div>
  <div class="cs-bridge-link" aria-hidden="true">↕</div>
  <div class="cs-bridge-node">Development team</div>
</div>

- **Coordination:** worked with users at the factory to understand how visitors are actually handled.
- **User acceptance testing:** ran UAT with factory users and observed where the system did not fit daily work.
- **Requirements:** collected feedback, identified practical issues and consolidated them into clear change requests.
- **Communication:** passed the requirements to the development team and followed them through.
- **Business continuity:** set up an interim visitor register on Microsoft 365 while the changes were made.
- **Validation and adoption:** re-tested the improved system and supported users through rollout.

## Project journey

<ol class="cs-journey">
  <li><span class="cs-step">01</span><div><strong>Initial VMS</strong><p>Group system developed for factory visitor management.</p></div></li>
  <li><span class="cs-step">02</span><div><strong>Factory UAT</strong><p>Tested with factory users against real daily workflows.</p></div></li>
  <li><span class="cs-step">03</span><div><strong>Operational gaps identified</strong><p>The system needed many changes before it could support factory operations.</p></div></li>
  <li><span class="cs-step">04</span><div><strong>Requirements &amp; change requests</strong><p>Feedback consolidated and sent to the development team.</p></div></li>
  <li class="cs-journey-interim"><span class="cs-step">05</span><div><strong>Interim Microsoft 365 solution <em class="cs-badge">Temporary</em></strong><p>Kept visitor registration running for about a month during the changes.</p></div></li>
  <li><span class="cs-step">06</span><div><strong>Main VMS improvements</strong><p>The development team made the requested changes.</p></div></li>
  <li><span class="cs-step">07</span><div><strong>Re-testing &amp; validation</strong><p>The improved system was checked against factory needs again.</p></div></li>
  <li class="cs-journey-done"><span class="cs-step">08</span><div><strong>Myanmar factory rollout</strong><p>The improved VMS went into use at both Myanmar factories.</p></div></li>
  <li class="cs-journey-retired"><span class="cs-step">09</span><div><strong>Interim solution retired</strong><p>The temporary register was removed once it was no longer needed.</p></div></li>
</ol>

## UAT &amp; requirements

Factory-side testing was used to find the gaps between what the system offered and what daily operations required. The aim was to confirm operational fit, not only that each feature technically worked.

<ol class="cs-flow" aria-label="UAT and requirements cycle">
  <li>Test</li>
  <li>Observe</li>
  <li>Collect feedback</li>
  <li>Consolidate requirements</li>
  <li>Communicate changes</li>
  <li>Re-validate</li>
</ol>

Feedback from users was grouped into clear requirements before it went to the development team, so that each change request described a real operational need.

## Interim business continuity solution

While the main VMS was being improved, visitor registration still had to work. I set up a temporary visitor register using the Microsoft 365 tools the company already had.

<figure class="cs-arch">
  <figcaption><em class="cs-badge">Temporary / interim solution</em></figcaption>
  <ol aria-label="Interim solution data flow">
    <li><strong>Visitor / user</strong><span>Enters visit details</span></li>
    <li><strong>Microsoft Forms</strong><span>Collects the registration</span></li>
    <li><strong>Power Automate</strong><span>Processes each entry</span></li>
    <li><strong>SharePoint list</strong><span>Stores the visitor record</span></li>
    <li><strong>Email notification</strong><span>Informs the people concerned</span></li>
  </ol>
</figure>

This was always intended as a bridge to keep operations running, not as a replacement for the main system.

## Decision &amp; transition

The goal was never to run two competing systems. The Microsoft 365 register supported operations for about a month. Once the main VMS had been improved, tested and was working at both Myanmar factories, the temporary solution was no longer needed and was retired.

<div class="cs-transition" aria-label="Transition from interim solution to the improved main system">
  <div class="cs-transition-tracks">
    <div class="cs-track">
      <span class="cs-track-label">Primary VMS</span>
      <p>UAT findings</p>
      <p>Improvements in progress</p>
    </div>
    <div class="cs-track-plus" aria-hidden="true">+</div>
    <div class="cs-track cs-track-interim">
      <span class="cs-track-label">Microsoft 365 register <em class="cs-badge">Temporary</em></span>
      <p>Business continuity, about one month</p>
    </div>
  </div>
  <div class="cs-transition-arrow" aria-hidden="true">↓</div>
  <div class="cs-track cs-track-done"><span class="cs-track-label">Improved primary VMS</span><p>Validated and operational at both Myanmar factories</p></div>
  <div class="cs-transition-arrow" aria-hidden="true">↓</div>
  <div class="cs-track cs-track-retired"><span class="cs-track-label">Microsoft 365 interim solution</span><p>Retired</p></div>
</div>

## Final outcome

- Factory feedback and requirements became part of the improvement cycle for the main VMS.
- The main VMS was improved through multiple changes.
- The improved system became suitable for, and is used at, both Myanmar factories.
- The temporary Microsoft 365 register was retired after the main VMS became operational.
- The project moved from testing and operational gaps to a usable long-term visitor management system.

## What this project demonstrates

<ul class="cs-capabilities">
  <li>UAT</li>
  <li>Requirements analysis</li>
  <li>Business–IT alignment</li>
  <li>Stakeholder coordination</li>
  <li>Change management</li>
  <li>Business continuity</li>
  <li>Microsoft 365</li>
  <li>Power Automate</li>
  <li>SharePoint</li>
  <li>Implementation</li>
  <li>Validation</li>
  <li>User adoption</li>
</ul>

## Lessons learned

- **Test for operational fit.** UAT should confirm that a system fits the way people work, not only that its features function.
- **User feedback improves implementation.** Clear, consolidated feedback from the factory floor shaped a better system.
- **Temporary solutions protect continuity.** A short-term tool can keep operations running without becoming permanent technical debt.
- **Retire the bridge on time.** When the right long-term solution is ready, the temporary one should be removed.
- **Decide for sustainable value.** Technology decisions should favour what the operation can rely on long term.

<blockquote class="cs-quote">The goal is not to keep every solution we build. The goal is to keep the business running while moving toward the right long-term solution.</blockquote>

<div class="cs-cta">
  <p>Technology works best when it fits the operation.</p>
  <div class="cs-cta-actions">
    <a class="button" href="/case-studies/">View other case studies</a>
    <a class="button secondary" href="/projects/">View projects</a>
    <a class="button secondary" href="/contact/">Contact</a>
  </div>
</div>
