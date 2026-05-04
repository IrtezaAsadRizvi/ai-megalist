# CrewAI: multi-agent orchestration framework in Python

CrewAI is an OSS multi-agent framework in the same lane as [LangGraph](langgraph.md), [AutoGPT](autogpt.md), and Smolagents - the developer-side of the agents category. It took the "team of specialised agents" pattern and shipped it as a clean Python API. You define agents with roles, give them tools, assemble them into a Crew, and run a process. The metaphor (roles, tools, tasks, processes) maps cleanly to how teams actually work - which is the framework's argument for why this composition is easier to reason about than freeform agent loops.

## What it actually is

An open source Python framework for orchestrating multi agent systems. Agents are role based (e.g. "Researcher," "Writer," "Critic"); they share context, hand off subtasks, and follow a configurable process (sequential or hierarchical). Plays nicely with LangChain tools, OpenAI / Anthropic / local models. There's also a hosted CrewAI Enterprise tier.

## Setup

1. Install: `pip install crewai`. Optional extras for tools: `pip install 'crewai[tools]'`.
2. Set provider keys: `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY`).
3. Quick crew:
   ```python
   from crewai import Agent, Task, Crew
   researcher = Agent(role="Researcher", goal="Find info on X", backstory="...")
   writer = Agent(role="Writer", goal="Write summary", backstory="...")
   t1 = Task(description="Research X", agent=researcher)
   t2 = Task(description="Write summary", agent=writer, context=[t1])
   crew = Crew(agents=[researcher, writer], tasks=[t1, t2])
   crew.kickoff()
   ```
4. Run with `python crew.py`.

## How I use it day to day

* **Honest:** I've built a few crews for evaluation; not a daily tool for me. The pattern matches certain workflows well.
* **Research → write pipelines.** A Researcher agent gathers sources; a Writer agent drafts; a Critic agent reviews. Each agent has its own tools and scope.
* **Hierarchical processes.** A Manager agent delegates to specialists. Useful when tasks are dynamic and the right specialist depends on context.
* **Tool integration.** Pre built tools cover web search, file I/O, code execution, vector DB; you can wrap any LangChain tool.
* **Enterprise tier** for hosted execution + dashboards. Open source covers most needs; the cloud is for teams that don't want to host.

## Gotchas

* Multi agent systems are dramatically slower and more expensive than single agents. Three agents = roughly 3x the LLM calls. Verify the workflow needs multiple agents before committing.
* Debugging is harder than single agent flows. Logs across multiple agents need structure; CrewAI provides some but adoption matters.
* The role based abstraction is helpful for some problems and overhead for others. For straight pipelines, plain LangChain (or a script) is simpler.
* Tool selection by agents is inconsistent. Sometimes an agent picks the wrong tool repeatedly; constrain tools per agent.
* The framework is opinionated. If your mental model is "graph of nodes" rather than "team of roles," LangGraph fits better.

## Alternatives

* If your mental model is graph-of-nodes rather than team-of-roles, [LangGraph](langgraph.md) is lower-level and more flexible.
* If you want a minimal agent loop without the role abstraction, Smolagents (HuggingFace) is the lightest option.
* If you want a visual builder rather than Python code, [n8n](n8n.md) or Lindy do multi-step LLM flows with drag-and-drop.
* If you want autonomous long-running cloud agents instead of a framework, [Manus](manus.md) or [Devin](devin.md) is the hosted shape.

## FAQ

### Is CrewAI free?

Yes - the OSS framework is MIT licensed. CrewAI Enterprise is a paid hosted tier with execution dashboards and managed runs; pricing is sales-led. Most use stays on the OSS side.

### CrewAI vs LangGraph - which should I use?

Different mental models. CrewAI is roles + tasks + processes - higher-level, opinionated, fast to start. [LangGraph](langgraph.md) is graph-of-nodes - lower-level, flexible, requires more design upfront. For "research → write → critique" pipelines, CrewAI. For arbitrary state machines, LangGraph.

### Is multi-agent worth it over a single agent?

Often no. Three agents = roughly 3x the LLM calls and 3x the latency. The case for multi-agent is when tasks genuinely benefit from specialisation (research vs writing vs review) or when role boundaries help debugging. For straight pipelines, plain LangChain or a script is simpler.

### Does CrewAI work with local models?

Yes - any OpenAI-compatible endpoint works, including [Ollama](ollama.md) for fully local crews. Quality on local models is below frontier; agentic tool use particularly suffers below 70B params.

## Pointers

* [crewai.com](https://www.crewai.com)
* Repo: [github.com/joaomdmoura/crewAI](https://github.com/joaomdmoura/crewAI)
* For graph based multi agent: LangGraph (more flexible, lower level).
* For visual building of multi agent flows: [autogpt.md](autogpt.md), [n8n.md](n8n.md).
