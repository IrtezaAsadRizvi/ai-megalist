# Figma: design tool with prompt-to-prototype Make on top

Figma is the design tool everyone already uses; the AI angle (Figma Make, Dev Mode AI) puts it directly against [Google Stitch](google_stitch.md) for prompt-to-UI and [v0](v0.md) for prompt-to-React. Whether you're a designer, a developer who reads designs, or a PM annotating mocks, you're in Figma - and as of 2026, you're also using a half dozen AI features that have shipped quietly on top. Figma Make (prompt to prototype), Dev Mode AI, AI auto layout, design suggestions. Figma's AI play is "in the surface where the work happens."

## What it actually is

A browser based design tool with desktop apps for macOS and Windows. The headline AI features:

* **Figma Make**: prompt → working clickable prototype.
* **Dev Mode AI**: explain a component, generate code, detect inconsistencies.
* **AI features in the editor**: rename layers, suggest auto layout, remove backgrounds, generate placeholder content, search.
* **FigJam AI**: diagrams, mind maps, summaries inside whiteboards.

## Setup

1. Sign up at [figma.com](https://www.figma.com).
2. Free tier: 3 design files + unlimited FigJam pages.
3. Pricing: Professional $15/seat/mo, Organisation $45, Enterprise $75.
4. Install the desktop app for fonts and offline.
5. AI features are bundled into the regular plans (currently - the pricing model has been shifting in 2026).

## How I use it day to day

* **Figma Make for prototypes.** Describe a screen flow in plain English, Make produces a clickable prototype with auto layout. Faster than starting from a blank canvas.
* **Auto rename layers.** A blessing. AI looks at a frame, infers what each layer is, renames "Rectangle 47" to "Card.Background". Five seconds; saves a future engineer's afternoon.
* **Generate placeholder content.** Realistic copy and images while designing, instead of "Lorem ipsum" and grey boxes.
* **Dev Mode AI** for engineers. Inspect a component, ask "what does this do?" or "generate React code with our naming conventions."
* **FigJam AI for diagrams.** Write a description; FigJam draws the boxes and arrows.

## Gotchas

* Figma Make's output is a prototype, not production code. It's clickable but not engineered.
* The AI features compete with each other a bit. Make + Dev Mode + Auto Layout suggestions all want to do similar things; pick a primary workflow.
* Some AI features are still labeled "beta" and may be deprecated or replaced.
* Cross workspace AI search is limited; in big organisations, the AI is per file or per project, not per company.
* If you're a dev only consumer (read access to designs), the cheaper Dev Mode license is the right tier.

## Alternatives

* If you want prompt-to-editable-UI without the Figma weight, [Google Stitch](google_stitch.md) (formerly Galileo) is the lighter pick.
* For prompt-to-React-and-Tailwind production code, [v0](v0.md) is the right tool.
* If you're wireframing from a sketch or screenshot, [Uizard](uizard.md) has a tighter loop than Figma Make.
* For brand-consistent vector / raster work outside the UI flow, [Recraft](recraft.md) is closer to the job.

## FAQ

### Is Figma free?

Yes - the free tier covers 3 design files plus unlimited FigJam pages, which is enough for solo work. Professional is $15/seat/mo, Organisation $45, Enterprise $75. AI features are bundled into the regular plans (the pricing model has been shifting in 2026, so verify current state).

### Is Figma Make production-ready?

No. The output is a clickable prototype, not engineered code. Treat it as a faster path to "show stakeholders the flow" - then hand the design to a developer (or feed it to [v0](v0.md)) for the real build.

### Figma Make vs v0 - which should I use?

Different jobs. Figma Make stays inside Figma and produces a clickable prototype that lives next to your design files. [v0](v0.md) produces real React + Tailwind components you ship. I use Make for early flow validation and v0 when I want the actual code.

### Does Figma have a Dev Mode license?

Yes - cheaper than the full editor seat, aimed at engineers who only need to read and inspect designs. If your devs aren't editing files, this is the tier they should be on.

## Pointers

* [figma.com](https://www.figma.com)
* Figma Make announcement and tutorials at [figma.com/figma-make](https://www.figma.com/figma-make/).
* For prompt → editable design (different sweet spot): [Google Stitch](https://stitch.withgoogle.com).
* For prompt → React components specifically: [v0.md](v0.md).
