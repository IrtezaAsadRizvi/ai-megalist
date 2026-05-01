# Whisper

Whisper is the OpenAI speech recognition model that became the default ASR for everyone, including OpenAI's competitors. It's open weights, runs locally (slowly on CPU, fast on GPU), supports 99 languages, and the accuracy is good enough that most commercial transcription tools quietly use Whisper under the hood.

## What it actually is

An open source ASR model originally released by OpenAI in 2022 and updated since. There's the original `openai/whisper` Python package, the much faster `faster-whisper` (CTranslate2), `whisper.cpp` (C++ port for CPU and Apple Silicon), and a hosted API endpoint at [api.openai.com](https://api.openai.com).

## Setup

### Local, easy path: whisper.cpp
1. `brew install whisper-cpp` (macOS) or build from source: [github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp).
2. Download a model: `bash ./models/download-ggml-model.sh base.en` (or `large-v3` for best quality).
3. Run: `whisper-cli -m models/ggml-base.en.bin -f audio.wav`.
4. The output prints transcription to stdout; with `-otxt` or `-ovtt` you get files.

### Local, Python path: faster-whisper
1. `pip install faster-whisper`.
2. ```python
   from faster_whisper import WhisperModel
   model = WhisperModel("large-v3", device="cuda", compute_type="float16")
   segments, info = model.transcribe("audio.mp3")
   ```
3. ~10x faster than the original `openai/whisper` package, same accuracy.

### Hosted: OpenAI API
1. `OPENAI_API_KEY` exported.
2. `curl -F "model=whisper-1" -F "file=@audio.mp3" https://api.openai.com/v1/audio/transcriptions`
3. ~$0.006/minute. No infrastructure required.

## How I use it day to day

* **Transcribing podcasts and meetings locally.** `whisper.cpp` with `large-v3` on Apple Silicon runs at ~3x real time. A 1 hour recording transcribes in ~20 minutes on a MacBook M2.
* **Voice memos to text.** I have a shortcut: tap, speak, Whisper transcribes, the text goes into Notion. Faster than typing.
* **Translation.** `--task translate` translates non English speech into English text in one pass. Useful for international call recordings.
* **Forced alignment** for subtitles. With WhisperX (a fork that adds word level timestamps) I generate subtitles that line up to the millisecond.

## Gotchas

* The default `base` model is fine for clear audio, terrible on accents and noise. Use `large-v3` for serious work.
* Speaker diarization (who said what) isn't built in. Pair with `pyannote-audio` for that.
* Hallucinations on silent or near silent audio. Whisper sometimes invents text in long pauses. Set a VAD filter (faster-whisper does this with `vad_filter=True`).
* Long files (>30 seconds with the original Whisper) need chunking. faster-whisper handles this internally.
* GPU is optional but transformative. CPU inference on `large-v3` is ~0.3x real time; GPU is 10x+.

## Pointers

* Original repo: [github.com/openai/whisper](https://github.com/openai/whisper)
* Faster Whisper: [github.com/SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)
* whisper.cpp: [github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)
* WhisperX (alignment + diarization): [github.com/m-bain/whisperX](https://github.com/m-bain/whisperX)
* For commercial APIs with extra features (speaker labels, summarisation): [Deepgram](https://deepgram.com), [AssemblyAI](https://www.assemblyai.com).
