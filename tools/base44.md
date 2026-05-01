# Base44

Base44 is the prompt to app builder that emphasises "real applications" over "demos." The output is full stack, with database, auth, payments, file storage as native primitives. The model: type a description, Base44 generates the app, runs it, gives you a URL. What sets Base44 apart from Lovable / Bolt is the integrations focus — many production primitives are built in rather than wired manually.

## What it actually is

A web based AI app builder. Generates full stack web apps from prompts. Primitives include user auth, database, file uploads, email, scheduled tasks, third party API calls. Hosting is included. Code can be exported to GitHub for self hosting / further development.

## Setup

1. Go to [base44.com](https://base44.com), sign up.
2. Free tier: 25 generations/month.
3. Pricing: Builder $20/mo (250 generations), Maker $50/mo (1000), Pro $100/mo (3000).
4. Type a prompt: "A book club app where members join, suggest books, vote on monthly picks, and chat about what they're reading."
5. Wait ~2 to 5 minutes. Working app at a *.base44.app URL.
6. Iterate via chat or visual editor; export to GitHub when ready.

## How I use it day to day

* **Honest:** I've tested Base44 against Lovable and Bolt; not a daily tool for me.
* **Internal tools with auth + DB.** A team needs a small CRUD app with logins; Base44's defaults handle the auth + DB plumbing.
* **Prototypes with payments.** Stripe integration is a primitive; not bolt on. For "is this idea worth building," Base44 with payments tested in 30 minutes.
* **As an alternative to Lovable.** Same job, slightly different defaults. The choice is mostly preference; both are credible.
* **Export and continue.** When the project graduates beyond the AI builder phase, GitHub export and continue in Cursor / Claude Code.

## Gotchas

* The "AI builder" category moves fast; Base44 vs Lovable vs Bolt vs Replit vs others is a moving comparison.
* Generated code is real but opinionated. Read what was built before adding ten features.
* Pricing per generation (each prompt is one). Heavy iteration burns the quota.
* Hosting on Base44 is fine for prototypes; production scale apps may want migration.
* For pure UI generation in an existing Next.js app: [v0.md](v0.md) is more focused.

## Pointers

* [base44.com](https://base44.com)
* Comparable: [lovable.md](lovable.md), [bolt_new.md](bolt_new.md), [replit_agent.md](replit_agent.md).
* For UI components only: [v0.md](v0.md).
* For more transparent code IDE workflow: [replit_agent.md](replit_agent.md) (glass box).
