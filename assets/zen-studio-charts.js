/* Zen Studio CMS · Two explanatory, hypothetical animated charts.
   These are illustrative mental models, not measured product performance. */
(() => {
  'use strict';
  const charts = Array.from(document.querySelectorAll('[data-zen-chart]'));
  if (!charts.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scenarios = {
    solo: {
      before: ['Soạn nội dung', 'Chuyển hình ảnh', 'Định dạng', 'Thiết lập SEO', 'Xem trước', 'Triển khai', 'Kiểm tra'],
      after: ['Soạn', 'Chọn ảnh', 'Kiểm tra', 'Xuất bản']
    },
    team: {
      before: ['Thu thập ý tưởng', 'Soạn nội dung', 'Gửi phản hồi', 'Duyệt bản thảo', 'Chuyển hình ảnh', 'Định dạng', 'SEO', 'Triển khai', 'Đối soát'],
      after: ['Lên ý tưởng', 'Biên tập', 'Chọn ảnh', 'Duyệt nội dung', 'Xuất bản']
    }
  };

  function drawTrack(track, steps) {
    if (!track) return;
    const frag = document.createDocumentFragment();
    steps.forEach((step, i) => {
      const segment = document.createElement('span');
      segment.title = `${i + 1}. ${step}`;
      segment.setAttribute('aria-hidden', 'true');
      segment.style.transitionDelay = reduceMotion ? '0ms' : `${i * 65}ms`;
      frag.appendChild(segment);
    });
    track.replaceChildren(frag);
    track.setAttribute('aria-label', `${steps.length} điểm chạm minh họa: ${steps.join(', ')}`);
    track.setAttribute('role', 'img');
  }

  const flow = document.querySelector('.zen-flow-chart');
  if (flow) {
    const controls = Array.from(flow.querySelectorAll('[data-scenario]'));
    function selectScenario(key) {
      const scenario = scenarios[key];
      if (!scenario) return;
      const before = flow.querySelector('[data-zen-before]');
      const after = flow.querySelector('[data-zen-after]');
      drawTrack(before, scenario.before);
      drawTrack(after, scenario.after);
      flow.querySelector('[data-zen-before-count]').textContent = `${scenario.before.length} điểm chạm`;
      flow.querySelector('[data-zen-after-count]').textContent = `${scenario.after.length} điểm chạm`;
      flow.querySelector('[data-zen-before-text]').textContent = scenario.before.join(' → ');
      flow.querySelector('[data-zen-after-text]').textContent = scenario.after.join(' → ');
      controls.forEach(button => {
        const current = button.dataset.scenario === key;
        button.classList.toggle('active', current);
        button.setAttribute('aria-pressed', String(current));
      });
      flow.dataset.zenScenario = key;
      if (flow.classList.contains('is-visible') && !reduceMotion) {
        flow.classList.remove('is-visible');
        requestAnimationFrame(() => requestAnimationFrame(() => flow.classList.add('is-visible')));
      }
    }
    controls.forEach(button => button.addEventListener('click', () => selectScenario(button.dataset.scenario)));
    selectScenario('solo');
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    charts.forEach(chart => chart.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.16});
    charts.forEach(chart => observer.observe(chart));
  }
})();
