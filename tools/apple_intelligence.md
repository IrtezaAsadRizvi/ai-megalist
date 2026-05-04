# Apple Intelligence: Apple's on-device AI for iOS and macOS

Apple Intelligence is the system-level AI inside iOS and macOS, the privacy-first alternative to [ChatGPT](chatgpt.md), [Microsoft Copilot](microsoft_copilot.md), and [Gemini](gemini.md) for users already locked into the Apple ecosystem. Apple Intelligence is the AI baked into iOS, iPadOS, and macOS. The pitch is privacy first - most processing on device, anything that can't run on device routed through Private Cloud Compute (Apple's verifiable confidential compute infrastructure). The features themselves are useful but conservative; the substrate is what matters.

## What it actually is

A system level AI feature set across Apple's operating systems. Features include:

* **Writing Tools**: proofread, rewrite, summarise in any text field system wide.
* **Smart Reply** in Mail and Messages.
* **Visual Intelligence**: point camera + tap to identify, summarise, ask about objects.
* **Image Playground**: generate images in a few preset styles.
* **Genmoji**: generate custom emoji.
* **Notification summaries**: group and summarise long notification stacks.
* **System wide ChatGPT integration** (opt in, anonymised) when on device or PCC isn't enough.

Available on iPhone 15 Pro and later, M1 Macs and later, M1 iPads and later. English first; other languages have rolled out in 2025–26.

## Setup

1. Update to iOS 18.x / macOS 15.x or later (April 2026: most features GA).
2. Settings → Apple Intelligence & Siri → Turn on Apple Intelligence.
3. Wait for the on device model to download (~3 GB).
4. (Optional) Enable ChatGPT integration; you get a "use ChatGPT" prompt when Apple's models defer.
5. Features appear in Mail, Messages, Notes, Safari, Photos, Notifications.

## How I use it day to day

* **Writing Tools** in Mail and Notes. "Proofread" and "Make it shorter" - fast, on device, reliable for routine edits.
* **Notification summaries** for stacked group chats. "12 messages from Dad" gets a one line summary; I decide whether to open.
* **Visual Intelligence** to identify plants, dogs, products in front of my camera. Faster than typing into Google.
* **Image Playground** for low stakes art (kid's birthday card, casual social). Limited styles; not a Midjourney replacement.
* **Genmoji.** Custom emoji on demand. The most fun consumer AI feature; mostly a curiosity.
* **Siri** is genuinely better with Apple Intelligence - handles compound requests, refers to on screen content, hands off to ChatGPT cleanly.

## Gotchas

* Hardware gate is real. Older devices don't get any of this.
* Feature availability has shifted across releases; some announced features are still rolling out as of April 2026.
* On device LLM quality is below frontier models. For complex tasks the system routes to ChatGPT (with consent). Don't expect Claude Opus quality from on device.
* Image Playground's styles are deliberately stylised; for photoreal or design grade output, use Midjourney / FLUX / Firefly.
* Privacy is a real differentiator. Read the [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) write up if it matters.

## Alternatives

* If you want frontier-quality answers and don't mind leaving the OS, [ChatGPT](chatgpt.md) or [Claude](claude.md) iOS apps are the obvious upgrades.
* If you want fully private AI on a Mac, [Ollama](ollama.md) runs models locally with no cloud round-trip at all.
* If you're a Windows / M365 user looking for the analogous integration, [Microsoft Copilot](microsoft_copilot.md) is Apple Intelligence's equivalent.
* If you want Google's deep Workspace integration on iOS, [Gemini](gemini.md) lives in Gmail and Docs.

## FAQ

### Is Apple Intelligence free?

Yes - included with iOS 18.x / macOS 15.x on supported hardware. The optional ChatGPT integration uses OpenAI's free tier by default; you can sign in with a paid OpenAI account for higher limits.

### What devices support Apple Intelligence?

iPhone 15 Pro and later, M1 Macs and later, M1 iPads and later. The hardware gate is real - older devices get nothing.

### Apple Intelligence vs ChatGPT - which is smarter?

[ChatGPT](chatgpt.md) is meaningfully smarter on complex tasks; Apple's on-device model is small by design. Apple Intelligence wins on system integration (Mail, Messages, Notifications) and privacy. The system actually routes to ChatGPT (with consent) when local models aren't enough.

### Is Apple Intelligence private?

Most processing is on device; anything that can't run on device routes through Private Cloud Compute, Apple's verifiable confidential compute infrastructure. Worth reading the security.apple.com PCC writeup if it matters to you.

### Can I disable the ChatGPT integration?

Yes - Settings - Apple Intelligence and Siri - Extensions. The ChatGPT handoff is opt-in and per-request prompts the user before sending data.

## Pointers

* [apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)
* For frontier capability: [chatgpt.md](chatgpt.md), [claude.md](claude.md) on iOS.
* For privacy first AI more broadly: [ollama.md](ollama.md) on Mac for local models.
* The integration with system features (Safari, Messages, Mail) is the value; non Apple users won't get this benefit even if their AI tools are stronger.
