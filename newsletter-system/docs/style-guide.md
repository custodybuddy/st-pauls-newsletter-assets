# St. Paul's Newsletter Style Guide (Condensed)

This is a quick-reference companion to `docs/st-pauls-comprehensive-newsletter-template.md`. The comprehensive template mirrors the current seasonal Google Doc and controls modular structure, editorial guidance, accessibility, and production workflow.

## Design Tokens (canonical)

**Source:** The Banner Style Guide v3.0 (Light Edition, Fall 2026). `DESIGN.md` at the repository root is the portable summary, and the St. Paul's Design System artifact holds the live component previews. These values replace the cream `#FAF7F1` and `#FAF8F5`, navy `#0D1B2A`, Source Sans 3, Playfair Display, and the earlier `#0A1C2C`, `#1E293B`, `#B8860B`, `#9C6A08`, `#FDFBF7`, `#64748B` and `#6D7C93`-as-text values. Reusable snippets and `newsletter-system/template/html-scaffold.html` still carry the earlier values until they are migrated.

### Fonts

| Role | Stack | Used for |
|---|---|---|
| Display serif | `'Lora', Georgia, serif` | Masthead title, section titles, event titles, gratitude card names, pull quotes, calendar date chips |
| Body and UI | `'Inter', Arial, sans-serif` | Paragraphs, lists, captions, dates, labels, buttons, badges, financial figures |
| Script accent | artwork only | Banner artwork (Events, Thankful For, Finances) and hero or mission emphasis. Never live text |

Web fonts are progressive enhancement. Every stack ends in a system fallback (Georgia or Arial), and no layout depends on the web font loading. Body text never goes below 16px.

### Colours

| Token | Value | Use | Contrast |
|---|---|---|---|
| Clean White | `#FFFFFF` | Page, cards, Light Kit banner ground, print surface | |
| Soft White | `#F7F9FB` (alternate `#F8F9FA`) | Alternating bands and the outer canvas behind white cards | |
| Deep Navy | `#0F1D3A` | Text, main headings, circular event badges, anchor panels (Our Mission, masthead, footer) | 16.7:1 on white |
| Liturgical Teal | `#0E7E7B` | Gratitude and spotlight card titles, event dates, supporting subheaders | 4.9:1 on white, 4.6:1 on soft white |
| Teal accent | `#028A96` | Banner artwork and large display text only | 4.1:1 on white |
| Aura Gold | `#D4AF37` | Borders, corner flourishes, the cross divider, emblem rims, buttons (not text on light backgrounds) | |
| Gold text on light | **`#8A5C00`** | Gold labels and emphasis on white and soft white | 5.8:1 on white, 5.5:1 on soft white |
| Gold on dark | `#DAA017` and `#F0D98C` | Labels and emphasis on navy panels | 7.2:1 and 11.9:1 on navy |
| Forest | `#2D5A43` | Calendar date-chip header bar (white text) | 7.9:1 with white |
| Sage leaf | `#799B7A` | Botanical leaf accents only | decorative |
| Card border | `#E5E7EB` | 1px card frame | decorative |
| Gold text on sage | `#6D4A00` | Gold label on an optional sage panel only | 5.3:1 on sage |
| Chart slate | `#6D7C93` | Chart bars and strokes only, never text | |
| Navy border | `#1C2E42` | Outline on navy panels | |
| Secondary text | `#475569` | Captions, secondary copy | 7.6:1 on white |
| Muted text | `#56657B` | Small notes and timestamps | 5.9:1 on white |
| On navy | `#FFFFFF`, `#E2E8F0` | Text on navy | 16.7:1 and 13.6:1 |

Rules: gold text on any light surface uses `#8A5C00`, never `#D4AF37`, `#DAA017`, `#9C6A08` or `#B8860B`. Do not put teal text on navy (3.4:1) or dark navy text on navy. Dark navy is for anchor panels only, never routine section banners.

### Spacing and shape

- Container: fluid, `max-width:1100px` (see `email-width-proposal.md`; unchanged).
- Section rows: `padding:18px 36px` (mobile `20px 12px`). Card padding `36px 40px` (mobile `26px 18px`).
- Cards: `20px` radius with a 1px `#E5E7EB` border; inner cards and callouts `12px`; email CTA buttons `8px`; badges pill; event badges circular.
- Body copy: `19px` / `1.75` (mobile `18px` / `1.7`). Labels `18px` bold uppercase, letter-spacing `0.1em`. Section titles `36px` (mobile `28px`).

