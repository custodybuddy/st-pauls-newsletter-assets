# Illustration Specifications

Reuse existing artwork first. This file defines the three illustration shapes the newsletter supports and how to name and register new art. It does not add or replace any artwork.

> **Church building:** the permanent illustration of the actual St. Paul's building will be supplied and approved separately. Do not draw, generate or substitute one. Until it arrives, keep the visible `[CHURCH ILLUSTRATION: pending approved art]` placeholder in the Greetings illustration slot (`snippets/greetings-and-mission.html`, class `illus-slot`).

Machine-readable record: `resources/links/st-pauls-illustrations-v1.json` (`formatSpecs` and the illustration lists). Update both together.

## Shapes

| Shape | Ratio | Master size | Email display width | Use for | Existing example |
|---|---|---|---|---|---|
| Portrait | 3:4 | 1200 × 1600 | 300px column (mobile: full width) | Side column beside text (Greetings and Mission, Ministry Spotlight) | `st-pauls-our-mission-card-v2-email.jpg` (640 × 853) |
| Landscape | 16:9 | 1600 × 900 | Full card width, up to 640px inside a card | Photo Feature, section banners | Seasonal heroes are a wider 3:1 banner (1100 × 367) |
| Square | 1:1 | 1254 × 1254 (current icon size) or 1200 × 1200 | 72px (icons), 260px (feature graphic) | Section icons, ministry wheels | v4 icons; `st-pauls-compassionate-care-ministry-highlight (1).png` |

## Where illustrations go

| Placement | Component | Display width | Notes |
|---|---|---|---|
| Greetings slot (replaceable) | `greetings-and-mission.html` | 220px, stacks under text on mobile (max 320px) | Pending approved church illustration. Same `<img>` markup fits any shape. |
| Large editorial illustration beside text | `ministry-spotlight.html` image column | About 36% of the card | Portrait or square. |
| Photo or landscape illustration | `photo-feature.html` | Up to 640px (square 420px, portrait 320px) | Keep `height:auto`. |
| Decorative card accent | v4 icons (72px), gold side bar, teal item rules | | Use existing icons first. |
| Illustrated background | Not used by default | | If ever needed: `bgcolor` fallback plus a real-client test first. |

Images use `width:100%; max-width:<N>px; height:auto`, so every shape keeps its aspect ratio.

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

## Fall 2026 illustrated design review candidates

The four original PNG candidates in `design-review/illustrated-fall-2026/` are pending visual approval. Their filenames, intended components, alt text, dimensions and generation prompts are recorded in `design-review/illustrated-fall-2026/asset-candidates.json`; `resources/links/st-pauls-illustrations-v1.json` lists them under `candidateIllustrations`. They are not part of the approved `illustrations` or `supplementalIllustrations` lists and must not be linked from a sent newsletter yet.

| Candidate | Shape | Proposed role |
|---|---|---|
| `st-pauls-greetings-portrait-v1.png` | Portrait | Greetings editorial split |
| `st-pauls-compassionate-care-square-v1.png` | Square | Ministry Spotlight feature |
| `st-pauls-community-care-landscape-v1.png` | Landscape | Community care editorial split |
| `st-pauls-autumn-closing-landscape-v1.png` | Landscape | Seasonal closing |

The church building illustration still requires an authentic approved reference photograph. The visual review files use local paths so they work before any artwork is hosted. After approval, optimize email exports, check their hosted URLs, and update the canonical illustration entries.
