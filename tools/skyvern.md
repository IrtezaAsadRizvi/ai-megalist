# Skyvern: open-source browser automation with vision

Skyvern is the OSS browser agent that decided LLMs alone aren't enough - they pair the language model with computer vision so the agent can see the actual rendered page, not just the DOM. The result is more robust to the kind of CSS-grid layouts and shadow DOM weirdness that break selector-based automation. If you're building real web-automation pipelines and you want the OSS option, this is the one to evaluate alongside [Browser Use](browser_use.md).

## What it actually is

An MIT-licensed Python framework from Skyvern Inc that orchestrates an LLM + vision model + a real browser (Playwright under the hood) to complete web tasks. Open core: the OSS repo handles single-agent flows; the hosted Cloud version adds anti-bot evasion, captcha solving, parallel execution, and a dashboard. Used in production for form-filling, data extraction, account onboarding, and similar repetitive web work.

## Setup

1. Clone github.com/Skyvern-AI/skyvern and install: `pip install skyvern`, then `skyvern init`.
2. Provide API keys for your LLM provider (OpenAI, Anthropic, Bedrock, Azure) and optionally a vision model.
3. Run the local server: `skyvern run server` and the UI at `http://localhost:8080`.
4. Create a "Task" with a goal URL and instructions. Skyvern plans, opens a browser, executes step-by-step.
5. (Optional) For production / parallel runs, sign up for Skyvern Cloud.

## How I use it day to day

* **Form-filling automation** that survives layout changes - vision-based grounding is more robust than CSS selectors.
* **Data extraction** from sites that resist scraping - Skyvern operates like a human user.
* **Workflows** with branching - "if the page shows X, click Y; otherwise fill the form."
* **Self-hosted** when I can't send data to a third-party agent provider.

## Gotchas

* It's slower than a pure scraper. Vision inference + browser rendering = seconds per step.
* LLM costs add up. A complex multi-step task may run 50+ inference calls.
* Anti-bot defenses are real. Local OSS will get blocked on hardened sites; the Cloud version is engineered around this.
* Captcha solving is paid (third-party services or Skyvern Cloud).

## Alternatives

* [Browser Use](browser_use.md) - the other major OSS browser-agent framework; less vision-focused, easier to start with.
* [Stagehand (Browserbase)](browserbase.md) - TS framework + managed browser infrastructure.
* [MultiOn](multion.md) - closed managed alternative with its own agent layer.
* [Claude Computer Use](claude_computer_use.md) - lower-level "drive a desktop" API.
* Playwright + custom LLM glue - DIY if you want maximum control.

## FAQ

### Is Skyvern free?

OSS core is MIT-licensed and free. You pay for LLM/vision API usage and (optionally) Skyvern Cloud for managed hosting.

### Skyvern vs Browser Use?

Both are OSS Python frameworks. Skyvern leans heavier on vision (more robust to weird DOMs); [Browser Use](browser_use.md) is leaner and easier to get running. Try both for your use case.

### Does Skyvern handle captchas?

Not out of the box for the OSS version. Skyvern Cloud and third-party services solve them.

### Can I run it on a server with no display?

Yes - it uses headless Playwright by default. The "headed" mode is for debugging only.

### What LLMs does it support?

OpenAI, Anthropic, [AWS Bedrock](aws_bedrock.md), [Azure OpenAI](azure_openai.md), and OpenAI-compatible endpoints. Configure in `.env`.

## Pointers

* GitHub: [github.com/Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern)
* Site: [skyvern.com](https://www.skyvern.com)
* Docs: [docs.skyvern.com](https://docs.skyvern.com)
* For the leaner OSS option, see [browser_use.md](browser_use.md).
