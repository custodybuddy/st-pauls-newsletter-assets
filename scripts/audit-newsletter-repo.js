#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const STRICT = process.argv.includes('--strict');
const HELP = process.argv.includes('--help') || process.argv.includes('-h');
const UNKNOWN_ARGS = process.argv.slice(2).filter(function (arg) {
  return !['--strict', '--help', '-h'].includes(arg);
});

if (HELP) {
  console.log('Usage: node scripts/audit-newsletter-repo.js [--strict]');
  console.log('');
  console.log('Checks current Markdown guidance, canonical v4 icons, and email HTML.');
  console.log('By default, historical/template HTML findings are warnings.');
  console.log('--strict exits with an error when warnings are present.');
  process.exit(0);
}

if (UNKNOWN_ARGS.length > 0) {
  console.error('Unknown option: ' + UNKNOWN_ARGS.join(', '));
  process.exit(2);
}

const REQUIRED_FILES = [
  'AGENTS.md',
  'README.md',
  'checklists/NEWSLETTER-QA-CHECKLIST.md',
  'docs/st-pauls-comprehensive-newsletter-template.md',
  'docs/style-guide.md',
  'resources/links/st-pauls-icons-v4.json',
  'resources/links/st-pauls-icons-and-important-links.md',
  'resources/links/st-pauls-icons-v4-visual-map.html',
  'resources/links/st-pauls-view-in-browser-guidance-v2.md',
  'resources/links/st-pauls-website-data-and-links-v1.md'
];

const CURRENT_GUIDANCE = REQUIRED_FILES.filter(function (file) {
  return file.endsWith('.md');
});

const ICON_DIRECTORY = 'assets/icons';
const ICON_MANIFEST = 'resources/links/st-pauls-icons-v4.json';
const ICON_LIBRARY = 'resources/links/st-pauls-icons-and-important-links.md';
const ICON_BASE_URL = 'https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/';
const HTML_DIRECTORIES = ['newsletters', 'templates'];

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

    if (file !== 'docs/st-pauls-comprehensive-newsletter-template.md' &&
        !content.includes('docs/st-pauls-comprehensive-newsletter-template.md')) {
      add('error', 'missing-source-of-truth', file, 'Does not reference the comprehensive template.');
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
  if (icons.length !== 10) {
    add('error', 'icon-count', ICON_MANIFEST, 'Expected exactly 10 canonical v4 icon records.');
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

function checkHtml() {
  HTML_DIRECTORIES.forEach(function (directory) {
    listFiles(directory, '.html').forEach(checkHtmlFile);
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
