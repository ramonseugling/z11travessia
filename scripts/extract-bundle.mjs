#!/usr/bin/env node
// Decodes the Z11 Travessia bundled HTML into individual asset files and a UUID→path mapping.
// Run once: `node scripts/extract-bundle.mjs`
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BUNDLE = join(ROOT, 'Z11 Travessia - Landing Page.html');
const OUT_DIR = join(ROOT, 'public', 'assets');
const MAPPING_FILE = join(__dirname, 'asset-mapping.json');
const TEMPLATE_FILE = join(__dirname, 'template.html');

const MIME_EXT = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
  'video/mp4': 'mp4',
  'font/woff2': 'woff2',
  'font/woff': 'woff',
  'application/font-woff2': 'woff2',
  'application/javascript': 'js',
  'text/javascript': 'js',
};

function extractScript(html, type) {
  const re = new RegExp(`<script type="__bundler/${type}">([\\s\\S]*?)<\\/script>`);
  const m = html.match(re);
  if (!m) throw new Error(`Missing <script type="__bundler/${type}">`);
  return m[1];
}

const html = readFileSync(BUNDLE, 'utf8');
const manifest = JSON.parse(extractScript(html, 'manifest'));
const template = JSON.parse(extractScript(html, 'template'));

mkdirSync(OUT_DIR, { recursive: true });

const mapping = {};
let written = 0;
let skipped = 0;

for (const [uuid, entry] of Object.entries(manifest)) {
  const ext = MIME_EXT[entry.mime] || entry.mime.split('/')[1] || 'bin';

  // We intentionally don't keep React/Babel runtime or embedded woff2 — fonts come from Google Fonts CDN.
  if (ext === 'js' || ext === 'woff2' || ext === 'woff') {
    skipped++;
    continue;
  }

  let bytes = Buffer.from(entry.data, 'base64');
  if (entry.compressed) bytes = gunzipSync(bytes);

  const filename = `${uuid}.${ext}`;
  writeFileSync(join(OUT_DIR, filename), bytes);
  mapping[uuid] = `/assets/${filename}`;
  written++;
}

writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
writeFileSync(TEMPLATE_FILE, template);

console.log(`✔ wrote ${written} assets to public/assets/`);
console.log(`✔ skipped ${skipped} runtime/font files (using Google Fonts CDN instead)`);
console.log(`✔ mapping → ${MAPPING_FILE}`);
console.log(`✔ template → ${TEMPLATE_FILE}`);
