# newsletters/

Three folders, organized by season (`<year>-<season>`, for example `2026-fall`):

| Folder | What goes here | Editable? |
|---|---|---|
| `drafting/<year>-<season>/` | Work in progress. One versioned file per draft (`...-DRAFT-14.html`). | Yes |
| `final/<year>-<season>/` | The one issue that is approved and ready to send. At most one HTML file per season. | Only until it is sent |
| `archive/<year>-<season>/<yyyy-mm-month>/` | Issues that were published and sent. Each holds `newsletter.html` plus `screenshot.png` (and `screenshot-full.png` if useful). | No, read-only |

## Workflow

1. Build the draft in `drafting/<year>-<season>/` from `newsletter-system/template/html-scaffold.html` and `docs/st-pauls-comprehensive-newsletter-template.md`.
2. When Kathy approves it, copy the chosen version to `final/<year>-<season>/`.
3. After it is sent, move it to `archive/<year>-<season>/<yyyy-mm-month>/newsletter.html` and add a screenshot of how it looked.
4. Add the issue to the table in `archive/README.md`.

## Why the archive matters

Archived issues show the sections and components the church community already knows. New issues should keep those sections and components and improve the design and visual hierarchy, not replace them. See `archive/README.md` for the section list and `resources/archive-review/` for the design analysis.

## Assembling with the St. Paul's newsletter skill

1. Copy `newsletter-system/template/content-template.md` to `drafting/<year>-<season>/content.md` and fill it in with approved copy. Delete the sections you do not need. Reorder the rest.
2. Ask Claude Code: "Create the next St. Paul's newsletter using our existing design system. Select appropriate components, rearrange them for visual balance, reuse our illustrations, and prepare a preview for approval. Content is in `<path>`." (or start with `/st-pauls-newsletter`).
3. Claude proposes a section order and waits for your yes, then builds a new versioned draft plus a plain-text `.txt`.
4. Check the preview and the report of checks run, then approve. Only after approval does the file move to `final/`.

`drafting/2026-test/` is a layout test with sample text. It is not an issue and must not be sent.

---

## Repository Structure Reference

For the system map, source-of-truth order, directory responsibilities, and verification boundaries, see the [newsletter system architecture](../docs/newsletter-system-architecture.md).
