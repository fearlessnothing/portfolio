// Export as-built wireframes of the site to one PDF.
// Opens each page in headless Microsoft Edge, turns it into a grey wireframe
// (no colours, photos become crossed boxes), takes full-page screenshots at
// desktop and mobile width, and prints them into a single PDF.
//
// Usage:
//   npm run wireframes                              (live site)
//   npm run wireframes -- http://localhost:4321     (local dev or preview)
//   npm run wireframes -- <base-url> <output.pdf>
//
// Needs only Node 22+ and Microsoft Edge (or set EDGE_PATH to Chrome/Edge).

import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const BASE = (process.argv[2] || 'https://minheinzaw.pages.dev').replace(/\/$/, '');
const OUT = resolve(process.argv[3] || 'docs/03-design/wireframes-v2.pdf');

const PAGES = [
  ['Home', '/'],
  ['Case studies', '/case-studies/'],
  ['Case study detail', '/case-studies/visitor-management/'],
  ['Projects', '/projects/'],
  ['About', '/about/'],
  ['Process', '/process/'],
  ['Contact', '/contact/'],
];

const SIZES = [
  { name: 'Desktop', width: 1280, height: 800, scale: 1, mobile: false },
  { name: 'Mobile', width: 390, height: 844, scale: 2, mobile: true },
];

// Largest PDF page Chromium allows is 200 in = 19200 CSS px.
const MAX_SHEET_PX = 19000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findBrowser() {
  const candidates = [
    process.env.EDGE_PATH,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error('Edge or Chrome not found. Set EDGE_PATH to the browser .exe.');
  return found;
}

// Minimal Chrome DevTools Protocol client over Node's built-in WebSocket.
function connect(url) {
  return new Promise((resolveConn, rejectConn) => {
    const ws = new WebSocket(url);
    const pending = new Map();
    const listeners = new Set();
    let nextId = 0;
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { ok, fail } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? fail(new Error(msg.error.message)) : ok(msg.result);
      } else {
        for (const l of listeners) l(msg);
      }
    };
    ws.onerror = () => rejectConn(new Error('DevTools connection failed'));
    ws.onopen = () =>
      resolveConn({
        send: (method, params = {}) =>
          new Promise((ok, fail) => {
            const id = ++nextId;
            pending.set(id, { ok, fail });
            ws.send(JSON.stringify({ id, method, params }));
          }),
        once: (method) =>
          new Promise((ok) => {
            const l = (msg) => {
              if (msg.method === method) {
                listeners.delete(l);
                ok(msg.params);
              }
            };
            listeners.add(l);
          }),
        close: () => ws.close(),
      });
  });
}

// Runs inside the page: mark coloured boxes and photos, then apply wireframe styles.
const WIREFRAME_SCRIPT = `(() => {
  for (const el of document.body.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (cs.backgroundImage.includes('url(')) { el.classList.add('wf-img'); continue; }
    const bg = cs.backgroundColor;
    const transparent = bg === 'transparent' || /rgba\\(.*,\\s*0\\)$/.test(bg);
    if (!transparent) el.classList.add('wf-box');
  }
  for (const media of document.querySelectorAll('img, video, iframe, canvas')) {
    const r = media.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    const cs = getComputedStyle(media);
    const box = document.createElement('div');
    box.className = 'wf-ph';
    for (const p of ['position', 'top', 'right', 'bottom', 'left', 'zIndex', 'margin',
      'gridArea', 'alignSelf', 'justifySelf', 'borderRadius', 'flex', 'maxWidth']) {
      box.style[p] = cs[p];
    }
    box.style.display = 'block';
    box.style.width = r.width + 'px';
    box.style.height = r.height + 'px';
    media.replaceWith(box);
  }
  const line = '#a8a8a8';
  const cross = 'linear-gradient(to top right, transparent calc(50% - 1px), ' + line +
    ' 50%, transparent calc(50% + 1px)), linear-gradient(to bottom right, transparent calc(50% - 1px), ' +
    line + ' 50%, transparent calc(50% + 1px))';
  const style = document.createElement('style');
  style.textContent = \`
    *, *::before, *::after {
      animation: none !important; transition: none !important;
      color: #222 !important; -webkit-text-fill-color: currentColor !important;
      background-color: transparent !important; background-image: none !important;
      box-shadow: none !important; text-shadow: none !important;
      border-color: #9a9a9a !important; outline-color: #9a9a9a !important;
    }
    html, body { background: #fff !important; }
    .wf-box { background-color: #efefef !important; }
    .wf-box .wf-box { background-color: #e3e3e3 !important; }
    .wf-img, .wf-ph { background-color: #d9d9d9 !important; background-image: \${cross} !important; outline: 1px solid \${line}; }
    svg { filter: grayscale(1); }
  \`;
  document.head.appendChild(style);
  return document.documentElement.scrollHeight;
})()`;

