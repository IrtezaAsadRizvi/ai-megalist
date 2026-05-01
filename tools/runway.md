# Runway

Runway is the AI video tool that's been quietly shipping for longer than most people realise. It's where the actual film and post production professionals are, in part because the controls — motion brush, reference characters, camera moves — feel like the kind of inputs a director would want, not just "type a prompt and pray."

## What it actually is

A web based AI video studio with image to video, video to video, and now Gen‑4 / Gen‑4.5 text to video models. Beyond generation, Runway has rotoscoping, masking, inpainting, audio sync, and color grading tools. There's also a real API for Gen‑4, which makes it the most production usable of the major video models.

## Setup

1. Go to [runwayml.com](https://runwayml.com), sign up.
2. Free tier gives 125 credits (one short clip). Pricing scales: Standard $15/mo, Pro $35/mo, Unlimited $95/mo.
3. The web app is the primary interface. Click "Generate video" → choose model.
4. (Optional) For programmatic use: API keys at the dashboard; docs at [docs.dev.runwayml.com](https://docs.dev.runwayml.com).

## How I use it day to day

* **Image to video.** Drop a still in, write a brief motion prompt ("slow push in, hair drifts in wind"). Way more controllable than text only generation.
* **Motion Brush.** Paint regions of an image to specify what should move and how. Closest thing to a director's hand on shot composition.
* **References.** Lock a character or style across multiple shots with reference images. Series consistency is the hardest problem in AI video; Runway handles it better than most.
* **Camera controls.** Explicit zoom, pan, dolly. Replaces the wishful prompt engineering most other tools require.
* **Lipsync** for character driven shots. Upload audio, Runway syncs the lips. Quality varies by face but holds up for short clips.

## Gotchas

* Credit pricing is opaque until you've burned through a few generations. Standard and Pro fill faster than the marketing implies.
* Gen‑4 quality is excellent in the right ranges (5 to 10 second cinematic shots) and uneven outside them.
* The UI has accumulated features over years and the navigation reflects that. Plan to spend an hour learning where things live.
* Audio generation isn't native (yet) at Veo 3.1 quality. Runway adds voice and SFX as a separate step or via integrations.
* Pro tier and below have visible watermarks on free preview clips. Final exports are clean.

## Pointers

* Docs: [help.runwayml.com](https://help.runwayml.com)
* API docs: [docs.dev.runwayml.com](https://docs.dev.runwayml.com)
* Compare against [veo](https://deepmind.google/technologies/veo) (audio native, less directorial control) and Kling (longer durations, value tier).
* For the editing side rather than generation: pair with [descript.md](descript.md) or DaVinci Resolve.
