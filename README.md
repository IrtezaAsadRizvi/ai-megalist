# AI Megalist

A curated index of AI tools organized by **what you want to do**, not by what model powers them. Compiled from public benchmarks, vendor docs, and community write-ups (April 2026). Links go to the official product unless otherwise noted.

> **Notes**
> - Tools marked **OSS** are open source.
> - Tools marked **Local** can run fully on your machine without sending data out.
> - Pricing changes constantly; check the official site.
> - Inclusion is descriptive, not an endorsement.

---

## Contents

- [General-purpose assistants](#general-purpose-assistants)
- [Coding](#coding)
- [Research & deep research](#research--deep-research)
- [AI search engines](#ai-search-engines)
- [Writing & content](#writing--content)
- [Image generation](#image-generation)
- [Video generation](#video-generation)
- [Voice & speech](#voice--speech)
- [Music generation](#music-generation)
- [Personal companions](#personal-companions)
- [Productivity (notes, meetings, email, scheduling)](#productivity-notes-meetings-email-scheduling)
- [Agents & browser automation](#agents--browser-automation)
- [Design (UI/UX, graphics, presentations)](#design-uiux-graphics-presentations)
- [App & web builders (vibe coding / no-code)](#app--web-builders-vibe-coding--no-code)
- [Data, analysis & spreadsheets](#data-analysis--spreadsheets)
- [Education & learning](#education--learning)
- [Local & open-source model runners](#local--open-source-model-runners)
- [Model APIs & dev platforms](#model-apis--dev-platforms)
- [Sources](#sources)

---

## General-purpose assistants

Conversational generalists — your daily-driver chat. Most now support memory, file uploads, web browsing, voice, image generation, and tool use.

| Tool | Best for |
| --- | --- |
| [ChatGPT](https://chatgpt.com) | Broadest feature set; voice, image gen, Agents, Operator, native video |
| [Claude](https://claude.ai) | Strongest writing and code reasoning; 1M-token context on Opus |
| [Gemini](https://gemini.google.com) | Tight Google Workspace integration, best multimodal/research at scale |
| [Microsoft Copilot](https://copilot.microsoft.com) | Default for M365 / Windows users |
| [Grok](https://grok.com) | Real-time X data, looser content policy |
| [DeepSeek](https://chat.deepseek.com) | Free frontier-tier reasoning, OSS weights |
| [Mistral Le Chat](https://chat.mistral.ai) | EU-hosted, fast, OSS-friendly |
| [Qwen Chat](https://chat.qwen.ai) | Strong Chinese + English, OSS weights |
| [Meta AI](https://meta.ai) | Built into WhatsApp / Instagram / Messenger |

---

## Coding

### Terminal / agentic coding

| Tool | Notes |
| --- | --- |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Anthropic's CLI agent; full-codebase context, hooks, MCP, sub-agents |
| [Codex CLI](https://github.com/openai/codex) | OpenAI's terminal agent; surged with GPT-5.5 in early 2026 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google's OSS terminal agent; ReAct loop, MCP, 1M context (Apache 2.0) |
| [Aider](https://aider.chat) | OSS pair-programming in the terminal; git-native |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) (formerly OpenDevin) | OSS autonomous SWE agent |
| [SWE-agent](https://swe-agent.com) | OSS agent that fixes GitHub issues (Princeton) |

### AI-native IDEs & editors

| Tool | Notes |
| --- | --- |
| [Cursor](https://cursor.com) | Dominant AI IDE; Composer for multi-file edits, codebase indexing |
| [Windsurf](https://windsurf.com) | Codeium's agentic IDE; Cascade flow, lower price than Cursor |
| [Zed](https://zed.dev) | Native, fast Rust-based editor with AI assistant; OSS |
| [Void](https://voideditor.com) | OSS Cursor alternative |
| [Pochi](https://www.pochi.app) | VS Code-native agent (TabbyML); parallel agents, local model support |
| [Trae](https://trae.ai) | ByteDance's AI IDE |

### Inline completion / copilots

| Tool | Notes |
| --- | --- |
| [GitHub Copilot](https://github.com/features/copilot) | Best inline autocomplete, deep JetBrains/VS Code support |
| [Tabnine](https://www.tabnine.com) | Privacy-first; on-prem and air-gap options |
| [Codeium](https://codeium.com) | Free tier; many IDEs |
| [Supermaven](https://supermaven.com) | Very fast completion; long context |
| [Continue](https://continue.dev) | OSS, BYO-model, VS Code/JetBrains |

### Code review & quality

| Tool | Notes |
| --- | --- |
| [CodeRabbit](https://www.coderabbit.ai) | AI PR reviewer with chat |
| [Greptile](https://www.greptile.com) | Codebase Q&A and review |
| [Cody (Sourcegraph)](https://sourcegraph.com/cody) | Codebase-aware assistant; enterprise |
| [Qodo](https://www.qodo.ai) (formerly Codium) | Test generation + review |
| [Diamond by Graphite](https://graphite.dev/diamond) | PR review tightly integrated with Graphite stacks |

### Cloud / remote SWE agents

| Tool | Notes |
| --- | --- |
| [Devin](https://devin.ai) | Cognition's autonomous engineer |
| [GitHub Copilot Coding Agent](https://github.com/features/copilot) | Assigns issues directly to Copilot; opens PRs |
| [Replit Agent](https://replit.com) | Build, test, and deploy from a prompt |
| [Bolt.new](https://bolt.new) | Cloud full-stack agent (StackBlitz) |
| [Lovable](https://lovable.dev) | Prompt-to-app with hosting + Supabase |

---

## Research & deep research

Long-form research with citations, multi-source synthesis, and document grounding.

| Tool | Notes |
| --- | --- |
| [ChatGPT Deep Research](https://chatgpt.com) | Multi-step web research; extensive reports |
| [Gemini Deep Research](https://gemini.google.com) | Reads many sources, returns annotated reports |
| [Claude Research](https://claude.ai) | Multi-agent research mode; strong synthesis |
| [Perplexity](https://www.perplexity.ai) | Cited answers; "Pro Search" and Spaces |
| [NotebookLM](https://notebooklm.google.com) | Grounded Q&A on your docs; podcast-style audio overviews |
| [Elicit](https://elicit.com) | Academic literature review automation |
| [Consensus](https://consensus.app) | AI search across peer-reviewed papers |
| [SciSpace](https://scispace.com) | PDF chat, paper explanations |
| [Explainpaper](https://www.explainpaper.com) | Highlight a passage, get an explanation |
| [Genei](https://www.genei.io) | Article + PDF summarization |
| [Undermind](https://www.undermind.ai) | Deep scientific search |
| [STORM](https://storm.genie.stanford.edu) | OSS Stanford project: writes Wikipedia-style articles from sources |

---

## AI search engines

| Tool | Notes |
| --- | --- |
| [Perplexity](https://www.perplexity.ai) | Cited AI answers; the category default |
| [You.com](https://you.com) | Mode selection; pick the model behind the answer |
| [Phind](https://www.phind.com) | Tuned for developers; indexes docs/GitHub/SO |
| [Kagi](https://kagi.com) | Paid, ad-free; FastGPT, Assistant, Universal Summarizer |
| [Exa](https://exa.ai) | Neural search API; finds source content not just SEO pages |
| [Tavily](https://tavily.com) | Search API for agents and RAG |
| [Andi](https://andisearch.com) | Conversational answer-first search |
| [Brave Search + Leo](https://search.brave.com) | Privacy-first; built-in AI summaries |

---

## Writing & content

### General / long-form

| Tool | Notes |
| --- | --- |
| [Claude](https://claude.ai) / [ChatGPT](https://chatgpt.com) / [Gemini](https://gemini.google.com) | Now beat most dedicated writing tools for free-form prose |
| [Lex](https://lex.page) | AI-native long-form editor; clean writing UX |
| [Grammarly](https://www.grammarly.com) | Editor + GenAI; broad app coverage |
| [Wordtune](https://www.wordtune.com) | Rewriting and tone control |
| [HyperWrite](https://www.hyperwriteai.com) | Personal writing assistant with browser agent |

### Marketing / brand voice / SEO

| Tool | Notes |
| --- | --- |
| [Jasper](https://www.jasper.ai) | Brand voice + templates for marketing teams |
| [Copy.ai](https://www.copy.ai) | GTM workflows |
| [Writesonic](https://writesonic.com) | SEO-focused content + Chatsonic |
| [Surfer SEO](https://surferseo.com) | SEO content optimization |
| [Frase](https://www.frase.io) | SERP analysis + brief generation |
| [Writer](https://writer.com) | Enterprise content platform; brand governance |

### Fiction & creative

| Tool | Notes |
| --- | --- |
| [Sudowrite](https://www.sudowrite.com) | Category leader for fiction (Story Engine, Canvas) |
| [NovelCrafter](https://www.novelcrafter.com) | Codex-style world-bibles + AI writing |
| [NovelAI](https://novelai.net) | AI storytelling with custom models |
| [SidekickWriter](https://www.sidekickwriter.com) | Manuscript-scale fiction assistant |

---

## Image generation

| Tool | Notes |
| --- | --- |
| [Midjourney](https://www.midjourney.com) | Aesthetic / artistic peak; v7 |
| [GPT Image / DALL·E in ChatGPT](https://chatgpt.com) | Best prompt comprehension and text rendering in chat |
| [Google Imagen / Gemini](https://gemini.google.com) | Photorealism + integrated editing |
| [FLUX](https://blackforestlabs.ai) | Pro/Dev/Schnell; best $/image for photoreal |
| [Stable Diffusion](https://stability.ai) | OSS, **Local**; the entire ecosystem (LoRAs, ControlNet) |
| [ComfyUI](https://www.comfy.org) | OSS node-graph workflow editor for SD/Flux; **Local** |
| [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | OSS classic SD WebUI; **Local** |
| [Ideogram](https://ideogram.ai) | Best in class for legible text in images |
| [Recraft](https://www.recraft.ai) | Vector + brand-style consistency |
| [Leonardo](https://leonardo.ai) | Game/asset focus; fine-tunable models |
| [Krea](https://www.krea.ai) | Real-time generation + enhance |
| [Adobe Firefly](https://www.adobe.com/products/firefly.html) | Commercially safe; in Photoshop |
| [Reve](https://reve.art) | Strong at prompt fidelity |

### Image editing / object work

| Tool | Notes |
| --- | --- |
| [Photoshop Generative Fill](https://www.adobe.com/products/photoshop.html) | Inpaint/outpaint via Firefly |
| [Magnific](https://magnific.ai) | AI upscaling + relight |
| [Topaz Photo AI](https://www.topazlabs.com/topaz-photo-ai) | Pro denoise / upscale |
| [Clipdrop](https://clipdrop.co) | Background removal, relight, replace |
| [Remove.bg](https://www.remove.bg) | One-click background removal |

---

## Video generation

| Tool | Notes |
| --- | --- |
| [Veo 3.1 (Google)](https://deepmind.google/technologies/veo) | Strongest all-rounder; native audio, 4K, prompt fidelity |
| [Runway](https://runwayml.com) | Gen-4 / Gen-4.5; pro creative controls (motion brush, refs) |
| [Kling](https://www.klingai.com) | Long durations, best $/clip |
| [Seedance 2.0](https://seed.bytedance.com) | ByteDance; strong motion in blind tests |
| [Pika](https://pika.art) | Fast iterations + Pikaffects |
| [Luma Dream Machine](https://lumalabs.ai/dream-machine) | Smooth camera moves |
| [Hailuo (MiniMax)](https://hailuoai.com) | Generous free tier; image-to-video |
| [Higgsfield](https://higgsfield.ai) | Cinematic camera presets |

> **Note (April 2026):** OpenAI's Sora consumer apps are being shut down on **2026-04-26**; the API follows on **2026-09-24**.

### Editing / pipelines

| Tool | Notes |
| --- | --- |
| [Runway](https://runwayml.com) | Color, mask, rotoscope, lipsync |
| [Descript](https://www.descript.com) | Edit video by editing the transcript |
| [CapCut](https://www.capcut.com) | AI clip editing on desktop/mobile |
| [Topaz Video AI](https://www.topazlabs.com/topaz-video-ai) | Upscale / interpolate |
| [HeyGen](https://www.heygen.com) | AI avatars; multilingual lipsync |
| [Synthesia](https://www.synthesia.io) | Corporate avatar videos from scripts |

---

## Voice & speech

### TTS / voice cloning

| Tool | Notes |
| --- | --- |
| [ElevenLabs](https://elevenlabs.io) | Industry standard for natural TTS, cloning, dubbing, voice agents |
| [PlayHT](https://play.ht) | TTS + voice cloning |
| [Cartesia (Sonic)](https://cartesia.ai) | Ultra-low-latency real-time voice |
| [Resemble AI](https://www.resemble.ai) | Cloning + speech-to-speech |
| [OpenAI Voice / Realtime API](https://platform.openai.com) | Native multimodal voice |
| [Suno Bark](https://github.com/suno-ai/bark) | OSS TTS |

### Transcription / speech-to-text

| Tool | Notes |
| --- | --- |
| [Whisper](https://github.com/openai/whisper) | OSS, **Local**; the de-facto baseline |
| [Deepgram](https://deepgram.com) | Fast streaming ASR API |
| [AssemblyAI](https://www.assemblyai.com) | Speech AI API; speaker labels, summarization |
| [Otter](https://otter.ai) | Live transcription + meeting notes |

### Real-time conversation / voice agents

| Tool | Notes |
| --- | --- |
| [Vapi](https://vapi.ai), [Retell](https://www.retellai.com), [Bland](https://www.bland.ai) | Build phone-call voice agents |
| [LiveKit Agents](https://livekit.io/agents) | OSS voice agent framework |

---

## Music generation

| Tool | Notes |
| --- | --- |
| [Suno](https://suno.com) | v5; full songs with vocals, stem editing, the most polished output |
| [Udio](https://www.udio.com) | High control; embroiled in Sony litigation |
| [ElevenLabs Music](https://elevenlabs.io) | Trim/cut in-tool; high credit cost |
| [Mubert](https://mubert.com) | API-friendly, license-safe royalty-free music |
| [Loudly](https://www.loudly.com) | Genre-driven multi-track generation |
| [Stable Audio](https://stableaudio.com) | Stability's audio model |
| [Riffusion](https://www.riffusion.com) | Free song generation |

---

## Personal companions

Apps designed around long-running emotional/social interaction rather than productivity.

| Tool | Notes |
| --- | --- |
| [Nomi](https://nomi.ai) | Strong long-term memory; group chats; deep personalization |
| [Replika](https://replika.com) | The original; gamified relationship + companion-world |
| [Character.AI](https://character.ai) | Largest character library; generous free tier |
| [Kindroid](https://kindroid.ai) | Lifelike personalities, in-app social feed |
| [Pi](https://pi.ai) (Inflection) | Calmer, conversational tone |
| [Talkie](https://www.talkie-ai.com) | Mobile-first roleplay |

---

## Productivity (notes, meetings, email, scheduling)

### Meeting notes

| Tool | Notes |
| --- | --- |
| [Granola](https://www.granola.ai) | Bot-free; you write rough notes, it polishes after the call |
| [Fathom](https://fathom.video) | Free unlimited recording + transcription |
| [Otter](https://otter.ai) | Mature meeting + transcription |
| [Fireflies](https://fireflies.ai) | Cross-platform meeting bot |
| [Read AI](https://www.read.ai) | Meeting + email + messaging summaries |
| [Krisp](https://krisp.ai) | Bot-free meeting notes + noise cancel |
| [tl;dv](https://tldv.io) | Meeting recap + CRM sync |
| [Jamie](https://www.meetjamie.ai) | Bot-free, EU-friendly |

### Notes / second-brain

| Tool | Notes |
| --- | --- |
| [Notion AI](https://www.notion.so/product/ai) | AI inside the Notion workspace |
| [Mem](https://get.mem.ai) | Self-organizing notes with persistent memory |
| [Reflect](https://reflect.app) | Networked notes with GPT-4o |
| [Obsidian + Smart Connections](https://obsidian.md) | OSS local notes + AI plugins; **Local** |
| [Capacities](https://capacities.io) | Object-based notes with AI |

### Email

| Tool | Notes |
| --- | --- |
| [Superhuman](https://superhuman.com) | AI-native email triage and drafts |
| [Shortwave](https://www.shortwave.com) | Gmail front-end with strong AI |
| [Fyxer](https://www.fyxer.com) | AI executive assistant for inbox |
| [SaneBox](https://www.sanebox.com) | AI email triage |

### Scheduling / tasks

| Tool | Notes |
| --- | --- |
| [Motion](https://www.usemotion.com) | Auto-schedules tasks into your calendar |
| [Reclaim](https://reclaim.ai) | Defends focus time, syncs habits |
| [Akiflow](https://akiflow.com) | Task aggregator + time blocking |
| [Todoist AI](https://www.todoist.com) | Task suggestions + breakdowns |

---

## Agents & browser automation

General-purpose agents that can plan, browse, click, and execute multi-step work.

| Tool | Notes |
| --- | --- |
| [ChatGPT Operator / Agent](https://openai.com/index/introducing-operator) | OpenAI's browser-using agent in ChatGPT |
| [Manus](https://manus.im) | Cloud agent; popularized "My Computer" sandbox; acquired by Meta (Dec 2025) |
| [Claude Computer Use](https://www.anthropic.com/news/3-5-models-and-computer-use) | API for screen / mouse / keyboard control |
| [Gemini / Project Mariner](https://deepmind.google/technologies/project-mariner/) | Google's browser agent |
| [Microsoft Copilot Actions](https://www.microsoft.com/en-us/microsoft-365-copilot) | Enterprise Copilot agents |
| [Browser Use](https://browser-use.com) | OSS Python lib for LLM-controlled browsers |
| [Browserbase / Stagehand](https://www.browserbase.com) | Headless browser infra for agents |
| [AutoGPT](https://agpt.co) | OSS autonomous agent platform |
| [CrewAI](https://www.crewai.com) | OSS multi-agent orchestration framework |
| [LangGraph](https://www.langchain.com/langgraph) | OSS stateful agent graphs |
| [Smolagents](https://github.com/huggingface/smolagents) | OSS minimal agent framework (HF) |

---

## Design (UI/UX, graphics, presentations)

| Tool | Notes |
| --- | --- |
| [Figma + Figma Make](https://www.figma.com) | Industry standard; prompt-to-prototype |
| [Google Stitch](https://stitch.withgoogle.com) (formerly Galileo) | Prompt → editable UI design |
| [v0 by Vercel](https://v0.dev) | Prompt → React/Tailwind components |
| [Uizard](https://uizard.io) | Wireframe to UI |
| [Magic Patterns](https://www.magicpatterns.com) | Generate React + Figma UIs |
| [Canva](https://www.canva.com) | Magic Studio: visuals at scale for non-designers |
| [Adobe Firefly](https://www.adobe.com/products/firefly.html) | Generative inside Creative Cloud |
| [Gamma](https://gamma.app) | AI presentations / decks / sites |
| [Tome](https://tome.app) | AI decks + sales narratives |
| [Beautiful.ai](https://www.beautiful.ai) | Smart slide templates |
| [Recraft](https://www.recraft.ai) | Brand-consistent vector + raster |

---

## App & web builders (vibe coding / no-code)

| Tool | Notes |
| --- | --- |
| [Lovable](https://lovable.dev) | Full-stack from prompt; built-in hosting + Supabase + auth |
| [Bolt.new](https://bolt.new) | Browser IDE; fastest path to a shareable demo |
| [v0](https://v0.dev) | Best for Next.js teams; UI-first |
| [Replit Agent](https://replit.com) | Glass-box: see and edit the code as it builds |
| [Base44](https://base44.com) | All-in-one no-code app builder |
| [Softr](https://www.softr.io) | No-code apps on top of Airtable / Sheets |
| [Glide](https://www.glideapps.com) | No-code mobile-first apps |
| [Bubble](https://bubble.io) | No-code with AI assist |
| [Webflow + AI](https://webflow.com) | AI features in a designer-grade web builder |
| [Framer](https://www.framer.com) | AI sites with strong design defaults |

---

## Data, analysis & spreadsheets

| Tool | Notes |
| --- | --- |
| [Julius](https://julius.ai) | Chat-driven data analysis on CSVs / sheets |
| [Hex](https://hex.tech) + Magic | Notebook + AI for data teams |
| [Mode + AI Assistant](https://mode.com) | BI with AI |
| [Rows](https://rows.com) | AI spreadsheet |
| [Bricks](https://www.thebricks.com) | Spreadsheet that talks back |
| [Numerous](https://numerous.ai) | AI inside Sheets / Excel |
| [Equals](https://equals.com) | Connected spreadsheet with AI |
| [DataChat](https://datachat.ai) | Conversational analytics |

---

## Education & learning

| Tool | Notes |
| --- | --- |
| [Khanmigo](https://www.khanmigo.ai) (Khan Academy) | K-12 tutoring assistant |
| [Quizlet AI](https://quizlet.com) | Flashcards + Q-Chat tutor |
| [Duolingo Max](https://www.duolingo.com) | Roleplay + Explain My Answer |
| [Speak](https://www.speak.com) | AI conversation for language learning |
| [NotebookLM](https://notebooklm.google.com) | Turn course material into Q&A + audio |
| [Brisk Teaching](https://www.briskteaching.com) | AI for teachers (lesson plans, feedback) |
| [Eightify](https://eightify.app) | YouTube lecture summaries |

---

## Local & open-source model runners

Run models on your own machine — no data leaves the device.

| Tool | Notes |
| --- | --- |
| [Ollama](https://ollama.com) | The default; CLI-first, OpenAI-compatible API |
| [LM Studio](https://lmstudio.ai) | Friendly GUI; HF browser; headless mode |
| [Jan](https://jan.ai) | OSS desktop ChatGPT replacement |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | OSS inference engine; backbone of most local tooling |
| [text-generation-webui](https://github.com/oobabooga/text-generation-webui) | OSS power-user web UI |
| [GPT4All](https://www.nomic.ai/gpt4all) | OSS desktop app for local LLMs |
| [LocalAI](https://localai.io) | OSS OpenAI-compatible drop-in for local |
| [vLLM](https://github.com/vllm-project/vllm) | OSS high-throughput serving |
| [Open WebUI](https://openwebui.com) | OSS ChatGPT-style UI for Ollama / OpenAI-compatible APIs |

### Notable open-weight model families (2026)

- **Llama** (Meta), **Gemma** (Google), **Qwen** (Alibaba), **DeepSeek**, **Mistral**, **Kimi K2.x** (Moonshot), **GLM** (Zhipu), **Nemotron** (NVIDIA), **Phi** (Microsoft).

---

## Model APIs & dev platforms

For developers building on top of models.

| Provider | Notes |
| --- | --- |
| [Anthropic API](https://docs.anthropic.com) | Claude family; tool use, computer use, MCP |
| [OpenAI Platform](https://platform.openai.com) | GPT, Realtime, Responses API, Agents SDK |
| [Google AI Studio / Vertex](https://aistudio.google.com) | Gemini family |
| [xAI](https://x.ai/api) | Grok API |
| [Mistral La Plateforme](https://mistral.ai/) | EU-hosted models |
| [DeepSeek API](https://platform.deepseek.com) | Cheap frontier reasoning |
| [Together AI](https://www.together.ai) | OSS model hosting + fine-tuning |
| [Fireworks AI](https://fireworks.ai) | Fast OSS model inference |
| [Groq](https://groq.com) | LPU inference at very high TPS |
| [Cerebras Inference](https://cerebras.ai) | Wafer-scale inference; very fast |
| [Replicate](https://replicate.com) | Run any model via API |
| [Hugging Face](https://huggingface.co) | Models, datasets, Spaces, Inference Endpoints |
| [Modal](https://modal.com), [Runpod](https://www.runpod.io) | GPU compute for AI workloads |
| [LangChain](https://www.langchain.com) / [LlamaIndex](https://www.llamaindex.ai) | OSS app frameworks |
| [LiteLLM](https://github.com/BerriAI/litellm) | OSS unified API gateway across providers |

---

## Sources

A non-exhaustive list of write-ups consulted for this index:

- [The 12 Best AI Tools for 2026 — Synthesia](https://www.synthesia.io/post/ai-tools)
- [I tried 70+ best AI tools in 2026 — TechRadar](https://www.techradar.com/best/best-ai-tools)
- [Best AI Tools 2026: Complete Ranking Across Every Category — NxCode](https://www.nxcode.io/resources/news/best-ai-tools-2026-complete-ranking-guide)
- [eudk/awesome-ai-tools (GitHub)](https://github.com/eudk/awesome-ai-tools)
- [caramaschiHG/awesome-ai-agents-2026 (GitHub)](https://github.com/caramaschiHG/awesome-ai-agents-2026)
- [QAInsights/awesome-ai-tools (GitHub)](https://github.com/QAInsights/awesome-ai-tools)
- [ai-for-developers/awesome-ai-coding-tools (GitHub)](https://github.com/ai-for-developers/awesome-ai-coding-tools)
- [Top AI GitHub Repositories in 2026 — ByteByteGo](https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026)
- [Best AI Code Editors in 2026 — MindStudio](https://www.mindstudio.ai/blog/best-ai-code-editors)
- [Best AI Coding Agents for 2026 — Faros](https://www.faros.ai/blog/best-ai-coding-agents-2026)
- [Coding Agents Comparison — Artificial Analysis](https://artificialanalysis.ai/agents/coding)
- [Best AI Image Generators in 2026 — Zapier](https://zapier.com/blog/best-ai-image-generator/)
- [Midjourney vs DALL-E vs Stable Diffusion vs Flux 2026](https://freeacademy.ai/blog/midjourney-vs-dalle-vs-stable-diffusion-vs-flux-comparison-2026)
- [Best AI Video Generators 2026 — Pixflow](https://pixflow.net/blog/best-ai-video-generator/)
- [Sora Is Gone: 6 AI Video Tools Filling the Void — eWeek](https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/)
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
- [I Tested 29 AI Writing Tools — eesel AI](https://www.eesel.ai/blog/best-ai-writing-tools)
- [Best AI for Creative Writing 2026 — Sudowrite](https://sudowrite.com/blog/best-ai-for-creative-writing-in-2026-tested-and-compared/)
- [AI Search Engines Compared 2026 — haoqq](https://www.haoqq.com/en/guides/ai-search-engines-compared-2026)
- [Perplexity vs Tavily vs Exa vs You.com 2026 — Humai](https://www.humai.blog/perplexity-vs-tavily-vs-exa-vs-you-com-the-complete-ai-search-engine-comparison-2026/)
- [Best AI App Builders 2026 — Lovable](https://lovable.dev/guides/best-ai-app-builders)
- [AI App Builders Compared — NovaKit](https://www.novakit.ai/blog/ai-builders-comparison-bolt-lovable-v0-novakit)
- [Top 5 Local LLM Tools and Models in 2026 — Pinggy](https://pinggy.io/blog/top_5_local_llm_tools_and_models/)
- [Jan vs LM Studio vs Ollama — Local AI Master](https://localaimaster.com/blog/jan-vs-lm-studio-vs-ollama)
- [15 Best LM Studio Alternatives 2026 — PremAI](https://blog.premai.io/15-best-lm-studio-alternatives-for-running-local-llms-2026/)

---

## License

[MIT](LICENSE) © 2026 Irteza

---

*Contributions welcome — open a PR with any tool you think belongs here, ideally with a one-line "best for" reason.*
