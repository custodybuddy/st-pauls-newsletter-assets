# St. Paul's Newsletter Assets

Production assets and templates for St. Paul's "What's Up, St. Paul's?" newsletters.

## Current Production Baseline

- Required construction guide: `docs/st-pauls-comprehensive-newsletter-template.md`
- Default format: Type A — Ministry Spotlight
- Approved and working HTML newsletters are issue records and visual references; they are not the structural source for a new issue.
- New newsletter icons use `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/icons-v3/`.

## Project Structure

- `newsletters/approved/`
  - Final approved source-of-truth HTML newsletters.
- `newsletters/working/`
  - In-progress versioned edits (`*-EDITED-v2.html`, `*-EDITED-v3.html`).
- `newsletters/archive/`
  - Historical issues not currently being edited.
- `assets/icons/icons-v3/`
  - Canonical PNG icon library for new newsletter sections.
- `resources/links/`
  - Link and icon mapping libraries used during production.
- `templates/`
  - Reusable newsletter base templates (email-safe and Canva-friendly).
- `snippets/`
  - Reusable section HTML blocks (hero, footer, events, CTA rows).
- `checklists/`
  - QA and production checklists.
- `docs/`
  - Supporting docs (style guide, changelog, process notes).

## File Naming Rules

- Never overwrite approved source files.
- Create versioned edits:
  - `spring-newsletter-EDITED-v2.html`
  - `spring-newsletter-EDITED-v3.html`
  - `st-pauls-icons-and-important-links-UPDATED-v2.md`

## Production Workflow

1. Read `docs/st-pauls-comprehensive-newsletter-template.md` before planning or building a new issue.
2. Select Type A by default; use Type B or Type C only when the content or user request calls for it.
3. Use the latest approved or explicitly assigned source for copy, while preserving approved wording.
4. Create a new versioned file in `newsletters/working/`; never overwrite approved or historical newsletters.
5. Validate the issue with `checklists/NEWSLETTER-QA-CHECKLIST.md`, including a real inbox test before distribution.
6. Move a completed issue into `newsletters/approved/` only after approval.

## Key References

- Comprehensive construction template: `docs/st-pauls-comprehensive-newsletter-template.md`
- Live preview base URL: `https://custodybuddy.github.io/st-pauls-newsletter-assets/`
- QA checklist: `checklists/NEWSLETTER-QA-CHECKLIST.md`
- Canonical v3 icon and link library: `resources/links/st-pauls-icons-and-important-links.md`
- Current v3 visual icon map: `resources/links/st-pauls-icons-v3-visual-map-v1.html`
- Website data and stable link directory: `resources/links/st-pauls-website-data-and-links-v1.md`
- View-in-browser guidance: `resources/links/st-pauls-view-in-browser-guidance-v2.md`
- Brand tokens: `docs/style-guide.md`
- Change log: `docs/changelog.md`
