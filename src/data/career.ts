// Career facts for the About page. Source: owner's CV + private career inventory (confirmed 2026-11-03).
// Rules: no invented results, no phone number or address, no colleague names or internal figures.

export interface RoleStep {
  title: string;
  org: string;
  period: string;
}

export interface Job {
  title: string;
  org: string;
  place: string;
  period: string;
  /** Title changes inside the same employer, newest first. */
  steps?: RoleStep[];
  points: string[];
}

export interface SystemItem {
  name: string;
  note?: string;
  status?: 'In progress' | 'Retired';
}

export const yearsInIt = '15+';

export const experience: Job[] = [
  {
    title: 'IT Manager',
    org: 'Garment manufacturing group',
    place: 'Thanlyin (Yangon) and Pathein, Myanmar',
    period: '2019 – present',
    steps: [
      { title: 'IT Manager', org: 'Both Myanmar factories', period: 'Jan 2026 – present' },
      { title: 'IT Executive', org: 'Both Myanmar factories', period: '2023 – 2025' },
      { title: 'IT Executive', org: 'Pathein factory', period: '2019 – 2023' },
    ],
    points: [
      'Run IT for two garment factories and supervise an IT Assistant at each site.',
      'Keep in-house IT projects on track across both factories and report progress to the Director and factory management.',
      'Write executive summaries, system reviews and proposals for the Director.',
      'Coordinate system roll-outs with the group’s overseas IT team and outside vendors: UAT, change requests and issue follow-up.',
      'Prepare the monthly IT usage report and IT budget for every department at both factories.',
      'Handle IT purchasing end to end: purchase requests and orders, vendor negotiation, delivery and service follow-up.',
      'Look after servers, VMware ESXi hosts, network devices, CCTV and workstations; inspect installs and supervise vendor work on site.',
      'Administer Microsoft 365 for the company domain: accounts, licence reviews and upgrades, Exchange and mobile email.',
      'Keep the project record: activity and decision logs, SDLC documents, procedures and the IT asset database.',
      'Give 1st and 2nd-line support and train users.',
    ],
  },
  {
    title: 'Part-time Teacher',
    org: 'Computer training centre',
    place: 'Pathein',
    period: '2018 – present',
    points: ['Teach Microsoft Office and the basics of Adobe PageMaker and Photoshop.'],
  },
  {
    title: 'Personal Assistant to the Managing Director',
    org: 'Private company',
    place: 'Yangon',
    period: '2018 – 2019',
    points: [
      'Ran management meetings: agendas, minutes and action-item follow-up.',
      'Summarised mail, reports and government notices so the MD could decide quickly.',
      'Acted as the link between management and staff.',
    ],
  },
  {
    title: 'IT Assistant',
    org: 'Garment factory',
    place: 'Pathein',
    period: '2017 – 2018',
    points: [
      'Took part in the 2017 ERP roll-out for the warehouse: barcode, goods received (GRN) and issuing software.',
      'Hands-on support for laptops, desktops and network cabling.',
    ],
  },
  {
    title: 'IT Staff',
    org: 'Myanmar Police Organization',
    place: 'Pathein',
    period: '2010 – 2017',
    points: [
      'Installed and ran Windows Server 2003, 2008, 2012 and 2016.',
      'Installed hardware, operating systems and software; found and fixed system and network faults.',
      'Maintained systems, the network and CCTV.',
      'Supported users in person and by phone; wrote procedures and reports; rolled out applications.',
    ],
  },
];

export const vendorSystems: SystemItem[] = [
  { name: 'FINAC Payroll & Time Attendance', note: 'Roll-out with the vendor for both factories.', status: 'In progress' },
  { name: 'Visitor Management System', note: 'Led user acceptance testing and reported the changes needed.' },
  { name: 'Production Tracking System', note: 'Gathered production feedback, reported to the Director and supported its rebuild.' },
  { name: 'Plani8 (Solvei8)', note: 'Production planning.', status: 'In progress' },
  { name: 'ERP', note: 'Warehouse and production.' },
  { name: 'Fabric Barcode system' },
  { name: 'Janet', note: 'Quality and production.' },
  { name: 'Raptool', note: 'Shipment tracking from packing to customer.' },
];

