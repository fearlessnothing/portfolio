---
title: "Backup and Recovery After a Ransomware Scare"
system: "Server backup and recovery"
order: 4
role: "IT Executive"
duration: "2021 – present"
environment: "Garment manufacturing · 4 servers"
focus:
  - "3-2-1 backup"
  - "ERP and Payroll (SQL)"
  - "File server"
  - "Restore tests"
  - "Network recovery after a fire"
technologies:
  - "Windows Server Backup"
  - "SQL Server"
  - "External drives"
  - "Cloud storage"
tags:
  - "Backup"
  - "Disaster recovery"
  - "Servers"
  - "SQL"
summary: "After ransomware hit one department in 2021, I put a 3-2-1 backup routine in place for the ERP, Payroll and file servers, tested restores, and later brought the network back within a day after a fire burned the point where every department's cables met."
highlights: ["4 servers", "Daily ERP & Payroll backups", "Servers back in 1 day after fire"]
category: "Backup and recovery"
problem: "Ransomware in 2021 left some user data unrecoverable and showed that a server failure could stop operations."
roleSummary: "Set up and ran a 3-2-1 backup routine for the ERP, Payroll and file servers, and tested restores."
outcome: "Restores proven; after a 2023 fire, the servers were back in use within one full day."
results:
  - "ERP and Payroll databases (about 2 GB) backed up every day; the file server (about 2 TB) every three months."
  - "Restores tested on SQL databases and on a whole Windows Server."
  - "After the 2023 fire: temporary network running and servers back in use within one full day; full repair in about two weeks."
---

## Executive summary

In 2021 ransomware hit PCs in one department. We found it in time, so it never reached the servers, but some data on a user's PC could not be recovered. That showed me a file server problem could stop the whole operation. I set up a 3-2-1 backup routine for the ERP, Payroll and file servers and tested that the backups could be restored. In 2023 a fire at the Thanlyin factory burned the point where the network cables for every department met. I had a temporary network and the servers back in use within one full day.

## Context

The factory runs on 4 servers. The ERP and Payroll databases are on SQL Server; the file server holds the departments' shared files.

## The trigger: ransomware in 2021

- Ransomware hit PCs in one department.
- It was found in time and did not reach the servers.
- Some data on a user's PC could not be recovered.

The lesson was clear: if a server fails, for any reason, the operation stops. Backups had to be routine, not occasional.

## What I put in place

- **3-2-1 rule:** three copies of the data, on two kinds of storage, with one copy off site. Copies are kept on an external drive and in the cloud.
- **ERP and Payroll:** SQL databases (about 2 GB) exported and backed up every day.
- **File server:** about 2 TB, so a full backup runs every three months.
- **Tool:** Windows Server Backup.
- **Restore tests:** restored SQL databases and a whole Windows Server, to prove the backups work.

<ol class="cs-flow" aria-label="Backup routine">
  <li>Back up</li>
  <li>Copy to external drive and cloud</li>
  <li>Test the restore</li>
</ol>

## The fire in 2023

On one day early in 2023, a fire at the Thanlyin factory burned the place where the network cables for every department met.

<ol class="cs-journey">
  <li><span class="cs-step">01</span><div><strong>Fire</strong><p>The cable meeting point for every department burned.</p></div></li>
  <li><span class="cs-step">02</span><div><strong>Same day: temporary network</strong><p>Rebuilt the network cabling as a temporary cover, working the whole day.</p></div></li>
  <li><span class="cs-step">03</span><div><strong>Servers back in use</strong><p>All servers usable again within one full day.</p></div></li>
  <li class="cs-journey-done"><span class="cs-step">04</span><div><strong>Full repair</strong><p>Permanent cabling finished in about two weeks.</p></div></li>
</ol>

## Challenges & risks

- **Large file server:** at about 2 TB, the file server is backed up every three months. The ERP and Payroll databases are small (about 2 GB), so they are backed up every day.
- **Pressure during the fire:** the priority was a working temporary network first, and the permanent repair after.

## Results

- ERP and Payroll backed up every day; the file server every three months.
- Copies kept on an external drive and in the cloud, following 3-2-1.
- Restores proven on SQL databases and on a whole Windows Server.
- After the fire, the servers were back in use within one full day.

## Lessons learned

- **A backup is only real once you have restored it.** Testing restores is what makes the routine worth trusting.
- **Be ready before something happens.** The fire was a very worrying day. Since then I keep backups current at all times, so whatever happens, we can bring the servers back quickly.

<div class="cs-cta">
  <p>Technology works best when it fits the operation.</p>
  <div class="cs-cta-actions">
    <a class="button" href="/case-studies/">View other case studies</a>
    <a class="button secondary" href="/projects/">View projects</a>
    <a class="button secondary" href="/contact/">Contact</a>
  </div>
</div>
