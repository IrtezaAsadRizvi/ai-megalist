# Bubble: serious no-code platform for full web apps

Bubble sits in the app builders cluster alongside [Lovable](lovable.md), [Bolt.new](bolt_new.md), [Glide](glide.md), and [Softr](softr.md) - the no-code option with the highest ceiling and the steepest learning curve. Bubble is the no code platform that takes itself seriously as a software development tool. Where Glide gives you "spreadsheet to app" and Lovable gives you "prompt to app," Bubble gives you "build any web app, with full control over data model, workflows, and UI, without writing code." The tradeoff is that it's the steepest learning curve in the no code category. The AI features (Bubble AI for prompt to app, AI workflows) layer onto a foundation that was already industrial strength.

## What it actually is

A visual web application platform. Build database schema, UI pages, workflows, and integrations all in the browser. Includes Bubble AI for prompt to app generation, AI assisted workflow building, and AI plugins for OpenAI, Anthropic, etc. Subscription pricing; free dev mode for learning.

## Setup

1. Sign up at [bubble.io](https://bubble.io). Free dev tier; paid for production apps.
2. Start a new app: blank, from a template, or via Bubble AI from a prompt.
3. Define a data model: types and fields.
4. Design pages: drag and drop UI elements, configure dynamic data.
5. Build workflows: events trigger actions (create record, send email, call API).
6. Test in dev mode; deploy when ready (paid plan required for production URL and custom domain).

## How I use it day to day

I'm not a Bubble user; the developers I know who are use it for:

* **Real SaaS products built without code.** Bubble apps power real businesses. The ceiling is high.
* **Marketplaces and two sided products.** Bubble's flexibility around data and workflows fits this pattern well.
* **Replacing custom software for SMBs.** Bubble apps replace what would otherwise be a custom Rails or Django app.

For simple internal tools, Bubble is overkill (Glide or Softr are better). For greenfield consumer apps, the AI app builders (Lovable, Bolt) move faster but produce less maintainable artifacts. Bubble sits in the "real product, no code" niche.

## Gotchas

* Learning curve is real. Plan for a week or two before you're productive.
* Performance optimization on Bubble apps takes work; novice apps often have inefficient queries.
* Bubble locks you in; exporting to plain code is not really a thing.
* AI features are improving but the manual flow is still where serious Bubble work happens.

## Alternatives

* If you want lightweight no-code apps on top of Airtable or Sheets, [Softr](softr.md) ships in an afternoon.
* If you want mobile-first no-code with a spreadsheet backend, [Glide](glide.md) is the comparator.
* If you want prompt-to-code rather than visual no-code, [Lovable](lovable.md) or [Bolt.new](bolt_new.md) are the AI-native paths.
* If you want the newer AI-native no-code with payments and auth baked in, [Base44](base44.md) is closer in spirit.

## FAQ

### Is Bubble free?

Free dev tier for learning and prototyping. Production tiers (Starter, Growth, Production, Enterprise) start at modest monthly prices and scale with workload units (a Bubble metric for compute/database load).

### Bubble vs Lovable - which one?

Different bets. Bubble gives you full visual control over data model, workflows, and UI - high ceiling, steep curve. [Lovable](lovable.md) generates real React from a prompt, faster to first output, less control. Bubble for "I want to maintain this for years"; Lovable for "I want to ship this weekend."

### How long does it take to learn Bubble?

Plan for a week or two of focused practice before you're productive. The Bubble forum and the official Academy are the canonical resources.

### Can I export Bubble code?

Not really. Bubble locks you in - exporting to plain code is not a supported workflow. If portability matters, the prompt-to-code builders ([Lovable](lovable.md), [Bolt.new](bolt_new.md)) are the better choice.

### Does Bubble have AI features?

Yes - Bubble AI for prompt-to-app generation, AI-assisted workflow building, and plugins for OpenAI / Anthropic. Improving but the manual flow is still where serious Bubble work happens.

## Pointers

* Web: [bubble.io](https://bubble.io)
* Pricing: free dev tier; production tiers from Starter through Production and Enterprise.
* Pairs and competes with [softr.md](softr.md) (lighter weight, Airtable focused), [glide.md](glide.md) (mobile / spreadsheet focused), [base44.md](base44.md) (newer, AI native), [lovable.md](lovable.md) and [bolt_new.md](bolt_new.md) (prompt to code rather than no code).
