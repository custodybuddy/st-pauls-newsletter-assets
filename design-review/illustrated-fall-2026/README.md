# Fall 2026 illustrated newsletter — first design review

The responsive prototype uses selected, unchanged excerpts from `newsletters/drafting/2026-fall/st-pauls-fall-2026-newsletter-DRAFT-13.html`. It is a design study, not a complete edition or a sendable email. The two HTML preview files contain the same responsive design and are paired with screenshots at 1280px and 390px. Artwork remains pending approval.

## Visual critique

Draft 13 and test editions A/B establish a recognizable autumn masthead, cream ground, navy anchors, gold trim and serif typography. Their feature imagery is much smaller than the editorial copy, and repeated cards give long and short sections nearly the same visual weight. On mobile, many cards stack into a lengthy column with little change in pace. The Ministry Spotlight needs a more distinctive entry point and clearer progression from visual to story.

## Proposed direction

Keep the masthead and seasonal hero. Give Greetings a large portrait scene, make Ministry Spotlight an illustrated chapter opener, use a smaller landscape illustration beside a care excerpt, and close with a quiet seasonal arrangement. The gratitude section uses compact cards to change the rhythm. These are reusable patterns for a later approved component library; no scaffold or archived edition was changed here.

## Review files

- `desktop-preview.html` and `mobile-preview.html`: same responsive review HTML.
- `desktop-full.png` and `mobile-full.png`: full-page browser screenshots.
- `contact-sheet.html` and `contact-sheet.png`: four illustration candidates together.
- `asset-candidates.json`: descriptions, sizes, alt text, prompt records and approval status.

## Technical limits

Local relative image paths allow review before publication; a sendable email needs approved hosted HTTPS URLs. The PNG candidates are 2.7–3.0 MB each and need optimized email exports after visual approval. Browser rendering passed at 1280px and 390px with no horizontal overflow or broken local images. Gmail, Outlook, Apple Mail, and delivered-email behaviour remain untested. The church building illustration remains pending an authentic approved reference photo. The prototype intentionally omits some Draft 13 sections, so it is not the full newsletter or its plain-text counterpart.
