/**
 * ALL copy lives here. Layout files (main.ts, components/*) contain no words.
 *
 * Source of truth: "MaverickX Germanium Pitch: Website Plan" (Claude Doc,
 * Oct 24, 2026). Nothing here is invented. Every number is a `Num` that
 * links to a source in SOURCES, or to the panel holding our own math
 * (estimates always carry estimate: true and render "our estimate").
 *
 * Fields marked TODO(team) are not in the doc and need a human answer.
 */

/* ================================================================ types */

export type Permission = "named" | "role-only";

export type SourceId = keyof typeof SOURCES;
export type PanelId = "test" | "math" | "next";

/** A number shown on the page. It always links somewhere. */
export interface Num {
  t: string;
  /** A source id, or a panel id when the number is our own math. */
  src: SourceId | PanelId;
  estimate?: boolean;
}

/** Inline text: plain strings mixed with linked numbers. */
export type Rich = (string | Num)[];

export interface Chip {
  label: string;
  src?: SourceId | PanelId;
}

export interface PeekCard {
  id: "mica" | "molecule" | "flask";
  label: string;
  title: string;
  line: Rich;
  chipsLabel: string;
  chips: Chip[];
  bg: string;
  cutout: string;
  alt: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  org: string;
  /** Exact words in quotation marks in the doc. Never paraphrase. */
  words?: string;
  /** The doc's own non-quoted framing, shown without quote marks. */
  context?: string;
  validates: string;
  permission: Permission;
  img: string;
}

export type Block =
  | { kind: "h"; text: string }
  | { kind: "p"; text: Rich }
  | { kind: "list"; items: Rich[] }
  | { kind: "todo"; items: string[] }
  | { kind: "table"; head: string[]; rows: Rich[][]; note?: Rich }
  | { kind: "gates"; phases: Phase[]; footer: string; subtitle: string };

export interface Phase {
  weeks: string;
  name: string;
  steps: string[];
  gate: string;
  pass: string;
}

export interface Panel {
  id: PanelId;
  label: string;
  title: string;
  teaser: string;
  open: string;
  blocks: Block[];
}

export interface Video {
  src: string;
  poster: string;
  alt: string;
}

/* ============================================================== sources */

