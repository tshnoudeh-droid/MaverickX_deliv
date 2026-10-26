/**
 * ALL copy lives here. Layout files (main.ts, components/*) contain no words.
 *
 * Source of truth: "MaverickX Germanium Pitch: Website Plan" (Claude Doc,
 * Oct 24, 2026). Nothing here is invented. Every number is a `Num` that
 * links to a source in SOURCES, or to the panel holding our own math
 * (estimates always carry estimate: true and render "our estimate").
 *
 * Media: every image/video slot is a `Media` with the file it expects in
 * /public and a note on what to put there. Until the file exists, the page
 * shows a neutral placeholder naming that file.
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

export interface Media {
  /** Path under /public. Replace the file, keep the name. */
  src: string;
  /** What belongs here. Shown on the placeholder until the file exists. */
  note: string;
  /** Short description for screen readers. */
  alt: string;
  /** Videos only: first frame, used before playback and for reduced motion. */
  poster?: string;
}

export interface SolutionStep {
  id: string;
  title: string;
  body: Rich;
  chipsLabel: string;
  chips: Chip[];
  image: Media;
  /** Transparent PNG of the subject; peeks above the card's top edge. */
  cutout: Media;
}

export interface Partner {
  name: string;
  role: string;
  line: Rich;
  image: Media;
}

export interface Phase {
  weeks: string;
  name: string;
  steps: string[];
  gate: string;
  pass: string;
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
  image: Media;
}

export type Block =
  | { kind: "h"; text: string }
  | { kind: "p"; text: Rich }
  | { kind: "list"; items: Rich[] }
  | { kind: "todo"; items: string[] }
  | { kind: "table"; head: string[]; rows: Rich[][]; note?: Rich }
  | { kind: "gates"; phases: Phase[]; footer: string; subtitle: string };

export interface Panel {
  id: PanelId;
  label: string;
  title: string;
  teaser: string;
  open: string;
  blocks: Block[];
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
  placeholderTag: "Placeholder",
};

/* ========================================================== 1 · hero */

export const hero: { video: Media; headline: string; sub: Rich } = {
  video: {
    src: "/video/hero.mp4",
    poster: "/img/hero-poster.jpg",
    note: "Hero loop, 6–8 s: drone over grey tailings ponds, push into one grain, end on layered mica holding one glowing atom.",
    alt: "Aerial shot over grey mine tailings ponds, descending into a grain of mica with one glowing atom inside.",
  },
  headline: "Germanium is hiding in waste.",
  sub: [
    "Up to ",
    { t: "13,000 kg", src: "titan-teck" },
    " of germanium a year sits in one mine's waste. You've already cracked the mineral it hides in.",
  ],
};

/* ======================================================= 2 · problem */

export const problem: { label: string; title: string; sub: Rich; chipsLabel: string; chips: Chip[] } = {
  label: "The problem",
  title: "Germanium is never mined on its own.",
  sub: [
    "It's scraped out of zinc processing with harsh chemistry, and less than ",
    { t: "3%", src: "penn-state" },
    " of what's in zinc ores and fly ash is ever recovered.",
  ],
  chipsLabel: "The squeeze",
  chips: [
    { label: "China: ~60% of supply", src: "skillings" },
    { label: "US imports −67%", src: "payne" },
    { label: "US primary refining: none", src: "mtn-allies" },
    { label: "China's export pause ends Nov 27, 2026", src: "evertiq" },
  ],
};

/* ====================================================== 3 · solution */

