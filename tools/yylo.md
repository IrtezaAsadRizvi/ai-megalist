# YYLO: command-line orchestrator for coding agents

YYLO is in the terminal-coding lane next to [Claude Code](claude_code.md), [Codex CLI](codex_cli.md), and [Aider](aider.md), but its angle is different: it is not another agent, it is the orchestration and governance layer over coding agents — typed task, validation, merge, and release-readiness boundaries, with receipts for what actually ran. The useful pitch is "run agents on tasks, not on hope."

## What it actually is

An MIT-licensed Python CLI (`yylo`, alias `yy`) from yylo-dev, installed from npm as `@yylo/cli`. It orchestrates Pi and Codex subagents: `task start` freezes the protected target SHA, creates a dedicated branch/worktree for the task, and reports `WORKING`; product edits happen only in that task worktree; and a merge queue owns risk-based review — low risk gets no semantic reviewer, normal risk at most one, and high risk two sequential reviewers on one frozen candidate, with unresolved findings stopping as `REVIEW_FINDINGS_EXHAUSTED` instead of an unbounded review loop.

It is a metadata controller, not a product implementation: `yy ledger` and `yy benchmark` delegate to separately installed YYLO packages (the Git-native task store and the evaluation/evidence package).

## Setup

1. Install (Node.js 20.10 or newer, npm, and Git required):
   ```bash
   npm install --global '@yylo/cli@latest'
   yy --version
   ```
2. Run the no-model canary, which initializes `.juno_task/` and emits a watch receipt with `"state":"COMPLETED"`:
   ```bash
   yy init --task "Document the onboarding path" --subagent pi
   ```
3. Install a subagent it can drive (Pi shown; Codex works too):
   ```bash
   npm install --global '@mariozechner/pi-coding-agent'
   ```
4. Drive the task lifecycle:
   ```bash
   yy task start   # dedicated branch/worktree, hydration, WORKING
   yy task status  # state, receipts, manifest
   yy task finish  # hands the task to the merge queue
   ```

## How I use it day to day

* **Worktree isolation per task.** `task start` creates a dedicated branch/worktree and freezes the protected target SHA, so agent work never mixes with controller metadata or protected branches.
* **Risk-based review instead of review theater.** The merge queue scales review to risk: low-risk changes ship without a semantic reviewer, high-risk changes get two sequential reviewers on one frozen candidate.
* **Receipts for everything.** Runs retain rendered command identity, stdout/stderr, responses, session IDs, declared receipt hashes, attempts, and terminal manifests — useful when you need to audit what an agent actually did.
* **Release readiness without release authority.** A successful epoch emits read-only release readiness after target CAS; it does not authorize a tag, push, publication, or deployment — those stay explicit human actions.
* **Watch live runs.** `yy watch`/`ypl` (`yy pi --live`) gives a live observer session over running agents.

## Gotchas

* It is an orchestrator, not a model provider: you install and configure the coding agents (Pi and Codex subagents) it drives.
* The controller/worktree split is real — implementation belongs in the task worktree, and the metadata controller never edits product code for you.
* Subagent model aliases are subagent-specific; for example, Pi and Codex do not share the same `:mini` mapping.
* Release readiness is explicitly not release authority; publication and deployment remain separate explicit actions.
* Node.js 20.10+ is a hard prerequisite.

## Alternatives

* [Claude Code](claude_code.md) - Anthropic's CLI agent; if you want the agent itself rather than an orchestration layer over several.
* [Codex CLI](codex_cli.md) - OpenAI's terminal agent; same story from the OpenAI side.
* [Aider](aider.md) - git-native pair programming for a single model, without the multi-task governance layer.
* [OpenHands](openhands.md) - autonomous SWE agent platform; batteries included, less focused on typed merge gates.
* Plain tmux + discipline - simpler when you only ever run one agent on one repo and review everything by hand.

## FAQ

### Is YYLO free?

Yes. MIT licensed, with the source on GitHub. You pay only for whatever model or agent you pair with it.

### Is it an agent?

No. It is a command-line orchestrator for coding agents: typed tasks, validation, merge, and release-readiness boundaries around the agents you already use (Pi and Codex subagents).

### How is it different from Claude Code or Codex CLI?

Those are agents. YYLO wraps any configured coding agent with per-task worktrees, a risk-based merge queue, and receipt-backed runs — the governance layer those agents do not ship.

### Does it replace my task board?

No. YYLO Ledger is the separate Git-native task/record store; `yy ledger` delegates to it if installed.

### Should I use it for every repo?

It fits multi-task, multi-agent work best. For a one-line fix, a plain worktree and a human review is still faster.

## Pointers

* Repo: [github.com/yylo-dev/yylo](https://github.com/yylo-dev/yylo)
* npm: [@yylo/cli](https://www.npmjs.com/package/%40yylo%2Fcli)
* Start by comparing with [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md) if your question is "agent" vs "orchestrator over agents."
