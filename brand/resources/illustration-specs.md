# Illustration Specifications

Reuse existing artwork first. This file defines the three illustration shapes the newsletter supports and how to name and register new art. It does not add or replace any artwork.

> **Church building:** the permanent illustration of the actual St. Paul's building will be supplied and approved separately. Do not draw, generate or substitute one. Until it arrives, leave a visible `[CHURCH ILLUSTRATION: pending approved art]` marker.

Machine-readable record: `resources/links/st-pauls-illustrations-v1.json` (`formatSpecs` and the illustration lists). Update both together.

## Shapes

| Shape | Ratio | Master size | Email display width | Use for | Existing example |
|---|---|---|---|---|---|
| Portrait | 3:4 | 1200 × 1600 | 300px column (mobile: full width) | Side column beside text (Greetings and Mission, Ministry Spotlight) | `st-pauls-our-mission-card-v2-email.jpg` (640 × 853) |
| Landscape | 16:9 | 1600 × 900 | Full card width, up to 640px inside a card | Photo Feature, section banners | Seasonal heroes are a wider 3:1 banner (1100 × 367) |
| Square | 1:1 | 1254 × 1254 (current icon size) or 1200 × 1200 | 72px (icons), 260px (feature graphic) | Section icons, ministry wheels | v4 icons; `st-pauls-compassionate-care-ministry-highlight (1).png` |

## Formats

- **Editable source:** SVG, when the art is vector-friendly. Store beside the export with the same name. Do not use SVG in sent email.
- **Email export:** PNG for flat art with transparency, JPG for photographic or full-bleed art. Keep each file as small as practical (aim under 250 KB for anything above icon size). Current v4 icon PNGs are about 1–1.7 MB each; re-exporting them at 2x display size (144px) would help load time, but that is a separate task.
- Display at the width in the table above, always with an explicit `width` attribute.

## Naming

`st-pauls-<subject>-<shape>[-v<n>][-email].<ext>`, lowercase, hyphens only. No spaces, brackets, apostrophes or `(1)` suffixes. Examples: `st-pauls-our-mission-portrait-v2-email.jpg`, `st-pauls-compassionate-care-square.png`.

Existing files with older names keep their names because live URLs depend on them.

## Alt text

Describe what the image shows and why it is there, in one sentence, without "image of". Decorative-only images use `alt=""`. Icons use the alt text in `brand/resources/icon-map-v4.json`.

## Where files go

`brand/assets/illustrations/` for art, `brand/assets/icons/` for v4 icons, `brand/assets/banners/` for seasonal heroes. Do not create a second asset folder.

## Checklist for new art

1. Approved by Kathy or the editor.
2. Right shape and size from the table.
3. Named by the rule above.
4. Added to `st-pauls-illustrations-v1.json` with alt text and layout role.
5. `node scripts/audit-newsletter-repo.js` shows no dead image URLs.
