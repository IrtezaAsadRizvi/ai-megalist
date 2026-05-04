# Capacities: object-based notes app with AI search

Capacities sits in the notes-and-second-brain cluster alongside [Notion AI](notion_ai.md), [Mem](mem.md), [Reflect](reflect.md), and [Obsidian](obsidian.md) - the notes-app category. Capacities is the notes app organised around objects, not pages. Where Notion treats everything as a hierarchy of pages and Reflect treats everything as daily notes, Capacities is built around typed objects - Person, Project, Book, Movie, Idea, Note - each with their own template, fields, and links. For people whose brains work in entities and relationships, Capacities maps directly to that mental model.

## What it actually is

A web + desktop + mobile notes app. The defining concept is the "object type" - you create a Person object with fields for name, role, last contact, related projects, etc.; a Book object with author, status, my rating; a Project object with deadline, status, related people. Everything links bidirectionally. AI features include AI search, AI generated summaries, and a chat assistant scoped to your vault.

## Setup

1. Go to [capacities.io](https://capacities.io), sign up.
2. Free tier: limited number of objects, no AI.
3. Pricing: Pro €15/mo (annual), unlimited objects + AI features.
4. Install desktop and mobile apps.
5. Default object types are pre built; create custom ones for your domain.

## How I use it day to day

* **Honest:** I've tested Capacities; default to Obsidian for personal use. Capacities is the alternative I'd recommend to non technical users who think in entities.
* **CRM lite for personal contacts.** Person objects with last contact, recent topics, related projects. Better than a separate app for solo professionals.
* **Reading notes per book.** Book object with quotes, takeaways, status. Linked to the people who recommended each.
* **Project context.** Project object with deadlines, related people, related notes. Links surface relevant context when I open the object.
* **AI search across objects.** "What books did Sarah recommend?" Searches typed objects; returns the right entities.
* **AI generated summaries** of long objects. Useful when an object grows unwieldy.

## Gotchas

* Object type design is upfront work. Get it right; it pays off. Get it wrong; you're refactoring.
* No native API; export options exist but extending Capacities programmatically is harder than in Obsidian.
* Mobile is functional but the canonical UX is desktop.
* Pricing in EUR; annual subscription only at Pro.
* For freeform thinking without objects, Notion or Obsidian fit better.

## Alternatives

* If you want OSS local-first networked notes with an enormous plugin ecosystem, [Obsidian](obsidian.md) is the comparator.
* If you want notes that organise themselves with persistent AI memory, [Mem](mem.md) is the bet on a different shape.
* If you need a team workspace with notes and databases, [Notion AI](notion_ai.md) is the heavyweight default.
* If you want networked notes with a daily-note workflow and GPT-4o, [Reflect](reflect.md) is the lighter alternative.

## FAQ

### Is Capacities free?

Free tier covers a limited number of objects with no AI features. Pro is €15/mo billed annually for unlimited objects plus AI features. Pricing in EUR; no monthly Pro option.

### Capacities vs Notion - which one?

Different mental models. [Notion AI](notion_ai.md) is page-and-database hierarchical; Capacities is typed-object-and-link networked. If you think in entities (people, books, projects), Capacities maps directly. If you think in pages, Notion fits better.

### Does Capacities have an API?

No native API as of April 2026. Export options exist but extending Capacities programmatically is harder than in [Obsidian](obsidian.md). If extensibility matters, Obsidian wins.

### Is Capacities good on mobile?

Functional but the canonical UX is desktop. Most serious work happens at the keyboard. Mobile is for quick capture.

## Pointers

* [capacities.io](https://capacities.io)
* For OSS / local first networked notes: [obsidian.md](obsidian.md).
* For self organising AI notes: [mem.md](mem.md).
* For team workspace: [notion_ai.md](notion_ai.md).
