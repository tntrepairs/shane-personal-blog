/* Page-only interactions: this file intentionally has no synthetic form submission. */
document.querySelectorAll('.page-topbar').forEach((bar) => {
  const update = () => bar.classList.toggle('is-scrolled', window.scrollY > 16);
  window.addEventListener('scroll', update, { passive: true });
  update();
});
