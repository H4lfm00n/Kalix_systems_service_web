# KĀLIX Services

Marketing / sales site for `services.kalixsystems.com` — guides prospective
services customers through what KĀLIX Systems offers, how engagements work,
proof of past work, and a detailed project intake form.

Built with React + Vite + Tailwind CSS to match the visual language of
[kalixsystems.com](https://kalixsystems.com) (Montserrat display type, Inter
body text, monochrome + hairline-grid sections).

## Pages

- `/` — Home
- `/services` — detailed service offerings + engagement models
- `/process` — how engagements are run, FAQ
- `/case-studies` — proof of work
- `/about` — company + founders
- `/contact` — project intake form (see setup below)

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Before going live

1. **Contact form.** [src/pages/Contact.jsx](src/pages/Contact.jsx) posts to
   `FORMSPREE_ENDPOINT`, currently a placeholder
   (`https://formspree.io/f/YOUR_FORM_ID`). Create a form at
   [formspree.io](https://formspree.io), copy its endpoint, and replace the
   constant at the top of that file.
2. **Direct contact email.** `hello@kalixsystems.com` is used as the fallback
   contact address in the footer and Contact page — swap it for whichever
   inbox should receive services inquiries if different.
3. **Deploy.** Any static host works (Vercel, Netlify, Cloudflare Pages).
   Point `services.kalixsystems.com` at the deployment via CNAME, build
   command `npm run build`, output directory `dist`.
