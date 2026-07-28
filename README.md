# OLIJE — Next.js Website + Admin

A production-ready Next.js 14 (App Router, TypeScript, Tailwind) build of the OLIJE
marketing site, with a built-in admin panel at **/admin** for managing every editable
section — services, industries, news, job openings, leadership, offices, and the
homepage hero — without touching code.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site works immediately, using static placeholder
content — you don't need the admin connected to develop or deploy.

## Turning on the admin

**This is already connected** — `.env.local` in this zip is pre-filled with your
project:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=9s8f70m1
NEXT_PUBLIC_SANITY_DATASET=production
```

The admin at `/admin` is a [Sanity](https://sanity.io) Studio embedded directly in
this app — no separate app to host, it ships with the site.

Two things to double-check before it works end-to-end:

1. **Dataset name.** `production` is assumed above since that's Sanity's default
   when you create a project. Confirm at **sanity.io/manage → your project → Datasets**.
   If yours is named differently, change `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`
   to match. If no dataset exists yet, create one:
   ```bash
   npx sanity@latest dataset create production
   ```
2. **CORS origins.** Sanity blocks browser requests from domains it doesn't
   recognize. At **sanity.io/manage → your project → API → CORS Origins**, add:
   - `http://localhost:3000` (for local dev) — allow credentials
   - your production domain once deployed (e.g. `https://olije.com`) — allow credentials

Then:

```bash
npm install
npm run dev
```

Visit **http://localhost:3000/admin** and log in with your Sanity account (email
or Google) — that login *is* the access control, no separate password system to
build or maintain. Every section is organized into a plain-language menu: Home
Page, Site Settings, Services, Industries, Investor Portfolio, Newsroom, Careers
— Openings, Leadership Team, Offices.

