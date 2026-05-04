# Bolt.new: browser-based AI IDE for instant full-stack demos

Bolt sits in the app builders cluster alongside [Lovable](lovable.md), [v0](v0.md), and [Replit Agent](replit_agent.md), but unique in running a full Node runtime entirely in the browser via WebContainers. Bolt is the fastest path from "I have an idea" to "here's a working URL." It's the tool I open when a friend asks me to look at their startup pitch and I want to see what their thing might feel like before reading the deck. Five minutes, a working demo, real React and Tailwind under the hood.

## What it actually is

A browser based AI IDE built by StackBlitz, running on WebContainers (a full Node runtime in the browser). You prompt it; it generates a full stack project, runs it in the browser, and lets you keep iterating. Default models are Claude Sonnet and GPT‑5.5; you can pick.

## Setup

1. Go to [bolt.new](https://bolt.new). No signup required to try.
2. Paste a prompt: "A markdown notes app with a sidebar list and a main editor. Use IndexedDB for persistence."
3. Wait ~60 seconds. The project generates, dependencies install, and the preview pane shows the running app.
4. Iterate by chatting or by editing the code directly in the in browser editor.
5. (Optional) Sign in with GitHub to deploy to Netlify, Cloudflare, or push the code to a repo.

## How I use it day to day

* **First take demos.** Faster than Lovable for a single prompt single page demo. The WebContainer setup means there's no backend to provision; everything runs locally in the browser.
* **Full stack mockups.** Bolt scaffolds Express, Next.js, Vite, etc. fluently. I've used it for everything from CRUD apps to small games.
* **Inspecting the generated code.** The in browser editor is real and good. I read what was generated, tweak by hand, watch it hot reload.
* **One off scripts.** "Build me a Tailwind playground that previews three components side by side at different breakpoints." Five minutes, done.
* **Deploys** with one click; no `git push` required for a static demo.

## Gotchas

* WebContainer means no native binaries. No Docker, no Postgres in process - for a real database you wire up an external one (Supabase, Neon, PlanetScale).
* Token usage is per message; complex projects hit limits on the free tier within ~20 messages. Pro is $20/mo.
* Long sessions can get sluggish; the WebContainer is doing real work in your browser tab.
* Generated code quality varies by stack. Next.js / React / Tailwind is bulletproof; less common stacks (Astro, Remix v3, Solid) are inconsistent.
* Less opinionated about backend than Lovable. This is a feature for power users, a friction point for non technical founders.

## Alternatives

* If you want managed hosting plus Supabase + auth as defaults, [Lovable](lovable.md) is the more opinionated full-stack pick.
* If you only need UI components inside an existing Next.js codebase, [v0](v0.md) is more focused.
* If you want a transparent IDE you can SSH into and a real backend container, [Replit Agent](replit_agent.md) is the glass-box option.
* If integrations like payments and auth as native primitives matter, [Base44](base44.md) bakes them in.

## FAQ

### Is Bolt.new free?

There's a free tier but token usage is per message and complex projects hit limits within ~20 messages. Pro is $20/mo for serious iteration.

### Bolt vs Lovable - which one?

Different defaults. Bolt is faster to a single-page demo and gives you a real in-browser editor; [Lovable](lovable.md) is more opinionated about backend (Supabase + auth + hosting baked in). Bolt for prototypes; Lovable for "I want to ship this."

### Can Bolt run a real database?

Not in-process - WebContainer can't run native binaries like Postgres. You wire up an external one (Supabase, Neon, PlanetScale). For a database baked into the builder, [Lovable](lovable.md) is the path.

### What models does Bolt use?

Default is Claude Sonnet and GPT-5.5; you can pick. Sonnet is what I default to for code generation quality.

### Can I deploy from Bolt?

Yes - one-click deploys to Netlify and Cloudflare; or push the code to a GitHub repo and deploy from there. No `git push` required for a static demo.

## Pointers

* [bolt.new](https://bolt.new), [docs.stackblitz.com](https://developer.stackblitz.com/platform/webcontainers/browser-config)
* If you want managed hosting + a real database baked in: [lovable.md](lovable.md).
* If you want UI only inside an existing Next.js codebase: [v0.md](v0.md).
* If you want a transparent IDE you can ssh into: [replit_agent.md](replit_agent.md).
