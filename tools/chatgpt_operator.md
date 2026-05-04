# ChatGPT Operator / Agent: OpenAI's browser-using agent

ChatGPT Operator is the browser-using agent in the consumer agents category, the OpenAI answer to [Claude Computer Use](claude_computer_use.md) and [Manus](manus.md). You give it a task ("book a table for two at this restaurant Friday at 7"), it spins up a remote browser, and you watch it click through the web on your behalf. In 2026 this is folded into the broader "ChatGPT Agent" mode that can also use a code interpreter, a terminal, and other tools. It's the most reliable of the consumer browser agents I've tried, and that bar is set low.

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

## Alternatives

* If you want API-level control to build your own agent, [Claude Computer Use](claude_computer_use.md) is the developer-first equivalent.
* If you want a cloud sandbox with a longer-running "My Computer" environment, [Manus](manus.md) is the closest match.
* If you want browser automation as a developer library (DOM-aware, scriptable), [Browser Use](browser_use.md) is the OSS path.
* For an AI browser where the agent is woven into normal browsing rather than a separate mode, [Comet](comet.md) is the bet.

## FAQ

### Is ChatGPT Operator free?

No. Agent / Operator capabilities require ChatGPT Plus ($20/mo) at minimum, and Pro ($200/mo) gets you priority access and higher caps. The free tier doesn't include browser-using modes.

### ChatGPT Operator vs Claude Computer Use - which should I use?

Operator if you want a finished consumer product with a watchable browser pane and built-in confirmations. [Claude Computer Use](claude_computer_use.md) if you're a developer building your own agent on top of an API; Anthropic ships a reference Docker container, you ship the sandbox.

### Can Operator make purchases for me?

It can fill the cart and reach the checkout page, but it pauses and asks before submitting payment. Leave that prompt on - this is the right default. I let it find the option, then I click "buy" myself.

### What sites does Operator break on?

Sites with aggressive bot detection (some retailers, some banks, captcha-heavy flows) refuse the agent. CAPTCHAs are a hard stop unless a human takes over. Plan around it; don't fight it.

## Pointers

* In ChatGPT: Agent mode in the composer, on Plus/Pro.
* Announcement and docs: [openai.com](https://openai.com) (search Operator and Agent).
* Pairs and competes with [claude_computer_use.md](claude_computer_use.md) (more developer focused, API first), [manus.md](manus.md), and [browser_use.md](browser_use.md) (OSS library). For form filling specifically, [hyperwrite.md](hyperwrite.md) is a lighter alternative.
