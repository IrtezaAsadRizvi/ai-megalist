# SaneBox: AI email triage that routes instead of replies

SaneBox is the AI email triage service that competes with [Shortwave](shortwave.md) and [Fyxer](fyxer.md), and complements speed-first clients like [Superhuman](superhuman.md). SaneBox is the email triage tool that's been doing this since 2010 and got better with the LLM era. Where Superhuman teaches keyboard speed and Fyxer drafts replies, SaneBox is pure triage - it learns your patterns; routes incoming emails into folders (SaneLater for non urgent, SaneNews for newsletters, SaneBlackHole for stuff you never want to see again). Less ambitious than its newer competitors; more proven on inbox volume management.

## What it actually is

A SaaS that hooks into Gmail, Outlook, Office 365, Apple Mail, and most IMAP. Doesn't replace your email client; works alongside any client by managing folders. Features: SaneLater (low priority), SaneNews (newsletters), SaneBulk (mailing lists), SaneBlackHole (block sender forever), SaneReminders (snooze with reminder if no reply), SaneNoReplies (track who you emailed without response).

## Setup

1. Go to [sanebox.com](https://www.sanebox.com), sign up.
2. Free trial; pricing $7 to $36/mo depending on plan (Snack, Lunch, Dinner). Annual options.
3. Connect your email account (OAuth or app password).
4. SaneBox starts learning your patterns. Manually move emails to SaneLater for ~a week to train.
5. After training, incoming email is auto sorted; check the SaneLater folder once a day.

## How I use it day to day

* **Honest:** I've used SaneBox at various points; effective at the specific job of inbox decluttering.
* **SaneLater for "don't bother me but don't delete."** Newsletter, marketing, low priority colleagues - folder check once a day.
* **SaneBlackHole for permanent silence.** Drag a sender's email to the folder; SaneBox archives anything from them forever. Unsubscribing without unsubscribing.
* **SaneReminders** for "remind me if no reply." Send an email with a special CC; if no reply by X, it lands back in your inbox.
* **As a complement to Superhuman / Shortwave.** SaneBox does the routing; Superhuman / Shortwave handles the responses. They're orthogonal.
* **Works with Apple Mail.** One of the few AI email tools that does. Useful for the niche of Apple Mail loyalists.

## Gotchas

* Doesn't draft responses (that's Superhuman / Fyxer territory); pure routing.
* The training period is real. First two weeks, override mistakes deliberately.
* Pricing tiers gate features; the cheaper plan misses some niceties.
* For modern AI features (drafted replies, AI search, summaries), pair with another tool.
* Privacy: SaneBox's algorithms run on your email; read the data policy.

## Alternatives

* If you want drafted replies plus triage in one tool, [Fyxer](fyxer.md) is the executive-assistant style pick.
* If you want keyboard-speed email and don't mind paying $25+/mo, [Superhuman](superhuman.md) is the answer.
* If you want a free Gmail front end with strong AI, [Shortwave](shortwave.md) is the realistic choice.
* If you live in Apple Mail and want AI features in the client itself, SaneBox is one of the few that works there - most modern AI email tools assume Gmail.

## FAQ

### Is SaneBox free?

No - free trial only. Pricing is $7 to $36/mo across the Snack, Lunch, and Dinner tiers, with annual discounts. The cheapest tier locks out some features (SaneReminders, SaneNoReplies); price the tier against the features you actually use.

### Does SaneBox draft replies?

No - SaneBox is pure routing. It moves email into folders (SaneLater, SaneNews, SaneBlackHole). For drafted replies, pair it with [Fyxer](fyxer.md) or [Superhuman](superhuman.md).

### Does SaneBox work with Apple Mail?

Yes, and it's one of the few AI email tools that does. SaneBox manages folders on the IMAP side, so it works alongside any client that respects them - Apple Mail, Outlook, Gmail web, mobile, third party.

### How long does SaneBox take to learn my patterns?

About a week of deliberate training. Move misfiled emails to the right folder for the first few days; after that, accuracy is high. Skipping the training week is the most common reason people uninstall.

## Pointers

* [sanebox.com](https://www.sanebox.com)
* For drafted replies + triage: [fyxer.md](fyxer.md).
* For keyboard speed: [superhuman.md](superhuman.md).
* For free Gmail front end with AI: [shortwave.md](shortwave.md).
