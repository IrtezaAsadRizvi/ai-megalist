# Meta AI

Meta AI is the assistant most of my non technical friends and family actually use, mostly because it's already inside WhatsApp. That's the interesting fact about it: distribution. The model is fine, the product is fine, but the reason it matters is that a billion people can summon it without installing anything.

## What it actually is

Meta's chat assistant powered by the Llama model family. It lives at [meta.ai](https://meta.ai) as a standalone web app and is also embedded inside WhatsApp, Instagram, Messenger, and Facebook search. Free, no account needed beyond the host app. Image generation and web search are built in.

## Setup

1. In WhatsApp: tap the blue circle icon, or message `@Meta AI` in any chat.
2. In Instagram: tap the search bar, type a prompt, or DM `@MetaAI`.
3. On the web: go to [meta.ai](https://meta.ai) and sign in with a Facebook or Instagram account.
4. (Optional) For voice: use the Meta AI voice mode in the standalone app, or talk to Ray Ban Meta glasses if you have them.
5. (Optional) For image generation: prefix prompts with "Imagine" inside WhatsApp.

## How I use it day to day

* **Quick answers inside WhatsApp.** When a friend asks a question in a group chat, tagging Meta AI is faster than switching apps. The answer lands in the same thread.
* **Image gen as a group activity.** "Imagine me as a 1970s rockstar" in a friend chat is a surprisingly fun social toy. Quality is below Midjourney but the latency to laughter is lower.
* **Translation in mixed language threads.** Meta AI inside WhatsApp picks up multilingual context naturally.
* I rarely use [meta.ai](https://meta.ai) standalone. The hook is the embedding, not the website.

## Gotchas

* Privacy footprint is non trivial. Meta uses interactions to improve its models in most regions; the EU and UK have stricter defaults. Read the data settings before pasting anything sensitive.
* Image generation sometimes refuses faces of public figures, sometimes doesn't. Behaviour is inconsistent, possibly tuned by region.
* The model under the hood is a Llama variant, not the absolute frontier. For hard reasoning I switch to Claude or ChatGPT.
* You can't easily upload long files; this is a chat product, not a document tool.

## Pointers

* Web: [meta.ai](https://meta.ai)
* About: [ai.meta.com](https://ai.meta.com)
* The underlying weights ship as Llama; see the family page at [llama.com](https://www.llama.com) if you want to run cousins of this model locally.
* Pairs with [whatsapp Business API](https://business.whatsapp.com) if you're building a customer facing bot inside WhatsApp itself.
