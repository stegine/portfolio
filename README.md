# Portfolio Website

Next.js portfolio with i18n (EN/DE), dark theme, Tailwind CSS.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Routes: `/en`, `/de`.

## Build

```bash
pnpm build
pnpm start
```

## Environment

- `NEXT_PUBLIC_SITE_URL` – Production URL for hreflang, canonical, sitemap and robots. **Set this for production** (e.g. `https://stegine.com`).
- `NEXT_PUBLIC_BASE_PATH` – Optional base path (e.g. for GitHub Pages subpath).

## SEO

- **Sitemap:** `/sitemap.xml` (generated at build).
- **Robots:** `/robots.txt` (allows all, points to sitemap).
- **Metadata:** Title, description, Open Graph, canonical and hreflang (when `NEXT_PUBLIC_SITE_URL` is set).
- **Structured data:** Person JSON-LD on the page for rich results.

## Content

- `content/` – Meta, skills, languages, projects, experience.
- `messages/en.json`, `messages/de.json` – UI and section texts.

## Theme (colors)

Defined in `app/globals.css`:

- **background:** `#0f172a`
- **foreground:** `#f1f5f9`
- **accent:** `#10b981`
- **accent-hover:** `#34d399`
- **muted:** `#94a3b8`
- **card:** `rgba(30, 41, 59, 0.6)`
- **border:** `rgba(148, 163, 184, 0.2)`

Fonts: Syne (headings), DM Sans (body), Geist Mono (mono).
