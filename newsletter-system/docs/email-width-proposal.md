# 1100px Container: Findings and Proposal

**Status: proposal only. No dimensions have been changed.** Needs approval before any change.

## Findings

- **FACT:** The 1100px width is an *email* canvas, not a browser-only one. The scaffold and Draft 13 set `width:100%; max-width:1100px` on the main email table. The comprehensive template, style guide and changelog (2026 entries) all call it "the 1100px editorial canvas". Seasonal heroes are exported at 1100px wide.
- **FACT:** Earlier archived issues used narrower containers: 720–800px.
- **FACT:** The scaffold and Draft 13 have no fixed-width fallback for Outlook for Windows. Draft 13 only has Outlook conditionals for column cells.
- **PATTERN (general email practice, not tested here):** Gmail, Apple Mail and Yahoo honour `max-width`, so 1100px shows as a wide, fluid column on desktop. Outlook for Windows (Word rendering engine) ignores `max-width`, so a `width="100%"` table can stretch to the full window. Most readers use phone widths, where the container is full width regardless.
- **HYPOTHESIS:** On wide desktop screens, 1100px produces long line lengths. The 64/36 and 70/30 columns keep text lines shorter, which partly offsets this. This needs a real inbox test to judge.
- **UNKNOWN:** which email apps St. Paul's readers actually use. No email service has been chosen.

## Proposal (smallest change)

1. **Keep 1100px as the canvas for the browser version and for modern clients.** Nothing in the browser layout changes.
2. **Add an Outlook-only ghost wrapper** around the main card, so Outlook for Windows gets a fixed 1100px (or smaller) centred table and other clients are unaffected:

   ```html
   <!--[if mso]><table role="presentation" align="center" width="1100" border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
   ... existing main-card table ...
   <!--[if mso]></td></tr></table><![endif]-->
   ```

3. **Test before deciding on a narrower canvas.** Send the test edition to a few real inboxes (Gmail web, Gmail phone, Apple Mail, Outlook desktop). If 1100px reads too wide, the next option is a 720px email canvas (matching the earlier issues), with the 1100px hero still usable at 2x.
4. If approved, the change touches `newsletter-system/template/html-scaffold.html`, the layout lines in the comprehensive template, and the style guide. Existing drafts and archived issues stay as they are.

## Decision needed

Approve (2) now, or hold until an inbox test is done?
