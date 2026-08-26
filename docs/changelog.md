# Newsletter Change Log

Use this file to track production changes by issue and version.

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

- Analyzed `newsletters/working/spring 2026 newsletter final-EDITED-v12.html`.
- Updated all project Markdown documentation files to reflect v12 section flow and assets.
- Updated icon/link reference with live URLs used in v12, including banner/supporting images and active CTA endpoints.
- Updated README/style/checklist references to point to current baseline working file.
