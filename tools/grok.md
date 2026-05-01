# Grok

Grok is xAI's chat assistant and the AI with the loosest content policies among the major frontier products. Built into X (Twitter), with real time access to the X firehose, Grok is uniquely good at "what are people saying about X right now" questions. For everything else, capability is competitive if you can stomach the brand association.

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

## Pointers

* [grok.com](https://grok.com)
* API: [console.x.ai](https://console.x.ai), OpenAI compatible.
* For unrestricted local model: any OSS frontier ([deepseek.md](deepseek.md), Llama via [ollama.md](ollama.md)).
* For mainstream chat without the X integration: [chatgpt.md](chatgpt.md), [claude.md](claude.md), [gemini.md](gemini.md).
