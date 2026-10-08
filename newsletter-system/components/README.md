# Newsletter Components

**Single source of truth for newsletter layout.** Every new issue is assembled by hand from these files. Construction rules: `docs/st-pauls-comprehensive-newsletter-template.md`. Values: `newsletter-system/tokens.md`. Visual review: `newsletter-system/gallery/`.

> **Never edit a generated draft to change the design.** Change the component here, check it in the gallery, then rebuild the draft. Drafts 13 and 14 looked alike because design changes were made inside copied drafts and never reached a shared source.

## Rules

- Components hold **layout only**. Wording, names, dates and figures always come from Kathy’s approved copy for the issue. Never paste wording from the gallery samples.
- Each file starts with a header comment. It names the component, the artwork shape and size, every `{{placeholder}}`, the copy rules, and the desktop, mobile and Outlook behaviour.
- `{{placeholder}}` markers must all be replaced before a draft is saved. The audit fails a draft or final issue that still contains `{{`.
- Blocks between `<!-- OPTIONAL:name -->` and `<!-- /OPTIONAL:name -->` may be deleted, markers included, when the approved copy has nothing for them (sign-off, caption, quote, callout, button).
- Keep the inline styles, `role="presentation"`, `bgcolor` attributes, `dir` attributes and Outlook conditional comments exactly as they are.
- To vary a band colour, switch both its `bgcolor` attribute and its `background-color` style to another band colour from the tokens (white, cream or soft blue). Navy components stay navy.

## Manual assembly (Draft 15 onward)

1. Copy `shell/document-shell.html` to `newsletters/drafting/<year>-<season>/st-pauls-<season>-<year>-newsletter-DRAFT-<n>.html`.
2. Fill `{{email_title}}` and `{{preheader}}`.
3. Between `<!-- COMPONENTS START -->` and `<!-- COMPONENTS END -->`, paste the component rows in the approved section order:
   1. one **masthead**
   2. **Greetings** (and **Our Mission** if the Greetings variant does not include it)
   3. one **Ministry Spotlight**
   4. the selected **Optional Story Modules**, each in a feature or card component
   5. Upcoming Events, We Are So Thankful For and the footer. These still come from `snippets/` until their components are built.
4. Replace every placeholder with approved copy and approved artwork. Delete unused OPTIONAL blocks.
5. Alternate band colours (navy → cream → white) so neighbouring sections never share a background.
6. Run `node scripts/audit-newsletter-repo.js`, then send a real inbox test (Gmail, Apple Mail, Outlook desktop, phone).

## Catalogue

| Folder | File | Role | Artwork |
|---|---|---|---|
| `shell/` | `document-shell.html` | Host document: head, mobile CSS, Outlook fallbacks, 1100px canvas | — |
| `masthead/` | `masthead-classic.html` | Full-bleed banner + centred navy masthead | Banner 3:1 |
| | `masthead-split.html` | Navy title stack + framed square seasonal art | Square |
| | `masthead-framed.html` | Light title over a framed, inset banner | Banner 3:1 |
| `greetings/` | `greetings-mission-portrait.html` | Greetings Friends + large Our Mission portrait card | Portrait 3:4 |
| | `greetings-landscape-letter.html` | Greetings as a letter card under wide art | Landscape |
| `mission/` | `our-mission-portrait.html` | Standalone Our Mission band on navy | Portrait 3:4 |
| `spotlight/` | `ministry-spotlight-feature.html` | Navy title band + 410px square art beside the story | Square |
| | `ministry-spotlight-showcase.html` | 520px art first, two-column story, navy quote band | Square |
| `features/` | `feature-portrait-side.html` | Portrait art beside a story with a pull quote | Portrait |
| | `feature-landscape-top.html` | Wide art across the top of a card | Landscape |
| | `feature-split-image-left.html` | 50/50, art left | Square or landscape |
| | `feature-split-image-right.html` | 50/50, art right | Square or landscape |
| | `feature-square-badge.html` | Centred card with circular art | Square |
| `cards/` | `card-navy-illustrated.html` | Navy background card, square art | Square |
| | `card-cream-illustrated.html` | Cream background card, landscape art | Landscape |
| | `card-pair.html` | Navy + cream cards side by side, equal height | Landscape × 2 |
| `primitives/` | `section-header.html` | Label + heading + subtitle, light and dark | — |
| | `buttons-and-dividers.html` | Bulletproof buttons and the gold divider | — |
| `outlook-safe/` | `section-wrapper.html` | Original generic card wrapper (kept for reference) | — |

## Choosing a layout by artwork shape

| Artwork you have | Use |
|---|---|
| Portrait (taller than wide) | `greetings-mission-portrait`, `our-mission-portrait`, `feature-portrait-side` |
| Landscape (wider than tall) | `greetings-landscape-letter`, `feature-landscape-top`, `card-cream-illustrated`, `card-pair`, splits |
| Square | `masthead-split`, both spotlights, `card-navy-illustrated`, `feature-square-badge`, splits |
| No artwork | `primitives/section-header` + body copy, or a 72px icon from `brand/resources/icon-map-v4.json` |

## Email compatibility

- Table layout, inline styles, `bgcolor` on every coloured cell, absolute HTTPS image URLs, explicit `width` and `alt` on every image.
- Columns are real table cells. On phones, the `c-col` class stacks them; clients that ignore the media query keep the desktop columns, which still read in order.
- Art-right layouts use `dir="rtl"` on the table and `dir="ltr"` on each cell, so the art is first in source order and comes first on a phone.
- Outlook desktop: square corners, Georgia/Arial fonts, fixed 1100px canvas and fixed 760px badge card through ghost tables, and collapsed borders. Circular badge art shows as a square.
- No Grid, Flexbox, JavaScript, forms, SVG or background images in components.

## Replaces `snippets/`

`snippets/` stays in place until these components are verified in a real issue (Draft 15). Mapping:

| Old snippet | Replacement |
|---|---|
| `newsletter-hero-masthead.html` | `masthead/*` |
| `greetings-and-mission.html` | `greetings/greetings-mission-portrait.html` or `greetings-landscape-letter.html` + `mission/our-mission-portrait.html` |
| `ministry-spotlight.html` | `spotlight/*` |
| `did-you-know.html` | `cards/card-pair.html` or `cards/card-navy-illustrated.html` |
| `upcoming-event.html`, `focus-on-finances.html`, `Support St. Paul’s component.html`, `thankful.html`, `newsletter-footer.html` | Not yet rebuilt. Use the snippet and restyle it to the tokens (fonts and colours only). |
