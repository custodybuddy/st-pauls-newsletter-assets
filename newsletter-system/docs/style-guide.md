# St. Paul's Newsletter Style Guide (Condensed)

This is a quick-reference companion to `docs/st-pauls-comprehensive-newsletter-template.md`. The comprehensive template mirrors the current seasonal Google Doc and controls modular structure, editorial guidance, accessibility, and production workflow.

## Design Tokens (canonical)

**Source:** reconciled on 2026-10-08 against Draft 13, the current visual reference. These values replace the earlier `#0A1C2C`, `#1E293B`, `#B8860B`, `#9C6A08`, `#FDFBF7`, `#64748B` and `#6D7C93`-as-text values. Reusable snippets and `newsletter-system/template/html-scaffold.html` use only these tokens.

### Fonts

| Role | Stack | Used for |
|---|---|---|
| Lead serif | `'Lora', Georgia, serif` | Masthead title, Greetings Friends heading, Our Mission quote, Ministry Spotlight title |
| Section serif | `'Playfair Display', Georgia, serif` | Supporting section headings and card titles |
| Body | `'Source Sans 3', Arial, sans-serif` | Paragraphs, lists, captions |
| Labels and UI | `'Inter', Arial, sans-serif` | Small uppercase labels, buttons, badges |

Web fonts are progressive enhancement. Every stack ends in a system fallback (Georgia or Arial), and no layout depends on the web font loading.

### Colours

| Token | Value | Use | Contrast |
|---|---|---|---|
| Navy | `#0D1B2A` | Body and heading text, masthead, dark panels, footer | 17.4:1 on white |
| Cream | `#FAF7F1` | Page and soft card background | |
| White | `#FFFFFF` | Cards | |
| Border | `#E5E0D8` | Card outlines | |
| Soft blue | `#EBF4F8` (border `#D7E6EC`) | Greetings card | |
| Sage | `#C7D6C1` | Gratitude panel, accents | |
| Teal | `#007A8A` | Accent bars, event dates, small labels | 5.1:1 on white, 4.7:1 on cream |
| Gold | `#D4AF37` | Bars, borders, rules, buttons, edition badge (not for text on light backgrounds) | |
| Gold on dark | `#DAA017` | Labels and emphasis on navy panels | 7.5:1 on navy |
| Light gold | `#F0D98C` | Rule accents, accent text on navy | |
| **Gold text on light** | **`#8A5C00`** | Gold labels and emphasis on white, cream, soft blue and tinted cards | 5.8:1 on white, 5.4:1 on cream, 5.2:1 on soft blue (AA) |
| **Gold text on sage** | **`#6D4A00`** | Gold label on the sage Gratitude panel only | 5.3:1 on sage (AA) |
| Secondary text | `#475569` | Captions, secondary copy | 7.6:1 on white |
| Muted text | `#56657B` | Small figure notes | 5.9:1 on white |
| Chart slate | `#6D7C93` | Chart bars and strokes only, never text | |
| Navy border | `#1C2E42` | Outline on navy panels | |
| On navy | `#FFFFFF`, `#FAF7F1`, `#E2E8F0` | Text on navy | |

Rules: gold text on any light surface uses `#8A5C00` (or `#6D4A00` on sage), never `#D4AF37`, `#DAA017`, `#9C6A08` or `#B8860B`. Do not use dark navy text on navy.

### Spacing and shape

- Container: fluid, `max-width:1100px` (see `email-width-proposal.md`; unchanged).
- Section rows: `padding:18px 36px` (mobile `20px 12px`). Card padding `36px 40px` (mobile `26px 18px`).
- Cards: `20–22px` radius; buttons `12px` radius or pill; small inner cards `12–16px`.
- Body copy: `19px` / `1.75` (mobile `18px` / `1.7`). Labels `18px` bold uppercase, letter-spacing `0.1em`. Section titles `36px` (mobile `28px`).

## Hierarchy Pattern

- Small uppercase section label
- Large serif heading
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
- Major cards: `24px` radius; inner cards: approximately `14-20px`
- Use nested presentation tables for bento rows; stack into a logical single column on mobile
- Use varied cream, navy, warm-gold, and sage treatments to create editorial rhythm

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

- Heading: `#FFFFFF`
- Body: `#E2E8F0` or `#CBD5E1`
- Accent: `#D4AF37` or `#F0D98C`
- Do not use dark text colors on dark navy backgrounds

## Stable CTA Endpoints

- Website: `https://stpaulsingersoll.ca/`
- Donate / Give Now: `https://www.stpaulsingersoll.ca/contact-us/donate`
- YouTube: `https://www.youtube.com/channel/UCCTGFWFR4Z3svvSyZ08rE_g/videos`
