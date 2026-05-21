# MagicSchool: AI assistant built for teachers

MagicSchool is the assistant for the user most AI products keep forgetting exists: the K-12 teacher. Lesson plans, rubrics, IEP drafts, differentiated assignments, parent-communication emails - the daily grind of teaching. It's not the most technically impressive AI product, but it's one of the most adopted - and that's because it solved a job-to-be-done that ChatGPT solves clumsily and that teachers don't have time to figure out.

## What it actually is

A web app from MagicSchool.ai with 80+ teacher-specific "tools": lesson plan generators, worksheet builders, IEP / 504 drafters, rubric creators, exemplar writers, behavior intervention drafters, etc. Each tool is a structured prompt over a foundation model (mostly OpenAI / Anthropic under the hood) tuned to teacher workflows. Free tier exists; Plus / Schools / Districts plans add features and admin oversight.

## Setup

1. Sign up at magicschool.ai - free with an .edu email or a personal email.
2. Pick a tool from the catalog (start with "Lesson Plan Generator" or "Text Leveler").
3. Fill the form fields (grade, topic, standard, length). Generate.
4. Edit the output - treat it as a starting draft, not a final.
5. (Optional, schools) Admin dashboard for the school plan adds usage oversight and content controls.

## How I use it day to day

(I'm not a classroom teacher; the use cases below are from talking to teachers who use it.)

* **Lesson plans** mapped to specific state standards.
* **Text levelers** - take a 12th-grade article, regenerate it for 5th grade.
* **IEP / 504 drafters** - heavily edited by humans but saves the cold-start drudgery.
* **Parent communication emails** in the right tone.
* **Differentiated worksheet generators** - same content at three levels.

## Gotchas

* Output quality is "good draft" not "final" - teachers still edit. Anyone telling you otherwise is selling.
* Free tier is generous but not unlimited - usage caps land.
* AI bias and accuracy issues exist; teachers need to review (especially for IEPs and sensitive content).
* Some districts block AI tools entirely. Check before deploying classroom-wide.

## Alternatives

* **Diffit** - similar shape, leans into text leveling and differentiation.
* **Brisk Teaching** (already in the index) - Chrome extension for grading and feedback in Google Docs.
* **Curipod** - interactive lesson builder with AI generation.
* [ChatGPT](chatgpt.md) / [Claude](claude.md) - if you're a power user, the frontier chat models can do the same with custom prompts.
* [Khanmigo](khanmigo.md) - student-side tutoring rather than teacher-side prep.

## FAQ

### Is MagicSchool free?

Yes for individuals - free tier covers most tools with limits. Plus is paid; Schools / Districts plans are sold to admins.

### MagicSchool vs Brisk Teaching?

[Brisk](brisk_teaching.md) is a Chrome extension that lives in Google Docs / Classroom (great for grading and feedback in-context). MagicSchool is a standalone web app with a broader catalog of generators. Many teachers use both.

### Is it safe to use with student data?

For most generators, no student data needs to be entered. For tools that do (IEP drafts), respect FERPA and your district's policies. The Schools / Districts plan adds compliance controls.

### Does it work outside the US?

Most tools are US-curriculum-flavored but adaptable. UK, Australia, and Canada teachers report decent results; tools mapped to specific US standards may need editing for non-US contexts.

### Will it replace teachers?

No - it's a drafting tool, not a teaching tool. The classroom work itself is still human-led. (Worth saying out loud given the noise around AI in education.)

## Pointers

* Site: [magicschool.ai](https://www.magicschool.ai)
* Pricing: [magicschool.ai/pricing](https://www.magicschool.ai/pricing)
* Compare with [brisk_teaching.md](brisk_teaching.md) for the in-Google-Docs alternative.
