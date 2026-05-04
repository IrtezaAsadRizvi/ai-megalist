# Microsoft Copilot: AI inside the M365 stack

Microsoft Copilot is the embedded AI for the M365 world, the Microsoft answer to [ChatGPT](chatgpt.md), [Claude](claude.md), and [Gemini](gemini.md) - the bet is integration, not the smartest model. Microsoft Copilot is the AI for the Microsoft world: Word, Excel, Outlook, Teams, Windows, Edge, and the consumer Copilot at copilot.microsoft.com. The pitch isn't "smartest model"; it's "AI in every app you already use, with your tenant's data, governed by your IT." For organisations on M365, that integration is what matters.

## What it actually is

A family of products under one brand:
* **Copilot Chat** (free at copilot.microsoft.com, included in Bing).
* **Microsoft 365 Copilot** ($30/user/mo) - embedded in Word, Excel, Outlook, Teams, OneNote, etc., with grounded access to your tenant data.
* **Copilot in Windows / Edge**: sidebar AI in the OS and browser.
* **Copilot Studio**: build custom Copilot agents (low code).
* **Copilot Actions / Agents** (rolling out throughout 2026) - autonomous agents inside the M365 stack.

Models: GPT family + Microsoft's own (Phi, Prometheus). Routing is automatic.

## Setup

### Consumer
1. Go to [copilot.microsoft.com](https://copilot.microsoft.com), sign in with a Microsoft account. Free.
2. (Optional) Copilot Pro $20/mo for priority access, GPT‑5.5, Designer.

### M365 (organisation)
1. Admin enables M365 Copilot at admin.microsoft.com → Copilot.
2. License each user ($30/seat/mo, annual commit).
3. Copilot appears in Word, Excel, Outlook, Teams. Sidebar in apps; "Draft with Copilot" in Word; "Analyze with Copilot" in Excel.
4. (Optional) Set up Copilot Studio for custom agents; integrates with Power Platform.

## How I use it day to day

* **In Outlook** for inbox triage and drafting. The "summarise this thread" + "draft a reply" workflow is fast.
* **In Word** for first drafts of memos and docs. Quality matches ChatGPT for routine writing; the integration ("rewrite with this tone, length") is the value.
* **In Excel** for "explain this formula" or "create a pivot for this question." Genuinely useful for non power users; modest for power users.
* **In Teams** for meeting summaries, action items, and "what did I miss in the chat last week."
* **Copilot in Edge** for tab summary and contextual chat. Lightweight; less powerful than Comet.

## Gotchas

* The $30/seat/mo is on top of M365 licensing. Make the case carefully; not everyone uses it enough to pay back.
* Quality varies sharply across apps. Outlook and Word: solid. Excel: improving but still trips on complex formulas. PowerPoint Copilot: present but underwhelming vs Gamma.
* Copilot in M365 is grounded in your tenant data, which means quality depends on how well organised your tenant is. Garbage in, garbage out.
* Some features are still preview / phased rollout. Check what's GA in your tenant before deploying widely.
* Privacy and data residency are configurable but require admin attention. For regulated industries, the controls are there but need setup.

## Alternatives

* If you're not on M365, the consumer Copilot is fine, but you'd probably get more from [ChatGPT](chatgpt.md) or [Claude](claude.md) directly.
* If you live in Google Workspace instead, [Gemini](gemini.md) is the parallel inside Docs / Gmail / Sheets.
* If you want the strongest decks generator (vs PowerPoint Copilot), [Gamma](gamma.md) is the sharper tool.
* If you want a browser sidebar that beats Copilot in Edge, look at [Comet](comet.md) or [Monica](monica.md).

## FAQ

### Is Microsoft Copilot free?

Consumer Copilot at copilot.microsoft.com is free. Copilot Pro (consumer) is $20/mo. M365 Copilot for organisations is $30/user/mo on top of M365 licensing - the seat costs add up fast.

### Microsoft Copilot vs ChatGPT - which should I use?

Copilot if you live in Word / Excel / Outlook / Teams - the integration is the value. [ChatGPT](chatgpt.md) for raw capability, broader features, and when you're not bound to the M365 surface. The model under Copilot is GPT-family anyway.

### Is M365 Copilot worth $30/user/mo?

Depends on usage. Heavy Outlook + Word + Teams users get the value back; occasional users don't. Pilot with a small group for a month before licensing the org.

### Can Copilot read my company's data?

Yes - that's the M365 Copilot pitch. It's grounded in your tenant data via Microsoft Graph. Quality depends on how well-organised your tenant is, and admin controls matter for what it can see.

## Pointers

* [microsoft.com/copilot](https://www.microsoft.com/en-us/microsoft-365-copilot)
* Admin docs: [docs.microsoft.com/copilot](https://docs.microsoft.com/copilot)
* For organisations not on M365, the consumer Copilot is fine for individual use but the value is mostly in the suite integration.
* For comparable Google integration: [gemini.md](gemini.md) inside Workspace.