export const builtSystems: SystemItem[] = [
  { name: 'Visitor register on Microsoft 365', note: 'Interim solution: Forms → Power Automate → SharePoint.', status: 'Retired' },
  { name: 'Fabric Age Control dashboard', note: 'Tracks fabric age from arrival so older rolls are used first.' },
];

export const learningBuilds: SystemItem[] = [
  { name: 'Hourly production automation', note: 'Telegram → AI via n8n → SharePoint Excel.', status: 'In progress' },
  { name: 'Style Control Workbook & live dashboard', note: 'Follows each order from merchandising to delivery.', status: 'In progress' },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Coordination & documentation',
    items: ['Milestone tracking', 'Management reports', 'Executive summaries', 'Proposals', 'Agendas and minutes', 'SDLC documents'],
  },
  {
    group: 'Stakeholders & vendors',
    items: ['PR/PO procurement', 'Vendor negotiation', 'Install supervision', 'Overseas IT teams', 'Department heads', 'Government offices', 'User training'],
  },
  {
    group: 'Microsoft 365',
    items: ['Word', 'Excel (trackers, dashboards, Office Scripts)', 'PowerPoint', 'SharePoint Online', 'Forms', 'Power Automate', 'Exchange', 'User and licence admin'],
  },
  {
    group: 'Infrastructure',
    items: ['Windows Server 2008–2016', 'Active Directory', 'VMware ESXi', 'TCP/IP', 'Network printers', 'CCTV', 'IT asset database'],
  },
  {
    group: 'Automation & AI',
    items: ['n8n (Docker)', 'Telegram bots', 'AI document reading (Claude, Gemini, Copilot)'],
  },
];

export const education: { name: string; org: string; status: string }[] = [
  { name: 'Higher Diploma in Computer Science', org: 'Spring University Myanmar', status: 'In progress' },
  { name: 'Diploma in Computer Science', org: 'Spring University Myanmar', status: 'Completed' },
  { name: 'Law, 2nd year', org: 'Pathein University', status: 'Not completed' },
];

export const certifications: { done: { name: string; org?: string }[]; inProgress: { name: string }[] } = {
  done: [
    { name: 'MCSA 70-740', org: 'Loop Avoidance Training Center' },
    { name: 'Advanced Network Engineering', org: 'Youth Training Center' },
    { name: 'Server Administration', org: 'Myanmar IT Academy' },
    { name: 'Certificate of Human Resource Management' },
    { name: 'Basic Adobe Photoshop' },
    { name: 'Basic English – 4 Skills' },
  ],
  inProgress: [
    { name: 'CCNA' },
    { name: 'Professional Executive Diploma in Network Technology & Cyber Security' },
    { name: 'Diploma in Executive Human Resource Management' },
  ],
};

/** Home page "Technology ecosystem": tools and systems I have worked with, grouped. */
export const ecosystem: { group: string; items: string[] }[] = [
  {
    group: 'Microsoft',
    items: ['Microsoft 365', 'Exchange', 'SharePoint Online', 'Forms', 'Power Automate', 'Excel & Office Scripts', 'Windows Server', 'Active Directory'],
  },
  {
    group: 'Infrastructure',
    items: ['VMware ESXi', 'Windows Server 2008–2016', 'TCP/IP networks', 'Network devices', 'CCTV', 'Network printers', 'IT asset database'],
  },
  {
    group: 'Security',
    items: ['Backups', 'User accounts & access', 'Microsoft 365 licence reviews', 'Vendor install supervision'],
  },
  {
    group: 'Business systems',
    items: ['ERP (warehouse & production)', 'FINAC Payroll & Time Attendance', 'Plani8 production planning', 'Fabric Barcode', 'Janet (QA)', 'Raptool (shipments)'],
  },
];

/** One line per role, newest first — the short timeline on the home page. */
export const timeline = experience.flatMap((job) =>
  job.steps
    ? job.steps.map((step) => ({ title: step.title, org: step.org, period: step.period }))
    : [{ title: job.title, org: job.org, period: job.period }],
);

export const languages: { name: string; level: string }[] = [
  { name: 'Burmese', level: 'Native' },
  { name: 'English', level: 'Working proficiency' },
];
