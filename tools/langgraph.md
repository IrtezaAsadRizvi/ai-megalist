# LangGraph

LangGraph is the framework for agents you'd actually trust in production. Where AutoGPT and CrewAI optimise for "describe a goal, agent figures it out," LangGraph optimises for "describe the graph of states and transitions, agent executes deterministically." More plumbing, more control, dramatically better debuggability.

## What it actually is

An open source Python (and TypeScript) library from LangChain Inc. Models agents as state graphs: nodes are functions (LLM calls, tool calls, decision logic), edges are transitions between them, state is a shared dict that flows through. Supports loops, branches, human in the loop checkpoints, persistence, and streaming.

## Setup

1. Install: `pip install langgraph langchain-anthropic` (or your provider).
2. Provider key: `export ANTHROPIC_API_KEY=...`.
3. Quick agent:
   ```python
   from langgraph.graph import StateGraph, END
   from langchain_anthropic import ChatAnthropic
   
   def call_model(state): ...
   def should_continue(state): ...
   
   graph = StateGraph(dict)
   graph.add_node("agent", call_model)
   graph.add_edge("agent", END)
   app = graph.compile()
   app.invoke({"messages": [{"role": "user", "content": "hello"}]})
   ```
4. (Optional) LangGraph Cloud / LangGraph Studio for hosted execution + visual debugging.

## How I use it day to day

* **Production agents.** When the agent needs to actually work reliably, the explicit state graph beats freeform reasoning. Debugging a node boundary is much easier than debugging a 50 step ReAct trace.
* **Human in the loop.** Add a checkpoint; pause the graph; let a human approve or modify state; resume. The persistence + checkpointing is built in.
* **Branching workflows.** Different paths for different inputs. The conditional edges express this directly.
* **Loops with stop conditions.** Generate → critique → improve → repeat until critique threshold. LangGraph makes this clean; freeform agents struggle with the loop control.
* **Streaming.** Token by token streaming through the graph; useful for chat UIs over agents.

## Gotchas

* Steeper learning curve than CrewAI or AutoGPT. Plan a few days to internalise the state graph mental model.
* The API surface is large; LangChain's ergonomic flux means imports change between versions. Pin versions.
* Verbose for simple cases. If your "agent" is one LLM call with one tool, plain SDK is simpler.
* Debugging multi step graphs without LangGraph Studio is harder; the Studio is a real multiplier.
* The TypeScript port lags Python in features and ecosystem.

## Pointers

* Docs: [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph/)
* Repo: [github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)
* LangGraph Studio for visual debugging: [smith.langchain.com](https://smith.langchain.com).
* For team / role based agents: [crewai.md](crewai.md). For visual no code: [n8n.md](n8n.md).
* The "Multi Agent Swarm" pattern in the docs is the right mental model for complex deployments.
