# St. Paul’s Newsletter System

This repository contains the production system for “What’s Up, St. Paul’s?” newsletters.

## Start Here

- **Editorial wording:** Kathy’s approved seasonal submission / the current [Seasonal Newsletter Drafting Template](https://docs.google.com/document/d/1TIgR_NbjIOMLPt0Q-g7jymQPYRLEPjK1vQTJ96vwPC8/edit) controls wording, included modules, and their order.
- **New issue structure:** `docs/st-pauls-comprehensive-newsletter-template.md`.
- **HTML starting point:** `newsletter-system/template/html-scaffold.html`.
- **Brand assets and stable destinations:** `brand/`.
- **Final checks:** `newsletter-system/docs/qa-checklist.md`.

## Working Rules

1. Create and edit new issue files only in `newsletters/drafting/<year>-<season>/`.
2. When approved, copy the chosen file to `newsletters/final/<year>-<season>/` (at most one per season).
3. After it is sent, move it to `newsletters/archive/<year>-<season>/<yyyy-mm-month>/newsletter.html` with a screenshot; do not edit archived issues.
4. Reusable components control table layout and Outlook compatibility only. They must not become a source of editorial wording.
5. `snippets/` holds the reusable section fragments (layout only; swap in approved copy). `templates/` and `newsletters/drafting/*/older-drafts/` are read-only history; do not edit them for new work.

## Structure

- `brand/assets/` — canonical icons, banners, illustrations, and reference images for new work.
- `brand/resources/` — canonical website, donation, contact, reusable URL, and icon-map records.
- `newsletter-system/` — drafting template, HTML scaffold, Outlook-safe layout components, and production documentation.
- `snippets/` — reusable section fragments (hero, greetings and mission, ministry spotlight, did you know, event, finances, thankful, footer).
- `newsletters/` — `drafting/`, `final/`, and a read-only `archive/` of published issues with screenshots, all organized by season. See `newsletters/README.md`.

## Legacy Compatibility

The former `/assets/` folder was removed on 2026-10-08, so any image URL containing `/st-pauls-newsletter-assets/assets/` no longer loads. Older issues in `newsletters/archive/`, `newsletters/drafting/*/older-drafts/`, and `templates/` may show broken images and are kept for history only. New work must use `brand/assets/`. GitHub Pages does not redirect moved static files.

## Audit

Run this read-only command from the repository root:

```bash
node scripts/audit-newsletter-repo.js
```

Use `--strict` only for a release review; it also fails on retained historical warnings.
