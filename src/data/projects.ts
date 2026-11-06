// Project data for the Projects page (/projects/).
// About page CV lists live in career.ts; keep facts in both places in step.

export type Status = 'Production' | 'Implemented' | 'In progress' | 'Learning' | 'Retired';

export interface Project {
  title: string;
  /** Short type label shown next to the status, e.g. "Interim" or "Prototype". */
  kind: string;
  status?: Status;
  /** "Problem" for things I built; "Purpose" where I have no confirmed problem statement. */
  need: { label: 'Problem' | 'Purpose' | 'Learning'; text: string };
  contribution: string;
  builtBy?: string;
  tech?: string[];
  link?: { href: string; label: string };
}

// Ownership rule: only items in "Built at work" and "Learning builds" were built by me.
// Everything in "Implemented or coordinated" was built by the group's developers or a vendor.
export const builtAtWork: Project[] = [
  {
    title: 'Fabric Age Control dashboard',
    kind: 'Built by me',
    status: 'Production',
    need: { label: 'Problem', text: 'Fabric should not sit in the warehouse for years; when an order comes in, older rolls should be used first.' },
    contribution: 'Built a dashboard that tracks each fabric’s age from the day it arrives. Used every day in the warehouse.',
    tech: ['Excel', 'SharePoint', 'Power Automate'],
  },
];

export const coordinated: Project[] = [
  {
    title: 'Visitor Management System',
    kind: 'Group system',
    status: 'Implemented',
    need: { label: 'Problem', text: 'Factory testing showed the new visitor system did not yet fit how visitors are handled on site.' },
    contribution: 'Led factory-side UAT, gathered requirements and feedback, coordinated changes with the developers and supported rollout. In use at both Myanmar factories.',
    builtBy: 'Built by the group’s in-house development team',
    link: { href: '/case-studies/visitor-management/', label: 'View case study' },
  },
  {
    title: 'Production Tracking System',
    kind: 'Group system · Rebuild',
    status: 'In progress',
    need: { label: 'Problem', text: 'The group system did not fit our two Myanmar factories, and production teams got little back from it.' },
    contribution: 'Gathered production feedback, explained the gaps to the developers, reported to the Director, and now support the rebuild.',
    builtBy: 'Built by the group’s in-house development team',
    link: { href: '/case-studies/production-tracking-rebuild/', label: 'View case study' },
  },
  {
    title: 'Plani8',
    kind: 'Vendor system · Solvei8',
    status: 'In progress',
    need: { label: 'Purpose', text: 'Production planning.' },
    contribution: 'Project coordination for the roll-out. Tracki8 and Maintaini8 are planned next, once Plani8 is stable.',
    builtBy: 'Bought from Solvei8',
  },
  {
    title: 'FINAC Payroll',
    kind: 'Vendor system · Datamation',
    status: 'In progress',
    need: { label: 'Purpose', text: 'Payroll, to replace the current in-house payroll system.' },
    contribution: 'Project coordination: data and requirements gathering.',
    builtBy: 'Bought from Datamation',
  },
];

export const learning: Project[] = [
  {
    title: 'Style Control Workbook & live dashboard',
    kind: 'Learning build · Prototype',
    status: 'Learning',
    need: { label: 'Learning', text: 'How to follow one order through every production department, from merchandising to delivery, in one place.' },
    contribution: 'Building a prototype workbook with a live dashboard. In progress.',
    tech: ['Excel', 'SharePoint', 'Power Automate'],
  },
  {
    title: 'Hourly production automation',
    kind: 'Learning build · Experiment',
    status: 'Learning',
    need: { label: 'Learning', text: 'Exploring workflow automation with n8n and AI.' },
    contribution: 'Experiment: hourly production updates sent on Telegram are read by an AI step in n8n and written to a SharePoint Excel file. In progress.',
    tech: ['n8n', 'Telegram', 'AI', 'SharePoint'],
  },
];

export const retired: Project[] = [
  {
    title: 'Visitor register on Microsoft 365',
    kind: 'Interim · Built by me',
    status: 'Retired',
    need: { label: 'Problem', text: 'Visitor registration had to keep running while the main visitor system was being improved.' },
    contribution: 'Built a temporary business-continuity register that collected visits and notified the right people. Retired once the improved main system was in use.',
    tech: ['Microsoft Forms', 'Power Automate', 'SharePoint'],
    link: { href: '/case-studies/visitor-management/', label: 'View case study' },
  },
];
