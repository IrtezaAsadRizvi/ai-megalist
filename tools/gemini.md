# Gemini: Google's AI assistant wired into Workspace

Gemini is Google's frontier chat assistant, the third pillar alongside [ChatGPT](chatgpt.md) and [Claude](claude.md) for daily-driver work, and the one I default to whenever the task touches Google. Search context, Gmail, Docs, Drive, YouTube - the integration is the point. Out of the surface area, Gemini is fine; inside Workspace, it's hard to beat.

## What it actually is

Google DeepMind's frontier model, with a chat interface at [gemini.google.com](https://gemini.google.com), Gemini Live (real time voice), Gems (custom assistants), Deep Research, and tight integration into every Workspace product (Gmail, Docs, Sheets, Slides, Meet). The current top tier is Gemini 3 Pro/Ultra (April 2026), with a 2M token context window on Ultra.

## Setup

1. Go to [gemini.google.com](https://gemini.google.com), sign in with a Google account.
2. Install the Gemini app (iOS/Android). Replaces Google Assistant on Android.
3. (Optional) Subscribe to Google AI Pro ($20/mo) for higher limits and Deep Research, or Ultra ($60+/mo) for the biggest context and Gemini Live priority.
4. (Workspace) An admin enables Gemini at admin.google.com → Apps → Google Workspace → Gemini.
5. Inside any Doc / Gmail / Sheet, hit the Gemini icon in the side panel.

## How I use it day to day

* **In Gmail.** "Summarise this thread, draft a reply that pushes the meeting to next week." Lives in the right panel, doesn't break my flow.
* **In Docs.** "Help me write" gives a paragraph; "Tune" rewrites with a slider for length and formality. Fewer clicks than copying into ChatGPT.
* **Deep Research** for landscape scans. The output is closer to a structured report than ChatGPT's, in my experience, with better source diversity.
* **Gemini Live for hands free thinking.** Pairs especially well in the car or on a walk; I get the kind of slow, exploratory conversation I can't have at a keyboard.
* **Gems.** Tiny custom assistants with a system prompt and uploaded files. Cheaper alternative to a custom GPT, lives in Gemini's UI.

## Gotchas

* The free tier is genuinely useful but feels different from Pro/Ultra; if you're evaluating, run the same prompt on both.
* Gemini's defaults can be overcautious. For research questions it sometimes refuses on topics ChatGPT and Claude answer freely. Switch models (or rephrase) and try again.
* Workspace integrations require admin enablement and respect data residency rules. In a regulated industry, check before turning on.
* Voice mode burns tokens fast on Ultra. The "free with sub" advertising is true; watch the quotas anyway.

## Alternatives

* If you want the calmer voice and 1M context for long-form analysis, [Claude](claude.md) is the daily-driver alternative.
* For broader feature surface (voice, image gen, Operator, native video), [ChatGPT](chatgpt.md) ships more out-of-the-box.
* If you live in Microsoft 365 instead of Google Workspace, [Microsoft Copilot](microsoft_copilot.md) is the parallel.
* For grounded Q&A on your own documents, [NotebookLM](notebooklm.md) is the sibling Google product, often more useful than Gemini chat for that job.

## FAQ

### Is Gemini free?

Yes - the free tier on gemini.google.com is genuinely useful and replaces Google Assistant on Android. Google AI Pro is $20/mo (higher limits, Deep Research). Ultra is $60+/mo for the 2M-token context and Gemini Live priority.

### Gemini vs ChatGPT - which is better?

Different jobs. Gemini wins inside Google Workspace (Gmail, Docs, Sheets) and on multimodal at scale. [ChatGPT](chatgpt.md) wins on broader features and a wider model picker. Most people use both.

### What's Gemini's context window?

2M tokens on Ultra (the largest in production as of April 2026), 1M on Pro. The 2M is real but, like Claude's 1M, the model gets sloppier as you fill it - I aim to stay under ~500K in practice.

### Does Gemini work in Google Sheets?

Yes - via the Workspace integration. An admin enables Gemini at admin.google.com → Apps → Google Workspace → Gemini. Then you get the side panel inside every Doc / Gmail / Sheet.

### Is Gemini good for coding?

Capable, especially with the 1M-2M context for whole-repo questions. For terminal agentic work, the matched product is [Gemini CLI](gemini_cli.md). For an in-editor experience, [Cursor](cursor.md) lets you select Gemini as the model.

## Pointers

* [gemini.google.com](https://gemini.google.com)
* [aistudio.google.com](https://aistudio.google.com) for the API and model playground.
* [notebooklm.md](notebooklm.md) is a sibling product, often more useful for grounded Q&A than Gemini's chat.
* For Deep Research alternatives, see [chatgpt.md](chatgpt.md) and Claude Research.
