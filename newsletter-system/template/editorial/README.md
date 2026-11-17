# Editorial design directions

Three complete, email-safe seasonal newsletter templates. Each renders the same sections and the same sample content in a different visual direction, so the three can be compared side by side and one can be chosen as the house look.

These are **design references, not an issue**. The canonical starting point for building a newsletter is still `newsletter-system/template/html-scaffold.html`, and editorial wording is still controlled by Kathy's approved seasonal submission and `docs/st-pauls-comprehensive-newsletter-template.md`.

## The three directions

| File | Direction | Idea | Best when |
|---|---|---|---|
| `processional-template.html` | **Processional** | The order of service as a printed program. Navy is the page; cream plates float inside it, separated by open navy bands. Centred ceremonial axis, gold hairlines, a drop cap to open the greeting. | The issue is mostly writing, and you want it to feel formal and unhurried. |
| `bound-volume-template.html` | **Bound Volume** | A letterpress church annual. A double-rule frame runs around the whole issue; a narrow left margin column carries section labels and a spot illustration; figures are set as a ruled ledger. | The issue carries numbers, dates or a stewardship report and you want them to read as a record. |
| `gallery-template.html` | **Gallery** | A contemporary gallery invitation. White dominates; full-bleed engraved title plates open each section and the sections abut with no gutter, so colour blocks do the structuring. | The issue has strong artwork and you want the most immediate visual impact. |

Previews of each, desktop and mobile, are in `previews/`.

### How each uses imagery

The three deliberately differ in how much they lean on pictures, because the asset library suits them differently.

- **Processional** — the seasonal hero plus one image moment: the cream `fall-2026-compassionate-care-spotlight-winner.jpeg` title plate opening the ministry feature. Everything else is typography. The section illustrations were left out on purpose: they are glossy dimensional emblems and they fight this direction's restraint.
- **Bound Volume** — the seasonal hero plus a 72px section illustration in each margin column. 72px is the style guide's section size; below about 64px these emblems lose their detail and read as smudges, so do not shrink them.
- **Gallery** — the seasonal hero plus five full-bleed engraved title plates, one per major section.

## Before you send one

1. **Replace every piece of sample copy.** All of it is invented. Each editorial block is preceded by an HTML comment marking it as sample. The only wording that is real and must stay exact is the Our Mission statement and the footer contact facts.
2. **Replace the seasonal hero** with the one for the issue's season:

   | Season | Hero |
   |---|---|
   | Spring | `brand/assets/banners/st-pauls-spring-hero-1100px.png` |
   | Summer | `brand/assets/banners/st-pauls-summer-hero-1100px.png` |
   | Fall | `brand/assets/banners/st-pauls-fall-hero-1100px.png` |
   | Winter | `brand/assets/banners/st-pauls-winter-hero-1100px.png` |

   All four exist, at the full `https://custodybuddy.github.io/st-pauls-newsletter-assets/` base.
3. **Replace the view-in-browser tag.** Each footer has `href="[ESP_VIEW_IN_BROWSER_MERGE_TAG]"`. Swap it for the ESP's own hosted-email merge tag. Never send the bracketed placeholder, `href="#"`, or a hard-coded URL.
4. **Replace every financial figure.** The numbers are rounded samples (`$120,000` / `$138,000` / `−$18,000` / 87%), chosen so they cannot be mistaken for a real statement. Use the approved stewardship update or remove the module.
5. **Change the section mix to match the approved draft.** Only Greetings Friends, Our Mission and Ministry Spotlight are core. Did You Know?, Upcoming Events and Focus on Finances are optional modules included here to show the layout; delete the ones the approved draft did not select.
6. **Rewrite the preheader** at the top of `<body>` — the hidden line email clients show next to the subject.
7. Copy the finished file into `newsletters/drafting/<year>-<season>/` as a versioned draft. Do not edit these templates as if they were the issue.
8. Run `node scripts/audit-newsletter-repo.js` and resolve anything it reports against your new file.

## Known tradeoffs

- **Gallery's title plates carry their section names as artwork.** At 390px they scale to roughly a third of their drawn size and the lettering gets small. The heading below each plate is written as a deck rather than a repeat of the name, and the `alt` text carries the name for clients that block images — but if small-screen legibility matters more than impact, Processional or Bound Volume is the safer pick.
- **Bound Volume uses a 4px corner radius**, not the 20–22px in `newsletter-system/docs/style-guide.md`. That is the single deliberate departure in these three files, and it is what makes the direction read as letterpress rather than as cards. Raising it to 20px is a find-and-replace if you would rather keep the radius token exact.
- **Rendering is verified in headless Chromium only.** The previews prove layout, stacking and contrast at 1280px and 390px. They prove nothing about Gmail, Outlook, Apple Mail, Yahoo, or mobile mail apps. Send real inbox tests before releasing an issue built on any of these.

## What they share

Both the structure and the rules are the same in all three:

- Section order from the comprehensive template: hero → masthead → Greetings Friends → Our Mission → Ministry Spotlight → Did You Know? → Upcoming Events → Focus on Finances → We Are So Thankful For → footer.
- Colours and type from `newsletter-system/docs/style-guide.md`, including gold text as `#8A5C00` on light surfaces and `#6D4A00` on sage, never `#D4AF37` as a text colour on a light background.
- Presentation tables only, inline critical styles, absolute HTTPS URLs, explicit `width` and `alt` on every image, `role="presentation"` on layout tables. No CSS Grid, Flexbox, JavaScript, forms, or base64 images.
- One mobile breakpoint at 700px, as progressive enhancement. The table structure stays readable when a client ignores the media query.
- Each template defines its own classes in its own `<style>` block, so none of them depends on the scaffold's stylesheet and none of them affects it.

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../../../docs/newsletter-system-architecture.md). Production rules live in `docs/st-pauls-comprehensive-newsletter-template.md`.
