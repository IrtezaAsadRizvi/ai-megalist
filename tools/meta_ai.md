# Meta AI: Llama-powered assistant inside WhatsApp and Instagram

Meta AI is Meta's general-purpose chat assistant in the same category as [ChatGPT](chatgpt.md), [Claude](claude.md), and [Gemini](gemini.md), distinguished mainly by distribution rather than model quality. Meta AI is the assistant most of my non technical friends and family actually use, mostly because it's already inside WhatsApp. That's the interesting fact about it: distribution. The model is fine, the product is fine, but the reason it matters is that a billion people can summon it without installing anything.

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

## Alternatives

* If you want frontier reasoning, [Claude](claude.md) or [ChatGPT](chatgpt.md) are still the picks.
* If you want deep Google Workspace integration, look at [Gemini](gemini.md).
* If you want to run the same Llama family locally without sending data to Meta, [Ollama](ollama.md) is the path.
* If you're inside Microsoft 365, [Microsoft Copilot](microsoft_copilot.md) is the equivalent embedded assistant.

## FAQ

### Is Meta AI free?

Yes, completely free across WhatsApp, Instagram, Messenger, Facebook, and meta.ai. No subscription tier exists for the consumer product.

### Meta AI vs ChatGPT - which is better?

[ChatGPT](chatgpt.md) wins on raw capability and feature surface (voice, image gen, agents, Operator). Meta AI wins on distribution - it's already in the apps you're chatting in. For hard reasoning, switch out; for "ask in the group chat," it's faster.

### What model does Meta AI use?

A Llama variant under the hood, not the absolute frontier. Quality is fine for routine questions and image generation; below Claude / GPT for hard reasoning.

### Is Meta AI private?

Privacy footprint is non-trivial. Meta uses interactions to improve its models in most regions; the EU and UK have stricter defaults. Read the data settings before pasting anything sensitive.

## Pointers

* Web: [meta.ai](https://meta.ai)
* About: [ai.meta.com](https://ai.meta.com)
* The underlying weights ship as Llama; see the family page at [llama.com](https://www.llama.com) if you want to run cousins of this model locally.
* Pairs with [whatsapp Business API](https://business.whatsapp.com) if you're building a customer facing bot inside WhatsApp itself.
