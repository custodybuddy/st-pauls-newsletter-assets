#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const STRICT = process.argv.includes('--strict');
const HELP = process.argv.includes('--help') || process.argv.includes('-h');
const SECTIONS_INDEX = process.argv.indexOf('--sections');
const SECTIONS_FILE = SECTIONS_INDEX > -1 ? process.argv[SECTIONS_INDEX + 1] : null;
const UNKNOWN_ARGS = process.argv.slice(2).filter(function (arg, index, all) {
  return !['--strict', '--help', '-h', '--sections'].includes(arg) && all[index - 1] !== '--sections';
});

if (HELP) {
  console.log('Usage: node scripts/audit-newsletter-repo.js [--strict]');
  console.log('       node scripts/audit-newsletter-repo.js --sections <newsletter.html>');
  console.log('');
  console.log('Checks current Markdown guidance, canonical v4 icons, email HTML, snippets, and GitHub Pages URLs.');
  console.log('By default, historical/template HTML findings are warnings.');
  console.log('--strict exits with an error when warnings are present.');
  console.log('--sections prints the headings of a newsletter in order, to confirm section order.');
  process.exit(0);
}

if (SECTIONS_INDEX > -1) {
  if (!SECTIONS_FILE || !fs.existsSync(SECTIONS_FILE)) {
    console.error('--sections needs an existing newsletter HTML file.');
    process.exit(2);
  }
  const html = fs.readFileSync(SECTIONS_FILE, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const headings = [];
  html.replace(/<h([12])\b[^>]*>([\s\S]*?)<\/h\1>/gi, function (match, level, inner) {
    headings.push(inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    return match;
  });
  console.log('Section order for ' + SECTIONS_FILE);
  headings.forEach(function (heading, index) { console.log((index + 1) + '. ' + heading); });
  process.exit(0);
}

if (UNKNOWN_ARGS.length > 0) {
  console.error('Unknown option: ' + UNKNOWN_ARGS.join(', '));
  process.exit(2);
}

const REQUIRED_FILES = [
  'AGENTS.md',
  'README.md',
  'newsletter-system/template/kathy-drafting-template.md',
  'newsletter-system/template/html-scaffold.html',
  'newsletter-system/docs/style-guide.md',
  'newsletter-system/docs/qa-checklist.md',
  'newsletter-system/docs/changelog.md',
  'brand/resources/icon-map-v4.json',
  'brand/resources/icon-map-v4.md',
  'brand/resources/icon-map-v4-visual.html',
  'brand/resources/website-links.md',
  'brand/resources/donation-links.md',
  'brand/resources/church-contact.md',
  'brand/resources/reusable-urls.md'
];

const CURRENT_GUIDANCE = REQUIRED_FILES.filter(function (file) {
  return file.endsWith('.md');
});

const ICON_DIRECTORY = 'brand/assets/icons';
const ICON_MANIFEST = 'brand/resources/icon-map-v4.json';
const ICON_LIBRARY = 'brand/resources/icon-map-v4.md';
const ICON_BASE_URL = 'https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/icons/';
const HTML_DIRECTORIES = ['newsletters', 'templates', 'newsletter-system/template', 'newsletter-system/components/outlook-safe'];
const COMPREHENSIVE_TEMPLATE = 'docs/st-pauls-comprehensive-newsletter-template.md';
const MODULAR_TEMPLATE_ID = '1TIgR_NbjIOMLPt0Q-g7jymQPYRLEPjK1vQTJ96vwPC8';

const issues = [];

function absolute(relativePath) {
  return path.join(ROOT, relativePath);
}

function relative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function read(relativePath) {
  return fs.readFileSync(absolute(relativePath), 'utf8');
}

function add(level, code, file, detail) {
  issues.push({ level: level, code: code, file: file, detail: detail });
}

function listFiles(directory, extension, output) {
  const result = output || [];
  const directoryPath = absolute(directory);
  if (!fs.existsSync(directoryPath)) return result;

  fs.readdirSync(directoryPath, { withFileTypes: true }).forEach(function (entry) {
    const entryPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      listFiles(relative(entryPath), extension, result);
    } else if (entry.name.toLowerCase().endsWith(extension)) {
      result.push(entryPath);
    }
  });

  return result;
}

function countMatches(text, expression) {
  const matches = text.match(expression);
  return matches ? matches.length : 0;
}

function attributeValue(tag, attribute) {
  const expression = new RegExp('\\b' + attribute + '\\s*=\\s*(["\\\'])(.*?)\\1', 'i');
  const match = expression.exec(tag);
  return match ? match[2].trim() : null;
}

function checkRequiredFiles() {
  REQUIRED_FILES.forEach(function (file) {
    if (!fs.existsSync(absolute(file))) {
      add('error', 'required-file', file, 'Required production file is missing.');
    }
  });
}

function checkCurrentGuidance() {
  CURRENT_GUIDANCE.forEach(function (file) {
    if (!fs.existsSync(absolute(file))) return;
    const content = read(file);

    if (content.includes('\\`')) {
      add('error', 'escaped-markdown', file, 'Contains escaped backticks that break copyable Markdown examples.');
    }

    if (content.includes('https://custodybuddy.com/stpauls/icons/')) {
      add('error', 'retired-icon-host', file, 'Current guidance contains the retired icon host.');
    }

    if (file !== COMPREHENSIVE_TEMPLATE &&
        !content.includes(COMPREHENSIVE_TEMPLATE)) {
      add('error', 'missing-source-of-truth', file, 'Does not reference the comprehensive template.');
    }
  });

  if (!fs.existsSync(absolute(COMPREHENSIVE_TEMPLATE))) return;
  const template = read(COMPREHENSIVE_TEMPLATE);
  const requiredModularMarkers = [
    MODULAR_TEMPLATE_ID,
    'Part 2 — Core Sections',
    'Part 3 — Choose Your Story Modules',
    'Part 4 — Upcoming Events',
    'Part 5 — We Are So Thankful For',
    'Part 8 — Final Check Before Submission'
  ];

  requiredModularMarkers.forEach(function (marker) {
    if (!template.includes(marker)) {
      add('error', 'missing-modular-template-marker', COMPREHENSIVE_TEMPLATE, 'Missing current Google Doc marker: ' + marker);
    }
  });

  CURRENT_GUIDANCE.forEach(function (file) {
    if (!fs.existsSync(absolute(file))) return;
    const content = read(file);
    if (/\bType [ABC]\b/.test(content)) {
      add('error', 'retired-edition-model', file, 'Current guidance still references the retired fixed edition model.');
    }
  });
}

function checkCanonicalIcons() {
  if (!fs.existsSync(absolute(ICON_MANIFEST)) || !fs.existsSync(absolute(ICON_LIBRARY))) return;

  let manifest;
  try {
    manifest = JSON.parse(read(ICON_MANIFEST));
  } catch (error) {
    add('error', 'invalid-icon-manifest', ICON_MANIFEST, 'JSON could not be parsed: ' + error.message);
    return;
  }

  if (manifest.schemaVersion !== 1 || manifest.iconSetVersion !== 4 || manifest.status !== 'canonical') {
    add('error', 'icon-manifest-version', ICON_MANIFEST, 'Expected schemaVersion 1, iconSetVersion 4, and canonical status.');
  }
  if (manifest.assetDirectory !== ICON_DIRECTORY || manifest.baseUrl !== ICON_BASE_URL) {
    add('error', 'icon-manifest-location', ICON_MANIFEST, 'Asset directory or base URL does not match the canonical v4 location.');
  }
  if (!manifest.visualMap || !fs.existsSync(absolute(manifest.visualMap.repositoryPath || ''))) {
    add('error', 'icon-visual-map', ICON_MANIFEST, 'visualMap.repositoryPath must point to an existing file.');
  }

  const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
  if (icons.length !== 15) {
    add('error', 'icon-count', ICON_MANIFEST, 'Expected exactly 15 canonical v4 icon records.');
  }

  const keys = [];
  const manifestFiles = [];
  const urls = [];
  icons.forEach(function (icon, index) {
    const label = 'icons[' + index + ']';
    if (!icon || typeof icon !== 'object') {
      add('error', 'invalid-icon-record', ICON_MANIFEST, label + ' must be an object.');
      return;
    }
    if (!icon.key || keys.includes(icon.key)) add('error', 'duplicate-icon-key', ICON_MANIFEST, label + ' has a missing or duplicate key.');
    else keys.push(icon.key);
    if (!icon.filename || manifestFiles.includes(icon.filename)) add('error', 'duplicate-icon-file', ICON_MANIFEST, label + ' has a missing or duplicate filename.');
    else manifestFiles.push(icon.filename);
    if (!Array.isArray(icon.roles) || icon.roles.length === 0) add('error', 'missing-icon-role', ICON_MANIFEST, label + ' must define at least one role.');
    if (!icon.alt || typeof icon.alt !== 'string') add('error', 'missing-icon-alt', ICON_MANIFEST, label + ' must define useful alt text.');
    if (!Number.isInteger(icon.recommendedWidth) || icon.recommendedWidth < 44 || icon.recommendedWidth > 96) add('error', 'invalid-icon-width', ICON_MANIFEST, label + ' recommendedWidth must be an integer from 44 to 96.');
    if (icon.filename && icon.url !== ICON_BASE_URL + icon.filename) add('error', 'invalid-icon-url', ICON_MANIFEST, label + ' URL must equal baseUrl plus filename.');
    if (!icon.url || urls.includes(icon.url)) add('error', 'duplicate-icon-url', ICON_MANIFEST, label + ' has a missing or duplicate URL.');
    else urls.push(icon.url);
  });

  const diskFiles = listFiles(ICON_DIRECTORY, '.png').map(function (filePath) {
    return path.basename(filePath);
  }).sort();
  manifestFiles.sort();
  diskFiles.forEach(function (file) {
    if (!manifestFiles.includes(file)) add('error', 'unmapped-v4-icon', ICON_MANIFEST, file + ' exists on disk but is absent from the manifest.');
  });
  manifestFiles.forEach(function (file) {
    if (!diskFiles.includes(file)) {
      add('error', 'missing-v4-icon', ICON_DIRECTORY + '/' + file, 'Manifest icon is missing from disk.');
      return;
    }
    const data = fs.readFileSync(absolute(ICON_DIRECTORY + '/' + file));
    const isPng = data.length > 25 && data.slice(1, 4).toString('ascii') === 'PNG';
    if (!isPng) {
      add('error', 'invalid-png', ICON_DIRECTORY + '/' + file, 'File is not a valid PNG.');
      return;
    }
    const width = data.readUInt32BE(16);
    const height = data.readUInt32BE(20);
    const colorType = data[25];
    if (width !== height) add('error', 'non-square-icon', ICON_DIRECTORY + '/' + file, width + 'x' + height + ' icon is not square.');
    if (colorType !== 4 && colorType !== 6) add('error', 'missing-alpha', ICON_DIRECTORY + '/' + file, 'PNG does not contain an alpha channel.');
  });

  const library = read(ICON_LIBRARY);
  const visualMap = manifest.visualMap && manifest.visualMap.repositoryPath && fs.existsSync(absolute(manifest.visualMap.repositoryPath))
    ? read(manifest.visualMap.repositoryPath)
    : '';
  icons.forEach(function (icon) {
    if (!library.includes(icon.url)) add('error', 'undocumented-v4-icon', ICON_LIBRARY, icon.filename + ' URL is missing from the human-readable map.');
    if (!visualMap.includes(icon.filename)) add('error', 'missing-visual-map-icon', manifest.visualMap.repositoryPath, icon.filename + ' is missing from the visual map.');
  });
}

function checkTrackedJunk() {
  try {
    childProcess.execFileSync('git', ['ls-files', '--error-unmatch', '.DS_Store'], {
      cwd: ROOT,
      stdio: 'ignore'
    });
    add('warning', 'tracked-junk', '.DS_Store', 'File is ignored but remains tracked by Git.');
  } catch (error) {
    // The file is not tracked, or Git is unavailable. Neither blocks the audit.
  }
}

function checkHtmlFile(filePath) {
  const file = relative(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const imageTags = content.match(/<img\b[^>]*>/gi) || [];
  const anchorTags = content.match(/<a\b[^>]*>/gi) || [];
  let missingAlt = 0;
  let missingWidth = 0;
  let relativeImages = 0;
  let relativeLinks = 0;

  imageTags.forEach(function (tag) {
    if (attributeValue(tag, 'alt') === null) missingAlt += 1;
    if (attributeValue(tag, 'width') === null) missingWidth += 1;
    const source = attributeValue(tag, 'src');
    if (source && !/^(https:\/\/|data:|cid:)/i.test(source)) relativeImages += 1;
  });

  anchorTags.forEach(function (tag) {
    const href = attributeValue(tag, 'href');
    if (href && !/^(https:\/\/|mailto:|tel:|#|\[)/i.test(href)) relativeLinks += 1;
  });

  const findings = [
    ['missing-alt', missingAlt, 'image(s) missing alt attributes'],
    ['missing-width', missingWidth, 'image(s) missing width attributes'],
    ['relative-image', relativeImages, 'relative image URL(s)'],
    ['relative-link', relativeLinks, 'relative link(s)'],
    ['placeholder-link', countMatches(content, /href=["']#["']/gi), 'href="#" placeholder link(s)'],
    ['browser-placeholder', countMatches(content, /\[VIEW_IN_BROWSER_URL\]/g), 'view-in-browser placeholder occurrence(s)'],
    ['unsupported-layout', countMatches(content, /display\s*:\s*(?:grid|flex)\b/gi), 'Grid/Flex declaration(s)'],
    ['script-or-form', countMatches(content, /<(?:script|form)\b/gi), 'script/form element(s)'],
    ['embedded-image', countMatches(content, /src=["']data:image\//gi), 'embedded base64 image(s)']
  ];

  findings.forEach(function (finding) {
    if (finding[1] > 0) add('warning', finding[0], file, finding[1] + ' ' + finding[2] + '.');
  });

  ['table', 'tr', 'td'].forEach(function (tag) {
    const openings = countMatches(content, new RegExp('<' + tag + '\\b', 'gi'));
    const closings = countMatches(content, new RegExp('</' + tag + '\\s*>', 'gi'));
    if (openings !== closings) {
      add('warning', 'unbalanced-' + tag, file, openings + ' opening and ' + closings + ' closing <' + tag + '> tags.');
    }
  });
}


const SNIPPET_DIRECTORY = 'snippets';
const PERMANENT_MARKERS = [
  ['hero banner', /-hero-1100px\.(?:png|webp)/i],
  ['Greetings Friends', /Greetings Friends/i],
  ['Our Mission', /Our Mission/i],
  ['church address', /56 Thames Street S/i]
];

function checkSnippets() {
  listFiles(SNIPPET_DIRECTORY, '.html').forEach(function (filePath) {
    const file = relative(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    ['table', 'tr', 'td'].forEach(function (tag) {
      const openings = countMatches(content, new RegExp('<' + tag + '\\b', 'gi'));
      const closings = countMatches(content, new RegExp('</' + tag + '\\s*>', 'gi'));
      if (openings !== closings) add('error', 'snippet-unbalanced-' + tag, file, openings + ' opening and ' + closings + ' closing <' + tag + '> tags.');
    });
    (content.match(/<img\b[^>]*>/gi) || []).forEach(function (tag) {
      if (attributeValue(tag, 'alt') === null) add('error', 'snippet-missing-alt', file, 'Image without alt: ' + tag.slice(0, 80));
      if (attributeValue(tag, 'width') === null) add('error', 'snippet-missing-width', file, 'Image without width: ' + tag.slice(0, 80));
      const source = attributeValue(tag, 'src');
      if (source && !/^(https:\/\/|\[)/i.test(source)) add('error', 'snippet-relative-image', file, 'Relative image URL: ' + source);
    });
    if (countMatches(content, /display\s*:\s*(?:grid|flex)\b/gi) > 0) add('warning', 'snippet-unsupported-layout', file, 'Grid/Flex declaration.');
    if (!/^\s*<!--/.test(content)) add('warning', 'snippet-no-header', file, 'Snippet should start with a comment saying what it is.');
  });
}

function checkPermanentElements() {
  const files = listFiles('newsletters/final', '.html').concat(
    listFiles('newsletters/drafting', '.html').filter(function (filePath) {
      return !/older-drafts/.test(filePath);
    })
  );
  files.forEach(function (filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    PERMANENT_MARKERS.forEach(function (marker) {
      if (!marker[1].test(content)) add('warning', 'missing-permanent', relative(filePath), 'Permanent element not found: ' + marker[0] + '.');
    });
  });
  listFiles('newsletters/final', '.html').forEach(function (filePath) {
    const text = filePath.replace(/\.html$/, '.txt');
    if (!fs.existsSync(text)) add('warning', 'missing-plain-text', relative(filePath), 'No plain-text companion (run node scripts/html-to-text.js).');
  });
}

function checkHtml() {
  HTML_DIRECTORIES.forEach(function (directory) {
    listFiles(directory, '.html').forEach(checkHtmlFile);
  });
}

function checkFinalIssues() {
  const bySeason = {};
  listFiles('newsletters/final', '.html').forEach(function (file) {
    const season = path.dirname(relative(file));
    bySeason[season] = (bySeason[season] || 0) + 1;
  });
  Object.keys(bySeason).forEach(function (season) {
    if (bySeason[season] > 1) {
      add('error', 'final-count', season, 'Expected at most one HTML file per season in final/; found ' + bySeason[season] + '.');
    }
  });
}

const PAGES_URL_PATTERN = /https:\/\/custodybuddy\.github\.io\/st-pauls-newsletter-assets\/((?:[^"'\s)<>`\]()]|\([^"'\s)<>`]*\))+)/g;
const LEGACY_PREFIXES = ['templates/', 'newsletters/archive/', 'older-drafts/', 'resources/'];
const URL_SCAN_ROOTS = ['AGENTS.md', 'README.md', 'snippets', 'templates', 'newsletters', 'newsletter-system', 'brand', 'docs', 'resources/links'];

function listScanFiles(entry, output) {
  const result = output || [];
  const entryPath = absolute(entry);
  if (!fs.existsSync(entryPath)) return result;
  if (fs.statSync(entryPath).isDirectory()) {
    fs.readdirSync(entryPath).forEach(function (name) { listScanFiles(entry + '/' + name, result); });
  } else if (/\.(html|md|json)$/i.test(entry)) {
    result.push(entry);
  }
  return result;
}

// Every GitHub Pages URL in the repo must map to a file that still exists.
function checkRepoUrls() {
  URL_SCAN_ROOTS.forEach(function (root) {
    listScanFiles(root).forEach(function (file) {
      const legacy = LEGACY_PREFIXES.some(function (prefix) { return file.startsWith(prefix) || file.includes('/' + prefix); });
      const missing = {};
      let match;
      PAGES_URL_PATTERN.lastIndex = 0;
      const text = read(file);
      while ((match = PAGES_URL_PATTERN.exec(text)) !== null) {
        let target = match[1].replace(/[?#].*$/, '');
        try { target = decodeURIComponent(target); } catch (error) { /* keep raw path */ }
        if (target && !fs.existsSync(absolute(target))) missing[target] = true;
      }
      const targets = Object.keys(missing);
      if (targets.length > 0) {
        add(legacy ? 'warning' : 'error', 'dead-pages-url', file,
          targets.length + ' GitHub Pages URL(s) point to files missing from the repository, e.g. ' + targets[0]);
      }
    });
  });
}

function printIssues(level) {
  const selected = issues.filter(function (issue) { return issue.level === level; });
  if (selected.length === 0) return;

  console.log('');
  console.log(level.toUpperCase() + 'S (' + selected.length + ')');
  selected.forEach(function (issue) {
    console.log('- [' + issue.code + '] ' + issue.file + ': ' + issue.detail);
  });
}

checkRequiredFiles();
checkCurrentGuidance();
checkCanonicalIcons();
checkTrackedJunk();
checkHtml();
checkSnippets();
checkPermanentElements();
checkFinalIssues();
checkRepoUrls();

const errors = issues.filter(function (issue) { return issue.level === 'error'; }).length;
const warnings = issues.filter(function (issue) { return issue.level === 'warning'; }).length;

console.log("St. Paul's newsletter repository audit");
console.log('Mode: ' + (STRICT ? 'strict' : 'standard'));
printIssues('error');
printIssues('warning');
console.log('');
console.log('Summary: ' + errors + ' error(s), ' + warnings + ' warning(s).');

if (errors > 0 || (STRICT && warnings > 0)) {
  process.exit(1);
}
