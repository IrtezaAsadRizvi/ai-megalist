# Factory Droids: cloud SWE agents from Factory.ai

Factory's "Droids" are the company's bet that you don't want one cloud SWE agent, you want a fleet of them. Each Droid is purpose-specific (Code, Reliability, Knowledge, Tutorial, etc.) and they share a control plane where engineers assign tickets and review the output. It's the most opinionated take on the [Devin](devin.md) genre - more workflow than chat.

## What it actually is

Factory.ai's autonomous coding platform. Droids are specialized agents that live in the cloud, pull work from your issue tracker, write code, and open PRs. The platform integrates with GitHub, Linear, Jira, Slack, and your CI - the Droid does the work, your humans approve. Funded by Sequoia and others; targeted at enterprise teams who want to formalize how AI agents fit into their SDLC.

## Setup

1. Sign up at factory.ai; this is sales-led for serious use - book a demo for enterprise.
2. Connect GitHub (or GitLab), Linear/Jira, Slack.
3. Assign a Droid to an issue. The Droid plans, codes, runs tests, opens a PR.
4. Review the PR like you would any teammate's work. Comment to ask for changes; the Droid iterates.

## How I use it day to day

* **Triage well-scoped bugs** that need a fix in a known area - assign to a Code Droid, review the PR.
* **Knowledge Droid** for "how does X work in our codebase?" Q&A.
* **Reliability Droid** for incident-response patterns (log parsing, runbook drafts).
* **Tutorial Droid** to auto-generate onboarding docs from real code paths.

## Gotchas

* Enterprise pricing. Not aimed at solo developers.
* Like all cloud SWE agents, the failure mode is confident-but-wrong PRs. Code review discipline matters.
* Setup is heavier than a CLI tool - you're integrating with your whole ops stack.
* The Droid menagerie keeps growing; pick the ones that map to your team's actual workflow rather than enabling them all.

## Alternatives

* [Devin](devin.md) - Cognition's single-Droid equivalent; pricier per task, broader scope per agent.
* [GitHub Copilot Coding Agent](github_copilot.md) - assign issues directly to Copilot; tighter GitHub integration.
* [OpenHands](openhands.md) - OSS cloud SWE agent if you'd rather self-host.
* [Replit Agent](replit_agent.md) - if your need is "build and deploy" rather than "fix tickets."

## FAQ

### Is Factory free?

There's a self-serve plan with limits, but the real product is enterprise. Pricing is sales-led.

### Factory vs Devin?

[Devin](devin.md) is one autonomous engineer. Factory is a fleet of specialized agents. If your work splits cleanly into "code / docs / reliability / onboarding," Factory's specialization model maps better. If you just want one agent that does everything, Devin is simpler.

### Can a Droid push to main?

You can configure that, but most teams gate Droid output through PR review. Treat them as teammates whose code you review.

### What's the difference between Code Droid and Knowledge Droid?

Code Droid writes and edits code; Knowledge Droid answers questions about the codebase and produces docs. Different shapes, same underlying platform.

### Does Factory work with private repos?

Yes - GitHub / GitLab integration is standard. Enterprise SOC2 and SSO are part of the pitch.

## Pointers

* Product: [factory.ai](https://www.factory.ai)
* Docs: [docs.factory.ai](https://docs.factory.ai)
* Compare with [devin.md](devin.md) for the broader cloud-SWE-agent landscape.
