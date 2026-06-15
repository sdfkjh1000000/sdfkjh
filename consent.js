(function() {
  var consent;
  try { consent = localStorage.getItem('consent'); } catch(e) { return; }

  function build() {
    if (consent === 'accept' || consent === 'reject') return;

    var banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Privacy notice');
    banner.innerHTML =
      '<div class="consent-inner">' +
        '<p class="consent-text">This site is hosted on Cloudflare and uses its cookieless, privacy-first Web Analytics. No tracking cookies are set; fonts and images are served from this domain. <a href="/privacy">Privacy</a> &middot; <a href="/do-not-sell">Do Not Sell</a></p>' +
        '<div class="consent-actions">' +
          '<button type="button" class="consent-btn consent-decline" data-consent="reject">Decline</button>' +
          '<button type="button" class="consent-btn consent-accept" data-consent="accept">Accept</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    banner.addEventListener('click', function(e) {
      var t = e.target.closest('[data-consent]');
      if (!t) return;
      try { localStorage.setItem('consent', t.getAttribute('data-consent')); } catch(err) {}
      banner.remove();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
