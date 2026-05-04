# ChatGPT: OpenAI's general-purpose AI assistant

ChatGPT is the default general-purpose AI assistant, the one most people compare every other chatbot against, alongside [Claude](claude.md) and [Gemini](gemini.md). It's the one your relatives have heard of, the one with the most surface area. I use it as my fastest first pass tool: throw something at it, see what shape comes back, decide whether to keep going there or move to a more careful model.

## What it actually is

OpenAI's consumer product, sitting on top of the GPT family (GPT‑5.5 in early 2026). It bundles voice, image generation (replaced DALL·E 3 with native GPT Image), Operator (browser agent), Deep Research, the Agents SDK, code interpreter, and custom GPTs. There is also a desktop app and good iOS/Android apps.

## Setup

1. Sign up at [chatgpt.com](https://chatgpt.com).
2. Install the desktop app (macOS/Windows). Cmd+Space style hotkey to summon.
3. For real use: ChatGPT Plus ($20/mo) gives you GPT‑5.5, image gen at speed, voice, and Deep Research with daily caps. Pro ($200/mo) is the no caps tier with priority on Operator and Sora's successor video tools.
4. If you want it answering with cited sources, turn on Search in the composer.

About 3 minutes to get going.

## How I use it day to day

* **Drafting.** Outlines, emails, first passes of anything. ChatGPT is fast and confident, which is what a draft wants.
* **Image generation in chat.** Native image gen renders text reliably (logos, social cards, posters) which used to be a deal breaker for DALL·E.
* **Voice mode for thinking out loud.** Walk and talk while it transcribes and responds. Genuinely changes how I plan when I'm away from a keyboard.
* **Deep Research.** Multi step web research that takes 5 to 30 minutes and produces a long report. I use this for landscape scans before I commit to a project.
* **Operator.** When I need a browser to click things for me. Booking, comparison shopping, filling forms.

## Gotchas

* The model is confident even when wrong. Verify before forwarding. (This is not unique to ChatGPT, but worth saying out loud.)
* Memory carries across conversations by default. If you've been venting, it remembers. Turn it off or prune at Settings → Personalization → Memory.
* Custom GPTs are powerful but stale; many published ones haven't been updated since 2024.
* Operator still asks for confirmation on payments and sensitive actions, which is what you want, but it slows long automations.

## Alternatives

* If you want a calmer voice and 1M token context for long edits, [Claude](claude.md) is the natural pair.
* If you live in Google Workspace (Docs, Gmail, Sheets), [Gemini](gemini.md) is the obvious one.
* If you want open weights and a generous free tier, [DeepSeek](deepseek.md) is the most credible cheap alternative.
* For cited web answers as a primary surface, [Perplexity](perplexity.md) wins.

## FAQ

### Is ChatGPT free?

Yes - the free tier covers GPT-4-class models with daily caps. Plus ($20/mo) gets you GPT-5.5, faster image gen, voice, and Deep Research. Pro ($200/mo) lifts the caps and gives priority on Operator and the video tools.

### ChatGPT vs Claude - which is better?

Different shapes. ChatGPT ships features faster (image gen, voice, Operator, video) and browses the web by default. [Claude](claude.md) is calmer, has 1M context on Opus, and tends to preserve your voice better on long edits. I keep both subscriptions.

### Does ChatGPT have an API?

Yes - the OpenAI Platform at platform.openai.com. The Responses API and Agents SDK are the current shape; pricing is per-million tokens with a separate batch tier for cheap async work.

### Can ChatGPT browse the web?

Yes, with Search enabled in the composer; it's on by default for most accounts in 2026. For multi-step web research, Deep Research is the right tool - it takes 5 to 30 minutes and produces a long cited report.

### What is ChatGPT Operator?

Operator is the browser-using agent inside ChatGPT - you describe a task, it drives a remote Chromium and clicks through. Now folded into "Agent mode" on Plus and Pro. See [chatgpt_operator.md](chatgpt_operator.md) for the longer writeup.

## Pointers

* [chatgpt.com](https://chatgpt.com)
* [help.openai.com](https://help.openai.com) for product changes
* [platform.openai.com](https://platform.openai.com) if you want the API instead
* For developer flows, see [openai.com/index/introducing-operator](https://openai.com/index/introducing-operator) and the Agents SDK docs.
