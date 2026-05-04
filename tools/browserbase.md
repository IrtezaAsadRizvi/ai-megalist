# Browserbase: cloud headless browser infrastructure for AI agents

Browserbase sits in the agents cluster alongside [Browser Use](browser_use.md), [Claude Computer Use](claude_computer_use.md), and [ChatGPT Operator](chatgpt_operator.md) - the cloud runtime for production browser automation. Browserbase is the headless browser infrastructure for agents. Where Browser Use is "use a browser from Python," Browserbase is "host the browsers your agent uses, with proxies, captchas, sessions, and the operational tooling for running browser automation at scale." For production agents that need real browsers in the cloud, Browserbase is the substrate.

## What it actually is

A cloud platform that runs Chromium browsers for you, exposing them via Playwright / Puppeteer / Stagehand. Features include:
* **Persistent sessions**: keep cookies and login state across runs.
* **Stealth mode**: anti detection for sites that block automation.
* **Proxy support**: residential, ISP, datacenter proxies.
* **Captcha solving**: built in handlers for common challenges.
* **Live view + recording**: debug agent runs by watching screens.
* **Stagehand**: their open source agent framework that pairs with Browserbase.

## Setup

1. Sign up at [browserbase.com](https://www.browserbase.com). Free credits.
2. API key from the dashboard.
3. Quick test (Python with Playwright):
   ```python
   from playwright.sync_api import sync_playwright
   import os
   
   with sync_playwright() as p:
       browser = p.chromium.connect_over_cdp(
         f"wss://connect.browserbase.com?apiKey={os.environ['BROWSERBASE_API_KEY']}"
       )
       page = browser.contexts[0].pages[0]
       page.goto("https://example.com")
       print(page.title())
   ```
4. (Stagehand for AI driven browser automation): `npm i @browserbasehq/stagehand`.

## How I use it day to day

* **Honest:** I've used Browserbase for a few production scrapes / agents.
* **Production browser automation.** When I need browsers running 24/7 with reliable infrastructure, Browserbase replaces self hosted Selenium grids.
* **Stealth + proxies.** Sites that block crawlers get accessed via residential proxies; Browserbase handles the network plumbing.
* **Stagehand for AI driven browsing.** Pair Stagehand (the framework) with Browserbase (the runtime); the agent gets DOM + screenshot context, the runtime handles the browsers.
* **Live view for debugging.** Watch the browser in action during a run; see exactly where the agent gets confused.
* **Session persistence.** Login once, reuse across many agent runs. Avoids re auth every time.

## Gotchas

* Pricing per session minute. Long running agents add up; estimate.
* Some sites' anti bot detection is sophisticated; Browserbase helps but doesn't guarantee access. Check ToS for each target.
* Captcha solving is a real ethical / legal grey zone depending on the site. Use considerately.
* For local development without infrastructure: just run Playwright locally; Browserbase is for production scale.
* Stagehand is good but newer than mainstream agent frameworks. Browser Use is the alternative.

## Alternatives

* If you want a self-hosted OSS Python lib that runs browsers locally, [Browser Use](browser_use.md) is the comparator.
* If you want desktop control beyond just a browser, [Claude Computer Use](claude_computer_use.md) drives the whole machine.
* If you want consumer-level browser automation without writing code, [ChatGPT Operator](chatgpt_operator.md) or [Comet](comet.md) are the no-code paths.
* If you only need a script-grade browser for occasional tasks, plain Playwright local is enough - Browserbase is overkill until you need scale.

## FAQ

### How much does Browserbase cost?

Per-session-minute pricing. Long-running agents add up - estimate from your expected runtime. Free credits on signup are enough to evaluate.

### Browserbase vs Browser Use - which one?

They pair - they aren't competitors. Browser Use (or Stagehand) is the agent code; Browserbase is the cloud runtime that hosts the browsers. For local development you don't need Browserbase; for production scale you do.

### Does Browserbase handle CAPTCHAs?

Yes - built-in solvers for common challenges. Real ethical / legal grey zone depending on the site. Use considerately and check ToS.

### What is Stagehand?

Browserbase's open-source agent framework. Gives the LLM DOM + screenshot context; pairs naturally with the Browserbase runtime. Comparable in spirit to [Browser Use](browser_use.md), TypeScript-first.

### Can I keep login state between agent runs?

Yes - persistent sessions keep cookies and login state across runs. Login once, reuse across many agent runs; avoids re-auth every time.

## Pointers

* [browserbase.com](https://www.browserbase.com)
* Stagehand: [github.com/browserbase/stagehand](https://github.com/browserbase/stagehand)
* Compare with [browser_use.md](browser_use.md) (OSS Python lib; self hosted browsers).
* For consumer level browser automation (ChatGPT does it for you): [chatgpt.md](chatgpt.md) Operator, [comet.md](comet.md).
