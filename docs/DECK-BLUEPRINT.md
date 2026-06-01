# Deck Blueprint — slide-by-slide (review before build)

**Format:** self-contained HTML presentation (one file, works offline, arrow/space to navigate, `?` toggles presenter notes). ~60 slides across the 8 segments (grew as live visualizer slides were added — see Segment 1).
**Look:** dark editorial base, one warm accent, big confident type, generous whitespace, subtle motion (fade/slide-in on advance, one "signature" animation per segment). Never clip-arty, never juvenile.
**Every fact below is sourced from the verified research brief.** Anything the fact-checker flagged as shaky is marked ⚠️ and phrased loosely on the slide.

Legend: **V** = visual/animation · **N** = presenter note · 🥚 = easter egg

---

## SEGMENT 0 — Cold Open + The Frame (9:30, 15 min) · *Suhav*

**S1 · Title.** "AI & Design — How to direct a genius." Subtitle: facilitators + date.
- V: type assembles letter-by-letter; accent underline sweeps in.
- 🥚 a tiny stethoscope-and-paintbrush mark in the corner (pays off at the end).

**S2 · The Reveal.** A single stunning artifact (poster/brand) with the caption "Made with free tools. 3 minutes." (We'll drop in a real one we make beforehand.)
- N: do it *live* if WiFi is solid; screenshot fallback baked in.

**S3 · The Promise.** "By 12:00 today, you will walk out with your own brand — and a way to reuse it forever, free."

**S4 · The Frame.** "You are the Creative Director. AI is your genius intern." Three bullets: brilliant · fast · *junior*.
- V: two-column "Director ↔ Intern" diagram fades in.

**S5 · The Thesis.** "AI isn't dumb. It's a genius intern waiting for a better brief." (Repeated all morning.)

---

## SEGMENT 1 — Meet Your Intern: how AI actually thinks (9:45, 20 min) · *Aditya*

> **Note:** this segment was expanded with four live "see it happen" visualizer/overview slides (marked 🆕). The deck (`deck/index.html`) is the source of truth; absolute slide numbers downstream have shifted accordingly. Each 🆕 slide auto-plays on entry and replays on re-entry.

**S6 · The world's most well-read autocomplete.** Two-column *what people assume (it looks up answers) ↔ what it really does (predicts the next word)*. Next-token prediction, not retrieval. *(Replaces the old "jazz musician" framing.)*

**S6b · 🆕 Watch it pick the next word.** *(live visualizer)* A sentence builds word-by-word; at each blank a picker shows candidate next words with probability bars (personal 58% · familiar 29% · purple 6%) and the top one snaps in. Lands "autocomplete" concretely.
- V: ghosted next-word picker; the silly low-probability "purple" is the teaching laugh.

**S7 · A "token" is a fragment of text.** ~3–4 chars; the intern reads and writes in puzzle-pieces; everything it holds and costs is counted in tokens.

**S7b · 🆕 One word isn't one token.** *(live visualizer)* Word chips crack into more token chips (5 words → 10 tokens); sub-tokens of a word share a colour tint; "unmistakable" pulses → four pieces.
- V: words→tokens split with a climbing counter.
- N: try-it links in notes — OpenAI Tokenizer (platform.openai.com/tokenizer) · Tiktokenizer (tiktokenizer.vercel.app). Splits are illustrative; exact pieces vary by model.

**S8 · The sculptor in the marble.** Diffusion models start from pure static and remove noise step by step until your image emerges. *(Exxact / Wikipedia diffusion.)*
- V: a noisy square denoises into a crisp image. Signature animation of the segment.

**S8b · 🆕 Same prompt, never the same picture.** *(live visualizer)* One prompt → three squares, each denoising from a different field of static into three distinct sunset scenes. Teaches variations — why "generate again" surprises you, so run a few and pick.
- V: staggered denoise of three SVG sunsets (different sun, sky, ridges, birds).
- N: go-deeper link in notes — Diffusion Explainer (poloclub.github.io/diffusion-explainer) for real text→image steps.

**S9 · "Multimodal" = one intern, many senses.** Reads text, sees images, hears audio — so you can *show* a reference, not only describe it.

**S9b · 🆕 A model for every medium — the model zoo.** *(overview grid)* 3×2 of model families with the current best examples; top pick highlighted: Text & chat (ChatGPT · Claude · Gemini) · Images (Midjourney · GPT Image · Nano Banana · Ideogram) · Video (Veo · Kling · Runway) · Voice & music (ElevenLabs · Suno · Udio) · Code & web (Claude Code · Cursor · v0 · Lovable) · Multimodal all-rounder (ChatGPT · Gemini · Claude, dark "punchline" card).
- N: leaders churn fast — Sora defined AI video in 2024 and was retired by April 2026; verify the chips the week-of. Match the model to the medium; pick one or two and go deep.

**S10 · Terminology lightning round.** "Eight words, sixty seconds" — one line each: prompt · token · context window · model · hallucination · diffusion · multimodal · **system prompt** (the 8th changed from "prompt vs. output" to set up the brand build; no easter egg in the built version).
- V: each term flips in like a flashcard.

**S11 · The one true thing.** A pattern-completer, not a truth-engine. Fluent ≠ correct. *(Sets up hallucination later.)*
- N: name the anthropomorphism out loud — "thinks/knows" is shorthand, not literal. Earns credibility with this crowd.

---

## SEGMENT 2 — The Brief: prompting (10:05, 20 min) · *Suhav*

**S12 · Brief it like a freelancer off the street.** Text-prompt anatomy: **Role + Task + Context + Constraints + Format + Examples.** *(OpenAI/Anthropic/Google guides.)*
- V: a plain prompt gains each labelled layer one at a time.

**S13 · Before / After (text).** Weak prompt → Director's brief, side by side, with the output difference.

**S14 · Image-prompt anatomy.** Subject · Medium · Composition · Lighting · Color · Mood · Style · Aspect ratio — written as a *scene*, not keyword salad. *(Midjourney/Imagen guides.)*

**S15 · Before / After (image).** Same subject, two prompts, two results.

**S16 · Direct, don't dictate.** Iterate one variable at a time; hand it references ("make it like this"); use negative prompts.

**S17 · 🛠 BUILD #1 (8 min).** "Rewrite one weak prompt into a Director's brief." On-screen checklist + timer.
- V: a soft countdown ring.

---

## SEGMENT 3 — Why Your Intern Goes Dumb (10:25, 15 min) · *Aditya*

**S18 · The cluttered desk.** What a context window is; why a longer chat isn't a smarter chat.

**S19 · Lost in the middle.** Models read the top and bottom of a long prompt well, the middle poorly — accuracy can drop 30%+. Put key instructions first or last. *(Liu et al., "Lost in the Middle," TACL 2024.)*
- V: a U-shaped attention curve draws itself.

**S20 · Context rot is real.** A 2025 study of 18 frontier models: every one degrades as input grows. Bigger window ≠ dump everything in. *(Chroma Research, 2025.)*

**S21 · Two failure modes to expect.** Hallucination = the confident exam-guesser *(Kalai et al., OpenAI 2025)*; Sycophancy = the people-pleasing dinner guest *(Anthropic/Sharma 2023)*. So: verify; ask neutrally; ask it to argue the *opposite*.
- N: load-bearing for the public-health folks — never trust a dosage/stat/citation unverified.

**S22 · The fix kit.** Fresh chat per task · summarize-and-restart · be specific · give examples · break into steps · say what *not* to do · ask it to argue against you.

**S23 · 🥚 The Broken Slide.** A slide that renders "confused/garbled," then snaps clean when Aditya "starts a fresh chat." Demonstrates context rot live.

---

## ☕ BREAK (10:40, 5 min) — slide with a rotating "intern status" quip.

---

## SEGMENT 4 — The Toolkit (10:45, 15 min) · *Suhav*

**S24 · The free-first map.** A grid: *design job → free pick → what paid unlocks.* Built from the verified `freeToolStack`.

**S25 · Write & ideate.** ChatGPT / Claude (free). Paid: higher limits, bigger context.

**S26 · Make images.** Leonardo / Bing (free, daily quotas). For **text-in-image** → **Ideogram**. Phone: Gemini "Nano Banana" (~20/day). ⚠️ exact daily numbers verified the week-of.

**S27 · Assemble it.** Canva free (templates, social, fix AI's colors/text). Paid: Brand Kit, more credits.

**S28 · Decks & sites.** Gamma (⚠️ ~400 *lifetime* credits — a trial, not ongoing) · Wix/Durable/Framer for a site.

**S29 · The two free-tier gotchas.** (1) *Daily/monthly reset vs. one-time lifetime credits.* (2) *Watermarks & vendor subdomains on free exports.*

**S30 · The Pro Path (sidebar).** One honest slide: ~$15–20/mo unlocks no-watermark output, brand kits, private generations, video. "Free to learn and draft; one paid tier for client-ready."
- N: keep this to ONE slide so nobody gets confused — free is the spine.

---

## SEGMENT 5 — THE BUILD: Brand-in-a-Box (11:00, 45 min) · *Both*

**S31 · A brand is a personality, not a logo.** Strategy before visuals. (Voice vs. tone = personality vs. mood.)

**S32 · Step 1 · Strategy (10 min).** Paste the provided prompt; let AI *interview you*, then draft audience, positioning, archetype, mission, tagline.
- V: the 5 strategy fields fill in.

**S33 · Step 2 · Visual identity (12 min).** Palette + font pairing + a logo *concept* (free tool). ⚠️ AI won't hit exact HEX — fix final color in Canva.

**S34 · Step 3 · Voice (5 min).** 3 voice traits + do/don't words.

**S35 · Step 4 · Apply (12 min).** Make ONE real artifact — a branded social post or one-panel brochure — using the brand block.

**S36 · Step 5 · Save it forever (6 min).** The reusable **brand block** (paste header) + how to store it: Custom Instructions / Projects / a custom GPT (paid) — *or* just a saved note (free, works everywhere). "Business card once vs. re-introducing yourself every call."

---

## SEGMENT 6 — Gallery Walk (11:45, 10 min) · *Both*
**S37 · Share.** Two prompts: "show your brand in one line" + "one thing the intern got wrong that you fixed."

---

## SEGMENT 7 — Take It Home (11:55, 5 min) · *Suhav*

**S38 · Use it responsibly (the 90-second ethics card).** Built from verified law:
- Purely AI images aren't copyrightable in the US; add human work to own a mark. *(US Copyright Office 2025; SCOTUS denied cert Mar 2026.)*
- Don't copy living artists / brands — *Disney v. Midjourney* (2025), *Andersen v. Stability* (trial Sept 2026).
- Disclose AI where it matters (FTC; EU AI Act Art. 50 from Aug 2026) — C2PA "Content Credentials" is the label. ⚠️ no precise penalty $ figure.
- Counter-steer bias; never paste PII/patient data into consumer AI; verify every fact.

**S39 · Your takeaway kit.** What's in the Brand-in-a-Box (QR/link).

**S40 · Resources + 🥚 The Reveal callback.** The corner mark from S1 returns full-screen — "design is care made visible" — tying art + public health together. Thanks + contacts.
- 🥚 Konami code anywhere in the deck unlocks a hidden "intern's confession" bonus-prompt slide.

---

## What I still need to verify the WEEK OF (from research `gaps`)
Quick 15-min check on each vendor's pricing page before the session: Leonardo/Bing/Gemini/Canva/Gamma/Ideogram exact free numbers, and Ideogram's daily-vs-weekly reset. The deck phrases these loosely so it's never *wrong*, but live-checking lets you state confident numbers.
