# Gym website template

A React + Vite + Tailwind gym website (Home, Services, About, Packages,
Contact). Built to be reused for multiple gyms from the same codebase —
most of what makes a deployment "belong" to one gym lives in `.env` and a
handful of image files, not in the code.

## Quick start

```bash
npm install
cp .env.example .env   # then fill in this gym's details
npm run dev
```

## Setting up a new gym

To deploy this codebase for a different gym, four things change. Nothing
else in the code needs to be touched.

### 1. `.env`

Copy `.env.example` to `.env` and fill in every value: brand name, city,
phone numbers, email, address, opening hours, social links, Google Maps
link, and the site URL/SEO description. See the comments in
`.env.example` for details on each field.

All variables are read in `src/data/siteInfo.js` and used everywhere the
brand name/contact info/location appears — the header/footer logo text,
page titles and meta descriptions, the hero section, the contact page,
and social share previews (Open Graph/Twitter tags in `index.html`, via
Vite's built-in `%VITE_X%` HTML templating).

Note: variables **must** be prefixed with `VITE_` (a Vite requirement).

**`.env` is gitignored and never gets pushed to your git repo.** If your
host builds from git (Netlify, Render, Vercel, etc.), it will *not* see
your local `.env` file automatically — you must also add the same
variables in that host's dashboard (e.g. Netlify: Site configuration →
Environment variables) for each gym's deployment. This is the actual
place each deployment's brand identity comes from in production;
`.env` is only for your own local `npm run dev`/`npm run build`.

If a variable referenced in `index.html` (`VITE_BRAND_NAME`,
`VITE_SITE_TITLE`, `VITE_META_DESCRIPTION`, `VITE_SITE_URL`) is missing
at build time, `vite.config.js` substitutes a generic fallback ("Gym
Website", etc.) instead of failing the build — so a forgotten variable
means bland placeholder text on that page, not a broken deploy. Still,
don't rely on the fallback: set the real values on your host so the
site actually shows the right gym's name.

### 2. Images

Drop the new gym's images into `public/`, keeping these exact filenames
(except the logo, which is configurable — see below):

| File | Used for |
|---|---|
| `public/hero-banner.png` | Homepage hero banner (background + diagonal panel). |
| `public/why-conquest.png` | "Why [Gym]" section photo on the homepage. |
| `public/OurTeam.png` | Only needed if `VITE_TEAM_LAYOUT="photo"` (see below) — a single group photo for the "Our Trainers" section. |
| `public/favicon.svg` | Browser tab icon. Edit the two hex colors inside to match the new brand's colors. |

**Logo** works differently: since you're keeping multiple gyms' logos in
the same `public/` folder side by side (e.g. `Logo-Conquest.png`,
`Logo-IronPeak.png`), the *filename* isn't fixed — instead, set
`VITE_LOGO_PATH="/Logo-IronPeak.png"` in `.env` to point at the right
one for this deployment. Defaults to `/Logo.png` if unset. Should be a
black icon on a transparent background — it's inverted to white via CSS
for the dark theme.

Other imagery (services, about page, packages, team headshots) comes from
`src/data/images.js`, which centralizes a set of stock Unsplash URLs —
swap those for the gym's own photos if available, or leave them as
generic stock placeholders.

### 3. Brand color

Accent color isn't environment-driven (Tailwind needs concrete values at
build time). Edit the `accent` color scale in `tailwind.config.js`:

```js
accent: {
  400: '#f0c419', // hover/lighter shade
  500: '#e5ba03', // primary brand color
  600: '#c49a02', // darker shade
},
```

### 4. "Our Trainers" section design

The trainer section on the Home and About pages has two layouts,
switched via `VITE_TEAM_LAYOUT` in `.env`:

- `"cards"` (default) — a grid of individual trainer cards, driven by
  `src/data/team.js` (name, role, photo per trainer).
- `"photo"` — a single team photo instead, using `public/OurTeam.png`.

No code changes needed to switch — just change the env value and rebuild.

### 5. Content that isn't simple text

These stay as editable data files per deployment, since they're
structured content, not flat brand strings:

- `src/data/services.js` — service list
- `src/data/packages.js` — membership tiers/pricing (currently AED)
- `src/data/team.js` — trainer names/roles/photos
- `src/data/testimonials.js` — member testimonials (placeholder content
  until the gym provides real reviews — flagged with a code comment)

## Deploying on Netlify

`netlify.toml` disables Netlify's build-time secrets scanner
(`SECRETS_SCAN_ENABLED = "false"`). This is intentional: every `.env`
variable here is public brand/contact info meant to be shown on the
site, not a real secret, but Netlify's scanner will still flag short
generic values (a city name, `"photo"`, a day of the week) as
false-positive "leaked secrets" and fail the build otherwise, since
those same words legitimately appear elsewhere in the code too.

You still need to add this gym's `VITE_*` variables under **Site
configuration → Environment variables** in the Netlify dashboard — see
the `.env` section above for why.

## Verifying a new brand before deploying

After editing `.env`, run a build and grep for the old brand name to make
sure nothing was missed:

```bash
npm run build
grep -r "OldBrandName" dist/
```

This should return nothing. The included `_redirects` file (Netlify/
Render) handles client-side routing so page refreshes on routes like
`/services` don't 404.

## Stack

React 18, React Router 6, Vite 5, Tailwind CSS 3. No backend — the
contact form validates client-side and shows a success message but does
not send anywhere; wire it up to a form service or backend if needed.
