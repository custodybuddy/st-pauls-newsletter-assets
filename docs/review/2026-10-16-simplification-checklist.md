# St. Paul's Newsletter — Simplification and Reset Checklist
Date: 2026-10-16
Status: Decision checklist. No design or editorial changes without approval.

## 1. Freeze the current reference
- [ ] Preserve the current approved wording and section order from Kathy's seasonal submission.
- [ ] Preserve all published issues and previous drafts as history; do not rewrite them.
- [ ] Choose the best existing newsletter version as a *visual reference*, not a source of new editorial wording.

## 2. Resolve competing rules
- [ ] Compare `AGENTS.md`, `newsletter-system/docs/style-guide.md`, `newsletter-system/tokens.json` (where present), the comprehensive template, and active branch changes.
- [ ] Resolve the font conflict: PR #7 describes Lora / Playfair Display / Source Sans 3 / Inter; PR #8 describes Lora / Inter only. Confirm which rules have actually merged and which should govern new issues.
- [ ] Resolve the colour conflict: PR #8 describes navy, cream, and gold `#D4AF37`; earlier guidance includes contrasting text colours and some teal. Select one small, accessible canonical palette.
- [ ] Confirm the hero/banner, icons, illustrations, and church imagery rules against approved assets rather than mood boards.
- [ ] Create one concise, human-readable brand guide; label superseded guidance clearly, without deleting source records.

## 3. Reduce the assembly system
- [ ] Map overlap between `snippets/`, `newsletter-system/components/`, and `newsletter-system/template/html-scaffold.html`.
- [ ] Choose a single supported path for composing a new newsletter. Keep legacy paths only for compatibility/history.
- [ ] Define a minimal set of reusable blocks: header/hero; Greetings; Ministry Spotlight; Finances; Did You Know; We're Thankful; Power of Prayer; Upcoming Events; footer.
- [ ] Distinguish mandatory elements from optional blocks. Section order comes from approved editorial instructions.
- [ ] Keep approval checkpoints for editorial changes, artwork, and final release. Never automate sending or publishing by default.
- [ ] Document a short handoff: approved copy + selected blocks + approved assets → draft → review → final.

## 4. Test the smallest useful rebuild
- [ ] Rebuild ONE test issue with approved copy and existing art; create a *new* draft in `newsletters/drafting/<year>-<season>/`.
- [ ] Review readability, mobile width, spacing, contrast, alt text, and screen-reader order.
- [ ] Run the repository audit. Historical warnings must be distinguished from new errors.
- [ ] Test a real email in Gmail, Apple Mail, and Outlook before declaring compatibility.
- [ ] Obtain human approval before marking the issue final.

## 5. Record decisions
- [ ] KEEP: list assets and rules that are working.
- [ ] SIMPLIFY: list duplicated components and instructions with proposed replacements.
- [ ] PARK: list experimental styles and new automation ideas not needed for the first issue.
- [ ] Record the canonical guide and one approved example before considering a reusable AI skill.

## Guardrails
- Never modify Kathy's approved wording as a design cleanup.
- Never assume proposed PR changes are merged; inspect the target branch.
- Never delete live asset URLs or rename hosted files without a migration plan.
- No new fonts, illustration styles, or layout variants until the existing system is understood.
