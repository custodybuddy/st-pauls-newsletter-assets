# Newsletter Change Log

## 2026-10-08 (St. Paul's newsletter skill and assembly workflow)

- Added the project skill `.claude/skills/st-pauls-newsletter/` (`SKILL.md`, `components.md`, `ATTRIBUTION.md`). It adapts ideas from the MIT-licensed upstream `email-newsletter` skill; nothing was copied or installed.
- Added five reusable section snippets (layout only, placeholder text): `church-announcements.html`, `volunteer-opportunities.html`, `photo-feature.html`, `seasonal-celebration.html`, `closing-message.html`.
- Added `newsletter-system/template/content-template.md` (content-only input for assembly) and `scripts/html-to-text.js` (plain-text companion).
- Extended `scripts/audit-newsletter-repo.js`: snippet checks, permanent-element checks for drafts and final issues, a missing plain-text warning for final issues, and `--sections <file>` to print section order.
- Added `brand/resources/illustration-specs.md` and a `formatSpecs` block in `resources/links/st-pauls-illustrations-v1.json` (portrait, landscape, square; church-building art pending).
- Added `newsletter-system/docs/email-width-proposal.md` (1100px findings; proposal only, nothing changed).
- Added test edition `newsletters/drafting/2026-test/` (two arrangements, sample text, not for sending).
- Fixed stale pointers in `docs/st-pauls-comprehensive-newsletter-template.md` and the scaffold comment so they use `brand/resources/`.
- No approved wording, archived issue, Draft 13, or existing artwork was changed.

## 2026-10-08 (superseded drafts moved)

- Moved Drafts 11 and 12 from `newsletters/drafting/2026-fall/` to `older-drafts/` (superseded by Draft 13; both used removed `/assets/` image URLs). Draft 11 was renamed `...DRAFT-11-from-drafting.html` to avoid a name clash.
- Deleted three stray duplicates (two images at the repository root and the mood board in `newsletters/`); identical copies remain in `brand/assets/illustrations/`.

## 2026-10-08 (newsletters reorganized by season)

- Reduced `newsletters/` to three folders organized by season: `drafting/`, `final/`, and `archive/`. Removed `approved/`, `pending-approval/`, and `working/`.
- Archive: each published issue now has its own folder (`archive/<year>-<season>/<yyyy-mm-month>/newsletter.html`) with a screenshot; the capture images moved from `resources/archive-review/screenshots/`. The three identical copies of the April 2026 issue were reduced to one.
- Drafting: Fall 2026 drafts moved to `drafting/2026-fall/`; Drafts 1–11 from `working/` are in `drafting/2026-fall/older-drafts/`.
- Moved files keep git history, but their old GitHub Pages URLs no longer resolve.

## 2026-10-08 (repository cleanup after asset removal)

- The legacy `assets/` folder was removed in an earlier commit. Repointed all `snippets/*.html` image URLs, the hero and icon URLs in `docs/st-pauls-comprehensive-newsletter-template.md`, and `resources/links/st-pauls-illustrations-v1.json` to `brand/assets/`.
- Restored `snippets/` as the active component library (layout only; Draft 11 wording must be replaced).
- Corrected the comprehensive template to use `brand/resources/icon-map-v4.*` and `newsletters/drafting/`.
- Replaced `checklists/NEWSLETTER-QA-CHECKLIST.md` with a pointer to `newsletter-system/docs/qa-checklist.md`.
- Marked `templates/` as superseded. Drafts 11 and 12 and the files in `newsletters/working/` still reference the removed `/assets/` URLs and were left unchanged.

## 2026-10-08 (documentation consolidation and legacy freeze)

- Made `newsletter-system/docs/changelog.md` and `newsletter-system/docs/style-guide.md` the only canonical copies. `docs/changelog.md` and `docs/style-guide.md` are now short pointers so old links still resolve.
- The old `docs/style-guide.md` still referenced pre-`brand/` paths; nothing unique was lost. The old `docs/changelog.md` lacked only the 2026-09-09 entry.
- Added or updated FROZEN notes in `assets/`, `templates/`, `snippets/`, `newsletters/working/`, and `newsletters/approved/`. (Superseded: `assets/` was later removed; see the entry above.)

## 2026-09-09 (simplified newsletter system)

- Added the canonical `brand/`, `newsletter-system/`, and `newsletters/` workflow for future work.
- Copied published assets, scaffold, and the current approval candidate into the new structure while retaining legacy GitHub Pages paths.
- Split canonical website, donation, contact, and reusable URL references under `brand/resources/`.
- Established a layout-only Outlook-safe component library and made the audit enforce exactly one pending-approval HTML file.
- The current production source remains `docs/st-pauls-comprehensive-newsletter-template.md`; earlier path references below are historical records.

