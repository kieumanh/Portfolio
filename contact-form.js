'use strict';
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('contactStatus');
  const submit = form.querySelector('[type="submit"]');
  const endpoint = 'https://formsubmit.co/ajax/kieumanh2211@gmail.com';
  let busy = false;
  let lastPayload = '';
  let lastSentAt = 0;
  let statusKey = '';
  const t = () => translations[document.documentElement.lang === 'en' ? 'en' : 'vi'];
  function show(key) { statusKey = key; status.textContent = t()[key] || ''; }
  function values() {
    const value = name => String(form.elements.namedItem(name).value).trim();
    return {name:value('name'),email:value('email'),phone:value('phone'),message:value('message')};
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    const data = values();
    if (form.elements.namedItem('_honey').value) return;
    if (!data.name || data.message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { show('formInvalid'); return; }
    const fingerprint = JSON.stringify(data);
    if (fingerprint === lastPayload && Date.now() - lastSentAt < 60000) { show('formCooldown'); return; }
    busy = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    show('formSending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json'},
        signal: controller.signal,
        body: JSON.stringify({...data,_replyto:data.email,_url:'https://kieumanh.github.io/Portfolio/',_subject:'Lời nhắn từ Portfolio Kiều Mạnh',_template:'table',_honey:''})
      });
      const result = await response.json();
      const message = String(result.message || '');
      if (response.ok && /(?:needs? activation|activate (?:your )?form|activation email)/i.test(message)) {
        show('formActivation');
        return;
      }
      if (!response.ok || ![true,'true'].includes(result.success)) throw new Error('Form service did not confirm acceptance');
      lastPayload = fingerprint;
      lastSentAt = Date.now();
      form.reset();
      show('formSuccess');
    } catch (_) {
      // Do not automatically retry an ambiguous submission; preserve the draft.
      show('formError');
    } finally {
      clearTimeout(timeout);
      busy = false;
      submit.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
  document.getElementById('contactCopy').addEventListener('click', async () => {
    const data = values();
    const text = `Đến: kieumanh2211@gmail.com\nTiêu đề: Lời nhắn từ Portfolio\n\n${data.message}\n\nHọ tên: ${data.name}\nEmail phản hồi: ${data.email}${data.phone ? '\nĐiện thoại / Zalo: '+data.phone : ''}`;
    try { await navigator.clipboard.writeText(text); show('formCopied'); } catch (_) { show('formCopyError'); }
  });
  document.getElementById('langToggle')?.addEventListener('click', () => { if (statusKey) show(statusKey); });
})();
