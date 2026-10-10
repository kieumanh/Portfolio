/* Independent, privacy-aware explainer for email, vault encryption and optional Brave Sync. */
(function () {
  "use strict";
  var root = document.querySelector("[data-sync-story]");
  if (!root) return;

  var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-sync-step]"));
  var panels = Array.prototype.slice.call(root.querySelectorAll("[data-sync-panel]"));
  if (buttons.length !== 4 || panels.length !== 4) return;

  var active = 0, timer = null, visible = false, userControlled = false, hovering = false;
  var reduced = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function render(index, focus) {
    active = (index + 4) % 4;
    buttons.forEach(function (button, i) {
      var on = i === active;
      button.setAttribute("aria-pressed", String(on));
      button.classList.toggle("is-active", on);
    });
    panels.forEach(function (panel, i) { panel.hidden = i !== active; });
    if (focus) buttons[active].focus();
  }
  function stop() { if (timer !== null) { clearInterval(timer); timer = null; } }
  function schedule() {
    stop();
    if (!visible || userControlled || hovering || document.hidden || (reduced && reduced.matches)) return;
    timer = setInterval(function () { render(active + 1, false); }, 7000);
  }
  buttons.forEach(function (button, i) {
    button.addEventListener("click", function () {
      userControlled = true; stop(); render(i, false);
    });
    button.addEventListener("keydown", function (event) {
      var next = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = i + 1;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = i - 1;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = 3;
      if (next === null) return;
      event.preventDefault();
      userControlled = true; stop(); render(next, true);
    });
  });
  root.addEventListener("mouseenter", function () { hovering = true; stop(); });
  root.addEventListener("mouseleave", function () { hovering = false; schedule(); });
  root.addEventListener("focusin", function () { userControlled = true; stop(); });
  document.addEventListener("visibilitychange", schedule);
  if (reduced) {
    if (reduced.addEventListener) reduced.addEventListener("change", schedule);
    else if (reduced.addListener) reduced.addListener(schedule);
  }
  render(0, false);
  /* Jumping back from the sync explainer also opens the private-vault tab. */
  Array.prototype.slice.call(document.querySelectorAll('a[href="#at-feature-tab-2"]')).forEach(function (anchor) {
    anchor.addEventListener("click", function () {
      var tab = document.getElementById("at-feature-tab-2");
      if (tab) tab.click();
    });
  });
  if (window.location && window.location.hash === "#at-feature-tab-2") {
    var requestedTab = document.getElementById("at-feature-tab-2");
    if (requestedTab) requestedTab.click();
  }
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (items) {
      visible = items[0].isIntersecting;
      root.classList.toggle("is-visible", visible && !(reduced && reduced.matches));
      schedule();
    }, {threshold: [0, .2, .5], rootMargin: "0px 0px -12% 0px"});
    observer.observe(root);
  } else {
    visible = true;
    root.classList.add("is-visible");
    schedule();
  }
})();
