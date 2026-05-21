# AutoGen: Microsoft's multi-agent orchestration framework

AutoGen is Microsoft Research's "what if every agent was a conversation participant" framework. Rather than one agent doing everything, you compose specialized agents (planner, coder, critic, executor) that talk to each other to solve a task. It was an early articulation of multi-agent patterns; in 2025-2026 the codebase split between AutoGen Studio (low-code UI) and the **AG2** (Autogen 2) Apache-licensed fork carried by the community, while Microsoft's own line continued under the `microsoft/autogen` repo.

## What it actually is

A Python (and .NET) framework for multi-agent applications. Agents are defined as roles with system prompts and tool access; they communicate via structured conversations. Supports human-in-the-loop, code execution (sandboxed or Docker-isolated), tool use, and group-chat patterns. Two living forks as of 2026: `microsoft/autogen` (Microsoft-led, MIT) and `ag2ai/ag2` (community-led, Apache 2.0).

## Setup

1. `pip install autogen-agentchat autogen-ext` (Microsoft fork) or `pip install ag2` (community fork). Pick one.
2. Set up an LLM client: OpenAI, Anthropic, [Azure OpenAI](azure_openai.md), [Ollama](ollama.md) - whatever you prefer.
3. Define agents - e.g. `AssistantAgent("coder", llm_config=...)` and `UserProxyAgent("executor", code_execution_config={"work_dir": "tmp"})`.
4. Start a chat: `user_proxy.initiate_chat(coder, message="Build me a Streamlit dashboard for X")`. The agents converse until the task is done.
5. (Optional) Try AutoGen Studio for a no-code agent designer.

## How I use it day to day

* **Coder + critic patterns** - one agent writes, another reviews, they iterate. Surprisingly effective for short scripts.
* **Group chat** for tasks with several distinct roles (researcher, summarizer, formatter).
* **Code execution loops** - the framework's sandboxed code runner is mature.
* **Prototyping multi-agent patterns** before committing to a heavier framework like [LangGraph](langgraph.md).

## Gotchas

* The fork situation is confusing. Pick one (Microsoft or AG2) and stick with it; APIs differ.
* Multi-agent ≠ better. Often a single well-prompted agent beats a multi-agent ensemble at lower cost. Don't reach for multi-agent first.
* Token costs balloon - every agent message is an LLM call. Watch your bill.
* Documentation has lagged the code; reading source is sometimes faster than the docs.

## Alternatives

* [CrewAI](crewai.md) - simpler multi-agent framework with a role/task abstraction.
* [LangGraph](langgraph.md) - graph-based stateful agents; more flexible, lower-level.
* [Smolagents](smolagents.md) - HuggingFace's minimal agent framework.
* [LangChain](langchain.md) - the broader ecosystem; agents are one piece.
* [Letta (MemGPT)](letta.md) - if your specific need is long-term agent memory.

## FAQ

### Is AutoGen free?

Yes - both forks are OSS (MIT and Apache 2.0). You pay for LLM API usage.

### AutoGen vs CrewAI?

Different ergonomics. [CrewAI](crewai.md) has a more opinionated "crew of role-based agents" abstraction. AutoGen is more flexible but less prescriptive.

### What's AG2?

A community-led Apache-2.0 fork of AutoGen, born when the original Microsoft project changed direction. Both still exist; pick based on which community is more active for your needs.

### Does AutoGen support tool use?

Yes - register Python functions as tools; agents call them via standard tool-calling protocols.

### AutoGen Studio?

A low-code web UI for designing agent workflows visually. Useful for prototyping; production apps still write Python.

## Pointers

* Microsoft AutoGen: [github.com/microsoft/autogen](https://github.com/microsoft/autogen)
* AG2 fork: [github.com/ag2ai/ag2](https://github.com/ag2ai/ag2)
* Docs: [microsoft.github.io/autogen](https://microsoft.github.io/autogen/)
* Compare with [crewai.md](crewai.md) and [langgraph.md](langgraph.md) for alternative frameworks.
