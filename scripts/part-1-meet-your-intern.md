# Part 1 — Meet Your Intern (speaking script)

**Lead:** Aditya · **Time budget:** 30 min nominal (now runs ~40–45 if you do every pair — see note) · **Slides:** Part 1 divider → "pattern-completer" (divider + map + 22 numbered slides)
**Goal of this part:** give the room *just enough* of how AI actually thinks to direct it well — and plant three habits: it predicts, it forgets, it varies. Along the way, earn all eight vocabulary words one at a time.
**Energy:** curious and quick. This is the "physics lesson" before we build, so keep it moving — promise them we're making things soon.

> **What changed (read me):** every word on the "Eight words" cheat-sheet now has its **own explainer + a live "visualise" slide**, taught in a build-on-each-other order: **Prompt → Token → Context window → Model/Multimodal → Hallucination → Diffusion → API → System prompt.** That's also the order on the recap slide. The trade-off: Part 1 is now ~40–45 min if you run every beat. The **Running long?** note at the bottom tells you exactly what to compress to get back to 30.

### Before you start — have these open in browser tabs (for the live bits)
- **OpenAI Tokenizer** → platform.openai.com/tokenizer (token slide)
- **Tiktokenizer** → tiktokenizer.vercel.app (backup token demo, shows token IDs)
- **Diffusion Explainer** → poloclub.github.io/diffusion-explainer (optional, diffusion slide)
- A chat tool open (ChatGPT or Claude) for the live next-word example, the café "order it badly" bit, and the strawberry catch on the closer
- Drop the two tokenizer links into the room's chat / on the whiteboard so people can try their own words
- *Everything else is self-contained:* the Prompt, Context-window, Hallucination, API and System-prompt slides each have a built-in animation that **auto-plays on entry and replays if you go back**. Reference links for each live in that slide's presenter note (press **N**).

### Timing map (rough — the deck has no timer in Part 1, so glance at the clock)
| Slide | What | Min |
|---|---|---|
| Opener | Energy: anecdote + show of hands | 2.5 |
| Divider | Meet your intern | 1 |
| Map | Predicts / forgets / varies (the spine) | 0.5 |
| 1 | Finish the sentence (you are the autocomplete) | 1 |
| 2 | Well-read autocomplete | 2 |
| 3 | LIVE: pick the next word | 2.5 |
| 4 | **Prompt** — the brief | 1 |
| 5 | **Prompt** — the café order *(visualise)* | 1.5 |
| 6 | Token — a fragment | 1 |
| 7 | LIVE: one word isn't one token | 3 |
| 8 | **Context window** — the desk | 1.5 |
| 9 | **Context window** — the desk fills *(visualise)* | 2 |
| 10 | **Model** — which intern | 1.5 |
| 11 | Multimodal — many senses | 1.5 |
| 12 | The model zoo | 3 |
| 13 | **Hallucination** — confident & wrong | 1.5 |
| 14 | **Hallucination** — the invented citation *(visualise)* | 2 |
| 15 | Diffusion — the sculptor | 2 |
| 16 | LIVE: same prompt, never the same picture | 2.5 |
| 17 | **API** — the waiter | 1.5 |
| 18 | **API** — order in, dish out *(visualise)* | 2 |
| 19 | **System prompt** — standing rules | 1.5 |
| 20 | **System prompt** — rules above the chat *(visualise)* | 2 |
| 21 | Eight words, sixty seconds *(recap)* | 2 |
| 22 | Pattern-completer, not truth-engine | 2 |
| — | buffer / questions | ~0.5 |

---

## ▸ Energy opener — wake the room up *(~2.5 min, before the divider)*

**Purpose:** lift the energy as you take over from Suhav, and quietly set up the workshop's whole stance — *AI isn't magic and it isn't doom; it's a tool you direct.* Two moves: one laugh, one show of hands. Keep it brisk and warm.

### Move 1 — open with a laugh (pick ONE anecdote that fits your voice, ~45 sec)
Tell it like a story you find funny, not a fact you're reciting. All of these are real, well-known, and land the "confident but not always right" note without you having to explain anything yet. Don't over-explain the joke — say it, let them laugh, move on.

