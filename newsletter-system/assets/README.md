# St. Paul's newsletter image and asset system

**Start here:** [Visual image-picker gallery](index.html). It embeds the canonical, searchable [HTML gallery](../../st-pauls-image-library.html) with thumbnail selection and Load More. The [Markdown catalog](../../st-pauls-image-library.md) supports agents that cannot use a browser.

## Single source of truth

| Purpose | Canonical path | Notes |
|---|---|---|
| Actual public artwork | [`brand/assets/`](../../brand/assets/) | Keep here so existing absolute HTTPS image links do not break |
| Live visual gallery | [`st-pauls-image-library.html`](../../st-pauls-image-library.html) | Interactive search, category chips, thumbnails, select/export, incremental Load More |
| Human / agent image catalogue | [`st-pauls-image-library.md`](../../st-pauls-image-library.md) | Existing descriptive snapshot, not a guarantee of up-to-date inventory |
| Approved/pending image metadata | [`brand/assets/metadata/section-presets.json`](../../brand/assets/metadata/section-presets.json) | Image URLs, descriptions, alt text, suggested sections and approval status |
| This newsletter-system gallery entry | [`newsletter-system/assets/index.html`](index.html) | Embeds canonical gallery instead of duplicating its code |
| Reusable HTML newsletter scaffolding | [`newsletter-system/template/html-scaffold.html`](../template/html-scaffold.html) | Email-safe structure; not a gallery |
| Outlook-compatible components | [`newsletter-system/components/outlook-safe/`](../components/outlook-safe/) | Layout fragments only |

**Public image URL prefix:** `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/`

**Live gallery:** https://custodybuddy.github.io/st-pauls-newsletter-assets/newsletter-system/assets/

Never create another physical copy of images under `newsletter-system/`, because that would create two competing asset libraries. Keep existing URLs unchanged and store references, indexes and layout instructions here.

## Canonical asset structure

```text
brand/assets/
  banners/            seasonal, full-width hero banners only
  icons/web/          reusable illustrated section icons
  icons/email/        light, email-ready graphic icons
  icons/source/       original source-resolution icons
  illustrations/email/  optimized in-newsletter artwork
  references/         artwork references
  metadata/section-presets.json
  section-presets/    existing preview sheet
  Power of Prayer Card.png
newsletter-system/
  assets/index.html   gallery entry point (not a duplicate asset store)
  assets/README.md
  assets/agent-image-selection.md
  template/           content template and HTML scaffold
  components/         reusable email-safe layout
  docs/               editorial and rendering requirements
```

## Agent workflow

1. Search the live gallery or `brand/assets/metadata/section-presets.json`. For complete current image inventory, read GitHub tree API: `https://api.github.com/repos/custodybuddy/st-pauls-newsletter-assets/git/trees/main?recursive=1`.
2. Match the topic and aspect ratio, using an **exact discovered** `brand/assets/...` filename. Use metadata `imageUrl` as supplied when available; otherwise URL-encode exact path segments after the public prefix.
3. Check asset approval, load status, alt text, and fit in the email template. Do not invent or silently substitute scripture wording or imagery.
4. Preserve Kathy's greetings, mission statement, and the rest of her source copy *verbatim* unless Kathy explicitly approves edits.

### Scripture-card shape rule (planned)

For the four reference designs **Mercy**, **Colossians**, **Go and Do Likewise**, **Kindness**, use **square (1:1)** for bento blocks and **portrait (4:5)** for a taller card. Landscape cards are *not* a default. A full-width image belongs in the separate **banner** class. The eight refreshed scripture cards remain **planned** until generated, verified against Kathy's original wording and imagery, and approved. Do not treat these planned files as existing artwork.

## Safe migration boundaries

This cleanup is **additive**. Do not remove `brand/assets/`, change existing public image URLs, delete legacy gallery files, or automatically rewrite newsletter drafts. Any later retirement of duplicates requires an audited link map, checked previews, and explicit approval.
