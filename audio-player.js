'use strict';
// Music starts only after an explicit click. No autoplay or gesture listeners.
(() => {
  if (window.__portfolioAudioPlayerInitialized) return;
  window.__portfolioAudioPlayerInitialized = true;
  function ensurePlayer() {
    if (!document.getElementById('ambientAudio')) {
      const audio = document.createElement('audio'); audio.id = 'ambientAudio';
      audio.src = '/Portfolio/assets/hiro-background.mp3'; audio.preload = 'none'; audio.loop = true;
      document.body.append(audio);
    }
    if (!document.getElementById('musicControls')) {
      const controls = document.createElement('div'); controls.className = 'music-controls';
      controls.id = 'musicControls'; controls.dataset.tone = 'light';
      controls.innerHTML = '<button id="musicToggle" type="button" class="music-toggle" data-tone="light" aria-label="Bật nhạc nền" aria-pressed="false"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg><span class="music-caption-wrap"><span class="music-caption">Nhạc nền</span><span class="music-status" role="status" aria-live="polite">Đã tắt</span></span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><span id="mobileVolumeHint" class="sr-only">Chạm giữ để chỉnh âm lượng.</span><button id="volumeToggle" type="button" class="volume-toggle" aria-label="Chỉnh âm lượng" aria-expanded="false" aria-controls="volumePanel"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button><div id="volumePanel" class="volume-panel" hidden><div class="volume-heading"><label for="musicVolume" id="volumeLabel">Âm lượng</label><output id="volumeValue">34%</output></div><input id="musicVolume" type="range" min="0" max="100" step="1" value="34"></div>';
      document.body.append(controls);
    }
    if (!document.getElementById('backToTop')) {
      const button = document.createElement('button'); button.id='backToTop'; button.type='button';
      button.className='back-to-top'; button.setAttribute('aria-label','Về đầu trang'); button.setAttribute('aria-hidden','true'); button.tabIndex=-1; button.title='Về đầu trang'; button.textContent='↑'; document.body.append(button);
    }
  }
  ensurePlayer();
  const audio = document.getElementById('ambientAudio');
  const music = document.getElementById('musicToggle');
  const backTop = document.getElementById('backToTop');
  const progress = document.getElementById('pageProgress');
  if (!audio || !music || !backTop) return;
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
    try { music.setPointerCapture(event.pointerId); } catch (_) {}
    holdTimer = window.setTimeout(() => {
      suppressNextMusicClick = true;
      openVolume();
    }, 550);
  });
  for (const eventName of ['pointerup', 'pointercancel']) {
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
      const current = [...document.querySelectorAll('main > section, footer, .case-main, .case-footer')].find(section => {
        const r = section.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      });
      const darkSurface = current?.matches('.hero, .practice-section, .footer, .is-dark, .debt-visual, .case-visual.fpt');
      control.dataset.tone = darkSurface ? 'dark' : 'light';
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

  // Soft navigation keeps this exact Audio element alive between Portfolio pages.
  const pageCache = new Map();
  const pageMeta = new Map();
  const persistentIds = ['ambientAudio', 'musicControls', 'backToTop'];
  const persistentNodes = Object.fromEntries(persistentIds.map(id => [id, document.getElementById(id)]));
  const currentKey = () => location.pathname + location.search;
  let activeKey = currentKey();
  const takePage = () => {
    const fragment = document.createDocumentFragment();
    [...document.body.childNodes].forEach(node => {
      if (node.nodeType === 1 && persistentIds.includes(node.id)) return;
      fragment.append(node);
    });
    return fragment;
  };
  const isInternalPageLink = link => {
    if (!link || link.target || link.hasAttribute('download') || link.relList.contains('external')) return false;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith('/Portfolio/')) return false;
    if (url.pathname === location.pathname && url.search === location.search && url.hash) return false;
    return url.pathname !== location.pathname || url.search !== location.search;
  };
  function applyMeta(meta) {
    document.title=meta.title;
    document.documentElement.lang=meta.lang || 'vi';
    document.body.className=meta.className || '';
    const liveDescription=document.querySelector('meta[name="description"]');
    if(liveDescription && meta.description) liveDescription.content=meta.description;
    const liveCanonical=document.querySelector('link[rel="canonical"]');
    if(liveCanonical && meta.canonical) liveCanonical.href=meta.canonical;
  }
  async function navigate(url, {push=true}={}) {
    const fromKey=activeKey;
    pageCache.set(fromKey,takePage());
    pageMeta.set(fromKey,{title:document.title,lang:document.documentElement.lang,className:document.body.className,
      description:document.querySelector('meta[name="description"]')?.content||'',
      canonical:document.querySelector('link[rel="canonical"]')?.href||''});
    for (const node of [...document.body.childNodes]) {
      if (node.nodeType === 1 && persistentIds.includes(node.id)) continue;
      node.remove();
    }
    const key=url.pathname+url.search;
    if(pageCache.has(key)) {
      document.body.append(pageCache.get(key));
      applyMeta(pageMeta.get(key)||{});
    } else {
      try {
        const response=await fetch(url.href,{headers:{'X-Requested-With':'PortfolioNavigation'}});
        if(!response.ok) throw new Error('Page request failed');
        const doc=new DOMParser().parseFromString(await response.text(),'text/html');
        if(!doc.querySelector('main')||!doc.body) throw new Error('Not a Portfolio page');
        const meta={title:doc.title,lang:doc.documentElement.lang||'vi',className:doc.body.className,
          description:doc.querySelector('meta[name="description"]')?.content||'',
          canonical:doc.querySelector('link[rel="canonical"]')?.href||''};
        pageMeta.set(key,meta); applyMeta(meta);
        for(const node of [...doc.body.childNodes]) {
          if(node.nodeType===1 && (persistentIds.includes(node.id) || node.tagName==='SCRIPT')) continue;
          document.body.append(node);
        }
        if(document.getElementById('featuredGrid')) {
          if(typeof window.initPortfolioPage==='function') window.initPortfolioPage();
          else if(!window.portfolioScriptLoading) {
            window.portfolioScriptLoading=true;
            const s=document.createElement('script'); s.src='/Portfolio/script.js?v=2.0.11';
            document.body.append(s);
          }
          if(!window.contactFormLoaded) {
            window.contactFormLoaded=true;
            const f=document.createElement('script'); f.src='/Portfolio/contact-form.js?v=2.0.11'; document.body.append(f);
          }
        }
      } catch(_) { location.assign(url.href); return; }
    }
    for(const id of persistentIds) {
      const node=persistentNodes[id];
      if(node && node.parentNode !== document.body) document.body.append(node);
    }
    activeKey=key;
    if(push) history.pushState({portfolio:true},'',url.href);
    else history.replaceState({portfolio:true},'',url.href);
    document.dispatchEvent(new CustomEvent('portfolio:navigate'));
    if(url.hash) requestAnimationFrame(()=>document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView());
    else window.scrollTo({top:0,behavior:'instant'});
    refreshScrollControls(); render();
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!isInternalPageLink(link) || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); navigate(new URL(link.href), {push:true});
  });
  window.addEventListener('popstate', () => navigate(new URL(location.href), {push:false}));
  window.addEventListener('resize', enqueueScrollUpdate, {passive:true});
})();
