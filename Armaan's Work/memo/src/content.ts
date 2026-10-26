/**
 * ALL copy, numbers, quotes and sources live in this file.
 * Layout code (main.ts) must never contain copy.
 *
 * Source of truth: "MaverickX Germanium Pitch: Website Plan" (Oct 24, 2026).
 * Nothing here may be invented. Every number carries a sourceId from SOURCES.
 * Rows the doc labels "our math" / "team estimates" carry estimate: true and
 * must render with the words "our estimate".
 */

/* ------------------------------------------------------------------ types */

export type Permission = "named" | "role-only";

export interface SourceRef {
  id: string;
  /** Exact label as written in the doc's Sources list or Key numbers table. */
  label: string;
  /** Only ever a URL we hold. The doc ships no URLs, so these stay undefined
   *  and footnotes link to the Sources toggle on screen 6 instead. */
  url?: string;
}

export type Block =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "checklist"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][]; note?: string }
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "quoteTable" }
  | { kind: "keyNumbers" }
  | { kind: "sourceList" }
  | { kind: "jumpLinks" }
  | { kind: "note"; text: string };

export interface Toggle {
  summary: string;
  blocks: Block[];
}

export interface NumberCallout {
  value: string;
  label: string;
  sourceId: string;
  estimate?: boolean;
}

export interface TimelineStep {
  marker: string;
  label: string;
  sourceId?: string;
}

export interface CostColumn {
  heading: string;
  rows: { label: string; text: string }[];
  estimate?: boolean;
}

export type Visual =
  | { kind: "video"; src: string; poster: string; alt: string; seconds: string }
  | { kind: "numbers"; items: NumberCallout[] }
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "timeline"; steps: TimelineStep[] }
  | { kind: "quoteCards"; quoteIds: string[] }
  | { kind: "twoColumn"; columns: [CostColumn, CostColumn] }
  | { kind: "checklist"; items: string[] };

export interface Quote {
  id: string;
  name: string;
  /** Verbatim role line from the doc, shown only when permission is "named". */
  role: string;
  /** De-identified descriptor, shown when permission is "role-only". */
  anonRole: string;
  /** Exact wording from the doc. Never paraphrase. */
  words: string;
  /** The doc's "What it validates" column. */
  validates: string;
  permission: Permission;
}

export interface Action {
  label: string;
  mailto: string;
  subject: string;
  body: string;
}

export interface Section {
  id: string;
  n: number;
  icon: string;
  /** Memo section name, from the doc's "The 6 screens" table. */
  headline: string;
  /** Story beat, from the doc's "The 6 screens" table. */
  beat: string;
  /** The <=40 visible words. Exact doc wording. */
  callout: string;
  visuals: Visual[];
  action?: Action;
  toggles: Toggle[];
}

/* ------------------------------------------------------------------ header */

export const meta = {
  title: "Germanium from Titan's waste",
  subtitle:
    "A paid 90-day test of MaverickX's existing siderophore, on a mineral it has already cracked.",
  byline: "Oct 24, 2026 · TKS Triple Ignition",
  forReviewer: "For Suman, Principal Scientist, MaverickX",
  verdict: "Verdict: test it now, decide on scale later",
  oneLiner:
    "In 90 days, at almost no net cost, MaverickX can find out whether its existing siderophore pulls germanium out of Titan's mica waste, a mineral it has already cracked.",
};

export const tocLabel = "On this page";

/* ------------------------------------------------------------------ quotes */

