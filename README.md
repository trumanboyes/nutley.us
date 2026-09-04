# nutley.us

A civic guide to Nutley, New Jersey — aerial film of the Passaic riverfront, fading as you scroll.

## GitHub Pages

The site is static HTML in this repo. To publish:

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
   or **GitHub Actions** (workflow is in `.github/workflows/pages.yml`)

Until the custom domain is attached it will be at:

https://trumanboyes.github.io/nutley.us/

## Custom domain `nutley.us`

`CNAME` is already in the repo. In your DNS:

- `CNAME` for `nutley.us` and `www` → `trumanboyes.github.io`

Then in Pages settings, set Custom domain to `nutley.us` and enable HTTPS.

## Contents

Parks, history, neighborhoods, schools, transit, and a township directory. This is an independent guide, not the official site ([nutleynj.org](https://www.nutleynj.org/)).
