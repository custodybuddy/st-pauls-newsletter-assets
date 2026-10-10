# St. Paul’s Newsletter System Architecture

## Purpose

This repository is a static production system for St. Paul’s “What’s Up, St. Paul’s?” email newsletters. It contains approved brand assets, reusable email-safe layout fragments, drafting and release folders, and the documentation that connects them. It is not a web application: there is no package manifest, build step, client-side runtime, database, or automatic asset transformation.

## Source-of-Truth Order

1. Kathy’s latest approved seasonal submission controls wording, selected modules, and their order.
2. [Seasonal Newsletter Drafting and Production Template](st-pauls-comprehensive-newsletter-template.md) controls the local drafting structure and production rules.
3. `newsletter-system/template/html-scaffold.html` is the starting point for a new HTML email after approved copy is available.
4. Canonical manifests under `brand/resources/` control active brand assets, public URLs, roles, alt text, and stable destinations.
5. Historical issues, older drafts, legacy templates, and archive analysis provide context only. They never override the approved seasonal source or comprehensive template.

## System Map

```text
Approved seasonal submission
        |
        v
docs/st-pauls-comprehensive-newsletter-template.md
        |
        +-- newsletter-system/template/html-scaffold.html
        +-- newsletter-system/components/outlook-safe/  (layout primitives)
        +-- snippets/                                  (styled section layouts)
        |
        v
newsletters/drafting/<year>-<season>/                  (versioned work)
        |
        v
newsletters/final/<year>-<season>/                     (one approved issue)
        |
        v
newsletters/archive/<year>-<season>/<yyyy-mm-month>/   (sent, read-only issue + screenshot)

brand/assets/ + brand/resources/ ---------------------> images, icons, links, contact data
scripts/audit-newsletter-repo.js ---------------------> structural and path validation
```

## Directory Responsibilities

| Location | Responsibility | Editing boundary |
|---|---|---|
| `brand/assets/` | Canonical banners, icons, illustrations | Update a manifest and visual map with any asset change. Final email images use the GitHub Pages `brand/assets/` URL. |
| `brand/resources/` | Canonical icon map, contacts, donation links, reusable URLs, visual asset reference | Use as the active asset and stable-link record. |
| `docs/` | Current production template, architecture, and current documentation pointers | The comprehensive template is authoritative for local workflow. |
| `newsletter-system/` | HTML scaffold, Outlook-safe layout primitive, production style guide and QA checklist | Layout support only; never a replacement for approved editorial copy. |
| `snippets/` | Styled, reusable table-row fragments | Layout only. Replace inherited names, dates, figures, and Draft 11 wording with approved copy. |
| `newsletters/drafting/` | Versioned current work by season | Create new drafts here; do not overwrite approved or historical files. |
| `newsletters/final/` | At most one approved ready-to-send issue per season | Keep only the currently approved unsent issue. |
| `newsletters/archive/` | Sent issues and screenshots | Read-only historical reference. |
| `templates/` and `newsletters/drafting/*/older-drafts/` | Legacy history | Read-only; paths and markup may be obsolete. |
| `resources/` | Historical analysis, provenance, and superseded link references | Use only when its status and date make it relevant; current resources take precedence. |
| `scripts/` | Repository validation | `audit-newsletter-repo.js` checks current guidance, assets, email HTML, and GitHub Pages paths. |
| `.agents/skills/` | Project-local agent guidance | Skills supplement repository rules; they do not alter production architecture. |

## Newsletter Assembly Flow

1. Identify the current approved seasonal content and its selected optional modules.
2. Create a new versioned HTML file in `newsletters/drafting/<year>-<season>/` from the scaffold.
3. Assemble only the needed table-based sections. Use Outlook-safe components and snippets for layout, then insert approved wording.
4. Use the seasonal banner and canonical v4 icon or illustration only where the semantic role fits. Keep public image and link URLs absolute.
5. Check responsive stacking, dark-section contrast, image alt text and widths, current footer details, and CTA destinations.
6. Run `node scripts/audit-newsletter-repo.js`; use `--strict` for a release review. Browser screenshots are useful visual evidence, but inbox testing remains necessary for Gmail, Outlook, Apple Mail, Yahoo, and mobile email clients.
7. After approval, copy the chosen issue to `newsletters/final/`; after sending, archive it with a screenshot.

## Production Constraints

- Use presentation tables, inline critical styles, explicit colors, absolute HTTPS URLs, image widths, and meaningful alt text.
- Keep the table structure readable when a client ignores the mobile media query.
- Do not introduce CSS Grid, Flexbox, JavaScript, forms, or browser-only interaction into production email HTML.
- Preserve approved copy unless the assigned work explicitly authorizes editorial changes.
- The public preview base is `https://custodybuddy.github.io/st-pauls-newsletter-assets/`; a file is available there only after it is committed and GitHub Pages has deployed it.

## Verification Boundaries

The audit script proves repository-level structure and known static issues. It does not prove a delivered email’s rendering, ESP merge tags, remote link freshness, inbox filtering, or live GitHub Pages deployment. Record those checks separately when they matter.
