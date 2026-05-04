# Gamma: AI presentation tool for prompt-to-deck

Gamma is the AI deck generator competing with [Tome](tome.md) and [Beautiful.ai](beautiful_ai.md), and the closest thing to "what PowerPoint should have been." You describe a deck (or paste a doc), Gamma writes the outline, picks layouts, generates images, and gives you something that looks designed in about a minute. The first time you use it for a "I have a board meeting tomorrow" moment, the productivity gain is hard to unsee.

## What it actually is

A web based AI presentation tool. Generates decks, documents, and websites from prompts or pasted source material. Each "card" (slide) auto adjusts its layout; you can edit content, regenerate sections, swap themes globally. There's also a website export, a doc export, and PDF/PPTX outputs.

## Setup

1. Go to [gamma.app](https://gamma.app), sign up with Google or email.
2. Free tier: 400 credits on signup, ~10 free decks.
3. Pricing: Plus $10/mo, Pro $20/mo (more credits, better AI, custom domains for sites).
4. Click Generate → choose Presentation/Document/Webpage → type a prompt or paste source → set length → go.
5. About 60 seconds for a 10 slide deck.

## How I use it day to day

* **Quick decks from existing material.** Paste a 1500 word memo, ask Gamma for 10 slides. Output is good enough for an internal review without further work.
* **Pitch decks from a prompt.** "Create a 12 slide pitch deck for an AI tutoring startup targeting parents of middle schoolers. Include problem, solution, market, team, ask." The first draft is decent.
* **Theme refresh.** A deck I built in 2024 with bad colors gets a one click theme swap. Cheaper than redesigning.
* **Microsites.** Gamma will publish your "deck" as a website with custom domain. I've used this for portfolio pages, lightweight product launches.
* **Export to PowerPoint** when the audience requires it. The export is decent though some formatting drifts.

## Gotchas

* The first draft is always decent. Polishing it past 80% is harder; often I'd recreate hard parts in Figma or Keynote.
* AI generated images vary; they're rarely "campaign quality." For brand sensitive decks, replace them.
* Credits burn during iteration. Be deliberate before regenerating an entire deck for a tiny change.
* The "AI" feeling fades after a few decks; the muscle memory of doing it manually returns. Worth using as one tool among many.
* Some export targets (PPTX especially) lose Gamma's animation niceties.

## Alternatives

* If you want a deck tightly tied to a sales-narrative workflow, [Tome](tome.md) is the closer pick.
* For more rigid templates with smart layout enforcement, [Beautiful.ai](beautiful_ai.md) is sharper.
* If the "deck" is really a working webpage, [v0](v0.md) gets you to React + Tailwind faster.
* For visuals at scale (social posts, banners) more than slides, [Canva](canva.md) Magic Studio covers more ground.

## FAQ

### Is Gamma free?

Yes - the free tier ships with 400 credits on signup, enough for ~10 decks. Plus is $10/mo, Pro $20/mo (more credits, better AI, custom domains for sites). Credits burn during iteration so the free tier evaporates faster than the headline number suggests.

### Gamma vs PowerPoint - is it a replacement?

For first drafts and internal decks, yes. For polished pitches where every pixel matters, no - I still finish those in Keynote or Figma. The PPTX export is decent but loses some animations and fine layout choices.

### Can Gamma make a website?

Yes - Gamma will publish your "deck" as a webpage with a custom domain. I've used it for portfolio pages and lightweight product launches. For real marketing sites with a CMS, [Framer](framer.md) or [Webflow](webflow.md) is the right tool.

### Gamma vs Tome - which is better?

Different tilts. Gamma is broader (decks, docs, sites) and the AI generation is faster. [Tome](tome.md) is more sales-narrative shaped with stronger CRM hooks. For most general-purpose deck work, Gamma. For sales decks specifically, try both.

## Pointers

* [gamma.app](https://gamma.app)
* For more structured slide templates: [Beautiful.ai](https://www.beautiful.ai), [Tome](https://tome.app).
* For decks tightly tied to a CRM workflow: [Tome](https://tome.app)'s sales narratives.
* Pair with [v0.md](v0.md) when the "deck" should actually be a working web page.
