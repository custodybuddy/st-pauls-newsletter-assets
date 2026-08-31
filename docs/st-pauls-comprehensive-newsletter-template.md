# St. Paul’s — [MONTH] [YEAR] Newsletter

> **AI agent instruction:** This file is the controlling structure for every new St. Paul’s newsletter. Read it before planning, drafting, or building an issue. Use Type A by default; use Type B or Type C only when the content or user request calls for it. Existing HTML newsletters are historical or approved issue references and must not override this file.

## Required Supporting Resources

* Canonical v4 icon manifest: `resources/links/st-pauls-icons-v4.json`
* Human-readable v4 icon map and stable links: `resources/links/st-pauls-icons-and-important-links.md`
* Website data and CTA destinations: `resources/links/st-pauls-website-data-and-links-v1.md`
* View-in-browser implementation: `resources/links/st-pauls-view-in-browser-guidance-v2.md`
* Final QA: `checklists/NEWSLETTER-QA-CHECKLIST.md`

## What’s Up **St. Paul’s?**

*Connecting our church family*

**[MONTH] [YEAR] Edition**

**Banner Image:**
`https://custodybuddy.com/stpauls/[MONTH]-newsletter/[MONTH]_banner.png`

---

# NEWSLETTER CONTENT TEMPLATE

## Greetings Friends

[SEASONAL GREETING: 1–3 short paragraphs.]

Include:

* Current liturgical season: Advent, Lent, Easter, Pentecost, Ordinary Time, etc.
* Natural season or community context.
* Recent St. Paul’s life or milestone.
* A gentle connection to the ministry or spiritual focus of this edition.
* Warm invitation into the newsletter.

Keep the opening personal, pastoral, and easy to scan.

---

## Our Mission

> We are a **Christ-centered**, worshipping community serving and leading people to **Jesus**.

### Design Treatment

This is a **signature brand section** and should remain visually consistent between editions.

Use:

* Deep navy background: `#0A1C2C`
* White text
* Gold emphasis: `#D4AF37` or `#FFD700`
* Canonical Our Mission icon from the v4 map
* Centered Lora quotation typography
* Generous whitespace
* Rounded 24px card

---

## [MINISTRY NAME] Ministry

### [Subtitle / Descriptor]

**Ministry Image:**
`https://custodybuddy.com/stpauls/[MONTH]-newsletter/[ministry-image].png`

[MINISTRY SPOTLIGHT]

Cover:

* What the ministry does.
* Why the ministry exists.
* Its biblical or theological foundation.
* Which St. Paul’s Vision Statement it supports.
* Current work, accomplishments, or goals.
* A concrete story or example of ministry in action.
* How members of the congregation can participate.
* A warm invitation to become involved.

### Key Vision Connection

**Vision Statement #[NUMBER]:**
[Insert relevant Vision Statement.]

### Recommended Length

**500–800 words**

The old 800–1,000 word target should be treated as a maximum rather than the default. Email readers benefit from shorter paragraphs, visual breaks, cards, quotes, and images.

---

## [FEATURE ARTICLE TITLE]

Choose one primary feature format:

### Sermon Reflection

Highlight:

* Scripture
* Main teaching
* Memorable quote
* Practical takeaway
* Connection to St. Paul’s life

### Event Reflection

Cover:

* What happened
* Who participated
* What was meaningful
* Community impact
* What happens next

### Spiritual Reflection

Explore:

* Biblical theme
* Psalm
* Prayer practice
* Liturgical season
* Christian formation

### Teaching Article

Best suited to Equipping Ministry editions.

Include:

* Main teaching
* Scripture references
* Simple explanation
* Practical application

### Feature Quote Card

**[DATE / OCCASION]**

> *“[Relevant quotation from sermon, Scripture, testimony, or teaching.]”*

— [Speaker / Author]

End with a short paragraph connecting the feature back to the mission or ministry theme.

### Recommended Length

**350–650 words**

---

## [SECONDARY FOCUS]

Use for:

* Community outreach
* Ministry initiative
* Special project
* Church milestone
* Mission partner
* Congregational success story

### Highlight

[Specific accomplishment, collection result, participation number, testimony, or community impact.]

Keep this section to approximately **200–350 words**.

---

## Spiritual Formation & Learning

Include:

**Program:** [NAME]

**Format:** [In-person / Zoom / Hybrid]

**Date:** [DATE]

**Time:** [TIME]

**Location / Link:** [DETAILS]