export const solution: { label: string; title: string; oneLiner: string; steps: SolutionStep[] } = {
  label: "Our solution",
  title: "Our solution",
  oneLiner:
    "Turn Titan's dilute germanium streams into a concentrate that meets Trail's feed spec.",
  steps: [
    {
      id: "leach",
      title: "Already cracked mica",
      body: [
        "The germanium hides in mica. Your siderophore released ",
        { t: "98.5%", src: "suman" },
        " of the lithium from lepidolite, a mica.",
      ],
      chipsLabel: "Evidence",
      chips: [
        { label: "98.5% lithium from lepidolite", src: "suman" },
        { label: "Titan's Ge sits in mica", src: "titan-q1" },
        { label: "Existing siderophore", src: "suman" },
      ],
      image: {
        src: "/img/solution/leach.jpg",
        note: "Background photo: grey mine tailings or crushed rock, landscape.",
        alt: "Grey mine tailings.",
      },
      cutout: {
        src: "/img/solution/leach-cutout.png",
        note: "Transparent PNG: one flake of layered mica (lepidolite), subject only.",
        alt: "A flake of layered mica.",
      },
    },
    {
      id: "capture",
      title: "Selective capture",
      body: [
        "Research: the siderophore DFOB binds germanium best at acidic pH with chloride present. Iron is the main risk, so we test it first.",
      ],
      chipsLabel: "Evidence",
      chips: [
        { label: "DFOB binds Ge", src: "hzdr" },
        { label: "~44% Ga with 53 mg/L iron", src: "iit" },
        { label: "Selective at low concentrations", src: "era-learn" },
      ],
      image: {
        src: "/img/solution/capture.jpg",
        note: "Background photo: a dilute leach liquid or lab glassware, cool light.",
        alt: "A dilute liquid in lab glassware.",
      },
      cutout: {
        src: "/img/solution/capture-cutout.png",
        note: "Transparent PNG: a siderophore molecule model holding one atom.",
        alt: "A molecule model holding one atom.",
      },
    },
    {
      id: "release",
      title: "Release and reuse",
      body: [
        "EDTA at pH 3.5 releases over ",
        { t: "90%", src: "hzdr" },
        " of gallium and germanium and regenerates DFOB; ",
        { t: "10", src: "cordis" },
        " capture-and-release cycles were run for gallium.",
      ],
      chipsLabel: "Evidence",
      chips: [
        { label: ">90% released (EDTA)", src: "hzdr" },
        { label: "10 reuse cycles", src: "cordis" },
        { label: "pH release", src: "test" },
      ],
      image: {
        src: "/img/solution/release.jpg",
        note: "Background photo: a bench or bioreactor in MaverickX's lab.",
        alt: "A lab bench.",
      },
      cutout: {
        src: "/img/solution/release-cutout.png",
        note: "Transparent PNG: a lab flask, subject only.",
        alt: "A lab flask.",
      },
    },
    {
      id: "refinery",
      title: "Feed Teck's refinery",
      body: [
        "MaverickX doesn't replace Teck's refinery; it upgrades Titan's dilute liquid into a concentrate Trail can take.",
      ],
      chipsLabel: "Key numbers",
      chips: [
        { label: "Teck's minimum feed spec", src: "marketscreener" },
        { label: "Up to C$400M into Trail", src: "cp-trail" },
        { label: "Up to $850M expansion", src: "teck-trail" },
      ],
      image: {
        src: "/img/solution/refinery.jpg",
        note: "Background photo: a smelter or refinery at dusk, landscape.",
        alt: "A refinery.",
      },
      cutout: {
        src: "/img/solution/refinery-cutout.png",
        note: "Transparent PNG: a small vial or ingot of germanium concentrate.",
        alt: "A vial of germanium concentrate.",
      },
    },
  ],
};

/* ====================================================== 4 · partners */

export const partners: { label: string; title: string; oneLiner: string; people: Partner[] } = {
  label: "Possible partners",
  title: "Partners",
  oneLiner: "MaverickX doesn't compete with Teck; it feeds Teck's expansion.",
  people: [
    {
      name: "Titan Mining",
      role: "The mine",
      line: ["Up to ", { t: "13,000 kg/yr", src: "titan-teck" }, " of germanium contained in its waste."],
      image: { src: "/img/partners/titan.jpg", note: "Titan's Empire State Mines, or its tailings ponds. Portrait.", alt: "Titan Mining's site." },
    },
    {
      name: "Teck · Trail",
      role: "The refinery",
      line: ["Defining the minimum feed spec Trail needs from Titan's waste."],
      image: { src: "/img/partners/teck.jpg", note: "Teck's Trail smelter. Portrait.", alt: "Teck's Trail smelter." },
    },
    {
      name: "Umicore",
      role: "Germanium refiner",
      line: ["Asked for a call and looped in its head of technology development."],
      image: { src: "/img/partners/umicore.jpg", note: "Germanium optics or wafers. Portrait.", alt: "Germanium optics." },
    },
    {
      name: "Glencore CEZinc",
      role: "Backup site · Quebec",
      line: ["A backup site beyond Titan."],
      image: { src: "/img/partners/cezinc.jpg", note: "Zinc refinery or zinc cathodes. Portrait.", alt: "A zinc refinery." },
    },
    {
      name: "Winston Mine tailings",
      role: "Backup site · Thunder Bay",
      line: ["A backup site beyond Titan."],
      image: { src: "/img/partners/winston.jpg", note: "Northern Ontario tailings or boreal landscape. Portrait.", alt: "Tailings near Thunder Bay." },
    },
    {
      name: "Corning",
      role: "End demand · fiber",
      line: ["Meta's fiber deal: ", { t: "up to $6B", src: "dcd" }, " through 2030."],
      image: { src: "/img/partners/corning.jpg", note: "Optical fiber strands with light. Portrait.", alt: "Optical fiber." },
    },
    {
      name: "5N Plus",
      role: "High-purity germanium",
      line: [{ t: "$18.1M", src: "payne" }, " Defense Production Act award."],
      image: { src: "/img/partners/5nplus.jpg", note: "High-purity metal or crystal. Portrait.", alt: "High-purity germanium." },
    },
    {
      name: "Lattice Materials",
      role: "Germanium optics",
      line: [{ t: "$18.5M", src: "payne" }, " Defense Production Act award."],
      image: { src: "/img/partners/lattice.jpg", note: "Germanium lens or infrared optic. Portrait.", alt: "A germanium lens." },
    },
    {
      name: "Lawrence Livermore",
      role: "Bench work",
      line: ["Bioreactors for bench work."],
      image: { src: "/img/partners/llnl.jpg", note: "Lab bioreactor. Portrait.", alt: "A lab bioreactor." },
    },
  ],
};

