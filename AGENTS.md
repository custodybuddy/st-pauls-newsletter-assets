# AGENTS.md

# St. Paul’s Newsletter Production Agent Guide

This file defines how AI agents, editors, and automation tools should work on the St. Paul’s newsletter codebase, Canva-friendly templates, icon libraries, and reusable email resources.

The goal is to keep every newsletter:

- Email-safe
- Visually consistent
- Easy to edit
- Faithful to the approved copy
- Compatible with Gmail, Apple Mail, Outlook, Yahoo, and mobile email clients
- Reusable for future St. Paul’s newsletter issues

---

## 1. Project Purpose

This project supports the creation and maintenance of St. Paul’s “What’s Up, St. Paul’s?” newsletters.

The newsletter system includes:

- Full HTML email newsletters
- Canva-friendly HTML templates
- Reusable icon libraries
- Important website and CTA links
- Section-by-section copy blocks
- Email-safe image tags
- Footer/contact resources
- Ministry spotlight sections
- Event tables
- Finance/stewardship updates
- Gratitude and reflection sections

Agents must treat this as a **production email project**, not a browser-only webpage.

---

## 2. Source of Truth Rules

### 2.1 Use the latest approved file

Before editing, identify the latest approved full HTML newsletter or markdown resource file.

Do not edit old versions unless explicitly requested.

### 2.2 Never overwrite the approved source

Always create a new versioned file when making changes.

Recommended naming:

```text
spring-newsletter-EDITED-v2.html
spring-newsletter-EDITED-v3.html
st-pauls-icons-and-important-links-UPDATED.md
st-pauls-icons-and-important-links-UPDATED-v2.md
```

### 2.3 Preserve approved copy

When the user says copy must remain verbatim:

- Do not rewrite body copy.
- Do not summarize.
- Do not “improve” meaning.
- Only change layout, spacing, hierarchy, or styling unless told otherwise.

---

## 3. Email HTML Rules

All HTML must be email-safe.

Use:

- Table-based layout
- Inline styles
- Explicit colors
- Absolute image URLs
- Absolute link URLs
- `width` attributes on images
- `alt` text on images
- `border="0" cellpadding="0" cellspacing="0"` on tables
- `role="presentation"` on layout tables

Avoid:

- CSS Grid
- Flexbox
- JavaScript
- External JavaScript
- Forms inside email
- Unsupported CSS
- Complex background images unless tested
- SVG icons in final email HTML unless tested
- Browser-only layout methods

---

## 4. Standard Table Pattern

Use this pattern for major email sections:

```html
<table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" style="padding:20px 44px;">
      <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#FDFBF7; border-radius:24px; border:1px solid #E5E7EB;">
        <tr>
          <td style="padding:50px 55px;">
            <!-- Section content here -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

For mobile responsiveness, use simple stacking classes only if the template already includes media queries.

---

## 5. Brand Style

### 5.1 Core Colors

Use these colors consistently:

```text
Deep navy: #0A1C2C
Dark slate/navy text: #1E293B
Body slate: #475569
Soft slate: #64748B
Gold: #D4AF37
Dark gold: #B8860B
Light gold: #F0D98C
Cream: #FDFBF7
Soft blue background: #EBF4F8
White: #FFFFFF
```

### 5.2 Typography

Preferred font system:

```text
Headings: Lora, Georgia, serif
Body: Inter, Arial, sans-serif
Fallback-safe headings: Georgia, serif
Fallback-safe body: Arial, sans-serif
```

### 5.3 Visual hierarchy

Use:

- Small uppercase section labels
- Large serif headings
- Gold dividers
- Dark navy feature panels
- Cream editorial cards
- Gold/bold emphasis for skimming
- Spacious section padding

---

## 6. Standard Newsletter Section Order

Use this order for future St. Paul’s newsletters unless instructed otherwise:

1. Hero Banner
2. Branding Card
3. Pastoral Note / Greetings Friends
4. Our Mission
5. Ministry Spotlight
6. Did You Know?
7. Our Mission in the Community
8. Biblical Foundations / Experiencing God
9. Practical Update / Focus on Finances / Stewardship
10. Youth / Opportunity / Announcement
11. Upcoming Events
12. Gratitude / We Are So Thankful For
13. Reflection / Pull Quote
14. Footer

---

## 7. Section Labels and Headings

Use small uppercase labels above major headings.

Examples:

```text
PASTORAL NOTE
OUR MISSION
ST. PAUL’S MINISTRY SPOTLIGHT
COMMUNITY DISCERNMENT
STRATEGIC DISCERNMENT
BIBLICAL FOUNDATIONS
STEWARDSHIP UPDATE
YOUTH OPPORTUNITY
ST. PAUL’S CALENDAR
FAITH FAMILY GRATITUDE
REFLECTION
```

Heading examples:

```text
Greetings Friends
Our Mission
Relationships Ministry
Did You Know?
Our Mission in the Community
Experiencing God
Focus on Finances
Youth Support Funds Available
Upcoming Events
We Are So Thankful For
```

---

## 8. Icon System

Use the icon library in:

```text
st-pauls-icons-and-important-links-UPDATED.md
```

### 8.1 Icon base URL

```text
https://custodybuddy.com/stpauls/icons/
```

### 8.2 Recommended section icons

| Newsletter Section | Icon Filename |
|---|---|
| Branding / Main Title | `heart-cross-floral-icon.png` |
| Greetings Friends | `greetings-friends-blessing-hand-with-radiant-cross.png` |
| Our Mission | `our-mission-compass-heart-cross-icon.png` |
| Ministry Spotlight | `ministry-focus-hands-cradling-the-cross.png` |
| Did You Know? | `did-you-know-open-book-question-icon.png` |
| Our Mission in the Community | `community-mission-teaching-ministry-icon.png` |
| Experiencing God | `experience-god-icon.png` |
| Focus on Finances | `finance-icon.png` |
| Upcoming Events | `calendar-cross-icon.png` |
| Gratitude / Thankful Section | `thankful-grateful-icon.png` |
| Reflection / Spiritual Close | `cross-above-wings-icon.png` |

### 8.3 Icon sizing

```text
Section header icon: 64px or 72px
Feature icon: 80px
Card icon: 48px
Footer icon: 20px–28px
CTA icon: 18px–24px
```

### 8.4 Icon HTML pattern

```html
<img src="https://custodybuddy.com/stpauls/icons/our-mission-compass-heart-cross-icon.png" alt="Mission icon" width="64" style="display:block; border:0; outline:none; text-decoration:none;">
```

### 8.5 Icon usage rules

- Use PNG icons for email compatibility.
- Use descriptive `alt` text for meaningful icons.
- Use `alt=""` for decorative-only icons.
- Use navy icons on light backgrounds.
- Use white or gold icons on dark navy backgrounds.
- Do not mix emoji headers and PNG icon headers unless the user asks for a casual style.
- Keep icons visually consistent: minimal, navy/gold, clean, and church-appropriate.

---

## 9. Gold/Bold Emphasis Rules

The newsletter uses “visual skimming,” where key phrases are emphasized so readers can understand the message quickly.

Use gold/bold emphasis for:

- Ministry names
- Scripture anchors
- Names of people or teams
- Important dates
- Important numbers
- Calls to action
- Community anchors
- Spiritual theme phrases

Examples:

```html
<span style="color:#B8860B; font-weight:800;">Christ-centered</span>
<span style="color:#B8860B; font-weight:800;">Relationships Ministry</span>
<span style="font-weight:800; color:#1E293B;">serve, welcome, teach, prepare, and encourage</span>
```

Do not overuse emphasis. Highlight only the words that help a reader skim the message.

---

## 10. Dark Background Contrast Rules

Any section with a dark navy background must use light text.

Use:

```text
Headings on dark background: #FFFFFF
Body text on dark background: #E2E8F0 or #CBD5E1
Labels/accent text: #D4AF37 or #F0D98C
```

Do not use dark slate text on dark navy backgrounds.

Check for this common error:

```html
color:#1E293B;
```

inside dark sections. Replace with:

```html
color:#FFFFFF;
```

or:

```html
color:#E2E8F0;
```

depending on hierarchy.

---

## 11. Links and CTA Rules

Use the link library in:

```text
st-pauls-icons-and-important-links-UPDATED.md
```

### 11.1 Stable links

Use stable public links for footer and CTA buttons:

```text
Website:
https://www.stpaulsingersoll.ca/

Donate:
https://www.stpaulsingersoll.ca/contact-us/donate

Contact:
https://www.stpaulsingersoll.ca/contact-us

Small Groups:
https://www.stpaulsingersoll.ca/thriving-at-st-paul-s/small-groups

