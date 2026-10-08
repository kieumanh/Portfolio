'use strict';
/* Ambient audio + accessible fixed controls for static GitHub Pages.
   Most browsers restrict audible autoplay until a real user interaction. */
(() => {
  const audio = document.getElementById('ambientAudio');
  const music = document.getElementById('musicToggle');
  const backTop = document.getElementById('backToTop');
  const progress = document.getElementById('pageProgress');
  if (!audio || !music || !backTop) return;

  const STORAGE_KEY = 'km-portfolio-ambient-enabled';
  const backgrounds = Array.from(document.querySelectorAll('main > section, footer'));
  let enabled = true;
  let awaitingGesture = false;
  let scrollQueued = false;
  try { enabled = window.localStorage.getItem(STORAGE_KEY) !== 'false'; } catch (_) { /* storage disabled */ }
  audio.volume = 0.34;
  audio.loop = true;

  function savePreference(value) {
    try { window.localStorage.setItem(STORAGE_KEY, String(value)); } catch (_) { /* optional */ }
  }
  function currentLang() { return document.documentElement.lang === 'en' ? 'en' : 'vi'; }
  function render() {
    const playing = !audio.paused && !audio.ended;
    const en = currentLang() === 'en';
    music.classList.toggle('is-playing', playing);
    music.classList.toggle('is-waiting', enabled && !playing && awaitingGesture);
    music.setAttribute('aria-pressed', String(playing));
    const label = playing ? (en ? 'Pause background music' : 'Tắt nhạc nền')
      : awaitingGesture && enabled ? (en ? 'Tap to enable background music' : 'Chạm để bật nhạc nền')
      : (en ? 'Play background music' : 'Bật nhạc nền');
    music.setAttribute('aria-label', label);
    music.title = label + ' · Hiro – Sight of Wonders';
    const caption = music.querySelector('.music-caption');
    if (caption) caption.textContent = en ? 'Music' : 'Nhạc nền';
    const status = music.querySelector('.music-status');
    if (status) status.textContent = playing ? (en ? 'Playing' : 'Đang phát') : (en ? 'Off' : 'Đã tắt');
    const backLabel = en ? 'Back to top' : 'Về đầu trang';
    backTop.setAttribute('aria-label', backLabel);
    backTop.title = backLabel;
  }

  function detachGestureHandlers() {
    document.removeEventListener('pointerdown', unlockOnGesture, true);
    document.removeEventListener('keydown', unlockOnGesture, true);
    awaitingGesture = false;
  }
  function waitForGesture() {
    if (!enabled || awaitingGesture) return;
    awaitingGesture = true;
    document.addEventListener('pointerdown', unlockOnGesture, {capture: true, passive: true});
    document.addEventListener('keydown', unlockOnGesture, true);
    render();
  }
  function requestPlayback(allowFallback = true) {
    if (!enabled) return;
    try {
      const result = audio.play();
      if (result && typeof result.then === 'function') {
        result.then(() => { detachGestureHandlers(); render(); })
          .catch(() => { if (allowFallback) waitForGesture(); render(); });
      }
    } catch (_) { if (allowFallback) waitForGesture(); }
  }
  function unlockOnGesture(event) {
    if (!enabled) return;
    // A click on the explicit music toggle should use the toggle's own handler.
    if (event.target && event.target.closest && event.target.closest('#musicToggle')) return;
    if (event.type === 'keydown' && ['Tab', 'Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) return;
    requestPlayback();
  }

  music.addEventListener('click', () => {
    if (!audio.paused) {
      enabled = false;
      savePreference(false);
      detachGestureHandlers();
      audio.pause();
    } else {
      enabled = true;
      savePreference(true);
      requestPlayback();
    }
    render();
  });
  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);
  audio.addEventListener('error', () => {
    enabled = false;
    detachGestureHandlers();
    music.title = currentLang() === 'en' ? 'Music failed to load' : 'Không tải được nhạc nền';
    render();
  });

  function refreshScrollControls() {
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const at = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);
    const progressRatio = max ? Math.min(1, at / max) : 0;
    if (progress) progress.style.width = (progressRatio * 100).toFixed(2) + '%';
    const showBackTop = progressRatio >= 0.20;
    backTop.classList.toggle('is-visible', showBackTop);
    backTop.tabIndex = showBackTop ? 0 : -1;
    backTop.setAttribute('aria-hidden', String(!showBackTop));

    // Match the floating music control's contrast to the section under it.
    const y = window.innerHeight - Math.max(46, music.getBoundingClientRect().height / 2 + 16);
    const current = backgrounds.find(el => {
      const r = el.getBoundingClientRect();
      return r.top <= y && r.bottom > y;
    });
    const dark = !!(current && (current.matches('.hero, .practice-section, .footer') || current.classList.contains('is-dark')));
    music.dataset.tone = dark ? 'dark' : 'light';
    backTop.dataset.tone = dark ? 'dark' : 'light';
  }
  function enqueueScrollUpdate() {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; refreshScrollControls(); });
  }
  window.addEventListener('scroll', enqueueScrollUpdate, {passive: true});
  window.addEventListener('resize', enqueueScrollUpdate, {passive: true});
  document.getElementById('langToggle')?.addEventListener('click', render);
  backTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  });
  refreshScrollControls();
  render();
  // Best effort: audible autoplay is browser-controlled. If blocked, the
  // next genuine pointer/keyboard interaction starts the soundtrack instead.
  if (enabled) requestPlayback();
})();