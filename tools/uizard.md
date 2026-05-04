# Uizard: wireframe-to-UI for non-designers

Uizard sits in the AI design category alongside [Google Stitch](google_stitch.md), [Magic Patterns](magic_patterns.md), and [v0](v0.md), pitched as the wireframe accelerator rather than the production design tool. Uizard is the AI design tool aimed at non designers. The flagship trick is "draw a wireframe on paper, take a photo, get a clickable digital design." It's been around since before the LLM wave, which gives it a different DNA from the v0 era of prompt to code tools: more focused on the design artifact, less on shipping production code.

## What it actually is

A web based UI design platform with AI assists for wireframe to design conversion, theme generation, and screen generation from text prompts. Outputs editable designs, exportable to Figma and as code (HTML/CSS, partial React). Subscription pricing with a free starter tier.

## Setup

1. Sign up at [uizard.io](https://uizard.io). Free tier with limits.
2. Start a project: scratch, screenshot import (transforms a screenshot into editable design), or wireframe scan.
3. (Optional) Use Autodesigner: describe the app in plain language, get a multi screen design.
4. Edit screens with drag and drop components.
5. Share the prototype as a clickable URL, or export.

## How I use it day to day

I've used Uizard occasionally for early product sketches:

* **Wireframe scans.** Sketch on paper, snap a photo, get a digital design. Magical for the demo, useful for early concepting; the output needs cleanup before serious work.
* **Autodesigner for first drafts.** "A todo app with a sidebar for projects and a main area for tasks" produces a usable starting point.
* **Sharing prototypes with non designers.** The clickable URL is friendlier than a Figma link for stakeholders who won't install Figma.

For production design work I'd reach for Figma. Uizard is the wireframe accelerator and the prototype scratchpad.

## Gotchas

* Output is wireframe quality, not pixel perfect. Don't expect Figma like fidelity.
* Code export is limited and rarely production ready. For prompt to React, [v0.md](v0.md) and [magic_patterns.md](magic_patterns.md) are stronger.
* The wireframe scan feature is impressive in demos and inconsistent in practice. Clean handwriting helps.
* The AI components evolve; older tutorials may show flows that have been replaced.

## Alternatives

* If you want higher design fidelity from a prompt with editable output, [Google Stitch](google_stitch.md) (formerly Galileo) is the newer pick.
* If you want prompt-to-React with a real component library, [v0](v0.md) is the production-grade path.
* If you want React plus Figma output in one tool, [Magic Patterns](magic_patterns.md) covers both.
* If you want production design work in earnest, [Figma](figma.md) is where the work eventually lives.

## FAQ

### Is Uizard free?

Yes - the starter tier is free with limits. Pro and Business tiers add more screens, AI generations, and team features. Pricing has shifted over time; check the site.

### Uizard vs Figma - which should I use?

Different jobs. Uizard is for early concepting and wireframe sketches; [Figma](figma.md) is the home for serious production design work. Use Uizard to scaffold ideas, then move to Figma when fidelity matters.

### Does Uizard generate React code?

Limited. It can export some HTML/CSS and partial React, but the code isn't production-ready. For real prompt-to-React, [v0](v0.md) and [Magic Patterns](magic_patterns.md) are stronger.

### Can Uizard turn a paper sketch into a digital design?

Yes - that's the original feature. Photo a hand-drawn wireframe, get an editable digital design. Demo-magical, somewhat inconsistent in practice; clean handwriting helps.

## Pointers

* Web: [uizard.io](https://uizard.io)
* Pricing: free tier, then Pro and Business tiers.
* Pairs and competes with [google_stitch.md](google_stitch.md) (more design fidelity, newer), [magic_patterns.md](magic_patterns.md), [v0.md](v0.md) (more code focused), and [figma.md](figma.md) (the eventual home for serious design work).
