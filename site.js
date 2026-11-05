/* Shared lightweight interaction layer; ordinary links retain native navigation. */
const moreButton = document.querySelector('.bottom-nav-more');
const morePanel = document.querySelector('.more-navigation');
function closeMore(restoreFocus = false) {
  if (!moreButton || !morePanel) return;
  moreButton.setAttribute('aria-expanded', 'false');
  morePanel.hidden = true;
  if (restoreFocus) moreButton.focus();
}
moreButton?.addEventListener('click', () => {
  const open = moreButton.getAttribute('aria-expanded') === 'true';
  moreButton.setAttribute('aria-expanded', String(!open));
  morePanel.hidden = open;
});
document.addEventListener('click', event => {
  if (!event.target.closest('.bottom-nav')) closeMore();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && morePanel && !morePanel.hidden) closeMore(true);
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.bottom-nav')) closeMore();
});
window.matchMedia('(max-width: 620px)').addEventListener('change', () => closeMore());

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const button = contactForm.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-form-status');
  const fields = new FormData(contactForm);
  if (fields.get('_honey')) return;
  if (button.disabled) return;
  const label = button.innerHTML;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  button.textContent = 'Sending…';
  status.dataset.state = 'loading';
  status.textContent = 'Sending your message securely…';
  try {
    const response = await fetch(contactForm.dataset.submitEndpoint, {
      method: 'POST', headers: { 'Accept': 'application/json' }, body: fields,
      signal: AbortSignal.timeout(20000)
    });
    const result = await response.json();
    if (!response.ok || ![true, 'true'].includes(result.success)) throw new Error('Service unavailable');
    if (/activat/i.test(result.message || '')) {
      status.dataset.state = 'error';
      status.textContent = 'Email delivery is awaiting recipient activation. Please use the direct email link below.';
    } else {
      status.dataset.state = 'success';
      status.textContent = 'Your message was accepted by the email service. Thank you for getting in touch.';
      contactForm.reset();
    }
  } catch {
    status.dataset.state = 'error';
    status.textContent = 'Your message could not be sent. Your text is still here; try again or email Shane directly below.';
  } finally {
    button.disabled = false;
    button.removeAttribute('aria-busy');
    button.innerHTML = label;
  }
});
