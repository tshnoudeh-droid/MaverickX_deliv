# TKS Activate · Triple Ignition Challenge · MaverickX

## Germanium Pitch Website: Full Brief and Build Prompt

Everything the team needs to build the pitch site, from why it exists to what each page says.

Part A explains everything from zero: who the site is for, what it must do, and why it is built this way. Read it first.
Part B is the detailed build spec: every page, every section, and what goes in each.
Part C is a paste-ready prompt for Claude Code.

## Part A — Zero to 100

### A1. What we're doing

We're entering the TKS Activate Triple Ignition Challenge. The partner company is MaverickX, a biotech company working with enzymes and siderophores for oil and gas, mining, and water. We have to find our own problem and pitch our own idea. The deliverable is a pitched idea, not a built product.

Our idea: recover germanium from industrial waste (zinc refinery residue and coal fly ash) using MaverickX's existing siderophore.

The submission goes by email to Suman, MaverickX's Principal Scientist. Due Oct 28, 2026, 10pm ET. He reads every submission and picks the top 5 to 7 for finals. The website is what the email points to.

### A2. Who the site is for: Suman (one reader)

The site has exactly one audience. Everything is designed for how he thinks.

He is a scientist turned engineer who believes "biology alone isn't enough." He leads bio R&D and scale-up on a tiny team (2 principal scientists, 2 scientists, a few research assistants).

**He values**
- Harm reduction first, money second.
- One product at a time.
- Stable, recurring revenue (not one-off deals).
- Big, recognizable partners.
- Little extra work for his small team.
- Low risk. Customers willing to pay to test right now.
- Clear logic and reasoning. He expects most ideas to fail, and clear reasoning is what shows promise.

**He dislikes**
- FDA and pharma paths.
- AI hype.
- One-off deals.
- Long testing cycles (weeks to months).

What this means for the site: don't sell, reason. Show him a clear chain of logic he can check. Keep the AI angle as a supporting detail only.

### A3. The core idea: his mind as a series of sieves

Picture Suman's thinking as a stack of sieves. Each sieve has finer holes, meaning a stricter test. Most ideas get caught early. The team that makes it through the last sieve wins.

Instead of making him hunt for answers, our site is laid out in the same order as his sieves. Each section answers the next question he'd ask, then hands him to the page that goes deeper.

| Sieve | His question | Where we answer it |
|---|---|---|
| 1 | Is this worth my attention? | Homepage hook and Why, then Problem page |
| 2 | Does it use what we already have? | Homepage How, then Solution page |
| 3 | Do the economics work? | Homepage What, then Economics page |
| 4 | Is anyone really asking for this? | Homepage proof strip, then Evidence page |
| 5 | Is it low-risk and low-effort for my team? | Homepage reassurance, then Plan page |
| 6 | What happens first? | Plan page and Ask |

### A4. The experience we want

- He opens the homepage and scrolls top to bottom. It gives a surface-level overview of the whole solution, with one idea per screen.
- By the bottom he thinks "this has potential." He's seen a sneak peek of our results, such as the company that said it's interested in testing (Blue Moon).
- He wants the nitty-gritty. Each homepage section links to a deeper page, and each deeper page ends by pointing to the next one. He never has to search for what comes next.
- He ends at the Plan and the Ask, which makes it easy to say yes.

Framework: Why → How → What (homepage), then proof, then plan.

Visual inspiration: superorganism.com. Immersive scroll storytelling with big type, generous space, and content that reveals as you scroll. Use it as a feel, not something to copy.

### A5. What we know and don't know

This matters for honesty.

**Known**
- Under 3% of germanium in zinc ores and fly ash is recovered. The bottleneck is economical extraction.
- China controls about 60% of germanium supply. Its suspension of the US export ban ends Nov 27, 2026.
- Germanium is used in AI hardware and fiber optics.
- MaverickX's siderophore is a metal-grabbing molecule applied as a crude broth at roughly "a few hundred $/kg." It dissolves iron sulfide. It is not yet reusable.
- Suman confirmed MaverickX tested the siderophore on germanium-bearing liquids (zinc refinery residue and fly ash). The results are unknown to us.
- Germanium's high value per kg is why the cost math can work, unlike for iron.
- Potential partners: Teck (Trail, BC, already recovers germanium), Korea Zinc (Clarksville, TN rebuild), US DOE ($75M coal-byproduct critical minerals program). AI companies are the demand story, not direct partners.

