#!/usr/bin/env node
'use strict';

/*
 * Builds brand/assets/metadata/image-dates.json: the date each image was first
 * added to the repository. The image library gallery reads it to offer
 * "Newest added" sorting, so people can see which version of an image is newest.
 *
 *   node scripts/build-image-dates.js           write the file
 *   node scripts/build-image-dates.js --check   exit 1 if any tracked image is missing from it
 *
 * "Added" is the author date of the first commit that introduced the file.
 * Renames, moves and exact (byte-identical) copies keep the date of the original,
 * so copying an old banner into a new folder does not make it look new. Resized or
 * edited versions are new files and get their own date. It is NOT the date the
 * artwork was designed: git cannot know that.
 *
 * Needs full git history. A shallow clone would give every old file the date of
 * the cut-off commit, so the script refuses to run on one.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const IMAGE = /\.(png|jpe?g|webp|gif|svg|avif)$/i;
const OUT = 'brand/assets/metadata/image-dates.json';

const root = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
const git = (args) =>
  execFileSync('git', ['-c', 'core.quotepath=false', ...args], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 1 << 28,
  });

if (git(['rev-parse', '--is-shallow-repository']).trim() === 'true') {
  console.error('This is a shallow clone, so the dates would be wrong.');
  console.error('Run `git fetch --unshallow` first, then try again.');
  process.exit(1);
}

// Walk history oldest to newest, following each path through renames.
const born = new Map();
const log = git([
  'log', '--topo-order', '--reverse',
  '-M', '--find-copies=100%', '--find-copies-harder',
  '--name-status', '--format=@@%aI',
]);
let date = null;
for (const line of log.split('\n')) {
  if (line.startsWith('@@')) {
    date = line.slice(2);
    continue;
  }
  if (!line) continue;
  const [status, a, b] = line.split('\t');
  const kind = status[0];
  if (kind === 'A') {
    if (!born.has(a)) born.set(a, date);
  } else if (kind === 'C') {
    // exact copy: inherits the original's date; the original stays where it is
    if (!born.has(b)) born.set(b, born.get(a) || date);
  } else if (kind === 'R') {
    born.set(b, born.get(a) || date);
    born.delete(a);
  } else if (kind === 'D') {
    born.delete(a);
  }
}

const tracked = git(['ls-files', 'brand/assets']).split('\n').filter((f) => IMAGE.test(f));
const files = {};
for (const f of tracked.sort()) {
  if (born.has(f)) files[f] = born.get(f);
}

if (process.argv.includes('--check')) {
  let existing = {};
  try {
    existing = JSON.parse(fs.readFileSync(path.join(root, OUT), 'utf8')).files || {};
  } catch (e) {
    console.error(`Cannot read ${OUT}: ${e.message}`);
    process.exit(1);
  }
  const missing = Object.keys(files).filter((f) => !(f in existing));
  const stale = Object.keys(existing).filter((f) => !(f in files));
  if (missing.length || stale.length) {
    console.error(`${OUT} is out of date: ${missing.length} image(s) missing, ${stale.length} removed.`);
    for (const f of missing.slice(0, 10)) console.error(`  missing  ${f}`);
    for (const f of stale.slice(0, 10)) console.error(`  removed  ${f}`);
    console.error('Run: node scripts/build-image-dates.js');
    process.exit(1);
  }
  console.log(`${OUT} is up to date (${Object.keys(files).length} images).`);
  process.exit(0);
}

const out = {
  generated: new Date().toISOString().slice(0, 10),
  meaning:
    'Each value is the author date of the first commit that added the image to the repository; renames and exact copies keep the original date. It is the date added, not the date the artwork was designed. Images missing from this list were added after it was generated.',
  refresh: 'node scripts/build-image-dates.js',
  files,
};
fs.writeFileSync(path.join(root, OUT), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${OUT}: ${Object.keys(files).length} images.`);