YouTube:
https://www.youtube.com/channel/UCCTGFWFR4Z3svvSyZ08rE_g/videos
```

### 11.2 CTA button text

Use clear, short button text:

```text
Give Now
Watch Sunday Service
Request Prayer
Join a Small Group
Read Church News
I’m New
Send Feedback
Contact Us
Learn More
```

### 11.3 Time-sensitive links

Bulletin and event links from website snapshots are time-sensitive.

Before using bulletin or event links, verify they are current.

If not verified, prefer linking to:

```text
News page
Calendar page
Our Videos page
Contact page
```

---

## 12. Footer Standards

The footer should include:

- Feedback CTA
- Quick links
- Website
- YouTube
- Church email
- Address
- Office hours
- Sunday worship time
- Mission statement
- Copyright

Recommended footer details:

```text
St. Paul’s Church
56 Thames Street S
Ingersoll, ON N5C 2S9

Office Hours:
Tuesday–Friday
9:30 am–12:30 pm

Sunday Worship:
10:30 am Service
All are welcome!
```

Use light text on navy background.

---

## 13. Canva-Friendly Output Rules

When creating Canva-friendly resources:

- Use simple section-by-section structure.
- Use clear copy-paste headings.
- Keep image URLs visible and easy to copy.
- Avoid overly complex HTML when the goal is Canva planning.
- Include section order.
- Include icon recommendations.
- Include button text.
- Include suggested visual hierarchy.
- Include notes for dark background contrast.

Canva resources should be easy for a non-developer to scan.

---

## 14. Markdown Resource File Rules

For markdown files like icon/link libraries:

Use:

- Clear section headings
- Tables for icon maps and links
- Code blocks for URLs and HTML snippets
- Notes for time-sensitive links
- Maintenance instructions

Do not bury important production notes at the bottom only. Put critical warnings near the relevant section.

---

## 15. DOCX-Driven Edit Rules

When a DOCX or pasted copy is provided:

1. Extract the relevant text.
2. Preserve the intended meaning and hierarchy.
3. Convert it into email-safe HTML.
4. Do not change wording if the user asks for verbatim copy.
5. Use the existing newsletter section style.
6. Do not alter unrelated sections.

---

## 16. Copy-Paste Conversion Rules

When converting plain text into newsletter HTML:

- Preserve hierarchy.
- Break long text into readable paragraphs.
- Add emphasis only where helpful.
- Use table-based layout.
- Use inline styles.
- Avoid introducing unsupported code.
- Keep tone consistent with St. Paul’s: warm, faithful, clear, community-minded.

---

## 17. Refactor Rules

When asked to refactor:

Improve:

- Readability
- Spacing
- Hierarchy
- Mobile layout
- Email compatibility
- Image sizing
- Section balance
- Contrast
- Skimmability

Do not change:

- Meaning
- Logic
- Approved copy
- Links
- Image URLs
- Tracking links
- Unrelated sections

---

## 18. Validation Checklist

Before delivering an updated HTML file, check:

- No unclosed `<table>`
- No unclosed `<tr>`
- No unclosed `<td>`
- No missing image `alt`
- No dark text on dark background
- No unsupported layout methods
- No relative image URLs
- No relative links
- No accidental deleted sections
- No global changes outside the requested section
- Mobile stacking remains reasonable
- Footer links are intact
- CTA buttons have readable contrast

---

## 19. Recommended Deliverables

When completing a newsletter edit, provide one or more of:

- Full updated HTML file
- Section-only HTML extract
- Markdown resource file
- Canva copy-paste guide
- Link/icon library update
- Brief audit checklist

When creating files, use clear filenames and do not overwrite approved files.

---

## 20. Agent Tone and Workflow

Agents should be:

- Careful
- Precise
- Conservative with approved copy
- Strong on email compatibility
- Clear about what changed
- Honest about anything not verified

Use concise summaries after edits:

```text
Updated:
- Replaced section icon
- Preserved body copy
- Fixed dark-background typography
- Added email-safe image width
- Verified footer links remain intact
```

Avoid unnecessary explanations when a file is requested. Create the file and provide the link.

---

## 21. Current Key Resource Files

Recommended current resources:

```text
st-pauls-canva-friendly-newsletter-template.html
st-pauls-icons-and-important-links-UPDATED.md
```

Use the Spring newsletter design system as the preferred style baseline for future newsletters.

---

## 22. Final Rule

When in doubt:

1. Preserve approved copy.
2. Preserve email-safe table structure.
3. Preserve links and image URLs.
4. Fix only the requested section.
5. Keep the St. Paul’s navy/gold visual identity consistent.
