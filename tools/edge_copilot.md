# Edge Copilot: AI sidebar in Microsoft Edge

Edge Copilot is a browser-AI sidebar in the AI-browsers category, a lighter alternative to full AI-native browsers like [Comet](comet.md) and [Dia](dia.md). It's the AI assistant baked into Microsoft Edge, available as a side panel one click from any tab. The easiest way to get a chat assistant that can see the page you're reading, without installing an extension or copying text into another tab. For Microsoft 365 users it also reaches into your Word, Excel, and Outlook context. That tight integration is the whole point.

## What it actually is

A sidebar AI assistant integrated into the Microsoft Edge browser. Powered by GPT class models (the exact model rotates; in 2026 it's a mix of GPT 5 and Microsoft's own MAI series depending on tier). Can summarize the current page, draft text, generate images, and (with Copilot Pro or Microsoft 365 Copilot) act on Office documents.

## Setup

1. Install Edge from [microsoft.com/edge](https://www.microsoft.com/edge) if you don't already have it.
2. Click the Copilot icon at the top right of the browser, or press the keyboard shortcut.
3. Sign in with a Microsoft account (free tier) or a Microsoft 365 account (paid features).
4. (Optional) Subscribe to Copilot Pro or Microsoft 365 Copilot for higher limits and Office integration.
5. (Optional) Toggle the "Allow access to page content" permission so the assistant can summarize the current tab.

## How I use it day to day

* **Page summaries.** "Summarize this article in three bullets" against a long form post. Edge Copilot can see the open tab without me pasting anything, which removes the main friction.
* **Inline drafts on web forms.** Compose tab gives a built in writing assistant in any text field. Useful for replying to forum posts or filling out long forms in a halfway readable tone.
* **Image gen via DALL E.** "Designer" tab inside the sidebar. Quality is fine; the value is that it's already in the browser.

I don't use it as my daily driver chat (Claude and ChatGPT win there), but for "I'm already reading this page, I have a question about it," nothing else is faster.

## Gotchas

* Free tier is rate limited and the underlying model rotates; quality is inconsistent across the day.
* Page access permission is per site and feels finicky; I've had it silently fail to read certain SPAs.
* Privacy stance is enterprise grade if you're on Microsoft 365 Copilot, more ambiguous on the consumer free tier. Read the Bing chat data policy before pasting anything sensitive.
* On macOS the Edge build is a generation behind Windows for some Copilot features.

## Alternatives

* If you want a full AI-native browser instead of a sidebar, [Comet](comet.md) or [Dia](dia.md) are the deeper bets.
* If you want a sidebar AI in Chrome / Safari / Firefox without switching browsers, [Monica](monica.md) or [Sider](sider.md) are the cross-browser options.
* If you live in Microsoft 365 and want the broader Copilot story (Word, Excel, Outlook, Teams), [Microsoft Copilot](microsoft_copilot.md) is the bigger product.
* If you want privacy-first with local-only AI, Brave Leo is the closest free alternative.

## FAQ

### Is Edge Copilot free?

Yes - the sidebar is free with a Microsoft account, rate-limited and with model rotation. Copilot Pro ($20/mo) lifts limits and gives priority access. Microsoft 365 Copilot is the enterprise tier with Office integration; pricing is per-seat enterprise.

### Edge Copilot vs ChatGPT - which should I use?

Different jobs. [ChatGPT](chatgpt.md) is the daily-driver chat with the broadest feature set. Edge Copilot is a context-aware sidebar - the value is "I'm already reading this page, I have a question about it" without copying text into another tab. Use both; they don't compete.

### What model does Edge Copilot use?

Rotates between GPT-class models and Microsoft's own MAI series depending on the tier. The free tier rotates more aggressively (cheaper models on busy days); Pro is more consistent. Quality is GPT-4-class on average; not the right pick if you need a specific frontier model.

### Is Edge Copilot safe to use on work data?

Microsoft 365 Copilot has the enterprise-grade privacy story (no training on your data, audit logs, region pinning). The free consumer tier is more ambiguous - read the Bing chat data policy before pasting anything sensitive.

## Pointers

* Edge: [microsoft.com/edge](https://www.microsoft.com/edge)
* Copilot: [copilot.microsoft.com](https://copilot.microsoft.com)
* Pricing: free; Copilot Pro at consumer pricing; Microsoft 365 Copilot at enterprise pricing.
* Pairs with [microsoft_copilot.md](microsoft_copilot.md) (the broader Copilot ecosystem) and [monica.md](monica.md) or [sider.md](sider.md) if you'd rather have a sidebar assistant in a non Microsoft browser.
