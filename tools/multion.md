# MultiOn: browser agent with a public API

MultiOn was an early-mover in the "agent that drives a real browser" space - the use case [ChatGPT Operator](chatgpt_operator.md) eventually made mainstream. The company's framing shifted toward "Agent Q" (a self-improving agent) and a developer API for building agentic web actions into your own product. If you want a browser agent you can call from code rather than a chat surface you talk to, MultiOn is one of the cleanest paths.

## What it actually is

A browser-automation agent platform. Two surfaces: a consumer agent that operates your browser via a Chrome extension or remote session, and a developer API that lets you script web actions ("book a flight from X to Y on these dates"). Backed by Cervantes, Amazon, and others. The team's research notably introduced **Agent Q**, an agent that improves over time through self-play on real web tasks.

## Setup

1. Sign up at multion.ai. The hosted product gives you the consumer-side agent.
2. For dev access: get an API key from the dashboard.
3. Use the SDK: `pip install multion`, then `client.browse(cmd="Find me a flight from SFO to JFK on March 15", url="https://google.com/flights")`.
4. Decide local-vs-remote browser. Remote runs in MultiOn's cloud; local runs in your Chrome with the extension.

## How I use it day to day

* **Programmatic web tasks** I'd otherwise script with Playwright + an LLM glue layer.
* **Form-filling / lookups** at scale - "for each of these 100 companies, find the CEO on LinkedIn and add to my sheet."
* **Comparison shopping** automation - cheaper than building it from scratch.

## Gotchas

* Web automation breaks. Sites change their DOM, captchas appear, login walls show up. Plan for failure modes.
* Latency is real - real browser actions are slower than API calls.
* Pricing is per-action / per-minute; multi-step tasks add up.
* You're operating sites under your account. Some Terms of Service may explicitly forbid this kind of automation. Read them.

## Alternatives

* [ChatGPT Operator / Agent](chatgpt_operator.md) - OpenAI's consumer-facing browser agent.
* [Claude Computer Use](claude_computer_use.md) - lower-level "control mouse and keyboard" API.
* [Browser Use](browser_use.md) - OSS Python library for LLM-driven browsers; cheaper if you self-host.
* [Browserbase + Stagehand](browserbase.md) - headless browser infrastructure for agent developers.
* [Skyvern](skyvern.md) - OSS browser automation with vision.

## FAQ

### Is MultiOn free?

There's a free trial; production use is paid. Pricing is usage-based.

### MultiOn vs Browser Use?

[Browser Use](browser_use.md) is an OSS Python library - you bring the LLM and host the browser. MultiOn is a managed product with its own agent layer. Build vs buy choice.

### What's Agent Q?

MultiOn's research direction - an agent that self-improves on web tasks via search and self-play. Some of this lands in the product; the rest is research.

### Can MultiOn handle logged-in flows?

Yes, with persistent sessions and credential handling. Be careful about Terms of Service.

### Is there a free OSS alternative?

Yes - [Browser Use](browser_use.md), [Skyvern](skyvern.md), and Playwright + an LLM are all DIY paths.

## Pointers

* Site: [multion.ai](https://www.multion.ai)
* Docs: [docs.multion.ai](https://docs.multion.ai)
* For the OSS DIY route, see [browser_use.md](browser_use.md) and [skyvern.md](skyvern.md).