export const quotes: Quote[] = [
  {
    id: "umicore",
    name: "Bendix De Meulemeester",
    role:
      "Director, Marketing & Business Development, Umicore Electro-Optic Materials",
    anonRole: "A director at a major germanium refiner",
    words:
      "We are always interested in new ways to recover metals. Asked for a call and looped in Umicore's head of technology development.",
    validates: "A major germanium refiner wants to hear more",
    permission: "role-only",
  },
  {
    id: "tischler",
    name: "Dirk Tischler",
    role: "Professor, Ruhr University Bochum",
    anonRole: "A professor at a German university",
    words:
      "The problem is that germanium complex is highly stable. By changing pH you might be able to release it.",
    validates: "Siderophores bind germanium; release by pH, alongside EDTA",
    permission: "role-only",
  },
  {
    id: "azimi",
    name: "Gisele Azimi",
    role:
      "Canada Research Chair in Urban Mining, University of Toronto",
    anonRole: "A Canada Research Chair in Urban Mining",
    words:
      "The potential application of siderophores for germanium recovery is certainly worth investigating.",
    validates: "The idea is credible; reuse is the key number",
    permission: "role-only",
  },
  {
    id: "nyabeze",
    name: "Charles Nyabeze",
    role: "EVP Business Development, CEMI; Director, MICA Network",
    anonRole: "An executive at a Canadian mining innovation network",
    words:
      "Called Teck's Trail “likely one of the strongest candidates” for germanium from zinc-processing streams. Listed 10 things a startup must show before a site pilot.",
    validates: "Trail as the right partner; a pilot checklist",
    permission: "role-only",
  },
  {
    id: "alvin",
    name: "Mary Anne Alvin",
    role: "Senior Technology Manager, US DOE critical minerals office",
    anonRole: "A senior technology manager at a US government minerals office",
    words:
      "It's not so much the cost of the reagent … but the over cost of the total system.",
    validates: "Judge total process cost, not just siderophore cost",
    permission: "role-only",
  },
  {
    id: "kaksonen",
    name: "Anna Kaksonen",
    role: "Team Leader, Resource Recovery, CSIRO",
    anonRole: "A resource recovery team leader at a national science agency",
    words:
      "Gave the parts of an early cost model: capital, operating, processing cost per ton, minimum economic grade, sensitivity analysis. Said waste choice depends on composition, mineralogy, particle size and acid consumption.",
    validates: "The cost model to build next",
    permission: "role-only",
  },
  {
    id: "lange",
    name: "Ian Lange",
    role: "Professor, Colorado School of Mines",
    anonRole: "A professor at a US mining school",
    words: "On who pays a premium for non-Chinese germanium: “defense.”",
    validates: "Who the end buyers are",
    permission: "role-only",
  },
];

/* ----------------------------------------------------------------- sources */

export const SOURCES: SourceRef[] = [
  { id: "titan-q2", label: "Titan Q2 2026 corporate update: two processing pathways" },
  { id: "titan-q1", label: "Titan Q1 2026 results: germanium mainly in mica and gangue" },
  { id: "titan-apr", label: "Titan, Apr 16, 2026: discussions with multiple counterparties" },
  { id: "titan-jul", label: "Titan, Jul 7, 2026: district-wide enrichment, mineralogy studies underway" },
  { id: "hzdr", label: "HZDR (GeoSaxonia 2024): DFOB captures Ga and Ge, EDTA releases >90%" },
  { id: "goldschmidt", label: "Goldschmidt 2023: siderophore recovery of critical metals from mining residues" },
  { id: "cordis", label: "CORDIS: GaLIophore project, 10 capture-release cycles" },
  { id: "iit", label: "IIT Delhi thesis: DFOB recovered ~44% Ga with 53 mg/L iron" },
  { id: "titan-teck", label: "Titan Mining: cooperation agreement with Teck (May 13, 2026)" },
  { id: "marketscreener", label: "MarketScreener: Titan–Teck agreement scope" },
  { id: "mining-com", label: "Mining.com: Titan, Teck team up on germanium" },
  { id: "mtn-empire", label: "Metal Tech News: Titan evaluates Empire State germanium" },
  { id: "smm-district", label: "SMM: Titan district-wide germanium, ~$78M/yr" },
  { id: "teck-trail", label: "Teck: Strategic Investment Agreement for Trail (Jul 7, 2026)" },
  { id: "cp-400m", label: "Canadian Press: Ottawa to invest up to $400M in Trail" },
  { id: "usgs", label: "USGS Mineral Commodity Summaries 2026: Germanium" },
  { id: "payne", label: "Payne Institute: North American germanium supply chain" },
  { id: "sp-global", label: "S&P Global: Germanium Market Report (Aug 2026)" },
  { id: "mmta", label: "MMTA/Fastmarkets: AI and defence boost germanium demand" },
  { id: "mtn-allies", label: "Metal Tech News: Allies race to rebuild germanium supply" },
  { id: "evertiq", label: "Evertiq: China suspends gallium and germanium ban to Nov 27, 2026" },
  { id: "skillings", label: "Skillings: Gallium and germanium 12 months after export controls" },
  { id: "penn-state", label: "Penn State: Germanium review, <3% recovered" },
  { id: "mdpi", label: "MDPI: Germanium recovery, tannin dose" },
  { id: "cdc", label: "CDC/US Bureau of Mines: germanium recovery from leach solutions" },
  { id: "patent", label: "Patent: low-grade germanium concentrate costs" },
  { id: "geosaxonia", label: "GeoSaxonia 2024: GaLIophore siderophore recovery of Ga and Ge" },
  { id: "era-learn", label: "ERA-LEARN: SIDEREC siderophore project" },
  { id: "optica", label: "Optica: NVIDIA co-packaged optics for AI factories" },
  { id: "3dtested", label: "3DTested: NVIDIA says CPO a requirement for AI data centers" },
  { id: "rnm", label: "Research and Markets: germanium in silicon photonics" },
  { id: "navitas", label: "Navitas: GaN for NVIDIA 800V HVDC" },
  { id: "st", label: "ST: 800V HVDC power boards for AI data centers" },
  { id: "smm-weekly", label: "SMM: Germanium weekly review, Oct 10, 2026" },
  { id: "dcd", label: "DCD: Corning and Meta $6B fiber deal" },
  {
    id: "suman",
    label:
      "Suman's call transcript and emailed follow-up answers (siderophore cost, germanium tests, reuse, email preference)",
  },
  { id: "our-math", label: "Our math — team estimate, not verified" },
];

