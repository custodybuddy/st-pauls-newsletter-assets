# St. Paul's Newsletter — Asset Inventory Checklist
Date: 2026-10-16
Status: Read-only review checklist. Do not move, delete, rename, regenerate, or approve assets during this pass.

## 1. Locate the approved source
- [ ] Open Kathy's latest approved seasonal submission and identify the current issue's copy and section order.
- [ ] Review `docs/st-pauls-comprehensive-newsletter-template.md` as the documented drafting guide.
- [ ] Review `brand/resources/brand-assets-visual.html` to see the existing visual brand.

## 2. Count and classify assets
- [ ] List all hero banners in `brand/assets/banners/`, including seasonal variants.
- [ ] List icons in `brand/assets/icons/`; cross-check names and alt text against `brand/resources/icon-map-v4.json`.
- [ ] List illustrations in `brand/assets/illustrations/`, including email-ready exports.
- [ ] List logos and church photography/reference art that are actually present; mark absent items as missing, not assumed.
- [ ] Review `brand/resources/illustration-specs.md` and its linked illustration manifest.
- [ ] Separate approved, candidate, and historical artwork. Do not treat `design-review/illustrated-fall-2026/` candidates as approved.
- [ ] Confirm the church-building illustration still requires authentic, approved source material.

## 3. Reusable newsletter material
- [ ] Inventory sections under `snippets/` and record their intended use.
- [ ] Inventory layout parts under `newsletter-system/components/` (check the active branch as well as main).
- [ ] Identify existing masthead, Greetings, Our Mission, Ministry Spotlight, Finances, Did You Know, Thankful, Events, Prayer, and closing layouts.
- [ ] Identify which components are actually used in the current draft and which are merely options.

## 4. File health and accessibility
- [ ] Check naming consistency, dimensions, file sizes, and whether optimized email versions exist.
- [ ] Check meaningful alt text for informational images and empty alt text for decoration.
- [ ] Identify duplicate *content* using file hashes, not filenames alone.
- [ ] Check new image references use `brand/assets/`, not the removed legacy `/assets/` URLs.
- [ ] Run `node scripts/audit-newsletter-repo.js` in a local checkout (read-only), preserving its output.
- [ ] Record real email-client tests still needed: Gmail, Apple Mail, and Outlook.

## 5. Deliverable (no edits yet)
- [ ] Produce a table: path | asset or component | role | approved/candidate/history | used now? | issue | proposed action.
- [ ] Mark each as KEEP, REVIEW, or HISTORICAL. Nothing is deleted automatically.
- [ ] Select one approved draft and its assets to use as the visual baseline for the rebuild.
