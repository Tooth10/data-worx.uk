document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.topbar').forEach(function (bar) {
    const button = bar.querySelector('.menu-toggle');
    const nav = bar.querySelector('.nav');
    if (!button || !nav) return;
    function closeMenu() { nav.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open navigation menu'); }
    button.addEventListener('click', function () {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { closeMenu(); } });
    document.addEventListener('click', function (event) { if (!bar.contains(event.target)) closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 760) closeMenu(); });
  });
});
