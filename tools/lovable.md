# Lovable

Lovable is the tool that made "vibe coding" a real workflow rather than a meme. You describe an app in plain English, hit go, and a couple of minutes later you have a working URL with auth, a database, and a UI. The output isn't always production grade, but the floor it raised is striking — solo founders are shipping real products this way.

## What it actually is

A web based AI app builder. You give it a prompt; it generates a full stack React + Supabase application, hosts it, and lets you iterate by chatting (or by editing the visual UI directly). Code is real React, real Postgres, exportable to GitHub. Native integrations include Supabase auth, Stripe, and a small library of common services.

## Setup

1. Go to [lovable.dev](https://lovable.dev), sign up.
2. Click New Project. Type a description: "A meal planning app where users save recipes, get a weekly plan, and share with friends."
3. Wait ~60 seconds. You get a working app at a `*.lovable.app` URL with a default Supabase backend.
4. Iterate. Either chat ("Add a search bar," "Make the cards bigger on mobile") or use Visual Edit to point and click.
5. Connect GitHub at any time to sync the underlying code. From there you can leave Lovable entirely.

## How I use it day to day

* **Throwaway prototypes.** A demo for a stakeholder by lunchtime. Lovable is unbeatable for this.
* **Real MVPs.** I've shipped two small SaaS tools end to end on Lovable, including payments. Both took a weekend.
* **Visual Edit for design polish.** Hover, click, change copy or color. Faster than describing the change in chat for small UI tweaks.
* **Agent Mode** for changes that span files. "Add a notification system across the app." It plans the work and applies edits.
* **Export to GitHub** when complexity grows. Beyond a certain size, editing the code directly in Cursor or Windsurf is faster than chatting.

## Gotchas

* The first few prompts shape the architecture; if you start with the wrong assumption ("use a single users table for auth") you're often better off restarting than refactoring.
* Supabase is the default backend. You can wire other services, but the integration is tightest with Supabase. If your stack is GCP or AWS first, fight upstream.
* Pricing is per credit; complex projects can burn through a Pro plan ($25/mo, ~100 messages) quickly. Watch the credit counter.
* The generated code is real but opinionated. Spend an hour reading what it built before adding ten features on top.
* Hosting is fine for prototypes, not for production. Either move to Vercel/Netlify or stay aware of the tradeoffs.

## Pointers

* Docs: [docs.lovable.dev](https://docs.lovable.dev)
* Cousins: [bolt_new.md](bolt_new.md) (faster demos), [v0.md](v0.md) (UI only, Next.js native), [replit_agent.md](replit_agent.md) (more transparent code).
* The Lovable community Discord is genuinely the best learning surface — others' prompts and recoveries.