**Unknown (never claim otherwise)**
- Whether the siderophore actually recovers germanium well. Present it as a testable hypothesis.
- Our open questions to Suman: (1) How much germanium did the siderophore recover in tests, and was it promising? (2) Would germanium/gallium recovery from zinc residue or fly ash be a direction MaverickX would consider?

**Ideas we already tested and killed**

Use these on the Solution page to show reasoning.

- Data center biofilm cleaning with enzymes. The industry is moving to PG25 glycol, enzyme biofilm cleaners already exist, and it isn't MaverickX's enzyme.
- Produced-water pretreatment for desalination. Target is about $0.10 to $0.20 per barrel, but the siderophore math is about $55+ per barrel for iron alone (single-use). Cheap competitors exist (ZwitterCo about $0.11/bbl, TETRA's patented pretreatment).

**Backup direction**

Mention briefly on the Plan page: keeping saltwater disposal wells open. It's in MaverickX's oil and gas lane, already on their roadmap, and uses the existing product.

### A6. Framing rules

- Say "recovering metals from industrial waste", never "mining." TKS warned against mining ideas, and mining is paused at MaverickX.
- AI is one supporting reason germanium matters. It is never the headline.
- Lead with supply security and turning waste into a resource.
- No pharma or FDA language.
- Always show our reasoning. Include a "what we don't know yet" box. Honesty builds trust with this reader.

## Part B — Build spec

### B1. Tech and structure

- A static, fast, multi-page site. Suggested: plain HTML/CSS/JS, or Next.js/Astro with static export. Pick whatever the team knows. Must deploy easily to Vercel, Netlify, or GitHub Pages.
- Responsive, but design desktop-first (he'll most likely open it on a laptop). Mobile must still work well.
- No backend, no login, no cookies, no tracking banners.
- Fast load. Compress images. Smooth scrolling. Respect prefers-reduced-motion.
- Accessible: semantic HTML, alt text, sufficient contrast, keyboard navigable.

### B2. Site map

```
/                  Homepage (scroll story, 7 sections)
/problem           Page 1: The Problem
/solution          Page 2: The Solution
/economics         Page 3: The Economics
/evidence          Page 4: The Evidence
/plan              Page 5: The Plan and the Ask
```

**Navigation**
- Slim persistent top bar: logo/wordmark on the left, then Problem · Solution · Economics · Evidence · Plan. The current page is highlighted.
- A thin progress indicator (five dots or steps) showing where he is in the sieve journey.
- Every page ends with a large "next →" block that names the next question. This is the primary path. The top nav is only a shortcut.

### B3. Design direction

- Feel: calm, serious, scientific, confident. Not startup-flashy.
- Layout: one idea per screen on the homepage. Big headline type, lots of whitespace, restrained color. Content reveals gently on scroll (fade/translate). Subtle parallax is fine. Nothing that distracts from reading.
- Palette: dark or deep neutral background with one metallic accent (a germanium-silver or cool teal). Keep contrast high.
- Typography: one strong display font for headlines, one clean sans for body. Numbers shown very large.
- Visuals: simple diagrams over stock photos. A hero visual of waste transforming into a recovered metal (illustration or animation). A 3-step process diagram. Charts for economics.
- Tone of copy: plain, short sentences, logical. No hype words.

### B4. Homepage `/`: seven sections, one per screen

**Sieve 1 · attention**

**Section 1: Abstract hook**
- Full-screen. One statement only. Example: "Almost none of the germanium in the world's industrial waste gets recovered."
- Hero visual behind or beside it. A subtle scroll cue ("scroll").
- No link here. Goal: make him keep scrolling.

**Sieve 1**

**Section 2: Why**
- Heading: why this matters now.
- Three big stat moments that appear one at a time:
  - Under 3% of germanium in zinc ores and fly ash is recovered.
  - About 60% of supply is controlled by China.
  - Nov 27, 2026: the date the suspension of China's US export ban ends.
- One supporting line: germanium underpins fiber optics and the hardware behind AI.
- Link button: "See the full problem →" /problem

**Sieve 2**

**Section 3: How**
- Heading: the idea in one sentence. "Take the siderophore MaverickX already makes and point it at a new target."
- Simple 3-step animated diagram: Industrial waste → Siderophore → Recovered germanium.
- Callouts: "Recovery from waste, not mining." "Uses your existing product."
- Link button: "How it works →" /solution

**Sieve 3 · teaser**

**Section 4: What**
- Heading: why germanium works where other targets didn't.
- One comparison visual: value per kg of germanium vs. cost per kg of siderophore, in a simple bar or ratio graphic. Real numbers live on the Economics page. Use placeholder [TODO] here until finalized.
- Link button: "Run the numbers →" /economics

**Sieve 4 · teaser**

**Section 5: Proof sneak peek**
- Heading: "We didn't just think about it. We asked."
- A compact strip with:
  - Headline count: [TODO: X] conversations with [TODO: Y] people/organizations
  - Blue Moon: [TODO: exact wording of Blue Moon's interest in testing; must be accurate]
- Link button: "See who we talked to →" /evidence

**Sieve 5 · teaser**

**Section 6: Low risk, low effort**
- Heading: "Built to be easy to say yes to."
- Three short cards: (1) Uses your existing siderophore. (2) Recurring demand, not a one-off deal. (3) A small first test.
- Link button: "See the plan →" /plan

**Sieve 6**

**Section 7: Closing ask**
- Heading: the one thing we need to know.
- State the two questions (exact wording in A5).
- Primary button: email us (mailto: with [TODO: team email]). Also show the address as plain text. Secondary: "Start with the plan →" /plan.

### B5. Page 1 `/problem`: The Problem

Sieve 1, details. Sections in order:

1. What germanium is and where it's used. Fiber optics, electronics, AI hardware. Short and visual.
2. Where it comes from. Supply concentration, China about 60%, the export-ban timeline with Nov 27, 2026 highlighted on a simple timeline graphic.
3. Where it's lost. Zinc refinery residue and coal fly ash. Under 3% recovered. Explain that the bottleneck is economical extraction.
4. Policy tailwind. US DOE $75M coal-byproduct critical minerals program.
5. Sources list at the bottom. Every number needs a link or citation.

Next block: "So how do we recover it? →" /solution

### B6. Page 2 `/solution`: The Solution

Sieve 2, details.

1. The idea. Expanded version of the homepage How. Waste → siderophore → germanium.
2. What a siderophore is. Plain-language explainer of a metal-grabbing molecule. Written for a scientist, so be accurate and concise.
3. What MaverickX has already done. Siderophore tested on germanium-bearing liquids (zinc refinery residue and fly ash). State clearly that we don't know the results.
4. Why this and not something else. A "what we ruled out" section: biofilm cleaning for data centers, produced-water pretreatment (with the one-line reason for each). Shows reasoning.
5. What we don't know yet box. Reuse, recovery efficiency, selectivity. Present as questions the first test answers.

Next block: "Does it make money? →" /economics

### B7. Page 3 `/economics`: The Economics

Sieve 3.

1. The core comparison. Value per kg of germanium vs. siderophore cost per kg (a few hundred dollars per kg as crude broth). [TODO: final numbers and sources]
2. Why this works when iron didn't. Side-by-side: iron-based desalination pretreatment (about $55+ per barrel vs. target $0.10 to $0.20) vs. germanium (high-value, small volumes).
3. Break-even view. A simple interactive or static chart showing how much germanium must be recovered per kg of siderophore to break even. Show every assumption visibly. Optional: 2 or 3 sliders (germanium price, recovery rate, siderophore cost).
4. Revenue model. Recurring supply arrangements with waste-holders and recovered-metal buyers, not one-off deals.
5. Who's in the chain. Teck, Korea Zinc, US DOE program. AI companies shown as downstream demand only.

Next block: "Does anyone actually want this? →" /evidence

### B8. Page 4 `/evidence`: The Evidence

Sieve 4.

1. The numbers. Total conversations, people, and organizations, with a simple breakdown by type (industry, academic, government, etc.). [TODO]
2. Blue Moon. What they said, in their words if we have permission. Date and context. [TODO: must be accurate]
3. Other signals. Quotes, emails, or notes from other conversations. Only include what we can stand behind.
4. What these conversations told us. 3 to 5 short takeaways.
5. What we still need. Honest list.

Next block: "What would it take to start? →" /plan

### B9. Page 5 `/plan`: The Plan and the Ask

Sieves 5 and 6.

1. The first test. Small, fast, and minimal work for MaverickX's team. Spell out: what sample, what measurement, how long (aim for days, not weeks to months), who does what. [TODO: finalize details]
2. What we need from MaverickX. Specific and small.
3. Risks and how we reduce them. Table: risk, why it matters, mitigation.
4. Path to recurring revenue. From test to pilot to supply agreement, in simple steps.
5. Backup direction. Short card: keeping saltwater disposal wells open, in MaverickX's existing lane.
6. The Ask. Restate the two questions and give a clear email button.

### B10. Reusable components

`PageHeader`, `ProgressDots`, `StatMoment` (big number plus label, reveal on scroll), `ProcessDiagram` (3 steps), `CompareBars`, `SourceList`, `NextBlock` (large link to the next page, labelled with the next question), `CalloutBox` ("what we don't know"), `TeamFooter`.

### B11. Content rules (non-negotiable)

- Every number has a source link or is labelled "assumption."
- Never claim the siderophore works on germanium without a result. Use "hypothesis" and "test" language.
- Say "recovery from industrial waste," never "mining."
- AI is a supporting detail, never the headline.
- Anything marked [TODO] must be replaced before submission. Search the codebase for TODO before launch.
- Keep homepage text minimal. Details live on the deep pages.

### B12. Acceptance checklist

- A reader can go from homepage to Plan using only the "next" links, with no confusion.
- Each homepage section links to exactly one deep page.
- Each deep page ends with a NextBlock naming the next question.
- No unsourced numbers. No [TODO] left.
- Blue Moon wording and conversation counts verified by the team.
- Works at laptop and phone widths. Passes basic accessibility checks.
- Loads fast. Reduced-motion respected.
- Deployed to a public URL that opens without login.
- Email subject and one-line summary written to point to the site.

### B13. Build order

1. Set up project, design tokens (colors, type, spacing), nav, progress dots, NextBlock.
2. Build homepage sections 1 to 7 with placeholder copy.
3. Build the five deep pages with real structure and placeholder data.
4. Fill in copy and numbers (team supplies; replace all [TODO]).
5. Polish animations, responsive layout, accessibility.
6. Deploy, test the URL, run the checklist.

## Part C — Prompt for Claude Code

> You are helping build a persuasive, single-reader pitch website for a student case competition. Read SPEC.md in this folder fully before doing anything. It contains the audience, the reasoning behind the structure, the site map, a page-by-page spec, content rules, and an acceptance checklist.
>
> Summary of the task:
> - Build a static multi-page website with these routes: / (homepage), /problem, /solution, /economics, /evidence, /plan.
> - The one reader is Suman, a scientist at MaverickX. The site mirrors his decision process as a series of "sieves": each section answers his next question and links to a deeper page; each deep page ends with a large "next" block naming the next question.
> - Homepage: a 7-section scroll story (abstract hook, Why, How, What, proof sneak peek, low-risk/low-effort, closing ask), one idea per screen, big type, generous whitespace, gentle reveal-on-scroll animation. Visual feel inspired by superorganism.com but calm, serious, and scientific.
> - Build reusable components listed in the spec (ProgressDots, StatMoment, ProcessDiagram, CompareBars, SourceList, NextBlock, CalloutBox).
>
> How to work:
> 1. Start by proposing the tech setup (static HTML/CSS/JS or a static-export framework) and the design tokens (palette, fonts, spacing) in a short message. Then proceed without waiting unless something is unclear.
> 2. Build in the order given in section B13 of SPEC.md.
> 3. Use the exact structure and headings in SPEC.md. Where the spec says [TODO], leave a visible, searchable [TODO] placeholder. Do NOT invent numbers, quotes, or results. In particular, never state that the siderophore successfully recovers germanium; present it as a hypothesis to be tested, and never fabricate details about Blue Moon or conversation counts.
> 4. Follow the content rules in section B11: "recovery from industrial waste" (never "mining"), AI only as a supporting detail, every number sourced or labelled as an assumption.
> 5. Make it responsive (desktop-first), accessible, fast, and respectful of prefers-reduced-motion.
> 6. When finished, run through the acceptance checklist in B12, list every remaining [TODO], and tell me how to run it locally and how to deploy it.
>
> Ask me before making any decision that changes the structure in SPEC.md.
