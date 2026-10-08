# St. Paul’s Illustration Map (v1)

**Canonical, readable copy** of `resources/links/st-pauls-illustrations-v1.json`. Construction rules live in `docs/st-pauls-comprehensive-newsletter-template.md`; the image size for each layout is listed in `newsletter-system/tokens.md`.

> **Use the email copies** in `brand/assets/illustrations/email/` in newsletters. They have clean filenames (no spaces or brackets) and stay under 300 KB. The originals in `brand/assets/illustrations/` are masters. Do not link them in email.

## Email illustrations

| Key | Shape | Pixels | Size | Status | Use in |
|---|---|---|---|---|---|
| `our-mission-card-portrait` | Portrait 3:4 | 640 × 853 | 75 KB | Production | Greetings + Mission portrait, Our Mission band, portrait feature |
| `ministry-wheel-compassionate-care-square` | Square | 880 × 880 | 129 KB | Production | Both Ministry Spotlights, navy card |
| `our-mission-community-landscape` | Landscape 8:5 | 540 × 337 | 23 KB | Demo crop | Split left, cream card, card pair |
| `fall-2026-panorama` | Landscape 3:1 | 1100 × 367 | 90 KB | Demo | Greetings letter, landscape feature (do not repeat the masthead banner in the same issue) |
| `fall-2026-family-landscape` | Landscape 16:9 | 652 × 367 | 48 KB | Demo crop | Split right, card pair |
| `fall-2026-cross-square` | Square | 367 × 367 | 36 KB | Demo crop | Split masthead, square badge (commission an 800px square for production) |

### URLs

```text
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/our-mission-card-portrait-640x853.jpg
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/ministry-wheel-compassionate-care-square-880.jpg
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/our-mission-community-landscape-540x337.jpg
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/fall-2026-panorama-1100x367.jpg
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/fall-2026-family-landscape-652x367.jpg
https://custodybuddy.github.io/st-pauls-newsletter-assets/brand/assets/illustrations/email/fall-2026-cross-square-367.jpg
```

These URLs work only after the branch is merged and GitHub Pages deploys. Until then, preview them through the gallery (`newsletter-system/gallery/`), which loads them from the repository.

## Masters (do not link in email)

| Key | File | Pixels |
|---|---|---|
| `our-mission-card` | `brand/assets/illustrations/st-pauls-our-mission-card-v2-email.jpg` | 640 × 853 |
| `compassionate-care-ministry-wheel` | `brand/assets/illustrations/st-pauls-compassionate-care-ministry-highlight (1).png` | 1254 × 1254 (1.8 MB) |
| Mood board (inspiration only) | `brand/assets/illustrations/St. Paul’s Newsletter Mood Board(1).png` | 1448 × 1086 |

## Adding a new illustration

1. Export at **twice the largest display width** for its layout (see `newsletter-system/tokens.md`), as JPG unless it needs transparency.
2. Name it `<subject>-<shape>-<width>x<height>.jpg` in lowercase with hyphens, and save it to `brand/assets/illustrations/email/`.
3. Keep it under 300 KB.
4. Add it to `emailIllustrations` in the JSON and to the table above, with its shape, alt text and components.
5. Run `node scripts/audit-newsletter-repo.js`.
