# sdfkjh.com — brand asset checklist

Status of brand asset uploads across all platforms. Update when shipping a refresh.

## Site-served (auto on next deploy)

After `npm run build`, these land at the project root and ship with the next push to `main`:

- [ ] `favicon.svg` — `/favicon.svg`
- [ ] `apple-touch-icon.png` — `/apple-touch-icon.png` (180x180)
- [ ] `og-image.png` — `/og-image.png` (1200x630, v3 brackets)

Reference in `index.html` `<head>`:

```html
<link rel="icon" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:image" content="https://sdfkjh.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## Manual platform uploads

Generated to `dist/` — upload by hand:

- [ ] `dist/gsuite-profile.png` — https://myaccount.google.com/personal-info → click avatar → upload (replaces the smiley placeholder)
- [ ] `dist/gsuite-logo.png` — https://admin.google.com → Account → Account settings → Personalization → upload (replaces "SDFKJH" colored letters)

## OG cache invalidation (after re-shipping og-image)

Twitter / Facebook / LinkedIn / Slack cache OG previews per-URL. If sdfkjh.com has been shared anywhere, force re-scrape:

- [ ] Facebook Sharing Debugger — https://developers.facebook.com/tools/debug/
- [ ] X / Twitter Card Validator — https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector — https://www.linkedin.com/post-inspector/

## N/A for sdfkjh.com

- [N/A] `gbp-logo` — no Google Business Profile (personal placeholder site, not a business)
- [N/A] `gbp-cover` — no Google Business Profile

## Site logo (embed-only, not in build pipeline)

- `brand/logo.svg` — full wordmark `[ sdfkjh ]` (400×100)
- `brand/logo-mark.svg` — square mark `[s]` (200×200)

Embed inline in HTML when needed. Not currently used by `index.html` placeholder.
