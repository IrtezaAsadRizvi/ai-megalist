# Browser Use

Browser Use is the open source library that lets an LLM drive a browser. The clever trick is the abstraction: instead of giving the model raw HTML or pixel level screenshots, Browser Use produces a structured representation of the page (interactive elements, ARIA roles, visible text) that the model can reason over efficiently. The result is browser automation that actually works, in 100 lines of code.

## What it actually is

An open source Python library (MIT licensed) for building browser using agents. Wraps Playwright; talks to OpenAI / Anthropic / any LangChain compatible model; handles the "look at the page → pick an action → execute → observe" loop. Comparable in spirit to Stagehand and the closed source ChatGPT Operator.

## Setup

1. `pip install browser-use playwright`
2. `playwright install chromium`
3. Provider key: `export OPENAI_API_KEY=...`
4. Quick agent:
   ```python
   from browser_use import Agent
   from langchain_openai import ChatOpenAI
   import asyncio
   
   async def main():
       agent = Agent(
           task="Find the cheapest one way flight from NYC to SF on April 15 and report the price",
           llm=ChatOpenAI(model="gpt-4o"),
       )
       result = await agent.run()
       print(result)
   
   asyncio.run(main())
   ```

About 5 minutes to first working browser agent.

## How I use it day to day

* **Honest:** I've built a few small Browser Use agents for evaluation; not yet production for me.
* **Prototyping browser automations.** When I want to know "can an agent do this task?" before committing to scripted automation, Browser Use answers in an hour.
* **Web scraping where the structure changes.** Plain Playwright breaks when sites redesign; Browser Use adapts because the LLM sees the new structure and figures it out.
* **Form filling at scale.** Apply to N job postings; submit M survey responses. Cheap, simple, occasionally rejected by anti bot defenses.
* **Hooking into existing pipelines.** Browser Use returns structured results; pipe into a database, Slack, downstream agent.
* **As an agent tool.** Combine with LangGraph or CrewAI: a tool that "navigates the web" your agent can call.

## Gotchas

* Sites with strong anti bot protection (LinkedIn, Cloudflare protected) often detect and block. There's no easy fix; respect the rules of where you're automating.
* LLM costs accrue per action. A long browsing session can run $5+ in tokens. Cache, retry, prune.
* Headless mode is faster but some sites behave differently. For debugging, run with `headless=False`.
* Browser Use will sometimes do the wrong thing confidently. Monitor; don't fully trust unsupervised loops on important tasks.
* Authentication is the hardest part. Cookies + session persistence work; passing credentials in the task description is a footgun.

## Pointers

* [browser-use.com](https://browser-use.com)
* Repo: [github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* Comparable: [Stagehand](https://github.com/browserbase/stagehand) (Browserbase's), Playwright + LangChain combos.
* For consumer browser automation without code: [comet.md](comet.md), ChatGPT Operator.
* For headless infrastructure: [Browserbase](https://www.browserbase.com) — pairs naturally with Stagehand or Browser Use.