/* ------------------------------------------- key numbers (verified) table */

export const keyNumbers: { claim: string; number: string; sourceId: string; estimate?: boolean }[] = [
  { claim: "China's share of germanium supply", number: "~60%", sourceId: "skillings" },
  { claim: "US germanium metal imports, 2024 → 2025", number: "21,000 → 7,000 kg (−67%)", sourceId: "payne" },
  { claim: "US primary germanium refinery production, 2025", number: "None", sourceId: "mtn-allies" },
  { claim: "China's US export-ban pause ends", number: "Nov 27, 2026", sourceId: "evertiq" },
  { claim: "Germanium price, USGS 2025 average", number: "$4,100/kg", sourceId: "payne" },
  { claim: "Germanium price, Western spot Jun–Jul 2026", number: "$6,150–6,250/kg", sourceId: "payne" },
  { claim: "Germanium in zinc ores and fly ash actually recovered", number: "<3%", sourceId: "penn-state" },
  { claim: "Germanium Titan and Teck are evaluating", number: "up to ~13,000 kg/yr contained", sourceId: "mtn-empire" },
  { claim: "Value of that germanium at $6,000/kg", number: "~$78M/yr", sourceId: "smm-district" },
  { claim: "Titan's grades", number: "~21 g/t in plant feed, ~77 g/t in some pre-flotation streams", sourceId: "smm-district" },
  { claim: "Last USGS estimate of US germanium use", number: "~30,000 kg/yr (about 2021)", sourceId: "usgs" },
  { claim: "Titan's waste vs. last US use estimate", number: "roughly 40%", sourceId: "our-math", estimate: true },
  { claim: "Meta–Corning fiber deal", number: "up to $6B through 2030", sourceId: "dcd" },
  { claim: "Canada's support for Trail germanium", number: "hundreds of millions of dollars (reported)", sourceId: "mtn-allies" },
  { claim: "MaverickX siderophore cost", number: "“a few hundred dollars” per kg", sourceId: "suman" },
];

/* ---------------------------------------------------------------- sections */

