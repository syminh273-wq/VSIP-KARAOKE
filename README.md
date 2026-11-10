# Nhà Hàng Hầm Rượu & Karaoke VSIP — website

Next.js 15 project, exported as a fully static site (no server needed).

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build for hosting

```bash
npm run build        # writes the finished website to ./out
npm start            # preview ./out at http://localhost:3000
```

Upload the **contents of `out/`** to any static host.

## Hosting options

| Host | How |
|---|---|
| **Vercel** | Push this folder to GitHub → "Add New Project" on vercel.com → import. Defaults work. |
| **Netlify** | Build command `npm run build`, publish directory `out`. Or drag-and-drop the `out` folder on app.netlify.com/drop. |
| **Cloudflare Pages** | Build command `npm run build`, output directory `out`. |
| **cPanel / shared hosting** | Run `npm run build`, then upload everything inside `out/` to `public_html/`. |
| **VPS (Nginx)** | Copy `out/` to the server and point `root` at it. |

> The videos in `public/vid/` total ~70 MB. Fine on Vercel, Netlify and Cloudflare, but some hosts limit single
> files to 25 MB, and every file here is under 10 MB.

## Where to edit

| What | File |
|---|---|
| Text, prices, phone numbers, links | `app/markup.html` |
| Styles / colors / layout | `app/globals.css` |
| Interactive behaviour (sliders, menu, language switch, lightbox…) | `public/js/site-01.js` … `site-08.js` (loaded in order) |
| English / Chinese translations | `public/js/site-08.js` |
| Page title, description, favicon | `app/layout.tsx` |
| Images and videos | `public/img/`, `public/vid/` |

Pages use hash links: `/#site` (home), `/#restaurant`, `/#karaoke`.
