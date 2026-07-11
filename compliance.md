# The Compliance Layer — sdfkjh

Source: https://sdfkjh.com/compliance

# The compliance layer

Every page on this site carries a legal and accessibility layer you're not meant to notice. This page points at it.

## What this site carries

-   A [privacy policy](/privacy) that describes this site as it actually is (no analytics, no tracking cookies, fonts and images served from this domain) rather than a template's guess.
-   A [Do Not Sell or Share](/do-not-sell) page stating California privacy rights plainly.
-   [Terms of use](/terms) sized to what the site actually does.
-   A privacy notice that guards only what exists. There is nothing here that tracks you, so there is no wall of toggles pretending otherwise.
-   Accessibility tested against WCAG 2.2 AA on every page: zero violations, last checked July 2026. Keyboard navigation, visible focus, a skip link, honest alt text.
-   Security headers on every response: a content security policy, strict transport security, frame denial.

## Why a personal site bothers

It mostly doesn't have to. This site collects nothing, so the law asks very little of it.

Business sites are a different story. California's Online Privacy Protection Act requires any website that collects personal information from California residents to post a privacy policy. A contact form or an online ordering page is enough to qualify, and there is no small-business exemption. Separately, a business with a physical location can face accessibility claims tied to its website, and California's Unruh Civil Rights Act sets statutory damages starting at $4,000 per violation. Demand letters built on exactly that arrive at small businesses every week.

The layer is cheap to build when it's built honestly, and expensive to ignore. So this site carries it anyway: partly as good manners, mostly as a working example.

## How it's kept true

-   The policies were written to the site, not pasted onto it. When the site changes, the policies change.
-   The privacy policy's claims are enforced by build discipline. "Fonts are served from this domain" stays true because the fonts live in `/assets/fonts/`, not on someone's CDN.
-   Accessibility is tested against the WCAG 2.2 AA standard on every page, then re-checked when anything ships.

If you're curious whether a site has this layer, scroll to its footer. Either the links are there, or they aren't.

Last updated: July 2026
