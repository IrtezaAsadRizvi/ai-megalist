# AnythingLLM: local-first RAG and chat in one desktop app

AnythingLLM is the OSS desktop app that gave the "talk to my documents" use case a clean, batteries-included shape. You drop in PDFs, websites, GitHub repos; it embeds them; you chat with the result. The model can be a local Ollama instance, a hosted API, or anything OpenAI-compatible. The killer feature is that everything - documents, embeddings, conversations - stays on your machine by default. Built by Mintplex Labs.

## What it actually is

An MIT-licensed desktop / self-hosted RAG app. Two distributions: a one-click desktop app (Mac, Windows, Linux) and a Docker server for multi-user deployments. Bundles a chunker, an embedding model (default: local), a vector store (LanceDB or others), and a chat UI. Supports "workspaces" (separate document sets), agents with tools, and multi-user roles in the server build.

## Setup

1. **Desktop:** download from useanythingllm.com. Open, pick an LLM provider (local [Ollama](ollama.md) or any API), and an embedder.
2. Create a workspace, drag in documents (PDF, DOCX, MD, websites, YouTube URLs, GitHub repos).
3. Wait for ingestion - chunking + embedding. Then chat with the workspace.
4. (Server) `docker run -p 3001:3001 mintplexlabs/anythingllm` and follow the setup wizard at localhost:3001.
5. (Optional) Add agent tools - web search, scraping, code execution - via the agent skills marketplace.

## How I use it day to day

* **Personal knowledge base** - dump papers, notes, project docs into a workspace; ask questions, get cited answers.
* **GitHub repo Q&A** - point at a repo URL, ask architectural questions without pasting files.
* **Offline-first** when I'm on a plane or just don't want to send a client's docs through a cloud LLM.
* **Multi-user team install** - the server build with auth works as a self-hosted "internal ChatGPT for our docs."

## Gotchas

* Local embedding is fine but not frontier. For better retrieval quality, point at a hosted embedder (Cohere, OpenAI) - then you've leaked the documents.
* Big document sets need real RAM. The desktop app gets slow with thousands of docs; the server build handles it better.
* "Agents" support is real but earlier-stage than dedicated agent frameworks.
* Updates can break workspaces. Back up the data directory before major upgrades.

## Alternatives

* [Open WebUI](open_webui.md) - similar self-hosted chat UI, less RAG-focused.
* [NotebookLM](notebooklm.md) - Google's hosted equivalent; cleaner UX, your data goes to Google.
* [LangChain](langchain.md) / [LlamaIndex](llamaindex.md) - DIY route if you want to control the stack.
* [Msty](msty.md) - lighter local-chat desktop app; less RAG.
* [Obsidian + Smart Connections](obsidian.md) - if your knowledge base is already in Markdown.

## FAQ

### Is AnythingLLM free?

Yes - MIT OSS. You pay for whatever model API you connect (or nothing, with Ollama).

### Does it really run fully local?

Yes, if you pick a local LLM (Ollama) and a local embedder. Nothing leaves the machine.

### AnythingLLM vs Open WebUI?

[Open WebUI](open_webui.md) is more of a polished ChatGPT-style UI for any model; AnythingLLM is RAG-first with built-in document workspaces. Both are great.

### Can multiple users share a workspace?

Yes, in the Docker / server build. Multi-user auth, roles, and shared workspaces are first-class.

### Does it support MCP?

Yes - MCP server support landed for tool integration. Check the latest docs for setup.

## Pointers

* Site: [useanythingllm.com](https://useanythingllm.com)
* GitHub: [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)
* Docs: [docs.useanythingllm.com](https://docs.useanythingllm.com)
* For a lighter local-chat alternative, see [msty.md](msty.md).