Use this file to track production changes by issue and version.

## 2026-08-31 (seasonal modular Google Doc template)

- Reviewed `St. Paul’s — Seasonal Newsletter Drafting Template (Modular)` and made it the current editorial drafting source.
- Rebuilt the comprehensive local template around three Core Sections and selectable Optional Story Modules for Spring, Summer, Fall, and Winter issues.
- Preserved the repository's email-safe HTML, accessibility, 1100px layout, brand, v4 icon, link, versioning, and release rules as the production addendum.
- Updated the README, agent guide, condensed style guide, QA checklist, and audit to retire the fixed edition model and old issue-length targets.
- No approved, working, archived, or template HTML newsletter was changed.

## 2026-08-26 (canonical v3 machine manifest)

- Added `resources/links/st-pauls-icons-v3.json` as the canonical machine-readable source for the v3 icon set.
- Recorded stable icon keys, roles, filenames, absolute URLs, default alt text, and recommended display widths.
- Extended the repository audit to enforce agreement between the manifest, disk assets, and human-readable Markdown map.
- Updated current production guidance to direct agents and automation to the manifest without changing any HTML file.

## 2026-08-26 (dependency-free repository audit)

- Added `scripts/audit-newsletter-repo.js` as a read-only validation module with no package dependencies or network requests.
- Added strict checks for current production guidance and the canonical v3 icon map.
- Added repository-wide warnings for unsafe HTML patterns, stale legacy icon mappings, embedded images, and tracked junk files.
- Documented standard and `--strict` audit commands in the README, QA checklist, and agent instructions.

## 2026-08-26 (comprehensive template governance)

- Established `docs/st-pauls-comprehensive-newsletter-template.md` as the controlling structure for all new newsletter planning and construction.
- Updated Markdown instructions to use the template’s edition types, 1100px editorial system, accessible large-print typography, content lengths, fact-checking, and inbox-testing workflow.
- Established `assets/icons/icons-v3/` and `resources/links/st-pauls-icons-and-important-links.md` as the current icon sources.
- Reclassified existing HTML newsletters and older icon documentation as historical references; no HTML newsletter or previously generated newsletter was changed.

## 2026-08-26 (live preview base URL)

- Added `https://custodybuddy.github.io/st-pauls-newsletter-assets/` as the canonical base URL for deployed newsletter and resource previews.
- Documented that repository-relative HTML paths become available after GitHub Pages deployment.

## 2026-08-26 (website data and stable links)

- Reviewed the public St. Paul’s website for current church data and reusable destinations.
- Added a verified directory covering core church information, CTA links, ministry pages, social accounts, and recurring newsletter themes.
- Documented which calendar and bulletin URLs must be treated as time-sensitive.

## 2026-08-26 (donation destination update)

- Updated the current Donate Now / Give Now CTA destination to `https://www.stpaulsingersoll.ca/contact-us/donate`.
- Created the Spring 2026 v13 working newsletter and template v4 with matching standard and Outlook VML button links.
- Updated the current baseline and donation-link documentation.

## 2026-08-26 (view in browser placement)

- Removed the top “Having trouble viewing this email?” utility section from the current versioned templates.
- Retained a discreet footer browser link, using the ESP merge-tag placeholder.

## 2026-08-26 (view in browser support)

- Added ESP-neutral View in browser guidance and an email-safe, reusable link pattern.
- Added versioned templates with a visible top utility link and footer fallback.
- Added a production requirement to replace the browser-link placeholder with the ESP's hosted-email merge tag and verify it in a test send.

## 2026-08-26 (new icon library sync)

- Set `assets/icons/new/` as the canonical PNG icon library.
- Set the GitHub Pages `assets/icons/new/` URL as the required source for new or replaced newsletter icons.
- Added the reference list and visual map under `resources/links/`.
- Updated production documentation and instructions to retire the prior `custodybuddy.com/stpauls/icons/` path.

## 2026-05-09

- Reorganized repository structure for production workflow.
- Moved approved issue HTML into `newsletters/approved/`.
- Moved icon/link reference markdown into `resources/links/`.
- Moved icon PNG library into `resources/icons/`.
- Added QA checklist location under `checklists/`.
- Added condensed style guide and workflow mapping docs.

## 2026-05-09 (v12 documentation sync)

- Analyzed `newsletters/working/spring 2026 newsletter final-EDITED-v12.html`; that historical v12 file is not retained in the current repository tree.
- Updated all project Markdown documentation files to reflect v12 section flow and assets.
- Updated icon/link reference with live URLs used in v12, including banner/supporting images and active CTA endpoints.
- Updated README/style/checklist references to point to current baseline working file.
