# Microsoft Designer: free DALL·E access wrapped in a design tool

Microsoft Designer is the consumer-facing way to use OpenAI's image models without paying for ChatGPT - same DALL·E (now GPT-image) tech, free at the point of use, wrapped in templates for the things normal people actually want (a birthday card, a LinkedIn banner, a flyer). If your job-to-be-done is "generate something usable in 60 seconds for free," this is criminally underrated. If you want artistic peak, go to [Midjourney](midjourney.md).

## What it actually is

Microsoft's AI-first design app, also surfaced inside Bing as "Image Creator." Backed by OpenAI's image models under a Microsoft licensing deal. Free tier with daily "boosts" for faster generation; built into Microsoft 365 for subscribers. Available on web, iOS, Android, and as a Copilot feature in Edge/Windows. Templates for cards, social posts, invitations, stickers, and similar quick-output formats.

## Setup

1. Go to designer.microsoft.com or bing.com/images/create. Sign in with a free Microsoft account.
2. Type a prompt. You get four images back in roughly 15-30 seconds.
3. Use "boosts" to skip the queue when traffic is high; you regenerate boosts daily.
4. (Optional) Use the Designer canvas to drop the result onto a template, add text, resize for a platform.

## How I use it day to day

* **"Make me a quick LinkedIn banner about X"** - pick a template, prompt the image, done.
* **Text-in-image** that actually reads correctly - GPT-image is among the best at legible text.
* **Free DALL·E access** when I want a quick image and don't want to burn ChatGPT credits.
* **Stickers and emoji-style assets** - the templated outputs are clean.

## Gotchas

* Style range is narrower than [Midjourney](midjourney.md) or [Flux](flux.md). Don't expect aesthetic peak; expect "good enough, fast, free."
* Free queue gets slow at peak hours. Boosts help.
* Content filtering is strict - "no people" rules and similar may block prompts that work elsewhere.
* No API. This is consumer surface only; for API access to GPT-image, use the [OpenAI Platform](openai_platform.md).

## Alternatives

* [Midjourney](midjourney.md) - artistic peak; paid.
* [Ideogram](ideogram.md) - also great for text-in-image; paid with a free tier.
* [Canva](canva.md) - bigger template library, broader design surface.
* [Adobe Firefly](adobe_firefly.md) - commercially-safe alternative inside Creative Cloud.
* [GPT Image in ChatGPT](chatgpt.md) - same model, gated by a paid plan.

## FAQ

### Is Microsoft Designer free?

Yes - free with a Microsoft account. Microsoft 365 subscribers get more boosts (faster generation).

### Designer vs Bing Image Creator?

Same backend, different front-ends. Designer is the full design app (template + image generation). Image Creator is the lean "just give me an image" surface.

### What model does it use?

OpenAI's image model (GPT-image / DALL·E line) under a Microsoft licensing arrangement.

### Can I use the output commercially?

Microsoft's terms allow personal and commercial use of generated images. Read the current terms before relying on it for client work.

### Is there an API?

No public Designer API. For programmatic access to the same model, use [OpenAI Platform](openai_platform.md).

## Pointers

* Designer: [designer.microsoft.com](https://designer.microsoft.com)
* Image Creator: [bing.com/images/create](https://www.bing.com/images/create)
* For commercial-grade image gen at scale, see [midjourney.md](midjourney.md) or [flux.md](flux.md).
