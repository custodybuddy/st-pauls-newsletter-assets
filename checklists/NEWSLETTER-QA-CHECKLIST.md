# St. Paul's Newsletter QA Checklist

Use this checklist for every newsletter update in this repo.

## 1) Before Editing

- Confirm the latest approved source file or assigned working version.
- Current working baseline: `newsletters/working/spring 2026 newsletter final-EDITED-v12.html`.
- Do not overwrite approved files.
- Create a new versioned file (example: `spring-newsletter-EDITED-v13.html`).
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
- Use inline CSS only.
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

## 6) Icons and Links

- Use icon/link source file: `resources/links/st-pauls-icons-and-important-links.md`.
- Use PNG icons for email compatibility.
- Keep icon style consistent (minimal navy/gold church style).
- Use recommended icon sizes:
  - Section header: `64` or `72`
  - Feature: `80`
  - Card: `48`
  - Footer: `20-28`
  - CTA: `18-24`
- Use stable public links for footer/CTA unless a dated or campaign link is explicitly requested.
- Treat bulletin/event links as time-sensitive; verify currency or fallback to stable pages.

## 7) Copy and Scope Protection

- Do not rewrite approved/verbatim copy.
- Do not alter meaning or tone.
- Do not modify unrelated sections.
- Preserve existing approved links, image URLs, and tracking links unless asked.

## 8) Final Validation (Required)

- No unclosed `<table>`, `<tr>`, or `<td>` tags.
- No missing image `alt` attributes.
- No relative image URLs.
- No relative links.
- No unsupported layout methods introduced.
- No accidental deleted sections.
- Mobile stacking remains reasonable.
- Footer links and core details remain intact.
- CTA button contrast is readable.

## 9) Deliverable Options

- Full updated HTML file.
- Section-only HTML snippet.
- Markdown resource update.
- Canva copy-paste guide.
- Link/icon library update.
- Short audit summary.

## 10) Default Rule if Uncertain

1. Preserve approved copy.
2. Preserve email-safe table structure.
3. Preserve links and image URLs.
4. Change only requested sections.
5. Keep St. Paul's navy/gold identity consistent.
