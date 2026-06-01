# Part 1 — Vocabulary explainer + visualise pairs (design spec)

**Date:** 2026-06-01
**Author:** Aditya (with Claude)
**Affects:** `deck/index.html`, `scripts/part-1-meet-your-intern.md`
**Goal:** Give every word in the "Eight words, sixty seconds" glossary (slide 17) the same
explainer + visualise treatment that Token and Diffusion already have, in a sequence where each
word builds on the last. Restructure the glossary: merge **Model + Multimodal** into one card and
add **API** in the freed slot.

---

## 1. Decisions locked during brainstorming

- **Glossary stays at 8 cards** so the "Eight words, sixty seconds" headline survives.
- **Model + Multimodal** merge into one card (04). **API** takes the freed slot (07).
- **Full pairs built in Part 1** for all words that lack them (user chose maximum coverage over
  brevity, accepting Part 1 grows past 30 min).
- **Part 1 reordered** so the Model/Multimodal/Zoo cluster moves *before* Diffusion, matching the
  glossary sequence.
- Part 1 versions of Context window / Hallucination / System prompt are the **intuition + visual**;
  the **science/application** stays in Parts 2 & 4 (no duplication — see §6).

### Per-concept choices
- **Prompt visualise:** the **café order** (real-life analogy), not an abstract blob. Universal,
  zero design literacy needed.
- **Model:** one new **text-only "What is a model"** explainer, angle = **"which intern."** No new
  visualise (the existing Multimodal demo + Model zoo are the visuals). Placed *before* the existing
  Multimodal slide.
- **API:** dumbed down to **the waiter** analogy.

---

## 2. The teaching sequence (the spine)

Each word leans on the prior one:

1. **Prompt** — the input you give. *(the brief)*
2. **Token** — how the intern reads that brief: in fragments. *(zoom into the prompt)*
3. **Context window** — how many tokens fit in its head at once. **Must follow Token** (the window
   is measured in tokens).
4. **Model / Multimodal** — the specific intern doing all this, with more than one sense.
5. **Hallucination** — the model's signature failure: confident, fluent, wrong.
6. **Diffusion** — switch machines: how image models build from noise.
7. **API** — how *software* (not you in a chat box) sends prompts to a model.
8. **System prompt** — the standing rules an app sends *through that API*, before your prompt, every
   time. Bookends back to Prompt; hands off to Part 4.

The live **prediction hook stays at the front** of Part 1 (autocomplete game → well-read autocomplete
→ pick-the-next-word) as the experiential foundation. The eight words are then formally named in the
sequence above.

---

## 3. Slide 17 — final glossary

| # | Term | Definition line |
|---|------|-----------------|
| 01 | Prompt | The brief you give the intern. |
| 02 | Token | A fragment of text (~3–4 chars). |
| 03 | Context window | How much it holds in mind at once. |
| 04 | **Model / Multimodal** | The specific intern (GPT, Claude) — reads text, sees images. |
| 05 | Hallucination | A confident, fluent wrong answer. |
| 06 | Diffusion | How image AI builds from noise. |
| 07 | **API** | How software talks to a model — its waiter. |
| 08 | System prompt | Standing rules it reads first. |

Implementation: edit the 8 `.fc` flashcards in the existing `Eight words` section
(`deck/index.html`, ~line 949). Renumber, replace card 07 (Multimodal) with API, fold Multimodal
text into card 04.

---

## 4. New / changed slides in `deck/index.html`

Existing kept as-is: Token explainer + visualizer, Diffusion explainer + variations, Multimodal,
Model zoo, the prediction hook (autocomplete game / well-read / pick-next-word), pattern-completer.

### 4.1 Prompt — explainer (NEW)
- **Kicker:** "Where it all starts"
- **Headline:** A prompt is the **brief** you hand the intern.
- **Lead:** Vague brief, vague work. Specific brief, great work. The whole next part is about writing
  better ones.

