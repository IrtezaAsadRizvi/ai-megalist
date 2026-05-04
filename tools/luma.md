# Luma Dream Machine: AI video model tuned for camera moves

Luma Dream Machine is the AI video generator that competes with [Veo](veo.md), [Runway](runway.md), and [Kling](kling.md) - the differentiator is camera movement, not raw fidelity. Luma Dream Machine is the AI video model for cinematographers. Where Veo and Runway optimise for general purpose quality, Luma's strength is camera moves - smooth dollies, complex pans, dynamic tracking shots. The output looks shot, not generated, more often than other models.

## What it actually is

Luma Labs' text and image to video model. Available at [lumalabs.ai/dream-machine](https://lumalabs.ai/dream-machine) and via API. The current generation is Ray 3 (early 2026); generates 5 to 10 second clips at up to 4K with native 60fps support. Strong on photorealism and motion physics.

## Setup

1. Go to [lumalabs.ai/dream-machine](https://lumalabs.ai/dream-machine), sign up.
2. Free tier: 30 generations/month with watermark.
3. Pricing: Standard $9.99/mo (150 credits), Pro $29.99 (600), Premier $94.99 (2000).
4. Type a prompt or upload an image. Set duration (5 or 10 seconds) and quality.
5. (Optional) Use the iOS app for mobile generation.
6. (Dev) API at [docs.lumalabs.ai](https://docs.lumalabs.ai).

## How I use it day to day

* **Establishing shots and camera moves.** Sweeping aerials, tracking shots, smooth pushes - Luma nails them more often than competitors.
* **Image to video at high fidelity to source.** I can hand Luma a still and the resulting video preserves the source style well. Useful for product reveals.
* **60 fps for sports / fluid action.** Most AI video tools target 24 or 30 fps. Luma's 60 fps option is meaningful for high motion content.
* **Loop generation.** "Make it loop seamlessly" is a real flag; useful for ambient backgrounds or social loops.
* **Storyboarding.** Quick concept videos before committing budget to live action.

## Gotchas

* Audio is not natively generated. You'll add SFX and music separately.
* Some prompts (faces, hands, text in scene) still wobble - same diffusion model artifacts across the field.
* Free tier watermark is prominent; not for client deliverables.
* Iteration cost is real; complex prompts may need 5+ generations to find the right one.
* The Premier tier is the only one with API parity at scale.

## Alternatives

* If you want native audio in the generation and the strongest all-rounder, [Veo](veo.md) is the safer default.
* If you need directorial controls (motion brush, references, masks), [Runway](runway.md) is the pro creative tool.
* If you want longer clips at lower $/clip, [Kling](kling.md) is the value pick.
* If you want fast iteration with playful effects, [Pika](pika.md) is the more loose-feeling option.

## FAQ

### Is Luma Dream Machine free?

There's a free tier of about 30 generations per month with a watermark - fine for testing, not for client work. Standard is $9.99/mo (150 credits); Pro is $29.99 (600); Premier is $94.99 (2000).

### Luma vs Veo - which should I use?

Luma when camera movement is the point - smooth dollies, tracking shots, sweeping aerials. [Veo](veo.md) when you want the strongest all-rounder, native audio, and 4K with prompt fidelity. I reach for Luma maybe 1 in 3 generations.

### Does Luma generate audio?

No, audio isn't natively generated as of early 2026. You'll add SFX and music in post. If you need audio in the same generation, [Veo](veo.md) is the choice.

### Can I use Luma Dream Machine commercially?

Paid tiers grant commercial rights; free tier outputs carry a watermark and aren't for client deliverables. Read current terms before shipping anything; they shift.

## Pointers

* [lumalabs.ai/dream-machine](https://lumalabs.ai/dream-machine)
* For native audio video: [veo.md](veo.md). For directorial control: [runway.md](runway.md). For long durations + value: [kling.md](kling.md).
* The API is friendly to wire into automation pipelines if you generate at scale.
