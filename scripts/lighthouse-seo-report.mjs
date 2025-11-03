#!/usr/bin/env node
/*
 Batch Lighthouse SEO audit runner
 - Builds the app (unless --no-build)
 - Starts a local production server on --port (default 3010)
 - Reads URLs from /sitemap.xml
 - Runs Lighthouse (desktop, SEO) per URL
 - Emits reports/lighthouse-seo-report.json and .csv

 Usage:
   npm run seo:audit                   # build, start, audit all sitemap URLs
   node scripts/lighthouse-seo-report.mjs --limit 20 --pattern "/london/" --port 3011
   node scripts/lighthouse-seo-report.mjs --no-build

 Notes:
 - On Windows, Lighthouse may exit non-zero with EPERM during temp cleanup; this script
   still parses the JSON output and records results.
*/

import { spawn } from 'node:child_process';
import { writeFile, mkdir, stat, readdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';

const isWin = process.platform === 'win32';
const NPX = isWin ? 'npx.cmd' : 'npx';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { port: 3010, limit: null, pattern: null, noBuild: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--port' && args[i+1]) out.port = parseInt(args[++i], 10);
    else if (a === '--limit' && args[i+1]) out.limit = parseInt(args[++i], 10);
    else if (a === '--pattern' && args[i+1]) out.pattern = args[++i];
    else if (a === '--no-build') out.noBuild = true;
    // Fallbacks for npm run argument quirks: positional limit and pattern
    else if (/^\d+$/.test(a) && out.limit == null) out.limit = parseInt(a, 10);
    else if (!a.startsWith('--') && out.pattern == null) out.pattern = a;
  }
  return out;
}

async function run(cmd, cmdArgs, opts = {}) {
  return new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, { stdio: ['ignore', 'pipe', 'pipe'], shell: isWin, ...opts });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', d => { stdout += d.toString(); });
    child.stderr.on('data', d => { stderr += d.toString(); });
    child.on('close', (code) => resolve({ code, stdout, stderr }));
    child.on('error', (err) => resolve({ code: -1, stdout, stderr: String(err) }));
  });
}

async function fetchText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return await r.text();
}

function urlsFromSitemap(xml, pattern) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const u = m[1].trim();
    if (pattern && !u.includes(pattern)) continue;
    urls.push(u);
  }
  // de-duplicate
  return Array.from(new Set(urls));
}

async function ensureReportsDir() {
  const dir = path.resolve('reports');
  await mkdir(dir, { recursive: true });
  return dir;
}

function toCSV(rows) {
  const header = ['url','score','fail_count','fail_ids'];
  const lines = [header.join(',')];
  for (const r of rows) {
    const failIds = (r.fails || []).join('|').replaceAll(',', ';');
    lines.push([r.url, r.score ?? '', (r.fails||[]).length, failIds].join(','));
  }
  return lines.join('\n');
}