### 4.2 Prompt — visualise (NEW) · animation `café order`
- **Kicker:** "See it happen" · **Headline:** A prompt is your **order.**
- **Beats:** Row 1 — say "a coffee" → arrow → a random plain cup ☕ resolves, verdict "random plain
  cup" (muted). Row 2 — say "oat flat white, extra hot, 1 sugar" → arrow → a specific cup resolves,
  verdict "exactly that" (green). Caption: "Vague order, random result. Clear order, exactly what you
  wanted."
- Follow token/diffusion JS pattern: `MutationObserver` on `.active`, staged `setTimeout` beats,
  `reset()` on exit, replay on re-enter.

### 4.3 Context window — explainer (NEW)
- **Kicker:** "A word you'll hear all day" · **Headline:** The context window is the intern's **desk.**
- **Lead:** Only so much fits on the desk at once — and it's measured in tokens (callback to the
  token slide). A longer chat is **not** a smarter chat. Sets up Part 2 ("why it goes dumb").

### 4.4 Context window — visualise (NEW) · animation `desk fills`
- **Kicker:** "See it happen" · **Headline:** The desk only holds **so much.**
- **Beats:** A bounded box ("the desk"). Messages drop in as token-chips and the box fills. When it's
  full, the **earliest** message greys out and slides off the top. Caption: "When the desk is full, the
  oldest things fall off — that's why it forgets how the chat began." (Intuition only; Part 2 owns the
  research.)

### 4.5 Model — "What is a model" explainer (NEW, text-only)
- **Kicker:** "Which intern?" · **Headline:** A model is **which** intern you hired.
- **Lead:** GPT, Claude, Gemini aren't "AI" in general — each is one specific intern. Each did all its
  reading once, beforehand (training), then its brain was frozen. So it doesn't learn from your chat;
  it came pre-read. Picking a model = picking which intern to put on the job — different strengths,
  quirks, price tags.
- Placed **immediately before** the existing Multimodal slide. The existing Multimodal slide and Model
  zoo follow unchanged.

### 4.6 Hallucination — explainer (NEW)
- **Kicker:** "The failure to watch for" · **Headline:** A hallucination is a confident, fluent,
  **wrong** answer.
- **Lead:** It predicts what *sounds* right, not what *is* right — so it can be totally wrong in the
  same polished voice it uses when it's correct. (Part 2 covers the why + defences.)

### 4.7 Hallucination — visualise (NEW) · animation `confidence vs truth`
- **Kicker:** "See it happen" · **Headline:** Fluent is **not** correct.
- **Beats:** Question "How many R's in 'strawberry'?" → a confident answer "Two." types in → a green
  confidence bar fills to 99% ("99% sure") → a red **"WRONG · it's 3"** stamp lands rotated. Caption
  ties to the strawberry callback already seeded on the token slide.

### 4.8 API — explainer (NEW)
- **Kicker:** "How apps actually use AI" · **Headline:** An API is the AI's **waiter.**
- **Lead:** Your app never goes in the kitchen. It hands an order to the waiter (the API); the kitchen
  (the model) cooks; the waiter brings the answer back. Every "AI-powered" app you use is just doing
  this behind the scenes. Not magic — plumbing.

### 4.9 API — visualise (NEW) · animation `waiter`
- **Kicker:** "See it happen" · **Headline:** Order in, dish out.
- **Beats:** Three nodes — 📱 your app · 🤵 API (waiter, gradient) · 👨‍🍳 model (kitchen). An "order"
  token travels app → waiter → kitchen; a "dish" token travels back kitchen → waiter → app. Loops to
  show it's automatic and repeatable. Caption: "Two parties, one standard window — the kitchen stays
  hidden."

### 4.10 System prompt — explainer (NEW)
- **Kicker:** "The one to park" · **Headline:** A system prompt is the **standing rules** it reads
  first.
- **Lead:** A normal prompt is one instruction in the chat. A system prompt sits *above* the whole
  conversation — rules it reads before anything you type, every time. Park this one: it turns out to be
  the secret to the brand build in Part 4.

