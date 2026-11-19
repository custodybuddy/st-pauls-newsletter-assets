# Section banners: light and dark styles

Email-sized section banners in two styles. Pick one style per issue and use it for every section.

| Style | Look | Folder |
|---|---|---|
| **Light** (quieter) | White or cream background, navy lettering, teal script, gold cross rule | [`light/`](light/) |
| **Dark** (bolder) | Navy background, gold lettering, ornamental gold frame | [`dark/`](dark/) |

**Naming:** `<section>-<style>.jpg`, for example `did-you-know-light.jpg`. Cards that carry baked-in wording add `-card`, for example `our-mission-card-light.jpg`.

**URL:** `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/section-banners/<style>/<file>`

## Which file, and what size to declare

Declare the width and height below in the email HTML. They are the sizes used by the Fall 2026 layout (`newsletters/drafting/2026-fall/st-pauls-fall-2026-newsletter-DRAFT-16.html`: a 1100 px email, with full-width banners at 998 px inside their card and the two paired headings at 560 px). Each file is 2x its display width where the source allows, and every file is under 160 KB. The two styles do **not** share a slot shape for Focus on Finances and Compassionate Care, so changing style means changing the height too.

| Section | Light file | Light slot (w × h) | Dark file | Dark slot (w × h) |
|---|---|---|---|---|
| Greetings Friends | `greetings-friends-light.jpg` | 998 × 241 | none yet | n/a |
| Our Mission (card) | `our-mission-card-light.jpg` | 340 × 425 | none yet | n/a |
| Request a Prayer (card) | `request-a-prayer-card-light.jpg` | 540 × 540 (not used in DRAFT-16, which sets this as live text with a call button) | none yet | n/a |
| Did You Know? | `did-you-know-light.jpg` | 998 × 211 | `did-you-know-dark.jpg` | 998 × 210 |
| Focus on Finances | `focus-on-finances-light.jpg` | 998 × 211 | `focus-on-finances-dark.jpg` | 998 × 231 |
| Upcoming Events | `upcoming-events-light.jpg` | 560 × 187 | `upcoming-events-dark.jpg` | 560 × 187 |
| We Are So Thankful For | `we-are-so-thankful-for-light.jpg` | 560 × 187 | `we-are-so-thankful-for-dark.jpg` | 560 × 187 |
| Compassionate Care spotlight | `compassionate-care-light.jpg` | 998 × 333 | `compassionate-care-dark.jpg` | 998 × 231 |

Notes:

- The dark Did You Know?, Focus on Finances and Compassionate Care files are 1024 px wide, so at a 998 px slot they show at roughly native size: crisp on a normal screen, not retina-sharp.
- Greetings Friends, Our Mission and Request a Prayer have no dark version yet. A dark issue needs those three made first.
- The light cards contain approved wording in the artwork (mission statement, prayer phone number). If that wording changes, the image must be regenerated; alt text alone will not fix it.

## Which version is newest?

Open the [image library](../../../st-pauls-image-library.html), choose the **section-banners / light** or **section-banners / dark** chip, and leave **Sort** on *Newest added first*. Each card shows its added date. Dates come from [`image-dates.json`](../metadata/image-dates.json). They record when a file was added to the repository, not when the artwork was designed, and an exact copy keeps the date of the original it was copied from.

## Where these came from

The light files are optimised from the Fall 2026 HTML kit, and `compassionate-care-light.jpg` from `banners/fall-2026-compassionate-care-spotlight-winner.jpeg`. The dark files are unchanged copies of the `banners/fall-2026-*` JPEGs. **The originals were left in place** so any URL already published keeps working.

## Not sorted into either style

These are heavy gold 3D-lettering PNGs on transparent backgrounds, a third look. They are left where they are until someone decides how to classify them:
`banners/fall-2026-upcoming-events-title-landscape-transparent.png`, `banners/upcoming-events-portrait.png`, `banners/st-pauls-request-a-prayer-title-transparent.png`, `banners/2026-dyk-banner.png`.

## Other light artwork (full-size originals, not email-sized)

The hosted library in [`../section-headers/`](../section-headers/) and [`../cta-cards/`](../cta-cards/) is also light style and covers sections this folder does not yet, such as Volunteer Opportunities and Prayer & Care. Those files are 0.3 to 2.5 MB each, so optimise one before using it in an email.
