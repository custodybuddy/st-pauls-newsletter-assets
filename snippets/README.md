# Reusable Newsletter Snippets

> **Being replaced.** `newsletter-system/components/` is now the single source of truth for layout (see its `README.md` for the snippet-to-component mapping). These files stay until the new components are verified in Draft 15. Until then, use them only for sections that have no component yet: Upcoming Events, Focus on Finances, Support St. Paul’s, We Are So Thankful For, and the footer. Their fonts (Playfair Display, Source Sans 3) do not match `newsletter-system/tokens.md`; switch them to Lora and Inter when you use them.

**Older component library.** These are table-row fragments for building new issues. They were extracted from `newsletters/drafting/2026-fall/older-drafts/st-pauls-fall-2026-newsletter-DRAFT-11.html`.

> **Layout only.** The wording, names, dates, and figures inside each fragment come from Draft 11. Replace all of it with Kathy’s approved copy for the issue you are building. See `docs/st-pauls-comprehensive-newsletter-template.md`.

- Insert each fragment inside the destination newsletter's main content table; they are not standalone HTML documents.
- Preserve the inline styles, presentation tables, Outlook conditional comments, absolute image URLs, and `alt` text.
- The host newsletter must include the responsive classes used by these fragments, including `section-pad`, `inner-pad`, `split-col`, `stack-gap`, `heading-icon-cell`, and `footer-col`. `newsletter-system/template/html-scaffold.html` is the matching host.
- All image URLs point to `brand/assets/` (icons, banners, illustrations). Do not reintroduce `/assets/` URLs.
- Icon choices follow `brand/resources/icon-map-v4.json`.
- Run `node scripts/audit-newsletter-repo.js` after building an issue; it flags image URLs that point to files missing from the repository.

| Snippet | Extracted role |
|---|---|
| `newsletter-hero-masthead.html` | Seasonal hero, masthead, and processional rule |
| `greetings-and-mission.html` | Greetings Friends and Our Mission |
| `ministry-spotlight.html` | Ministry Spotlight feature |
| `did-you-know.html` | Did You Know section |
| `upcoming-event.html` | Upcoming Event section |
| `focus-on-finances.html` | Focus on Finances section, with the shared Support St. Paul’s card in its right column |
| `Support St. Paul’s component.html` | Standalone Support St. Paul’s card (already embedded in `focus-on-finances.html`) |
| `thankful.html` | We Are So Thankful For section |
| `newsletter-footer.html` | Footer and calls to action |

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../docs/newsletter-system-architecture.md).