[Two or three sentences describing the opportunity and why someone might want to participate.]

End with:

**All are welcome.**

---

## Prayer & Volunteer Spotlights

### Prayer Focus

Include:

* Current prayer theme.
* Guiding Scripture.
* Congregational needs where permission has been given.
* Community or global concerns.
* Encouragement to participate in St. Paul’s prayer life.

Protect privacy.

**Do not publish personal names, illnesses, circumstances, or sensitive details without permission.**

### Volunteer Spotlight

**[NAME / TEAM / INITIATIVE]**

[One or two warm sentences recognizing what they contributed and why it mattered.]

Whenever possible, recognize specific gifts rather than simply saying “thank you.”

---

## Upcoming Events

Limit the newsletter to approximately **3–5 priority events**.

Each event card should contain:

### [EVENT NAME]

**[DATE] — [TIME]**

[Short description.]

**[Location / Zoom / Registration information if required]**

### Event Design Rule

Do **not** rely on emoji as the primary visual language.

Use the appropriate canonical v4 icon from `resources/links/st-pauls-icons-and-important-links.md`. Do not use a retired icon or emoji substitute.

---

## Financial Stewardship

### As of [DATE]

| Category                |    Amount |
| ----------------------- | --------: |
| **Total Income**        | $[AMOUNT] |
| **Total Expenses**      | $[AMOUNT] |
| **Surplus / Shortfall** | $[AMOUNT] |

[One or two neutral sentences explaining the current financial position.]

### Giving

Support St. Paul’s ministry by e-transfer:

**[E-TRANSFER EMAIL]**

For the security question or giving assistance, contact:

**Treasurer [NAME]**
[EMAIL]

### Tone

Financial communication should always be:

* Clear
* Transparent
* Grateful
* Encouraging
* Never guilt-driven

Recommended cadence: **quarterly or when a meaningful financial update is required.**

---

## We Are So Thankful For

Feature approximately **3 people, families, teams, or groups**.

### [NAME / GROUP]

[Specific explanation of what they contributed and why St. Paul’s is grateful.]

### [NAME / GROUP]

[Specific explanation.]

### [NAME / GROUP]

[Specific explanation.]

Rotate recognition across ministries so the same people or teams are not repeatedly featured.

---

# CONTACT & FOOTER

Include a discreet **View in browser** link in the footer using the ESP’s exact hosted-email merge tag. Add a top utility link only when specifically requested. Never send `[VIEW_IN_BROWSER_URL]`, `href="#"`, or a generic hard-coded browser-version URL.

## Location

**St. Paul’s Church**
56 Thames Street S
Ingersoll, ON N5C 2S9

## Office Hours

Tuesday–Friday
**9:30 am–12:30 pm**

## Sunday Worship

**10:30 am Service**

*All are welcome.*

© [YEAR] **St. Paul’s Church**. All rights reserved.

**Website:** stpaulsingersoll.ca
**YouTube:** St. Paul’s Ingersoll YouTube Channel

---

# CURRENT DESIGN SYSTEM

## 1. Desktop Canvas

The current St. Paul’s newsletter uses a **large-format editorial layout**.

### Main Container

**Desktop maximum width: 1100px**

Use:

* `width:100%`
* `max-width:1100px`
* centered table layout
* 24px exterior corner radius
* generous outer whitespace
* full-width mobile fallback

The newsletter should feel more like a **beautiful digital church magazine** than a narrow traditional marketing email.

### Mobile

At approximately **600px and below**:

* Main container becomes 100% width.
* Two-column sections stack.
* Outer margins reduce.
* Cards retain comfortable internal padding.
* Text remains large enough to read without zooming.
* Decorative effects should simplify where necessary.

---

# 2. ACCESSIBLE LARGE-PRINT TYPOGRAPHY

Readability is a design requirement.

## Desktop

### Main Title

**48–56px**

Font: **Lora**

### Major Section Heading

**34–42px**

Font: **Lora**

### Card Heading

**24–30px**

### Body Copy

**18–20px minimum**

Recommended line height:

**1.65–1.8**

### Supporting Text

Avoid going below **15–16px** except for copyright information or very small metadata.

## Mobile

Aim for:

* Major headings: **26–32px**
* Body text: **17–18px**
* Event details: **16–18px**
* Buttons: **16–18px**

Avoid compressed text and dense paragraphs.

Paragraphs should generally contain **2–4 sentences**.

---

# 3. TYPOGRAPHY

