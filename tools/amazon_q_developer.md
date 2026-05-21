# Amazon Q Developer: AWS's coding assistant (formerly CodeWhisperer)

Amazon Q Developer is what CodeWhisperer became when AWS decided coding completion was just one feature of a bigger assistant. It's the default coding AI for anyone deep in the AWS console - and that's the right way to think about it. It's strongest on AWS-specific things (CloudFormation, IAM, Lambda, the SDK surface) and on the kind of compliance/security checks an enterprise actually wants. If you're not on AWS, you'd reach for [Copilot](github_copilot.md) or [Cursor](cursor.md) first.

## What it actually is

A suite from AWS that includes inline code completion in IDEs, an agent that operates in the AWS console, and CLI/chat surfaces. Sits across VS Code, JetBrains, the AWS console, Slack, and the AWS CLI. Free tier exists; Pro is part of an AWS billing line. The standout is the agent that can do real AWS work - "set up an S3 bucket with these policies, wire it to this Lambda" - inside the console.

## Setup

1. Install the **AWS Toolkit** extension for VS Code or JetBrains.
2. Sign in with either an AWS Builder ID (free) or an IAM Identity Center account (Pro / org-managed).
3. Open a project, start typing - completions arrive inline. Open the Q chat panel for longer asks.
4. (Optional) Enable in the AWS console by clicking the Q icon in the top bar.

## How I use it day to day

* **CloudFormation / Terraform scaffolding** where I want AWS-specific defaults rather than generic ones.
* **"Why is my Lambda failing?"** - paste the CloudWatch log, get a guided diagnosis.
* **IAM policy generation** with least-privilege defaults; saves manual cross-referencing.
* **`/dev`** agent for multi-file feature work in the IDE (similar shape to Copilot's agent mode).
* **`/transform`** for Java upgrades - lifts old Java to modern LTS automatically; the killer use case for big enterprise Java shops.

## Gotchas

* Outside AWS-specific code, completion quality is fine but not the leader - [Copilot](github_copilot.md) and [Supermaven](supermaven.md) are sharper.
* Pro pricing is reasonable, but it's bundled in AWS billing - watch for surprise lines on the invoice.
* The agent's permissions are scoped to your IAM role. Misconfigure that and the agent either can't do anything or can do too much.
* No 1M-context option; for big-codebase reasoning, look elsewhere.

## Alternatives

* [GitHub Copilot](github_copilot.md) - the broad-strokes default if you don't live in AWS.
* [Cursor](cursor.md) / [Windsurf](windsurf.md) - if you want an agentic IDE rather than just completion.
* [Claude Code](claude_code.md) - terminal-native, language-agnostic.
* [Tabnine](tabnine.md) - if your concern is privacy / on-prem rather than AWS-native.

## FAQ

### Is Amazon Q Developer free?

There's a free tier with monthly limits on completions and chat. Pro is a paid add-on through AWS billing - check the latest pricing page.

### Q Developer vs Copilot?

[Copilot](github_copilot.md) is the better generalist; Q Developer wins on AWS-specific code, security scanning, and the Java upgrade transformer. Many shops run both.

### Did CodeWhisperer go away?

It folded into Q Developer. Existing CodeWhisperer functionality (inline completion, security scans) is still here, just under the Q brand.

### Does it work with non-AWS clouds?

It works as a general coding assistant in any project, but the agent features and infrastructure suggestions are AWS-flavored.

### What's `/transform`?

The Java application modernization workflow. Point it at a Java 8/11 codebase and it'll upgrade to Java 17 or 21, including dependency and code changes. Real productivity for legacy Java shops.

## Pointers

* Product: [aws.amazon.com/q/developer](https://aws.amazon.com/q/developer/)
* Docs: [docs.aws.amazon.com/amazonq](https://docs.aws.amazon.com/amazonq/)
* Pricing: in the AWS pricing pages, under Amazon Q.
* If you're not on AWS, jump to [github_copilot.md](github_copilot.md) or [cursor.md](cursor.md).
