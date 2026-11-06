/* Med4All website scripts */

/* FORMS: paste your form service endpoint here (see README), e.g. "https://formspree.io/f/abcdwxyz".
   Leave empty to fall back to opening the visitor's email app. */
var FORM_ENDPOINT = "";
var FORM_EMAIL = "customersuccessteam@med4all.org.gh";

(function () {
  /* Hero video: play on larger screens unless the visitor prefers reduced motion */
  var v = document.querySelector('video.hero-vid');
  var btn = document.querySelector('[data-vidtoggle]');
  if (v) {
    v.muted = true;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var setLabel = function () { if (btn) btn.textContent = v.paused ? 'Play video' : 'Pause video'; };
    if (!reduce && window.innerWidth >= 960) {
      v.setAttribute('autoplay', '');
      var p = v.play(); if (p && p.catch) p.catch(setLabel);
    }
    setLabel();
    if (btn) btn.addEventListener('click', function () { if (v.paused) v.play(); else v.pause(); setTimeout(setLabel, 50); });
  }

  /* Forms */
  document.querySelectorAll('[data-form]').forEach(function (button) {
    button.addEventListener('click', function () {
      var box = button.closest('.form-box');
      if (!box) return;
      var fields = box.querySelectorAll('input, select, textarea');
      var ok = true, data = new FormData(), lines = [];
      fields.forEach(function (f) {
        if (!f.checkValidity()) { ok = false; f.reportValidity && f.reportValidity(); }
        var label = (f.closest('label') && f.closest('label').childNodes[0].textContent || f.name || '').trim();
        data.append(f.name || label, f.value);
        lines.push(label + ': ' + f.value);
      });
      if (!ok) return;
      var subject = 'Med4All website: ' + button.getAttribute('data-form');
      data.append('_subject', subject);
      var done = function () {
        box.hidden = true;
        var okBox = box.parentElement.querySelector('.form-ok');
        if (okBox) { okBox.hidden = false; okBox.setAttribute('tabindex', '-1'); okBox.focus(); }
      };
      if (!FORM_ENDPOINT) {
        window.location.href = 'mailto:' + FORM_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        done(); return;
      }
      button.disabled = true; var old = button.textContent; button.textContent = 'Sending...';
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('send failed'); done(); })
        .catch(function () {
          button.disabled = false; button.textContent = old;
          alert('Sorry, your message could not be sent. Please email ' + FORM_EMAIL + ' or WhatsApp +233 27 2222 700.');
        });
    });
  });
})();
