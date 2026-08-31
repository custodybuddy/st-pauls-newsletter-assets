# St. Paul's Newsletter Assets

Production assets and templates for St. Paul's "What's Up, St. Paul's?" newsletters.

## Current Production Baseline

- Required construction guide: `docs/st-pauls-comprehensive-newsletter-template.md`
- Default format: Type A — Ministry Spotlight
- Approved and working HTML newsletters are issue records and visual references; they are not the structural source for a new issue.
- The prior icon library is retired. New issues use the text markers in `resources/links/st-pauls-icon-placeholders.md` until a newly approved system is introduced.

## Project Structure

- `newsletters/approved/`
  - Final approved source-of-truth HTML newsletters.
- `newsletters/working/`
  - In-progress versioned edits (`*-EDITED-v2.html`, `*-EDITED-v3.html`).
- `newsletters/archive/`
  - Historical issues not currently being edited.
- `assets/icons/`
  - Reserved for a future approved icon library; intentionally contains no production icon assets.
- `resources/links/`
  - Link and icon mapping libraries used during production.
- `templates/`
  - Historical and previously generated HTML references. Do not use these as the structural source for a new issue unless the user explicitly assigns one.
- `snippets/`
  - Reserved for future reusable section blocks; currently empty except for its placeholder file.
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

## Repository Audit

Run the dependency-free, read-only audit from the repository root:

```bash
node scripts/audit-newsletter-repo.js
```

The standard audit fails on current guidance errors or any remaining production icon asset and reports historical/template HTML findings as warnings. Use `--strict` when every warning must fail the check:

```bash
node scripts/audit-newsletter-repo.js --strict
```

The audit does not change any file and does not make network requests.

## Key References

- Comprehensive construction template: `docs/st-pauls-comprehensive-newsletter-template.md`
- Live preview base URL: `https://custodybuddy.github.io/st-pauls-newsletter-assets/`
- QA checklist: `checklists/NEWSLETTER-QA-CHECKLIST.md`
- Repository audit: `scripts/audit-newsletter-repo.js`
- Icon-system reset placeholders: `resources/links/st-pauls-icon-placeholders.md`
- Website data and stable link directory: `resources/links/st-pauls-website-data-and-links-v1.md`
- View-in-browser guidance: `resources/links/st-pauls-view-in-browser-guidance-v2.md`
- Brand tokens: `docs/style-guide.md`
- Change log: `docs/changelog.md`
