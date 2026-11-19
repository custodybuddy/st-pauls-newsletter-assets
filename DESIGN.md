# DESIGN.md — St. Paul's Design System

> Attach this file to any Claude session that makes something for St. Paul's Presbyterian Church, Ingersoll (newsletter, app screen, doc, slide, sheet, social post, print). It is the short version of the full design system:
> https://claude.ai/artifact/MUEPj4WNviNhB6mhBHQkvs
>
> Reconciled 2026-11-19. Replaces older values in `st-pauls-newsletters/DESIGN.md`, the app's `tailwind.config.ts` and the Newsletter Editor CSS.

---

## 1. Seven rules (Do / Don't)

1. **Gold is a line, not a letter.** `--gold` #D4AF37 is for rules, borders, the † ornament and button fills. Gold *text* on light surfaces is `--gold-text` #8A5C00 (on sage: `--gold-text-deep` #6D4A00; on navy: `--gold-light` #F0D98C or `--gold-on-navy` #DAA017). Never set words in #D4AF37, #B8860B, #9C6A08 or #C8A55A on white or any light surface.
2. **Two typefaces, one job each.** Lora for headings and pull quotes, Inter for everything else (body, labels, buttons, figures). No Source Sans 3, Playfair Display, Source Serif 4, DM Sans or Aptos in new work. Script lettering appears only inside banner artwork, never as live text.
3. **Nothing smaller than 16px** for running text. Email body 19px / 1.75, app body 18px / 1.7.
4. **Every section opens the same way:** centred uppercase label → Lora title → gold rule with † → optional subtitle.
5. **Navy panels for the big moments only:** masthead, Our Mission, scripture, footer. Never teal text on navy (3.4:1).
6. **Status needs a word or icon, not just colour.**
7. **Invite, don't instruct:** "Join In", "Share Your Gift", "We're Praying · 14". Never "Submit", "Sign Up", "Register", "No items found".

---

## 2. Colour tokens

Three themes: **light** (default), **dark** ("Navy", for app dark mode), **print** (no tints, navy panels turn white).

```css
:root {
  /* Surfaces */
  --surface-page: #FFFFFF;    /* pure white page */
  --surface-card: #FFFFFF;
  --surface-soft: #F7F9FB;    /* soft white: alternating sections and cards, Greetings panel */
  --surface-sunken: #EEF2F6;  /* stat boxes, comment bubbles */
  --surface-sage: #C7D6C1;    /* gratitude panel */
  --surface-navy: #0D1B2A;    /* masthead, mission, footer */

  /* Text */
  --ink: #0D1B2A;             /* 17.4:1 on white */
  --ink-secondary: #475569;   /* 7.6:1 on white */
  --ink-muted: #56657B;       /* 5.9:1 on white */
  --ink-on-navy: #FFFFFF;
  --ink-on-navy-soft: #E2E8F0;

  /* Actions */
  --action-primary: #0D1B2A;
  --action-primary-hover: #1C2E42;
  --on-action-primary: #FFFFFF;

  /* Gold */
  --gold: #D4AF37;            /* decorative only */
  --gold-text: #8A5C00;       /* 5.8:1 on white */
  --gold-text-deep: #6D4A00;  /* on sage */
  --gold-light: #F0D98C;      /* on navy */
  --gold-on-navy: #DAA017;    /* bold words on navy */
  --gold-tint: #FFF8E6;
  --on-gold: #0D1B2A;

  /* Teal and sage */
  --teal: #0E7E7B;            /* dates, small labels; 4.9:1 on white, 4.6:1 on soft white */
  --teal-deep: #005863;
  --teal-tint: #E6F2F3;
  --sage-deep: #3F6643;
  --sage-tint: #E8EFE5;

  /* Borders and focus */
  --border: #E5E0D8;          /* decorative outlines */
  --border-soft: #D7E6EC;
  --border-control: #8C8273;  /* inputs: 3.5:1+ */
  --border-on-navy: #1C2E42;
  --focus-ring: #8A5C00;      /* 3px solid, offset 2px */
  --focus-ring-on-navy: #F0D98C;

  /* Status (text / fill / border) */
  --status-success: #145228; --status-success-bg: #ECFDF5; --status-success-border: #6EE7B7;
  --status-warning: #78350F; --status-warning-bg: #FFF8E6; --status-warning-border: #D4AF37;
  --status-info:    #005863; --status-info-bg:    #E6F2F3; --status-info-border:    #7CC4CB;
  --status-danger:  #7F1D1D; --status-danger-bg:  #FEF2F2; --status-danger-border:  #FCA5A5;

  /* Charts (never text) */
  --chart-slate: #6D7C93;
  --chart-gold: #D4AF37;
}
```

