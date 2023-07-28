# My Website
Deployed on Cloudflare Pages

## Build
```console
npm install
```
Might need to install wrangler globally and/or add an account (at least to publish if desired)

## Run commands
```console
npm run dev:wrangler
```
Allows for a local Cloudflare Worker to run the necessities for the server instance (HOT RELOAD not working right now)

## Deployments
Done automatically with Cloudflare pages' branch management

## Features implemented
- [x] Projects tab / page
  - [x] Specific project page
- [x] Technologies tab / page
  - [x] Specific Technologies page
- [x] About this website tab
- [x] About me (entry page)
- [x] Linked pages (projects with technologies and vice versa)
- [x] Dark mode
- [x] French English switch
- [x] Cookies
- [x] Socials

## TODO
- [ ] Fix hot reload
- [ ] Custom 404
- [ ] Custom Domain
- [ ] Verify scaling on mobile / tablet / small screens
- [ ] Verify if the static assets are a part of Cloudflare pages' and not the functions

## Done
- [x] Grids in with the last ones not centered /tech/$techId
