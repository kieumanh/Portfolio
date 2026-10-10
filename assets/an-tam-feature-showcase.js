/* Sổ Nợ An Tâm case study — illustrative feature walkthrough, no financial data loaded. */
(function () {
  'use strict';
  var root = document.querySelector('[data-debt-showcase]');
  if (!root) return;

  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
  if (tabs.length !== 3 || panels.length !== tabs.length) return;

  var active = 0;
  var visible = false;
  var paused = false;
  var manual = false;
  var cycle = null;
  var media = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function select(index, moveFocus) {
    active = (index + tabs.length) % tabs.length;
    tabs.forEach(function (tab, i) {
      var chosen = i === active;
      tab.setAttribute('aria-selected', String(chosen));
      tab.tabIndex = chosen ? 0 : -1;
      tab.classList.toggle('is-active', chosen);
    });
    panels.forEach(function (panel, i) {
      var chosen = i === active;
      panel.hidden = !chosen;
      panel.classList.toggle('is-active', chosen);
    });
    if (moveFocus) tabs[active].focus();
  }

  function stop() {
    if (cycle !== null) {
      window.clearInterval(cycle);
      cycle = null;
    }
  }

  function refresh() {
    stop();
    if (manual || !visible || paused || document.hidden || (media && media.matches)) return;
    cycle = window.setInterval(function () {
      select(active + 1, false);
    }, 6500);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      manual = true;
      stop();
      select(i, false);
    });
    tab.addEventListener('keydown', function (event) {
      var next = null;
      if (event.key === 'ArrowRight') next = i + 1;
      else if (event.key === 'ArrowLeft') next = i - 1;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      manual = true;
      stop();
      select(next, true);
    });
  });

  root.addEventListener('mouseenter', function () { paused = true; stop(); });
  root.addEventListener('mouseleave', function () { paused = false; refresh(); });
  root.addEventListener('focusin', function () { manual = true; stop(); });
  document.addEventListener('visibilitychange', refresh);
  if (media) {
    if (media.addEventListener) media.addEventListener('change', refresh);
    else if (media.addListener) media.addListener(refresh);
  }

  select(0, false);
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.28;
      refresh();
    }, { threshold: [0, 0.28, 0.55] });
    observer.observe(root);
  } else {
    visible = true;
    refresh();
  }
})();