async function main() {
  const { port, limit, pattern, noBuild } = parseArgs();

  // Build only if requested or if there is no existing production build
  let hasBuild = false;
  try { await stat(path.resolve('.next', 'BUILD_ID')); hasBuild = true; } catch (e) { void e; }
  if (!noBuild && !hasBuild) {
    console.log('• Building app (next build)...');
    const b = await run(NPX, ['next', 'build']);
    if (b.code !== 0) {
      console.error('Build failed:', b.stderr || b.stdout);
      try { server?.kill(); } catch (e) { void e; }
      process.exit(1);
    }
  } else {
    console.log('• Using existing production build (.next)');
  }

  async function startServer(startPort, attempts = 10) {
    for (let i = 0; i < attempts; i++) {
      const p = startPort + i;
      console.log(`• Starting production server on :${p} ...`);
      const srv = spawn(NPX, ['next', 'start', '-p', String(p)], { stdio: ['ignore','pipe','pipe'], shell: isWin });
      let ready = false;
      let addrInUse = false;
      srv.stdout.on('data', (d) => {
        const s = d.toString();
        if (s.includes(`http://localhost:${p}`)) ready = true;
        process.stdout.write(s);
      });
      srv.stderr.on('data', (d) => {
        const s = d.toString();
        if (s.includes('EADDRINUSE')) addrInUse = true;
        process.stderr.write(s);
      });
      // Wait up to 10s per attempt
      for (let t = 0; t < 100 && !ready && !addrInUse; t++) await sleep(100);
      if (ready) return { server: srv, port: p };
      try { srv.kill(); } catch (e) { void e; }
      if (addrInUse) continue; // try next port
    }
    throw new Error('Could not start server on any attempted port');
  }

  const { server, port: actualPort } = await startServer(port);
  const baseActual = `http://localhost:${actualPort}`;

  // Fetch sitemap
  console.log('• Fetching sitemap ...');
  // Fetch sitemap with simple retry; if unavailable, we'll fallback to scanning app/london
  let sitemapText = null;
  for (let i = 0; i < 10; i++) {
    try {
      sitemapText = await fetchText(`${baseActual}/sitemap.xml`);
      break;
    } catch (e) {
      void e;
      await sleep(300);
    }
  }
  let urls = sitemapText ? urlsFromSitemap(sitemapText, pattern) : [];
  // Map absolute sitemap URLs to the local server base to avoid auditing production by accident
  if (urls.length) {
    try {
      urls = urls.map((u) => {
        const p = new URL(u).pathname;
        return `${baseActual}${p}`;
      });
    } catch (e) { void e; }
  }
  if (!urls.length) {
    console.warn('• Sitemap produced no URLs; falling back to scanning app/london/*');
    const londonDir = path.resolve('app', 'london');
    const entries = await readdir(londonDir, { withFileTypes: true });
    const areaDirs = entries.filter(e => e.isDirectory());
    urls = areaDirs.map(e => `${baseActual}/london/${e.name}`);
    // include homepage
    urls.unshift(`${baseActual}/`);
    if (pattern) urls = urls.filter(u => u.includes(pattern));
  }
  if (limit && urls.length > limit) urls = urls.slice(0, limit);
  console.log(`• Auditing ${urls.length} URLs`);

  const results = [];
  for (const url of urls) {
    process.stdout.write(`  - Lighthouse SEO: ${url} ... `);
    const args = [
      url,
      '--quiet',
      '--chrome-flags=--headless=new',
      '--only-categories=seo',
      '--preset=desktop',
      '--output=json',
      '--output-path=stdout'
    ];
    const out = await run(NPX, ['--yes','lighthouse', ...args], { env: process.env });
    let parsed = null;
    try {
      parsed = JSON.parse(out.stdout);
    } catch (e) {
      void e;
      // Sometimes Lighthouse writes extra logs; try to find the JSON chunk
      const start = out.stdout.indexOf('{');
      const end = out.stdout.lastIndexOf('}');
      if (start !== -1 && end !== -1 && end > start) {
        try { parsed = JSON.parse(out.stdout.slice(start, end + 1)); } catch (e2) { void e2; }
      }
    }
    if (!parsed) {
      console.log('ERR');
      results.push({ url, score: null, fails: ['parse-error'], error: out.stderr || out.stdout });
      continue;
    }
    const score = (parsed.categories?.seo?.score ?? null);
    const audits = parsed.audits || {};
    const fails = Object.values(audits)
      .filter(a => a && typeof a === 'object' && a.score !== null && a.score < 1)
      .map(a => a.id || a.title || 'unknown');
    const numericScore = score != null ? Math.round(score * 100) : null;
    console.log(`${numericScore}`);
    results.push({ url, score: numericScore, fails });
  }

  // Write reports
  const reportsDir = await ensureReportsDir();
  const jsonPath = path.join(reportsDir, 'lighthouse-seo-report.json');
  const csvPath = path.join(reportsDir, 'lighthouse-seo-report.csv');
  await writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2), 'utf8');
  await writeFile(csvPath, toCSV(results), 'utf8');
  console.log(`• Reports written:\n  - ${jsonPath}\n  - ${csvPath}`);

  try { server.kill(); } catch (e) { void e; }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
