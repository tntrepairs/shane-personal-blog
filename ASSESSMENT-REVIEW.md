# SCIS111 portfolio review — 18 November 2026

## Implemented content and sources

- Home/About: existing introduction preserved; BAC start date is August 2026.
- Academic reflection: `journey.html#academic-reflection`, 579 words of reflection body, transcribed from the supplied PDF without rewriting the student's account. Editorial subheadings are separate from the body count.
- Group reflection: `group-work.html`, complete supplied reflection with all five Tuckman stages and the Slide 9/10 examples. Hypothetical presentation problems remain distinguished from actual group coordination challenges.
- Application letter: `application-letter.html`, updated letter with generic recipient wording and no organisation placeholder.
- Email: `email-template.html`, original selectable template with a copy action; no sending action.
- Skills: `index.html#skills`, three applied categories with context, examples, learning and evidence limitations. No original internship workbook or customer information is published.
- CV: the corrected r?sum? supplied on 20 November 2026 is linked from Home and `cv.html`; the referee email ends in `.com`.
- `portfolio.html` indexes the four assignments; every page has a footer route and the mobile More menu includes Academic Portfolio.

The original academic and group reflection PDFs are retained. The application letter and email template PDFs reflect the cleaned website documents; the latest supplied r?sum? PDF replaces the earlier copy. The assessment brief itself is not published as a student artifact.

## Evidence and live projects

`assets/projects/borderready-application.png` is copied unchanged from Downloads/Inspected image.png. It shows BorderReady line-item review with demonstration shipment data and a John Doe demo identity. It is labelled as an application screenshot, not internship evidence. The Ledisa two-phone SVG remains explicitly labelled illustrative concept artwork.

Both supplied app URLs returned HTTP 200 and opened in a real browser without authentication on 18 November 2026:

- BorderReady: public interface reports a Flask 503/configuration problem (`BORDERREADY_FLASK_ORIGIN` missing). Working business operations are not claimed.
- Ledisa: public entry screen explicitly says demo login and notes Supabase Auth setup. Production authentication and feature completeness are not claimed.

## Matters still requiring the student's attention

- Supplied reflection PDFs contain "Draft for personal review". Review them before submission; source documents have not been silently edited.
- Review and complete the BAC submission cover sheet, student details, declaration/signature and AI-use disclosure personally. The website includes a concise implementation-assistance disclosure; it does not submit to Turnitin or sign on the student's behalf.
- The pre-existing contact form still requires recipient activation/inbox verification. This task did not send the professional email template to anyone.

## Verification

Local browser QA covers all eleven HTML pages at 390, 820 and 1440 CSS pixels, with actual screenshots, local link/fragment checks, PDF HTTP checks and browser download events. Original PDFs were compared byte-for-byte. The email-copy interaction and the mobile Academic Portfolio menu route were tested. Public deployment verification is recorded separately after publishing.
