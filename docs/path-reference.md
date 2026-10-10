# St. Paul’s Newsletter Path Reference

Use this page to navigate the repository and review the public files served by GitHub Pages. For source-of-truth order, editing boundaries, and the complete production flow, see the [Newsletter System Architecture](newsletter-system-architecture.md).

## Live GitHub Pages Base

`https://custodybuddy.github.io/st-pauls-newsletter-assets/`

Append a repository-relative file path to this base to form a public URL. GitHub Pages serves files after they are committed and deployed; it does not provide a browseable directory listing for every folder.

## Live Asset and Resource Paths

| Purpose | Repository path | Public URL or URL prefix | Notes |
|---|---|---|---|
| All production assets | [`brand/assets/`](../brand/assets/) | Append `brand/assets/<filename>` to the base above | Use this construction for final email image paths. |
| Seasonal banners | [`brand/assets/banners/`](../brand/assets/banners/) | Append `brand/assets/banners/<filename>` to the base above | Example: [Fall hero](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/banners/st-pauls-fall-hero-1100px.png). |
| Canonical v4 icons | [`brand/assets/icons/`](../brand/assets/icons/) | Append `brand/assets/icons/<filename>` to the base above | Example: [main branding icon](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/icons/01-branding-cross-wings.png). |
| Supporting illustrations | [`brand/assets/illustrations/`](../brand/assets/illustrations/) | Append `brand/assets/illustrations/<filename>` to the base above | Use only a documented asset with suitable public-sharing permission. |
| Resource records | [`brand/resources/`](../brand/resources/) | Append `brand/resources/<filename>` to the base above | Use the named resources below rather than assuming a directory index. |
| Brand visual review | [`brand/resources/brand-assets-visual.html`](../brand/resources/brand-assets-visual.html) | [Open live visual map](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/resources/brand-assets-visual.html) | Browser reference page; not email HTML. |
| Icon visual review | [`brand/resources/icon-map-v4-visual.html`](../brand/resources/icon-map-v4-visual.html) | [Open live icon map](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/resources/icon-map-v4-visual.html) | Visual companion to the v4 manifest. |
| Canonical icon data | [`brand/resources/icon-map-v4.json`](../brand/resources/icon-map-v4.json) | [Open live JSON](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/resources/icon-map-v4.json) | Controls icon filenames, roles, URLs, alt text, and recommended widths. |
| Stable destinations | [`brand/resources/website-links.md`](../brand/resources/website-links.md), [`donation-links.md`](../brand/resources/donation-links.md), [`church-contact.md`](../brand/resources/church-contact.md), [`reusable-urls.md`](../brand/resources/reusable-urls.md) | Append the resource filename to the base above | Use these local records when selecting footer and CTA destinations. Recheck time-sensitive links before sending. |

## Core Documentation and Templates

| Item | Local path | Use it for |
|---|---|---|
| System architecture | [docs/newsletter-system-architecture.md](newsletter-system-architecture.md) | Source order, folder responsibilities, assembly flow, and verification limits. |
| Comprehensive production template | [docs/st-pauls-comprehensive-newsletter-template.md](st-pauls-comprehensive-newsletter-template.md) | Local production baseline and the companion to Kathy’s approved seasonal submission. |
| Project overview | [README.md](../README.md) | Fast orientation and current entry points. |
| Agent guardrails | [AGENTS.md](../AGENTS.md) | Production rules, email safety, asset governance, and edit boundaries. |
| Production QA checklist | [newsletter-system/docs/qa-checklist.md](../newsletter-system/docs/qa-checklist.md) | Required checks before handing off an HTML newsletter. |
| Condensed style guide | [newsletter-system/docs/style-guide.md](../newsletter-system/docs/style-guide.md) | Quick reference for colours, typography, hierarchy, links, and icons. |

## Newsletter System and Components

| Item | Local path | Responsibility |
|---|---|---|
| HTML starting point | [newsletter-system/template/html-scaffold.html](../newsletter-system/template/html-scaffold.html) | Start a new versioned issue after approved editorial content is available. |
| Editorial-template pointer | [newsletter-system/template/kathy-drafting-template.md](../newsletter-system/template/kathy-drafting-template.md) | Points to the single comprehensive template; it is not a second drafting source. |
| Outlook-safe primitives | [newsletter-system/components/outlook-safe/](../newsletter-system/components/outlook-safe/) | Layout-only presentation-table fragments with inline styles and MSO support. |
| Reusable styled sections | [snippets/](../snippets/) | Section layouts such as hero, greeting, ministry, events, finance, gratitude, and footer. Replace inherited wording with the approved seasonal copy. |
| Snippet usage guide | [snippets/README.md](../snippets/README.md) | Host-table and responsive-class requirements for snippets. |

## Lifecycle and Version-Control Directories

| Stage | Local path | Editing rule |
|---|---|---|
| Work in progress | [newsletters/drafting/](../newsletters/drafting/) | Create a new versioned draft in the appropriate `<year>-<season>/` folder. |
| Ready to send | [newsletters/final/](../newsletters/final/) | Keep at most one approved unsent HTML issue per season. |
| Published history | [newsletters/archive/](../newsletters/archive/) | Read-only sent issues and their screenshots. |
| Superseded work | [newsletters/drafting/2026-fall/older-drafts/](../newsletters/drafting/2026-fall/older-drafts/) | Read-only historical drafts; do not reuse obsolete markup or `/assets/` paths. |
| Legacy templates | [templates/](../templates/) | Read-only compatibility history, not a construction source. |

## Scripts and Tooling

| Tool | Local path | What it checks |
|---|---|---|
| Repository audit | [scripts/audit-newsletter-repo.js](../scripts/audit-newsletter-repo.js) | Current guidance, canonical icons, HTML structure, image/link paths, and GitHub Pages file references. |
| Standard audit command | `node scripts/audit-newsletter-repo.js` | Run after relevant newsletter, asset, or documentation work. Historical findings remain warnings in standard mode. |
| Release audit command | `node scripts/audit-newsletter-repo.js --strict` | Treats warnings as failures for a release review. |

## Path Rules

- Final email HTML uses the live base plus the exact `brand/assets/<filename>` path for every image.
- A local file has no live URL until it is committed and GitHub Pages deploys it.
- Use the canonical v4 icon manifest instead of guessing filenames or substituting retired `/assets/` paths.
- Browser review helps with visual checks, but it does not prove final delivery rendering in Gmail, Outlook, Apple Mail, Yahoo, or mobile clients.