export const SOURCES = {
  "titan-q2": {
    label: "Titan Q2 2026 corporate update: two processing pathways",
    url: "https://www.titanminingcorp.com/_resources/presentations/2026-Titan-Mining-Quarterly-Update-Presentation-Q2-2026.pdf",
  },
  "titan-q1": {
    label: "Titan Q1 2026 results: germanium mainly in mica and gangue",
    url: "https://wwww.stockwatch.com/News/Item/Z-C!TI-3819483/C/TI",
  },
  "titan-apr": {
    label: "Titan, Apr 16, 2026: discussions with multiple counterparties",
    url: "https://titanminingcorp.com/_resources/news/2026-04-16-nr-titan.pdf",
  },
  "titan-jul": {
    label: "Titan, Jul 7, 2026: district-wide enrichment, mineralogy studies underway",
    url: "https://titanminingcorp.com/_resources/news/nr-20260707.pdf",
  },
  hzdr: {
    label: "HZDR (GeoSaxonia 2024): DFOB captures Ga and Ge, EDTA releases >90%",
    url: "https://www.dggv.de/e-publikationen/siderophore-assisted-recycling-of-gallium-and-germanium-from-their-low-concentrated-wastewaters/",
  },
  goldschmidt: {
    label: "Goldschmidt 2023: siderophore recovery of critical metals from mining residues",
    url: "https://goldschmidtabstracts.info/2023/15591.pdf",
  },
  cordis: {
    label: "CORDIS: GaLIophore project, 10 capture-release cycles",
    url: "https://cordis.europa.eu/project/id/704852/reporting/fr",
  },
  iit: {
    label: "IIT Delhi thesis: DFOB recovered ~44% Ga with 53 mg/L iron",
    url: "https://ir.iitd.ac.in/bitstreams/0dd50c2e-f929-44c0-81d8-951971a3558b/download",
  },
  "titan-teck": {
    label: "Titan Mining: cooperation agreement with Teck (May 13, 2026)",
    url: "https://www.titanminingcorp.com/_resources/news/2026-05-13-nr-titan.pdf",
  },
  marketscreener: {
    label: "MarketScreener: Titan–Teck agreement scope",
    url: "https://in.marketscreener.com/news/titan-mining-corporation-and-teck-resources-limited-enter-cooperation-agreement-to-evaluate-germaniu-ce7f5bdcd88ff125",
  },
  "mining-com": {
    label: "Mining.com: Titan, Teck team up on germanium",
    url: "https://www.mining.com/?p=1206108",
  },
  "mtn-empire": {
    label: "Metal Tech News: Titan evaluates Empire State germanium",
    url: "https://www.metaltechnews.com/story/2026/07/08/tech-metals/titan-evaluates-empire-state-germanium/2827.html",
  },
  "smm-district": {
    label: "SMM: Titan district-wide germanium, ~$78M/yr",
    url: "https://news.metal.com/en/newscontent/103995020-smm-flashdistrict-wide-germanium-enrichment-at-new-york-zinc-mine-potentially-adding-us78-million-in-annual-revenue",
  },
  "teck-trail": {
    label: "Teck: Strategic Investment Agreement for Trail (Jul 7, 2026)",
    url: "https://www.bnnbloomberg.ca/press-releases/2026/07/08/teck-canada-growth-fund-and-canada-critical-minerals-accelerator-sign-agreement-to-support-strategic-metals-production-at-trail-smelter/",
  },
  "cp-trail": {
    label: "Canadian Press: Ottawa to invest up to $400M in Trail",
    url: "https://www.castanetkamloops.net/news/Trail/623605/Ottawa-to-invest-up-to-400-million-in-Teck-critical-minerals-smelter-in-BC",
  },
  usgs: {
    label: "USGS Mineral Commodity Summaries 2026: Germanium",
    url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-germanium.pdf",
  },
  payne: {
    label: "Payne Institute: North American germanium supply chain",
    url: "https://payneinstitute.mines.edu/the-north-american-germanium-supply-chain-military-applications-and-civilian-competition/",
  },
  "sp-global": {
    label: "S&P Global: Germanium Market Report (Aug 2026)",
    url: "https://www.spglobal.com/content/dam/spglobal/global-assets/en/special-reports/critical-mineral-market-reports/Market%20Report%20-%20Germanium%20-%2008052026.pdf",
  },
  mmta: {
    label: "MMTA/Fastmarkets: AI and defence boost germanium demand",
    url: "https://mmta.co.uk/ai-and-defence-boost-germanium-demand-and-spark-substitution-risks/",
  },
  "mtn-allies": {
    label: "Metal Tech News: Allies race to rebuild germanium supply",
    url: "https://www.metaltechnews.com/story/2026/08/24/critical-minerals-alliances-2026/allies-race-to-rebuild-germanium-supply/2903.html",
  },
  evertiq: {
    label: "Evertiq: China suspends gallium and germanium ban to Nov 27, 2026",
    url: "https://evertiq.com/news/2025-11-10-china-suspends-ban-on-gallium-and-germanium-exports-to-the-us",
  },
  skillings: {
    label: "Skillings: Gallium and germanium 12 months after export controls",
    url: "https://skillings.net/gallium-germanium-12-months-after-export-controls-where-is-the-supply",
  },
  "penn-state": {
    label: "Penn State: Germanium review, <3% recovered",
    url: "https://pure.psu.edu/en/publications/germanium-a-review-of-its-us-demand-uses-resources-chemistry-and-/",
  },
  mdpi: {
    label: "MDPI: Germanium recovery, tannin dose",
    url: "https://www2.mdpi.com/2075-163X/10/4/358",
  },
  cdc: {
    label: "CDC/US Bureau of Mines: germanium recovery from leach solutions",
    url: "https://stacks.cdc.gov/view/cdc/220131/cdc_220131_DS1.pdf",
  },
  patent: {
    label: "Patent: low-grade germanium concentrate costs",
    url: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9963761",
  },
  geosaxonia: {
    label: "GeoSaxonia 2024: GaLIophore siderophore recovery of Ga and Ge",
    url: "https://geosaxonia2024.de/GeoSaxonia2024_Agenda/www.conftool.pro/geosaxonia2024/indexc94d.html",
  },
  "era-learn": {
    label: "ERA-LEARN: SIDEREC siderophore project",
    url: "https://era-learn.eu/network-information/networks/era-min-2/era-min-joint-call-2018/siderophores-assisted-biorecovery-of-technology-critical-elements-gallium-ga-germanium-ge-and-indium-in-from-end-of-life-products",
  },
  optica: {
    label: "Optica: NVIDIA co-packaged optics for AI factories",
    url: "https://www.optica-opn.org/home/industry/2025/march/nvidia_looks_to_co-packaged_optics_for_ai_factories/",
  },
  "3dtested": {
    label: "3DTested: NVIDIA says CPO a requirement for AI data centers",
    url: "https://www.3dtested.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers",
  },
  rnm: {
    label: "Research and Markets: germanium in silicon photonics",
    url: "https://www.researchandmarkets.com/report/germanium",
  },
  navitas: {
    label: "Navitas: GaN for NVIDIA 800V HVDC",
    url: "https://archive.navitassemi.com/navitas-developing-next-generation-800-v-hvdc-architecture-with-nvidia/",
  },
  st: {
    label: "ST: 800V HVDC power boards for AI data centers",
    url: "https://blog.st.com/800-v-hvdc-data-center/",
  },
  "smm-weekly": {
    label: "SMM: Germanium weekly review, Oct 10, 2026",
    url: "https://news.metal.com/newscontent/104149364-supply-demand-pattern-unchanged-germanium-prices-continue-to-consolidate-on-a-strong-note-smm-germanium-market-weekly-review",
  },
  dcd: {
    label: "DCD: Corning and Meta $6B fiber deal",
    url: "https://www.datacenterdynamics.com/en/news/corning-meta-sign-6bn-fiber-deal-to-support-us-data-center-boom/",
  },
  suman: {
    label:
      "Suman's call transcript and emailed follow-up answers (siderophore cost, germanium tests, reuse, email preference)",
    url: "",
  },
} as const satisfies Record<string, { label: string; url: string }>;

