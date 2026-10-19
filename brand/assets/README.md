# Brand assets: one canonical folder

Keep all brand artwork, references and asset metadata under `public/brand-assets/`. Do not create a separate root `brand/` folder or copy artwork into another location.

| Folder or file | Purpose |
| --- | --- |
| `banners/` | Seasonal newsletter hero banners |
| `icons/web/` | 24 transparent 320 × 320 illustration presets used by the app |
| `icons/email/` | Small email-specific icons |
| `icons/source/` | Unchanged full-resolution masters for the 24 illustration presets |
| `references/` | The supplied illustration design reference |
| `metadata/section-presets.json` | Prompts, provenance, approval state, and paths linking each master to its web export |
| `section-presets/` | Review gallery (`index.html`) and contact sheet (`review-sheet.jpg`) |

## Originals and exports

The full-resolution masters and 320 × 320 web files show the same subjects but are different image versions, not byte-identical duplicates. Keep one master and one optimized web export per illustration. Source files are not registered as additional selectable app assets. The metadata links each pair. The contact sheet has one canonical location, `section-presets/review-sheet.jpg`; the identical `icons/web/asset_map.jpeg` copy has been removed.

Before adding artwork, check for an existing matching file. Reuse its path when the bytes and purpose match. If a new size is needed, give the export a clear purpose and link it to its source in the metadata. Do not overwrite an original to create a smaller export.

## Using the presets

In the editor, open **Image insert presets — 24 illustrations**, choose a preset, review the artwork and alt text, select a section, then click **Insert this illustration**. The asset library exposes the same presets. Selection alone does not generate artwork or change the draft. Catalogue entries remain pending review.

The 24 dimensional navy, teal and gold illustrations were recreated from the supplied reference. No section labels are baked into the PNGs. They do not replace the panoramic 1100 × 340 hero or the masthead. Original generated files are retained unchanged; exact generation prompts and provenance are in the metadata. The tool did not expose a model ID.

App URLs omit the `public/` prefix: `/brand-assets/icons/web/welcome.png`. Repo-relative source and reference paths in metadata include `public/`. The review gallery is at `/brand-assets/section-presets/index.html`. Email delivery still needs approved public HTTPS image URLs.

## Consolidation checks

All 24 source files and the supplied reference were moved without changing their bytes. Each metadata source, export and reference path resolves to one canonical file. Web URLs, email icons, banners and the review gallery remain at their current locations. The root `brand/` directory is removed. This folder consolidation does not change the renderer or application behaviour.
