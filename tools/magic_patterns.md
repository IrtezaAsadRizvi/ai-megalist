# Magic Patterns: prompt-to-UI with React and Figma output

Magic Patterns is a prompt-to-UI tool in the same neighborhood as [v0](v0.md), [Google Stitch](google_stitch.md), and [Uizard](uizard.md) - the twist is dual output to React and Figma. Magic Patterns is the prompt to UI tool that splits the difference between a design tool and a code tool. You describe a UI, get React components rendered live, and an editable Figma file alongside. For teams where designers and developers want to work from the same artifact, this dual output is the differentiator.

## What it actually is

A web app that generates React components and Figma designs from a text prompt. Output is editable on both sides: tweak the React in the IDE, or open the Figma file and edit visually. Targets product UIs, not marketing sites. Subscription pricing.

## Setup

1. Sign up at [magicpatterns.com](https://www.magicpatterns.com). Free tier with limits.
2. Create a new pattern: describe what you want.
3. Magic Patterns returns a live preview, the React code, and a Figma file.
4. Iterate: edit the prompt, edit the code in the IDE, or edit the design in Figma.
5. Export: copy the React, push to a connected GitHub repo, or open in Figma directly.

## How I use it day to day

I've used Magic Patterns for prototypes a handful of times:

* **Product UIs that need to feel real.** Tables, forms, data heavy screens. Magic Patterns does these better than v0 in my limited testing.
* **Bridging design and dev.** When a designer wants Figma and a developer wants code, the dual output saves a translation step.
* **Iterating on density.** Refining a dashboard from "too sparse" to "right" is fast when you can see both the rendered version and tweak the prompt.

For pure code or pure design, the specialist tools (v0, Figma) are stronger. Magic Patterns earns its place when both worlds matter for the same artifact.

## Gotchas

* Output components don't always plug into your existing design system. Plan for adaptation.
* The Figma file is a generated artifact, not a hand crafted one; layer hygiene varies.
* Pricing has shifted as the product matures; check current tiers.
* Like all prompt to UI tools, garbage in produces garbage out. Specific prompts beat vague ones by a lot.

## Alternatives

* If you're a Next.js team and want React/Tailwind first, [v0](v0.md) is the more focused tool.
* If you start from prompt and want editable UI design (not code), [Google Stitch](google_stitch.md) is the design-first sibling.
* If you want wireframe-to-UI rather than prompt-to-UI, [Uizard](uizard.md) is the older take.
* If the eventual home is Figma anyway, [Figma](figma.md) + Figma Make removes the export step.

## FAQ

### Is Magic Patterns free?

Yes, there's a free tier with limits. Paid tiers are monthly subscriptions; pricing has shifted as the product matures, so check current numbers before budgeting.

### Magic Patterns vs v0 - which should I use?

Magic Patterns when designers and developers need to work from the same artifact - dual output to React and Figma. [v0](v0.md) when the team is Next.js-native and code is the destination. I'd pick by which side of the team owns the artifact.

### Does Magic Patterns export to my design system?

Components don't always plug into an existing design system cleanly. Plan for adaptation. The Figma file is a generated artifact, so layer hygiene varies.

## Pointers

* Web: [magicpatterns.com](https://www.magicpatterns.com)
* Pricing: free tier, then monthly subscription.
* Pairs and competes with [v0.md](v0.md) (Next.js native, code first), [google_stitch.md](google_stitch.md) (design first), [uizard.md](uizard.md) (wireframe first), and [figma.md](figma.md) (the eventual integration target). For UI heavy product work, having one of these in the rotation is now table stakes.