**Dark (Navy) overrides:** surface-page #0D1B2A · surface-card #142438 · surface-soft #1C2E42 · surface-sunken #0F2133 · surface-sage #22362B · surface-navy #08121D · ink #F7F9FB · ink-secondary #CBD5E1 · ink-muted #A9B6C6 · action-primary #D4AF37 · action-primary-hover #E8CA65 · on-action-primary #0D1B2A · gold-text #DAA017 · gold-text-deep #F0D98C · gold-tint #2A2410 · teal #5CC2C9 · teal-deep #8FD3D8 · teal-tint #11303A · sage-deep #9DBF9F · sage-tint #1D2F24 · border #1C2E42 · border-soft #24384E · border-control #7D90A8 · focus-ring #F0D98C · status text #6EE7B7 / #F0D98C / #8FD3D8 / #FCA5A5 on fills #0F2E22 / #2E2510 / #0E2C33 / #3A1416 · chart-slate #8A9BB3.

**Print overrides:** every surface #FFFFFF (navy panels too) · ink #0D1B2A · ink-secondary #334155 · ink-muted #475569 · ink-on-navy #0D1B2A · gold #B8860B (rules only) · gold-text #6D4A00 · gold-light #8A5C00 · teal #005863 · border #BFB8AD · border-control #7A6E5C · focus-ring #000000 · no shadows.

**Retired values (replace on sight):** navy #0A1C2C, #0D1F3C, #082342, #1A2A40, #1E293B · gold text #B8860B, #9C6A08, #9A6800, #C8A55A · focus #D4980A · off-whites #FAF7F1, #FDFBF7, #F4F5F8, #F3EEE4 · soft blue #EBF4F8 · UI teal #007A8A (artwork excepted) · Source Sans 3 · app muted #687B95 · app border #C5D0DF.

---

## 3. Typography

