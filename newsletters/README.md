# newsletters/

Three folders, organized by season (`<year>-<season>`, for example `2026-fall`):

| Folder | What goes here | Editable? |
|---|---|---|
| `drafting/<year>-<season>/` | Work in progress. One versioned file per draft (`...-DRAFT-14.html`). | Yes |
| `final/<year>-<season>/` | The one issue that is approved and ready to send. At most one HTML file per season. | Only until it is sent |
| `archive/<year>-<season>/<yyyy-mm-month>/` | Issues that were published and sent. Each holds `newsletter.html` plus `screenshot.png` (and `screenshot-full.png` if useful). | No, read-only |

## Workflow

1. Build the draft in `drafting/<year>-<season>/` from `newsletter-system/components/` (start with `shell/document-shell.html`) and `docs/st-pauls-comprehensive-newsletter-template.md`.
2. When Kathy approves it, copy the chosen version to `final/<year>-<season>/`.
3. After it is sent, move it to `archive/<year>-<season>/<yyyy-mm-month>/newsletter.html` and add a screenshot of how it looked.
4. Add the issue to the table in `archive/README.md`.

## Why the archive matters

Archived issues show the sections and components the church community already knows. New issues should keep those sections and components and improve the design and visual hierarchy, not replace them. See `archive/README.md` for the section list and `resources/archive-review/` for the design analysis.

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../docs/newsletter-system-architecture.md).
