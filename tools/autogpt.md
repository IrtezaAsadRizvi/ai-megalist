# AutoGPT: open-source autonomous agent platform

AutoGPT lives in the agents cluster alongside [CrewAI](crewai.md), [LangGraph](langgraph.md), and [Manus](manus.md) - the OSS option for self-hosting autonomous agents that run on a schedule. AutoGPT was the first viral autonomous agent (170K+ GitHub stars at peak) and it set the template the rest of the field iterated on. The 2026 incarnation is meaningfully different from the original 2023 version: there's a real visual Agent Builder, a persistent server, a marketplace for community built agents. It's also still open source, which makes it the best option for self hosted autonomous agents.

## What it actually is

An open source agent platform from Significant Gravitas. The core is the AutoGPT Server (Python, runs your agents continuously), the Agent Builder (a visual editor for building agent workflows by connecting blocks), the AutoGPT Library (template agents), and the Marketplace (community agents you can run).

## Setup

### Cloud (managed)
1. Go to [agpt.co](https://agpt.co), sign up.
2. Free tier covers basic agent runs; paid tiers for higher quotas.
3. Browse the Marketplace; pick an agent; configure inputs; run.

### Self host
1. Clone: `git clone https://github.com/Significant-Gravitas/AutoGPT && cd AutoGPT`
2. `docker compose up` (you need Docker).
3. Open `http://localhost:3000`. Set up admin account.
4. Add LLM provider keys (OpenAI / Anthropic / your local Ollama).
5. Build agents in the visual builder; they run on the server even after you close the browser.

## How I use it day to day

* **Honest:** I've built a few small agents in AutoGPT for evaluation; not a daily tool for me.
* **Agents that run on a schedule.** "Every morning, check these RSS feeds, summarise new items, post to Slack." AutoGPT's server keeps it running; my laptop doesn't need to be on.
* **Marketplace for ideas.** Someone has built an agent for most common tasks (research, email outreach, social monitoring). Browse, fork, customise.
* **Block based building.** The visual editor (drag a fetch URL block, drag an LLM block, connect them) is the easier on ramp than coding agents from scratch.
* **Self hosted privacy.** When data sensitivity matters, AutoGPT on your own machine + Ollama LLM means nothing leaves.

## Gotchas

* Quality of community agents varies wildly. Some are polished; many are abandoned. Read before trusting.
* The block library covers common cases but custom blocks require Python. For non technical users, you'll hit the wall on novel tasks.
* Self hosting adds maintenance overhead. Pin versions; back up.
* Agents that loop on errors burn LLM budget fast. Add step caps and watch the bills.
* The 2023 era hype is gone; AutoGPT is now one option among many. CrewAI, LangGraph, n8n all overlap.

## Alternatives

* If you want code-first multi-agent orchestration with role-based agents, [CrewAI](crewai.md) is the framework to look at.
* If you want graph-based stateful agent workflows in Python, [LangGraph](langgraph.md) is the more rigorous OSS option.
* If you want visual flow building rather than autonomous loops, [n8n](n8n.md) covers the same ground with less agent ambition.
* If you want a managed cloud agent and you don't need OSS, [Manus](manus.md) is the closed-source equivalent.

## FAQ

### Is AutoGPT still maintained?

Yes - the cloud product (agpt.co) and self-hosted Server are both actively developed. The 2026 incarnation is meaningfully different from the original 2023 viral version - Agent Builder, persistent server, marketplace.

### AutoGPT vs CrewAI - which one?

Different shapes. AutoGPT is a platform with visual builder and marketplace; you can self host or use the cloud. [CrewAI](crewai.md) is a Python framework you import and write code against. Pick AutoGPT if you want a UI; CrewAI if you want full control in code.

### Can I run AutoGPT locally?

Yes - `docker compose up` from the repo and it runs on localhost:3000. Pair with [Ollama](ollama.md) for a fully local agent stack with no data leaving the machine.

### How do I keep AutoGPT from burning my API budget?

Step caps and timeout limits per agent run. Agents that loop on errors burn LLM budget fast - this is the most common gotcha. Watch the dashboard.

### What's the marketplace?

A library of community-built agents you can fork and run. Quality varies wildly - some are polished, many are abandoned. Read the source before trusting.

## Pointers

* [agpt.co](https://agpt.co)
* Repo: [github.com/Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
* For multi agent orchestration with role based agents: [crewai.md](crewai.md).
* For graph based agentic workflows in code: LangGraph.
* For visual workflow automation more broadly: [n8n.md](n8n.md).
