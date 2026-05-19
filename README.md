# Nullspace — Landing Page

Dark-mode techy SaaS landing page. Static HTML/CSS/JS — no build step, no dependencies.

## Preview

Just open `index.html` in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# or use any static server
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
nullspace-landing/
├── index.html      # Markup
├── styles.css      # All styles, CSS variables at top
├── script.js       # Counter animation, parallax, smooth scroll
└── README.md
```

## Customize

- **Product name**: search `Nullspace` / `NULLSPACE` in `index.html` and replace
- **Colors**: edit the `:root` block at the top of `styles.css` — the accent is `--acid: #c6ff3a`
- **Fonts**: swap the Google Fonts link in `index.html` and the `--display` / `--mono` variables
- **Copy**: every section is plain HTML, easy to edit

## Push to GitHub

From this folder:

```bash
# 1. Create a new repo on github.com (don't initialize with README)
#    Let's say the repo URL is git@github.com:YOURUSER/nullspace-landing.git

# 2. Initialize and push
git init
git add .
git commit -m "initial commit: nullspace landing"
git branch -M main
git remote add origin git@github.com:YOURUSER/nullspace-landing.git
git push -u origin main
```

### Deploy free with GitHub Pages

After pushing:

1. Open the repo on github.com → **Settings** → **Pages**
2. Under **Source**, pick branch `main` and folder `/ (root)`
3. Save. Your site goes live at `https://YOURUSER.github.io/nullspace-landing/` within ~1 minute

Or drop the folder into Vercel / Netlify / Cloudflare Pages — same result, custom domains supported.

## License

MIT. Use it, fork it, ship it.