### 4.11 System prompt — visualise (NEW) · animation `pinned rule`
- **Kicker:** "See it happen" · **Headline:** Rules that sit **above** the chat.
- **Beats:** A pinned rule card at the top ("📌 Standing rules: always sage-green, warm, on-brand").
  Below it, a user message arrives ("write a caption") → an arrow/glow flicks up to the pinned rule
  (it "checks first") → the reply resolves already on-brand with a ✓. Caption: "It reads the standing
  rules before every reply — that's how apps stay consistent. Your brand becomes one of these (Part 4)."

---

## 5. Part 1 reorder

Current cluster order: `… token viz → diffusion → diffusion-viz → multimodal → model zoo → eight words`.

New order: `… token viz → context window (explainer+viz) → what-is-a-model → multimodal → model zoo →
hallucination (explainer+viz) → diffusion → diffusion-viz → API (explainer+viz) → system prompt
(explainer+viz) → eight words → pattern-completer`.

Full Part 1 vocab spine after the prediction hook:
**Prompt → Token → Context window → Model/Multimodal/Zoo → Hallucination → Diffusion → API → System
prompt → Eight words → Pattern-completer.**

---

## 6. Complementary, not duplicated (guardrail)

- **Context window:** Part 1 = the desk fills / oldest falls off (intuition). Part 2 keeps
  "Lost in the Middle" (Liu et al., TACL 2024) and "Context Rot" (Chroma, 2025). Do **not** move that
  research into Part 1.
- **Hallucination:** Part 1 = confident-wrong visual + strawberry. Part 2 keeps hallucination +
  sycophancy mechanisms and defences. Do **not** move those into Part 1.
- **System prompt:** Part 1 = name + park it. Part 4 keeps "your brand = your system prompt." Do
  **not** move the brand payoff into Part 1.

---

## 7. `scripts/part-1-meet-your-intern.md` updates

- New `## ▸ Slide` section for every new slide, in the new order, with **Say / Do** blocks matching
  the existing voice (warm, brisk, intern metaphor).
- Update the **timing map** table and slide count; note Part 1 now runs long (acknowledged).
- Update the "Before you start — browser tabs" list with the new live links.
- **External references in the Do/notes** of each visualise (verify URLs at build time):
  - **Prompt:** Anthropic prompt-engineering guide; OpenAI prompting guide; learnprompting.org.
  - **Context window:** Liu et al. "Lost in the Middle" (TACL 2024); Chroma "Context Rot" (2025).
  - **Model:** LMArena (Chatbot Arena) leaderboard; artificialanalysis.ai for model comparisons.
  - **Hallucination:** Vectara HHEM hallucination leaderboard; OpenAI "Why language models
    hallucinate" (2025).
  - **API:** MDN "What is an API?"; Anthropic API quickstart (the waiter analogy).
  - **System prompt:** Anthropic system-prompt docs; Anthropic's published Claude system prompts.
- Mirror the same external references into the relevant slides' `data-notes` in `deck/index.html`
  (the deck already does this for Token and Diffusion).

---

## 8. Visual / code conventions to follow

- Reuse deck CSS vars: `--plum #7a4f6b`, `--peach #e8a87c`, `--ink`, `--muted`, `--line`, `--card`,
  `--serif`, and the `.grad-text` span for the headline highlight.
- Light slides use class `slide`; structure = `.wrap` → `.kicker.r` → `h2.r` → lead/demo.
- Each visualise slide is self-contained: scoped `<style>`, a `<section id="…">`, and a `<script>`
  that mirrors the token visualizer's lifecycle (`MutationObserver` on `class` attr, `play()`/
  `reset()`, replay on re-enter, guarded by `if(!slide)return`).
- Keep `data-seg="How it thinks"` on the new Part 1 slides for the progress segment.

---

## 9. Out of scope

- No changes to Parts 2, 3, 4, 5 except the explicit guardrails in §6.
- No new external libraries; pure HTML/CSS/vanilla JS, matching the file.
- The model zoo and existing Multimodal slide keep their current copy.

---

## 10. Open items to confirm at build time

- Exact external-reference URLs (verify live before pasting).
- Whether the café cups / poster mocks read clearly at projector scale (tune sizes during build).
