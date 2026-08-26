# View in Browser Links

## Purpose

A **View in browser** link gives recipients a hosted web copy of the newsletter when their email app cannot display the design reliably. It is especially helpful when images are blocked, the layout is simplified, or the recipient uses a limited email client.

## What recipients receive

When selected, the link opens the web version hosted by the email service provider (ESP). That hosted version should:

- Render the newsletter design as intended.
- Display images without email-client blocking.
- Keep formatting consistent across devices.
- Remain accessible to people whose email apps have limited support.
- Preserve personalization and dynamic content when the ESP supports its standard hosted-email view.

## Required setup

Use the visible link in the template with this neutral placeholder:

\`[VIEW_IN_BROWSER_URL]\`

Before sending, replace that placeholder with the **exact hosted-email / browser-version merge tag supplied by the ESP**. The merge tag varies by provider, so do not hard-code a generic URL and do not leave \`href="#"\` in a production send.

Recommended placement:

1. A quiet utility line at the top of the email, before the hero.
2. A repeat link in the footer for recipients who scroll to the end.

## Email-safe HTML pattern

\`\`\`html
<p style="margin:0; font-family:Arial, sans-serif; font-size:12px; line-height:1.5; color:#64748B;">
  Having trouble viewing this email?
  <a href="[VIEW_IN_BROWSER_URL]" style="color:#0A1C2C; text-decoration:underline; font-weight:700;">View it in your browser</a>.
</p>
\`\`\`

## Pre-send check

1. Replace every \`[VIEW_IN_BROWSER_URL]\` placeholder with the ESP merge tag.
2. Send a test email and select the link to confirm it opens the correct hosted issue.
3. Confirm the hosted page shows the intended images, formatting, personalization, and dynamic content.


