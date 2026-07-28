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

## Config

- **Contact form** posts to Formspree via `FORMSPREE_ENDPOINT` in
  [src/pages/Contact.jsx](src/pages/Contact.jsx).
- **Direct contact emails** shown in the footer and Contact page are
  `atharva@kalixsystems.com` and `devyansh@kalixsystems.com`.

## Deploy

Hosted on Vercel. `services.kalixsystems.com` is pointed at the deployment
via a CNAME record in Namecheap DNS (kalixsystems.com's registrar). Build
command `npm run build`, output directory `dist`.