- **🍕 The glue-on-pizza one (lightest, most universal).** "Last year Google rolled out AI answers at the top of search. Someone asked how to stop cheese sliding off their pizza — and it cheerfully suggested mixing in about an eighth of a cup of *non-toxic glue*. It had read it as a joke on Reddit and repeated it with a totally straight face. It also told another person to eat 'one small rock a day' for minerals." → *bridge:* "Brilliant, fast, read the whole internet… and occasionally hands you glue. That's the thing we're getting to know today."
- **⚖️ The lawyer one (great for the public-health/credibility crowd — and it pays off on slide 14).** "A New York lawyer used ChatGPT to write a legal brief. It gave him half a dozen perfect-looking case citations — names, quotes, the lot. In court it turned out *none of them existed.* The AI had invented them, confidently, and he filed them. He got sanctioned." → *bridge:* "Fluent, professional, completely made up. Hold that thought — it's the most important idea in this part, and we'll catch it in the act later."
- **🚗 The $1 car one (cheeky).** "A car dealership put a ChatGPT bot on its website. A customer talked it into agreeing to sell him a brand-new SUV for *one dollar* — and got it to say 'that's a legally binding offer, no takesies-backsies.'" → *bridge:* "It'll agree with almost anything if you push it the right way. We'll see why — and how to stop it — this morning."
- **✈️ The airline-refund one (consequences angle).** "Air Canada's chatbot invented a refund policy that didn't exist, a grieving customer relied on it, and when the airline said 'the bot was wrong, not us,' a tribunal said: nope, your bot, your problem — pay up." → *bridge:* "These tools sound authoritative even when they're freelancing. Knowing when to trust them is half of using them well."

> *Facilitator tip:* the **glue-on-pizza** one is the safest crowd-pleaser; the **lawyer** one is now the strongest because slide 14 (the invented citation) is its direct payoff. Pick the one *you* tell most naturally — a story you enjoy beats the "optimal" story.

### Move 2 — the show of hands (the energy spike, ~75 sec)
Now get every body in the room to move. Frame it as a quick gut-check, no wrong answers:

> "Okay, gut reaction — no overthinking. **Hands up if some part of you worries AI is going to take jobs, including maybe yours.**" [count, react warmly — "yep, a lot of us", "honest room"]
> "Hands down. Now — **hands up if you think, on balance, AI is going to do real good for the world.**" [count]
> "And the brave ones with a hand up *both* times — good, that's actually the most honest answer."

Then bridge it straight into the workshop's stance (this is the line that matters — say it with conviction):

> "Here's the thing: both of those are predictions about a tool *nobody in this room controls.* What you *can* control is whether you're someone it happens **to**, or someone who knows how to **direct** it. That's the entire point of this morning. By lunch, it won't be a mysterious force — it'll be a slightly chaotic, genius intern that *you* are the boss of. So let's meet them."

→ advance to the **divider**.

**Do:**
- Put your *own* hand up for whichever question you genuinely feel — it gives the room permission to be honest.
- Keep it to two questions. Don't turn it into a debate or ask "why?" — that kills momentum. The point is movement and a shared moment, then straight into the bridge.
- If the room's small or shy, narrate the counts playfully ("three brave optimists, I respect it") so even a quiet show of hands feels alive.
- **Do NOT** editorialise on jobs/doom yourself — staying neutral is what makes the "you direct it" reframe credible rather than preachy.

---

## ▸ Divider — "Meet your intern" *(~1 min)*

**On screen:** Part 01 of 5 · "Meet your intern" · *How AI actually thinks — just enough to direct it like a designer.*

**Say:**
> "And before you can direct anyone, you need a feel for how they think. So this part is the only 'how it works' bit of the whole morning — about five minutes of concepts, then it's all making things. No maths, I promise. The point isn't to turn you into engineers — it's so that when the intern does something weird later, like offering you glue on your pizza, you'll know exactly *why*, and how to snap it back."

**Do:** Advance briskly. Don't linger on the divider — roll straight into the map slide.

---

## ▸ The map — predicts / forgets / varies *(~0.5 min)*

