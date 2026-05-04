# Replit Agent: glass-box AI app builder in a cloud IDE

Replit Agent sits in the app builders category alongside [Lovable](lovable.md), [Bolt.new](bolt_new.md), and [v0](v0.md), with the trade of abstraction for a real visible repo. Replit Agent is the AI builder for people who want to *see the code*. Where Lovable and Bolt abstract the underlying repo, Replit gives you a glass box: a real cloud IDE, a real Linux container, real `git`, and an agent that types into both chat and the file tree. Useful when you're learning, when you're debugging, or when you don't trust the magic.

## What it actually is

Replit's AI agent (Agent 3 as of 2026), embedded inside the Replit cloud IDE. Agent 3 builds full apps, tests them in a real browser environment, and runs background tasks autonomously. Underneath: standard Replit cloud workspaces, with database, deployment, and secrets management you can poke at.

## Setup

1. Go to [replit.com](https://replit.com), sign up.
2. Free tier exists but Agent 3 is paywalled. Replit Core ($25/mo) is the entry point; Pro and Teams are higher.
3. Click Create → Agent. Type a prompt: "A Discord bot that lets a server vote on a movie to watch tonight."
4. Agent 3 spins up a workspace, installs deps, writes code, runs the bot. You watch in real time.
5. Iterate by typing in the Agent chat panel, or jump into the file tree and edit yourself.

## How I use it day to day

* **Bots and small server side scripts.** Long lived processes are Replit's home turf. The "Deployments" feature gives me a public URL or a scheduled job in a couple of clicks.
* **Apps where I want to actually see the code.** When I'm learning a stack or debugging something Lovable would obscure, Replit's transparency wins.
* **Background tasks.** Agent 3 can run autonomously while I do other things - useful for tasks that take 20+ minutes (large refactors, test suite buildouts).
* **Pair with Replit's database.** Built in key/value store and Postgres. No separate Supabase setup needed for early stages.
* **Multiplayer editing** for paired sessions with another developer or with the agent itself. Real time cursors, like Google Docs for code.

## Gotchas

* The cloud workspace is convenient until it isn't. SSH access is paid; for power users with strong local setups, Replit's environment can feel limiting.
* Agent 3 is more autonomous than its predecessors. It will spend tokens (and dollars) on tasks; watch the dashboard.
* Some workflows (heavy native binaries, custom Linux configs) are awkward. Replit is best for "Node, Python, common CLIs" stacks.
* The generated code is real but the tests it writes are sometimes lazy. Read them.
* Deployment defaults are sensible (Replit Deployments, custom domains, secrets, environment variables) but cost money beyond a small free quota.

## Alternatives

* If you want a polished full-stack abstraction with hosting and Supabase built in, [Lovable](lovable.md) is the easier path.
* If you want the fastest browser-only demo, [Bolt.new](bolt_new.md) ships a shareable link in minutes.
* If you're a Next.js team that lives in shadcn/ui, [v0](v0.md) is the right shape.
* If you want to stay in your local editor with an autonomous agent, [Claude Code](claude_code.md) or [Devin](devin.md) handle the same job.

## FAQ

### Is Replit Agent free?

The Replit free tier exists but Agent 3 is paywalled. Replit Core is $25/mo and the entry point; Pro and Teams scale up. You'll also pay deployment costs beyond a small quota.

### Replit Agent vs Lovable - which one?

Different stances. [Lovable](lovable.md) abstracts the code and gives you a polished app fast. Replit Agent shows you the code, the container, and the git history - useful when you're learning or debugging. Pick Lovable for results, Replit for transparency.

### Can I export my code from Replit?

Yes - the code is portable. Push to GitHub and deploy elsewhere if you outgrow Replit's hosting. The Replit-specific bits (database connections, secrets) need rewiring on a new host.

### What can Agent 3 actually build?

Long-lived server-side things are its home turf - Discord bots, scheduled scripts, small web apps. Heavy native binaries or custom Linux configs are awkward; Replit is best for "Node, Python, common CLIs" stacks.

## Pointers

* Docs: [docs.replit.com](https://docs.replit.com)
* Agent docs: [replit.com/agent](https://replit.com/agent)
* For browser only demos: [bolt_new.md](bolt_new.md). For abstracted full stack: [lovable.md](lovable.md).
* If you outgrow Replit's hosting, export to GitHub and deploy elsewhere - the code is portable.
