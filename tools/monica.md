# Monica: cross-browser AI sidebar that wraps multiple models

Monica is an AI browser sidebar in the same category as [Sider](sider.md), bundling [ChatGPT](chatgpt.md), [Claude](claude.md), and [Gemini](gemini.md) behind one interface that overlays any tab. Monica is the cross browser AI sidebar I install for friends who want one chat to rule them all without committing to a specific browser or OS. It wraps GPT, Claude, and Gemini behind a single sidebar that overlays any tab, and it has enough utility shortcuts (translate, summarize, rewrite) that it earns its place even before you start typing prompts.

## What it actually is

An AI assistant browser extension and standalone app that bundles access to multiple frontier models (GPT, Claude, Gemini, sometimes more) behind one interface. Available as Chrome / Edge / Firefox extensions, plus standalone apps for macOS, Windows, iOS, and Android. The free tier gives a daily allowance; paid plans unlock higher limits and image generation.

## Setup

1. Install the extension from the Chrome / Edge / Firefox store, or download the desktop app from [monica.im](https://monica.im).
2. Sign in with Google or email.
3. Pin the extension to your toolbar; the sidebar opens with cmd+M (configurable).
4. (Optional) Pick which model is your default. Monica routes prompts to the chosen model unless you specify another.
5. (Optional) Subscribe for more prompts, longer context, and image generation.

## How I use it day to day

* **Page summaries.** Click the extension on any article, ask "summarize," done. The sidebar persists across tabs so I can chain questions.
* **Translation as a shortcut.** Highlight any text on a page, right click, translate. Faster than Google Translate's clunkier flow.
* **Drafting replies in webmail.** Compose mode reads the current Gmail thread and proposes a reply in my preferred tone.
* **As a model comparison harness.** Sometimes I run the same prompt against GPT and Claude side by side from inside Monica when I'm trying to decide which one to trust on a specific kind of task.

## Gotchas

* The product wraps third party APIs, so you're paying Monica's markup over what direct access would cost. For heavy users, going direct to the model providers is cheaper.
* Privacy: prompts and page content flow through Monica's servers. Don't paste sensitive enterprise data without checking the policy.
* The free tier is generous enough for casual use but the in app upsells are frequent.
* Quality of "tasks" (summarize, rewrite) depends on which underlying model you've selected; defaults aren't always the best choice.

## Alternatives

* If you want the closest direct competitor with a similar wrapper model, [Sider](sider.md) is worth A/B-testing.
* If you want the agentic browser instead of a sidebar on top of Chrome, [Comet](comet.md) is Perplexity's take.
* If you're committed to a Microsoft browser anyway, [Edge Copilot](edge_copilot.md) is built in and free.
* If you'd rather pay model providers directly and skip the wrapper markup, go straight to [ChatGPT](chatgpt.md) or [Claude](claude.md).

## FAQ

### Is Monica free?

Yes, there's a free tier with a daily prompt allowance - enough for casual use. Paid plans unlock higher limits, image generation, and access to more models.

### Monica vs Sider - which one?

Genuinely close call. Both wrap multiple frontier models behind a sidebar. Test drive each for a day before committing - the differences are mostly UI and which utility shortcuts you use.

### Is Monica safe for sensitive data?

Prompts and page content flow through Monica's servers. For regulated or enterprise data, going direct to [ChatGPT](chatgpt.md) / [Claude](claude.md) (or running [Ollama](ollama.md) locally) is the safer path.

### Does Monica work in Safari?

Limited - the strongest support is Chrome / Edge / Firefox extensions plus standalone macOS / iOS / Windows / Android apps. Safari users typically use the standalone Mac app instead.

## Pointers

* Web: [monica.im](https://monica.im)
* Browser stores: search "Monica AI" on your extension store.
* Pricing: free tier, then monthly subscription.
* Pairs with [sider.md](sider.md) as the closest alternative; both wrap multiple models, with slightly different UI choices. Test drive both for a day before committing.
