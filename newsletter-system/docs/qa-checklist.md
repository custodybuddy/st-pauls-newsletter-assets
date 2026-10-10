# St. Paul's Newsletter QA Checklist

Use this checklist for every newsletter update in this repo.

The controlling production instructions are in `docs/st-pauls-comprehensive-newsletter-template.md`. If this checklist or an older newsletter conflicts with that file, follow the comprehensive template.

## 1) Before Editing

- Confirm the latest approved source file or assigned working version.
- Read `docs/st-pauls-comprehensive-newsletter-template.md` before planning or building a new issue.
- Confirm the latest approved seasonal Google Doc or explicitly assigned copy source.
- Identify the three Core Sections and only the Optional Story Modules selected for this issue.
- Do not overwrite approved files.
- Create a new versioned file (example: `fall-newsletter-EDITED-v2.html`).
- Confirm scope: only the requested section(s), unless told otherwise.
- If copy is approved/verbatim, preserve wording exactly.

## 2) File and Versioning Rules

- Keep prior approved files unchanged.
- Use clear versioned names for new outputs:
  - `*-EDITED-v2.html`
  - `*-EDITED-v3.html`
  - `*-UPDATED-v2.md`
- Do not edit old versions unless explicitly requested.

## 3) Email HTML Safety Rules

- Use table-based layout only.
- Inline critical CSS; use simple mobile media queries only as progressive enhancement.
- Use absolute image URLs and absolute link URLs.
- Include `width` on images.
- Include `alt` on all images (`alt=""` only for decorative images).
- Use `role="presentation"` on layout tables.
- Include `border="0" cellpadding="0" cellspacing="0"` on tables.
- Avoid unsupported patterns:
  - No CSS Grid
  - No Flexbox
  - No JavaScript
  - No forms
  - No browser-only layout patterns

## 4) Brand and Visual Rules

- Use an intentional 1100px maximum-width editorial canvas that scales fluidly to mobile.
- Use rounded editorial cards, varied section treatments, and table-based bento rows only when content lengths are compatible.
- Stack every multi-column row into a logical single-column reading order on mobile.

- Use the canonical tokens in `newsletter-system/docs/style-guide.md` (navy `#0D1B2A`, cream `#FAF7F1`, gold text on light `#8A5C00`, and so on).
- Typography:
  - Lead blocks: `Lora, Georgia, serif`; section headings: `Playfair Display, Georgia, serif`
  - Body: `Source Sans 3, Arial, sans-serif`; labels and buttons: `Inter, Arial, sans-serif`
  - Desktop body copy: approximately `18-20px` minimum
  - Mobile body copy: approximately `17-18px`
- Gold text on light backgrounds is `#8A5C00` or darker (AA). Never `#D4AF37`, `#DAA017`, `#9C6A08` or `#B8860B`.
- Preserve visual hierarchy:
  - Small uppercase section labels
  - Large serif headings
  - Gold dividers and emphasis
  - Spacious padding

## 5) Dark Section Contrast Check

- On dark navy backgrounds:
  - Heading text: `#FFFFFF`
  - Body text: `#E2E8F0` or `#CBD5E1`
  - Accent/labels: `#D4AF37` or `#F0D98C`
- Remove dark text in dark sections (for example `#1E293B`).

## 6) v4 Icons and Links

- Use `brand/resources/icon-map-v4.json` as the canonical machine-readable manifest.
- Use `brand/resources/icon-map-v4.md` for the role map, URLs, alt text, and recommended widths.
- Use only the canonical `brand/assets/icons/` files for new or replaced section icons.
- Confirm every icon is a square transparent PNG and has useful alt text and an explicit width.
- Do not reuse a retired icon or replace it with an emoji.
- Use stable public links for footer/CTA unless a dated or campaign link is explicitly requested.
- Treat bulletin/event links as time-sensitive; verify currency or fallback to stable pages.

## 7) Structure and Editorial Checks

- Confirm Greetings Friends, Our Mission, and Ministry Spotlight are complete.
- Include only the Optional Story Modules selected in the approved seasonal draft and preserve their approved order.
- Keep Greetings Friends near `120-200` words; other modules are content-driven and should be concise and easy to scan.
- Limit Upcoming Events to approximately `3-5` priorities and gratitude to approximately 3 entries.
- Remove every unused prompt, bracketed placeholder, checkbox, and `REMOVE` marker before release.
- Confirm permission for private prayer details, personal stories, and identifiable-person photos.
- Keep paragraphs short and use approximately `2-4` intentional emphasized phrases per section.

## 8) Copy and Scope Protection

- Do not rewrite approved/verbatim copy.
- Do not alter meaning or tone.
- Do not modify unrelated sections.
- Preserve existing approved links, image URLs, and tracking links unless asked.

## 9) Final Validation (Required)

- Run `node scripts/audit-newsletter-repo.js` from the repository root and resolve every current-source error.
- Before release, run `node scripts/audit-newsletter-repo.js --strict` and review every remaining warning against the assigned issue scope.
- No unclosed `<table>`, `<tr>`, or `<td>` tags.
- No missing image `alt` attributes.
- No relative image URLs.
- No relative links.
- No unsupported layout methods introduced.
- No accidental deleted sections.
- Mobile stacking remains reasonable.
- Footer links and core details remain intact.
- CTA button contrast is readable.
- Hero and content images are publicly hosted over HTTPS and have useful alt text.
- Dates, times, names, Scripture references, contact details, financial figures, and permissions are current.
- A real test email has been checked in the available desktop and mobile inbox clients.

## 10) Deliverable Options

- Full updated HTML file.
- Section-only HTML snippet.
- Markdown resource update.
- Canva copy-paste guide.
- Link/icon library update.
- Short audit summary.

## 11) Default Rule if Uncertain

1. Follow `docs/st-pauls-comprehensive-newsletter-template.md`.
2. Preserve approved copy and existing approved files.
3. Preserve email-safe table structure, links, and image URLs.
4. Change only requested sections.
5. Keep St. Paul's navy/gold identity consistent.

## 12) Plain Text and Outlook Hardening

- A plain-text companion exists next to the HTML (`node scripts/html-to-text.js <file>.html > <file>.txt`) and reads cleanly: headings, links shown as `label (URL)`, no stray markup.
- Section order matches the approved plan (`node scripts/audit-newsletter-repo.js --sections <file>`).
- Permanent elements are present: hero, Greetings Friends, Our Mission, footer facts.
- Buttons are table cells with `bgcolor` plus `background-color`; `border-radius` is on the `<td>`.
- Every image has `alt`, `width`, `border="0"` and `display:block`.
- 390px view: no horizontal scroll, every image loads, stacked columns read in a logical order.
---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../../docs/newsletter-system-architecture.md).
