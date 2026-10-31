# Hosted brand assets

This repository publishes artwork from `brand/assets/` at `https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/`. Use absolute HTTPS image URLs in newsletter HTML. Encode spaces in filenames, including [Power of Prayer Card.png](https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/Power%20of%20Prayer%20Card.png).

| Path | Use |
| --- | --- |
| `banners/` | Four seasonal 1100 px newsletter heroes plus the Fall 2026 section heading banners |
| `icons/web/` | 24 section illustration presets |
| `icons/email/` | Small email icons |
| `icons/source/` | Full-resolution masters for the presets |
| `illustrations/email/` | Email-sized supporting artwork and finance figures |
| `metadata/section-presets.json` | Preset paths, prompts, provenance and review state |
| `section-presets/` | Review gallery and contact sheet |
| `references/` | Supplied illustration style reference |

The 24 web exports and their source masters serve different sizes and are linked in the metadata. Use the web exports for newsletter section icons. Use an email illustration for larger feature art. Keep the source masters for provenance.

## Fall 2026 Section Heading Banners

These banner images are part of the automatic image-library inventory. The HTML review package is at [Fall 2026 section review draft](../../newsletters/drafting/2026-fall/review-drafts/README.md). Use the hosted HTTPS URLs in email HTML after GitHub Pages finishes publishing the files.

| Name | Repository path | Hosted HTTPS URL | Alt text |
| --- | --- | --- | --- |
| Upcoming Events | `banners/fall-2026-upcoming-events-heading.jpg` | https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/banners/fall-2026-upcoming-events-heading.jpg | Upcoming Events |
| We Are So Thankful For | `banners/fall-2026-we-are-so-thankful-for-heading.jpg` | https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/banners/fall-2026-we-are-so-thankful-for-heading.jpg | We Are So Thankful For |

The numbered v4 icon URLs under `/assets/icons/` or `/brand/assets/icons/01-...png` point to removed files. They appear in historical maps and older newsletters only. For current work, select an existing path from this folder, verify the live URL, and use alt text that describes that file. Review the [path reference](../../docs/path-reference.md) before assembling an issue.