/* ================================================================= site */

export const site = {
  title: "Ge-32 · Germanium is hiding in waste",
  logo: "Ge-32",
  logoLabel: "Ge-32, back to top",
  estimateTag: "our estimate",
  sourceTag: "Source",
  closePanel: "Close",
  noUrl: "Private correspondence, no public link",
};

/* ========================================================== 1 · hero */

export const hero: { video: Video; headline: string; sub: Rich } = {
  video: {
    src: "/video/hero.mp4",
    poster: "/img/posters/hero.jpg",
    alt: "Aerial dawn shot over flat grey mine tailings ponds, descending into a single grain of layered mica with one glowing atom inside.",
  },
  headline: "Germanium is hiding in waste.",
  sub: [
    "Up to ",
    { t: "13,000 kg", src: "titan-teck" },
    " of germanium a year sits in one mine's waste. You've already cracked the mineral it hides in.",
  ],
};

/* ===================================================== 2 · statement */

export const statement: { video: Video; line: Rich } = {
  video: {
    src: "/video/statement.mp4",
    poster: "/img/posters/statement.jpg",
    alt: "Slow drift through deep navy space with a single cool silver-blue glow.",
  },
  line: [
    "Titan is choosing a recovery partner ",
    { t: "now", src: "titan-q2" },
    ". China's export pause ends ",
    { t: "Nov 27, 2026", src: "evertiq" },
    ".",
  ],
};

/* =================================================== 3 · why it's easy */

