// brand.config.mjs -- sdfkjh.com brand asset manifest
//
// Outputs are relative to project root.
//   - Site-served assets land at root (favicon.svg, og-image.png, etc.) for Pages serving.
//   - Manual-upload assets land in dist/ for hand upload to Google Workspace.
//
// GBP assets dropped -- sdfkjh.com has no Google Business Profile.

export default {
  site: {
    name: 'sdfkjh.com',
    displayName: 'sdfkjh'
  },
  assets: [
    {
      name: 'favicon',
      source: 'brand/favicon.svg',
      outputs: [
        { path: 'favicon.svg', format: 'svg' },
        { path: 'apple-touch-icon.png', format: 'png', width: 180, height: 180 }
      ],
      platform: 'site root -- <link rel="icon" href="/favicon.svg"> + <link rel="apple-touch-icon" href="/apple-touch-icon.png">'
    },
    {
      name: 'og-image',
      source: 'brand/og-image.svg',
      outputs: [
        { path: 'og-image.png', format: 'png', width: 1200, height: 630 }
      ],
      platform: 'site root + <meta property="og:image" content="https://sdfkjh.com/og-image.png">'
    },
    {
      name: 'gsuite-profile',
      source: 'brand/gsuite-profile.svg',
      outputs: [
        { path: 'dist/gsuite-profile.png', format: 'png', width: 512, height: 512 }
      ],
      platform: 'manual upload @ https://myaccount.google.com/personal-info'
    },
    {
      name: 'gsuite-logo',
      source: 'brand/gsuite-logo.svg',
      outputs: [
        { path: 'dist/gsuite-logo.png', format: 'png', width: 320, height: 132 }
      ],
      platform: 'manual upload @ https://admin.google.com (Account -> Account settings -> Personalization)'
    }
  ]
};
