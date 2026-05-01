# Smolagents

Smolagents is Hugging Face's deliberately tiny agent framework: roughly 1,000 lines of Python, one core idea (the agent writes Python code as actions instead of structured tool calls), and very few abstractions. It's the framework I recommend to someone who wants to understand what an agent loop actually does, before they reach for LangGraph or CrewAI and get lost in the layers.

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

## Pointers

* Repo: [github.com/huggingface/smolagents](https://github.com/huggingface/smolagents)
* Docs: [huggingface.co/docs/smolagents](https://huggingface.co/docs/smolagents)
* Apache 2.0.
* Pairs with [langgraph.md](langgraph.md) (more structured, more state machine), [crewai.md](crewai.md) (multi agent), and [autogpt.md](autogpt.md) (the OG of the genre). Smolagents is where I'd start for a beginner's understanding; LangGraph is where I'd ship.
