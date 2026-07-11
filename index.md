# sdfkjh — brand and web, built on the home keys

Source: https://sdfkjh.com/

sdfkjh is six letters off the home row of a keyboard (sdf + kjh). The site is a single-page craft showcase: every section is a working artifact built by hand (a live Markdown renderer, a format switcher, an in-page design-token editor, an effects lab, and a JavaScript REPL), not a description of one. The page is the portfolio.

## The take

Left hand: **sdf**. Right hand: **kjh**. Brand and web are two hands on one keyboard.

> The page is what they type together.

## Brand

- Wordmark: [ sdfkjh ] in mono, brackets in amber.
- Type: Newsreader, Source Serif 4, JetBrains Mono.
- Palette: paper, ink, amber.

## Web

- Markup: one static index.html.
- Stack: vanilla JS, no framework.
- Hosting: Cloudflare Pages, edge-served.

One page renders in five formats: html · markdown · json · css · javascript.

## Elsewhere

The same hand and stack, pointed at three other problems:

- [byob](https://byob.sdfkjh.com/): Be Your Own Broker. Car buying without the F&I middleman.
- [tanktalks](https://tanktalks.sdfkjh.com/): freshwater aquarium keeping, explained plainly.
- [business internet search](https://businessinternetsearch.sdfkjh.com/): B2B connectivity, sourced without the runaround.

## Design range

One markup, fifteen complete design systems. Switch the whole look live, then tune color, type, and layout in the browser: [sdfkjh.com/range](https://sdfkjh.com/range).

## The console

The homepage includes a working JavaScript REPL. Commands:

- `whoami` — show the wordmark.
- `brand` — show the brand.
- `web` — show the web.
- `both` — show both.
- `contact` — show the email.
- `time` — local time.
- `weather [city]` — current weather (via wttr.in).
- `news` — top stories (Hacker News).
- `cve` — recent CVEs (NVD / NIST).
- `ping <host>` — simulated round-trip.
- `clear` — wipe the screen.

## Facts

- Static site, hand-built, no framework. Hosted on Cloudflare Pages.
- Fonts and images are self-hosted; the page loads no third-party resources on page load. The REPL makes on-demand calls to public APIs (weather, Hacker News, NVD) only when a visitor types those commands.
- No analytics, no tracking cookies.
- Contact: info@sdfkjh.com
- Parent domain of a small family of hand-built sites. The machine-readable directory of live properties is at https://sdfkjh.com/api/sites (see https://sdfkjh.com/.well-known/api-catalog).