export const easy: { label: string; title: string; sub: string; cards: PeekCard[] } = {
  label: "Why it's easy for you",
  title: "You've done the hard part.",
  sub: "The hardest part of most germanium projects is getting it out of the rock, and MaverickX has already done that on a mica.",
  cards: [
    {
      id: "mica",
      label: "01",
      title: "Already cracked mica",
      line: [
        "The germanium hides in mica. Your siderophore released ",
        { t: "98.5%", src: "suman" },
        " of the lithium from lepidolite, a mica.",
      ],
      chipsLabel: "Evidence",
      chips: [
        { label: "98.5% lithium from lepidolite", src: "suman" },
        { label: "Titan's Ge sits in mica", src: "titan-q1" },
      ],
      bg: "/img/cards/mica-bg.jpg",
      cutout: "/img/cards/mica-cutout.png",
      alt: "A translucent flake of layered mica.",
    },
    {
      id: "molecule",
      label: "02",
      title: "Known chemistry",
      line: [
        "Siderophores capture germanium, EDTA releases over ",
        { t: "90%", src: "hzdr" },
        " and regenerates them, and ",
        { t: "10", src: "cordis" },
        " reuse cycles have been shown.",
      ],
      chipsLabel: "Evidence",
      chips: [
        { label: ">90% released (EDTA)", src: "hzdr" },
        { label: "10 reuse cycles", src: "cordis" },
        { label: "pH release", src: "test" },
      ],
      bg: "/img/cards/molecule-bg.jpg",
      cutout: "/img/cards/molecule-cutout.png",
      alt: "A glowing molecule holding one atom.",
    },
    {
      id: "flask",
      label: "03",
      title: "A paid test",
      line: [
        { t: "90 days", src: "test" },
        ", 3 gates, customer-paid, about one scientist part-time.",
      ],
      chipsLabel: "The test",
      chips: [
        { label: "90 days", src: "test" },
        { label: "3 gates", src: "test" },
        { label: "customer-paid", src: "math" },
      ],
      bg: "/img/cards/flask-bg.jpg",
      cutout: "/img/cards/flask-cutout.png",
      alt: "A lab flask with a faint silver-blue glow.",
    },
  ],
};

/* ====================================================== 4 · experts */

export const experts: {
  label: string;
  title: string;
  sub: Rich;
  validatesLabel: string;
  people: Expert[];
} = {
  label: "What experts told us",
  title: "Ten replied. They back the core idea.",
  sub: [
    "We emailed more than ",
    { t: "30", src: "next" },
    " people across refiners, mining networks, labs and government; ",
    { t: "10", src: "next" },
    " replied between Oct 23 and 26.",
  ],
  validatesLabel: "Validates",
  people: [
    {
      id: "umicore",
      name: "Bendix De Meulemeester",
      role: "Director, Marketing & Business Development",
      org: "Umicore Electro-Optic Materials",
      words: "We are always interested in new ways to recover metals.",
      validates: "A major germanium refiner wants to hear more",
      permission: "role-only",
      img: "/img/experts/umicore.jpg",
    },
    {
      id: "tischler",
      name: "Dirk Tischler",
      role: "Professor",
      org: "Ruhr University Bochum",
      words:
        "The problem is that germanium complex is highly stable. By changing pH you might be able to release it.",
      validates: "Siderophores bind germanium; release by pH, alongside EDTA",
      permission: "role-only",
      img: "/img/experts/tischler.jpg",
    },
    {
      id: "azimi",
      name: "Gisele Azimi",
      role: "Canada Research Chair in Urban Mining",
      org: "University of Toronto",
      words:
        "The potential application of siderophores for germanium recovery is certainly worth investigating.",
      validates: "The idea is credible; reuse is the key number",
      permission: "role-only",
      img: "/img/experts/azimi.jpg",
    },
    {
      id: "nyabeze",
      name: "Charles Nyabeze",
      role: "EVP Business Development; Director, MICA Network",
      org: "CEMI",
      context: "On Teck's Trail, for germanium from zinc-processing streams:",
      words: "likely one of the strongest candidates",
      validates: "Trail as the right partner; a pilot checklist",
      permission: "role-only",
      img: "/img/experts/nyabeze.jpg",
    },
    {
      id: "alvin",
      name: "Mary Anne Alvin",
      role: "Senior Technology Manager",
      org: "US DOE critical minerals office",
      words:
        "It's not so much the cost of the reagent … but the over cost of the total system.",
      validates: "Judge total process cost, not just siderophore cost",
      permission: "role-only",
      img: "/img/experts/alvin.jpg",
    },
    {
      id: "kaksonen",
      name: "Anna Kaksonen",
      role: "Team Leader, Resource Recovery",
      org: "CSIRO",
      context:
        "Gave the parts of an early cost model: capital, operating, processing cost per ton, minimum economic grade, sensitivity analysis.",
      validates: "The cost model to build next",
      permission: "role-only",
      img: "/img/experts/kaksonen.jpg",
    },
    {
      id: "lange",
      name: "Ian Lange",
      role: "Professor",
      org: "Colorado School of Mines",
      context: "On who pays a premium for non-Chinese germanium:",
      words: "defense.",
      validates: "Who the end buyers are",
      permission: "role-only",
      img: "/img/experts/lange.jpg",
    },
  ],
};