## Hierarchy Pattern

- Light Kit white banner (or a small uppercase section label with a large serif heading)
- Body copy with selective gold/bold skim emphasis
- Gold divider/accent
- Spacious section padding

## Seasonal Modular Section Flow

1. Newsletter Basics and seasonal Hero Banner
2. Core: Greetings Friends
3. Core: Our Mission
4. Core: Ministry Spotlight
5. Only the Optional Story Modules selected in the approved seasonal draft
6. Three to five priority Upcoming Events
7. Approximately three gratitude entries
8. Current Contact and Footer Information

Optional modules can be reordered, combined, or omitted when the approved draft calls for it. Do not fill every module by default. Keep Greetings Friends near 120–200 words; all other sections are content-driven.

## Layout and Readability

- Maximum desktop canvas: `1100px`, fluid at smaller widths
- Desktop body copy: approximately `18-20px` minimum with `1.65-1.8` line height
- Mobile body copy: approximately `17-18px`
- Major cards: `20px` radius; inner cards: `12px`
- Use nested presentation tables for bento rows; stack into a logical single column on mobile
- Alternate white and soft-white bands (or white cards on a soft-white canvas) to create editorial rhythm; use no cream or yellow tints

## Section Banners (Light Kit)

- Use the white-ground Light Kit banners (illustrated gold and teal emblem, Deep Navy serif word, Liturgical Teal script word, gold cross rule) for Greetings Friends, Did You Know?, Focus on Finances, Upcoming Events and We Are So Thankful For.
- Retire the dark-navy banners in `brand/assets/banners/` for standard sections. Dark navy backgrounds are for anchor panels only.
- The words are part of the image, so the alt text repeats them.

## Cards, Dividers and Skimming Components

- **Alternating surfaces:** place white cards on a Soft White canvas, or alternate full-width white and soft-white bands.
- **Card framing:** 1px `#E5E7EB` border with delicate gold corner flourishes (`brand/assets/illustrations/email/email-corner-{tl,tr,bl,br}.png`) on feature and gratitude cards.
- **Micro-divider:** a centred dashed gold rule with a small cross, `- - - † - - -`, beneath gratitude card headings.
- **Event rows:** a circular Deep Navy and gold badge (a per-event illustration, or a gold line icon when none exists), a calendar date chip (Forest top bar with the white month, bold navy Lora day) and concise event details. Rows may alternate left and right.
- **Mission statement:** "Christ-Centred" stays on one line with both Cs capitalized (`white-space:nowrap`).

## Email-Safe Rules

- Table-based layout
- Inline critical styles; mobile media queries may be used as progressive enhancement
- Absolute image and link URLs
- `width` + `alt` on images
- `role="presentation"` and `border="0" cellpadding="0" cellspacing="0"` on layout tables
- No Grid/Flexbox/JavaScript/forms

## View in Browser Links

- Place a discreet **View in browser** link in the footer. Add one above the hero only when specifically requested.
- Replace `[VIEW_IN_BROWSER_URL]` with the exact hosted-email merge tag from the ESP before sending.
- Do not send a placeholder `href="#"`; send a test email and verify the hosted version.
- Use `brand/resources/reusable-urls.md` for the reusable HTML pattern and checklist.

## Canonical v4 Icon System

- Machine-readable manifest: `brand/resources/icon-map-v4.json`
- Human-readable map: `brand/resources/icon-map-v4.md`
- Base URL: `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/icons/`
- Use the mapped v4 icon for each newsletter role; do not reuse a retired icon or substitute emoji.
- Main brand icon: `88px`; major section icons: `72px`.

## Dark Section Contrast

Dark navy (`#0F1D3A`) backgrounds are reserved for anchor panels: Our Mission, the masthead and the footer.

- Heading: `#FFFFFF`
- Body: `#E2E8F0` or `#CBD5E1`
- Accent: `#F0D98C` or `#DAA017` (bold words); gold `#D4AF37` for rules
- Do not use dark text colors or teal text on dark navy

## Stable CTA Endpoints

- Website: `https://stpaulsingersoll.ca/`
- Donate / Give Now: `https://www.stpaulsingersoll.ca/contact-us/donate`
- YouTube: `https://www.youtube.com/channel/UCCTGFWFR4Z3svvSyZ08rE_g/videos`

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../../docs/newsletter-system-architecture.md).
