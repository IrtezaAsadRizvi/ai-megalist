# Google Stitch

Google Stitch is the prompt to UI tool that grew out of Google's Galileo acquisition and is now part of the Google Labs / DeepMind product surface. You describe a UI ("a settings page for a fitness app with sections for profile, notifications, and connected devices"), and Stitch generates editable design files plus production ready code. It's Google's answer to v0 and Magic Patterns, with the integration into the Google ecosystem as the differentiator.

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

## Pointers

* Web: [stitch.withgoogle.com](https://stitch.withgoogle.com)
* Free during the public beta.
* Pairs and competes with [v0.md](v0.md) (more code oriented), [magic_patterns.md](magic_patterns.md), [uizard.md](uizard.md) (more wireframe focused), and [figma.md](figma.md) (especially Figma Make). Stitch's edge is the design fidelity; the code part of the workflow has stronger options elsewhere.
