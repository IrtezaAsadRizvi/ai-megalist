# Smolagents: Hugging Face's minimal agent framework

Smolagents is Hugging Face's tiny OSS agent framework, the teaching alternative to heavier rigs like [LangGraph](langgraph.md), [CrewAI](crewai.md), and [AutoGPT](autogpt.md). Smolagents is Hugging Face's deliberately tiny agent framework: roughly 1,000 lines of Python, one core idea (the agent writes Python code as actions instead of structured tool calls), and very few abstractions. It's the framework I recommend to someone who wants to understand what an agent loop actually does, before they reach for LangGraph or CrewAI and get lost in the layers.

## What it actually is

An open source agent library by Hugging Face. Apache 2.0. Sits on top of any LLM (Hugging Face Inference, OpenAI, Anthropic, local via transformers). Two main agent types: CodeAgent (writes and executes Python) and ToolCallingAgent (classic JSON tool calls). The library is small enough to read in an evening.

## Setup

1. `pip install smolagents`.
2. Bring an LLM: `from smolagents import HfApiModel, OpenAIServerModel, LiteLLMModel` etc.
3. Define tools as Python functions with type hints and a docstring; smolagents introspects them.
4. Build an agent: `agent = CodeAgent(tools=[my_tool], model=model)`.
5. Run: `agent.run("the task in plain English")`.

## How I use it day to day

I don't run agents in production from smolagents; I use it when I want to:

* **Understand the loop.** The CodeAgent design (the model writes Python, the runtime executes it, the result feeds back) is conceptually clean and the code shows you exactly how. Reading the source taught me more about agent architecture than any blog post.
* **Quick experiments.** "Can a small model do X with the right tools?" smolagents is the lowest friction way to find out.
* **As a reference implementation.** When designing a custom agent harness, I crib structure from smolagents and add what I need.

For production work I'd reach for LangGraph (more structure), CrewAI (multi agent patterns), or a hand rolled loop directly against the API. Smolagents is the teaching framework.

## Gotchas

* CodeAgent runs model written Python on your machine. Sandboxing is your responsibility; don't run untrusted code without isolation. The library supports E2B and Docker sandboxes; use them.
* The minimal abstraction is a feature, not a bug, but it means you'll write more code yourself than with heavier frameworks.
* Documentation is solid but assumes you've read the code. If you want a black box, this isn't it.
* Tool calling agents work fine; the CodeAgent path is where smolagents has its own opinion. Try both.

## Alternatives

* If you want structured state machines and explicit graphs for production, [LangGraph](langgraph.md) is the heavier rig.
* If you want multi-agent patterns out of the box, [CrewAI](crewai.md) ships those primitives.
* If you want a fully autonomous "let it run" agent without writing code, [AutoGPT](autogpt.md) is the OG of that genre.
* If you'd rather use an opinionated agent harness with web search and browsing built in, [Browser Use](browser_use.md) covers that surface.

## FAQ

### Is Smolagents free?

Yes - Apache 2.0, runs locally. You only pay for the underlying LLM calls (whatever provider you wire in). Bring your own model via Hugging Face Inference, OpenAI, Anthropic, or a local transformers model.

### Smolagents vs LangGraph - which should I use?

Different stages. Smolagents is for understanding agents and quick experiments - the codebase is small enough to read in an evening. [LangGraph](langgraph.md) is what I'd reach for to ship a real product with branching state and observability.

### Is CodeAgent safe to run?

Not by default. CodeAgent runs model-written Python on your machine; you must sandbox. The library supports E2B and Docker sandboxes - use them, especially for agents you don't fully trust.

### Can I use Smolagents with local models?

Yes - it works with `transformers` directly, or via LiteLLM and Ollama. Pick a model with reasonable instruction-following; tiny models struggle with the CodeAgent pattern.

## Pointers

* Repo: [github.com/huggingface/smolagents](https://github.com/huggingface/smolagents)
* Docs: [huggingface.co/docs/smolagents](https://huggingface.co/docs/smolagents)
* Apache 2.0.
* Pairs with [langgraph.md](langgraph.md) (more structured, more state machine), [crewai.md](crewai.md) (multi agent), and [autogpt.md](autogpt.md) (the OG of the genre). Smolagents is where I'd start for a beginner's understanding; LangGraph is where I'd ship.
