# Trae: ByteDance's AI-native VS Code fork

Trae sits in the AI-native IDE category alongside [Cursor](cursor.md), [Windsurf](windsurf.md), and [Void](void.md), competing on the same forked-VS-Code substrate with aggressive free-tier promotions. Trae is ByteDance's AI IDE, sitting in the same architectural niche as Cursor and Windsurf: a forked VS Code with AI features built into the core, not bolted on as an extension. It rolled out heavily in 2024 to 2025 with aggressive free tier offerings, including access to frontier models (Claude, GPT) at no cost during the launch period. That subsidy made it widely tried; whether users stick around as the free tier tightens is the open question.

## What it actually is

An AI native code editor by ByteDance. Forked from VS Code. Includes chat, inline edits, codebase aware features, and an agent mode (Builder) for multi step tasks. Available for macOS and Windows. Free during the early access period; commercial tiers expected as the product matures.

## Setup

1. Download from [trae.ai](https://trae.ai). Sign in with email or Google.
2. Import VS Code settings and extensions on first launch.
3. Pick a model in the chat sidebar (the available models depend on the current promotion).
4. Open a project and use chat, inline edits, or Builder agent mode.
5. (Optional) Configure custom prompts or workflows in settings.

## How I use it day to day

I've tried Trae and don't use it daily; Cursor and Claude Code remain my defaults. The cases where Trae appeals:

* **Free access to frontier models.** When the promotion is active, you can hit Claude or GPT 5 without paying. Useful for occasional users.
* **As a Cursor alternative for users in regions where ByteDance has better presence.** Asia Pacific in particular.
* **For trying agent style coding without commitment.** Builder mode is a reasonable on ramp.

The core editor experience is competent. Whether ByteDance's long term roadmap matches Cursor's is unclear; pricing and model access will likely tighten as the product matures.

## Gotchas

* Data routing and privacy: read the policy carefully if your codebase is sensitive. ByteDance corporate ownership is a consideration for some users.
* Free model access is a promotion, not a permanent feature. Don't bet on it being free forever.
* Some VS Code extensions have compatibility friction.
* The product evolves fast; tutorials more than a few months old may not match the current UI.

## Alternatives

* If you want the polished commercial leader, [Cursor](cursor.md) is the default most working developers use.
* If you want a similar AI-native fork at a friendlier price, [Windsurf](windsurf.md) is the closest comparator.
* If you want OSS and bring-your-own-key, [Void](void.md) is the credible open alternative.
* If you want a parallel-agent extension that grafts onto vanilla VS Code, [Pochi](pochi.md) is the lighter path.

## FAQ

### Is Trae free?

Yes - Trae has been free during early access, including frontier model access (Claude, GPT). That's a launch promotion, not a permanent feature; commercial tiers are expected as the product matures.

### Trae vs Cursor - which is better?

[Cursor](cursor.md) is the more polished and battle-tested option in 2026. Trae is the cheaper alternative with subsidized model access during the promo window. Try both for a week each before committing if you're price-sensitive.

### Is Trae safe to use on private codebases?

Read the data routing and privacy policy carefully. ByteDance corporate ownership is a consideration some teams take seriously; if your codebase is sensitive, [Void](void.md) with a local model gives you stronger guarantees.

### Does Trae work with VS Code extensions?

Mostly yes - it's a VS Code fork, so most extensions port over. Some have compatibility friction with the AI sidebar; check the specific extensions you depend on before switching.

## Pointers

* Web: [trae.ai](https://trae.ai)
* Pairs and competes with [cursor.md](cursor.md) (the polished leader), [windsurf.md](windsurf.md) (the closest alt), [void.md](void.md) (OSS), and [pochi.md](pochi.md) (extension based, parallel agents). For users on the fence, try two of these for a week each before deciding.
