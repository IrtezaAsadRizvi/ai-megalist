# RunPod: GPU compute by the minute for AI workloads

RunPod is the GPU compute platform that competes with [Modal](modal.md) for serverless and undercuts hyperscalers like AWS / GCP on raw $/GPU-hour. RunPod is the GPU cloud for "I just want a machine with a GPU and reasonable pricing." Where Modal is serverless and AWS / GCP are full enterprise clouds, RunPod sits in the middle: container based deployments (Pods), serverless endpoints, persistent volumes, and pricing per minute that's often half what hyperscalers charge.

## What it actually is

A GPU cloud platform. Two main products:
* **Pods**: VM like containers with persistent storage. Pick a GPU (H100, A100, RTX 4090, etc.); deploy a container; get SSH and HTTP access.
* **Serverless**: autoscaling endpoints for inference. Submit a request; it's routed to an idle worker; pay per second.

Plus a Hub of pre built templates for ComfyUI, vLLM, Stable Diffusion, text generation, etc.

## Setup

### Pods
1. Sign up at [runpod.io](https://runpod.io).
2. Add a payment method.
3. Pods → Deploy a Pod → pick GPU + template (e.g. "PyTorch 2.x with CUDA 12.x").
4. Wait ~60 seconds for the pod to spin up.
5. SSH in or use the in browser Jupyter / VS Code.

### Serverless
1. Serverless → Create new endpoint → choose a template or your own Docker image.
2. Configure scaling (min / max workers, idle timeout).
3. Submit jobs via REST API; pay per second of execution.

## How I use it day to day

* **Fine tuning runs.** Pod with an H100, run a training job for a few hours, shut it down. Cheaper than buying GPUs; faster than queueing on hyperscalers.
* **ComfyUI for serious image / video generation.** Deploy a ComfyUI template on a pod; access via web UI; faster than my local machine for big workflows.
* **Hosting custom inference.** When my model isn't on Replicate or Together, RunPod Serverless gives me an autoscaling API endpoint.
* **Quick experiments.** Spin up an A100 for an hour; experiment; tear down. Pricing is fair for ad hoc work.
* **Persistent volumes** for keeping models around between pod sessions. Avoid re downloading 70 GB weights every time.

## Gotchas

* GPU availability fluctuates. Popular GPUs (H100s) sometimes queue; have a fallback (different region, different GPU class).
* Container management is on you. Modal abstracts this; RunPod doesn't.
* Networking is simpler than AWS but less flexible. For complex VPC setups, hyperscalers win.
* Some templates are community contributed and uneven. Stick to the official ones for production.
* Pricing is competitive but the cheapest option (RTX 4090s) is consumer hardware; reliability is lower than data center GPUs.

## Alternatives

* If you want Python-first serverless with zero container management, [Modal](modal.md) is the cleaner option.
* If you just need inference on standard open-weight models, [Together](together.md) or [Fireworks](fireworks.md) skip the GPU-rental layer entirely.
* If you need very high throughput on a few well-known models, [Groq](groq.md) and [Cerebras](cerebras.md) ship faster TPS than any GPU rental.
* If you want any model behind a single API and don't care about the underlying GPU, [Replicate](replicate.md) is the path.

## FAQ

### Is RunPod cheaper than AWS?

Usually, yes - on RTX 4090 / A100 / H100 SKUs, RunPod is often half the per-minute price of equivalent EC2. The trade is reliability and networking depth: hyperscalers win on VPC, multi-region, and SLAs.

### What's the difference between Pods and Serverless?

Pods are persistent VM-like containers you SSH into and pay by the minute. Serverless is autoscaled inference - you submit a request, a worker spins up, you pay per second of execution. Use Pods for training and ad hoc experiments; Serverless for inference endpoints.

### Can I run ComfyUI on RunPod?

Yes - there's an official ComfyUI template in the Hub. Spin up a pod, hit the in-browser UI, and you have a faster workstation than most local rigs without buying a GPU.

### Does RunPod have H100s in stock?

Sometimes. Popular GPUs queue during peak demand. Have a fallback (different region, A100 or RTX 4090) ready if you can't wait.

## Pointers

* [runpod.io](https://runpod.io)
* For Python first serverless: [modal.md](modal.md).
* For pure inference API on standard models: [together.md](together.md), [fireworks.md](fireworks.md).
* For hyperscalers: AWS SageMaker, GCP Vertex, Azure ML - more complex, more enterprise features.
