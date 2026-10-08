# TEST EDITION content (sample text only, not for sending)

Used to test component assembly, reordering, mobile layout and plain-text output. Every `[SAMPLE]` line is placeholder text, not real church news. Built from `newsletter-system/template/content-template.md`.

## BASICS (permanent)

- Season and year: Fall 2026 (test)
- Hero image: fall (from `snippets/newsletter-hero-masthead.html`)
- Church building illustration: `[pending approved art]`. Edition B keeps the placeholder. Edition A fills the slot with a portrait stand-in (the Our Mission card) only to test aspect ratio and layout.

## SECTION: Greetings Friends (permanent)

Wording comes unchanged from `snippets/greetings-and-mission.html` (Draft 11). Used for layout only.

## SECTION: Our Mission (permanent)

Wording comes unchanged from `snippets/greetings-and-mission.html`.

## SECTION: Church Announcements

1. [SAMPLE] First announcement title: [SAMPLE] Sample sentence for layout testing only. It is not a real announcement.
2. [SAMPLE] Second announcement title: [SAMPLE] Another sample sentence for layout testing only.
3. [SAMPLE] Third announcement title: [SAMPLE] Another sample sentence for layout testing only.

## SECTION: Photo Feature

- Title: [SAMPLE] Photo feature title
- Image: seasonal banner used as a stand-in
- Alt text: Test stand-in: a wide seasonal banner image standing in for a landscape photo
- Caption: [SAMPLE] Caption text for layout testing.

## SECTION: Volunteer Opportunities

- Team or role: [SAMPLE] Sample Team
- Text: [SAMPLE] Two sample sentences for layout testing. Nothing here describes a real volunteer need.
- When / Where / Contact: [SAMPLE DATE] / [SAMPLE PLACE] / [SAMPLE CONTACT]

## SECTION: Seasonal Celebration

- Title: [SAMPLE] Celebration title
- Text: [SAMPLE] Sample celebration copy on a dark panel to check that light text stays readable.

## SECTION: We Are So Thankful For

Wording comes unchanged from `snippets/thankful.html` (Draft 11). Used in Arrangement B only, to test an existing snippet.

## SECTION: Closing Message

- Heading: [SAMPLE] Closing heading
- Text: [SAMPLE] Sample closing sentences for layout testing only.
- Name and role: [SAMPLE NAME], [SAMPLE ROLE]

## FOOTER (permanent)

Unchanged from `snippets/newsletter-footer.html`.

---

## Arrangements tested

| | Order after the permanent hero and Greetings/Mission block | Left out |
|---|---|---|
| **A** (`st-pauls-test-edition-A.html`) | Announcements, Photo Feature, Volunteer, Seasonal Celebration, Closing Message, footer | Thankful |
| **B** (`st-pauls-test-edition-B.html`) | Seasonal Celebration, Volunteer, Announcements, Thankful, Closing Message, footer | Photo Feature |

Built from `newsletter-system/template/html-scaffold.html`, not from an earlier newsletter. Screenshots (1280px and 390px) are in `previews/`.

Plain-text versions: `st-pauls-test-edition-A.txt`, `st-pauls-test-edition-B.txt` (made with `node scripts/html-to-text.js`).