## Headings & Quotes

**Lora**

Fallback:

Georgia, serif

## Body

**Inter**

Fallback:

Arial, Helvetica, sans-serif

## Hierarchy

Use typography rather than excessive decoration to establish importance.

Recommended hierarchy:

**Eyebrow Label → Large Lora Heading → Gold Divider → Body Content**

Example:

**ST. PAUL’S MINISTRY SPOTLIGHT**

# Relationships Ministry

*The Connective Tissue of Our Community*

---

# 4. COLOR SYSTEM

## Primary Navy

`#0A1C2C`

Use for:

* Mission section
* Feature cards
* Footer
* Strong visual anchors

## Slate Navy

`#1E293B`

Use for:

* Headlines
* Primary text on light cards

## Primary Gold

`#D4AF37`

Use for:

* Icons
* Dividers
* Borders
* Accent elements
* Buttons

## Deep Gold

`#B8860B`

Use for:

* Highlight words
* Small labels
* Links
* Supporting accents

## Bright Gold

`#FFD700`

Use sparingly on dark navy backgrounds.

## Warm Cream

`#FDFBF7`

Primary editorial card background.

## Warm Gold Cream

`#FFF8E6`

Use for:

* Quotes
* Stewardship cards
* Feature highlights

## Sage

`#F0FAF5`

Use selectively for:

* Community
* Care
* Gratitude
* Gentle supporting cards

## Page Background

Use a subtle cool cream, pale blue, or soft blue-gray such as:

`#EBF4F8`

---

# 5. ROUNDED CARD SYSTEM

Square boxes should be avoided.

### Main Newsletter

**24px radius**

### Major Content Cards

**24px radius**

### Inner Feature Cards

**16–20px radius**

### Small Event / Gratitude Cards

**14–16px radius**

### Buttons

Use pill-style buttons:

**40–50px radius**

Cards should use soft shadows rather than harsh borders.

Recommended shadow direction:

* Wide
* Low opacity
* Soft blur
* Minimal black

Gold or navy-tinted shadows may be used very subtly.

---

# 6. GRADIENT SYSTEM

Gradients should provide polish without becoming distracting.

### Gold Divider

Use a horizontal metallic-inspired transition:

`#D4AF37 → #B8860B → #D4AF37`

### Dark Feature Cards

A very subtle navy gradient may be used:

`#10283D → #071827`

### Cream Cards

Very subtle warm transitions are acceptable.

Avoid:

* Bright rainbow gradients
* High saturation
* Large gradient text blocks
* Gradients behind long body copy

---

# 7. BENTO LAYOUT SYSTEM

Desktop newsletters may use **editorial bento rows** to reduce excessive vertical scrolling.

Recommended patterns:

### Feature Row

**62% / 38%**

Example:

Pastoral Note | Our Mission

### Ministry Row

**64% / 36%**

Example:

Ministry Spotlight | Vision Connection

### Balanced Row

**50% / 50%**

Example:

Upcoming Events | Stewardship

### Three Supporting Cards

**33% / 33% / 33%**

Best for short items such as:

* Gratitude
* Volunteer opportunities
* Quick announcements

### Bento Rule

Only place sections beside one another when their content lengths are reasonably compatible.

Long-form teaching or sermon articles should usually remain **full width**.

### Mobile Rule

Every bento row must collapse into a **single-column reading order**.

Do not use CSS Grid or Flexbox for the email implementation.

Use nested presentation tables with mobile stacking fallbacks.

---

# 8. CANONICAL v4 ICON SYSTEM

Use the ten individually generated transparent PNG icons in `assets/icons/`. Their filenames, roles, URLs, alt text, and recommended widths are controlled by `resources/links/st-pauls-icons-v4.json` and documented in `resources/links/st-pauls-icons-and-important-links.md`.

The system uses deep navy `#082A55`, warm gold `#D39A08`, and teal `#087F8C`, with clean Christian symbols and softened vector-style geometry. Use `88px` for the main branding icon and `72px` for major section icons. Do not use retired icons or emoji substitutes.

---

# 9. IMAGE SYSTEM

## Hero Banner

Recommended master width:

**1100px**

For a true **16:9 hero**, use approximately:

**1100 × 619px**

If a shallower editorial banner is preferred, use approximately:

**1100 × 400–500px**

Do not describe a 1100 × 300 image as 16:9.

## Ministry Images

Recommended:

