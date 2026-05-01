# Manus

Manus is the autonomous agent that captured public attention in 2025 by genuinely doing tasks end to end — booking travel, doing research, building small apps — in a cloud sandbox you could watch. It's the closest thing to "give it a goal, walk away, come back to a result" that exists for general purpose work, and the experience holds up better than most demos suggest.

## What it actually is

A cloud agent platform from Butterfly Effect (acquired by Meta in December 2025). You describe a task; Manus spins up a Linux VM ("My Computer"), opens a browser, runs commands, executes Python, and works toward the goal across many tool calls. It uses multiple frontier models under the hood and routes between them.

## Setup

1. Go to [manus.im](https://manus.im), sign up. There's a waitlist; access has opened up significantly since the Meta acquisition.
2. Pricing: free tier with limited credits; Pro at $39/mo for ~1000 credits.
3. Click New Task. Type a goal: "Find me the top three CRMs for solo consultants in 2026, write a comparison doc, and email it to me."
4. Manus shows its work in real time — the browser, the terminal, the file system — in a side panel.
5. Pause / steer / take over at any point.

## How I use it day to day

* **Honest answer:** as someone who hasn't deployed Manus on production work, I've used it for a few longer tasks (research compilations, small data scrapes) to evaluate.
* **Research with deliverables.** "Compile a list of all NeurIPS 2025 papers on diffusion models, with abstracts and links, in a Notion page." Manus does this as a single task.
* **Web automation that's annoying to script.** Filling forms across multiple sites; collecting data behind authentication. Risky — see gotchas — but capable.
* **Small app builds.** Manus can write code, push to GitHub, deploy to Vercel. The output is uneven but workable for prototypes.
* **Watching it work** is the unique part. Most agents are black boxes; Manus's "show your work" panel makes the loop legible.

## Gotchas

* Authentication / private credentials inside the sandbox is a real concern. Manus has policies (no credential sharing without explicit permission) but the threat surface is the same as handing a stranger remote access. Treat accordingly.
* Long autonomous runs can produce confidently wrong output. Steer mid task; don't fully trust unsupervised work for anything load bearing.
* Cost spirals. Complex tasks that loop on errors burn credits fast. Set step limits.
* The Meta acquisition is producing rapid product changes. What's true today may not be in three months.
* For browser only automation specifically, simpler tools (browser-use, ChatGPT Operator) may be cheaper.

## Pointers

* [manus.im](https://manus.im)
* For OSS browser automation: [browser-use.com](https://browser-use.com), Stagehand.
* For consumer browser agents in ChatGPT: [chatgpt.md](chatgpt.md) (Operator).
* Worth treating as an experiment rather than infrastructure for now.
