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
  const volume = document.getElementById('musicVolume');
  const volumeToggle = document.getElementById('volumeToggle');
  const volumePanel = document.getElementById('volumePanel');
  const mobileVolumeHint = document.getElementById('mobileVolumeHint');
  let holdTimer = 0;
  let suppressNextMusicClick = false;
  let savedVolume = 34;
  try { const saved = localStorage.getItem('km-portfolio-volume'); if (saved !== null && Number.isFinite(Number(saved))) savedVolume = Math.max(0, Math.min(100, Number(saved))); } catch (_) {}
  audio.volume = savedVolume / 100;
  if (volume) volume.value = String(savedVolume);
  function renderVolume() {
    if (!volume) return;
    const en = document.documentElement.lang === 'en';
    document.getElementById('volumeLabel').textContent = en ? 'Volume' : 'Âm lượng';
    document.getElementById('volumeValue').value = volume.value + '%';
    volume.setAttribute('aria-valuetext', volume.value + '%');
    volumeToggle.setAttribute('aria-label', en ? 'Adjust volume' : 'Chỉnh âm lượng');
    volumeToggle.title = volumeToggle.getAttribute('aria-label');
    mobileVolumeHint.textContent = en
      ? 'Touch and hold for volume. With a keyboard, use the up or down arrow while this button is focused.'
      : 'Chạm giữ để chỉnh âm lượng. Dùng bàn phím: nhấn mũi tên lên hoặc xuống khi nút này được chọn.';
  }
  function closeVolume() { volumePanel.hidden = true; volumeToggle.setAttribute('aria-expanded', 'false'); }
  function openVolume() {
    volumePanel.hidden = false;
    volumeToggle.setAttribute('aria-expanded', 'true');
    volume.focus();
  }
  volumeToggle?.addEventListener('click', () => {
    volumePanel.hidden = !volumePanel.hidden;
    volumeToggle.setAttribute('aria-expanded', String(!volumePanel.hidden));
    if (!volumePanel.hidden) volume.focus();
  });
  // On phones, the music control is the only visible button. A press-and-hold
  // opens the same volume slider; keyboard users can use ArrowUp/ArrowDown.
  music.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
    suppressNextMusicClick = false;
    clearTimeout(holdTimer);
    holdTimer = window.setTimeout(() => {
      suppressNextMusicClick = true;
      openVolume();
    }, 550);
  });
  for (const eventName of ['pointerup', 'pointercancel', 'pointerleave']) {
    music.addEventListener(eventName, () => clearTimeout(holdTimer));
  }
  music.addEventListener('contextmenu', event => {
    if (!matchMedia('(max-width: 570px)').matches) return;
    event.preventDefault();
    clearTimeout(holdTimer);
    suppressNextMusicClick = true;
    openVolume();
  });
  music.addEventListener('keydown', event => {
    if (!matchMedia('(max-width: 570px)').matches || !['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    if (volumePanel.hidden) openVolume();
    volume.value = String(Math.max(0, Math.min(100, Number(volume.value) + (event.key === 'ArrowUp' ? 5 : -5))));
    volume.dispatchEvent(new Event('input', {bubbles: true}));
  });
  volume?.addEventListener('input', () => {
    audio.volume = Number(volume.value) / 100;
    try { localStorage.setItem('km-portfolio-volume', volume.value); } catch (_) {}
    renderVolume();
  });
  document.addEventListener('pointerdown', event => { if (!event.target.closest('#musicControls')) closeVolume(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !volumePanel.hidden) {
      closeVolume();
      (matchMedia('(max-width: 570px)').matches ? music : volumeToggle).focus();
    }
  });
  audio.loop = true;

  function render() {
    renderVolume();
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
    if (suppressNextMusicClick) { suppressNextMusicClick = false; return; }
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
      if (control === music) document.getElementById('musicControls').dataset.tone = control.dataset.tone;
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