/* ===================================================== 5 · big stat */

export const bigStat: { video: Video; stat: Num; statSuffix: string; line: Rich } = {
  video: {
    src: "/video/stat.mp4",
    poster: "/img/posters/stat.jpg",
    alt: "A single silver-blue glow pulsing slowly against deep navy.",
  },
  stat: { t: "~$0", src: "math", estimate: true },
  statSuffix: "to try",
  line: [
    { t: "$3.9–7.8M", src: "math", estimate: true },
    " a year if it works.",
  ],
};

/* ===================================================== 6 · CTA + panels */

export const ctas = {
  label: "The details",
  title: "Open only what you need.",
};

export const panels: Panel[] = [
  /* ------------------------------------------------------------ the test */
  {
    id: "test",
    label: "01 · The test",
    title: "The test",
    teaser: "90 days, three gates; stop if any fails.",
    open: "See the gates",
    blocks: [
      {
        kind: "p",
        text: [
          "The test is built so the expensive question (making siderophore at volume) is never asked until three cheap questions are answered.",
        ],
      },
      {
        kind: "gates",
        subtitle:
          "Thresholds are our proposal. Gate 3's reuse target is the break-even for single-use pyoverdine.",
        phases: [
          {
            weeks: "Weeks 1-4",
            name: "Leach",
            steps: ["Titan ships mica tailings", "Siderophore leach tests", "Assay Ge in the liquid"],
            gate: "Gate 1",
            pass: "50%+ of Ge leached out of Titan's mica",
          },
          {
            weeks: "Weeks 5-8",
            name: "Capture",
            steps: ["Capture Ge from the leach", "Test with iron present", "Try iron removal or pH"],
            gate: "Gate 2",
            pass: "70%+ of dissolved Ge captured despite iron",
          },
          {
            weeks: "Weeks 9-12",
            name: "Release",
            steps: ["Release Ge, reuse 3+ times", "Make a small concentrate", "Send it to Teck for spec"],
            gate: "Gate 3",
            pass: "90%+ released, 3+ reuses and Teck accepts the spec",
          },
        ],
        footer:
          "Fail any gate: stop. Spending so far stays roughly covered by the test fee.",
      },
      { kind: "h", text: "Why these thresholds" },
      {
        kind: "p",
        text: [
          "Gate 1 at ",
          { t: "50%", src: "test", estimate: true },
          " means at least half the germanium is reachable, enough to justify capture work. Gate 3's ",
          { t: "90%", src: "hzdr" },
          " release matches what the HZDR team reached with DFOB, and 3+ reuses brings single-use pyoverdine's ",
          { t: "~$5,800/kg", src: "math", estimate: true },
          " cost under ",
          { t: "~$1,900/kg", src: "math", estimate: true },
          " of germanium, below even China's price.",
        ],
      },
      { kind: "h", text: "Who does what" },
      {
        kind: "list",
        items: [
          ["Titan: ships tailings and mica concentrate samples, pays the test fee, shares its mineralogy data."],
          ["MaverickX: runs bench leach, capture and release tests with its existing siderophore; outsources germanium assays."],
          ["Teck: tells us the minimum feed spec and checks the small concentrate from weeks 9–12."],
        ],
      },
      {
        kind: "p",
        text: [
          "Fits Suman's rule that the deciding factor is “the amount of work I have to do”: Titan supplies samples and pays, Teck judges the final concentrate, and MaverickX runs bench tests it already knows how to run.",
        ],
      },
      { kind: "h", text: "What MICA's checklist added" },
      {
        kind: "p",
        text: [
          "Charles Nyabeze (MICA Network) listed 10 things a startup must show before a site pilot. The 90-day test gets four MICA items it didn't cover:",
        ],
      },
      {
        kind: "list",
        items: [
          ["A full mass balance (where every metal ends up)"],
          ["Testing against zinc, lead, cadmium and arsenic as well as iron"],
          ["Environmental and biosafety checks"],
          ["A scale-up and IP plan"],
        ],
      },
      {
        kind: "p",
        text: [
          "Release has two routes to test: EDTA at low pH (HZDR) and a simple pH shift (Tischler).",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ the math */
  {
    id: "math",
    label: "02 · The math",
    title: "The math",
    teaser: "Roughly zero net to try. $3.9–7.8M a year if it works.",
    open: "See the numbers",
    blocks: [
      {
        kind: "p",
        text: [
          "The test roughly pays for itself and the upside is millions a year, so the only real question is whether the gates pass. All figures are our estimates unless linked.",
        ],
      },
      {
        kind: "table",
        head: ["", "90-day test", "If it works and scales"],
        rows: [
          ["Cash out", ["~$30–80k: scientist time, small siderophore batches, outside germanium assays"], ["Siderophore made by a contract manufacturer, paid for by the customer"]],
          ["Cash in", ["Test fee from Titan, ~$25–75k"], ["5–10% royalty, ~$3.9–7.8M/yr at $6,000/kg on 13,000 kg/yr, plus siderophore sales"]],
          ["Team time", ["~1 scientist, part-time, 12 weeks"], ["Grows with volume; routine testing shifts to the customer"]],
          ["Worst case", ["Lose the gap between cost and fee, a few $10k at most"], ["Gates stop it before big spending"]],
          ["Strategic gain", ["Real data on Titan's mica; back into mining with a paying partner"], ["A second revenue line beside oil and gas"]],
        ].map((r) => r.map((c) => (typeof c === "string" ? [c] : c))),
        note: ["Our estimate."],
      },
      {
        kind: "p",
        text: [
          "Expected value, roughly: even at a 10% chance of success, 0.1 × $3.9M/yr ≈ ",
          { t: "$390k/yr", src: "math", estimate: true },
          " of expected royalty, against a test that pays for itself.",
        ],
      },
      { kind: "h", text: "Siderophore cost per kg of germanium recovered" },
      {
        kind: "table",
        head: ["Case", "Siderophore per kg Ge", "Cost per kg Ge", "Margin at $6,000/kg (Western)", "Margin at ~$3,800/kg (China)"],
        rows: [
          [["Small siderophore, single use"], ["~8 kg"], ["~$2,400"], ["~$3,600"], ["~$1,400"]],
          [["Pyoverdine, single use"], ["~19 kg"], ["~$5,800"], ["~$200"], ["loses ~$2,000"]],
          [["Small siderophore, reused 10×"], ["~0.8 kg"], ["~$240"], ["~$5,760"], ["~$3,560"]],
          [["Pyoverdine, reused 10×"], ["~1.9 kg"], ["~$580"], ["~$5,420"], ["~$3,220"]],
        ],
        note: [
          "Our estimate; assumes $300/kg siderophore, 1:1 binding, 100% capture, so real numbers will be worse. The China price is approximate (",
          { t: "27,250 yuan/kg", src: "smm-weekly" },
          " on Oct 9, 2026, converted at ~7.1 yuan per dollar).",
        ],
      },
      {
        kind: "p",
        text: [
          "The takeaway: reused, it works at any price. Single-use pyoverdine only breaks even at Western prices. Suman said reuse is “in the works,” so the 90-day test is exactly how to find out.",
        ],
      },
      { kind: "h", text: "The 3-step offer" },
      {
        kind: "list",
        items: [
          ["Now: a paid 90-day lab test on Titan's waste samples, estimated ", { t: "$25–75k", src: "math", estimate: true }, "."],
          ["2027–28: a paid on-site pilot, cost shared by Titan and government grants."],
          [
            "2029+: siderophore supply plus a 5–10% royalty: ",
            { t: "~$3.9–7.8M/yr", src: "math", estimate: true },
            " at ",
            { t: "$6,000/kg", src: "payne" },
            " on ",
            { t: "13,000 kg", src: "titan-teck" },
            ".",
          ],
        ],
      },
      {
        kind: "p",
        text: [
          "MaverickX's own cost per phase (team estimates, not verified): 90-day test ~$30–80k, roughly covered by the test fee; pilot ~$0.5–2M, mostly covered by Titan and grants; full scale needs siderophore production at volume, best done through a contract manufacturer so MaverickX doesn't build a plant.",
        ],
      },
      { kind: "h", text: "Key numbers" },
      {
        kind: "table",
        head: ["Claim", "Number"],
        rows: [
          [["China's share of germanium supply"], [{ t: "~60%", src: "skillings" }]],
          [["US germanium metal imports, 2024 → 2025"], [{ t: "21,000 → 7,000 kg (−67%)", src: "payne" }]],
          [["US primary germanium refinery production, 2025"], [{ t: "None", src: "mtn-allies" }]],
          [["Germanium price, USGS 2025 average"], [{ t: "$4,100/kg", src: "payne" }]],
          [["Germanium price, Western spot Jun–Jul 2026"], [{ t: "$6,150–6,250/kg", src: "payne" }]],
          [["Germanium in zinc ores and fly ash actually recovered"], [{ t: "<3%", src: "penn-state" }]],
          [["Germanium Titan and Teck are evaluating"], [{ t: "up to ~13,000 kg/yr contained", src: "titan-teck" }]],
          [["Value of that germanium at $6,000/kg"], [{ t: "~$78M/yr", src: "smm-district" }]],
          [["Titan's grades"], [{ t: "~21 g/t in plant feed, ~77 g/t in some pre-flotation streams", src: "smm-district" }]],
          [["Last USGS estimate of US germanium use"], [{ t: "~30,000 kg/yr (about 2021)", src: "usgs" }]],
          [["Titan's waste vs. last US use estimate"], [{ t: "roughly 40%", src: "math", estimate: true }]],
          [["Meta–Corning fiber deal"], [{ t: "up to $6B through 2030", src: "dcd" }]],
          [["Canada's support for Trail germanium"], [{ t: "hundreds of millions of dollars (reported)", src: "mtn-empire" }]],
          [["MaverickX siderophore cost"], [{ t: "“a few hundred dollars” per kg", src: "suman" }]],
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- next steps */
  {
    id: "next",
    label: "03 · Next steps",
    title: "Next steps",
    teaser: "Iron is the main risk, so we test it first.",
    open: "See risks and questions",
    blocks: [
      {
        kind: "p",
        text: [
          "Iron is the main risk, so we test it first. Next: Titan samples, the Umicore call, Teck's feed spec.",
        ],
      },
      { kind: "h", text: "What could go wrong" },
      {
        kind: "table",
        head: ["Risk", "Why it matters", "How we handle it"],
        rows: [
          [["We don't know Suman's germanium test results"], ["The whole idea rests on the siderophore actually capturing germanium"], ["Ask him before sending; if results were poor, pivot the site to the backup idea"]],
          [["Germanium is in solids, siderophore works on liquids"], ["Titan's germanium sits in non-sulfide waste material, so it must be leached first"], ["Pitch MaverickX as the capture step on the leach liquid; ask if that matches their tests"]],
          [["Siderophore isn't reusable yet"], ["Single-use pyoverdine barely breaks even"], ["Frame the 90-day test as the way to measure reuse"]],
          [["Tannin is cheap"], ["By mass, siderophore use is similar to tannin, and tannin is a commodity"], ["Win on selectivity (cleaner concentrate, less acid downstream) and reuse, not price per kg"]],
          [["The research siderophore may not be theirs"], ["Published germanium work uses DFOB; MaverickX's main siderophore may be pyoverdine"], ["Ask Suman which one they tested and how it compares"]],
          [["High prices cause substitution"], ["Buyers are already swapping germanium out of some infrared optics and solder"], ["Lead with fiber and photonics, where demand is stickier"]],
          [["Titan already has a partner"], ["Teck is evaluating the recovery path with Titan"], ["Pitch MaverickX as a supplier into that path, not a competitor to Teck"]],
          [["It's mining-adjacent"], ["TKS warned against mining ideas, and MaverickX paused mining"], ["Frame it as “recovering metals from existing waste,” paid from day one"]],
          [["13,000 kg isn't proven"], ["Titan's samples are too small to establish a resource"], ["Always say “up to” and “being evaluated”"]],
        ],
      },
      { kind: "h", text: "Open questions for Suman" },
      {
        kind: "todo",
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
      { kind: "h", text: "How we got here: two ideas the numbers killed" },
      {
        kind: "list",
        items: [
          [
            "Claiming it already works. Single-use pyoverdine costs ",
            { t: "~$5,800", src: "math", estimate: true },
            " per kg of germanium, leaving ",
            { t: "~$200", src: "math", estimate: true },
            " of margin at Western prices and losing ",
            { t: "~$2,000", src: "math", estimate: true },
            " at China's. So we pitch the test as the way to find out, not claim it already works.",
          ],
          [
            "Beating tannin on price. By mass, siderophore use (",
            { t: "8–19 g", src: "math", estimate: true },
            " per g germanium, single use) is similar to tannin (",
            { t: "8–10 g", src: "mdpi" },
            "). Tannin is a cheap commodity, so MaverickX has to win on selectivity or reuse, not on price per kg.",
          ],
        ],
      },
      { kind: "h", text: "Who we asked" },
      {
        kind: "p",
        text: [
          "We emailed more than 30 people across refiners, mining networks, labs and government; 10 replied between Oct 23 and 26. Their answers back the core idea, add two candidate sites, and tighten the 90-day test. Two backup sites beyond Titan, from Nyabeze: Glencore's CEZinc in Quebec and the Winston Mine tailings near Thunder Bay.",
        ],
      },
    ],
  },
];

/* ======================================================== 7 · footer */

export const footer = {
  wordmark: "GE-32",
  cta: {
    label: "Run the test",
    /** TODO(team): Suman's address is not in the doc. Empty = the mail app
     *  opens with no recipient filled in. */
    to: "",
    subject: "Run the test: germanium from Titan's waste",
    body: "In 90 days, at almost no net cost, MaverickX can find out whether its existing siderophore pulls germanium out of Titan's mica waste, a mineral it has already cracked.",
  },
  sourcesLabel: "Sources",
  teamLabel: "Team",
  /** TODO(team): confirm names. From the repo README; not in the doc. */
  team: ["Tawfic Shnoudeh", "Armaan Sharma"],
  credits: [
    "Built for TKS Triple Ignition · MaverickX challenge · Oct 2026",
    "Expert quotes shown by role until each person confirms they can be named.",
    "Figures marked “our estimate” are team math, not verified.",
  ],
};
