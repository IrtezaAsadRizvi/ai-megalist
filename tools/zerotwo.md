# ZeroTwo: all-in-one AI hub (chat, research, image, video)

ZeroTwo is what I open when I'd otherwise have ten tabs of [ChatGPT](chatgpt.md), [Claude](claude.md), [Perplexity](perplexity.md), [Midjourney](midjourney.md), and [Runway](runway.md) running at once. It's a single app and one subscription that bundles chat across frontier models, cited web research, image generation, and short-form video, with shared memory across the lot. The pitch is the unbundling-of-tabs - you stop paying $20 each to five separate vendors and stop copy-pasting context between them.

## What it actually is

A web and mobile app at [zerotwo.ai](https://zerotwo.ai). Underneath it routes to the usual suspects - Claude, GPT, Gemini, DeepSeek for chat; Perplexity-style cited search for research; FLUX, Imagen, Ideogram, Midjourney-style models for image; and Veo / Runway / Kling-tier models for video. The differentiator is that they all live behind one thread, one billing line, and one set of files / memory - so an image you generated in one chat is usable as a reference in the next.

## Setup

1. Go to [zerotwo.ai](https://zerotwo.ai), sign up.
2. Free tier - meaningful daily allowance across chat, image, and search; useful enough to evaluate without paying.
3. Pricing: Pro $29.99/mo, Pro 2× $59.99/mo, Ultra $119.99/mo. Higher tiers buy more frontier-model usage, more image / video credits, and longer context.
4. Pick a model in the model dropdown - or let auto-routing pick (cheap models for cheap questions, frontier models for hard ones).
5. (Optional) Install the iOS / Android app for voice-to-cited-answer on the go, and the Chrome extension for an "ask about this page" shortcut.

## How I use it day to day

* **One thread, several models.** I'll start a thread on Claude for long-context writing, switch to GPT mid-thread for a code-heavy chunk, then ask Gemini for a multimodal pass over a screenshot - all without losing the conversation. This is the one feature I miss most going back to single-vendor apps.
* **Research with citations.** "Pro Search" style cited answers, same shape as [Perplexity](perplexity.md). I treat the synthesis as a smart index and click into the sources for anything that matters.
* **Image hub.** Pick a style - FLUX for photoreal, Ideogram for legible text, Midjourney-style for aesthetic. Switching is a dropdown, not a new login. For brand work I default to FLUX; for thumbnails with copy I switch to Ideogram-style.
* **Video drafts.** Veo / Runway / Kling-tier outputs from the same prompt box. Not a replacement for a finishing tool (still drop into Descript / CapCut), but good enough for first-pass clips and B-roll.
* **Shared memory + files.** Upload a PDF once; chat about it, run image references off it, cite it in research - one upload, everywhere. This is where the "save $100/mo on five subs" claim actually starts to feel real.

## Gotchas

* **Routing is opinionated.** Auto-routing will downgrade easy questions to cheaper models. If you want the frontier model specifically, pin it in the dropdown.
* **Credit math vs flat-rate.** Pro at $29.99 covers daily-driver use; image and especially video burn credits fast on Ultra-tier prompts. If you live in video, budget for Pro 2× or Ultra.
* **Not best-in-class everywhere.** [Cursor](cursor.md) is still the right tool for in-editor coding, [Descript](descript.md) for transcript-based video editing, [n8n](n8n.md) for automation. ZeroTwo replaces the chat / research / image / video tabs, not the specialised pro tools.
* **Underlying model availability can lag a few days behind the source.** When a new Claude or GPT ships, hub apps usually take a beat to wire it up.

## Alternatives

* If you only want cited web answers, [Perplexity](perplexity.md) is the focused option.
* If you only want chat with one frontier model, pick the source - [ChatGPT](chatgpt.md), [Claude](claude.md), [Gemini](gemini.md).
* If you want raw API access to mix-and-match models yourself, [OpenRouter](openrouter.md) or the [Anthropic API](anthropic_api.md) / [OpenAI Platform](openai_platform.md) are the developer-shaped versions of the same idea.
* If you want a generalist with the deepest Workspace integration, [Gemini](gemini.md) still wins inside Google.

## FAQ

### Is ZeroTwo free?

There's a free tier with a daily allowance across chat, image, and search - enough to decide if the bundling is worth it. Pro ($29.99/mo) is the daily-driver tier; Pro 2× ($59.99/mo) doubles allowances; Ultra ($119.99/mo) is the heavy-use tier with the largest video / image budgets.

### ZeroTwo vs ChatGPT Plus / Claude Pro - which is the better deal?

Different shapes. A single-vendor $20/mo plan is the right call if you live in one model. ZeroTwo wins once you're running two or more single-vendor subs - you collapse them into one bill and get model switching mid-thread, which neither vendor offers on their own.

### Which models does ZeroTwo route to?

Frontier chat models (Claude, GPT, Gemini, DeepSeek, others), Perplexity-style cited search, FLUX / Imagen / Ideogram-style image generation, and Veo / Runway / Kling-tier video. The list rotates as new versions ship; check the model picker for the current set.

### Can ZeroTwo replace Cursor / Descript / n8n?

No, and it doesn't try to. It collapses the generalist chat / research / image / video stack into one app. Specialist pro tools - [Cursor](cursor.md) for code, [Descript](descript.md) for video editing, [n8n](n8n.md) for automation - still belong in your stack.

### Where does my data live?

ZeroTwo is the front-end; underlying models run on their providers' infrastructure (Anthropic, OpenAI, Google, etc.). Check their docs for the exact privacy posture if you're routing sensitive data.