async function capture(cdp, url, size) {
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: size.width,
    height: size.height,
    deviceScaleFactor: size.scale,
    mobile: size.mobile,
  });
  const loaded = cdp.once('Page.loadEventFired');
  await cdp.send('Page.navigate', { url });
  await loaded;
  await cdp.send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true });
  await sleep(400);
  const { result } = await cdp.send('Runtime.evaluate', { expression: WIREFRAME_SCRIPT, returnByValue: true });
  const fullHeight = Math.ceil(result.value);
  await sleep(200);
  const shot = await cdp.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: size.width, height: fullHeight, scale: 1 },
  });
  return { png: shot.data, width: size.width, height: fullHeight };
}

function buildSheetsHtml(shots) {
  const today = new Date().toISOString().slice(0, 10);
  const pad = 32;
  const header = 64;
  let css = `
    body { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; color: #222; }
    .sheet { box-sizing: border-box; padding: ${pad}px; break-after: page; }
    .sheet:last-child { break-after: auto; }
    h2 { margin: 0 0 16px; font-size: 22px; font-weight: 600; }
    h2 span { color: #666; font-weight: 400; }
    .sheet img { display: block; border: 1px solid #bbb; }
    .cover { font-size: 18px; line-height: 1.6; }
    .cover h1 { font-size: 40px; margin: 0 0 8px; }
    @page cover { size: 1123px 794px; margin: 0; }
    .cover { page: cover; }
  `;
  const list = PAGES.map(([name, path], i) => `<li>${String(i + 1).padStart(2, '0')} ${name} <code>${path}</code></li>`).join('');
  let body = `<section class="sheet cover"><h1>Wireframes v2 (as built)</h1>
    <p>Generated ${today} from ${BASE}<br>Desktop 1280 px and mobile 390 px. Grey boxes with a cross are photos.</p>
    <ol>${list}</ol></section>`;
  shots.forEach((s, i) => {
    let w = s.width;
    let h = s.height;
    const sheetH = h + header + pad * 2;
    if (sheetH > MAX_SHEET_PX) {
      const k = (MAX_SHEET_PX - header - pad * 2) / h;
      w = Math.floor(w * k);
      h = Math.floor(h * k);
    }
    const pageW = Math.max(w, 600) + pad * 2 + 2;
    const pageH = h + header + pad * 2 + 2;
    css += `@page p${i} { size: ${pageW}px ${pageH}px; margin: 0; } .p${i} { page: p${i}; }\n`;
    body += `<section class="sheet p${i}"><h2>${s.label} <span>· ${s.size} ${s.width} px · ${s.path}</span></h2>
      <img src="shot-${i}.png" width="${w}" height="${h}" alt=""></section>`;
  });
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`;
}

async function main() {
  const browser = findBrowser();
  const profile = mkdtempSync(join(tmpdir(), 'wireframes-'));
  const proc = spawn(browser, [
    '--headless=new',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    const portFile = join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !existsSync(portFile); i++) await sleep(100);
    if (!existsSync(portFile)) throw new Error('Browser did not start.');
    await sleep(200);
    const port = readFileSync(portFile, 'utf8').split('\n')[0].trim();
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    const page = targets.find((t) => t.type === 'page');
    const cdp = await connect(page.webSocketDebuggerUrl);
    await cdp.send('Page.enable');
    await cdp.send('Emulation.setEmulatedMedia', {
      features: [
        { name: 'prefers-color-scheme', value: 'light' },
        { name: 'prefers-reduced-motion', value: 'reduce' },
      ],
    });

    const shots = [];
    for (const size of SIZES) {
      for (const [label, path] of PAGES) {
        process.stdout.write(`${size.name.padEnd(8)} ${path} ... `);
        const shot = await capture(cdp, BASE + path, size);
        shots.push({ ...shot, label, path, size: size.name });
        console.log(`${shot.height} px`);
      }
    }

    shots.forEach((s, i) => writeFileSync(join(profile, `shot-${i}.png`), Buffer.from(s.png, 'base64')));
    const htmlPath = join(profile, 'wireframes.html');
    writeFileSync(htmlPath, buildSheetsHtml(shots));

    await cdp.send('Emulation.clearDeviceMetricsOverride');
    await cdp.send('Emulation.setEmulatedMedia', { media: 'print' });
    const loaded = cdp.once('Page.loadEventFired');
    await cdp.send('Page.navigate', { url: pathToFileURL(htmlPath).href });
    await loaded;
    const pdf = await cdp.send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true });
    writeFileSync(OUT, Buffer.from(pdf.data, 'base64'));
    cdp.close();
    console.log(`\nSaved ${OUT}`);
  } finally {
    proc.kill();
    await sleep(800);
    try { rmSync(profile, { recursive: true, force: true }); } catch { /* Edge may still hold a lock */ }
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
