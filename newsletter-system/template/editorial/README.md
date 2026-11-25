# Editorial design directions: Light and Bolder

Six complete, email-safe seasonal newsletter templates: **three design directions, each in two editions.** Every template renders the same sections and the same sample content, so you can compare them side by side and choose a look.

These are **design references, not an issue.** The canonical starting point for building a newsletter is still `newsletter-system/template/html-scaffold.html`, and editorial wording is still controlled by Kathy's approved seasonal submission and `docs/st-pauls-comprehensive-newsletter-template.md`.

## Choosing: the next three steps

1. Open the previews in `previews/` (desktop and mobile for each) and pick a **direction**.
2. Pick an **edition**: Light is the current house style; Bolder is the dark-navy alternative.
3. Copy that one file into `newsletters/drafting/<year>-<season>/` as a versioned draft and replace the sample copy (see [Before you send one](#before-you-send-one)).

## The matrix

| Direction | Light (`light/`) | Bolder (`bolder/`) | Idea |
|---|---|---|---|
| **Processional** | `processional-light-template.html` | `processional-bolder-template.html` | The order of service as a printed program: centred axis, drop cap, gold hairlines. |
| **Bound Volume** | `bound-volume-light-template.html` | `bound-volume-bolder-template.html` | A letterpress church annual: double-rule frame, a margin column for labels, finances set as a ruled ledger. |
| **Gallery** | `gallery-light-template.html` | `gallery-bolder-template.html` | A contemporary gallery invitation: image-led, abutting colour bands, confident type. |

### What "Light" and "Bolder" mean

| | **Light** (current house style) | **Bolder** (kept on purpose) |
|---|---|---|
| Grounds | White and soft white (`#F7F9FB`) | Same neutrals, plus dark-navy grounds |
| Navy `#0F1D3A` | Anchors only: masthead, Our Mission, footer | Also used for bands, stat tiles and, in Processional, the page itself |
| Section banners | Light Kit banners (white ground) from `brand/assets/section-banners/light/` | Dark banners from `brand/assets/section-banners/dark/` (Gallery only; the other two are type-led) |
| Events | The church's Events design: **one white card** with a gold hairline border and corner flourishes, the banner on top, and five rows divided by gold hairlines that alternate sides. Each row is a gold-rimmed calendar chip with a teal month band, an open illustration, and the event text | The same five events, each with a calendar tile styled to the direction (gold and navy, letterpress, or teal) |
| Gratitude | v3.0 flourish cards: gold corner vines, teal title, `– – – † – – –` divider | Direction-specific entries or cards |
| Footer | The church's **footer anchor tile**, identical in all six: scripture band, three-column details, feedback and donate band, copyright and unsubscribe | Same |

Both editions follow the rest of **Style Guide v3.0** (`newsletter-system/docs/style-guide.md`, `DESIGN.md`): Lora for headings, Inter for everything else, Liturgical Teal `#0E7E7B`, 1px `#E5E7EB` borders, 8px CTAs, body copy never under 16px. The one sanctioned departure in Bolder is dark navy.

## Before you send one

1. **Replace every piece of sample copy.** All of it is invented, and each editorial block is preceded by an HTML comment saying so. The only wording that is real and must stay exact is the Our Mission statement and the footer contact facts. (See the mission-wording note below.)
2. **Replace the seasonal hero** with the one for the issue's season. All four exist at 1100px under `brand/assets/banners/`:

   | Season | Hero |
   |---|---|
   | Spring | `st-pauls-spring-hero-1100px.png` |
   | Summer | `st-pauls-summer-hero-1100px.png` |
   | Fall | `st-pauls-fall-hero-1100px.png` |
   | Winter | `st-pauls-winter-hero-1100px.png` |

3. **Replace the view-in-browser tag.** Each footer has `href="[ESP_VIEW_IN_BROWSER_MERGE_TAG]"`. Swap it for the ESP's own hosted-email merge tag. Never send the bracketed placeholder, `href="#"`, or a hard-coded URL.
4. **Replace every financial figure.** The numbers are rounded samples (`$120,000` / `$138,000` / `−$18,000` / 87%) so they cannot be mistaken for a real statement. Use the approved stewardship update or remove the module.
5. **Replace the events with the approved ones.** The five events are the church's real fall events (Nov 22 to Dec 17, 2026), with weekdays checked against the 2026 calendar. For a new issue, change the date, title and details, and keep the weekday in the details line in step with the chip. Each row also needs its own illustration (see below).
6. **Match the section mix to the approved draft.** Only Greetings Friends, Our Mission and Ministry Spotlight are core. Did You Know?, Upcoming Events, Focus on Finances and We Are So Thankful For are included to show the layout; delete any the approved draft did not select.
7. **Rewrite the preheader** at the top of `<body>`, the hidden line email clients show beside the subject.
8. Run `node scripts/audit-newsletter-repo.js` and resolve anything it reports against your new file.

## Decisions that are not mine to make

- **The supplied Events page drops the Christmas Market.** The screenshot first shown to me had Elmira Chicken order deadline (Nov 26), Kettle Day (Nov 27), **Christmas Market (Dec 5)**, chicken pickup (Dec 12) and Lights of Remembrance (Dec 17). The page that followed, which is the actual code, has **Advent Christmas Tree Craft (Nov 22)** in place of the Market. The templates follow the code. If the Market (10:00 a.m. to 1:00 p.m., free admission, Penny Sale draw at 12:30 p.m.) should still run, it is a sixth row.
- **The supplied design departs from Style Guide v3.0 in three small ways.** Its date-chip header is teal `#0E7E7B`, where v3.0 specifies Forest `#2D5A43`; its description text is `#1E293B`, which v3.0 retires; and its card radius is 18px against v3.0's 20px. The templates follow the design for the chip colour, and v3.0 for the text (`#475569`) and radius (20px). If you want the chip to be Forest, it is one colour.
- **The supplied page is a browser page, so it was translated rather than pasted.** It used flexbox, CSS variables, absolutely positioned corner glyphs, a `<script>` copy button, inline SVG and a base64 banner, none of which belong in production email. The layout is rebuilt in tables; the corner glyphs became the repository's gold vine corners; the SVGs became hosted PNGs; the banner is the repository's `upcoming-events-light.jpg`, which is the same artwork (verified: mean difference 0.14 of 255); the copy button, toast and shadows were dropped.
- **Mission wording.** The repository's own sources disagree. `DESIGN.md` and Draft 16 (built from the approved doc copy) say **"Christ-Centred, worshipping community, serving and leading people to Jesus."** The comprehensive template says "Christ-centered, worshipping community serving…". These templates follow `DESIGN.md` and keep "Christ-Centred" on one line (`white-space:nowrap`), as Style Guide v3.0 requires. The comprehensive template on `main` was not updated, and the mission is permanent brand copy: leadership needs to confirm which is right.
- **Church name in the footer.** The templates say "St. Paul's Church" (matches `brand/resources/church-contact.md` and Draft 16). `DESIGN.md` says "St. Paul's Presbyterian Church".
- **Footer contact details were supplied by the church and differ from the repo's records.** The footer uses `stpauls@execulink.com` (church email, feedback and unsubscribe), `https://www.youtube.com/@stpaulsingersoll2024` (YouTube) and `https://stpaulsingersoll.ca/contact-us/donate` (no `www`). `brand/resources/church-contact.md` lists `stpaulsingersoll@outlook.com`, and `website-links.md` uses a channel-ID YouTube link and `www`. The templates follow what the church supplied; **confirm which is current before each send**, particularly the unsubscribe address, since it receives replies from readers. **Each template now shows two different church email addresses**: the footer uses the `execulink` address above, while the Focus on Finances section still gives `stpaulsingersoll@outlook.com` for e-transfers (not touched by this change). They may both be right, since an office inbox and a giving inbox can differ, but it should be a decision rather than an accident.
- **The footer's own tokens were converted to v3.0.** The supplied layout used Fraunces, `#102A43`, `#FAF8F3` and `#C7982E`; the templates use Lora, `#0F1D3A`, white and `#D4AF37` so the footer matches the rest of the system. The scripture band is the same navy as the tile, separated by a hairline, rather than a darker shade, because v3.0 has no second navy.

## Known tradeoffs and asset findings

- **The Did You Know? Light banner has a faint box.** Banner edges were measured against their frames in the actual render of all three Light files (median and 95th-percentile difference in levels out of 255, ignoring artwork that touches the edge). Five of the six Light Kit banners sit within 1–2 levels of their frame and are invisible. `did-you-know-light.jpg` does not: its edge carries JPEG noise with a slight green cast, so it differs from its surround by a median of **2 levels in Gallery** (where its frame is colour-matched) and **5 levels inside a white plate** (Processional, Bound Volume). No single frame colour can match it. About 2% is only visible to a careful eye on a bright display, but the real fix is to **regenerate that banner on pure `#FFFFFF`**. (`DESIGN.md` names a PNG as the standard Did You Know banner; it is 1.7 MB and no cleaner, so it is not used.)
- **Light Kit banners must sit on white.** They are not pure white (`#FEFEFE`; Did You Know is `#FCFCFC`), so each is placed in a cell whose background matches that file. On a soft-white band they would show as a white box, so every banner opens a white strip or plate.
- **Bolder has no dark banner for Greetings Friends, Our Mission or Request a Prayer.** `brand/assets/section-banners/README.md` says a dark issue needs those made first, so Bolder sets them as live text. `request-a-prayer-card-light.jpg` is deliberately not used in either edition: its ground is a cream tint that v3.0 retires.
- **Gallery Bolder's dark banners are 1024px files shown at 1100px**, so they are slightly soft on high-density screens.
- **Processional Light is a reinterpretation.** v3.0 reserves navy for anchor panels, so the navy-page inversion is not available in Light. The ceremony comes instead from the centred axis, the drop cap, white plates floating on soft white, and the navy Mission band as the one dark beat.
- **Bound Volume uses a 4px corner radius** in both editions, not v3.0's 20px. It is the single deliberate token departure and it is what makes the direction read as letterpress. Raising it is a find-and-replace.
- **The event illustrations are the church's own, and they are not live until this branch is merged.** The five open illustrations (Advent tree, hen, kettle, pickup basket, remembrance candle) were supplied as inline SVG. Email clients do not reliably support inline SVG, so each is rasterised unchanged to a 222px transparent PNG (about 6 KB) at `brand/assets/illustrations/email/events/fall-2026-event-<name>-illustration.png`, with the SVG masters in `source/`. **GitHub Pages serves a file only after it is merged and deployed, so a test send from this branch before the merge will show those five images as broken.** The previews here load them from the checkout. A new event needs a new illustration: draw it at 64 × 64 units like the others, export a 222px transparent PNG, and add it under `brand/assets/` following AGENTS.md section 8.
- **The circular badges and gold corner vines are progressive enhancement** and degrade to squares or plain cards in Outlook.
- **Rendering is verified in headless Chromium only.** The previews prove layout, stacking and contrast at 1280px and 390px, and with the style block stripped. They prove nothing about Gmail, Outlook, Apple Mail, Yahoo or mobile mail apps. Send real inbox tests before releasing an issue built on any of these.

## What they share

- Section order from the comprehensive template: hero → masthead → Greetings Friends → Our Mission → Ministry Spotlight → Did You Know? → Upcoming Events → Focus on Finances → We Are So Thankful For → footer.
- Presentation tables only, inline critical styles, absolute HTTPS URLs, explicit `width` and `alt` on every image, `role="presentation"` on layout tables. No CSS Grid, Flexbox, JavaScript, forms or base64 images.
- The alternating event rows mirror with `dir="rtl"` on the row and on the chip-and-illustration pair, with each cell resetting `dir="ltr"`, so the HTML order never changes. On mobile the rows stack and `direction:ltr` is forced back on, so every row reads chip, illustration, then text. `dir` on tables is widely supported but is the first thing to check if a row looks reversed in a particular mail client.
- One mobile breakpoint at 700px, as progressive enhancement. The table structure stays readable when a client ignores the media query.
- Each template defines its own classes in its own `<style>` block, so none depends on or alters `html-scaffold.html` or the permanent snippets.
- A rule that sits **beside a taller cell** (the flanking lines round a label, the dashes round the † cross, the folio separators) is a nested, vertically-centred table. A `td` with `height:1px` in that position is silently stretched into a block by its taller sibling. A standalone one-cell rule is fine.

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../../../docs/newsletter-system-architecture.md). Production rules live in `docs/st-pauls-comprehensive-newsletter-template.md`; design tokens in `newsletter-system/docs/style-guide.md` and `DESIGN.md`.
