# LangChain: the broad LLM app framework, calmer in 2026

LangChain is in the LLM app framework category alongside [LlamaIndex](llamaindex.md) and the [Vercel AI SDK](vercel_ai_sdk.md), and the one with the broadest scope and the loudest community history. LangChain is the AI framework everyone has an opinion about. The opinions are extreme in both directions. The library helped a generation of developers ship LLM apps; it also accumulated abstractions faster than the field stabilised. In 2026 it's calmer - LangChain Core is leaner, the loud "everything is a chain" era is over, and the framework is one option among several rather than the default.

## What it actually is

An open source Python (and TypeScript) framework for building LLM applications. Provides:
* **Model abstractions**: uniform interface across OpenAI, Anthropic, Gemini, etc.
* **Output parsers**: structured outputs from text.
* **Tools and toolkits**: pre built tools for common integrations.
* **Document loaders**: fetch, parse, chunk text from many sources.
* **Vector stores**: abstractions over Pinecone, Qdrant, Chroma, etc.
* **Memory**: conversation history with various policies.

Plus the LangSmith observability platform (paid), LangGraph for agent orchestration (separate package), and LangChain Hub for community prompts.

## Setup

1. Install: `pip install langchain langchain-openai` (or your provider).
2. Provider keys: env vars.
3. Quick chain:
   ```python
   from langchain_openai import ChatOpenAI
   from langchain.prompts import ChatPromptTemplate
   
   prompt = ChatPromptTemplate.from_template("Translate {text} to French")
   model = ChatOpenAI(model="gpt-4o-mini")
   chain = prompt | model
   chain.invoke({"text": "Hello"})
   ```
4. (Optional) LangSmith for tracing: `export LANGSMITH_API_KEY=...`.

## How I use it day to day

* **Honest:** I default to provider SDKs (Anthropic, OpenAI) for most apps. LangChain shows up when I want abstractions across providers.
* **Provider abstraction.** When I want to swap models or run A/B tests, the uniform `BaseChatModel` interface saves boilerplate.
* **Document loaders.** Loading PDFs, websites, Notion pages with consistent metadata is real work. LangChain has solid loaders for most sources.
* **Vector store abstractions** for swapping between dev (Chroma local) and prod (Qdrant). Same code.
* **LangSmith for observability.** Real value. Trace every LLM call, see prompts, see tokens, see latency. Worth the paid tier for production apps.
* **LangChain Hub** for prompt templates. Sometimes useful, often not the prompts I'd write.

## Gotchas

* Abstraction overhead is real. For simple apps, provider SDK is shorter and easier to reason about.
* Imports change between minor versions more than I'd like. Pin versions.
* The "expression language" (LCEL) is concise but takes a moment to grok. Once internalised, it's fine.
* LangGraph (separate package) is the better choice for serious agent orchestration. LangChain's older agents are deprecated.
* Some old tutorials reference patterns that no longer exist. Stick to current docs.

## Alternatives

* If RAG over your own data is the actual job, [LlamaIndex](llamaindex.md) is more focused on that and shorter to write.
* If you're in TypeScript / Next.js, the [Vercel AI SDK](vercel_ai_sdk.md) is cleaner and ships with streaming primitives.
* If you want serious agent orchestration with state graphs, jump to [LangGraph](langgraph.md) - the spinoff is the better path for that.
* If you just need provider abstraction without the framework, [LiteLLM](litellm.md) covers that one job well.

## FAQ

### Is LangChain free?

Yes - LangChain is open source (MIT). The paid product is LangSmith (the observability platform), which is free up to a usage cap and then tiered. Most apps don't need to pay until they hit production scale.

### LangChain vs LlamaIndex - which should I use?

Different shapes. Use [LlamaIndex](llamaindex.md) when data is the centerpiece (talk to a stack of PDFs, RAG over Notion). Use LangChain when orchestration is the centerpiece (multi-step chains, tool use, mixed providers). Many real apps use both.

### Do I need LangChain to build with LLMs?

No. For simple apps, the provider SDK (Anthropic, OpenAI) is shorter and easier to reason about. LangChain earns its place when you want provider abstraction, document loaders, vector store abstractions, or LangSmith tracing.

### What is LCEL?

LangChain Expression Language - the `prompt | model | parser` pipe syntax. Concise once you get it; takes a moment to internalise. The current canonical way to write chains in LangChain.

### Are LangChain agents still recommended?

Not the old `AgentExecutor`. For agent work, use [LangGraph](langgraph.md) - it's the explicitly recommended path, with state graphs, checkpoints, and human-in-the-loop primitives the old agents lacked.

## Pointers

* [langchain.com](https://www.langchain.com)
* Docs: [python.langchain.com](https://python.langchain.com)
* Repo: [github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)
* For agent orchestration: [langgraph.md](langgraph.md).
* For lighter alternative: [LlamaIndex](https://www.llamaindex.ai), Vercel AI SDK, or just provider SDKs.
* LangSmith ([smith.langchain.com](https://smith.langchain.com)) for tracing; works even if the rest of your app isn't LangChain.
