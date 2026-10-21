# St. Paul's newsletter-system workspace

This folder is the **working system** for building newsletter issues. Keep actual media in `../brand/assets/`, not here, so the existing public image URLs stay stable.

| Area | Entry point | Responsibility |
|---|---|---|
| **Choose images** | [assets/index.html](assets/index.html) | Visual searchable gallery with thumbnails, categories and Load More |
| **AI image lookup** | [assets/agent-image-selection.md](assets/agent-image-selection.md) | Canonical URLs, categories, approval checks |
| **Asset file map** | [assets/README.md](assets/README.md) | One shared source of truth |
| **HTML newsletter scaffold** | [template/html-scaffold.html](template/html-scaffold.html) | Starting email-safe layout |
| **Kathy's content template** | [template/kathy-drafting-template.md](template/kathy-drafting-template.md) | Approved-content drafting flow |
| **Content-only template** | [template/content-template.md](template/content-template.md) | Reusable seasonal content input |
| **Outlook-safe components** | [components/outlook-safe/](components/outlook-safe/) | Structural table blocks |
| **Styles and QA** | [docs/style-guide.md](docs/style-guide.md), [docs/qa-checklist.md](docs/qa-checklist.md) | Newsletter rendering rules |

### Editorial guardrail

Keep **Greetings Friends**, **Our Mission**, every ministry paragraph and scripture exactly as supplied by Kathy unless she approves a revision. The reusable components change presentation, not authored copy.

### Image library architecture

- Media source: `brand/assets/`.
- Canonical gallery application: repository-root `st-pauls-image-library.html`.
- Agent-readable snapshot: repository-root `st-pauls-image-library.md`.
- Metadata: `brand/assets/metadata/section-presets.json`.
- Local access portal: `newsletter-system/assets/index.html` (embeds the existing gallery, no duplicate logic).

Do not delete old assets or rewire live URLs until replacements have been reviewed and affected newsletters audited.