When you deploy (see below), set the same three `NEXT_PUBLIC_SANITY_*` variables
in your host's environment settings — `.env.local` itself isn't deployed (it's
gitignored on purpose, since env files shouldn't go in version control).

**If the project ID or dataset is ever wrong, `/admin` shows a short "not
connected yet" screen instead of crashing** — the rest of the site is
unaffected either way, since every page falls back to the static content in
`lib/content.ts` whenever Sanity can't be reached.


### What's editable right now vs. what's still code

Editable from `/admin`: home page hero (headline, subtext, stats) and intro
copy, all 9 services and their "what we deliver" lists, all 8 industries, the 5
investor portfolio items, news articles, job openings, leadership team members,
office locations, and site-wide settings (contact email, footer tagline,
sustainability panel copy).

Still code-only (by design — these are structural/legal, not day-to-day content):
page layout and design, navigation structure, the Sustainability and About "Core
Values" long-form sections, legal/compliance boilerplate. Adding a new *editable*
field to any of these is a matter of adding one field to the relevant schema in
`sanity/schemaTypes/` and reading it in the page — see `lib/content.ts` for the
pattern used everywhere else.

## Deploy on Netlify (GitHub → Netlify)

This project includes a `netlify.toml` already configured correctly — build
command `next build`, and the `@netlify/plugin-nextjs` plugin (which handles
publishing automatically; **do not** add a manual `publish = "out"` line, that
directory doesn't exist for this app and will cause a 404 on every page).

1. Push this project to a GitHub repo (see commands below).
2. On [app.netlify.com](https://app.netlify.com), **Add new site → Import an
   existing project → GitHub**, pick the repo. Netlify will detect
   `netlify.toml` automatically — leave build settings as shown, don't override them.
3. Before or after the first deploy, go to **Site configuration → Environment
   variables** and add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=9s8f70m1
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
4. Add your Netlify site's URL to Sanity's CORS origins (sanity.io/manage →
   your project → API → CORS Origins → add `https://<your-site>.netlify.app`,
   allow credentials) — otherwise `/admin` loads but can't read/write content.
5. Trigger a deploy (pushing to `main` does this automatically going forward).

## Deploy (GitHub → Vercel)

1. **Push to GitHub.** From this unzipped folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
   Create a new empty repo on GitHub (no README/license, so it stays empty), then:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel.** Go to **vercel.com/new**, sign in, and select the
   repo you just pushed. Vercel auto-detects Next.js — no build settings to
   change.
3. **Add environment variables.** Before or right after the first deploy, go
   to the Vercel project → **Settings → Environment Variables** and add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=9s8f70m1
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
   (Same values as your `.env.local` — Vercel doesn't read that file, since
   it's gitignored on purpose and never gets pushed.)
4. **Add your Vercel domain to Sanity's CORS origins** — sanity.io/manage →
   your project → API → CORS Origins → add `https://<your-project>.vercel.app`
   (and your custom domain, once you attach one), with credentials allowed.
   Skip this and `/admin` will load on the live site but content
   fetches/saves will fail.
5. Deploy. Every push to `main` after this redeploys automatically.

Prefer the CLI instead of the dashboard:
```bash
npm i -g vercel
vercel        # first deploy, links the project
vercel --prod # subsequent production deploys
```

Netlify, Railway, and any Node host also work (`npm run build` then `npm start`)
if you'd rather not use Vercel.

## What's real vs. stubbed

**Real and working:**
- Every route in the brief (Home, About + Leadership, Services hub + 9 detail
  pages, Industries hub + 8 sector pages, Sustainability, Investors with an
  interactive Portfolio Business Matrix, Newsroom, Careers, Contact)
- The `/admin` content management panel described above
- Responsive layout, mobile nav drawer, scroll-reveal animations, mega-menus
- SEO metadata, `sitemap.xml`, `robots.txt`
- Contact/Careers/Investors forms — they POST to `/api/contact`, validate
  server-side, and log the submission

**Needs your input before going fully live:**
1. **Email delivery.** `app/api/contact/route.ts` validates and logs
   submissions but doesn't send mail yet — there's a `TODO` with a ready-to-use
   Resend example. Install `resend` (or `nodemailer`), add an API key as an
   environment variable, and uncomment the block.
2. **Photography.** This environment has no internet access, so hero and
   feature sections use CSS gradients/textures as stand-ins for photography.
   Swap them for real images: put files in `/public`, replace the relevant
   `<div style={{ backgroundImage: ... }}>` in `app/(site)/page.tsx` with Next's
   `<Image>` component. (The admin's `teamMember` schema already supports a
   photo upload for leadership headshots.)
3. **Leadership bios.** Ships with role-based placeholders (no invented
   names/photos) — add real people via `/admin` → Leadership Team.
4. **Analytics / maps.** No Google Maps or analytics script is wired in —
   add your API keys and the relevant `<script>`/component when ready.

## Project structure

```
app/
  (site)/            all public marketing routes (share Header/Footer)
    page.tsx          home
    about/, services/, industries/, sustainability/,
    investors/, news/, careers/, contact/
  admin/[[...tool]]/  embedded Sanity Studio (the admin panel)
  api/contact/        form submission endpoint
components/          shared UI (Header, Footer, Button, PageHero, CTABand, ...)
lib/
  data.ts             static fallback content (used when Sanity isn't configured)
  content.ts           the ONLY place pages should read content from — fetches
                        from Sanity when configured, else returns the static data
sanity/
  schemaTypes/         one file per admin content type
  lib/structure.ts      the admin's organized menu (Studio "desk structure")
  env.ts                reads your project ID / dataset from env vars
sanity.config.ts        Studio config (branding, plugins), mounted at /admin
```

## Notes on recent fixes

- **Header contrast bug** — previously the header was fully transparent with
  navy text before scrolling, which was invisible against the dark hero
  behind it. `components/Header.tsx` now always carries a translucent dark
  scrim with light text by default, switching to a solid light bar with navy
  text once scrolled.
- **Mobile navigation** — the burger button previously had no behavior. It
  now opens a full-screen drawer with all nav links.
- **Width/overflow** — `app/globals.css` caps `html`/`body` at `100vw` and a
  shared `.container-wrap` class is used everywhere so no section can create
  a horizontal scrollbar.