```css
--font-display: "Lora", Georgia, "Times New Roman", serif;
--font-body: "Inter", Arial, sans-serif;
--font-ui: "Inter", Arial, sans-serif;
```
Google Fonts: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap`

| Style | Font | Size / line height | Weight | Use |
|---|---|---|---|---|
| masthead | Lora | 56px / 1.05 (mobile 34px) | 700 | Newsletter masthead, app hero |
| h1 | Lora | 36px / 1.15 (mobile 28px) | 700 | Section and page titles, centred |
| h2 | Lora | 28px / 1.2 (mobile 24px) | 700 | Card titles |
| h3 | Lora | 24px / 1.25 (mobile 20px) | 600 | Event and list titles |
| quote | Lora italic | 26px / 1.45 | 500 | Mission, scripture, pull quotes |
| lead | Inter | 21px / 1.65 | 400 | First paragraph |
| body | Inter | 19px / 1.75 (mobile 18px / 1.7) | 400 | Newsletter body |
| body-app | Inter | 18px / 1.7 | 400 | App body, prayer text |
| small | Inter | 16px / 1.6 | 400 | Footer, secondary lines (the floor) |
| label | Inter | 18px / 1.4, 0.1em, UPPERCASE | 800 | Email section labels |
| label-sm | Inter | 14px / 1.4, 0.1em, UPPERCASE | 700 | App labels and eyebrows |
| button | Inter | 17px / 1.2 | 600 | Buttons |
| caption | Inter | 15px / 1.5 | 500 | Scripture refs, captions, timestamps |
| data | Inter | 17px / 1.4, tabular-nums | 600 | Figures in tables and stats |

Headings get `text-wrap: balance`. Keep lines under 68 characters.

---

## 4. Spacing, radius, shadow, layout

- **Spacing (4px base):** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 44 · 48 · 64 · 88 (`--space-1` … `--space-22`).
- **Radius:** `--radius-xs` 4px (bars) · `--radius-sm` 8px (inputs, email CTA) · `--radius-md` 12px (buttons, inner cards, callouts) · `--radius-lg` 20px (major cards) · `--radius-pill` 999px (badges, toggles).
- **Shadow (app only; email uses borders):** sm `0 2px 8px rgba(13,27,42,.08)` · md `0 4px 16px rgba(13,27,42,.10)` · lg `0 8px 24px rgba(13,27,42,.12)`.
- **App:** max width 820px, centred; gutters 44px desktop / 20px under 720px; 88px bottom padding above the mobile tab bar; 44px minimum touch targets.
- **Alternate sections and cards** between `--surface-page` (white) and `--surface-soft` (#F7F9FB) so a page breaks up cleanly. Separate with `--border` or `--border-soft`. No tinted backgrounds.
- **Email:** fluid to 1100px; section rows 18px 36px (mobile 20px 12px); card padding 36px 40px (mobile 26px 18px); table-based, inline styles, no flexbox, grid, JavaScript or forms; absolute image URLs with `width` and `alt`.

---

## 5. Components (class prefix `sp-`)

| Component | Key styling |
|---|---|
| Button | Primary: navy fill, white text, hover #1C2E42. Secondary: gold-tint fill, gold border, ink text. Ghost: underlined gold-text. Gold: email Give button only. 44px min, radius-md. Loading = spinner + "-ing" label. |
| Badge | Pills. Worship = soft white / ink · Study = sage-tint / sage-deep · Community = gold-tint / gold-text · Outreach = teal-tint / teal-deep · Edition = gold / on-gold. |
| SectionHeader | Centred label → Lora h1 → 2px gold rule with † → subtitle. |
| Card | Default white + border + radius-lg · Soft white (Greetings, and every second card or section) · Sage (gratitude, label in gold-text-deep) · Navy (mission/footer, text ink-on-navy, bold gold-on-navy). |
| Callout | Icon + bold first line + message. success / warning / info / danger trios. `role="status"` or `role="alert"`. |
| DataTable | Lora caption, uppercase headers over 2px gold rule, right-aligned tabular numbers, totals on surface-sunken, negatives in status-danger with a real minus. Always "As of [date]". Wrap in a horizontal scroller. |
| FormField | Visible label, 44px input with 1.5px border-control, hint in ink-muted with character count, error via `aria-invalid` + `aria-describedby`. |
| PrayerToggle | Pill. Off: white with gold border, "Pray · 14". On: `aria-pressed="true"`, navy fill, "We're Praying · 15". Count only, never names. One atomic RPC. |
| NavBar | Desktop: navy band, 3px gold bottom border, Lora wordmark "St. Paul's *Ingersoll*", current page gold-light + `aria-current="page"`. Mobile: white 5-tab bar with shadow-lg. |
| Icon | 24 enamel section illustrations at 72/88px; 17 gold line icons at 20–24px; app glyphs = 2px-stroke SVG in currentColor. No emoji. |
| SkimEmphasis | `sp-skim-gold` (gold-text bold) for the key figure, `sp-skim-navy` (ink bold) for support, `sp-skim-underline` (ink bold + 2px gold underline) for a contact. Max three per paragraph. |

---

## 6. Voice and content

- Warm, invitational, scripture-grounded, hopeful. *We / our / us.* Readers are *friends*.
- Approved phrases: "We are a Christ-Centred, worshipping community, serving and leading people to Jesus." · "When we place our gifts in God's hands, God does remarkable things." · "People joyfully and generously serve according to the gifts God has given them." (2 Cor 9:6) · "All are welcome."
- Title case for section titles; sentence case for buttons and body.
- Canadian spelling (colour, centre, neighbour, honour), including the mission statement: "Christ-Centred".
- Times in Eastern Time: "Sunday, November 22 · 10:30 AM". Money with "As of [date]".
- No emoji. Editorial wording comes from Kathy's approved seasonal draft; templates set layout only.

---

## 7. Imagery and assets

- Seasonal hero banners: watercolour Ontario landscapes with the church, 1100 × 340.
- Section heading banners: navy serif word + teal script word + enamel icon + gold † rule. Words are in the image, so alt text repeats them.
- Illustration style: glossy navy #0D1B2A and teal #007A8A enamel, raised gold #D4AF37 outlines, pale highlights, leaf framing, soft golden light. Sharp, not glowing.
- No logo file exists. Wordmark in type: "St. Paul's" Lora 700 + "Ingersoll" Lora italic. The Our Mission card is the brand emblem for print and social.
- Live asset base URL: `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/`. Never invent filenames or use retired `/assets/` paths.

---

## 8. Church reference

St. Paul's Presbyterian Church · 56 Thames Street S, Ingersoll, ON N5C 2S9 · 519-485-3390 · Office Tuesday–Friday 9:30 AM – 12:30 PM · Sunday Worship 10:30 AM (in person + YouTube) · stpaulsingersoll.ca · E-transfer stpaulsingersoll@outlook.com

---

## 9. Open questions (need a human decision)

1. "What's Up, St. Paul's?" (with comma) vs "What's Up St. Paul's?".
2. Fall finance figures: Draft 15 says July 31, 84.1% covered; the preview site says September 30, 89%.
3. The church has no logo file yet.
4. Teal: the UI now uses #0E7E7B (the mood-board value), but the illustration prompts and the newsletter style guide still say #007A8A.
5. Existing files to migrate: Draft 15 still uses Source Sans 3 and #FAF7F1, and the Studio still uses #FAF7F1; the app's CLAUDE.md still says "Christ-centered", Playfair Display / Source Serif 4 / DM Sans and 90px.
