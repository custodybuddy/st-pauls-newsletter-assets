# St. Paul's Newsletter Assets

Production assets and templates for St. Paul's "What's Up, St. Paul's?" newsletters.

## Project Structure

- `newsletters/approved/`
  - Final approved source-of-truth HTML newsletters.
- `newsletters/working/`
  - In-progress versioned edits (`*-EDITED-v2.html`, `*-EDITED-v3.html`).
- `newsletters/archive/`
  - Historical issues not currently being edited.
- `resources/icons/`
  - Canonical PNG icon library for newsletter sections and CTAs.
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

1. Start from the latest file in `newsletters/approved/`.
2. Copy it to `newsletters/working/` with the next version suffix.
3. Apply only requested changes and preserve approved copy when required.
4. Validate email-safe HTML and contrast rules.
5. Save the completed issue into `newsletters/approved/` once approved.
6. Move superseded legacy issues to `newsletters/archive/` as needed.

## Key References

- QA checklist: `checklists/NEWSLETTER-QA-CHECKLIST.md`
- Link/icon library: `resources/links/st-pauls-icons-and-important-links.md`
- Brand tokens: `docs/style-guide.md`
- Change log: `docs/changelog.md`
