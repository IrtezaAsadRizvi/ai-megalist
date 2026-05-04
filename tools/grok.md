# Grok: xAI's chat assistant with X firehose access

Grok is xAI's frontier chat assistant, an alternative to [ChatGPT](chatgpt.md), [Claude](claude.md), and [Gemini](gemini.md) with two distinguishing angles - real-time access to the X firehose, and looser content policies than the mainstream products. For "what are people saying about X right now" questions, nothing else does this. For everything else, capability is competitive if you can stomach the brand association.

## What it actually is

A frontier model (currently Grok 4) from xAI. Available at [grok.com](https://grok.com), inside X (formerly Twitter), and via API at [console.x.ai](https://console.x.ai). Distinguishing features: real time X data integration, less filtered content policies, voice mode with personalities.

## Setup

1. Go to [grok.com](https://grok.com). Sign in with X (or email).
2. Free tier: limited messages + image gen.
3. SuperGrok ($30/mo): higher limits, latest model, voice, image gen unlimited, advanced reasoning.
4. (X integration) If you have X Premium ($8/mo), Grok is included.
5. (API) Sign up at [console.x.ai](https://console.x.ai); OpenAI compatible endpoints.

## How I use it day to day

* **Honest:** Not my daily driver. I open Grok occasionally to test capability and to ask "what's happening on X right now."
* **Real time X queries.** "What are people saying about [event] in the last hour?" Grok pulls from X's firehose and synthesises; nothing else does this.
* **Image generation.** Grok's image gen is competitive (uses FLUX under the hood); fewer content restrictions than DALL·E.
* **Voice mode.** The "personalities" (Sexy, Conspiracy, Comedian, etc.) are gimmicks but speak to the brand positioning. The base voice is fine.
* **API for tasks where content policies are restrictive elsewhere.** Some legitimate use cases (security research, fiction with mature themes) hit guardrails on other platforms; Grok is more permissive.

## Gotchas

* Brand association with Elon Musk is a meaningful consideration for some teams. The model's responses on certain political topics also reflect this.
* "Looser content policies" cuts both ways. Some outputs require careful filtering before customer facing use.
* Real time X data is the unique value; for everything else, Claude / GPT / Gemini are at least as capable.
* The product moves quickly; what's true this month may not be next.
* X integration is convenient if you live on X; less useful otherwise.

## Alternatives

* For mainstream daily-driver chat without the X association, [Claude](claude.md), [ChatGPT](chatgpt.md), or [Gemini](gemini.md) are the picks.
* If you want unfiltered local inference, [DeepSeek](deepseek.md) or any OSS frontier via [Ollama](ollama.md) gives you that without sending data anywhere.
* For real-time web data without the X firehose specifically, [Perplexity](perplexity.md) is broader-source.
* If you want image gen with fewer content restrictions than DALL-E, running [FLUX](flux.md) locally is the cleaner path.

## FAQ

### Is Grok free?

Yes - free tier covers limited messages and image gen. SuperGrok is $30/mo (higher limits, latest model, voice, unlimited image gen). If you have X Premium ($8/mo) Grok is included at a lower tier.

### Grok vs ChatGPT - which is better?

Different jobs. Grok wins on real-time X data and on prompts that hit content guardrails elsewhere. [ChatGPT](chatgpt.md) wins on broader feature surface, more reliable reasoning, and a sturdier brand for client-facing work. For most daily tasks, ChatGPT or Claude.

### Does Grok have an API?

Yes - at console.x.ai with OpenAI-compatible endpoints. Pricing is competitive; for OSS-model inference at faster speed, [Groq](groq.md) (different company, similar name) is the alternative worth comparing.

### Is Grok safe for business use?

Depends on your audience. The "looser content policy" cuts both ways - some outputs require careful filtering before customer-facing use, and the brand association with Elon Musk is a real consideration for some teams. The model's responses on certain political topics also reflect this.

## Pointers

* [grok.com](https://grok.com)
* API: [console.x.ai](https://console.x.ai), OpenAI compatible.
* For unrestricted local model: any OSS frontier ([deepseek.md](deepseek.md), Llama via [ollama.md](ollama.md)).
* For mainstream chat without the X integration: [chatgpt.md](chatgpt.md), [claude.md](claude.md), [gemini.md](gemini.md).
