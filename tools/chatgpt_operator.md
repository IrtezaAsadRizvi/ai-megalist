# ChatGPT Operator / Agent

ChatGPT Operator is OpenAI's browser using agent. You give it a task ("book a table for two at this restaurant Friday at 7"), it spins up a remote browser, and you watch it click through the web on your behalf. In 2026 this is folded into the broader "ChatGPT Agent" mode that can also use a code interpreter, a terminal, and other tools. It's the most reliable of the consumer browser agents I've tried, and that bar is set low.

## What it actually is

A browser automation agent integrated into ChatGPT. Originally launched as Operator (a separate product), now consolidated as ChatGPT Agent mode for Pro and Plus subscribers. Runs a remote Chromium instance you can watch live; the agent can take screenshots, click, type, scroll, and pause to ask you for confirmation on sensitive steps (logins, payments).

## Setup

1. Subscribe to ChatGPT Plus or Pro. Operator capabilities require the higher tiers.
2. In ChatGPT, switch to Agent mode (the picker is at the top of the chat composer).
3. Describe the task in plain language. "Find the cheapest direct flight from X to Y on this date and show me the booking page."
4. Watch the browser pane on the right; intervene when the agent asks (typically for logins or payment).
5. (Optional) Save common tasks as reusable workflows.

## How I use it day to day

* **Tedious comparison shopping.** Find the same product across three sites; report which is cheapest and where. Saves real time.
* **Filling out long web forms.** Government sites, insurance signups, anything multi step. Worth supervising.
* **Research with browsing.** When I want answers from the live web rather than the model's training data, Agent mode does the click through more thoroughly than Deep Research.

I don't trust it with anything irreversible. Booking a flight: I let it find the option, then I click "buy" myself. Sending an email: same. The product UI defaults to confirmation prompts on these steps, which I appreciate.

## Gotchas

* Reliability is real but uneven. Sites with aggressive bot detection (some retailers, some banks) refuse the agent.
* The agent can be slow; a 10 minute task on a complex site is normal.
* You're handing the agent your logged in session through ChatGPT's remote browser; think about credential exposure before you do this for sensitive sites.
* Payments and irreversible actions should always be confirmed by you, not the agent. The product is good at asking; don't disable that prompt.

## Pointers

* In ChatGPT: Agent mode in the composer, on Plus/Pro.
* Announcement and docs: [openai.com](https://openai.com) (search Operator and Agent).
* Pairs and competes with [claude_computer_use.md](claude_computer_use.md) (more developer focused, API first), [manus.md](manus.md), and [browser_use.md](browser_use.md) (OSS library). For form filling specifically, [hyperwrite.md](hyperwrite.md) is a lighter alternative.
