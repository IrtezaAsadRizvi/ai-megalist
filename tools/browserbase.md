# Browserbase

Browserbase is the headless browser infrastructure for agents. Where Browser Use is "use a browser from Python," Browserbase is "host the browsers your agent uses, with proxies, captchas, sessions, and the operational tooling for running browser automation at scale." For production agents that need real browsers in the cloud, Browserbase is the substrate.

## What it actually is

A cloud platform that runs Chromium browsers for you, exposing them via Playwright / Puppeteer / Stagehand. Features include:
* **Persistent sessions** — keep cookies and login state across runs.
* **Stealth mode** — anti detection for sites that block automation.
* **Proxy support** — residential, ISP, datacenter proxies.
* **Captcha solving** — built in handlers for common challenges.
* **Live view + recording** — debug agent runs by watching screens.
* **Stagehand** — their open source agent framework that pairs with Browserbase.

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

## Pointers

* [browserbase.com](https://www.browserbase.com)
* Stagehand: [github.com/browserbase/stagehand](https://github.com/browserbase/stagehand)
* Compare with [browser_use.md](browser_use.md) (OSS Python lib; self hosted browsers).
* For consumer level browser automation (ChatGPT does it for you): [chatgpt.md](chatgpt.md) Operator, [comet.md](comet.md).
