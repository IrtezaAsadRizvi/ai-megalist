# Vercel AI SDK

Vercel AI SDK is the TypeScript framework for AI features in web apps. Where LangChain and LlamaIndex live in Python and the model SDKs live everywhere, Vercel AI SDK is built specifically for the React + Next.js + Edge runtime world that Vercel champions. The result is the cleanest path from "I want to add chat to my Next.js app" to "shipped."

## What it actually is

An open source TypeScript SDK from Vercel. Two main parts:
* **AI Core** (`ai`) — provider abstraction over OpenAI, Anthropic, Gemini, Mistral, Groq, etc., with streaming, tool calling, structured outputs.
* **AI UI** (`@ai-sdk/react`) — React hooks (`useChat`, `useCompletion`) that wire your UI to streaming AI responses without writing the streaming plumbing.

Plus packages for image, audio, embeddings.

## Setup

1. Need a Next.js or any React project.
2. Install: `npm i ai @ai-sdk/openai` (or `@ai-sdk/anthropic`).
3. Set provider env vars: `OPENAI_API_KEY`.
4. Server route (Next.js):
   ```typescript
   import { streamText } from 'ai';
   import { openai } from '@ai-sdk/openai';
   
   export async function POST(req: Request) {
     const { messages } = await req.json();
     const result = streamText({ model: openai('gpt-4o'), messages });
     return result.toDataStreamResponse();
   }
   ```
5. Client (React): `useChat({ api: '/api/chat' })` and render the messages.

About 15 minutes from `npm install` to a streaming chat UI.

## How I use it day to day

* **Adding chat to web apps.** The `useChat` hook handles streaming, optimistic UI, message state. Saves a day of plumbing.
* **Tool calling with structured outputs.** Provider abstracted; same code works across OpenAI, Anthropic, etc.
* **Multimodal inputs.** Images, PDFs, files — clean API; works across providers that support it.
* **Switching providers.** Replace `openai('gpt-4o')` with `anthropic('claude-sonnet-4-6')`; same code. Useful for A/B and multi provider apps.
* **Edge runtime support.** Streaming works at the edge. Faster responses for global users.

## Gotchas

* TypeScript only. For Python apps, use LangChain or provider SDKs.
* The SDK ergonomics favour the Vercel Next.js stack. Other frameworks (SvelteKit, Remix) work but with more friction.
* Some bleeding edge provider features (newest Claude tool versions, OpenAI Responses API) may lag the official provider SDKs slightly.
* For complex agent orchestration: combine with custom logic; AI SDK doesn't have an opinionated agent framework like LangGraph.
* For heavy RAG workflows: pair with a vector DB and custom retrieval; AI SDK doesn't include RAG abstractions.

## Pointers

* Docs: [ai-sdk.dev](https://ai-sdk.dev) (formerly sdk.vercel.ai)
* Repo: [github.com/vercel/ai](https://github.com/vercel/ai)
* For Python equivalent: [langchain.md](langchain.md), [llamaindex.md](llamaindex.md), or just provider SDKs.
* Pair with [v0.md](v0.md) for generating UI components that use the SDK out of the box.
