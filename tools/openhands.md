# OpenHands: open source autonomous SWE agent

OpenHands is the OSS autonomous coding agent in the same category as [Devin](devin.md) and [Replit Agent](replit_agent.md), with the trade of self-hosting for transparency. OpenHands (formerly OpenDevin) is the open source autonomous software engineer. Where Devin is closed and cloud only, OpenHands is MIT licensed, runs locally or on your infrastructure, and exposes the same loop - read the codebase, run shell commands, edit files, browse documentation - that powers the closed competitors. For teams that want autonomous SWE capability without sending code to a third party, OpenHands is the credible answer.

## What it actually is

An open source agent framework + UI from All Hands AI. Architectures include:
* **Sandbox**: Docker container where the agent works (filesystem, shell, browser).
* **Agent loop**: read task, plan, execute, observe, iterate.
* **UI**: web interface for tasks, multi turn conversations, file browsing.
* **Headless / CLI** for scripted use.

Supports OpenAI, Anthropic, Gemini, and local models (Ollama, vLLM).

## Setup

1. Pre reqs: Docker Desktop running.
2. Quick start:
   ```bash
   docker run -it --rm --pull=always \
     -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:latest \
     -e SANDBOX_USER_ID=$(id -u) \
     -v /var/run/docker.sock:/var/run/docker.sock \
     -p 3000:3000 \
     --add-host host.docker.internal:host-gateway \
     --name openhands-app \
     docker.all-hands.dev/all-hands-ai/openhands:latest
   ```
3. Open `http://localhost:3000`. Configure model + API key in settings.
4. Type a task; OpenHands runs in the sandbox; you watch.
5. (Optional) CLI mode for scripted tasks; headless for CI integration.

## How I use it day to day

* **Honest:** I've used OpenHands for prototyping; not in production.
* **Autonomous tasks where I'd otherwise hire Devin.** Same loop, my infrastructure.
* **Self hosted privacy.** When code can't leave premises, OpenHands + a local model is the path.
* **Long running tasks.** "Refactor this module, run all tests, fix any failures." OpenHands works for an hour; reports back.
* **Hacking on agent behaviour.** Open source; readable; I can modify the prompts and agent loop directly. Helpful for understanding what makes agents fail.
* **CI integration.** Run OpenHands on a PR description; it produces a draft implementation; humans review.

## Gotchas

* Docker is the canonical deployment. Without Docker, the sandbox isolation isn't there.
* The agent makes mistakes; verify all autonomous output before merging.
* Quality is bounded by the model; weak models = weak agents. Frontier models are the right pairing.
* Setup is more friction than Devin's "just sign up." For solo use, the closed alternatives are easier.
* Active development; updates frequently. Pin versions in production.

## Alternatives

* If you want a hosted, zero-setup autonomous engineer and don't need self-hosting, [Devin](devin.md) is the closed alternative.
* If you want a glass-box cloud IDE where you can edit the agent's code as it builds, [Replit Agent](replit_agent.md) fits.
* If you'd rather drive the loop yourself in a terminal, [Claude Code](claude_code.md) or [Aider](aider.md) are saner shapes for solo work.
* If you want issue-targeted patching specifically, [SWE-agent](swe_agent.md) is the Princeton OSS focused on GitHub issues.

## FAQ

### Is OpenHands free?

The software is MIT licensed and free to run yourself. You still pay model costs (OpenAI, Anthropic, etc.) plus whatever infrastructure you host it on. With local models via Ollama or vLLM, the recurring cost is just compute.

### OpenHands vs Devin - which should I use?

Different tradeoffs. [Devin](devin.md) is hosted, polished, and zero setup; OpenHands is OSS, self-hosted, and exposes the agent loop. Pick OpenHands if code can't leave premises or you want to hack on agent behaviour; Devin if you just want results.

### Does OpenHands work without Docker?

Not really. The Docker sandbox is the canonical deployment and the source of the safety guarantee. Running outside Docker is possible but loses the isolation that makes autonomous execution sane.

### What models does OpenHands support?

OpenAI, Anthropic, Gemini, and any OpenAI-compatible local runner ([Ollama](ollama.md), vLLM, [LM Studio](lm_studio.md)). Frontier cloud models produce the best agent behaviour; local models work but the quality ceiling is bounded by the model.

## Pointers

* Repo: [github.com/All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)
* Docs: [docs.all-hands.dev](https://docs.all-hands.dev)
* For hosted alternative: [devin.md](devin.md), Replit Agent, Copilot Coding Agent.
* For terminal coding agents: [claude_code.md](claude_code.md), [codex_cli.md](codex_cli.md), [aider.md](aider.md).
