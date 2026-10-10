# Reusable Newsletter Snippets

**Active component library.** These are table-row fragments for building new issues. The permanent blocks, Ministry Spotlight and Focus on Finances were re-extracted from Draft 13 (current visual reference) on 2026-10-08; the rest come from Draft 11 or are new placeholder-only components.

> **Layout only.** The wording, names, dates, and figures inside each fragment come from earlier drafts. Replace all of it with Kathy’s approved copy for the issue you are building. See `docs/st-pauls-comprehensive-newsletter-template.md`.

- Insert each fragment inside the destination newsletter's main content table; they are not standalone HTML documents.
- Preserve the inline styles, presentation tables, Outlook conditional comments, absolute image URLs, and `alt` text.
- The host newsletter must define every class these fragments use (`section-pad`, `inner-pad`, `split-col`, `stack-gap`, `heading-icon-cell`, `illus-slot`, `event-date`, `event-copy`, `masthead-cell` and others). `newsletter-system/template/html-scaffold.html` defines them all; the audit fails if a snippet uses an undefined class or the scaffold's permanent blocks drift from the permanent snippets.
- All image URLs point to `brand/assets/` (icons, banners, illustrations). Do not reintroduce `/assets/` URLs.
- Icon choices follow `brand/resources/icon-map-v4.json`.
- Run `node scripts/audit-newsletter-repo.js` after building an issue; it flags image URLs that point to files missing from the repository.

The five newest fragments (announcements, volunteer, photo, celebration, closing) contain bracketed placeholders only, no Draft 11 wording. The component catalogue with placement notes is `.claude/skills/st-pauls-newsletter/components.md`.

| Snippet | Extracted role |
|---|---|
| `newsletter-hero-masthead.html` | Seasonal hero, masthead, and processional rule |
| `greetings-and-mission.html` | Greetings Friends (with replaceable illustration slot) and Our Mission |
| `ministry-spotlight.html` | Ministry Spotlight feature |
| `did-you-know.html` | Did You Know section |
| `upcoming-event.html` | Upcoming Event section |
| `focus-on-finances.html` | Focus on Finances section, with the shared Support St. Paul’s card in its right column |
| `Support St. Paul’s component.html` | Standalone Support St. Paul’s card (already embedded in `focus-on-finances.html`) |
| `thankful.html` | We Are So Thankful For section |
| `church-announcements.html` | Church Announcements (up to 3 items, with Read Church News button). Placeholder text only |
| `volunteer-opportunities.html` | Volunteer Opportunity with When/Where/Contact. Placeholder text only |
| `photo-feature.html` | Photo Feature with caption (landscape 16:9 recommended). Placeholder text only |
| `seasonal-celebration.html` | Seasonal Celebration on a dark navy panel with light text. Placeholder text only |
| `closing-message.html` | Closing Message with sign-off. Place just above the footer. Placeholder text only |
| `newsletter-footer.html` | Footer and calls to action |

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../docs/newsletter-system-architecture.md).
