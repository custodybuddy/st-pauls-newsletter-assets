---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## St. Paul's Newsletter Project Mode

This repository produces static HTML email, not a browser application. When
reviewing files here, repository `AGENTS.md` and the production sources under
`docs/` and `newsletter-system/docs/` take precedence over general web advice.

- Treat a bento-style composition as a visual arrangement of nested
  presentation tables. Never recommend CSS Grid, Flexbox, JavaScript, forms, or
  browser-only interaction for production email HTML.
- Preserve approved wording, absolute public URLs, inline critical styles,
  explicit image widths and alt text, and Outlook-safe/MSO table structure.
- Apply fetched web rules only when they are compatible with email clients.
  Classify incompatible rules as `not applicable to production email` instead
  of reporting them as defects.
- Check keyboard and focus guidance for actual links and buttons, but do not
  invent interactive controls that cannot work reliably in email.
- Run `node scripts/audit-newsletter-repo.js` after an edit. Use `--strict` for
  a release audit, and report historical warnings separately from current-file
  findings.
- Browser screenshots can verify visual regressions at selected viewports; they
  do not prove rendering in Outlook, Gmail, Apple Mail, or Yahoo.

## How It Works

1. Fetch the latest guidelines from the source URL below
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the fetched guidelines
4. Output findings in the terse `file:line` format

## Guidelines Source

Fetch fresh guidelines before each review:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Use WebFetch to retrieve the latest rules. The fetched content contains all the rules and output format instructions.

## Usage

When a user provides a file or pattern argument:
1. Fetch guidelines from the source URL above
2. Read the specified files
3. Apply all compatible rules from the fetched guidelines and the project-mode
   constraints above
4. Output findings using the format specified in the guidelines

If no files specified, ask the user which files to review.

---

## St. Paul’s Project Context

When this skill is used in this repository, the [newsletter system architecture](../../../docs/newsletter-system-architecture.md) and `AGENTS.md` define the production boundary; this skill supplements, but does not replace, email-safe workflow rules.
