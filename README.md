# Reyco Group — website

A multi-page React site (Vite + React Router + Framer Motion) for a ready-made
garment manufacturer / exporter. Nine real pages with page-transition animations,
scroll reveals, animated counters and a scroll-driven "selvedge thread" on the
Process page.

> Everything is placeholder content — company name, figures, names, certifications,
> client names and all images — for you to replace with your real details.

---

## Pages
- `/` Home
- `/company` Company overview
- `/history` Our history (timeline)
- `/board` Board of directors
- `/capabilities` Product lines & services
- `/process` How an order moves (the animated spine)
- `/compliance` Certifications & audits
- `/sustainability` Environmental & social
- `/corporate-gifts` Corporate gifts & branded merchandise (Reyco Group division)
- `/blog` Insights & articles (SEO blog index)
- `/blog/:slug` Individual article pages
- `/contact` Request-a-quote form

---

## Run it on your computer
You need Node.js 18+ (https://nodejs.org). Then, in this folder:

```bash
npm install      # first time only
npm run dev      # starts a local server — open the printed http://localhost link
```

To make the production build (already included in `dist/`):

```bash
npm run build        # outputs to dist/
npm run preview      # preview the built site locally
```

> Don't double-click `dist/index.html` — a routed app needs to be served, not
> opened from disk. Use `npm run dev`, `npm run preview`, or deploy it (below).

---

## Put it online (easiest first)
**Netlify (drag & drop):** go to https://app.netlify.com/drop and drag the whole
`dist/` folder in. Done. The included `_redirects` file makes deep links work.

**Vercel / Netlify (from the repo):** import the project; build command `npm run build`,
output directory `dist`. The `vercel.json` / `_redirects` handle routing.

---

## What to change (no deep coding needed)
- **Company name / tagline:** search the project for `Reyco Group` and replace.
- **Text on a page:** open the matching file in `src/pages/` (e.g. `History.jsx`)
  and edit the text near the top — most content sits in simple arrays.
- **Numbers / stats:** edit the `stats` / `facts` arrays in `Home.jsx` / `Company.jsx`.
- **Board, milestones, capabilities, certs:** edit the arrays at the top of the
  matching page file.
- **Images:** all photo URLs live in one file — `src/images.js`. The current
  photos are free-to-use Unsplash images. To use your own: drop files in the
  `public/` folder and point the URLs in `src/images.js` at them (e.g.
  `/floor.jpg`). For production, downloading and self-hosting in `public/` is
  recommended so the site never depends on Unsplash. Slots still showing a
  styled placeholder block contain `<span className="tag">[ IMAGE — … ]</span>`
  — replace with `<img className="cov" src="/your.jpg" alt="…" />`.
- **Logo ticker brands:** the rolling logos on the homepage live in `src/pages/Home.jsx`
  (the `logos` array) and the placeholder wordmarks are in `public/logos/`. These
  are representative of the retail tier Reyco is built to supply, not a claim of
  existing clients. Only display a brand as a client logo if it is a real,
  consented customer, and replace the placeholder wordmark with that brand's
  authorised logo file. Showing logos of brands you do not work with can be a
  trademark and false-endorsement problem, so keep this list honest.
- **Colours / fonts:** all design tokens live at the top of `src/index.css`
  (`:root { --indigo / --selvedge / --calico ... }`).

## SEO — set your real domain (important)
The site ships with full SEO wiring (per-page titles, meta descriptions,
keywords, Open Graph + Twitter cards, canonical URLs, JSON-LD structured data,
`robots.txt` and `sitemap.xml`). Before launch, point it at your real domain:

1. `src/seo.jsx` — change `SITE.url` to your domain (e.g. `https://www.reyco.com`).
2. `public/sitemap.xml` and `public/robots.txt` — replace `www.reycogroup.com`
   with your domain (find & replace).
3. `index.html` — replace `www.reycogroup.com` in the canonical/OG tags.
4. Add a social share image at `public/og-cover.jpg` (1200×630) — this is what
   shows when your link is shared on LinkedIn/WhatsApp/X.
5. After deploying, submit your sitemap in Google Search Console
   (`https://yourdomain.com/sitemap.xml`).

### Writing blog articles (for SEO)
Open `src/posts.js` and copy an existing entry. Each post has a `slug` (the URL),
`title`, `excerpt`, `category`, `date`, `readTime`, `keywords`, and a `body`
array of blocks: `{ h: 'Heading' }`, `{ p: 'Paragraph' }`, or `{ list: [..] }`.
Add the new slug to `public/sitemap.xml` so search engines find it.

> Note: this is a single-page app, so search engines render it with JavaScript
> (Google does this well). For the strongest possible SEO you can later add
> pre-rendering, but the current setup covers modern best practice for a static
> React site.


Open `src/pages/Contact.jsx`. Create a free form endpoint at https://formsubmit.co
using your email, then replace the form so it posts there:

```jsx
<form action="https://formsubmit.co/your@email.com" method="POST">
```
…and delete the demo `handleSubmit` function and the `onSubmit={handleSubmit}` prop.
