# Screenpipe: searchable screen and audio history for AI context

Screenpipe captures work context across applications so you can look up something you saw or heard, rather than reconstruct it from tabs and notes.

This guide summarizes official documentation. It is not a hands-on review.

## What it actually is

A desktop recorder and local search API that stores captured screen text and audio history on your device. Its MCP server lets compatible AI assistants retrieve that history for recall, meeting notes, and work summaries. It is source-available under the Screenpipe Commercial License, not an OSI open-source license.

## Setup

1. Install Screenpipe from [the official site](https://screenpipe.com/) and follow its recording-permission prompts.
2. Start recording. Search can only retrieve content that Screenpipe has captured.
3. To connect Claude Desktop, use **Settings → Connections** in Screenpipe. The documented setup uses bundled Bun and supplies the local API key.
4. Ask for recent captured context, such as what you saw in the last five minutes. Check the retrieved material before relying on a summary.

For other clients or manual installation, follow the [official MCP setup](https://github.com/screenpipe/screenpipe/blob/main/packages/screenpipe-mcp/README.md). Installing the MCP package alone does not start the recorder.

## Documented uses

* Find previously viewed text across captured applications.
* Retrieve meeting context to prepare notes or follow-ups.
* Give an AI assistant recent work context for a daily summary.

## Gotchas

* Local capture does not mean every workflow stays on-device. Configured cloud AI, transcription, sync, integrations, and connected AI clients can transmit context off-device.
* Recording requires device permissions and storage. Configure capture filters for sensitive applications and content.
* MCP requires the local recorder/API and authentication. Use the setup documentation rather than assuming an unauthenticated server.
* The [source license](https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md) and official desktop-build terms differ. Check [current pricing](https://screenpipe.com/onboarding) and the relevant terms for your use.

## Pointers

* [Official README](https://github.com/screenpipe/screenpipe#readme)
* [MCP documentation](https://github.com/screenpipe/screenpipe/blob/main/packages/screenpipe-mcp/README.md)
* [Screenpipe Commercial License](https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md)
