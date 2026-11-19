# Shane Galetshetse Personal Blog

A static GitHub Pages portfolio for Katso Shane Galetshetse, using Shane professionally. The homepage remains `index.html`; six standalone pages extend its editorial design.

The site uses:

- GSAP for reveal, ticker and hero motion.
- Lenis for smooth scrolling.
- React Bits as a visual interaction reference, ported into plain HTML/CSS/JavaScript patterns.

No build step is required. Open `index.html` locally or publish the repository with GitHub Pages from the `main` branch.

## Pages

- `about.html`
- `journey.html`
- `experience.html`
- `projects.html`
- `contact.html`
- `cv.html`

The verified email, LinkedIn profile, and GitHub profile are connected. The original r?sum? PDF and all four assignment PDFs are available under `assets/documents/`. The referee title/email in the original r?sum? require confirmation; see `ASSESSMENT-REVIEW.md`.

## Responsive navigation and transitions

`responsive.css` and `site.js` are shared by all seven pages. Up to 1100px, a fixed bottom capsule shows all seven destinations on tablets. Phones up to 620px use Home, About, Projects, Contact and More (Journey, Experience, CV). Bottom spacing includes safe-area insets. Native cross-document view transitions progressively enhance navigation and respect reduced motion. Desktop layout declarations remain in `styles.css` and `pages.css`.

## Contact delivery setup

The contact form uses FormSubmit's documented email-based endpoint for `katsoshanegaletshetse@gmail.com`, with an AJAX endpoint for loading/error/success feedback, native validation, field limits and a honeypot. A standard POST action also works without JavaScript. No private credentials are required or stored.

Delivery is **not yet verified**: the actual browser submission and independent network request timed out before receiving a response from FormSubmit. The site shows a pending-activation notice and a direct email link.

To finish setup:
1. Open the published Contact page and send a clearly labelled test.
2. Open the FormSubmit activation email in `katsoshanegaletshetse@gmail.com` (check Spam) and confirm the form.
3. Submit a second test and verify it arrives in that inbox. An HTTP success alone does not prove inbox delivery.
4. Once confirmed, replace the pending-activation helper text in `contact.html` with the normal form guidance.

Official integration reference: https://formsubmit.co/documentation and https://formsubmit.co/ajax-documentation . If the service remains unavailable, create a Formspree form addressed to the same inbox and replace both form endpoints with its real dashboard-provided endpoint; do not invent a form ID.

## CSS assessment portfolio

`portfolio.html` links to the 579-word academic reflection in `journey.html`, `group-work.html`, `application-letter.html` and `email-template.html`. All original assignment PDFs are preserved. `portfolio-content.css` scopes the new reading pages, assignment cards and applied-skills showcase. The email template has a local copy action only.

See `ASSESSMENT-REVIEW.md` for source provenance, project-demo limitations and outstanding student review/submission steps.

## Contact form setup

The contact form is wired to FormSubmit for katsoshanegaletshetse@gmail.com. To activate delivery, open the live Contact page and send one test message. FormSubmit sends an activation email to that inbox; open it and confirm the form. Submit a second test and confirm that the email arrives. Until activation is complete, the page shows a pending notice and provides a direct email link. No credentials are required. If the activation email does not arrive, check Spam or create a Formspree form for the same recipient and replace the form action and AJAX endpoint with the real URL from its dashboard. Never invent an endpoint. The form displays loading, accepted, and error states; the accepted response means the service accepted the request, so verify inbox delivery as above.
