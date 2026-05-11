# Letta: stateful agents with persistent memory (formerly MemGPT)

Letta is what happens when you take the **MemGPT** research paper - the one that showed how to give an LLM a "virtual context" managed like an OS pages memory - and turn it into a real framework. The pitch: most agent frameworks are stateless, and memory is bolted on as a vector store. Letta makes the agent's memory a first-class, persistent object the agent itself manages. If you're building anything that needs continuity across sessions, this is worth a look.

## What it actually is

An Apache-2.0 framework + hosted platform from Letta (the company spun out of the MemGPT paper's authors). Agents have **core memory** (always in context), **archival memory** (long-term, retrieved), and **recall memory** (conversation history). The agent itself decides when to write/read/edit memory using tool calls. Ships as a Python SDK, a self-hosted server, and a hosted cloud service ("Letta Cloud").

## Setup

1. `pip install letta` for the SDK, or run the server: `docker run -p 8283:8283 letta/letta`.
2. Add provider keys (OpenAI, Anthropic, [Ollama](ollama.md), etc.) in the config.
3. Create an agent: `client.agents.create(name="my_agent", memory_blocks=[{"label": "persona", "value": "..."}])`.
4. Send messages: `client.agents.messages.create(agent_id, messages=[...])`. Memory persists across calls.
5. (Optional) Use Letta Cloud if you don't want to host the server yourself.

## How I use it day to day

* **Long-running companion / assistant** patterns where forgetting between sessions is the failure mode.
* **Customer-support agents** that need to remember user history without rebuilding context each turn.
* **Agent introspection** - Letta exposes the agent's memory state, so you can debug what it "knows" vs invents.
* **Multi-agent setups** where each agent has its own memory profile.

## Gotchas

* Self-hosting requires a Postgres or SQLite backend - simple but not zero-setup.
* The memory model is opinionated. If you want a different memory architecture, you'll fight the framework.
* Token costs - memory in context means every turn pays for the persona + summaries.
* The hosted Cloud service is newer than the OSS framework; production stability is improving but still maturing.

## Alternatives

* [LangGraph](langgraph.md) - has its own state/memory primitives; lower-level.
* [LangChain](langchain.md) - memory modules exist but less opinionated than Letta.
* [AutoGen](autogen.md) - multi-agent focus; memory is bolted on.
* [Mem0](https://mem0.ai) - memory-as-a-service that plugs into any framework; lighter-touch.
* Plain vector store + summarization - DIY route; works for simpler cases.

## FAQ

### Is Letta free?

The framework is Apache 2.0 OSS. Letta Cloud (hosted) is paid; tiers based on agents and message volume.

### Letta vs MemGPT?

Same project. **MemGPT** was the research paper / original library; **Letta** is the rebranded company + framework that productized it.

### Does it work with local models?

Yes - [Ollama](ollama.md), vLLM, and OpenAI-compatible endpoints all supported. Smaller models struggle with the memory-management tool calls; Sonnet / GPT-class works best.

### Can the agent edit its own memory?

Yes - that's the core idea. The agent has tools to read, append, search, and rewrite memory blocks autonomously.

### Letta vs Mem0?

[Mem0](https://mem0.ai) is memory-as-a-service - you bolt it onto any agent. Letta is a whole agent framework with memory at its center. Pick based on how much of the agent loop you want to own.

## Pointers

* Site: [letta.com](https://www.letta.com)
* GitHub: [github.com/letta-ai/letta](https://github.com/letta-ai/letta)
* Docs: [docs.letta.com](https://docs.letta.com)
* MemGPT paper: [research.memgpt.ai](https://research.memgpt.ai)
* Compare with [autogen.md](autogen.md) and [langgraph.md](langgraph.md) for broader agent frameworks.
