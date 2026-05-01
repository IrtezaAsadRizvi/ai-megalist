# Devin

Devin is what happens when you take a coding agent and put it on a remote machine with a browser, a shell, and a planner, then leave it alone for 30 minutes. The bar Cognition set was high; Devin is the closest thing to "fire and forget software work" we have, and it's still rough around the edges in ways that matter.

## What it actually is

A cloud based autonomous engineer. You give it a task ("implement the spec in this Linear ticket"); it spins up a sandbox, plans, writes code, runs tests, debugs failures, and opens a PR. There's a Slack integration and a web app. Pricing is metered per ACU (Agent Compute Unit), roughly tied to wall clock time.

## Setup

1. Sign up at [devin.ai](https://devin.ai). Cognition gates new accounts; team plans get priority.
2. Connect GitHub: Devin needs repo access to clone, push branches, open PRs.
3. (Optional) Connect Slack: invite the Devin bot, mention it to assign work.
4. (Optional) Connect Linear / Jira so Devin can pick up tickets directly.
5. Start with "Devin Wiki" — let it index the repo first; it dramatically improves later results.

## How I use it day to day

* **Long, well specified tasks.** "Add OAuth Google login to the existing email auth flow. Use the patterns in `auth/email/`. Tests required." Devin can run for an hour and come back with a PR.
* **Repetitive maintenance.** Bumping deps, fixing flaky tests, migrating syntax (JS to TS). I queue these and check back later.
* **Sessions.** I treat Devin like a junior engineer: I write a spec, hand it off, and review. Iterating with Devin works but is slower than just doing the work myself for small tasks.
* **Don't use Devin for ambiguous work.** It will plough ahead and produce a confident wrong answer. Ambiguity is on you to resolve before the handoff.

## Gotchas

* ACUs add up fast. A single multi hour task can be $20+. Track usage.
* Devin's "memory" of the codebase is per session by default. Set up Devin Wiki / playbooks to share knowledge across sessions.
* PR quality varies wildly with task quality. Vague tickets → vague code. Spend the upfront time to write a good spec.
* Some categories of work (UI polish, taste sensitive design choices) Devin is terrible at. Save those for human collaboration.
* The product is improving monthly. What's true in April 2026 may be obsolete by Q3.

## Pointers

* [devin.ai/docs](https://docs.devin.ai)
* The "Knowledge" feature (per organisation playbooks Devin reads on every task) is underused — invest there.
* For local agent loops you supervise instead of cloud autonomy: [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md).
