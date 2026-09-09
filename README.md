# St. Paul’s Newsletter System

This repository contains the production system for “What’s Up, St. Paul’s?” newsletters.

## Start Here

- **Editorial wording:** Kathy’s approved seasonal submission / the current [Seasonal Newsletter Drafting Template](https://docs.google.com/document/d/1TIgR_NbjIOMLPt0Q-g7jymQPYRLEPjK1vQTJ96vwPC8/edit) controls wording, included modules, and their order.
- **New issue structure:** `docs/st-pauls-comprehensive-newsletter-template.md`.
- **HTML starting point:** `newsletter-system/template/html-scaffold.html`.
- **Brand assets and stable destinations:** `brand/`.
- **Final checks:** `newsletter-system/docs/qa-checklist.md`.

## Working Rules

1. Create and edit new issue files only in `newsletters/drafting/`.
2. Put exactly one proposed final file in `newsletters/pending-approval/`.
3. After approval and publication, place the final file in `newsletters/archive/`; do not edit archived issues.
4. Reusable components control table layout and Outlook compatibility only. They must not become a source of editorial wording.
5. Retained `assets/`, `templates/`, `snippets/`, and legacy newsletter paths preserve GitHub Pages URLs. Do not edit them for new work.

## Structure

- `brand/assets/` — canonical icons, banners, illustrations, and reference images for new work.
- `brand/resources/` — canonical website, donation, contact, reusable URL, and icon-map records.
- `newsletter-system/` — drafting template, HTML scaffold, Outlook-safe layout components, and production documentation.
- `newsletters/` — new drafts, one approval candidate, and read-only archive.

## Legacy Compatibility

The former `/assets/`, `/templates/`, `/snippets/`, and existing `/newsletters/` paths are retained so previously published GitHub Pages and email image URLs continue to resolve. New work must use the structure above. GitHub Pages does not redirect moved static files.

## Audit

Run this read-only command from the repository root:

```bash
node scripts/audit-newsletter-repo.js
```

Use `--strict` only for a release review; it also fails on retained historical warnings.
