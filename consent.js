(function() {
  var NOTICE_KEY = 'sdfkjh:notice';
  var seen;
  try { seen = localStorage.getItem(NOTICE_KEY); } catch (e) { return; }
  if (seen === 'dismissed') return;

  var banner, prevFocus;

  function persist() {
    try { localStorage.setItem(NOTICE_KEY, 'dismissed'); } catch (e) {}
  }

  function cleanup() {
    document.removeEventListener('keydown', onKey);
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function dismiss(restore) {
    var inside = banner && banner.contains(document.activeElement);
    persist();
    cleanup();
    // return focus to a sensible place only if it was inside the banner
    if (restore && inside) {
      var target = prevFocus && document.contains(prevFocus)
        ? prevFocus
        : document.querySelector('main, #main, h1');
      if (target && typeof target.focus === 'function') {
        try { target.focus(); } catch (e) {}
      }
    }
  }

  function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Esc') dismiss(true);
  }

  function build() {
    banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Privacy notice');
    banner.innerHTML =
      '<div class="consent-inner">' +
        '<p class="consent-text">This site sets no tracking cookies and runs no analytics scripts. There is nothing to accept for normal browsing. ' +
          '<a href="/privacy">Privacy</a> &middot; <a href="/do-not-sell">Do Not Sell</a></p>' +
        '<div class="consent-actions">' +
          '<a href="/privacy" class="consent-link" data-privacy-options>Privacy options</a>' +
          '<button type="button" class="consent-btn consent-dismiss" data-consent-dismiss>Got it</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    var dismissBtn = banner.querySelector('[data-consent-dismiss]');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', function() { dismiss(true); });
    }

    var opts = banner.querySelector('[data-privacy-options]');
    if (opts) {
      opts.addEventListener('click', function(e) {
        // On the index page a REPL privacy control is exposed; route there.
        // Elsewhere, let the link navigate to /privacy (the disclosure).
        if (typeof window.__sdfkjhPrivacy === 'function') {
          e.preventDefault();
          dismiss(false);
          window.__sdfkjhPrivacy();
        }
      });
    }

    document.addEventListener('keydown', onKey);
  }

  function start() {
    prevFocus = document.activeElement;
    build();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
