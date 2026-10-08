# Attribution

This skill adapts ideas from the `email-newsletter` skill in [varnan-tech/opendirectory](https://github.com/varnan-tech/opendirectory/tree/main/skills/email-newsletter).

- **Licence:** MIT, Copyright (c) 2026 Varnan-Tech. Checked against the repository's `LICENSE` file on 2026-10-08.
- **Copied text:** none. The upstream skill, its references and its templates were reviewed and **not installed or copied**.
- **Ideas adapted (re-written for St. Paul's):**
  - a plain-text fallback for every issue
  - confirming the section list with a person before building
  - Outlook hardening checks: `bgcolor` plus `background-color`, `border-radius` on `<td>`, `display:block` and `border="0"` on images, buttons built from a table cell
  - a short self-check before handoff
- **Deliberately not adopted:** the 600px container, the no-`<style>`-block rule (our mobile stacking depends on a media query), generated copy and subject lines, email-service variables, and starter templates.

If any upstream text is later copied verbatim, keep the MIT notice below with it.

```text
MIT License

Copyright (c) 2026 Varnan-Tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
