# LlamaIndex: the Python framework for RAG over your own data

LlamaIndex is in the LLM app framework category alongside [LangChain](langchain.md) and the [Vercel AI SDK](vercel_ai_sdk.md), and the one focused specifically on connecting data to models. LlamaIndex is the Python framework for "give the model access to my data." Where LangChain spans the entire AI app stack, LlamaIndex is focused on one thing - connecting data to LLMs, well. Document loaders, indexes, retrievers, query engines: the complete substrate for RAG, with thoughtful abstractions and decent defaults.

## What it actually is

An open source Python (and TypeScript) framework. Provides:
* **Loaders**: fetch data from PDFs, docs, websites, databases, Notion, Slack, S3, etc. (LlamaHub has 300+).
* **Nodes**: chunks of text with metadata.
* **Indexes**: vector store, summary index, knowledge graph, etc.
* **Retrievers**: pull relevant nodes for a query.
* **Query engines**: full RAG pipelines on top.
* **Agents**: tool using agents on top of indexed data.

There's also LlamaCloud (managed, paid) and LlamaParse (a PDF / document parsing service).

## Setup

1. Install: `pip install llama-index`.
2. Provider key: `OPENAI_API_KEY` (default; switchable).
3. Quick RAG:
   ```python
   from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
   
   docs = SimpleDirectoryReader("docs/").load_data()
   index = VectorStoreIndex.from_documents(docs)
   query_engine = index.as_query_engine()
   print(query_engine.query("What does the spec say about retries?"))
   ```
4. (For different storage / model: configure via `Settings` global or per call.)

## How I use it day to day

* **As the RAG framework.** When I need to "talk to a stack of PDFs," LlamaIndex is shorter than rolling my own.
* **Document loaders from LlamaHub.** Notion, Confluence, Slack, GitHub - connectors are pre built; saves the boilerplate.
* **LlamaParse** (paid) for messy PDFs. Better than the OSS PDF parsers when documents have tables, images, complex layouts.
* **Composable retrievers.** Hybrid search (vector + keyword), re ranking, query rewriting - primitives are clean.
* **Agents over indexed data.** Build an agent that has access to "all the team's Notion docs"; LlamaIndex makes the data piece tractable.
* **Compared with LangChain.** LlamaIndex is more focused on RAG; LangChain is broader but more opinionated. I use LlamaIndex when data is the centerpiece; LangChain when orchestration is.

## Gotchas

* Settings have changed over versions. Old code using `ServiceContext` doesn't work in current versions; migrate.
* The framework is opinionated about chunk → index → retrieve → query. For unusual workflows, you may fight the abstractions.
* Default chunking is naive; for production quality RAG, customise the node parser.
* Embedding choice and vector store choice matter more than LlamaIndex configuration. Don't blame the framework for retrieval quality issues; tune the substrate.
* For pure provider abstraction without RAG focus: LangChain, Vercel AI SDK.

## Alternatives

* If orchestration is the centerpiece (chains, agents, tool use), [LangChain](langchain.md) is broader.
* If you want serious agent orchestration with state graphs, jump to [LangGraph](langgraph.md).
* If you only want provider abstraction without RAG opinions, [LiteLLM](litellm.md) is the smaller layer.
* If you're in TypeScript / Next.js, the [Vercel AI SDK](vercel_ai_sdk.md) is cleaner for that ecosystem.

## FAQ

### Is LlamaIndex free?

Yes - LlamaIndex is open source (MIT). The paid products are LlamaCloud (managed) and LlamaParse (PDF / document parsing-as-a-service). Most apps don't need the paid pieces until parsing-quality on messy PDFs becomes the bottleneck.

### LlamaIndex vs LangChain - which should I use?

Different shapes. LlamaIndex is RAG-shaped: data is the centerpiece, the abstractions are about loading, chunking, indexing, retrieving. [LangChain](langchain.md) is broader: chains, agents, tool use. I use LlamaIndex when "talk to a stack of PDFs" is the job; LangChain when orchestration is.

### What is LlamaParse?

A paid PDF / document parsing service - better than the OSS PDF parsers when documents have tables, images, or complex layouts. The bottleneck on RAG quality is usually parsing, not retrieval; LlamaParse moves that needle.

### Does LlamaIndex work without OpenAI?

Yes - it defaults to OpenAI but supports Anthropic, Gemini, local models, and any LLM via the global `Settings`. Embedding models are configurable independently of the LLM.

### Why is my LlamaIndex retrieval bad?

Probably the substrate, not the framework. Default chunking is naive - customise the node parser. Embedding choice and vector store choice matter more than LlamaIndex configuration. Don't blame the framework before tuning the pieces underneath.

## Pointers

* [llamaindex.ai](https://www.llamaindex.ai)
* Docs: [docs.llamaindex.ai](https://docs.llamaindex.ai)
* LlamaHub (loaders): [llamahub.ai](https://llamahub.ai)
* For broader app frameworks: [langchain.md](langchain.md).
* For agentic orchestration specifically: [langgraph.md](langgraph.md).
