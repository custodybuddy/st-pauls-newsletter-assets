---
name: st-pauls-newsletter
description: Assemble a "What's Up, St. Paul's?" newsletter edition from approved content using the repository's existing components, brand and illustrations. Use when asked to create, rearrange, preview or validate a St. Paul's newsletter, or to prepare one for human approval. Never sends or publishes.
---

# St. Paul's Newsletter Assembly

Principle: **Existing templates → reusable components → flexible assembly → human approval.** You assemble and check; a person approves. Do not send, publish, deploy or merge anything.

Read `AGENTS.md` first. It still controls email-safe HTML, brand colours, links and footer facts. This skill only adds the assembly workflow.

## Hard rules

1. **Approved wording is untouchable.** Copy it exactly. If copy is missing, leave a visible `[NEEDS APPROVED COPY: what]` marker. Never invent announcements, dates, people, quotations, events or figures.
2. **Never edit** `newsletters/archive/`, `newsletters/drafting/*/older-drafts/`, `templates/`, or any existing draft. Make a new versioned file (`...-DRAFT-N+1.html`).
3. **Permanent elements** appear in every edition, in this order: hero + masthead, Greetings Friends + Our Mission (with a reserved slot for the approved church illustration), footer. Everything else is optional and reorderable.
4. **Do not invent or substitute artwork** for the actual church building. The approved illustration will be supplied. Until then, leave `[CHURCH ILLUSTRATION: pending approved art]` and say so in the summary.
5. **Reuse before creating.** Use existing icons (`brand/resources/icon-map-v4.json`), banners and illustrations (`resources/links/st-pauls-illustrations-v1.json`). Do not use stock graphics or other icon libraries, and do not substitute emoji.
6. Do not change the 1100px container or the brand tokens. See `newsletter-system/docs/email-width-proposal.md`.

## Workflow

1. **Intake.** Find the approved copy (a filled `content-template.md`, Kathy's submission, or pasted text). If the season, hero, or a permanent element's copy is unclear, ask. Do not guess.
2. **Content file.** Put the copy in `newsletters/drafting/<year>-<season>/content.md`, using `newsletter-system/template/content-template.md`. This is the one place wording lives.
3. **Choose components.** Map each content block to a component in `components.md` (same folder). Include only what the content supports.
4. **Propose the order and wait for a yes.** List the sections in order, with one line saying why. Balance rules:
   - Alternate heavy sections (Ministry Spotlight, finances) with light ones (announcements, photo, event).
   - Do not place two dark panels or two photo sections together.
   - Put time-sensitive items (events, announcements) in the first half.
   - Closing Message goes last, just above the footer.
5. **Assemble.** Use the `<head>`, styles and outer tables of the latest draft as the shell (the scaffold lacks some classes the snippets use; see `components.md`). Paste each chosen snippet from `snippets/` between the hero and the footer, replacing placeholder wording with the exact copy from `content.md`. Each snippet is a `<tr>` row, so any order works. Pick illustrations from the manifests. See `brand/resources/illustration-specs.md` for portrait, landscape and square use.
6. **Plain text.** `node scripts/html-to-text.js <file>.html > <file>.txt`, saved next to the HTML. Read it once to check it flows.
7. **Validate.**
   - `node scripts/audit-newsletter-repo.js` (0 errors required).
   - `node scripts/audit-newsletter-repo.js --sections <file>.html` to confirm the section order matches what was approved.
   - Check the 390px mobile view for horizontal overflow, and confirm every image loads. Playwright is available in this environment.
   - Check `newsletter-system/docs/qa-checklist.md`.
   - Compare wording against `content.md`.
8. **Hand off for approval.** Report: file paths, section order, what is still a placeholder, checks run (and any not run), and open editorial issues such as past dates or unverified figures. A person approves. Only then does the file move to `newsletters/final/<year>-<season>/` (at most one per season).

## Output rules (summary)

Table layout, inline styles, `role="presentation"`, explicit `width` and `alt` on images, absolute HTTPS URLs, mobile stacking classes as progressive enhancement, light text on navy panels, descriptive link text (never "click here"), and 18px+ body text. Full list: `AGENTS.md` sections 3–12.

## How to invoke

> Create the next St. Paul's newsletter using our existing design system. Select appropriate components, rearrange them for visual balance, reuse our illustrations, and prepare a preview for approval. Content is in `<path>`.

Or: `/st-pauls-newsletter` followed by the same request.

## Credit

Process ideas adapted from the MIT-licensed `email-newsletter` skill. See `ATTRIBUTION.md`.
