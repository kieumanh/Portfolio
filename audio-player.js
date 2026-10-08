'use strict';
// Music starts only after an explicit click. No autoplay or gesture listeners.
(() => {
  const audio = document.getElementById('ambientAudio');
  const music = document.getElementById('musicToggle');
  const backTop = document.getElementById('backToTop');
  const progress = document.getElementById('pageProgress');
  if (!audio || !music || !backTop) return;
  const backgrounds = [...document.querySelectorAll('main > section, footer')];
  let requested = false;
  let loading = false;
  let failed = false;
  let scrollQueued = false;
  audio.volume = 0.34;
  audio.loop = true;

  function render() {
    const en = document.documentElement.lang === 'en';
    const playing = !audio.paused && !audio.ended;
    music.classList.toggle('is-playing', playing);
    music.setAttribute('aria-pressed', String(playing));
    const label = requested ? (en ? 'Pause background music' : 'Tắt nhạc nền')
      : (en ? 'Play background music' : 'Bật nhạc nền');
    music.setAttribute('aria-label', label);
    music.title = label + ' · Hiro – Sight of Wonders';
    music.querySelector('.music-caption').textContent = en ? 'Music' : 'Nhạc nền';
    music.querySelector('.music-status').textContent = failed ? (en ? 'Unable to play' : 'Không phát được')
      : loading ? (en ? 'Loading' : 'Đang tải')
      : playing ? (en ? 'Playing' : 'Đang phát') : (en ? 'Off' : 'Đã tắt');
    backTop.setAttribute('aria-label', en ? 'Back to top' : 'Về đầu trang');
    backTop.title = backTop.getAttribute('aria-label');
  }
  music.addEventListener('click', async () => {
    requested = !requested;
    failed = false;
    if (!requested) {
      loading = false;
      audio.pause();
      render();
      return;
    }
    loading = true;
    render();
    try {
      await audio.play();
      if (!requested) audio.pause();
    } catch (error) {
      if (requested) { failed = true; requested = false; }
    } finally { loading = false; render(); }
  });
  audio.addEventListener('play', () => { if (!requested) audio.pause(); render(); });
  audio.addEventListener('pause', render);
  audio.addEventListener('error', () => { failed = true; requested = false; loading = false; render(); });

  function refreshScrollControls() {
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = max ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progress) progress.style.width = (ratio * 100).toFixed(2) + '%';
    const visible = ratio > 0.20;
    backTop.classList.toggle('is-visible', visible);
    backTop.tabIndex = visible ? 0 : -1;
    backTop.setAttribute('aria-hidden', String(!visible));
    for (const control of [music, backTop]) {
      const rect = control.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      const current = backgrounds.find(section => {
        const r = section.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      });
      control.dataset.tone = current?.matches('.hero, .practice-section, .footer, .is-dark') ? 'dark' : 'light';
    }
  }
  function enqueueScrollUpdate() {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; refreshScrollControls(); });
  }
  window.addEventListener('scroll', enqueueScrollUpdate, {passive: true});
  window.addEventListener('resize', enqueueScrollUpdate, {passive: true});
  // Filtering, expanding the timeline and changing language alter page height.
  const observer = new ResizeObserver(enqueueScrollUpdate);
  observer.observe(document.body);
  document.getElementById('langToggle')?.addEventListener('click', render);
  backTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    document.querySelector('.brand')?.focus({preventScroll: true});
  });
  refreshScrollControls();
  render();
})();
