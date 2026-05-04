# Modal: serverless GPU compute via Python decorators

Modal is a serverless GPU platform in the dev infra category alongside [Replicate](replicate.md), [Runpod](runpod.md), and [Together AI](together.md), pitched at developers who want to deploy a GPU function with `@app.function(gpu="A100")` and walk away. Modal is the serverless GPU platform that took the developer experience seriously. Where running a model on AWS or GCP requires meaningful infrastructure work (containers, autoscaling, GPU quotas, networking), Modal lets you decorate a Python function and deploy. The result is "I want to run this on an A100 for the next 30 seconds" without thinking about VMs.

## What it actually is

A serverless cloud for AI workloads. You write Python functions (or classes), decorate them with `@app.function(gpu="A100")`, and deploy with one command. Modal handles container building, autoscaling, GPU provisioning, networking, secrets, queue management. Useful for inference, training, batch processing, and long running services.

## Setup

1. Sign up at [modal.com](https://modal.com). New accounts get $30/mo of free compute.
2. Install: `pip install modal`.
3. Auth: `modal setup` (browser flow).
4. Quick test:
   ```python
   import modal
   app = modal.App("hello")
   
   @app.function(gpu="A10G")
   def gpu_task():
       import torch
       return torch.cuda.get_device_name(0)
   
   if __name__ == "__main__":
       with app.run():
           print(gpu_task.remote())
   ```
5. `modal run hello.py`. Within seconds you have a GPU executing.

## How I use it day to day

* **Hosted inference for custom models.** A model not on Replicate / Together; deploy on Modal in 50 lines of Python; get an HTTPS endpoint.
* **Background jobs.** "When this webhook fires, run this function on a GPU." Modal handles queueing and retries.
* **Batch processing.** Process thousands of files in parallel; Modal scales the function across GPUs automatically. No queue infra needed.
* **Custom Cog like deployments.** Same idea as Replicate's Cog but with full Python flexibility.
* **As Lambda for AI.** Anything you'd otherwise put in AWS Lambda + EC2 + EFS, Modal collapses into Python decorators.

## Gotchas

* Cold starts are real on infrequently used functions. Pre warming or "always on" containers cost more.
* Pricing is per second of GPU. A misconfigured loop can run up bills fast. Set `timeout` on functions.
* Build times for big container images can be slow. Use Modal's image caching and `modal volume` for big assets.
* For very simple "call OpenAI" tasks, Modal is overkill. Use it when the work needs GPU or significant compute.
* Some things are easier in Modal than others. Stateful long lived services work; some advanced networking needs (custom domains, complex VPCs) require a different approach.

## Alternatives

* If you want one-call serverless model APIs without the Python flexibility, [Replicate](replicate.md) is the simpler tool.
* If you want raw GPU VMs at lower cost (and more setup), [Runpod](runpod.md) or vast.ai are cheaper at the cost of DX.
* If you want OSS model hosting with no infra work at all, [Together AI](together.md) or [Fireworks](fireworks.md) host the model for you.
* If you're on Hugging Face already, [Hugging Face](huggingface.md) Inference Endpoints cover similar ground.

## FAQ

### Is Modal free?

New accounts get $30/mo of free compute - enough to evaluate and run light workloads. Pricing beyond that is per-second of GPU time, so a misconfigured loop can run up bills fast. Set timeouts.

### Modal vs Replicate - which should I use?

Modal when you need full Python flexibility, custom containers, or stateful services. [Replicate](replicate.md) when you just want to run a published model via an HTTP endpoint and not think about Python at all. Modal is the platform; Replicate is the registry.

### What GPUs does Modal support?

T4, A10G, A100, H100, L4 in 2026 - the modern accelerator lineup. Allocation is by string in the decorator (`gpu="H100"`).

### Are cold starts a problem on Modal?

Yes, cold starts are real on infrequently used functions. Pre-warming or "always on" containers solve it but cost more. For latency-sensitive inference, plan for either.

## Pointers

* [modal.com](https://modal.com)
* Docs: [modal.com/docs](https://modal.com/docs)
* For per call serverless model APIs (less flexibility, less complexity): [replicate.md](replicate.md), [together.md](together.md), [fireworks.md](fireworks.md).
* For raw VMs / long lived workloads: RunPod, vast.ai, AWS / GCP directly.
