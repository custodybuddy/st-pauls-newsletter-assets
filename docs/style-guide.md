# St. Paul's Newsletter Style Guide (Condensed)

This is a quick-reference companion to `docs/st-pauls-comprehensive-newsletter-template.md`. The comprehensive template mirrors the current seasonal Google Doc and controls modular structure, editorial guidance, accessibility, and production workflow.

## Brand Colors

- Deep navy: `#0A1C2C`
- Dark slate/navy text: `#1E293B`
- Body slate: `#475569`
- Soft slate: `#64748B`
- Gold: `#D4AF37`
- Dark gold: `#B8860B`
- Light gold: `#F0D98C`
- Cream: `#FDFBF7`
- Soft blue background: `#EBF4F8`
- White: `#FFFFFF`

## Typography

- Headings: `Lora, Georgia, serif`
- Body: `Inter, Arial, sans-serif`
- Fallback-safe headings: `Georgia, serif`
- Fallback-safe body: `Arial, sans-serif`

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
- Use `resources/links/st-pauls-view-in-browser-guidance-v2.md` for the reusable HTML pattern and checklist.

## Canonical v4 Icon System

- Machine-readable manifest: `resources/links/st-pauls-icons-v4.json`
- Human-readable map: `resources/links/st-pauls-icons-and-important-links.md`
- Base URL: `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/`
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
