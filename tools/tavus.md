# Tavus: AI video personalised at scale via API

Tavus is the AI video API for personalised-at-scale outreach, a different niche from corporate avatars in [Synthesia](synthesia.md) and creator avatars in [HeyGen](heygen.md). Tavus is the AI video tool for "personalised at scale" - every recipient gets a video addressed to them by name, referencing their company, their role, their context. Sales outreach, customer onboarding, post sale check ins. The economics are wild: record one video, generate thousands of personalised variants, send each via API.

## What it actually is

An API + web platform for personalised AI video. You record a base video; Tavus learns your face and voice; programmatically generate variants where specific phrases (names, company, role) are swapped per recipient. Lip sync is matched per variant; voice is your cloned voice. There's also a Conversational AI product for real time video calls with an AI version of a brand spokesperson.

## Setup

1. Go to [tavus.io](https://www.tavus.io), sign up.
2. Pricing: Free trial; paid plans start ~$375/mo for sales / SaaS use cases. Enterprise quotes.
3. Record a base video (5+ minutes of you talking, in good lighting).
4. Wait for Tavus to train your model (~24 hours typical).
5. Use the API to generate variants:
   ```python
   tavus.generate_video(
     replica_id="...",
     script="Hi {{name}}, I noticed {{company}} is in the {{industry}} space..."
   )
   ```
6. Each variant generation takes a few minutes; webhooks notify when ready.

## How I use it day to day

* **Honest:** I've evaluated Tavus for a B2B sales context; not in production.
* **Personalised cold outreach.** Each prospect gets a 30 second video with their name, company, and a relevant hook. Open rates and reply rates dramatically higher than text email in published case studies.
* **Customer onboarding.** Welcome video to new signups, addressed by name with their use case mentioned. Better than a generic "Welcome!" email.
* **Re engagement campaigns.** Lapsed customer gets a video referencing their last purchase or interaction.
* **Conversational AI.** A live AI version of your spokesperson on landing pages. Visitors can ask questions; the AI responds in your voice with your face. Still novel; uneven quality.

## Gotchas

* The lip sync on personalised variants is good but not perfect. Close inspection can reveal the AI nature.
* Pricing is enterprise oriented. For solo sellers, the per video economics may not work.
* Each variant takes minutes to generate; not real time. Plan campaigns with batch generation.
* Recipients sometimes find the personalisation creepy when overdone. Use sparingly; calibrate per audience.
* The Conversational AI is impressive in demos and rougher in production. Test thoroughly before deploying.

## Alternatives

* If you don't need per-recipient personalisation, [Synthesia](synthesia.md) is the corporate / training default.
* If you want creator-friendly avatars and per-video editing, [HeyGen](heygen.md) is friendlier and cheaper.
* If you want async video without AI personalisation, Loom is the simpler tool.
* If you only need cloned voice instead of full video, [ElevenLabs](elevenlabs.md) is the lighter option.

## FAQ

### Is Tavus free?

Free trial only. Paid plans start around $375/mo for sales / SaaS use cases; Enterprise is quoted. Pricing is enterprise-oriented - solo sellers may find the per-video economics tough.

### Tavus vs Synthesia - which should I use?

Different jobs. [Synthesia](synthesia.md) is for one-to-many corporate video (training, announcements). Tavus is for one-to-one personalised video at scale - thousands of recipients, each addressed by name and context. If your script changes per recipient, Tavus; if it doesn't, Synthesia.

### How long does Tavus take to train my avatar?

About 24 hours typical, after recording 5+ minutes of base video in good lighting. Variant generation per recipient takes a few minutes; webhooks notify when ready. Plan campaigns with batch generation, not real time.

### Are personalised AI videos creepy?

Sometimes. Recipients can find heavy personalisation off-putting if overdone. The published case studies show higher open and reply rates than text email; calibrate per audience, and don't pretend the video isn't AI when asked.

## Pointers

* [tavus.io](https://www.tavus.io)
* For non personalised AI presenters: [synthesia.md](synthesia.md), [heygen.md](heygen.md).
* For 1:1 video voice messaging without AI: Loom.
* The Tavus blog and docs have honest discussions of when personalised video works and when it doesn't.
