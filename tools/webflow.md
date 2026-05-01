# Webflow

Webflow is the no code web design tool that produces real, performant, semantic HTML / CSS — the kind a hand coder would write. The 2026 AI features (Webflow AI, Optimize, Apps with AI hooks) layered on top of that foundation have made it the no code platform for marketing sites where the engineering quality of output matters.

## What it actually is

A visual website builder, hosting platform, and now AI augmented design environment. You design in a browser; Webflow generates HTML / CSS / JS; it's hosted on Webflow's CDN or exported to static files. AI features include:
* **Webflow AI** — prompt → site or section generation.
* **Optimize** — AI driven A/B testing and personalisation.
* **AI Apps** — extensions in the marketplace that bring AI into the editing flow.

## Setup

1. Sign up at [webflow.com](https://webflow.com).
2. Free tier: 2 projects on webflow.io subdomains.
3. Pricing: Site plans (CMS $29/mo, Business $49/mo) for hosting custom domains; Workspace plans for teams.
4. Click New Site → choose template or blank canvas.
5. (AI) "Generate Site" prompt → Webflow AI proposes a site structure; you refine in the visual editor.

## How I use it day to day

* **Honest:** I've used Webflow on multiple marketing sites; not a current daily user.
* **Marketing pages.** Where engineering polish matters and design freedom is the priority. Webflow's output is faster than what I'd hand code.
* **CMS for blogs / case studies.** Webflow's CMS is solid; collections + dynamic templates work like a static site generator with a GUI.
* **Webflow AI** for first draft sections. "Generate a pricing section with three tiers." Output is on style; I refine.
* **Interactions** for animation. Webflow's interaction system is the closest GUI based animation tool to writing your own JS / CSS animations.
* **Export** to static files when needed. For production hosting elsewhere (Vercel, Netlify), the exported HTML is clean.

## Gotchas

* Steep learning curve. Webflow has the box model exposed — great for designers who know CSS, frustrating for non technical users.
* Pricing per site can add up. A handful of small sites costs more than self hosting a Next.js project.
* CMS API is solid but rate limited; for high traffic dynamic content, evaluate carefully.
* AI features are present but smaller than the full visual editor. Webflow is design first, AI assisted; not "prompt → site."
* Some advanced features (custom code, Logic, Memberships) are higher tier locked.

## Pointers

* [webflow.com](https://webflow.com)
* For prompt → React app: [v0.md](v0.md), [lovable.md](lovable.md), [bolt_new.md](bolt_new.md).
* For prompt → site (more abstracted, less control): [Framer](https://www.framer.com).
* The Webflow University ([university.webflow.com](https://university.webflow.com)) is one of the better free design + dev courses available.