* Square: **600 × 600px**
* Landscape: **900 × 600px**
* Wide editorial: **1000 × 600px**

## Content Images

Recommended width:

**800–1100px**

## Image Rules

* Use real St. Paul’s photography whenever available.
* Use illustrations only when they meaningfully support the story.
* Keep photography warm and natural.
* Avoid generic corporate stock imagery.
* Use rounded corners.
* Include useful `alt` text.
* Host every image at a public HTTPS URL before sending.

---

# 10. EMAIL-SAFE HTML RULES

The visual design may be modern, but the code must remain conservative.

Use:

* XHTML 1.0 Transitional doctype
* Presentation tables
* `role="presentation"`
* Inline CSS for important styling
* Absolute HTTPS image URLs
* Outlook-safe table structures
* `mso-table-lspace:0pt`
* `mso-table-rspace:0pt`
* `border-collapse:collapse`
* Mobile media queries as enhancements
* MSO conditional tables where necessary for complex columns

Do not use:

* CSS Grid
* Flexbox for structural email layout
* JavaScript
* Local image paths
* Background video
* Unsupported interactive web components
* Layout that depends exclusively on CSS media queries

### Important

The **1100px desktop design is an intentional St. Paul’s presentation choice**, rather than the traditional 600px commercial-email convention.

Therefore, every major section must still:

* Scale fluidly
* Stack properly
* Remain readable on mobile
* Be tested in real inboxes

---

# 11. SECTION DESIGN LANGUAGE

Each newsletter should have visual rhythm.

Do not make every section identical.

Rotate between:

### Editorial Cream Card

Best for pastoral writing and stories.

### Navy Feature Card

Best for:

* Mission
* Scripture
* Major quotation
* Spiritual emphasis

### Image + Text Split Card

Best for ministry profiles.

### Gold Highlight Card

Best for:

* Stewardship
* Statistics
* Important announcements

### Sage Community Card

Best for:

* Compassion
* Volunteers
* Gratitude
* Outreach

### Bento Pair

Best when two shorter sections naturally belong together.

This creates variety while maintaining one recognizable design system.

---

# EDITORIAL GUIDE

## Ministry Spotlight Rotation

Repeat approximately every five ministry editions:

1. **Relationships Ministry** — April 2026
2. **Compassionate Care Ministry**
3. **Equipping Ministry**
4. **Stewardship Ministry** — November 2025
5. **Worship / Celebration Ministry**

The schedule is a planning framework rather than a rigid requirement. Seasonal priorities may change the order.

---

# NEWSLETTER EDITION TYPES

## Type A — Ministry Spotlight

Primary recurring format.

Recommended structure:

1. Hero
2. Greetings / Pastoral Note
3. Mission
4. Ministry Spotlight
5. Feature Article
6. Secondary Focus
7. Formation / Learning
8. Prayer / Volunteer
9. Events
10. Stewardship when required
11. Gratitude
12. Footer

---

## Type B — Foundational / Vision Edition

Use rarely.

Best for:

* Major ministry reset
* New vision
* Anniversary
* Strategic church update

Can include:

* Mission
* Vision Statements
* Ministry framework
* Church history
* Discernment
* Congregational invitation
* Future direction

---

## Type C — Feature-Heavy Seasonal Edition

Best for:

* Christmas
* Easter
* Anniversary celebrations
* Major church events

Structure may include:

* Short Pastoral Note
* Short Ministry Spotlight
* Two or three feature stories
* Photography
* Scripture
* Event coverage
* Gratitude
* Upcoming dates

---

# CONTENT STYLE

## Tone

Write with a voice that is:

* Christ-centered
* Warm
* Pastoral
* Conversational
* Hopeful
* Inclusive
* Clear
* Grounded
* Community-focused

Avoid:

* Corporate language
* Overly formal church jargon
* Guilt-driven appeals
* Dense theological terminology without explanation
* Excessive exclamation marks

Use:

**we, our, us**

to reinforce shared church life.

---

# SCANNABILITY

Readers should understand each section even when skimming.

Use:

* Short paragraphs
* Strong headings
* Pull quotes
* Gold anchor words
* Dates in bold
* Clear cards
* Images
* Meaningful subheadings

Do not bold large amounts of copy.

Use emphasis for approximately **2–4 important phrases per section**.

---

# ACCESSIBILITY

Every newsletter must prioritize accessibility.

### Text

* Maintain strong contrast.
* Avoid light gray body copy.
* Minimum desktop body size: approximately 18px.
* Avoid excessively narrow text columns.
* Keep line height generous.

