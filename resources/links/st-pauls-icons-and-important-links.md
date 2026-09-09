# St. Paul’s v4 Icon and Important Link Library

Use this file with `docs/st-pauls-comprehensive-newsletter-template.md`, which controls newsletter structure, design, accessibility, and workflow.

The v4 icon family is the canonical system for new newsletter work. Its source files are individually stored in `assets/icons/`, and `resources/links/st-pauls-icons-v4.json` is the machine-readable source of truth.

The canonical PNG exports were refreshed on 2026-09-08. Previous exports and alternate generated variants are preserved in `assets/icon-archive/v4-previous/` and are not production assets.

## Style

- Premium dimensional Christian symbols with softened, readable geometry
- Deep navy `#082A55`, warm gold `#D39A08`, and teal `#087F8C`
- Transparent PNG background
- No words, letters, emoji, or decorative frames unrelated to the symbol
- Recommended width: `88px` for the main brand icon and `72px` for section icons

## Canonical Icon Map

Use each icon as the visual label for a section's primary purpose, not as general decoration. Select icons in this order: exact section match, primary purpose, approved fallback, then no icon. Keep these boundaries strict: `04` is a featured ministry story, `06` is work beyond the church walls, and `10` is prayer or pastoral care. Do not use `10` for gratitude. `08` covers stewardship narratives and is only the interim fallback for financial figures until a dedicated finance icon is exported.

### Routing rules

| Content signal | Use | Do not substitute |
|---|---|---|
| Greetings Friends / pastoral message | `02` | `10` prayer-care or a generic heart |
| Our Mission statement | `03` | `04` ministry spotlight |
| Featured ministry story | `04` | `06` unless the story is explicitly community outreach |
| Did You Know? / community need / context | `05` | `06` service report |
| Food bank, partnerships, service beyond the church | `06` | `04` internal ministry feature |
| Bible study, Scripture, Experiencing God | `07` | `03` mission |
| Stewardship, generosity, time and talents | `08` | `10` gratitude or care |
| Monthly financial figures | Future finance icon; use `08` only as interim fallback | Gratitude or prayer icons |
| Upcoming Events heading | `09` | Any other section icon |
| Prayer requests, homebound, pastoral care | `10` | `02` greetings or gratitude |
| We Are So Thankful For | No current v4 icon; use future gratitude icon | `10` prayer-care |

| Newsletter role | Filename | Canonical URL | Default alt text |
|---|---|---|---|
| Branding / Main title | `01-branding-cross-wings.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/01-branding-cross-wings.png` | Winged cross with a gold halo |
| Greetings / Pastoral note | `02-pastoral-note-heart-dialogue.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/02-pastoral-note-heart-dialogue.png` | Gold heart inside a speech bubble |
| Our Mission | `03-our-mission-church-community.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/03-our-mission-church-community.png` | Church community gathered beneath a cross |
| Ministry Spotlight | `04-ministry-spotlight-serving-heart.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/04-ministry-spotlight-serving-heart.png` | Open hand supporting a gold heart |
| Community Discernment | `05-community-discernment-congregation.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/05-community-discernment-congregation.png` | Congregation gathered beneath a cross in a circle |
| Mission in the Community | `06-community-mission-cross-path.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/06-community-mission-cross-path.png` | Cross above a pathway through the community |
| Spiritual Formation | `07-spiritual-formation-open-bible.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/07-spiritual-formation-open-bible.png` | Radiant cross rising from an open Bible |
| Stewardship / Generosity | `08-stewardship-wheat-fields.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/08-stewardship-wheat-fields.png` | Three wheat stalks growing over fields |
| Upcoming Events | `09-upcoming-events-calendar.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/09-upcoming-events-calendar.png` | Church calendar with a cross and event markers |
| Prayer / Care / Compassion | `10-prayer-care-heart-hands.png` | `https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/10-prayer-care-heart-hands.png` | Caring hands beneath an outlined gold heart |

## Email-Safe HTML Pattern

```html
<img src="https://custodybuddy.github.io/st-pauls-newsletter-assets/assets/icons/03-our-mission-church-community.png" alt="Church community gathered beneath a cross" width="72" style="display:block; border:0; outline:none; text-decoration:none;">
```

## Visual Map

- Repository file: `resources/links/st-pauls-icons-v4-visual-map.html`
- Live URL after deployment: `https://custodybuddy.github.io/st-pauls-newsletter-assets/resources/links/st-pauls-icons-v4-visual-map.html`
- Generation prompt record: `resources/links/st-pauls-icons-v4-generation-prompts.md`

## Stable Public Links

| Label | URL |
|---|---|
| Website | `https://www.stpaulsingersoll.ca/` |
| Donate | `https://www.stpaulsingersoll.ca/contact-us/donate` |
| Contact | `https://www.stpaulsingersoll.ca/contact-us` |
| Small Groups | `https://www.stpaulsingersoll.ca/thriving-at-st-paul-s/small-groups` |
| Our Videos | `https://www.stpaulsingersoll.ca/a-church-for-you/our-videos` |
| News | `https://www.stpaulsingersoll.ca/contact-us/blog/categories/news` |

Time-sensitive bulletin and event URLs must be verified before sending.