/* ================================================== 5 · how it works */

export const howItWorks: {
  label: string;
  title: string;
  oneLiner: string;
  phases: Phase[];
  rolesLabel: string;
  roles: { who: string; does: string }[];
  more: string;
} = {
  label: "How it works",
  title: "How it works",
  oneLiner: "90 days, three gates; stop if any fails.",
  phases: [
    {
      weeks: "Weeks 1–4",
      name: "Leach",
      steps: ["Titan ships mica tailings", "Siderophore leach tests", "Assay Ge in the liquid"],
      gate: "Gate 1",
      pass: "50%+ of Ge leached out of Titan's mica",
    },
    {
      weeks: "Weeks 5–8",
      name: "Capture",
      steps: ["Capture Ge from the leach", "Test with iron present", "Try iron removal or pH"],
      gate: "Gate 2",
      pass: "70%+ of dissolved Ge captured despite iron",
    },
    {
      weeks: "Weeks 9–12",
      name: "Release",
      steps: ["Release Ge, reuse 3+ times", "Make a small concentrate", "Send it to Teck for spec"],
      gate: "Gate 3",
      pass: "90%+ released, 3+ reuses and Teck accepts the spec",
    },
  ],
  rolesLabel: "Who does what",
  roles: [
    { who: "Titan", does: "Ships samples, pays the test fee, shares its mineralogy data." },
    { who: "MaverickX", does: "Runs bench leach, capture and release tests with its existing siderophore." },
    { who: "Teck", does: "Sets the minimum feed spec and checks the small concentrate." },
  ],
  more: "Why these thresholds",
};

/* ==================================================== 6 · validation */

export const validation: {
  label: string;
  title: string;
  sub: Rich;
  people: Expert[];
} = {
  label: "Validation",
  title: "Validation",
  sub: [
    "We emailed more than 30 people across refiners, mining networks, labs and government; 10 replied between Oct 23 and 26.",
  ],
  people: [
    {
      id: "umicore",
      name: "Bendix De Meulemeester",
      role: "Director, Marketing & Business Development",
      org: "Umicore Electro-Optic Materials",
      words: "We are always interested in new ways to recover metals.",
      validates: "A major germanium refiner wants to hear more",
      permission: "role-only",
      image: { src: "/img/experts/umicore.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "Umicore." },
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
      image: { src: "/img/experts/tischler.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "Ruhr University Bochum." },
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
      image: { src: "/img/experts/azimi.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "University of Toronto." },
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
      image: { src: "/img/experts/nyabeze.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "CEMI." },
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
      image: { src: "/img/experts/alvin.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "US Department of Energy." },
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
      image: { src: "/img/experts/kaksonen.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "CSIRO." },
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
      image: { src: "/img/experts/lange.jpg", note: "Headshot once named; until then an image of their organisation. Square.", alt: "Colorado School of Mines." },
    },
  ],
};

/* ===================================================== 7 · big stat */

export const bigStat: { video: Media; stat: Num; statSuffix: string; line: Rich } = {
  video: {
    src: "/video/stat.mp4",
    poster: "/img/stat-poster.jpg",
    note: "Background loop, 4–6 s: mica sheets peel apart as tiny molecules tug the edges; the atom drifts free.",
    alt: "Mica sheets peeling apart as a glowing atom drifts free.",
  },
  stat: { t: "~$0", src: "math", estimate: true },
  statSuffix: "to try",
  line: [{ t: "$3.9–7.8M", src: "math", estimate: true }, " a year if it works."],
};

/* ====================================================== 8 · details */

export const details = {
  label: "The details",
  title: "Open only what you need.",
};

/* ===================================================== panels */

// Panels name experts by role only (permission default). Swap names back in
// here when a person confirms they can be quoted.
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
          "The director of the MICA Network listed 10 things a startup must show before a site pilot. The 90-day test gets four MICA items it didn't cover:",
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
          "Release has two routes to test: EDTA at low pH (HZDR) and a simple pH shift (Professor, Ruhr University Bochum).",
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
          "We emailed more than 30 people across refiners, mining networks, labs and government; 10 replied between Oct 23 and 26. Their answers back the core idea, add two candidate sites, and tighten the 90-day test. Two backup sites beyond Titan, from the MICA Network: Glencore's CEZinc in Quebec and the Winston Mine tailings near Thunder Bay.",
        ],
      },
    ],
  },
];

/* ======================================================== 9 · footer */

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
  ctaLine: "In 90 days, at almost no net cost.",
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