### Images

Every image needs useful alt text.

Bad:

`image.png`

Better:

`Members of St. Paul's serving guests at the spring community supper`

### Links

Avoid:

“Click here”

Prefer:

**View the Bible Study Schedule**

or:

**Watch Sunday Worship on YouTube**

### Buttons

Keep tap targets large and clearly labeled.

---

# LENGTH GUIDELINES

## Complete Newsletter

Target:

**1,500–2,300 words**

A visually rich issue may use fewer words because imagery, quotes, cards, and callouts carry part of the storytelling.

## Suggested Section Lengths

**Greeting:** 120–200 words

**Ministry Spotlight:** 500–800 words

**Primary Feature:** 350–650 words

**Secondary Focus:** 200–350 words

**Formation Opportunity:** 80–150 words

**Prayer & Volunteer:** 200–350 words

**Events:** 75–150 words

**Gratitude:** 120–200 words

---

# PUBLISHING WORKFLOW

## Recommended Monthly Cadence

**Submission deadline:** approximately 7 days before publication

**Draft:** 5 days before publication

**Pastoral / theological review:** 3 days before publication

**Fact-check:** 2 days before publication

**Final approval:** 1 day before publication

**Publication:** target date

---

# FACT-CHECK BEFORE PUBLISHING

Confirm:

* Dates
* Times
* Names
* Titles
* Scripture references
* Phone numbers
* Email addresses
* Financial figures
* Event locations
* Zoom links
* Giving information
* Image URLs
* Website links
* YouTube links
* Prayer-request permissions

Never carry old dates or financial figures forward automatically from a previous edition.

---

# EMAIL TESTING

Before distribution:

1. Confirm all images are publicly hosted.
2. Confirm all image URLs use HTTPS.
3. Inline critical CSS.
4. Send a real test email.
5. Test desktop Gmail.
6. Test mobile Gmail.
7. Test Apple Mail when available.
8. Test Outlook when available.
9. Confirm two-column cards stack correctly.
10. Confirm text remains readable without zooming.
11. Check links.
12. Check alt text.
13. Confirm there are no broken images.
14. Confirm footer information.
15. Confirm rounded corners degrade gracefully in older Outlook versions.

Recommended test service:

**PutsMail**

---

# DESIGN EVOLUTION

## September 2025

**Role:** Foundational edition

Strengths:

* Vision
* Ministry framework
* Education

## November 2025

**Role:** Ministry deep dive

Strengths:

* Stewardship storytelling
* Strong content cards
* Mission-centered editorial structure

## April 2026

**Role:** Modern editorial baseline

Strengths:

* 1100px container
* Strong hero treatment
* Large-print typography
* Rounded 24px sections
* Cream/navy/gold palette
* Ministry photography
* Strong feature quote
* Two-column event/stewardship treatment
* More mature visual hierarchy

## Current Generation

The next-generation St. Paul’s newsletter should build on April while improving:

* Bento composition
* Consistent iconography
* Larger accessible text
* Rounded corners throughout
* More intentional gradients
* Stronger card hierarchy
* Better desktop use of 1100px width
* Shorter paragraphs
* More visual storytelling
* Cleaner mobile stacking

The goal is **not** to make every newsletter look identical.

The goal is for every newsletter to unmistakably feel like **St. Paul’s**.

---

# QUICK START CHECKLIST

* [ ] Read this complete template before planning or building
* [ ] Confirm Type A, Type B, or Type C; default to Type A
* [ ] Choose month and ministry focus
* [ ] Gather pastoral greeting
* [ ] Gather ministry leader notes and stories
* [ ] Select the primary feature article
* [ ] Gather current prayer information
* [ ] Confirm permission for personal prayer requests
* [ ] Gather upcoming events
* [ ] Select volunteer / gratitude spotlights
* [ ] Request current financial figures if needed
* [ ] Select the correct canonical section icons
* [ ] Prepare 1100px hero image
* [ ] Gather ministry / event photography
* [ ] Build the 1100px table-based HTML
* [ ] Use rounded bento cards where appropriate
* [ ] Check body text is at least approximately 18px
* [ ] Add descriptive image alt text
* [ ] Verify every date, name, number, email, and link
* [ ] Complete pastoral / leadership review
* [ ] Test mobile stacking
* [ ] Send a real inbox test
* [ ] Final proofread
* [ ] Publish and distribute
