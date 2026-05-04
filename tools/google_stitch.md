# Google Stitch: prompt-to-editable-UI from the ex-Galileo team

Google Stitch is in the prompt-to-UI category alongside [v0](v0.md) and [Magic Patterns](magic_patterns.md), with the angle that it produces editable design files (Figma-compatible) before the code. Grew out of Google's Galileo acquisition and is now part of the Google Labs / DeepMind product surface. You describe a UI ("a settings page for a fitness app with sections for profile, notifications, and connected devices"), and Stitch generates editable design files plus production ready code.

## What it actually is

A prompt to UI design tool from Google. Generates editable mockups (compatible with Figma) and code (HTML/CSS, React, sometimes more). Web based; free during the public beta. Available at [stitch.withgoogle.com](https://stitch.withgoogle.com).

## Setup

1. Go to [stitch.withgoogle.com](https://stitch.withgoogle.com). Sign in with a Google account.
2. Describe a UI in plain language, or upload a sketch.
3. Stitch returns a mockup; iterate by editing the prompt or adjusting the design directly.
4. Export to Figma, or download the generated code.
5. (Optional) Connect to Google's broader Labs experiments if you want to experiment with adjacent tools.

## How I use it day to day

I'm not a designer, but for prototype scaffolds:

* **Greenfield UI sketches.** When I have a vague idea and want a starting point, Stitch turns the description into something I can react to. Faster than starting in Figma cold.
* **Design system aware generation.** Stitch is good at applying a consistent style across screens; less common in pure prompt to code tools that focus on a single component.
* **As a Figma fast start.** Generate, export to Figma, clean up. The export keeps layers sensible.

For production code I'd still hand off to a real frontend developer or use [v0.md](v0.md) if I'm targeting Next.js. Stitch is in the design upstream of code.

## Gotchas

* The product is in beta; expect changes. APIs and pricing may shift before general availability.
* Code output is competent but not always idiomatic. Treat as scaffolding.
* Editing is part prompt, part direct manipulation; the model of when to do which takes a session to grok.
* Google Labs products sometimes get sunset; bet your workflow on this only if you can swap to a competitor cleanly.

## Alternatives

* If you want production React + Tailwind components from a prompt, [v0](v0.md) is more code-oriented.
* For a similar prompt-to-UI flow with a different design opinion, [Magic Patterns](magic_patterns.md) is the head-to-head competitor.
* If you're starting from a sketch or wireframe instead of a prompt, [Uizard](uizard.md) is sharper at that.
* For staying inside Figma with prompt-to-prototype, [Figma Make](figma.md) is the in-tool option.

## FAQ

### Is Google Stitch free?

Yes - free during the public beta as of April 2026. Pricing post-beta is unannounced; Google Labs products often shift between free / paid / sunset on short notice, so don't bet a paid workflow on it.

### Stitch vs v0 - which should I use?

Different upstream-vs-downstream positions. Stitch is design-first - generates editable mockups you can export to Figma. [v0](v0.md) is code-first - generates React + Tailwind components you ship. If you have a designer in the loop, Stitch first then v0. If you don't, v0 alone.

### Does Stitch export to Figma?

Yes - the design files export with sensible layer structure, which is the main differentiator over pure code-gen tools. The Figma round-trip works for further design polish before handing to engineering.

### Is Stitch the same as Galileo AI?

Effectively yes - Stitch is the productized successor to Galileo AI after Google's acquisition. The team and the underlying approach are the same; the product surface is now inside Google Labs.

## Pointers

* Web: [stitch.withgoogle.com](https://stitch.withgoogle.com)
* Free during the public beta.
* Pairs and competes with [v0.md](v0.md) (more code oriented), [magic_patterns.md](magic_patterns.md), [uizard.md](uizard.md) (more wireframe focused), and [figma.md](figma.md) (especially Figma Make). Stitch's edge is the design fidelity; the code part of the workflow has stronger options elsewhere.
