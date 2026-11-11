# Nujan: AI Research Partner for Reading Papers, Mastering New Fields & Discovering Literature

> Read papers side-by-side with AI · Get up to speed in any field with a First-Principles Coach · Receive personalized paper & topic recommendations from your Knowledge Profile · Analyze favorite conferences · Stress-test ideas & generate slide decks

[![Read in Nujan](https://nujan.app/badge.svg)](https://nujan.app)

**Website:** [https://nujan.app](https://nujan.app) · **Interactive Demo:** [https://nujan.app/demo](https://nujan.app/demo)

---

## Five High-Level Researcher Workflows & Their Cool Features

### 1. Interactive Paper Reader & Smart Library (`/library`, `/abs/:id`)
*Read dense papers faster, unpack math and methodology right next to the PDF, and synthesize findings across your entire reading collection.*
- **Dual-Pane Split PDF Reader & Grounded Chat:** Read the full PDF on the left while chatting with an AI research assistant on the right that grounds every answer in exact page numbers (`[Page 4]`).
- **Highlight-to-Ask & Line-Aligned Margin Notes:** Highlight any equation, theorem, or paragraph in the PDF to ask follow-up questions in place, or save persistent Margin Notes (`💬`, `📝`) anchored to the exact line of the PDF.
- **Interactive Crop & Ask (Visual Figure & Equation Breakdown):** Draw a bounding box around any complex architecture diagram, table, or multi-line derivation to get an instant visual and mathematical breakdown.
- **Authentic Extracted Figures Inline in Chat:** Embeds the actual cropped figures and tables from the paper directly inside the chat stream with a 1-click `[Jump to Page]` button.
- **Synchronized Citation Deep-Linking & Zotero-Style PDF Dark Mode:** Click any inline bibliography reference (`[12]`) to inspect or import the cited paper, and toggle true-color PDF Dark Mode that eliminates white glare while preserving figure and plot colors.
- **Instant `nujan.app/abs/...` URL Swap & Web Blog Import:** Replace `arxiv.org` with `nujan.app` in any paper URL (e.g., `https://nujan.app/abs/2006.11239`) to open it directly in the Split Reader, or import technical engineering blogs (Anthropic, Lil'Log, Distill) as citable PDFs.
- **6-Part Structured Breakdown & Multi-Paper Synthesis:** Auto-organizes papers (`Author - Year - Title`) with a 6-part breakdown (`TL;DR`, `ELI5`, `Core Contributions`, `Methodology`, `Empirical Results`, `Limitations`), **Side-by-Side Comparison Matrices** (2 to 4 papers), and **Library-Wide RAG Chat**.

### 2. Research Coach to Get Up to Speed with Any Field (`/coach`)
*Master unfamiliar research fields, bridge prerequisite gaps, and build deep intuition from first principles before or while diving into the literature.*
- **Personalized 5-Step Socratic Curricula:** Enter any topic or select papers from your library, and the Coach builds a structured, step-by-step curriculum tailored to your background.
- **Prerequisite Gap Tracing & Intuition-First Explanations:** Automatically identifies foundational concepts you need to know first, explaining plain-English intuition before introducing formal notation.
- **Step-by-Step Mathematical Derivations & Diagrams:** Unpacks every variable, loss function, and proof step in clean KaTeX alongside interactive Mermaid architecture diagrams.
- **2D Spatial Graph Chat (Branching Exploration):** Switch between `[ Linear Chat | Graph Chat ]` to branch off into side questions on specific sections or equations on an infinite 2D canvas without losing the main thread of your lesson.
- **Concept Flashcards & Standalone Tutorial Book Export:** Automatically extracts key definitions and equations into flashcards and exports completed coaching sessions into Markdown or interactive HTML textbook chapters.

### 3. Living Knowledge Profile & Personalized Recommendations (`/profile`, `/knowledge-map`, `/discovery`)
*Start with zero papers (from a blank slate using only your research interests) or let your profile evolve automatically as you read and learn.*
- **Start with Zero Papers via Your Research Profile:** You do not need an uploaded paper to start using Nujan. Select your academic domains, subfields (e.g., *Machine Learning*, *Oncology*, *Econometrics*), and tracked keywords in `/profile` to immediately get paper and topic recommendations from scratch, while Nujan also automatically updates your profile with concepts learned from the papers you read and the Coach sessions you complete.
- **Interactive 2D Knowledge Map:** Visualize your personal research brain as a force-directed graph connecting the **Research Fields**, **Core Concepts**, **Papers**, and **Datasets** you explore.
- **3-Tier Personalized Paper & Topic Recommendations (250M+ Works):** Continuously searches OpenAlex, arXiv, bioRxiv, medRxiv, Semantic Scholar, and OpenReview using your Research Profile to recommend reading lists and topics from scratch (and once you start using the Coach or Library, anchors Slot #1 to your latest Research Coach topic and Slot #2 to your latest Library paper, each with a *"Why this matches your profile"* rationale).
- **Twice-Weekly or Daily Literature Digests:** Curated email digests (Tuesday/Friday or Daily) tailored to your Knowledge Profile, with 1-click links to open any recommended paper directly in the Split Reader.

### 4. Analyzing Favorite Conferences & Research Frontiers (`/conferences`, `/datasets`)
*Track flagship conferences and benchmark datasets in your field to see macro research trends and state-of-the-art shifts without drowning in thousands of accepted papers.*
- **Favorite Conference Tracking:** Follow premier venues across domains (NeurIPS, ICML, ICLR, CVPR, ACL, EMNLP, KDD, MLSys, and domain symposiums) filtered through your Research Profile.
- **Thematic Cluster Reports & Emerging Frontiers:** AI-synthesized macro reports grouping accepted conference papers into core methodological themes, emerging research directions, and contrarian findings.
- **Automatic Benchmark & Dataset Extraction:** Extracts datasets, evaluation metrics, and baseline comparisons from papers to track how empirical state-of-the-art is evolving.

### 5. Adversarial Peer-Review Sparring & Slide Deck Generation (`/sparring`, `/slides`)
*Stress-test your own research ideas against simulated reviewers before submission, and turn papers or topics into presentation-ready slides in seconds.*
- **Multi-Persona Adversarial Sparring Partner:** Critique a paper in your library or pitch your own draft methodology against 4 specialized reviewer personas (*Critical Reviewer #2*, *Methodological Skeptic*, *Mathematical Purist*, and *Empirical Hawk*) with Sparring Decision Memory.
- **1-Click Journal Club & Lab Presentation Generator:** Turn any single paper, multi-paper collection, or Research Coach curriculum into a structured slide deck with speaker notes, exporting to **Live Interactive HTML (`Reveal.js`)**, **LaTeX Beamer (`.tex`)**, **Marp Markdown**, or **PDF**.
