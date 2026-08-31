# Newsletter Change Log

Use this file to track production changes by issue and version.

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
