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
  console.log('Checks current Markdown guidance, the icon-system reset, and email HTML.');
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
  'resources/links/st-pauls-icon-placeholders.md',
  'resources/links/st-pauls-view-in-browser-guidance-v2.md',
  'resources/links/st-pauls-website-data-and-links-v1.md'
];

const CURRENT_GUIDANCE = REQUIRED_FILES.filter(function (file) {
  return file.endsWith('.md');
});

const RETIRED_ICON_DIRECTORIES = ['assets/icons', 'resources/icons', 'resources/new-icons'];
const PLACEHOLDER_GUIDANCE = 'resources/links/st-pauls-icon-placeholders.md';
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

function checkIconReset() {
  const guidance = read(PLACEHOLDER_GUIDANCE);
  if (!guidance.includes('[ICON PLACEHOLDER')) {
    add('error', 'missing-icon-placeholders', PLACEHOLDER_GUIDANCE, 'Must define visible text markers for future icon design.');
  }

  RETIRED_ICON_DIRECTORIES.forEach(function (directory) {
    const files = listFiles(directory, '.png');
    files.forEach(function (filePath) {
      add('error', 'retired-icon-asset', relative(filePath), 'Icon assets are retired until a new system is approved.');
    });
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
checkIconReset();
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
