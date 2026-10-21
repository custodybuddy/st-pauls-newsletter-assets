---
title: St Paul's newsletter image selection
category: agent-reference
source_of_truth: brand/assets/metadata/section-presets.json
visual_gallery: newsletter-system/assets/index.html
keywords: [image gallery, artwork, icons, bento, scripture cards, illustrations, St Paul's, preset]
---
# AI guide: find and choose St. Paul's images

**Short answer:** Search `brand/assets/metadata/section-presets.json` and the exact image paths in `brand/assets/`. For human choice, use `newsletter-system/assets/index.html`. Do **not** create new URLs by guessing names.

- Canonical public prefix: `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/`.
- Dynamic GitHub inventory: `https://api.github.com/repos/custodybuddy/st-pauls-newsletter-assets/git/trees/main?recursive=1`.
- Detailed, but snapshot-based: `st-pauls-image-library.md` at repository root.
- Browser gallery: `st-pauls-image-library.html` at repository root (also embedded in `newsletter-system/assets/index.html`).

## Steps

1. Identify requested section, text, theme and whether the block is icon, square, portrait or full-width banner.
2. Search the metadata by `name`, `description`, `suggestedSection`, `altText`, and exact `exportFile`.
3. Verify actual file exists in the live GitHub tree. If `imageUrl` is supplied in metadata, reuse verbatim.
4. Treat `approvalStatus: pending_review` as **not yet editorially approved**; ask for review before publishing.
5. Verify HTTP image loading, accessible alt text, ratio and visual match. No scripture text alterations. If no suitable image exists, flag it as **requires generation**, not an existing preset.
6. Use an absolute HTTPS URL in an email-safe `img` within a presentation table; maintain width/height, no distorted stretching.

## Shape standards

- Square 1:1: compact bento illustration or scripture insert.
- Portrait 4:5: paired with article text, cards or narrow column.
- Banner: full width only, a separate category.
- Do not produce an ordinary landscape card variant just to fill a box.

## Content provenance

All newsletter text, the Greetings Friends section, the mission statement and every Scripture quote remain Kathy's exact approved wording. A visual redesign may preserve the original hands, scenery or subject with subtle navy/teal/gold/cream styling but must not replace the message.

## Asset category reminders

The four scripture card directions (Mercy, Colossians 3:12, Go and Do Likewise, Kindness) are **style references**, not a confirmed set of eight finished assets. Track each as planned until final images are uploaded. Old fall/autumn graphics should be retired **only after** replacement and a complete link audit.
