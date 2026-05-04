# Claude Computer Use: Anthropic's screen-control API

Claude Computer Use is the developer-facing browser / desktop control API in the agents category, sitting alongside [ChatGPT Operator](chatgpt_operator.md) and [Browser Use](browser_use.md). It's the API feature that lets Claude see a screen and emit mouse / keyboard / typing actions. It's the foundation that consumer agents like ChatGPT Operator are built on, exposed at the API level so you can build your own. The capability is impressive; using it responsibly takes more thought than most "agent" features.

## What it actually is

An API capability where Claude takes screenshots as input and outputs structured actions: mouse moves and clicks, keyboard input, typing, scrolling. You provide a virtual desktop (a sandboxed Linux container, an iframe, a browser); Claude drives it. Available on Claude Sonnet and Opus through the Anthropic API.

## Setup

1. Anthropic API account: [console.anthropic.com](https://console.anthropic.com).
2. Anthropic provides a reference Docker container (Linux desktop in a container) for getting started: [github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo).
3. Run the demo:
   ```bash
   docker run -p 5900:5900 -p 8501:8501 \
     -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
     ghcr.io/anthropics/anthropic-quickstarts:computer-use-demo-latest
   ```
4. Open `localhost:8501`. Type a task. Watch Claude operate the desktop.
5. For production: design your own sandbox; pass screenshots to Claude; execute the returned actions in a controlled environment.

## How I use it day to day

* **Honest:** I've experimented with computer use; not deployed it in production.
* **Filling forms across multiple sites.** Claude reads the form, types, submits. Slow but capable.
* **UI testing.** Generate end to end test flows by describing them; Claude clicks through.
* **Office app automation.** Open a Word doc, edit a paragraph, save. Claude can do this; whether you should depends on cost / reliability.
* **Browser tasks.** Often easier to use Browser Use (which has a structured DOM representation) than Computer Use's pixel level vision. Computer Use is the right tool when the UI is image based or non web (legacy desktop apps).

## Gotchas

* Cost. Each step sends a screenshot (image tokens). A multi step task can run $1+ in tokens. Plan for it.
* Latency. Vision + tool generation per step, often 5 to 30 seconds. Not for interactive UX.
* Reliability. Claude makes mistakes (clicks wrong button, types wrong text). Always include verification steps and rollbacks.
* Security. Anything Claude can see and click, an attacker could potentially manipulate via prompt injection in the UI. Hardened sandboxes only.
* Better suited tools usually exist. For browser, [browser_use.md](browser_use.md). For specific app automation, native APIs. Computer Use is the universal hammer.

## Alternatives

* If you want a finished consumer product instead of API + sandbox plumbing, [ChatGPT Operator](chatgpt_operator.md) is the realistic comparison.
* If you only need browser automation (not desktop apps), [Browser Use](browser_use.md) gives you DOM-aware control that's faster and cheaper than pixel vision.
* If you want a hosted long-running cloud sandbox, [Manus](manus.md) is the closest.
* For headless browser infra to back your own agent, [Browserbase + Stagehand](browserbase.md) is the production path.

## FAQ

### How much does Claude Computer Use cost?

Per-step it's the API cost of a screenshot (image tokens) plus the tool generation. A multi-step task can run $1+ in tokens; long sessions add up fast. Plan for it; cache aggressively.

### Claude Computer Use vs ChatGPT Operator - which is better?

Different audiences. [Operator](chatgpt_operator.md) is a finished consumer product with a watchable browser pane and built-in confirmations. Computer Use is an API capability you wire into your own sandbox. Build with Computer Use; use Operator if you just want to click through a flight booking.

### Is Claude Computer Use safe?

It's as safe as the sandbox you put it in. Anything Claude can see and click, a prompt-injection in the page can potentially manipulate. Hardened containers, scoped credentials, and human confirmation on irreversible actions are non-negotiable.

### Can I run Computer Use locally?

Yes - Anthropic ships a reference Docker container (Linux desktop in a container). It's the right starting point. For production, you design your own sandbox; the API call shape is the same.

## Pointers

* Docs: [docs.anthropic.com](https://docs.anthropic.com) → search "computer use"
* Reference container: [github.com/anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts)
* For DOM aware browser automation: [browser_use.md](browser_use.md), [Stagehand](https://github.com/browserbase/stagehand).
* For consumer browser agents without infrastructure: [chatgpt.md](chatgpt.md) Operator, [comet.md](comet.md).
