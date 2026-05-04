# Browser Use: open-source Python library for LLM-driven browser agents

Browser Use sits in the agents cluster alongside [Browserbase](browserbase.md), [Claude Computer Use](claude_computer_use.md), and [ChatGPT Operator](chatgpt_operator.md) - the OSS code-first option for letting models drive a real browser. Browser Use is the open source library that lets an LLM drive a browser. The clever trick is the abstraction: instead of giving the model raw HTML or pixel level screenshots, Browser Use produces a structured representation of the page (interactive elements, ARIA roles, visible text) that the model can reason over efficiently. The result is browser automation that actually works, in 100 lines of code.

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

## Alternatives

* If you need cloud browser infrastructure with stealth, proxies, and live debugging, [Browserbase](browserbase.md) is the runtime to pair with this.
* If you want a no-code consumer agent for personal tasks, [ChatGPT Operator](chatgpt_operator.md) or [Comet](comet.md) handle that without Python.
* If you need the model to control your actual desktop (not just a browser), [Claude Computer Use](claude_computer_use.md) is the API for that.
* If you want a similar OSS agent framework but TypeScript, Browserbase's Stagehand at github.com/browserbase/stagehand is the comparator.

## FAQ

### Is Browser Use free?

Yes - MIT licensed OSS. You pay for the LLM API calls; a long browsing session can run $5+ in tokens, so cache and prune aggressively.

### Browser Use vs Stagehand - which one?

Both are OSS browser agents. Browser Use is Python-native, MIT licensed, and standalone. Stagehand is TypeScript and pairs naturally with [Browserbase](browserbase.md). Pick by language and whether you want managed browser infra.

### Does Browser Use work against LinkedIn or Cloudflare?

Often blocked - sites with strong anti-bot protection detect and reject. There's no easy fix; respect the rules of where you're automating, and use [Browserbase](browserbase.md) with stealth + residential proxies if you have a legitimate use case.

### How much does an agent run cost?

Per-action LLM calls add up fast. A 30-step session against a frontier model can hit $1-5. Use cheaper models for the simple navigation steps and reserve the expensive model for reasoning.

### Can Browser Use run headlessly?

Yes - default is headless. For debugging, run with `headless=False` to watch the browser. Some sites behave differently in headless mode.

## Pointers

* [browser-use.com](https://browser-use.com)
* Repo: [github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* Comparable: [Stagehand](https://github.com/browserbase/stagehand) (Browserbase's), Playwright + LangChain combos.
* For consumer browser automation without code: [comet.md](comet.md), ChatGPT Operator.
* For headless infrastructure: [Browserbase](https://www.browserbase.com) - pairs naturally with Stagehand or Browser Use.
