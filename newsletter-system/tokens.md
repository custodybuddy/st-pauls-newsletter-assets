# St. Paul’s Newsletter Design Tokens

**Canonical.** This is the readable copy of `newsletter-system/tokens.json`. Construction rules live in `docs/st-pauls-comprehensive-newsletter-template.md`; the components that use these values live in `newsletter-system/components/`.

> Email clients cannot read CSS variables, so every value below is typed inline in the components. To change a value: update `tokens.json` and this file first, then the components, then check the result in `newsletter-system/gallery/`.

## Colour

### Core brand (from AGENTS.md)

| Token | Hex | Use |
|---|---|---|
| Navy | `#0A1C2C` | Feature bands, dark cards, headings and labels on light |
| Slate navy | `#1E293B` | Lead paragraphs on light |
| Body slate | `#475569` | Body text on light |
| Soft slate | `#64748B` | Captions |
| Gold | `#D4AF37` | Rules, card tops, buttons on navy, frames. Never body text on light. |
| Deep gold | `#B8860B` | Skim emphasis and italic subtitles on light |
| Light gold | `#F0D98C` | Labels and emphasis on navy |
| Cream | `#FDFBF7` | Editorial bands and cream cards |
| Soft blue | `#EBF4F8` | Page background, art panels, badge band |
| White | `#FFFFFF` | Main canvas, headings on navy |

### Supporting tints

| Token | Hex | Use |
|---|---|---|
| Navy raised | `#13293D` | Callout panel inside a navy band |
| On-dark body | `#E2E8F0` | Body text on navy |
| On-dark muted | `#CBD5E1` | Secondary text on navy |
| Hairline | `#E5E7EB` | Card and mat borders on white |
| Cream rule | `#E9DFC7` | Dividers and borders on cream |

**Not used:** teal `#007A8A`, `#DAA017`, `#9C6A08`, `#0D1B2A`, `#FAF7F1`. These came from the mood board and Drafts 11–14. The mood board is visual inspiration only. Teal that already appears inside approved artwork (for example the Our Mission card) is fine; it is not used for type, rules or fills.

### Contrast rules

- On navy: headings `#FFFFFF`, body `#E2E8F0`, labels `#F0D98C`. Never dark slate.
- On light: labels are navy with a gold rule beside them (gold text fails contrast at label size).
- Buttons: navy fill + white text on light; gold fill + navy text on navy.

## Type

| Role | Desktop | Mobile class | Mobile size |
|---|---|---|---|
| Hero title | Lora 700, 60–64px / 66–70px | `c-hero-title` | 40px / 46px |
| Display (feature title) | Lora 700, 44–56px | `c-display` | 32px / 38px |
| Section heading | Lora 700, 40–42px | `c-h2` | 28px / 34px |
| Card heading | Lora 700, 30px | `c-h3` | 23px / 30px |
| Lead paragraph | Lora 500, 22–24px (often italic) | `c-lead` | 19px / 30px |
| Quote | Lora italic, 26–32px | `c-quote` | 22px / 32px |
| Body | Inter 400, 19px / 32px | `c-body` | 18px / 30px |
| Eyebrow label | Inter 800, 14px, 0.18em tracking, uppercase | — | same |
| Caption | Inter 400, 14px, `#64748B` | — | same |

Outlook desktop falls back to Georgia for anything with class `c-serif` and Arial for everything else.

## Space and shape

| Token | Value |
|---|---|
| Canvas | 1100px max |
| Content width | 1004px (48px gutters) |
| Gutter | 48px desktop, 16px mobile (`c-gutter`) |
| Band padding | 48–64px desktop, 36px mobile (`c-band`) |
| Card padding | 40–52px desktop, 28px × 22px mobile (`c-pad`) |
| Card radius | 28px |
| Image radius | 18–24px |
| Button | pill (999px), 16px × 34px padding |
| Gold band | 6px full-width row between navy and light bands |

## Image sizes

| Slot | Desktop width | Source minimum | Mobile |
|---|---|---|---|
| Brand mark | 88px | — | 60px |
| Section icon | 72px | — | 60px |
| Landscape, full width | 1004px (1002px in a bordered card) | 1004px wide | 100% |
| Split half | 478px | 478px (ideally 956px) | 100% |
| Spotlight square | 410px (feature), 520px (showcase) | 880px | max 320px |
| Navy card square | 340px | 340px | max 320px |
| Badge square | 280px | 280px | max 320px |
| Portrait | 400px (greetings), 360px (mission), 340px (feature) | 640px wide | max 300px |

Keep each email illustration under about 300 KB. See `resources/links/st-pauls-illustrations-v1.md` for the files.
