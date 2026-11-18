<a id="top"></a>

<div align="center">

# AI Megalist

#### The everything-AI index - sorted by **what you actually do.**

[![License: MIT](https://img.shields.io/badge/license-MIT-111?style=flat-square)](LICENSE)
[![Awesome](https://img.shields.io/badge/awesome-yes-ff69b4?style=flat-square)](https://awesome.re)
![Updated](https://img.shields.io/badge/updated-{{updated_badge}}-2563eb?style=flat-square)
![Tools](https://img.shields.io/badge/tools-{{tool_count}}-22c55e?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-8b5cf6?style=flat-square)

**[ Quick find ](#quick-find)** &nbsp;·&nbsp; **[ Pick your role ](#pick-your-role)** &nbsp;·&nbsp; **[ The index ](#the-index)** &nbsp;·&nbsp; **[ Sources ](#sources)**

<sub>If this list saved you a search, star the repo - it's how other people find it.</sub>

</div>

---

## About

A curated, opinionated index of AI tools - categorized by the **job to be done**, not by which lab built the model. Three ways in:

1. **[Quick find](#quick-find)**: one-line "I want to..." → category map. Fastest path.
2. **[Pick your role](#pick-your-role)**: eight ready-made stacks: engineers, researchers, marketers, creators, designers, founders, students, knowledge workers.
3. **[Browse the index](#the-index)**: {{tool_count}} tools across five clusters and {{category_count}} categories.

> **Conventions** &nbsp; `OSS` open source &nbsp;·&nbsp; `Local` runs on your machine &nbsp;·&nbsp; `Free` meaningful free tier &nbsp;·&nbsp; **Bold** in role tables = the safe default. &nbsp;·&nbsp; **Also listed** = community submissions, not yet hand-tested.

---

## Quick find

| I want to... | Go to | Top picks |
| :-- | :-- | :-- |
| Do everything in one app (chat, search, images, video) | [General assistants](#general-purpose-assistants) | [ZeroTwo](tools/zerotwo.md) · [Perplexity](tools/perplexity.md) |
| Chat with the smartest model | [General assistants](#general-purpose-assistants) | [ChatGPT](tools/chatgpt.md) · [Claude](tools/claude.md) · [Gemini](tools/gemini.md) |
| Write or refactor code | [Coding](#coding) | [Cursor](tools/cursor.md) · [Claude Code](tools/claude_code.md) · [Copilot](tools/github_copilot.md) |
| Build an app from a prompt | [App builders](#app--web-builders-vibe-coding--no-code) | [Lovable](tools/lovable.md) · [Bolt](tools/bolt_new.md) · [v0](tools/v0.md) · [Replit](tools/replit_agent.md) |
| Search the web with citations | [AI search](#ai-search-engines) | [Perplexity](tools/perplexity.md) · [Phind](tools/phind.md) · [Exa](tools/exa.md) |
| Read & question my own PDFs | [Research](#research--deep-research) | [NotebookLM](tools/notebooklm.md) · [SciSpace](tools/scispace.md) |
| Run a multi-step research task | [Research](#research--deep-research) | [ChatGPT Deep Research](tools/chatgpt.md) · [Gemini DR](tools/gemini.md) |
| Generate an image | [Image](#image-generation) | [Midjourney](tools/midjourney.md) · [Flux](tools/flux.md) · [Ideogram](tools/ideogram.md) |
| Edit / upscale an image | [Image editing](#image-editing--object-work) | [Photoshop GenFill](tools/photoshop_genfill.md) · [Magnific](tools/magnific.md) · [igly.ai](tools/igly.md) |
| Generate a video | [Video](#video-generation) | [Veo 3.1](tools/veo.md) · [Runway](tools/runway.md) · [Kling](tools/kling.md) |
| Edit / repurpose video | [Video editing](#video-editing--repurposing) | [Descript](tools/descript.md) · [Opus Clip](tools/opus_clip.md) · [Captions](tools/captions.md) |
| Clone a voice / dub | [Voice](#voice--speech) | [ElevenLabs](tools/elevenlabs.md) · [Cartesia](tools/cartesia.md) |
| Transcribe audio | [Transcription](#transcription--speech-to-text) | [Whisper](tools/whisper.md) · [Deepgram](tools/deepgram.md) |
| Make a song with AI | [Music](#music-generation) | [Suno](tools/suno.md) · [Udio](tools/udio.md) |
| Take meeting notes | [Productivity → Meetings](#meeting-notes) | [Granola](tools/granola.md) · [Fathom](tools/fathom.md) |
| Triage my inbox | [Productivity → Email](#email) | [Superhuman](tools/superhuman.md) · [Shortwave](tools/shortwave.md) |
| Auto-schedule my day | [Productivity → Tasks](#scheduling--tasks) | [Motion](tools/motion.md) · [Reclaim](tools/reclaim.md) |
| Run an agent that uses my browser | [Agents](#agents--browser-automation) | [Operator](tools/chatgpt_operator.md) · [Manus](tools/manus.md) · [Claude Computer Use](tools/claude_computer_use.md) |
| Wire up multi-step automation | [Workflow automation](#workflow-automation) | [n8n](tools/n8n.md) · [Make](tools/make.md) · [Zapier AI](tools/zapier.md) |
| Design a UI | [Design](#design-uiux-graphics-presentations) | [Figma Make](tools/figma.md) · [Stitch](tools/google_stitch.md) · [v0](tools/v0.md) |
| Make slides | [Decks](#design-uiux-graphics-presentations) | [Gamma](tools/gamma.md) · [Tome](tools/tome.md) |
| Talk to my spreadsheet | [Data](#data-analysis--spreadsheets) | [Julius](tools/julius.md) · [Rows](tools/rows.md) |
| Run a model on my laptop | [Local](#local--open-source-model-runners) | [Ollama](tools/ollama.md) · [LM Studio](tools/lm_studio.md) · [Jan](tools/jan.md) |
| Build on a model API | [APIs](#model-apis--dev-platforms) | [Anthropic](tools/anthropic_api.md) · [OpenAI](tools/openai_platform.md) · [Groq](tools/groq.md) |
| Find a study buddy | [Education](#education--learning) | [NotebookLM](tools/notebooklm.md) · [Khanmigo](tools/khanmigo.md) |
| Have an AI companion | [Companions](#personal-companions) | [Nomi](tools/nomi.md) · [Replika](tools/replika.md) · [Character.AI](tools/character_ai.md) |
| Browse the web with AI built in | [AI browsers](#ai-browsers--sidebars) | [Comet](tools/comet.md) · [Dia](tools/dia.md) · [Arc](tools/arc_search.md) · [Edge Copilot](tools/edge_copilot.md) |

<sub>[⤴ back to top](#top)</sub>

---

## Pick your role

<table>
<tr>
<td>💻 <a href="#-software-engineer">Software Engineer</a></td>
<td>🔬 <a href="#-researcher--academic">Researcher</a></td>
<td>📈 <a href="#-marketer--growth">Marketer</a></td>
<td>🎬 <a href="#-content-creator">Content Creator</a></td>
</tr>
<tr>
<td>🎨 <a href="#-designer">Designer</a></td>
<td>🚀 <a href="#-founder--solo-builder">Founder</a></td>
<td>🎓 <a href="#-student--learner">Student</a></td>
<td>📋 <a href="#-knowledge-worker--pm">Knowledge Worker</a></td>
</tr>
</table>

### 💻 Software Engineer
> Ship code faster without losing the plot on a large codebase.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily driver chat | **[Claude](tools/claude.md)** | [ChatGPT](tools/chatgpt.md) · [Gemini](tools/gemini.md) |
| In-editor pair programmer | **[Cursor](tools/cursor.md)** | [Windsurf](tools/windsurf.md) · [Zed](tools/zed.md) · [Copilot](tools/github_copilot.md) |
| Terminal coding agent | **[Claude Code](tools/claude_code.md)** | [Codex CLI](tools/codex_cli.md) · [Aider](tools/aider.md) · [Gemini CLI](tools/gemini_cli.md) |
| PR review | **[CodeRabbit](tools/coderabbit.md)** | [Greptile](tools/greptile.md) · [Diamond](tools/diamond.md) · [Qodo](tools/qodo.md) |
| Cloud SWE agent | **[Devin](tools/devin.md)** | [Copilot Coding Agent](tools/github_copilot.md) · [Replit Agent](tools/replit_agent.md) |
| Search docs / SO | **[Phind](tools/phind.md)** | [Perplexity](tools/perplexity.md) · [Exa](tools/exa.md) |
| Local model runner | **[Ollama](tools/ollama.md)** | [LM Studio](tools/lm_studio.md) · [Jan](tools/jan.md) |

<sub>→ Deeper: [Coding](#coding) · [Local & OSS](#local--open-source-model-runners)</sub>

### 🔬 Researcher / Academic
> Long documents, real citations, grounded synthesis.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily driver | **[Claude](tools/claude.md)** *(long-context)* | [Gemini](tools/gemini.md) · [ChatGPT](tools/chatgpt.md) |
| Multi-step deep research | **[ChatGPT Deep Research](tools/chatgpt.md)** | [Gemini Deep Research](tools/gemini.md) · [Claude Research](tools/claude.md) |
| Q&A on your own PDFs | **[NotebookLM](tools/notebooklm.md)** | [SciSpace](tools/scispace.md) · [Explainpaper](tools/explainpaper.md) |
| Literature search | **[Elicit](tools/elicit.md)** | [Consensus](tools/consensus.md) · [Undermind](tools/undermind.md) |
| Cited web answers | **[Perplexity](tools/perplexity.md)** | [Exa](tools/exa.md) · [Tavily](tools/tavily.md) |
| Wikipedia-style writeups | **[STORM](tools/storm.md)** `OSS` | - |

<sub>→ Deeper: [Research](#research--deep-research) · [AI search](#ai-search-engines)</sub>

### 📈 Marketer / Growth
> SEO copy, ad variations, brand voice, one asset into ten.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily driver | **[ChatGPT](tools/chatgpt.md)** / **[Claude](tools/claude.md)** | [Gemini](tools/gemini.md) |
| Brand voice + templates | **[Jasper](tools/jasper.md)** | [Writer](tools/writer.md) · [Copy.ai](tools/copy_ai.md) |
| SEO content + briefs | **[Surfer SEO](tools/surfer_seo.md)** | [Frase](tools/frase.md) · [Writesonic](tools/writesonic.md) |
| Visuals at scale | **[Canva Magic Studio](tools/canva.md)** | [Adobe Firefly](tools/adobe_firefly.md) |
| Decks & landing pages | **[Gamma](tools/gamma.md)** | [Tome](tools/tome.md) · [Beautiful.ai](tools/beautiful_ai.md) |
| Email + outreach | **[Superhuman](tools/superhuman.md)** | [Shortwave](tools/shortwave.md) · [Fyxer](tools/fyxer.md) |
| Repurpose video → clips | **[Opus Clip](tools/opus_clip.md)** | [Captions](tools/captions.md) · [Submagic](tools/submagic.md) · [Descript](tools/descript.md) |
| Campaign images | **[Midjourney](tools/midjourney.md)** + **[Ideogram](tools/ideogram.md)** *(text)* | [DALL·E](tools/chatgpt.md) · [Flux](tools/flux.md) |

<sub>→ Deeper: [Writing](#writing--content) · [Design](#design-uiux-graphics-presentations) · [Image](#image-generation)</sub>

### 🎬 Content Creator
> YouTube, podcast, social. Look (and sound) better than the algo expects.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Scripting + ideation | **[Claude](tools/claude.md)** / **[ChatGPT](tools/chatgpt.md)** | [Gemini](tools/gemini.md) · [CreatorSkills](tools/creatorskills.md) *(skill packs for YouTube scripting, sponsorships, audience growth)* |
| Text → video | **[Veo 3.1](tools/veo.md)** | [Runway](tools/runway.md) · [Kling](tools/kling.md) · [Pika](tools/pika.md) |
| Edit by transcript | **[Descript](tools/descript.md)** | [CapCut](tools/capcut.md) |
| Short-form clips from a podcast | **[Opus Clip](tools/opus_clip.md)** | [Captions](tools/captions.md) · [Submagic](tools/submagic.md) · [Klap](tools/klap.md) |
| AI avatars / explainers | **[HeyGen](tools/heygen.md)** | [Synthesia](tools/synthesia.md) · [Tavus](tools/tavus.md) |
| Voice / dubbing | **[ElevenLabs](tools/elevenlabs.md)** | [PlayHT](tools/playht.md) · [Cartesia](tools/cartesia.md) |
| Music beds | **[Suno](tools/suno.md)** | [Udio](tools/udio.md) · [Mubert](tools/mubert.md) |
| Thumbnails | **[Midjourney](tools/midjourney.md)** + **[Ideogram](tools/ideogram.md)** | [Flux](tools/flux.md) · [Recraft](tools/recraft.md) |
| Upscale old footage | **[Topaz Video AI](tools/topaz_video.md)** | [Magnific](tools/magnific.md) *(stills)* |

<sub>→ Deeper: [Video](#video-generation) · [Voice](#voice--speech) · [Music](#music-generation)</sub>

### 🎨 Designer
> UI, brand, prototypes. Pixels and components, not redraws at handoff.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily UI + handoff | **[Figma + Figma Make](tools/figma.md)** | - |
| Prompt → editable UI | **[Google Stitch](tools/google_stitch.md)** *(ex-Galileo)* | [Uizard](tools/uizard.md) · [Magic Patterns](tools/magic_patterns.md) |
| Prompt → React / Tailwind | **[v0](tools/v0.md)** | [Magic Patterns](tools/magic_patterns.md) |
| Brand visuals | **[Recraft](tools/recraft.md)** | [Adobe Firefly](tools/adobe_firefly.md) · [Canva](tools/canva.md) |
| Mood / concept boards | **[Midjourney](tools/midjourney.md)** | [Krea](tools/krea.md) · [Leonardo](tools/leonardo.md) |
| Photo edit / inpaint | **[Photoshop Generative Fill](tools/photoshop_genfill.md)** | [Magnific](tools/magnific.md) · [Clipdrop](tools/clipdrop.md) · [igly.ai](tools/igly.md) |
| Client decks | **[Gamma](tools/gamma.md)** | [Tome](tools/tome.md) |

<sub>→ Deeper: [Design](#design-uiux-graphics-presentations) · [Image](#image-generation)</sub>

### 🚀 Founder / Solo Builder
> One person, ten roles. Ship a thing this weekend.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily driver | **[ChatGPT](tools/chatgpt.md)** / **[Claude](tools/claude.md)** | [Gemini](tools/gemini.md) |
| Prompt → live app | **[Lovable](tools/lovable.md)** | [Bolt.new](tools/bolt_new.md) · [Replit Agent](tools/replit_agent.md) |
| In-editor coding | **[Cursor](tools/cursor.md)** | [Windsurf](tools/windsurf.md) |
| Landing + content | **[Framer](tools/framer.md)** + **[Gamma](tools/gamma.md)** | [Webflow](tools/webflow.md) · [v0](tools/v0.md) |
| Logo / brand mark | **[Recraft](tools/recraft.md)** + **[Ideogram](tools/ideogram.md)** | [Midjourney](tools/midjourney.md) |
| Inbox + outreach | **[Superhuman](tools/superhuman.md)** | [Shortwave](tools/shortwave.md) |
| Outbound list-building | **Clay** | Apollo |
| Browser agent for ops | **[ChatGPT Operator](tools/chatgpt_operator.md)** | [Manus](tools/manus.md) |
| Multi-step automation | **[n8n](tools/n8n.md)** `OSS` | [Make](tools/make.md) · [Zapier AI](tools/zapier.md) |
| Meeting notes | **[Granola](tools/granola.md)** | [Fathom](tools/fathom.md) |

<sub>→ Deeper: [App builders](#app--web-builders-vibe-coding--no-code) · [Agents](#agents--browser-automation)</sub>

### 🎓 Student / Learner
> Cram, understand, practice. Tutoring at 3am.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Study buddy | **[ChatGPT](tools/chatgpt.md)** / **[Claude](tools/claude.md)** | [Gemini](tools/gemini.md) |
| Lecture / paper Q&A | **[NotebookLM](tools/notebooklm.md)** | [SciSpace](tools/scispace.md) |
| K-12 / math tutoring | **[Khanmigo](tools/khanmigo.md)** | - |
| Flashcards | **[Quizlet AI](tools/quizlet.md)** | Anki + GPT |
| Language practice | **[Speak](tools/speak.md)** · **[Duolingo Max](tools/duolingo_max.md)** | - |
| Long video → notes | **[Eightify](tools/eightify.md)** | [NotebookLM](tools/notebooklm.md) |
| Cite-able answers | **[Perplexity](tools/perplexity.md)** | [Consensus](tools/consensus.md) |

<sub>→ Deeper: [Education](#education--learning) · [Research](#research--deep-research)</sub>

### 📋 Knowledge Worker / PM
> Meetings, decks, status updates, second-brain.

| Job | Default | Alternates |
| :-- | :-- | :-- |
| Daily driver | **[ChatGPT](tools/chatgpt.md)** / **[Claude](tools/claude.md)** | [Gemini](tools/gemini.md) |
| Meeting notes | **[Granola](tools/granola.md)** | [Fathom](tools/fathom.md) · [Notion AI](tools/notion_ai.md) |
| Inbox triage | **[Superhuman](tools/superhuman.md)** | [Shortwave](tools/shortwave.md) · [Fyxer](tools/fyxer.md) |
| Calendar + tasks | **[Motion](tools/motion.md)** | [Reclaim](tools/reclaim.md) |
| Second-brain | **[Notion AI](tools/notion_ai.md)** | [Mem](tools/mem.md) · [Reflect](tools/reflect.md) |
| Decks | **[Gamma](tools/gamma.md)** | [Tome](tools/tome.md) |
| Talk to spreadsheets | **[Julius](tools/julius.md)** | [Numerous](tools/numerous.md) · [Rows](tools/rows.md) |
| PRDs / specs | **[ChatPRD](tools/chatprd.md)** | [Claude](tools/claude.md) · [Notion AI](tools/notion_ai.md) |
| Cite-able research | **[Perplexity](tools/perplexity.md)** | [Gemini Deep Research](tools/gemini.md) |

<sub>→ Deeper: [Productivity](#productivity-notes-meetings-email-scheduling)</sub>

<sub>[⤴ back to top](#top)</sub>

---

# The index

<table>
<tr>
<td><strong>🧠 <a href="#-think">Think</a></strong></td>
<td>Chat assistants · Research · AI search · AI browsers</td>
</tr>
<tr>
<td><strong>✍️ <a href="#-create">Create</a></strong></td>
<td>Writing · Image · Video · Voice · Music</td>
</tr>
<tr>
<td><strong>💼 <a href="#-work">Work</a></strong></td>
<td>Productivity · Agents · Workflow automation · Design · Data</td>
</tr>
<tr>
<td><strong>🔨 <a href="#-build">Build</a></strong></td>
<td>Coding · App builders · Local models · Model APIs</td>
</tr>
<tr>
<td><strong>❤️ <a href="#-life">Life</a></strong></td>
<td>Companions · Education</td>
</tr>
</table>

---

# 🧠 Think

Where you go when you need to ask, search, or read.

- [General-purpose assistants](#general-purpose-assistants)
- [Research & deep research](#research--deep-research)
- [AI search engines](#ai-search-engines)
- [AI browsers & sidebars](#ai-browsers--sidebars)

<!-- tools:assistants -->

<!-- tools:research -->

<!-- tools:ai-search -->

<!-- tools:ai-browsers -->

<sub>[⤴ back to top](#top)</sub>

---

# ✍️ Create

Make things - words, images, video, sound.

- [Writing & content](#writing--content)
- [Image generation](#image-generation) · [Image editing](#image-editing--object-work)
- [Video generation](#video-generation) · [Video editing & repurposing](#video-editing--repurposing)
- [Voice & speech](#voice--speech) · [Transcription](#transcription--speech-to-text) · [Voice agents](#real-time-conversation--voice-agents)
- [Music generation](#music-generation)

<!-- tools:writing -->

<!-- tools:image-generation -->

<!-- tools:image-editing -->

<!-- tools:video-generation -->

> ⚠️ **Heads up:** OpenAI's Sora consumer apps shut down on **2026-04-26**, and the API followed on **2026-09-24**.

<!-- tools:video-editing -->

<!-- tools:voice -->

<!-- tools:music -->

<!-- tools:stem-separation -->

<sub>[⤴ back to top](#top)</sub>

---

# 💼 Work

Get the day's work done.

- [Productivity (notes, meetings, email, scheduling)](#productivity-notes-meetings-email-scheduling)
- [Agents & browser automation](#agents--browser-automation)
- [Workflow automation](#workflow-automation)
- [Design (UI/UX, graphics, presentations)](#design-uiux-graphics-presentations)
- [Data, analysis & spreadsheets](#data-analysis--spreadsheets)

<!-- tools:productivity -->

<!-- tools:agents -->

<!-- tools:workflow-automation -->

<!-- tools:design -->

<!-- tools:data -->

<sub>[⤴ back to top](#top)</sub>

---

# 🔨 Build

For the people writing software, training models, or shipping products.

- [Coding](#coding)
- [App & web builders (vibe coding / no-code)](#app--web-builders-vibe-coding--no-code)
- [Local & open-source model runners](#local--open-source-model-runners)
- [Model APIs & dev platforms](#model-apis--dev-platforms)

<!-- tools:coding -->

<!-- tools:app-builders -->

<!-- tools:local-models -->

**Notable open-weight model families (2026):** Llama (Meta) · Gemma (Google) · Qwen (Alibaba) · DeepSeek · Mistral · Kimi K2.x (Moonshot) · GLM (Zhipu) · Nemotron (NVIDIA) · Phi (Microsoft).

<!-- tools:model-apis -->

<sub>[⤴ back to top](#top)</sub>

---

# ❤️ Life

The personal side: companions and learning.

- [Personal companions](#personal-companions)
- [Education & learning](#education--learning)

<!-- tools:companions -->

<!-- tools:education -->

<sub>[⤴ back to top](#top)</sub>

---

## Sources

A non-exhaustive list of write-ups consulted for this index.

<details>
<summary><strong>Show sources</strong></summary>

- [The 12 Best AI Tools for 2026 - Synthesia](https://www.synthesia.io/post/ai-tools)
- [I tried 70+ best AI tools in 2026 - TechRadar](https://www.techradar.com/best/best-ai-tools)
- [Best AI Tools 2026 Complete Ranking - NxCode](https://www.nxcode.io/resources/news/best-ai-tools-2026-complete-ranking-guide)
- [eudk/awesome-ai-tools (GitHub)](https://github.com/eudk/awesome-ai-tools)
- [caramaschiHG/awesome-ai-agents-2026 (GitHub)](https://github.com/caramaschiHG/awesome-ai-agents-2026)
- [QAInsights/awesome-ai-tools (GitHub)](https://github.com/QAInsights/awesome-ai-tools)
- [ai-for-developers/awesome-ai-coding-tools (GitHub)](https://github.com/ai-for-developers/awesome-ai-coding-tools)
- [Top AI GitHub Repositories in 2026 - ByteByteGo](https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026)
- [Best AI Code Editors in 2026 - MindStudio](https://www.mindstudio.ai/blog/best-ai-code-editors)
- [Best AI Coding Agents for 2026 - Faros](https://www.faros.ai/blog/best-ai-coding-agents-2026)
- [Coding Agents Comparison - Artificial Analysis](https://artificialanalysis.ai/agents/coding)
- [Best AI Image Generators in 2026 - Zapier](https://zapier.com/blog/best-ai-image-generator/)
- [Midjourney vs DALL·E vs SD vs Flux 2026](https://freeacademy.ai/blog/midjourney-vs-dalle-vs-stable-diffusion-vs-flux-comparison-2026)
- [Best AI Video Generators 2026 - Pixflow](https://pixflow.net/blog/best-ai-video-generator/)
- [Sora alternatives - eWeek](https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/)
- [Best AI Video Generators 2026 - AI/ML API](https://aimlapi.com/blog/best-ai-video-generators-2026-veo-3-1-kling-sora-2-seedance-more-compared)
- [Best AI Companion Apps 2026 - AI Companion Guides](https://aicompanionguides.com/blog/best-ai-companion-apps-2026/)
- [Best AI Companion Apps - Mindful Suite](https://www.mindfulsuite.com/reviews/best-ai-companion-apps)
- [The 9 Best AI Personal Assistants - Zapier](https://zapier.com/blog/ai-personal-assistant/)
- [55+ Best AI Tools for Productivity in 2026 - GPT Prompts](https://gptprompts.ai/ai-tools-for-productivity)
- [The 10 Best AI Note Takers in 2026 - Meeting Notes](https://meetingnotes.com/blog/best-ai-note-takers)
- [Granola vs Notion AI 2026 - Zack Proser](https://zackproser.com/blog/granola-vs-notion-ai-2026)
- [10 Best Manus Alternatives 2026 - Vellum](https://www.vellum.ai/blog/best-manus-alternatives)
- [Best AI Agents in 2026 - Fello AI](https://felloai.com/best-ai-agents/)
- [Top 10 Browser Use Agents 2026 - o-mega](https://o-mega.ai/articles/top-10-browser-use-agents-full-review-2026)
- [Best AI Music Generators 2026 - Curious Refuge](https://curiousrefuge.com/blog/best-ai-music-tools-for-2026)
- [Best AI Music Generators 2026 - SoundGuys](https://www.soundguys.com/best-ai-music-generators-134781/)
- [15 Best AI Design Tools 2026 - Guideflow](https://www.guideflow.com/blog/ai-design-tools)
- [11 Best AI Design Tools - Figma](https://www.figma.com/resource-library/ai-design-tools/)
- [I Tested 29 AI Writing Tools - eesel](https://www.eesel.ai/blog/best-ai-writing-tools)
- [Best AI for Creative Writing 2026 - Sudowrite](https://sudowrite.com/blog/best-ai-for-creative-writing-in-2026-tested-and-compared/)
- [AI Search Engines Compared 2026 - haoqq](https://www.haoqq.com/en/guides/ai-search-engines-compared-2026)
- [Perplexity vs Tavily vs Exa vs You.com 2026 - Humai](https://www.humai.blog/perplexity-vs-tavily-vs-exa-vs-you-com-the-complete-ai-search-engine-comparison-2026/)
- [Best AI App Builders 2026 - Lovable](https://lovable.dev/guides/best-ai-app-builders)
- [AI App Builders Compared - NovaKit](https://www.novakit.ai/blog/ai-builders-comparison-bolt-lovable-v0-novakit)
- [Top 5 Local LLM Tools and Models in 2026 - Pinggy](https://pinggy.io/blog/top_5_local_llm_tools_and_models/)
- [Jan vs LM Studio vs Ollama - Local AI Master](https://localaimaster.com/blog/jan-vs-lm-studio-vs-ollama)
- [15 Best LM Studio Alternatives 2026 - PremAI](https://blog.premai.io/15-best-lm-studio-alternatives-for-running-local-llms-2026/)

</details>

---

## Contributing

Spotted something missing or out of date? Add or fix the record in `data/tools.yaml` and open a PR - [CONTRIBUTING.md](CONTRIBUTING.md) has the two-minute version. `README.md` is generated, so edits to it directly get overwritten.

## License

[MIT](LICENSE) © 2026 Irteza

<div align="center">
<sub>Pricing and capabilities change weekly, always check the source.</sub>
</div>
