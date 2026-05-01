<a id="top"></a>

<div align="center">

# AI Megalist

#### The everything-AI index — sorted by **what you actually do.**

[![License: MIT](https://img.shields.io/badge/license-MIT-111?style=flat-square)](LICENSE)
[![Awesome](https://img.shields.io/badge/awesome-yes-ff69b4?style=flat-square)](https://awesome.re)
![Updated](https://img.shields.io/badge/updated-April%202026-2563eb?style=flat-square)
![Tools](https://img.shields.io/badge/tools-200%2B-22c55e?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-8b5cf6?style=flat-square)

**[ Quick find ](#quick-find)** &nbsp;·&nbsp; **[ Pick your role ](#pick-your-role)** &nbsp;·&nbsp; **[ The index ](#the-index)** &nbsp;·&nbsp; **[ Sources ](#sources)**

</div>

---

## About

A curated, opinionated index of AI tools — categorized by the **job to be done**, not by which lab built the model. Three ways in:

1. **[Quick find](#quick-find)** — one-line "I want to..." → category map. Fastest path.
2. **[Pick your role](#pick-your-role)** — eight ready-made stacks: engineers, researchers, marketers, creators, designers, founders, students, knowledge workers.
3. **[Browse the index](#the-index)** — 200+ tools across five clusters and 22 categories.

> **Conventions** &nbsp; `OSS` open source &nbsp;·&nbsp; `Local` runs on your machine &nbsp;·&nbsp; `Free` meaningful free tier &nbsp;·&nbsp; **Bold** in role tables = the safe default.

---

## Quick find

| I want to... | Go to | Top picks |
| :-- | :-- | :-- |
| Chat with the smartest model | [General assistants](#general-purpose-assistants) | [ChatGPT](tools/chatgpt.md) · [Claude](tools/claude.md) · [Gemini](tools/gemini.md) |
| Write or refactor code | [Coding](#coding) | [Cursor](tools/cursor.md) · [Claude Code](tools/claude_code.md) · [Copilot](tools/github_copilot.md) |
| Build an app from a prompt | [App builders](#app--web-builders-vibe-coding--no-code) | [Lovable](tools/lovable.md) · [Bolt](tools/bolt_new.md) · [v0](tools/v0.md) · [Replit](tools/replit_agent.md) |
| Search the web with citations | [AI search](#ai-search-engines) | [Perplexity](tools/perplexity.md) · [Phind](tools/phind.md) · [Exa](tools/exa.md) |
| Read & question my own PDFs | [Research](#research--deep-research) | [NotebookLM](tools/notebooklm.md) · [SciSpace](tools/scispace.md) |
| Run a multi-step research task | [Research](#research--deep-research) | [ChatGPT Deep Research](tools/chatgpt.md) · [Gemini DR](tools/gemini.md) |
| Generate an image | [Image](#image-generation) | [Midjourney](tools/midjourney.md) · [Flux](tools/flux.md) · [Ideogram](tools/ideogram.md) |
| Edit / upscale an image | [Image editing](#image-editing--object-work) | [Photoshop GenFill](tools/photoshop_genfill.md) · [Magnific](tools/magnific.md) |
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
| Wikipedia-style writeups | **[STORM](tools/storm.md)** `OSS` | — |

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
| Scripting + ideation | **[Claude](tools/claude.md)** / **[ChatGPT](tools/chatgpt.md)** | [Gemini](tools/gemini.md) |
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
| Daily UI + handoff | **[Figma + Figma Make](tools/figma.md)** | — |
| Prompt → editable UI | **[Google Stitch](tools/google_stitch.md)** *(ex-Galileo)* | [Uizard](tools/uizard.md) · [Magic Patterns](tools/magic_patterns.md) |
| Prompt → React / Tailwind | **[v0](tools/v0.md)** | [Magic Patterns](tools/magic_patterns.md) |
| Brand visuals | **[Recraft](tools/recraft.md)** | [Adobe Firefly](tools/adobe_firefly.md) · [Canva](tools/canva.md) |
| Mood / concept boards | **[Midjourney](tools/midjourney.md)** | [Krea](tools/krea.md) · [Leonardo](tools/leonardo.md) |
| Photo edit / inpaint | **[Photoshop Generative Fill](tools/photoshop_genfill.md)** | [Magnific](tools/magnific.md) · [Clipdrop](tools/clipdrop.md) |
| Product photos | **[Photoroom](tools/photoroom.md)** | Pebblely |
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
| K-12 / math tutoring | **[Khanmigo](tools/khanmigo.md)** | — |
| Flashcards | **[Quizlet AI](tools/quizlet.md)** | Anki + GPT |
| Language practice | **[Speak](tools/speak.md)** · **[Duolingo Max](tools/duolingo_max.md)** | — |
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

### General-purpose assistants

Conversational generalists — your daily-driver chat. Most now support memory, file uploads, web browsing, voice, image gen, and tool use.

| Tool | Best for |
| :-- | :-- |
| [ChatGPT](tools/chatgpt.md) | Broadest feature set; voice, image gen, Agents, Operator, native video |
| [Claude](tools/claude.md) | Strongest writing and code reasoning; 1M-token context on Opus |
| [Gemini](tools/gemini.md) | Tight Google Workspace integration; strongest multimodal at scale |
| [Microsoft Copilot](tools/microsoft_copilot.md) | Default for M365 / Windows users |
| [Apple Intelligence](tools/apple_intelligence.md) | Built into iOS / macOS; private on-device + Private Cloud Compute |
| [Grok](tools/grok.md) | Real-time X data, looser content policy |
| [DeepSeek](tools/deepseek.md) | `Free` frontier-tier reasoning; `OSS` weights |
| [Mistral Le Chat](tools/mistral_le_chat.md) | EU-hosted, fast, OSS-friendly |
| [Qwen Chat](tools/qwen.md) | Strong CN + EN; `OSS` weights |
| [Meta AI](tools/meta_ai.md) | Built into WhatsApp / Instagram / Messenger |

### Research & deep research

Long-form research with citations, multi-source synthesis, and document grounding.

| Tool | Best for |
| :-- | :-- |
| [ChatGPT Deep Research](tools/chatgpt.md) | Multi-step web research; thorough reports |
| [Gemini Deep Research](tools/gemini.md) | Reads many sources; annotated reports |
| [Claude Research](tools/claude.md) | Multi-agent research mode; strong synthesis |
| [Perplexity](tools/perplexity.md) | Cited answers; "Pro Search" and Spaces |
| [NotebookLM](tools/notebooklm.md) | Q&A on your docs; podcast-style audio overviews |
| [Elicit](tools/elicit.md) | Academic literature review automation |
| [Consensus](tools/consensus.md) | AI search across peer-reviewed papers |
| [SciSpace](tools/scispace.md) | PDF chat, paper explanations |
| [Explainpaper](tools/explainpaper.md) | Highlight a passage, get an explanation |
| [Undermind](tools/undermind.md) | Deep scientific search |
| [STORM](tools/storm.md) | `OSS` Stanford project; Wikipedia-style articles from sources |

### AI search engines

| Tool | Best for |
| :-- | :-- |
| [Perplexity](tools/perplexity.md) | Cited AI answers; the category default |
| [You.com](tools/you_com.md) | Mode selection; pick the model behind the answer |
| [Phind](tools/phind.md) | Tuned for developers; indexes docs / GitHub / SO |
| [Kagi](tools/kagi.md) | Paid, ad-free; FastGPT, Assistant, Universal Summarizer |
| [Exa](tools/exa.md) | Neural search API; finds source content not just SEO pages |
| [Tavily](tools/tavily.md) | Search API for agents and RAG |
| [Andi](tools/andi.md) | Conversational answer-first search |
| [Brave Search + Leo](tools/brave_search.md) | Privacy-first; built-in AI summaries |

### AI browsers & sidebars

A new wave of browsers (and extensions) where AI is the primary input, not a feature.

| Tool | Best for |
| :-- | :-- |
| [Perplexity Comet](tools/comet.md) | Agentic browser; navigate and act with Perplexity at the core |
| [Dia](tools/dia.md) | The Browser Company's AI-native successor to Arc |
| [Arc Search](tools/arc_search.md) | "Browse for me" mobile search that builds web pages |
| [Edge Copilot](tools/edge_copilot.md) | Sidebar Copilot in Microsoft Edge |
| [Brave Leo](tools/brave_search.md) | Built-in private AI assistant |
| [Sigma AI Browser](tools/sigma_browser.md) | macOS browser with multi-agent workflows |
| [Monica](tools/monica.md) | Cross-browser AI sidebar / extension |
| [Sider](tools/sider.md) | All-in-one AI sidebar |

<sub>[⤴ back to top](#top)</sub>

---

# ✍️ Create

Make things — words, images, video, sound.

- [Writing & content](#writing--content)
- [Image generation](#image-generation) · [Image editing](#image-editing--object-work)
- [Video generation](#video-generation) · [Video editing & repurposing](#video-editing--repurposing)
- [Voice & speech](#voice--speech) · [Transcription](#transcription--speech-to-text) · [Voice agents](#real-time-conversation--voice-agents)
- [Music generation](#music-generation)

### Writing & content

#### General / long-form
| Tool | Best for |
| :-- | :-- |
| [Claude](tools/claude.md) / [ChatGPT](tools/chatgpt.md) / [Gemini](tools/gemini.md) | Now beat most dedicated writing tools for free-form prose |
| [Lex](tools/lex.md) | AI-native long-form editor; clean writing UX |
| [Grammarly](tools/grammarly.md) | Editor + GenAI; broad app coverage |
| [Wordtune](tools/wordtune.md) | Rewriting and tone control |
| [HyperWrite](tools/hyperwrite.md) | Personal writing assistant with browser agent |

#### Marketing / brand voice / SEO
| Tool | Best for |
| :-- | :-- |
| [Jasper](tools/jasper.md) | Brand voice + templates for marketing teams |
| [Copy.ai](tools/copy_ai.md) | GTM workflows |
| [Writesonic](tools/writesonic.md) | SEO-focused content + Chatsonic |
| [Surfer SEO](tools/surfer_seo.md) | SEO content optimization |
| [Frase](tools/frase.md) | SERP analysis + brief generation |
| [Writer](tools/writer.md) | Enterprise content platform; brand governance |

#### Fiction & creative
| Tool | Best for |
| :-- | :-- |
| [Sudowrite](tools/sudowrite.md) | Category leader for fiction (Story Engine, Canvas) |
| [NovelCrafter](tools/novelcrafter.md) | Codex-style world-bibles + AI writing |
| [NovelAI](tools/novelai.md) | AI storytelling with custom models |

### Image generation

| Tool | Best for |
| :-- | :-- |
| [Midjourney](tools/midjourney.md) | Aesthetic / artistic peak; v7 |
| [GPT Image / DALL·E in ChatGPT](tools/chatgpt.md) | Best prompt comprehension and text rendering in chat |
| [Google Imagen / Gemini](tools/gemini.md) | Photorealism + integrated editing |
| [FLUX](tools/flux.md) | Pro / Dev / Schnell; best $/image for photoreal |
| [Stable Diffusion](tools/stable_diffusion.md) | `OSS` `Local`; the entire ecosystem (LoRAs, ControlNet) |
| [ComfyUI](tools/comfyui.md) | `OSS` `Local` node-graph workflow editor for SD/Flux |
| [Automatic1111](tools/automatic1111.md) | `OSS` `Local` classic SD WebUI |
| [Ideogram](tools/ideogram.md) | Best in class for legible text in images |
| [Recraft](tools/recraft.md) | Vector + brand-style consistency |
| [Leonardo](tools/leonardo.md) | Game / asset focus; fine-tunable models |
| [Krea](tools/krea.md) | Real-time generation + enhance |
| [Adobe Firefly](tools/adobe_firefly.md) | Commercially safe; in Photoshop |
| [Reve](tools/reve.md) | Strong at prompt fidelity |

### Image editing & object work

| Tool | Best for |
| :-- | :-- |
| [Photoshop Generative Fill](tools/photoshop_genfill.md) | Inpaint / outpaint via Firefly |
| [Magnific](tools/magnific.md) | AI upscaling + relight |
| [Topaz Photo AI](tools/topaz_photo.md) | Pro denoise / upscale |
| [Clipdrop](tools/clipdrop.md) | Background removal, relight, replace |
| [Remove.bg](tools/removebg.md) | One-click background removal |
| [Photoroom](tools/photoroom.md) | Product photography + bulk image edits |

### Video generation

| Tool | Best for |
| :-- | :-- |
| [Veo 3.1 (Google)](tools/veo.md) | Strongest all-rounder; native audio, 4K, prompt fidelity |
| [Runway](tools/runway.md) | Gen-4 / Gen-4.5; pro creative controls (motion brush, refs) |
| [Kling](tools/kling.md) | Long durations, best $/clip |
| [Seedance 2.0](tools/seedance.md) | ByteDance; strong motion in blind tests |
| [Pika](tools/pika.md) | Fast iterations + Pikaffects |
| [Luma Dream Machine](tools/luma.md) | Smooth camera moves |
| [Hailuo (MiniMax)](tools/hailuo.md) | Generous `Free` tier; image-to-video |
| [Higgsfield](tools/higgsfield.md) | Cinematic camera presets |
| [Pixverse](tools/pixverse.md) | Anime / stylized motion |

> ⚠️ **Heads up (April 2026):** OpenAI's Sora consumer apps shut down on **2026-04-26**; the API follows on **2026-09-24**.

### Video editing & repurposing

| Tool | Best for |
| :-- | :-- |
| [Descript](tools/descript.md) | Edit video by editing the transcript |
| [Runway](tools/runway.md) | Color, mask, rotoscope, lipsync |
| [CapCut](tools/capcut.md) | AI clip editing on desktop / mobile |
| [Opus Clip](tools/opus_clip.md) | Long video → viral short clips, auto-captioned |
| [Captions](tools/captions.md) | Mobile-first AI video editor with avatars |
| [Submagic](tools/submagic.md) | Auto-captions, B-roll, hooks |
| [Klap](tools/klap.md) | Long → short clips with virality scoring |
| [Topaz Video AI](tools/topaz_video.md) | Upscale / interpolate |
| [HeyGen](tools/heygen.md) | AI avatars; multilingual lipsync |
| [Synthesia](tools/synthesia.md) | Corporate avatar videos from scripts |
| [Tavus](tools/tavus.md) | Personalized AI video at scale |

### Voice & speech

#### TTS / voice cloning
| Tool | Best for |
| :-- | :-- |
| [ElevenLabs](tools/elevenlabs.md) | Industry standard; natural TTS, cloning, dubbing, voice agents |
| [PlayHT](tools/playht.md) | TTS + voice cloning |
| [Cartesia (Sonic)](tools/cartesia.md) | Ultra-low-latency real-time voice |
| [Resemble AI](tools/resemble.md) | Cloning + speech-to-speech |
| [OpenAI Voice / Realtime API](tools/openai_voice.md) | Native multimodal voice |
| [Suno Bark](tools/suno_bark.md) | `OSS` TTS |

#### Transcription & speech-to-text
| Tool | Best for |
| :-- | :-- |
| [Whisper](tools/whisper.md) | `OSS` `Local`; the de-facto baseline |
| [Deepgram](tools/deepgram.md) | Fast streaming ASR API |
| [AssemblyAI](tools/assemblyai.md) | Speech AI API; speaker labels, summarization |
| [Otter](tools/otter.md) | Live transcription + meeting notes |

#### Real-time conversation & voice agents
| Tool | Best for |
| :-- | :-- |
| [Vapi](tools/vapi.md) · [Retell](tools/retell.md) · [Bland](https://www.bland.ai) | Build phone-call voice agents |
| [LiveKit Agents](tools/livekit.md) | `OSS` voice agent framework |

### Music generation

| Tool | Best for |
| :-- | :-- |
| [Suno](tools/suno.md) | v5; full songs with vocals, stem editing — most polished |
| [Udio](tools/udio.md) | High control; embroiled in Sony litigation |
| [ElevenLabs Music](tools/elevenlabs.md) | Trim / cut in-tool; high credit cost |
| [Mubert](tools/mubert.md) | API-friendly, license-safe royalty-free music |
| [Loudly](tools/loudly.md) | Genre-driven multi-track generation |
| [Stable Audio](tools/stable_audio.md) | Stability's audio model |
| [AIVA](tools/aiva.md) | Soundtracks / film scoring |
| [Endel](tools/endel.md) | Adaptive focus / ambient soundscapes |

<sub>[⤴ back to top](#top)</sub>

---

# 💼 Work

Get the day's work done.

- [Productivity (notes, meetings, email, scheduling)](#productivity-notes-meetings-email-scheduling)
- [Agents & browser automation](#agents--browser-automation)
- [Workflow automation](#workflow-automation)
- [Design (UI/UX, graphics, presentations)](#design-uiux-graphics-presentations)
- [Data, analysis & spreadsheets](#data-analysis--spreadsheets)

### Productivity (notes, meetings, email, scheduling)

#### Meeting notes
| Tool | Best for |
| :-- | :-- |
| [Granola](tools/granola.md) | Bot-free; you write rough notes, it polishes after the call |
| [Fathom](tools/fathom.md) | `Free` unlimited recording + transcription |
| [Otter](tools/otter.md) | Mature meeting + transcription |
| [Fireflies](tools/fireflies.md) | Cross-platform meeting bot |
| [Read AI](tools/read_ai.md) | Meeting + email + messaging summaries |
| [Krisp](tools/krisp.md) | Bot-free meeting notes + noise cancel |
| [tl;dv](tools/tldv.md) | Meeting recap + CRM sync |
| [Jamie](tools/jamie.md) | Bot-free, EU-friendly |

#### Notes & second-brain
| Tool | Best for |
| :-- | :-- |
| [Notion AI](tools/notion_ai.md) | AI inside the Notion workspace |
| [Mem](tools/mem.md) | Self-organizing notes with persistent memory |
| [Reflect](tools/reflect.md) | Networked notes with GPT-4o |
| [Obsidian + Smart Connections](tools/obsidian.md) | `OSS` `Local` notes + AI plugins |
| [Capacities](tools/capacities.md) | Object-based notes with AI |

#### Email
| Tool | Best for |
| :-- | :-- |
| [Superhuman](tools/superhuman.md) | AI-native email triage and drafts |
| [Shortwave](tools/shortwave.md) | Gmail front-end with strong AI |
| [Fyxer](tools/fyxer.md) | AI executive assistant for inbox |
| [SaneBox](tools/sanebox.md) | AI email triage |

#### Scheduling & tasks
| Tool | Best for |
| :-- | :-- |
| [Motion](tools/motion.md) | Auto-schedules tasks into your calendar |
| [Reclaim](tools/reclaim.md) | Defends focus time, syncs habits |
| [Akiflow](tools/akiflow.md) | Task aggregator + time blocking |
| [Todoist AI](tools/todoist.md) | Task suggestions + breakdowns |
| [ChatPRD](tools/chatprd.md) | PRDs and product specs |

### Agents & browser automation

General-purpose agents that can plan, browse, click, and execute multi-step work.

| Tool | Best for |
| :-- | :-- |
| [ChatGPT Operator / Agent](tools/chatgpt_operator.md) | OpenAI's browser-using agent in ChatGPT |
| [Manus](tools/manus.md) | Cloud agent; "My Computer" sandbox; acquired by Meta (Dec 2025) |
| [Claude Computer Use](tools/claude_computer_use.md) | API for screen / mouse / keyboard control |
| [Gemini / Project Mariner](tools/gemini.md) | Google's browser agent |
| [Microsoft Copilot Actions](tools/microsoft_copilot.md) | Enterprise Copilot agents |
| [Goose (Block)](tools/goose.md) | `OSS` local agent |
| [Browser Use](tools/browser_use.md) | `OSS` Python lib for LLM-controlled browsers |
| [Browserbase + Stagehand](tools/browserbase.md) | Headless browser infra for agents |
| [AutoGPT](tools/autogpt.md) | `OSS` autonomous agent platform |
| [CrewAI](tools/crewai.md) | `OSS` multi-agent orchestration |
| [LangGraph](tools/langgraph.md) | `OSS` stateful agent graphs |
| [Smolagents](tools/smolagents.md) | `OSS` minimal agent framework (HF) |

### Workflow automation

Connect apps and trigger AI in multi-step pipelines.

| Tool | Best for |
| :-- | :-- |
| [n8n](tools/n8n.md) | `OSS` self-hostable; the developer-favorite |
| [Make](tools/make.md) | Visual scenario builder with AI modules |
| [Zapier AI](tools/zapier.md) | Largest app catalog; AI Actions + Agents |
| [Pipedream](tools/pipedream.md) | Code-first workflows with AI steps |
| [Activepieces](tools/activepieces.md) | `OSS` Zapier alternative |
| [Lindy](tools/lindy.md) | AI assistant builder for ops workflows |
| [Relevance AI](tools/relevance_ai.md) | No-code AI agent teams |

### Design (UI/UX, graphics, presentations)

| Tool | Best for |
| :-- | :-- |
| [Figma + Figma Make](tools/figma.md) | Industry standard; prompt-to-prototype |
| [Google Stitch](tools/google_stitch.md) | Prompt → editable UI design (formerly Galileo) |
| [v0 by Vercel](tools/v0.md) | Prompt → React / Tailwind components |
| [Uizard](tools/uizard.md) | Wireframe to UI |
| [Magic Patterns](tools/magic_patterns.md) | Generate React + Figma UIs |
| [Canva](tools/canva.md) | Magic Studio: visuals at scale for non-designers |
| [Adobe Firefly](tools/adobe_firefly.md) | Generative inside Creative Cloud |
| [Gamma](tools/gamma.md) | AI presentations / decks / sites |
| [Tome](tools/tome.md) | AI decks + sales narratives |
| [Beautiful.ai](tools/beautiful_ai.md) | Smart slide templates |
| [Recraft](tools/recraft.md) | Brand-consistent vector + raster |

### Data, analysis & spreadsheets

| Tool | Best for |
| :-- | :-- |
| [Julius](tools/julius.md) | Chat-driven data analysis on CSVs / sheets |
| [Hex + Magic](tools/hex.md) | Notebook + AI for data teams |
| [Mode + AI Assistant](tools/mode.md) | BI with AI |
| [Rows](tools/rows.md) | AI spreadsheet |
| [Bricks](tools/bricks.md) | Spreadsheet that talks back |
| [Numerous](tools/numerous.md) | AI inside Sheets / Excel |
| [Equals](tools/equals.md) | Connected spreadsheet with AI |
| [DataChat](tools/datachat.md) | Conversational analytics |

<sub>[⤴ back to top](#top)</sub>

---

# 🔨 Build

For the people writing software, training models, or shipping products.

- [Coding](#coding)
- [App & web builders (vibe coding / no-code)](#app--web-builders-vibe-coding--no-code)
- [Local & open-source model runners](#local--open-source-model-runners)
- [Model APIs & dev platforms](#model-apis--dev-platforms)

### Coding

#### Terminal / agentic coding
| Tool | Best for |
| :-- | :-- |
| [Claude Code](tools/claude_code.md) | Anthropic's CLI agent; full-codebase context, hooks, MCP, sub-agents |
| [Codex CLI](tools/codex_cli.md) | OpenAI's terminal agent; surged with GPT-5.5 |
| [Gemini CLI](tools/gemini_cli.md) | `OSS` Google terminal agent; ReAct loop, MCP, 1M context |
| [Aider](tools/aider.md) | `OSS` pair-programming in the terminal; git-native |
| [OpenHands](tools/openhands.md) | `OSS` autonomous SWE agent (formerly OpenDevin) |
| [SWE-agent](tools/swe_agent.md) | `OSS` agent that fixes GitHub issues (Princeton) |

#### AI-native IDEs & editors
| Tool | Best for |
| :-- | :-- |
| [Cursor](tools/cursor.md) | Dominant AI IDE; Composer for multi-file edits, codebase indexing |
| [Windsurf](tools/windsurf.md) | Codeium's agentic IDE; Cascade flow, lower price |
| [Zed](tools/zed.md) | `OSS` native, fast Rust-based editor with AI |
| [Void](tools/void.md) | `OSS` Cursor alternative |
| [Pochi](tools/pochi.md) | VS Code-native agent (TabbyML); parallel agents, local models |
| [Trae](tools/trae.md) | ByteDance's AI IDE |

#### Inline completion / copilots
| Tool | Best for |
| :-- | :-- |
| [GitHub Copilot](tools/github_copilot.md) | Best inline autocomplete; deep JetBrains/VS Code support |
| [Tabnine](tools/tabnine.md) | Privacy-first; on-prem and air-gap |
| [Codeium](tools/codeium.md) | `Free` tier; many IDEs |
| [Supermaven](tools/supermaven.md) | Very fast completion; long context |
| [Continue](tools/continue.md) | `OSS` BYO-model, VS Code/JetBrains |

#### Code review & quality
| Tool | Best for |
| :-- | :-- |
| [CodeRabbit](tools/coderabbit.md) | AI PR reviewer with chat |
| [Greptile](tools/greptile.md) | Codebase Q&A and review |
| [Cody (Sourcegraph)](tools/cody.md) | Codebase-aware assistant; enterprise |
| [Qodo](tools/qodo.md) | Test generation + review (formerly Codium) |
| [Diamond by Graphite](tools/diamond.md) | PR review tightly integrated with Graphite stacks |

#### Cloud / remote SWE agents
| Tool | Best for |
| :-- | :-- |
| [Devin](tools/devin.md) | Cognition's autonomous engineer |
| [GitHub Copilot Coding Agent](tools/github_copilot.md) | Assigns issues directly to Copilot; opens PRs |
| [Replit Agent](tools/replit_agent.md) | Build, test, and deploy from a prompt |

### App & web builders (vibe coding / no-code)

| Tool | Best for |
| :-- | :-- |
| [Lovable](tools/lovable.md) | Full-stack from prompt; built-in hosting + Supabase + auth |
| [Bolt.new](tools/bolt_new.md) | Browser IDE; fastest path to a shareable demo |
| [v0](tools/v0.md) | Best for Next.js teams; UI-first |
| [Replit Agent](tools/replit_agent.md) | Glass-box: see and edit the code as it builds |
| [Base44](tools/base44.md) | All-in-one no-code app builder |
| [Softr](tools/softr.md) | No-code apps on top of Airtable / Sheets |
| [Glide](tools/glide.md) | No-code mobile-first apps |
| [Bubble](tools/bubble.md) | No-code with AI assist |
| [Webflow + AI](tools/webflow.md) | AI features in a designer-grade web builder |
| [Framer](tools/framer.md) | AI sites with strong design defaults |

### Local & open-source model runners

Run models on your own machine — no data leaves the device.

| Tool | Best for |
| :-- | :-- |
| [Ollama](tools/ollama.md) | The default; CLI-first, OpenAI-compatible API |
| [LM Studio](tools/lm_studio.md) | Friendly GUI; HF browser; headless mode |
| [Jan](tools/jan.md) | `OSS` desktop ChatGPT replacement |
| [llama.cpp](tools/llama_cpp.md) | `OSS` inference engine; backbone of most local tooling |
| [text-generation-webui](tools/text_generation_webui.md) | `OSS` power-user web UI |
| [GPT4All](tools/gpt4all.md) | `OSS` desktop app for local LLMs |
| [LocalAI](tools/localai.md) | `OSS` OpenAI-compatible drop-in for local |
| [vLLM](tools/vllm.md) | `OSS` high-throughput serving |
| [Open WebUI](tools/open_webui.md) | `OSS` ChatGPT-style UI for Ollama / OpenAI-compatible APIs |

**Notable open-weight model families (2026):** Llama (Meta) · Gemma (Google) · Qwen (Alibaba) · DeepSeek · Mistral · Kimi K2.x (Moonshot) · GLM (Zhipu) · Nemotron (NVIDIA) · Phi (Microsoft).

### Model APIs & dev platforms

For developers building on top of models.

| Provider | Best for |
| :-- | :-- |
| [Anthropic API](tools/anthropic_api.md) | Claude family; tool use, computer use, MCP |
| [OpenAI Platform](tools/openai_platform.md) | GPT, Realtime, Responses API, Agents SDK |
| [Google AI Studio / Vertex](tools/google_ai_studio.md) | Gemini family |
| [xAI](tools/xai.md) | Grok API |
| [Mistral La Plateforme](tools/mistral_la_plateforme.md) | EU-hosted models |
| [DeepSeek API](tools/deepseek.md) | Cheap frontier reasoning |
| [Together AI](tools/together.md) | OSS model hosting + fine-tuning |
| [Fireworks AI](tools/fireworks.md) | Fast OSS model inference |
| [Groq](tools/groq.md) | LPU inference at very high TPS |
| [Cerebras Inference](tools/cerebras.md) | Wafer-scale inference; very fast |
| [Replicate](tools/replicate.md) | Run any model via API |
| [Hugging Face](tools/huggingface.md) | Models, datasets, Spaces, Inference Endpoints |
| [Modal](tools/modal.md) · [Runpod](tools/runpod.md) | GPU compute for AI workloads |
| [LangChain](tools/langchain.md) · [LlamaIndex](tools/llamaindex.md) | `OSS` app frameworks |
| [Vercel AI SDK](tools/vercel_ai_sdk.md) | TS-first AI app SDK |
| [LiteLLM](tools/litellm.md) | `OSS` unified API gateway across providers |

<sub>[⤴ back to top](#top)</sub>

---

# ❤️ Life

The personal side: companions and learning.

- [Personal companions](#personal-companions)
- [Education & learning](#education--learning)

### Personal companions

Apps designed around long-running emotional / social interaction rather than productivity.

| Tool | Best for |
| :-- | :-- |
| [Nomi](tools/nomi.md) | Strong long-term memory; group chats; deep personalization |
| [Replika](tools/replika.md) | The original; gamified relationship + companion-world |
| [Character.AI](tools/character_ai.md) | Largest character library; generous `Free` tier |
| [Kindroid](tools/kindroid.md) | Lifelike personalities, in-app social feed |
| [Pi (Inflection)](tools/pi.md) | Calmer, conversational tone |
| [Talkie](tools/talkie.md) | Mobile-first roleplay |

### Education & learning

| Tool | Best for |
| :-- | :-- |
| [Khanmigo](tools/khanmigo.md) | K-12 tutoring assistant (Khan Academy) |
| [Quizlet AI](tools/quizlet.md) | Flashcards + Q-Chat tutor |
| [Duolingo Max](tools/duolingo_max.md) | Roleplay + Explain My Answer |
| [Speak](tools/speak.md) | AI conversation for language learning |
| [NotebookLM](tools/notebooklm.md) | Turn course material into Q&A + audio |
| [Brisk Teaching](tools/brisk_teaching.md) | AI for teachers (lesson plans, feedback) |
| [Eightify](tools/eightify.md) | YouTube lecture summaries |

<sub>[⤴ back to top](#top)</sub>

---

## Sources

A non-exhaustive list of write-ups consulted for this index.

<details>
<summary><strong>Show sources</strong></summary>

- [The 12 Best AI Tools for 2026 — Synthesia](https://www.synthesia.io/post/ai-tools)
- [I tried 70+ best AI tools in 2026 — TechRadar](https://www.techradar.com/best/best-ai-tools)
- [Best AI Tools 2026 Complete Ranking — NxCode](https://www.nxcode.io/resources/news/best-ai-tools-2026-complete-ranking-guide)
- [eudk/awesome-ai-tools (GitHub)](https://github.com/eudk/awesome-ai-tools)
- [caramaschiHG/awesome-ai-agents-2026 (GitHub)](https://github.com/caramaschiHG/awesome-ai-agents-2026)
- [QAInsights/awesome-ai-tools (GitHub)](https://github.com/QAInsights/awesome-ai-tools)
- [ai-for-developers/awesome-ai-coding-tools (GitHub)](https://github.com/ai-for-developers/awesome-ai-coding-tools)
- [Top AI GitHub Repositories in 2026 — ByteByteGo](https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026)
- [Best AI Code Editors in 2026 — MindStudio](https://www.mindstudio.ai/blog/best-ai-code-editors)
- [Best AI Coding Agents for 2026 — Faros](https://www.faros.ai/blog/best-ai-coding-agents-2026)
- [Coding Agents Comparison — Artificial Analysis](https://artificialanalysis.ai/agents/coding)
- [Best AI Image Generators in 2026 — Zapier](https://zapier.com/blog/best-ai-image-generator/)
- [Midjourney vs DALL·E vs SD vs Flux 2026](https://freeacademy.ai/blog/midjourney-vs-dalle-vs-stable-diffusion-vs-flux-comparison-2026)
- [Best AI Video Generators 2026 — Pixflow](https://pixflow.net/blog/best-ai-video-generator/)
- [Sora alternatives — eWeek](https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/)
- [Best AI Video Generators 2026 — AI/ML API](https://aimlapi.com/blog/best-ai-video-generators-2026-veo-3-1-kling-sora-2-seedance-more-compared)
- [Best AI Companion Apps 2026 — AI Companion Guides](https://aicompanionguides.com/blog/best-ai-companion-apps-2026/)
- [Best AI Companion Apps — Mindful Suite](https://www.mindfulsuite.com/reviews/best-ai-companion-apps)
- [The 9 Best AI Personal Assistants — Zapier](https://zapier.com/blog/ai-personal-assistant/)
- [55+ Best AI Tools for Productivity in 2026 — GPT Prompts](https://gptprompts.ai/ai-tools-for-productivity)
- [The 10 Best AI Note Takers in 2026 — Meeting Notes](https://meetingnotes.com/blog/best-ai-note-takers)
- [Granola vs Notion AI 2026 — Zack Proser](https://zackproser.com/blog/granola-vs-notion-ai-2026)
- [10 Best Manus Alternatives 2026 — Vellum](https://www.vellum.ai/blog/best-manus-alternatives)
- [Best AI Agents in 2026 — Fello AI](https://felloai.com/best-ai-agents/)
- [Top 10 Browser Use Agents 2026 — o-mega](https://o-mega.ai/articles/top-10-browser-use-agents-full-review-2026)
- [Best AI Music Generators 2026 — Curious Refuge](https://curiousrefuge.com/blog/best-ai-music-tools-for-2026)
- [Best AI Music Generators 2026 — SoundGuys](https://www.soundguys.com/best-ai-music-generators-134781/)
- [15 Best AI Design Tools 2026 — Guideflow](https://www.guideflow.com/blog/ai-design-tools)
- [11 Best AI Design Tools — Figma](https://www.figma.com/resource-library/ai-design-tools/)
- [I Tested 29 AI Writing Tools — eesel](https://www.eesel.ai/blog/best-ai-writing-tools)
- [Best AI for Creative Writing 2026 — Sudowrite](https://sudowrite.com/blog/best-ai-for-creative-writing-in-2026-tested-and-compared/)
- [AI Search Engines Compared 2026 — haoqq](https://www.haoqq.com/en/guides/ai-search-engines-compared-2026)
- [Perplexity vs Tavily vs Exa vs You.com 2026 — Humai](https://www.humai.blog/perplexity-vs-tavily-vs-exa-vs-you-com-the-complete-ai-search-engine-comparison-2026/)
- [Best AI App Builders 2026 — Lovable](https://lovable.dev/guides/best-ai-app-builders)
- [AI App Builders Compared — NovaKit](https://www.novakit.ai/blog/ai-builders-comparison-bolt-lovable-v0-novakit)
- [Top 5 Local LLM Tools and Models in 2026 — Pinggy](https://pinggy.io/blog/top_5_local_llm_tools_and_models/)
- [Jan vs LM Studio vs Ollama — Local AI Master](https://localaimaster.com/blog/jan-vs-lm-studio-vs-ollama)
- [15 Best LM Studio Alternatives 2026 — PremAI](https://blog.premai.io/15-best-lm-studio-alternatives-for-running-local-llms-2026/)

</details>

---

## Contributing

Spotted something missing or out of date? Open a PR — one tool per row, one-line "best for" reason, alphabetical-ish within its sub-section.

## License

[MIT](LICENSE) © 2026 Irteza

<div align="center">
<sub>Pricing and capabilities change weekly — always check the source.</sub>
</div>
