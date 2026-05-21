# Poe: one subscription, every chat model

Poe is Quora's "I'll pay one fee and stop juggling tabs" play. One subscription, one app, every major frontier model (Claude, GPT, Gemini, Grok, Llama, Mistral) plus a long tail of community bots. The product isn't a frontier model - it's a unified front-end and a marketplace. Useful when you want to compare answers across models without juggling four logins.

## What it actually is

A multi-model chat product from Quora. Web, iOS, macOS, Android. Lets you talk to first-party models from Anthropic, OpenAI, Google, xAI, Meta, Mistral, and others, plus user-created "bots" (custom prompts on top of any base model). The killer feature for power users is **@-mentioning** a different bot mid-conversation to fork the response - run the same question through Claude, GPT, and Gemini side by side.

## Setup

1. Sign up at poe.com.
2. Free tier gets you daily messages with most models. Subscribe ($20/mo Premium) for higher limits and access to flagship tiers (Opus, GPT-5.5 Pro, etc.).
3. Use the model picker, or type `@ClaudeOpus`, `@GPT-5.5`, `@Gemini-Pro` to switch mid-thread.
4. (Optional) Build a bot: a custom system prompt on top of any base model. Share it; earn revenue if it gets used.

## How I use it day to day

* **Model A/B testing.** Ask the same question to two models in the same thread; compare directly.
* **One-off frontier access** without paying three subscriptions when I'm mostly a Claude user.
* **Custom bots** for repeat workflows - a "rewrite for clarity" bot, a "translate to formal English" bot.
* **Image gen** through whichever model's image side I want (DALL-E, Imagen, Flux), all under one subscription.

## Gotchas

* You're paying a margin on top of underlying model costs. For heavy use of one model, going direct (Claude/Pro, ChatGPT Plus) is cheaper.
* The "Premium" tier has soft caps on the most expensive models (Opus, GPT-5.5 Pro). Read the message-budget page.
* Custom bots are only as good as their prompt. Most are mediocre; a few are excellent.
* No deep file/codebase work like [Claude](claude.md)'s Projects or [ChatGPT](chatgpt.md) Pro features.

## Alternatives

* [ChatGPT](chatgpt.md) / [Claude](claude.md) / [Gemini](gemini.md) directly - cheaper if you mostly use one.
* [OpenRouter](openrouter.md) - API-side equivalent for developers.
* [HuggingChat](https://huggingface.co/chat) - free OSS-model chat.
* [Kagi Assistant](kagi.md) - paid multi-model chat tied to the Kagi search subscription.

## FAQ

### Is Poe free?

Free tier exists with daily message caps across most models. Premium is $20/mo (or $200/yr).

### Poe vs ChatGPT Plus?

If you live in one model, go direct. If you want every model under one bill and the ability to compare answers in one thread, Poe wins.

### Can I build a bot on Poe?

Yes - any user can create a bot (custom prompt + base model). Verified bot creators can earn revenue based on usage.

### Does Poe have an API?

Yes - the Poe API lets you call any of the supported models via a single endpoint. Less polished than [OpenRouter](openrouter.md) but works.

### Who owns Poe?

Quora. Adam D'Angelo's team builds it.

## Pointers

* Site: [poe.com](https://poe.com)
* API docs: [creator.poe.com](https://creator.poe.com)
* Pricing: [poe.com/subscription](https://poe.com/subscription)
* For the API-side multi-model story, see [openrouter.md](openrouter.md).
