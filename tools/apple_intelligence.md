# Apple Intelligence

Apple Intelligence is the AI baked into iOS, iPadOS, and macOS. The pitch is privacy first — most processing on device, anything that can't run on device routed through Private Cloud Compute (Apple's verifiable confidential compute infrastructure). The features themselves are useful but conservative; the substrate is what matters.

## What it actually is

A system level AI feature set across Apple's operating systems. Features include:

* **Writing Tools** — proofread, rewrite, summarise in any text field system wide.
* **Smart Reply** in Mail and Messages.
* **Visual Intelligence** — point camera + tap to identify, summarise, ask about objects.
* **Image Playground** — generate images in a few preset styles.
* **Genmoji** — generate custom emoji.
* **Notification summaries** — group and summarise long notification stacks.
* **System wide ChatGPT integration** (opt in, anonymised) when on device or PCC isn't enough.

Available on iPhone 15 Pro and later, M1 Macs and later, M1 iPads and later. English first; other languages have rolled out in 2025–26.

## Setup

1. Update to iOS 18.x / macOS 15.x or later (April 2026: most features GA).
2. Settings → Apple Intelligence & Siri → Turn on Apple Intelligence.
3. Wait for the on device model to download (~3 GB).
4. (Optional) Enable ChatGPT integration; you get a "use ChatGPT" prompt when Apple's models defer.
5. Features appear in Mail, Messages, Notes, Safari, Photos, Notifications.

## How I use it day to day

* **Writing Tools** in Mail and Notes. "Proofread" and "Make it shorter" — fast, on device, reliable for routine edits.
* **Notification summaries** for stacked group chats. "12 messages from Dad" gets a one line summary; I decide whether to open.
* **Visual Intelligence** to identify plants, dogs, products in front of my camera. Faster than typing into Google.
* **Image Playground** for low stakes art (kid's birthday card, casual social). Limited styles; not a Midjourney replacement.
* **Genmoji.** Custom emoji on demand. The most fun consumer AI feature; mostly a curiosity.
* **Siri** is genuinely better with Apple Intelligence — handles compound requests, refers to on screen content, hands off to ChatGPT cleanly.

## Gotchas

* Hardware gate is real. Older devices don't get any of this.
* Feature availability has shifted across releases; some announced features are still rolling out as of April 2026.
* On device LLM quality is below frontier models. For complex tasks the system routes to ChatGPT (with consent). Don't expect Claude Opus quality from on device.
* Image Playground's styles are deliberately stylised; for photoreal or design grade output, use Midjourney / FLUX / Firefly.
* Privacy is a real differentiator. Read the [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) write up if it matters.

## Pointers

* [apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)
* For frontier capability: [chatgpt.md](chatgpt.md), [claude.md](claude.md) on iOS.
* For privacy first AI more broadly: [ollama.md](ollama.md) on Mac for local models.
* The integration with system features (Safari, Messages, Mail) is the value; non Apple users won't get this benefit even if their AI tools are stronger.