export const sections: Section[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    id: "conclusion",
    n: 1,
    icon: "\u{1F4CC}",
    headline: "Executive conclusion",
    beat: "Trapped",
    callout:
      "Up to 13,000 kg of germanium a year sits in one mine's waste. You've already cracked the mineral it hides in. A paid 90-day test tells you if it works.",
    visuals: [
      {
        kind: "video",
        src: "/video/hero.mp4",
        poster: "/img/hero-poster.svg",
        alt: "Aerial dawn shot over flat grey mine tailings ponds, the camera descending into a single grain of layered mica with one glowing atom inside.",
        seconds: "6–8 s loop",
      },
      {
        kind: "numbers",
        items: [
          {
            value: "13,000 kg",
            label: "Germanium a year Titan and Teck are evaluating, contained in waste (“up to”)",
            sourceId: "mtn-empire",
          },
          {
            value: "98.5%",
            label: "Of the lithium MaverickX's siderophore released from lepidolite, a mica",
            sourceId: "suman",
          },
          {
            value: "90 days",
            label: "Paid bench test, three go/no-go gates, about one scientist part-time",
            sourceId: "suman",
          },
        ],
      },
    ],
    toggles: [
      {
        summary: "The whole memo in one paragraph",
        blocks: [
          {
            kind: "p",
            text: "Worth testing now, not yet worth scaling. A 90-day test costs MaverickX roughly nothing net (the customer pays), uses their existing siderophore, and builds on a mica-leaching result they already have. Three go/no-go gates decide whether to go further.",
          },
          { kind: "p", text: meta.oneLiner },
          { kind: "jumpLinks" },
        ],
      },
      {
        summary: "The story in six beats",
        blocks: [
          {
            kind: "list",
            items: [
              "The opening: Titan has up to ~13,000 kg/yr of germanium in its waste and is choosing a recovery partner now.",
              "You've done the hard part: the germanium sits in mica, and your siderophore already released 98.5% of the lithium from lepidolite, a mica.",
              "The chemistry is known: siderophores capture germanium, EDTA releases over 90% and regenerates them, and 10 reuse cycles have been shown.",
              "What's left to prove: iron competition, release and reuse on your siderophore, and Teck's feed spec.",
              "The test: 90 days, 3 gates, customer-paid, about one scientist part-time.",
              "The payoff: ~$3.9–7.8M/yr in royalties if it works, a second revenue line, and a paid way back into mining.",
            ],
          },
        ],
      },
      {
        summary: "Why this one fits MaverickX",
        blocks: [
          {
            kind: "list",
            items: [
              "Uses their existing product, no new science",
              "Paid testing up front, so low risk (“we have customers willing to pay to test right now”)",
              "Big recognizable partners: Titan, Teck, Corning",
              "Harm reduction: a biological alternative to mineral acids",
              "Clear reasoning path: he said that's what he looks for in a pitch, so the site shows the ideas we killed and why",
            ],
          },
          { kind: "note", text: "From Suman's own call and email answers." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "opportunity",
    n: 2,
    icon: "\u{1F5D3}️",
    headline: "The opportunity",
    beat: "Why it matters now",
    callout:
      "Titan is choosing a recovery partner now, via Teck's Trail or a partnered hydromet plant. China's export pause ends Nov 27.",
    visuals: [
      {
        kind: "timeline",
        steps: [
          { marker: "Apr 2026", label: "Titan in discussions with multiple counterparties", sourceId: "titan-apr" },
          { marker: "May 2026", label: "Titan–Teck cooperation agreement", sourceId: "titan-teck" },
          { marker: "Jul 2026", label: "Mineralogy studies underway to pick the most capital-efficient route", sourceId: "titan-jul" },
          { marker: "Q2 2026", label: "Two processing pathways evaluated at once: Teck's Trail, or an owned or partnered hydromet facility", sourceId: "titan-q2" },
          { marker: "Nov 27, 2026", label: "China's US export-ban pause ends", sourceId: "evertiq" },
        ],
      },
    ],
    toggles: [
      {
        summary: "Titan's facts, and why the partner slot is open now",
        blocks: [
          {
            kind: "p",
            text: "Titan is evaluating two processing pathways at once, a concentrate route to Teck's Trail and an “owned or partnered hydrometallurgical facility” (Titan Q2 2026). It's already in discussions with multiple counterparties (Titan, Apr 2026) and running mineralogy studies to pick the most capital-efficient route (Titan, Jul 2026). The partner slot is open now; it may not be in 6–12 months.",
          },
          {
            kind: "table",
            headers: ["Tailings facility", "Size", "Germanium grade", "Germanium contained"],
            rows: [
              ["Edwards", "4.98 million t", "30.1–44.7 ppm (2 samples)", "~150–220 t"],
              ["No. 4", "~18.8 million short tons (~17 million t)", "18.1–31.3 ppm (5 samples)", "~310–530 t"],
            ],
            note: "Our rough math from 7 samples; not a resource estimate. Grades and sizes from Metal Tech News. For scale, global germanium demand was about 343 t in 2025 (S&P Global). Only part would ever be recoverable, but two ponds may hold more than a year of world demand.",
          },
        ],
      },
      {
        summary: "The squeeze: China's share, prices, and who buys",
        blocks: [
          {
            kind: "list",
            items: [
              "In the US, the biggest germanium uses are, in order: fiber optics, infrared optics, then semiconductors and solar cells (USGS).",
              "European germanium prices kept rising in 2026 on reduced China exports, AI infrastructure demand and defense buying (MMTA/Fastmarkets).",
              "Counterpoint to name on the site: high prices are already pushing some buyers to substitutes, mainly in infrared optics and solder (MMTA/Fastmarkets). Fiber and photonics are the stickier demand, which is why we lead with AI.",
            ],
          },
          { kind: "p", text: "On who pays a premium for non-Chinese germanium: “defense.”" },
        ],
      },
      {
        summary: "Every number on this page, with its source",
        blocks: [{ kind: "keyNumbers" }],
      },
      {
        summary: "Background: why the demand holds",
        blocks: [
          {
            kind: "p",
            text: "AI's bottleneck is moving data and power between chips, and both fixes run on metals China controls: germanium for light (fiber and photonics) and gallium for power (GaN chips). NVIDIA, AMD and the AI labs aren't MaverickX's customers; they're the demand that makes the germanium worth recovering.",
          },
          {
            kind: "table",
            headers: ["Metal", "Where it goes in AI hardware", "Who's building with it", "Why it matters"],
            rows: [
              [
                "Germanium",
                "Core of optical fiber, raising its refractive index",
                "Corning, under Meta's up to $6B fiber deal through 2030 (DCD)",
                "Fiber is the largest germanium use: 142 t in 2026, peaking at 153 t in 2030 (S&P Global)",
              ],
              [
                "Germanium",
                "Photodetectors in silicon photonics and co-packaged optics",
                "NVIDIA Quantum-X and Spectrum-X Photonics switches, with TSMC and Corning in its ecosystem (Optica)",
                "Silicon photonics platforms use germanium photodetectors (Research and Markets); NVIDIA calls co-packaged optics a structural requirement for future AI data centers (3DTested)",
              ],
              [
                "Gallium",
                "GaN power transistors in 800V DC server racks",
                "NVIDIA's 800V HVDC program with Navitas, Innoscience, Power Integrations and ST (Navitas; ST)",
                "China controls ~98% of gallium production (Skillings)",
              ],
            ],
            note: "Two germanium paths feed AI today; the gallium path is a later extension of the same tool. Ask Suman before pitching it.",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "easy",
    n: 3,
    icon: "\u{1F9EA}",
    headline: "Why it's easy for you",
    beat: "Freed",
    callout:
      "The germanium hides in mica. Your siderophore released 98.5% of the lithium from lepidolite, a mica. Capture and release are already shown in research.",
    visuals: [
      {
        kind: "video",
        src: "/video/mica.mp4",
        poster: "/img/mica-poster.svg",
        alt: "Extreme macro of translucent layered mica sheets, small molecules pulling at the edges, the sheets separating and a glowing atom floating out.",
        seconds: "4–6 s loop",
      },
    ],
    toggles: [
      {
        summary: "Effort scorecard: what MaverickX already has",
        blocks: [
          {
            kind: "p",
            text: "Three of eight pieces are already in place, three need a test, and two are hard. One of the hard ones (iron) gets tested inside the 90 days; the other (making it at volume) only matters after the gates pass.",
          },
          {
            kind: "table",
            headers: ["Requirement", "What MaverickX already has", "What's missing", "Effort"],
            rows: [
              [
                "A product to test",
                "A siderophore in production as crude broth, “a few hundred dollars” per kg (Suman)",
                "Nothing",
                "Low",
              ],
              [
                "Getting germanium out of the rock",
                "Titan's germanium sits mainly in mica (Titan Q1 2026). Their siderophore released 98.5% of the lithium from lepidolite, a mica, by pulling aluminium and iron out of the mineral (Suman)",
                "Same test on Titan's mica tailings",
                "Low",
              ],
              [
                "Capturing germanium from the liquid",
                "Tested on germanium-bearing liquids, results unknown. Research: the siderophore DFOB binds germanium best at acidic pH with chloride present (HZDR)",
                "Which siderophore they used, and the capture % on Titan's liquid",
                "Medium",
              ],
              [
                "Iron getting in the way",
                "Siderophores evolved to grab iron. In one study, DFOB recovered only ~44% of gallium from a liquid with 53 mg/L iron (IIT Delhi)",
                "Remove iron first, or tune pH to favour germanium",
                "High",
              ],
              [
                "Releasing germanium and reusing the siderophore",
                "“In the works” (Suman). Research: EDTA at pH 3.5 releases over 90% of gallium and germanium and regenerates DFOB (HZDR); 10 capture-and-release cycles were run for gallium (CORDIS)",
                "Test that recipe on their siderophore",
                "Medium",
              ],
              [
                "Measuring results",
                "They already outsource lab analysis (~$500 per 10 HPLC samples, Suman)",
                "Outside germanium assays, same model",
                "Low",
              ],
              [
                "Making it at volume",
                "A prototype bioreactor up to 750 L (Suman)",
                "About 10–250 t/yr of siderophore at full scale (10× reuse to single use), so a contract manufacturer",
                "High",
              ],
              [
                "Fitting Teck's refinery",
                "Nothing yet",
                "Teck's minimum feed spec, which Titan and Teck are defining now (MarketScreener)",
                "Medium",
              ],
            ],
          },
          {
            kind: "p",
            text: "The biggest ease signal: the hardest part of most germanium projects is getting it out of the rock, and MaverickX has already done that on a mica. The biggest risk: the same iron-grabbing that breaks the mica down can crowd germanium out at the capture step.",
          },
        ],
      },
      {
        summary: "The recovery route, and where MaverickX fits",
        blocks: [
          {
            kind: "image",
            src: "/img/recovery-route.svg",
            alt: "Four-step recovery route from zinc ore to refined germanium, with MaverickX's siderophore replacing the capture step.",
            caption:
              "MaverickX doesn't replace Teck's refinery; it upgrades Titan's dilute liquid into a concentrate Trail can take.",
          },
          {
            kind: "list",
            items: [
              "Zinc ore is mined and milled. Germanium tags along as a trace, about 21 g/t in Titan's plant feed (SMM).",
              "Residue is leached with strong mineral acids to get germanium into a liquid (Penn State).",
              "Germanium is captured from that dilute liquid. The standard method, tannin precipitation, needs at least 8–10 g of tannin per g of germanium, sometimes over 300 g (MDPI). The alternative, hydrogen sulfide, is hazardous (CDC/USBM).",
              "The concentrate is chlorinated and distilled in strong hydrochloric acid into germanium tetrachloride, then refined. For low-grade concentrates (under 1% germanium), acid and lime use climbs and wastewater can fail emission standards (patent).",
            ],
          },
          {
            kind: "p",
            text: "Germanium is never mined on its own. It's scraped out of zinc processing with harsh chemistry, and less than 3% of what's in zinc ores and fly ash is ever recovered (Penn State). MaverickX's opening is the step that decides the cost: pulling tiny amounts of germanium out of a dilute liquid.",
          },
        ],
      },
      {
        summary: "The science already points this way",
        blocks: [
          {
            kind: "p",
            text: "A Helmholtz research team built “GaLIophore,” which uses the siderophore DFOB to selectively capture gallium and germanium from industrial wastewater, forming highly stable complexes (GeoSaxonia 2024). An EU project found siderophores bind gallium, indium and germanium selectively even at very low concentrations (ERA-LEARN). Academics have the chemistry; MaverickX has what they lack: a team that produces siderophores at scale.",
          },
          {
            kind: "p",
            text: "Honest comparison with tannin: by mass, siderophore use (8–19 g per g germanium, single use) is similar to tannin (8–10 g). Tannin is a cheap commodity, so MaverickX has to win on selectivity (a cleaner concentrate means less acid downstream) or reuse, not on price per kg.",
          },
          { kind: "sourceList" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "experts",
    n: 4,
    icon: "\u{1F4AC}",
    headline: "What experts told us",
    beat: "Believed",
    callout:
      "We emailed more than 30 people across refiners, mining networks, labs and government; 10 replied between Oct 23 and 26. Their answers back the core idea, add two candidate sites, and tighten the 90-day test.",
    visuals: [{ kind: "quoteCards", quoteIds: ["umicore", "tischler", "azimi"] }],
    toggles: [
      {
        summary: "The full validation table",
        blocks: [{ kind: "quoteTable" }],
      },
      {
        summary: "What it changed in our plan",
        blocks: [
          {
            kind: "list",
            items: [
              "The 90-day test gets four MICA items it didn't cover: a full mass balance (where every metal ends up), testing against zinc, lead, cadmium and arsenic as well as iron, environmental and biosafety checks, and a scale-up and IP plan.",
              "Cost is shown for the whole process, not just siderophore per kg.",
              "Two backup sites beyond Titan, from Nyabeze: Glencore's CEZinc in Quebec and the Winston Mine tailings near Thunder Bay.",
              "Release has two routes to test: EDTA at low pH (HZDR) and a simple pH shift (Tischler).",
            ],
          },
          {
            kind: "note",
            text: "The doc records that MICA listed 10 things a startup must show before a site pilot, but names only the four items above. The remaining six are not in our source, so they are not reproduced here.",
          },
        ],
      },
      {
        summary: "Before we publish their names",
        blocks: [
          {
            kind: "p",
            text: "These were private emails. Send each person a one-line note asking if they're OK being quoted to MaverickX; anyone who doesn't answer gets their role only (“a director at a major germanium refiner”).",
          },
          {
            kind: "note",
            text: "Every quote on this page is set to role-only in content.ts until permission comes back. Flip permission to “named” per person to reveal a name.",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "test",
    n: 5,
    icon: "\u{1F6A6}",
    headline: "The test and the math",
    beat: "Tested",
    callout:
      "90 days, three gates; stop if any fails. Roughly zero net to try. $3.9–7.8M a year if it works.",
    visuals: [
      {
        kind: "image",
        src: "/img/gates.svg",
        alt: "Three sequential go/no-go gates across a 90-day test: 50% germanium release, capture from the leach liquid, then 90% release with 3 or more reuses.",
        caption:
          "The test is built so the expensive question (making siderophore at volume) is never asked until three cheap questions are answered.",
      },
      {
        kind: "twoColumn",
        columns: [
          {
            heading: "90-day test",
            estimate: true,
            rows: [
              { label: "Cash out", text: "~$30–80k: scientist time, small siderophore batches, outside germanium assays" },
              { label: "Cash in", text: "Test fee from Titan, ~$25–75k" },
              { label: "Team time", text: "~1 scientist, part-time, 12 weeks" },
              { label: "Worst case", text: "Lose the gap between cost and fee, a few $10k at most" },
              { label: "Strategic gain", text: "Real data on Titan's mica; back into mining with a paying partner" },
            ],
          },
          {
            heading: "If it works and scales",
            estimate: true,
            rows: [
              { label: "Cash out", text: "Siderophore made by a contract manufacturer, paid for by the customer" },
              { label: "Cash in", text: "5–10% royalty, ~$3.9–7.8M/yr at $6,000/kg on 13,000 kg/yr, plus siderophore sales" },
              { label: "Team time", text: "Grows with volume; routine testing shifts to the customer" },
              { label: "Worst case", text: "Gates stop it before big spending" },
              { label: "Strategic gain", text: "A second revenue line beside oil and gas" },
            ],
          },
        ],
      },
    ],
    toggles: [
      {
        summary: "Gate thresholds, and why those numbers",
        blocks: [
          {
            kind: "p",
            text: "Why these thresholds: Gate 1 at 50% means at least half the germanium is reachable, enough to justify capture work. Gate 3's 90% release matches what the HZDR team reached with DFOB, and 3+ reuses brings single-use pyoverdine's ~$5,800/kg cost under ~$1,900/kg of germanium, below even China's price.",
          },
          {
            kind: "p",
            text: "Expected value, roughly: even at a 10% chance of success, 0.1 × $3.9M/yr ≈ $390k/yr of expected royalty, against a test that pays for itself.",
          },
        ],
      },
      {
        summary: "Who does what",
        blocks: [
          {
            kind: "list",
            items: [
              "Titan: ships tailings and mica concentrate samples, pays the test fee, shares its mineralogy data.",
              "MaverickX: runs bench leach, capture and release tests with its existing siderophore; outsources germanium assays.",
              "Teck: tells us the minimum feed spec and checks the small concentrate from weeks 9–12.",
            ],
          },
          {
            kind: "p",
            text: "Fits Suman's rule that the deciding factor is “the amount of work I have to do”: Titan supplies samples and pays, Teck judges the final concentrate, and MaverickX runs bench tests it already knows how to run.",
          },
        ],
      },
      {
        summary: "Siderophore cost per kg of germanium recovered",
        blocks: [
          {
            kind: "table",
            headers: ["Case", "Siderophore needed per kg Ge", "Cost per kg Ge", "Margin at $6,000/kg (Western)", "Margin at ~$3,800/kg (China)"],
            rows: [
              ["Small siderophore, single use", "~8 kg", "~$2,400", "~$3,600", "~$1,400"],
              ["Pyoverdine, single use", "~19 kg", "~$5,800", "~$200", "loses ~$2,000"],
              ["Small siderophore, reused 10×", "~0.8 kg", "~$240", "~$5,760", "~$3,560"],
              ["Pyoverdine, reused 10×", "~1.9 kg", "~$580", "~$5,420", "~$3,220"],
            ],
            note: "Our estimate; assumes $300/kg siderophore, 1:1 binding, 100% capture, so real numbers will be worse. The China price is approximate (27,250 yuan/kg on Oct 9, 2026, converted at ~7.1 yuan per dollar; SMM).",
          },
          {
            kind: "p",
            text: "The takeaway: reused, it works at any price. Single-use pyoverdine only breaks even at Western prices. Suman said reuse is “in the works,” so the 90-day test is exactly how to find out.",
          },
        ],
      },
      {
        summary: "The 3-step offer and economics",
        blocks: [
          {
            kind: "list",
            items: [
              "Now: a paid 90-day lab test on Titan's waste samples, estimated $25–75k.",
              "2027–28: a paid on-site pilot, cost shared by Titan and government grants.",
              "2029+: siderophore supply plus a 5–10% royalty: ~$3.9–7.8M/yr at $6,000/kg on 13,000 kg (our estimate).",
            ],
          },
          {
            kind: "p",
            text: "MaverickX's own cost per phase (team estimates, not verified): 90-day test ~$30–80k, roughly covered by the test fee; pilot ~$0.5–2M, mostly covered by Titan and grants; full scale needs siderophore production at volume, best done through a contract manufacturer so MaverickX doesn't build a plant.",
          },
          {
            kind: "p",
            text: "The offer is low-risk because each step pays before the next. But at full scale, siderophore reuse decides whether this makes money, so the site should pitch the test as the way to find out, not claim it already works.",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "risks",
    n: 6,
    icon: "✅",
    headline: "Risks and next steps",
    beat: "Delivered",
    callout:
      "Iron is the main risk, so we test it first. Next: Titan samples, the Umicore call, Teck's feed spec.",
    visuals: [
      {
        kind: "checklist",
        items: [
          "Titan samples: tailings and mica concentrate",
          "The Umicore call, with their head of technology development",
          "Teck's minimum feed spec",
        ],
      },
    ],
    action: {
      label: "Run the test",
      mailto: "suman@maverickx.com",
      subject: "Germanium from Titan's waste: the 90-day test",
      body:
        "Suman — happy to run the paid 90-day bench test on Titan's mica tailings with your existing siderophore. Three gates, about one scientist part-time. What's the best next step?",
    },
    toggles: [
      {
        summary: "Risks and honest caveats",
        blocks: [
          {
            kind: "table",
            headers: ["Risk", "Why it matters", "How we handle it in the pitch"],
            rows: [
              ["We don't know Suman's germanium test results", "The whole idea rests on the siderophore actually capturing germanium", "Ask him before sending (next section); if results were poor, pivot the site to the backup idea"],
              ["Germanium is in solids, siderophore works on liquids", "Titan's germanium sits in non-sulfide waste material, so it must be leached first", "Pitch MaverickX as the capture step on the leach liquid; ask if that matches their tests"],
              ["Siderophore isn't reusable yet", "Single-use pyoverdine barely breaks even (table above)", "Frame the 90-day test as the way to measure reuse"],
              ["Tannin is cheap", "By mass, siderophore use is similar to tannin, and tannin is a commodity", "Win on selectivity (cleaner concentrate, less acid downstream) and reuse, not price per kg"],
              ["The research siderophore may not be theirs", "Published germanium work uses DFOB; MaverickX's main siderophore may be pyoverdine", "Ask Suman which one they tested and how it compares"],
              ["High prices cause substitution", "Buyers are already swapping germanium out of some infrared optics and solder", "Lead with fiber and photonics, where demand is stickier"],
              ["Titan already has a partner", "Teck is evaluating the recovery path with Titan", "Pitch MaverickX as a supplier into that path, not a competitor to Teck"],
              ["It's mining-adjacent", "TKS warned against mining ideas, and MaverickX paused mining", "Frame it as “recovering metals from existing waste,” paid from day one"],
              ["13,000 kg isn't proven", "Titan's samples are too small to establish a resource", "Always say “up to” and “being evaluated”"],
            ],
          },
        ],
      },
      {
        summary: "Open questions for Suman",
        blocks: [
          {
            kind: "p",
            text: "Email these today. Answers to 1 and 2 decide whether scene 4 makes a claim or stays a hypothesis.",
          },
          {
            kind: "checklist",
            items: [
              "How much germanium did your siderophore capture in the germanium-bearing liquid tests, and was it promising?",
              "Which siderophore did you test on germanium: pyoverdine, or a hydroxamate like DFOB?",
              "Beyond lepidolite, have you leached any other mica? Titan's germanium sits mainly in mica.",
              "How much iron can be present before your siderophore stops capturing other metals well?",
              "Have you tried EDTA at low pH to release metals and reuse the siderophore?",
              "Roughly how much siderophore does it take per kg of metal captured, and how much can you produce a year today?",
              "Have you tried it on gallium? Gallium mimics iron, so it may bind even better.",
              "Would a paid 90-day test with a mine like Titan be something MaverickX would take on, and roughly how many scientist-hours would it take?",
            ],
          },
        ],
      },
      {
        summary: "How we got here: two ideas the numbers killed",
        blocks: [
          {
            kind: "list",
            items: [
              "Claiming it already works. Single-use pyoverdine needs ~19 kg per kg of germanium, about $5,800/kg, which leaves ~$200 of margin at Western prices and loses ~$2,000 at China's. So we pitch the test as the way to find out, not the result.",
              "Beating tannin on price. By mass, siderophore use (8–19 g per g germanium) is similar to tannin (8–10 g), and tannin is a cheap commodity. So we win on selectivity and reuse, or not at all.",
            ],
          },
          {
            kind: "p",
            text: "Five numbers in our earlier research needed fixing before any of it went on the site:",
          },
          {
            kind: "table",
            headers: ["#", "What we said", "What's actually true", "Fix"],
            rows: [
              ["1", "Titan throws away 13,000 kg of germanium a year", "13,000 kg/yr is contained germanium Titan and Teck are evaluating. Samples are too small to establish a resource (Metal Tech News)", "Say “up to ~13,000 kg/yr contained”"],
              ["2", "About 43% of US use", "The 30,000 kg US-use figure is USGS's last published estimate, about 2021 (USGS)", "Say “roughly 40% of the last estimated US use”"],
              ["3", "8 kg siderophore per kg germanium", "Only true for a small siderophore (~580 g/mol). Pyoverdine is ~1,400 g/mol, so ~19 kg per kg germanium at 1:1 binding (our math)", "Show the range 8–19 kg; reuse is the make-or-break number"],
              ["4", "Germanium at $3,500–8,600/kg", "Western spot ran $6,150–6,250/kg in Jun–Jul 2026; USGS 2025 average was $4,100 (Payne Institute)", "Use $6,000/kg as the base case, show the range"],
              ["5", "Germanium sits in mica", "Sources only confirm it's “not associated with the primary zinc sulfide” (Titan release)", "Drop “mica” unless we have the SEC filing open"],
            ],
            note: "Also unverified: Titan being “in discussions with multiple counterparties.” Keep it only if we link the filing it came from.",
          },
        ],
      },
      {
        summary: "Sources",
        blocks: [{ kind: "sourceList" }],
      },
    ],
  },
];

/** Max visible words outside toggles, per section. Dev-time check in main.ts. */
export const MAX_VISIBLE_WORDS = 40;
