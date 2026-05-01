# SWE agent

SWE agent is the Princeton research project that turned "agent fixes a GitHub issue" into a public benchmark and a working reference implementation. It was the first OSS agent to score competitive numbers on SWE bench, the canonical benchmark for autonomous software engineering. The codebase is academic in flavour but readable, and the design choices (custom Agent Computer Interface, stripped down toolset) are influential beyond this specific tool.

## What it actually is

An open source autonomous software engineering agent by Princeton NLP. Takes a GitHub issue (or any task description plus a repo) and attempts to write a patch that fixes the bug or implements the feature. Includes a benchmark harness for SWE bench. MIT licensed.

## Setup

1. Clone: `git clone https://github.com/swe-agent/SWE-agent`.
2. Install: `pip install -e .` (or follow current README; the install path has shifted across versions).
3. Bring API keys for OpenAI, Anthropic, or other providers.
4. Run on a single task: `sweagent run --agent.model.name=gpt-4o --problem_statement.github_url=...`.
5. (Optional) Run the SWE bench harness for benchmarking against the standard tasks.

## How I use it day to day

I'm not running SWE agent in production. When I reach for it:

* **Academic curiosity.** The Agent Computer Interface design (carefully scoped tools, file viewer with line tracking, edit primitives) is worth studying. It influenced how a lot of newer agents think about the action space.
* **Benchmarking my own ideas.** When I'm prototyping an agent design, running it on a SWE bench subset against SWE agent's reference numbers is a useful check.
* **Reading the source.** The codebase is academic but not unreadable. Worth a couple of hours if you're building agents.

For shipping code, Claude Code, Codex CLI, Devin, or OpenHands are all more polished. SWE agent is the research artifact.

## Gotchas

* The product is a research codebase first. Expect rough edges, breaking changes between versions, and minimal hand holding.
* SWE bench numbers shift as the benchmark itself evolves and as backbone models improve. Compare apples to apples.
* The default toolset is intentionally minimal; you're meant to study and extend.
* Documentation is improving but assumes ML literacy.

## Pointers

* Web: [swe-agent.com](https://swe-agent.com)
* Repo: [github.com/swe-agent/SWE-agent](https://github.com/swe-agent/SWE-agent)
* Paper: "SWE agent: Agent Computer Interfaces Enable Automated Software Engineering" (Yang et al., 2024).
* Benchmark: SWE bench at [swebench.com](https://www.swebench.com).
* Pairs with [openhands.md](openhands.md) (the closest OSS counterpart, more product oriented), [aider.md](aider.md), and the commercial tools [claude_code.md](claude_code.md) and [devin.md](devin.md).
