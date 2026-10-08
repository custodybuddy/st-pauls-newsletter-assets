# Component Catalogue

Every component is a `<tr>` row in `snippets/`. Rows are interchangeable, so any optional component can be dropped or moved. **Layout only:** snippets marked "Draft 11 wording" must have all text replaced with approved copy.

## Permanent (every edition, fixed order)

| # | Component | Snippet | Notes |
|---|---|---|---|
| 1 | Hero + masthead | `newsletter-hero-masthead.html` | Pick the seasonal 1100px banner from `brand/assets/banners/`. Draft 11 wording. |
| 2 | Greetings Friends + Our Mission | `greetings-and-mission.html` | Two columns: Greetings text on the left, a navy Our Mission card (icon 03) on the right. The approved church-building illustration will be added to the Greetings column once supplied; reserve the space and mark it `[CHURCH ILLUSTRATION: pending approved art]`. `st-pauls-our-mission-card-v2-email.jpg` is registered as the Our Mission illustration but no current draft uses it. Greetings is about 120–200 words. Draft 11 wording. |
| 3 | Footer | `newsletter-footer.html` | Church facts come from `brand/resources/church-contact.md`. Navy panel: light text only. |

## Optional (include only what the approved copy supports, in any order)

| Component | Snippet | Icon | Fits | Placement note |
|---|---|---|---|---|
| Ministry Spotlight | `ministry-spotlight.html` | 04 | Long (500–800 words) | Core section in the template, so normally present. Heavy: follow it with a light section. Draft 11 wording. |
| Did You Know? / Community Discernment | `did-you-know.html` | 05 | Medium | Draft 11 wording. |
| Upcoming Events | `upcoming-event.html` | 09 | 3–5 short items | Keep in the first half when dates are near. Check no date has passed. Draft 11 wording. |
| Focus on Finances / Stewardship | `focus-on-finances.html` | 11 / 08 | Medium, figures | Contains the shared Support St. Paul's card. Figures must be verified. Draft 11 wording. |
| We Are So Thankful For | `thankful.html` | 12 | About 3 entries | Normally near the end. Draft 11 wording. |
| Church Announcements | `church-announcements.html` | 13 | Short (up to 3 items) | New. Light. Good opener after Greetings. |
| Volunteer Opportunities | `volunteer-opportunities.html` | 14 | Short–medium | New. Light. CTA: Contact Us. |
| Photo Feature | `photo-feature.html` | none | Short caption | New. Needs an image URL and alt text. Confirm permission for identifiable people. Landscape 16:9 preferred. |
| Seasonal Celebration | `seasonal-celebration.html` | none | Short | New. Dark navy panel with light text. Do not place next to another dark panel. |
| Closing Message | `closing-message.html` | none | Short | New. Always last, just above the footer. |
| Community News / Community Impact | reuse `ministry-spotlight.html` or `church-announcements.html` | 06 | Medium | No separate snippet. Use icon 06 for service beyond the church. |

Other modules in the comprehensive template (Scripture reflection, Prayer focus, Sermon reflection, Testimony, Bible study) have no snippet yet. Build them from the closest snippet and the scaffold sections, and report that you did so.

## Pairing and balance

- Dark panels (Seasonal Celebration, footer, finances accent): never adjacent to each other.
- Two photos (hero excluded) should not be adjacent.
- If an edition has only 3–4 optional sections, favour one heavy section, then light ones.
- Short or long content: if a section would be under about 40 words, merge it into Church Announcements instead of a full-width card.

## Section markers

Each snippet begins with an uppercase comment (for example `<!-- CHURCH ANNOUNCEMENTS -->`) directly before its `<tr>`. Keep these when assembling. `node scripts/audit-newsletter-repo.js --sections <file>` prints the `<h1>`/`<h2>` headings in order, so every section needs one.

## Known snippet issues (not yet fixed)

- `focus-on-finances.html` has a decorative badge using `position:absolute` and `display:flex`, which Outlook ignores. Draft 13 does not use it.
- `greetings-and-mission.html` has a stray invalid `max width="1100px"` attribute on a `<td>`.
- `newsletter-system/template/html-scaffold.html` lacks some classes the snippets use (`split-col`, `heading-icon-cell`, `event-date`, `event-copy`). Draft 13's `<head>` styles are the complete host for snippets. Use them as the shell for assembly.
