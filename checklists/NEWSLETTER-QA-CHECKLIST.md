# St. Paul's Newsletter QA Checklist

Use this checklist for every newsletter update in this repo.

The controlling production instructions are in `docs/st-pauls-comprehensive-newsletter-template.md`. If this checklist or an older newsletter conflicts with that file, follow the comprehensive template.

## 1) Before Editing

- Confirm the latest approved source file or assigned working version.
- Read `docs/st-pauls-comprehensive-newsletter-template.md` before planning or building a new issue.
- Confirm the edition type: Type A by default, or Type B/Type C when justified by the content or user request.
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

- Use St. Paul's palette consistently:
  - Deep navy `#0A1C2C`
  - Dark slate/navy text `#1E293B`
  - Body slate `#475569`
  - Soft slate `#64748B`
  - Gold `#D4AF37`
  - Dark gold `#B8860B`
  - Light gold `#F0D98C`
  - Cream `#FDFBF7`
  - Soft blue `#EBF4F8`
  - White `#FFFFFF`
- Typography:
  - Headings: `Lora, Georgia, serif`
  - Body: `Inter, Arial, sans-serif`
  - Desktop body copy: approximately `18-20px` minimum
  - Mobile body copy: approximately `17-18px`
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

- Use `resources/links/st-pauls-icons-v4.json` as the canonical machine-readable manifest.
- Use `resources/links/st-pauls-icons-and-important-links.md` for the role map, URLs, alt text, and recommended widths.
- Use only the canonical `assets/icons/` files for new or replaced section icons.
- Confirm every icon is a square transparent PNG and has useful alt text and an explicit width.
- Do not reuse a retired icon or replace it with an emoji.
- Use stable public links for footer/CTA unless a dated or campaign link is explicitly requested.
- Treat bulletin/event links as time-sensitive; verify currency or fallback to stable pages.

## 7) Structure and Editorial Checks

- Follow the selected edition structure in the comprehensive template.
- For Type A, verify the reader journey covers greeting, mission, ministry spotlight, primary feature, secondary focus, formation, prayer/volunteer, events, optional stewardship, gratitude, and footer.
- Keep the complete issue near `1,500-2,300` words unless the user directs otherwise.
- Keep the ministry spotlight near `500-800` words and the primary feature near `350-650` words.
- Limit Upcoming Events to approximately `3-5` priorities.
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
