#!/usr/bin/env node

'use strict';

// Converts a newsletter HTML file to a plain-text companion. Dependency-free.
// Usage: node scripts/html-to-text.js <file.html> > <file.txt>

const fs = require('fs');

const file = process.argv[2];
if (!file || file === '--help' || file === '-h') {
  console.log('Usage: node scripts/html-to-text.js <newsletter.html> > <newsletter.txt>');
  process.exit(file ? 0 : 2);
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', ndash: '–', mdash: '—', hellip: '…', copy: '©', bull: '•' };

function decode(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, function (m, hex) { return String.fromCodePoint(parseInt(hex, 16)); })
    .replace(/&#(\d+);/g, function (m, dec) { return String.fromCodePoint(parseInt(dec, 10)); })
    .replace(/&([a-z]+);/gi, function (m, name) { return Object.prototype.hasOwnProperty.call(ENTITIES, name.toLowerCase()) ? ENTITIES[name.toLowerCase()] : m; });
}

let html = fs.readFileSync(file, 'utf8');
const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1];

html = html
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<head\b[\s\S]*?<\/head>/gi, '')
  .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
  .replace(/<img\b[^>]*>/gi, '')
  .replace(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, function (m, href, inner) {
    const label = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!label) return '';
    if (/^mailto:/i.test(href)) return label + ' <' + href.replace(/^mailto:/i, '').split('?')[0] + '>';
    if (!/^https?:/i.test(href) || label.replace(/\/$/, '') === href.replace(/\/$/, '')) return label;
    return label + ' (' + href + ')';
  })
  .replace(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/gi, function (m, inner) {
    return '\n\n' + inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toUpperCase() + '\n';
  })
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<\/(p|h[1-6]|tr|table|div|li)>/gi, '\n')
  .replace(/<li\b[^>]*>/gi, '- ')
  .replace(/<\/td>/gi, ' ')
  .replace(/<[^>]+>/g, '');

const lines = decode(html)
  .split('\n')
  .map(function (line) { return line.replace(/[ \t ]+/g, ' ').trim(); });

const out = [];
lines.forEach(function (line) {
  if (line === '' && (out.length === 0 || out[out.length - 1] === '')) return;
  out.push(line);
});
while (out.length && out[out.length - 1] === '') out.pop();

process.stdout.write((title ? decode(title).trim() + '\n' + '='.repeat(Math.min(decode(title).trim().length, 72)) + '\n' : '') + out.join('\n') + '\n');
