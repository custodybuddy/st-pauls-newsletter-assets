# Component Catalogue

Every component is one or more table rows in `snippets/`. Rows are interchangeable, so any optional component can be dropped or moved. **Layout only:** replace all wording, names, dates, figures and images with approved copy. The scaffold (`newsletter-system/template/html-scaffold.html`) already holds the `<head>` styles that every active snippet needs. The audit fails if a snippet uses a class the scaffold does not define.

Tokens: `newsletter-system/docs/style-guide.md`.

## Permanent (every edition, fixed order; already in the scaffold)

| # | Component | Snippet | Notes |
|---|---|---|---|
| 1 | Hero + masthead | `newsletter-hero-masthead.html` | Pick the seasonal 1100px banner from `brand/assets/banners/`. Update hero alt text and the edition badge. |
| 2 | Greetings Friends + Our Mission | `greetings-and-mission.html` | Greeting card (text left, **illustration slot** right) and a navy Our Mission card. About 120–200 words of greeting. |
| 3 | Footer | `newsletter-footer.html` | Church facts from `brand/resources/church-contact.md`; website link is `https://www.stpaulsingersoll.ca/`. Navy panel: light text only. |

### Greetings illustration slot

- Sits beside the greeting text (about 40% width; stacks under the text on mobile, centred, max 320px).
- Holds the pending approved church illustration. Today it is a dashed placeholder reading `[CHURCH ILLUSTRATION: pending approved art]`. Keep it until art is approved. Never substitute a generic church.
- To fill it, replace the placeholder table with an `<img>` using `width="220"` and `style="display:block; width:100%; max-width:220px; height:auto; border:0; border-radius:16px; margin:0 auto;"`. The same markup fits portrait, square and landscape art, so the layout does not change.

## Optional (include only what the approved copy supports, in any order)

| Component | Snippet | Icon | Fits | Placement note |
|---|---|---|---|---|
| Ministry Spotlight | `ministry-spotlight.html` | 04 | Long (500–800 words), image beside text | Prominent recurring section; content changes each edition. Heavy: follow with a light section. |
| Church Announcements | `church-announcements.html` | 13 | Up to 3 short items | Light. Good opener after Greetings. |
| Upcoming Events | `upcoming-event.html` | 09 | 3–5 short items | Keep in the first half when dates are near. Check no date has passed. |
| Volunteer Opportunities | `volunteer-opportunities.html` | 14 | Short–medium | Light. CTA: Contact Us. |
| Did You Know? | `did-you-know.html` | 05 | Medium | Community context or discernment. |
| Photo Feature | `photo-feature.html` | none | Short caption | Needs an image URL and alt text. Landscape 16:9 preferred; square and portrait variants are in the file comment. Confirm permission for identifiable people. |
| Seasonal Celebration | `seasonal-celebration.html` | none | Short | Dark navy panel with light text. Never next to another dark panel. |
| Focus on Finances | `focus-on-finances.html` | 11 | Medium, figures | Figures must be verified and come from Kathy's approved submission. |
| We Are So Thankful For | `thankful.html` | 12 | About 3 entries | Normally near the end. |
| Closing Message | `closing-message.html` | none | Short | Always last, just above the footer. |
| Community News | reuse `church-announcements.html` or `ministry-spotlight.html` | 06 | Medium | No separate snippet. Use icon 06 for service beyond the church. |

`Support St. Paul's component.html` is the standalone giving card, already embedded in the finances layout; use it alone only when no finance figures are shown.

Other modules in the comprehensive template (Scripture reflection, Prayer focus, Sermon reflection, Testimony, Bible study) have no snippet yet. Build them from the closest snippet and report that you did so.

## Illustration fit

| Need | Use |
|---|---|
| Large editorial illustration beside text | Ministry Spotlight image column; Greetings slot |
| Landscape | Hero banner; Photo Feature (full card width, up to 640px) |
| Portrait | Greetings slot (220px); Ministry Spotlight image column |
| Square | Ministry wheel graphic (260px); icons (72px); Greetings slot |
| Decorative card accent | 72px v4 icon in the heading row; gold side bar; teal left rule on item cards |
| Illustrated background | Not used by default. Needs `bgcolor` fallback plus a real-client test before use. |

## Pairing and balance

- Dark panels (Seasonal Celebration, footer, finances accent): never adjacent to each other.
- Two photos (hero excluded) should not be adjacent.
- If an edition has only 3–4 optional sections, favour one heavy section, then light ones.
- Short or long content: if a section would be under about 40 words, merge it into Church Announcements instead of a full-width card.

## Section markers

Each snippet begins with an uppercase comment (for example `<!-- CHURCH ANNOUNCEMENTS -->`) directly before its first row. Keep these when assembling. `node scripts/audit-newsletter-repo.js --sections <file>` prints the `<h1>`/`<h2>` headings in order, so every section needs one.

## Remaining limitations

- The footer has no email, phone or view-in-browser link. Add the ESP merge tag link once an email service is chosen.
- No email client has been tested. Outlook for Windows may ignore `max-width` on the main card (see `newsletter-system/docs/email-width-proposal.md`), rounded corners and some spacing.
- Web fonts fall back to Georgia and Arial in Gmail and Outlook.