**On screen:** Three cards — **01 It predicts · 02 It forgets · 03 It varies** — each with a one-line plain-English meaning and a tag for where it pays off (we're here · next part · the build). Footer: *don't memorise any jargon yet — just these three habits.*

**Say (this is the map — slow down, hold up three fingers, one per word):**
> "Before any of that, here's the whole map for how this intern thinks — in three words, no jargon. **It predicts** — it guesses what comes next. **It forgets** — it gets foggier the longer you talk to it. And **it varies** — it never hands you the same thing twice. That's it. Everything else this morning is just detail hanging off those three. Let's feel the first one."

**Do:** This is the structural spine, so make it land as a *map*, not a throwaway — three fingers, one per word, then move. It pays off all morning: **predicts** → this part + prompting (Part 2), **forgets** → context window (slides 8–9) + "why it goes dumb" (Part 2), **varies** → the build (Part 4). Don't name a single piece of jargon here — the words they'll learn get earned later, one slide each, and recapped on the "Eight words" slide. Advance straight into the autocomplete game while the three words are still fresh.

---

## ▸ Slide 1 — Finish the sentence (you are the autocomplete) *(~1 min)*

**On screen:** Three half-finished sayings, stacked — "Better safe than ___" · "The early bird gets the ___" · "When in Rome, ___". A **Reveal the ending** button completes them one at a time, each ending popping in in gradient (the next line to play gently pulses). After the third, a line lands: *AI just predicts the most likely next word — you're all fluent autocompletes.*

**Say (open Part 1 with this — don't explain anything yet):**
> "Quick game before I explain a single thing. I'll start a line, you finish it — just shout it out, all together."
> [read line 1, let them shout it, *then* click to reveal] "Better safe than… *(sorry)*."
> [line 2 — shout — click] "The early bird gets the… *(worm)*."
> [line 3 — shout — click] "When in Rome… *(do as the Romans do)*."

Then land it:
> "Notice nobody *looked anything up*. You heard the start and the most likely ending just… arrived. That — exactly that — is the only thing AI does. You're all fluent autocompletes. It's just read more than you."

**Do:** This is the best non-cringe hook in the whole part — they *experience* next-token prediction before you ever name it. The rhythm matters: read the line, get the shout, *then* click (the reveal confirms the room's guess — don't pre-empt it). Clicking the button won't skip the slide, so click freely. Don't rush; the half-second where they all shout the ending together is the whole payoff. Roll straight into the next slide while the energy's up.

---

## ▸ Slide 2 — The world's most well-read autocomplete *(~2 min)*

**On screen:** Two cards — *What people assume: "It looks up the answer"* ↔ *What it really does: "It predicts the next word."*

**Say:**
> "Here's the single most useful thing to understand today. Almost everyone assumes AI works like Google — that you ask a question, it goes and *looks up* the stored answer, and hands it back. **It does not do that.** There's no database it's searching.
>
> What it actually does is closer to the autocomplete on your phone — except it has read a staggering slice of everything ever written. It continues your sentence with the most likely next fragment, one piece at a time. That's it. That's the whole trick.
>
> And once you know that, two things suddenly make sense. *Why is it so fluent and creative?* Because it has read so much that its guesses are uncannily good. And *why is it sometimes confidently, totally wrong?* Same reason — it's guessing what *sounds* right, not checking what *is* right. It's the world's most well-read autocomplete."

**Do:** Point at the two cards as you say "assume" and "really does." Hold the phone-autocomplete comparison — it's the anchor everyone already owns. (The "finish the sentence" game on the previous slide already planted this *live* — here you just put a name to what they felt.)

---

## ▸ Slide 3 — LIVE: Watch it pick the next word *(~2.5 min)*

**On screen (auto-plays):** Sentence builds — "A great brand feels ___" → a picker shows *personal 58% · familiar 29% · purple 6%* → top one snaps in → "…personal, not ___" → *generic 64% · boring 28% · loud 8%*.

**Say (don't read the slide — narrate the animation):**
> "Don't read this — watch it. The sentence stops at a blank, and look: the intern doesn't *know* the next word, it lists the candidates with rough odds. 'Personal' at 58%, 'familiar' at 29%… and see 'purple' sitting down there at 6%? It *considered* purple. The odds were just low, so it didn't win — but it was on the table.
>
> [as the word snaps in] It picks the top one, locks it, and then does the whole thing again for the next word. And again. That's all 'generating text' is — next word, by the odds, one at a time.
>
> So when people say AI is 'thinking' — it's choosing the most probable next fragment, very very fast."

**Do:** If you re-enter the slide it replays. Literally point a finger at "purple" — that low-probability word is the teaching laugh and the thing people remember. If WiFi's good and you want a bonus: in a live chat, type "The capital of France is" and let it complete — same mechanism.

**🎯 Interactive — "place your bets" (before the animation reveals, ~20 sec):**
Pause on the blank — "A great brand feels ___" — and grab a couple of guesses from the room *before* the picker appears:
> "Before I let it run — what word do you think it picks? Shout one out." [take 2–3: "authentic", "warm", "real"…]
> "Good guesses. Let's see what the machine bet on." [play → "personal" wins]
Then if anyone matched: *"See — you're running the same model in your head."* And the payoff: *"And look — 'purple' was on the table at 6%. It considered it. That 6% is exactly why you sometimes get a weird left-field word — the dice landed there."*

---

## ▸ Slide 4 — A "prompt" is the brief *(~1 min)*

**On screen:** "A prompt is the *brief* you hand the intern." · vague brief → vague work; specific brief → great work.

**Say:**
> "We've felt how it works — now the eight words you'll actually hear all day, and we'll earn them one at a time. Start with the one you already use without thinking. A **prompt** is just the brief you hand the intern. That's the whole definition. And like any intern, a vague brief gets you vague work; a sharp brief gets you sharp work. We'll spend the entire next part on writing better briefs — for now, lock in one thing: *the brief decides the output.*"

**Do:** Keep it short — it's the setup for the café demo right after. Don't teach prompt-writing here; that's Part 2.

---

## ▸ Slide 5 — LIVE: a prompt is your order *(~1.5 min)*

**On screen (auto-plays):** Two rows. "a coffee" → a random plain cup ("a random cup"). "oat flat white, extra hot, one sugar" → an exact cup ("exactly that"). Caption: *same barista — the only thing that changed was how clearly you asked.*

**Say (narrate it):**
> "Picture ordering a coffee. You walk up and say… 'a coffee.' [row 1 lands] You'll get *something* — a cup, sure, but who knows what. Now you say: 'oat flat white, extra hot, one sugar.' [row 2] Exactly what you wanted. Same barista, same machine — the only thing that changed was *how clearly you asked.* That's a prompt. It's your order."

**Do:** Let both rows resolve; point at the random cup, then the exact one.

**🎯 Interactive — "order it badly" (~20 sec):**
> "Give me the *vaguest* possible thing you could ask an AI for. Shout it." ["a logo!", "a website!", "make it pop!"]
> "Perfect — that's a 'a coffee.' Now what's the specific version?" [take one, build it out together]
The laugh is in how little a one-word brief actually says.

---

## ▸ Slide 6 — A "token" is a fragment of text *(~1 min)*

**On screen:** "A 'token' is a *fragment* of text." · reads/writes in puzzle-pieces, ~3–4 characters each · "Designing" = design + ing.

**Say:**
> "Next word, and you'll hear it all day. The intern doesn't read whole words — it reads in fragments called **tokens**, roughly three to four characters each. 'Designing' might be 'design' plus 'ing'. Two pieces.
>
> Why should you care? Because *everything* it can hold in its head, and everything you pay for, is counted in tokens. So tokens are the currency of this whole thing. Let me show you."

**Do:** Keep this one short — it's the setup for the live demo next. Don't over-explain; the visualizer does the work.

**🎯 Interactive — "guess the count" (~15 sec, sets up the next slide):**
> "Here's a bet. The word 'unmistakable' — how many fragments do you reckon it breaks into? One? Two? Four? Shout a number." [take a few]
> "Hold that number. Let's find out who's right."
Carry the guesses into the next slide so the reveal settles the bet.

---

## ▸ Slide 7 — LIVE: One word isn't one token *(~3 min)*

**On screen (auto-plays):** Top row = 5 words (*Designers · love · unmistakable · branding · 🎨*). They split into the bottom row of 10 token-chips; "unmistakable" pulses → 4 pieces (un·mist·ak·able). Caption: common words stay whole, long/rare ones shatter.

**Say:**
> "Top row is how *you* read it — five words. Watch what happens when the intern reads it. [let it split] Ten pieces. Roughly double.
>
> And look at 'unmistakable' — [point as it pulses] that one long word is *four* tokens on its own. Common little words like 'love' stay whole; long or unusual words shatter into chunks. Even the emoji is its own token.
>
> Three things fall out of this. One — a word usually isn't one token, it's more, so things cost and fill up faster than you'd guess. Two — these chunks are exactly what fills its memory, which is the very next word we learn. And three — this is *why* AI is famously bad at counting the letters in a word or spelling weird names. It never sees letters. It only ever sees these chunks."

**Do — the interactive bit (this is the moment to make it real):**
- Switch to the **OpenAI Tokenizer** tab (platform.openai.com/tokenizer).
- Type a participant's name or "strawberry" or "unmistakable" — show the colour-coded split and the token count live.
- Invite them: *"Paste your own name, your brand idea, a whole sentence — watch it break apart."* Links are in the chat.
- Caveat out loud: *"Exact splits vary by model — this is illustrative, not gospel."*

**🎯 Interactive — settle the bet + plant the strawberry test (~45 sec, the callback seed):**
- First, settle slide 6's bet: *"Who said four? [hands] You win — 'unmistakable' is four pieces."* Tiny win for the room.
- Then plant the morning-long callback. Type **"strawberry"** into the tokenizer and show it splits into chunks (str·aw·berry), then ask:
  > "Quick — how many letter R's in 'strawberry'? Shout it." *(answer: three — straw-be-rry)*
  > "Hold that thought. Most AI models get this *wrong* — they'll confidently tell you two. And now you know exactly why: it never sees the letters. It sees these chunks. We'll catch it red-handed at the very end of this part."
This seeds the **strawberry test**, which pays off on the final slide of this part. It's the single best 'aha' thread in the room. (Note: slide 14's hallucination demo uses an *invented citation*, not the strawberry, on purpose — so this stays the one clean live catch.)

---

## ▸ Slide 8 — The "context window" is the intern's desk *(~1.5 min)*

**On screen:** "The context window is the intern's *desk*." · only so much fits, measured in tokens · a longer chat is not a smarter chat.

**Say:**
> "Now the word for the intern's *memory*: the **context window**. Picture a desk. Only so much fits on it at once — and it's measured in those tokens we just met. Here's the counter-intuitive bit: a longer chat is *not* a smarter chat. Pile too much on the desk and the earliest things slide off the edge — which is exactly why a long conversation starts forgetting how it began. That 'why does it suddenly go dumb' feeling is the whole of the next part; this is just the word for it."

**Do:** Plant 'desk' and move — don't go deep. The *science* (lost-in-the-middle, context rot) is Part 2's job; this slide only needs the picture. Tee up the demo next.

---

## ▸ Slide 9 — LIVE: the desk only holds so much *(~2 min)*

**On screen (auto-plays):** A bounded "desk" box. Messages drop in as chips and fill it; when it's full, the *earliest* message greys out and slides off the top, with a banner: *↑ your original brief just fell off the desk.*

**Say (narrate it):**
> "Watch the desk. [messages drop in] Your brief, a reply, another instruction… the desk fills up. [the last one arrives, the first drops] And look — to make room for 'now make me a poster', the intern's *original brief* just fell off the back of the desk. It didn't get dumber; it just can't *see* the start anymore. Bigger desks help — they never make the desk infinite."

**Do:** Let it play; point at the message that falls off.

**🎯 Interactive — "felt this?" (~15 sec):**
> "Hands up if you've ever had a long chat suddenly 'forget' something you told it right at the start." [hands] "That — that exact feeling — is the desk overflowing. We fix it in the next part."

**References (in the slide note, for the curious / Part 2 hand-off):** *Lost in the Middle* — Liu et al., TACL 2024 (models read the start and end of a long input well, glaze over the middle) · *Context Rot* — Chroma, 2025 (every model degrades as input grows). Both get unpacked properly in Part 2.

---

## ▸ Slide 10 — A "model" is which intern *(~1.5 min)*

**On screen:** "A model is *which* intern you hired." · GPT, Claude, Gemini — each trained once, then frozen · pick which intern for the job.

**Say:**
> "**Model.** When people say 'I use GPT' or 'I use Claude', those are *models* — and they aren't 'AI' in general, they're each one specific intern. Here's the key thing: each one did *all its reading once*, beforehand — that's what 'training' means — and then its brain was frozen. So it doesn't learn from your chat, and it only knows things up to a cut-off date. Picking a model is just picking *which* intern to put on the job: each has its own strengths, quirks, and price."

**Do:** Keep tight — it flows straight into multimodal (its senses) and the model zoo (the whole roster). If someone asks "which is best?", that's the zoo slide — hold it 20 seconds.

**Reference (in the slide note):** compare current models live at **lmarena.ai** (Chatbot Arena — people vote head-to-head) and **artificialanalysis.ai** (speed/price/quality comparisons).

---

## ▸ Slide 11 — Multimodal = one intern, many senses *(~1.5 min)*

**On screen:** "Multimodal = one intern, many senses." reads text · sees images you paste · sometimes hears audio.

**Say:**
> "Same intern, more senses — that's **multimodal**. It can read your text, it can *see* an image you paste in, and sometimes it can hear audio.
>
> Why this matters for design: it means you don't have to *describe* the look you want in words. You can just *show* it — paste a reference, a screenshot, a photo you love, and say 'match this vibe.' That 'show, don't tell' move is the secret to almost everything we make later. Remember it."

**Do:** Tee up the moodboard step in Part 4 — "we'll use this directly." Keep it tight.

**🎯 Interactive — "show, don't tell" demo (optional, ~20 sec):**
Practise what you preach. Pull up any photo on your phone or a reference image on screen and say:
> "Watch — instead of describing this, I just *hand* it over." [paste the image into ChatGPT/Gemini] "'Describe the mood and colours of this for me.'"
Let it nail the description. *"It saw it. That's multimodal — and it's the move behind everything we make after the break."* (Skip if WiFi's shaky — the line alone carries the point.)

---

## ▸ Slide 12 — The model zoo *(~3 min)*

**On screen:** 3×2 grid of model families with current best picks (highlighted = where to start): Text & chat (**ChatGPT** · Claude · Gemini) · Images (**Midjourney** · GPT Image · Nano Banana · Ideogram) · Video (**Veo** · Kling · Runway) · Voice & music (**ElevenLabs** · Suno · Udio) · Code & web (**Claude Code** · Cursor · v0 · Lovable) · the dark Multimodal all-rounder card (ChatGPT · Gemini · Claude).

**Say:**
> "So 'AI' isn't one thing — there's a whole zoo of these interns, and they specialise. Text and chat for writing and planning. A different family for images. Another for video. Another for voice and music. Another for actually building websites and code. And the big all-rounders down here that do a bit of everything.
>
> The highlighted one in each box is just where I'd start today — not the only option, the *starting* option.
>
> Two things to take away. First: **match the model to the medium.** Don't ask a chat model to make you a video. Second — and this is important — **these leaders change every few months.** To give you a sense: a tool called Sora basically *defined* AI video back in 2024, and it was retired by April this year. Half the names on this slide barely existed a year ago. So don't try to chase every launch — it's exhausting and pointless. Pick one or two per thing you actually do, and go deep. We'll go deeper on the image tools after the break."

**Do:** Sweep a hand across the grid as you name the families — don't read every chip. The Sora line lands the "it churns fast, don't chase it" point; it's the one to deliver clearly.

**🎯 Interactive — "who's used one?" (gauge the room, ~25 sec):**
Quick show of hands as you point at each family:
> "Honesty check — hands up if you've used a chat one, ChatGPT or Claude… [count] an image one… a video one… a voice one?"
It tells you instantly where the room is (and lets you pitch the rest of the morning to them), and people enjoy seeing who's dabbled. If someone's used a tool that isn't on the slide, welcome it: *"Nice — see, there are dozens. You don't need all of them."* Reinforces "pick one or two, go deep."

---

## ▸ Slide 13 — Hallucination = confident and wrong *(~1.5 min)*

**On screen:** "A hallucination is a confident, fluent — *wrong* answer." · it predicts what sounds right, not what is right.

**Say:**
> "Now the failure mode you *must* know the name of: **hallucination**. It's a confident, fluent, *wrong* answer. Remember why — it's predicting what *sounds* right, not checking what *is* right. So it can be flat wrong in the exact same polished voice it uses when it's correct. The danger was never that it's wrong sometimes; it's that it's wrong *confidently.*"

**Do:** Name it; the next slide shows it. Part 2 covers *why* it happens and the defences — don't pre-empt that here.

---

## ▸ Slide 14 — LIVE: the invented citation *(~2 min)*

**On screen (auto-plays):** Question — "Cite a peer-reviewed study on handwashing and flu." → a flawless-looking citation appears (Lee & Patel, 2019, *Journal of Public Health* 47(3)) → a green "99% sure" bar fills → a red stamp lands: *Invented — no such paper.*

**Say (sincere, not jokey — this is the credibility beat):**
> "Remember our lawyer from the start? Watch. Ask it for a peer-reviewed study. [citation appears] Looks perfect — authors, journal, volume, page numbers. Ninety-nine percent confident. [the stamp lands] And it's completely invented. No such paper.
>
> For the public-health folks in the room, this is the one that matters most: never trust a citation, a number, or a dosage from one of these without checking it. Fluent is *not* correct."

**Do:** Deliver this one straight — it's the trust beat for this audience and the direct payoff of the lawyer anecdote. (The strawberry stays parked — that's the live catch on the closing slide.)

**References (in the slide note):** Vectara hallucination leaderboard (github.com/vectara/hallucination-leaderboard) · OpenAI, *Why language models hallucinate* (2025). Both feed Part 2's "how to defend" slides.

---

## ▸ Slide 15 — The sculptor in the marble *(~2 min)*

**On screen:** A noisy square denoises into a clean image. "Image AI ('diffusion') starts with pure static and removes noise step by step."

**Say:**
> "We've been talking about how it handles *words*. Image AI is a completely different machine, and this is the bit people find genuinely surprising.
>
> When you ask for an image, it does **not** paint on a blank canvas. It starts with pure static — TV-snow, random noise — and then removes the noise, step by step, until your picture emerges out of it. [point at the square resolving] Like a sculptor who says the statue was always inside the marble, and they just chip away everything that isn't it.
>
> Hold onto this picture, because it explains two things that confuse everyone: why the same prompt gives you a *different* image every time, and why text inside AI images comes out garbled — it's carving shapes out of fog, it was never typing letters."

**Do:** Let the denoise animation be the star — pause and watch it with the room. This is the "signature" visual of the segment. Optional deeper cut: the Diffusion Explainer link, or tell them to search "stable diffusion denoising timelapse" on YouTube for a real 10-second version.

**🎯 Interactive — "what's it start from?" (quick poll before the reveal, ~15 sec):**
> "When you ask an AI for a picture — does it start from a blank white canvas and paint, like a person would? Hands up if yes." [most hands go up]
> "Almost everyone. Watch what actually happens." [run the denoise]
> "Not a blank page — pure static. It carves the picture *out of the noise.*"
The wrong-footing is the fun: nearly everyone guesses wrong, so the reveal actually surprises a room of smart people.

---

## ▸ Slide 16 — LIVE: Same prompt, never the same picture *(~2.5 min)*

**On screen (auto-plays):** One prompt — *"a peaceful sunset over rolling hills, warm tones"* → three squares denoise from different static into three distinct sunsets (different sun position, sky, ridges, even birds).

**Say:**
> "Same words, generated three times. [let them resolve] Three different sunsets. Different sun, different sky, one's even got birds. *Identical prompt.*
>
> Why? Because each one started from a *different* cloud of static — and your words only steer how that particular fog gets carved. So you literally can't get the same image twice.
>
> Here's the designer takeaway, and it's a habit I want you to leave with: 'generate again' is not a failure — it's a *feature*. Don't write one prompt, get one image, and feel stuck. Run three or four, pick the best one, *then* refine that. We'll do exactly this in the build."

**Do:** This plants the "run a few, then pick" habit you'll lean on in Part 4. Say it as a rule, not a tip.

**🎯 Interactive — "vote for your favourite" (~20 sec):**
Once the three sunsets resolve:
> "Okay — which one's your favourite? Hands up for number one… two… three." [count each]
> "Look at that — the room's split. There's no 'correct' image, just the one *you* like. That's the job: the AI gives you options, *you* bring the taste. You're the director — it's the intern handing you three drafts."
This turns a passive animation into a 20-second moment that also reinforces the whole "you're the creative director" frame.

---

## ▸ Slide 17 — An "API" is the AI's waiter *(~1.5 min)*

**On screen:** "An API is the AI's *waiter*." · app hands over a request → kitchen (model) cooks → answer comes back · not magic, plumbing.

**Say:**
> "Two words left, and they're the 'behind the scenes' ones. First: **API**. Easiest way in — it's the AI's *waiter*. You don't march into a restaurant kitchen and cook; you give your order to the waiter, the kitchen makes it, the waiter brings it back. An API is that waiter for software: an app hands over a request, the model does the work, the answer comes back — automatically, no chat box. Every 'AI-powered' app you've ever touched is just doing this behind the scenes. Not magic — *plumbing*."

**Do:** Keep it concrete with the waiter — don't get technical (no JSON, no keys). They just need "apps talk to models through a standard window."

**Reference (in the slide note):** MDN, *What is an API?* (developer.mozilla.org) · Anthropic API quickstart (docs.anthropic.com) if anyone wants to see a real one.

---

## ▸ Slide 18 — LIVE: order in, dish out *(~2 min)*

**On screen (auto-plays):** Three nodes — 📱 your app (the diner) · 🤵 API (the waiter) · 👩‍🍳 model (the kitchen). An "order: write a caption" packet travels app → waiter → kitchen, then a "✓ caption ready" packet travels back.

**Say (narrate the round-trip):**
> "Watch the order travel. Your app hands the waiter 'write a caption' [packet moves] — across to the kitchen, the model cooks it, and the dish comes back the same way. Nobody typed in a chat box; it just happened. Do that a thousand times a second and you've got every AI feature in every app you use — the writing helper in your email, the chatbot on a website, all of it."

**Do:** Let the round-trip play once, then the caption lands. Quick line if useful: *"When a tool says 'powered by GPT' or 'powered by Claude' — this is what that means."*

---

## ▸ Slide 19 — A "system prompt" is the standing rules *(~1.5 min)*

**On screen:** "A system prompt is the *standing rules* it reads first." · sits above the whole conversation, every time.

**Say:**
> "Last word — and I want you to *park* this one, because it becomes the secret to your whole brand build after lunch. **System prompt.** A normal prompt is one instruction inside the chat. A *system* prompt sits *above* the whole conversation — standing rules the intern reads *before* anything you type, every single time. It's how apps keep an AI on-script and on-brand. And here's the hook: your brand, written down, becomes *your* system prompt. Hold that thought."

**Do:** Flag it deliberately as the Part 4 callback — same job the old card-08 did. Don't explain the brand mechanics yet; just plant the word and the promise.

**Reference (in the slide note):** Anthropic's system-prompt docs (docs.anthropic.com) — they even publish Claude's own system prompts, which is a fun thing to show a curious room.

---

## ▸ Slide 20 — LIVE: rules above the chat *(~2 min)*

**On screen (auto-plays):** A pinned rule card on top ("System prompt — always on: warm, sage-green tone, sign off 'Care, close to home.'"). A user message arrives ("write a caption for our new clinic") → the pinned rule glows ("↑ reads the standing rules first") → the reply comes back already on-brand and signed off.

**Say (narrate it):**
> "See how it works. There's a pinned rule sitting on top — 'warm, sage-green tone, sign off Care, close to home.' Someone asks for a caption. [user message] Before it answers, the intern glances *up* at those standing rules — [it glows] — and the reply comes back already on-brand, signed off, without anyone re-explaining the brand. That pinned card? That's *exactly* what your brand block becomes in Part 4."

**Do:** Tie it hard to Part 4 — this is the visual they'll remember when they paste their brand block on top of a chat.

---

## ▸ Slide 21 — Eight words, sixty seconds (recap) *(~2 min)*

**On screen:** Eight flashcards — 01 Prompt · 02 Token · 03 Context window · 04 Model / Multimodal · 05 Hallucination · 06 Diffusion · 07 API · 08 System prompt.

**Say (fast — it's a recap of words they've now each *earned*):**
> "Lightning round — and the good news is you've already earned every one of these, so this is just the recap. **Prompt** — the brief. **Token** — a fragment. **Context window** — the desk. **Model and multimodal** — which intern, and its senses. **Hallucination** — confident and wrong. **Diffusion** — pictures carved out of noise. **API** — the waiter. And **system prompt** — the standing rules it reads first… park that last one, it's the secret to the build. That's your whole vocabulary. You're fluent."

**Do:** Keep the pace high and a little playful — the speed *is* the joke. Don't let people take notes; tell them it's all in the takeaway kit. Flag card 08 deliberately so it's a callback later.

**🎯 Interactive — "beat the clock" (the constraint is the fun, ~60 sec):**
Make the sixty seconds literal. Pull out your phone, set a 60-second timer, drop it on the lectern:
> "Eight words, sixty seconds — co-facilitator, you're the timer. If I'm still talking when it buzzes, you all get a coffee refill on me. Go." [race through all eight]
The visible countdown turns a dull definitions list into a tiny performance the room roots for. Don't make *them* recite — *you* race, they watch the clock. (Bonus: if you land it with time to spare, take a mock bow.)

---

## ▸ Slide 22 — Pattern-completer, not a truth-engine *(~2 min)*

**On screen (dark slide):** "It's a *pattern-completer*, not a truth-engine. Fluent does not mean correct."

**Say (slow down — this is the one to land):**
> "If you forget everything else from this part, keep this one sentence. It's a pattern-completer, not a truth-engine. **Fluent does not mean correct.**
>
> It is *extremely* good at sounding right. That is a completely different skill from *being* right — and it will hand you a wrong fact in the same confident, polished voice it uses for a true one. [for this room especially] For the public-health folks here, that matters more than for anyone: never trust a number, a dosage, a statistic, or a citation from it without checking. We'll come back to exactly how to defend against this in the next part.
>
> And one honest note — I've been saying 'it thinks,' 'it knows,' 'it considers.' That's all shorthand. There's nobody in there. It's maths predicting fragments. The intern metaphor is a tool to direct it well, not a claim that it's a little person. Keep both of those in your head at once."

**Do:** This is the credibility slide for this audience — deliver it sincerely, no jokes. The "thinks/knows is shorthand" admission earns trust. Then hand to Part 2: *"So it predicts, and it can be confidently wrong. Next: why it gets *dumber* the longer you talk to it — and how to fix it."*

**🎯 Interactive — the strawberry payoff (the callback lands here, ~40 sec):**
This is where the seed from the token slide pays off — do it *live*, it's the most memorable 40 seconds of the part. In an open chat:
> "Remember the strawberry? Let's catch it in the act." [type: *"How many letter R's are in the word strawberry?"*]
> [it confidently answers "two" — wrong] "There it is. Confident. Fluent. Wrong. Three R's. And you already know why — it never saw the letters, just the chunks. *That's* fluent-not-correct, in one screenshot."
If it happens to get it right (newer models sometimes do), have a backup ready: ask it for "three peer-reviewed studies on [oddly specific topic]" and watch it invent plausible-looking citations — then check one. Either way, the lesson is the same and it's *theirs* now, not a claim from a slide.

---

## Facilitator notes

- **The interactive beats use your buffer.** The 🎯 moments add roughly 5–6 min total on top of the slide timings. That's by design — it's what makes the part *land*. If you're tight, the beats are individually droppable; the slides still work without them.
- **Four beats are worth protecting** even when rushed, because they're the ones people remember: the **"you are the autocomplete"** opener (slide 1), the **strawberry test** (set up slide 7, paid off slide 22), the **invented citation** (slide 14, the trust beat for this room), and the **favourite-vote** (slide 16) that reinforces "you're the director."
- **If a beat falls flat / the room's shy:** don't fish. Answer your own question warmly and roll on — "no? alright, the machine bet on 'personal'…". Never let silence sit. The next beat will warm them up.
- **Read the room's energy, not the clock alone.** Public-health + art folks tend to love the taste/vote moments and the gotchas; lean into whichever the room responds to and trim the other.
- **The one running thread:** the **strawberry test**. Plant it once (slide 7), pay it off once (slide 22), don't mention it in between. The hallucination demo on slide 14 uses an *invented citation* precisely so the strawberry stays the single clean live catch.
- **Repeated thread:** every concept here pays off later — predicts → prompting (Part 2), context window → "goes dumb" (Part 2), variations → the build (Part 4), system prompt → the brand block (Part 4). Say "we'll use this" each time so nothing feels academic.
- **The visualise slides are hands-off.** Prompt (café), Context window (desk), Hallucination (citation), API (waiter) and System prompt (pinned rule) each auto-play on entry and replay if you arrow back — like the token and diffusion demos. Just land on the slide and narrate; reference links are in each slide's note (press **N**).

### Running long? (the 30-minute cut)
Doing all eight pairs is ~40–45 min. To get back to ~30 without losing the spine:
- **Protect always:** the autocomplete opener (1), the token visualizer (7), the diffusion variations (16), the closing slide (22) and its strawberry payoff.
- **Compress first (talk over the explainer, let the animation carry it, ~20 sec each):** Prompt (4–5), Context window (8–9), System prompt (19–20).
- **Drop the visualise, keep the explainer** for: Hallucination (keep 13, skip 14 — but it's a strong beat for this audience, so cut it last), API (keep 17, skip 18).
- **Never cut:** the two live visualizers people came for (7, 16) or the closer (22).
- The recap slide (21) is your safety net: even if you compress several pairs, every word still gets named there.
