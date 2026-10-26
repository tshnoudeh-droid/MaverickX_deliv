import Link from "next/link";
import DotGrid from "@/components/dot-grid";
import TopBrand from "@/components/top-brand";
import TksMark from "@/components/tks-mark";

export const metadata = {
    title: "Appendix — MaverickX",
};

const KEY_NUMBERS = [
    { claim: "China's share of germanium supply", number: "~60%", source: "Skillings" },
    { claim: "US germanium metal imports, 2024 → 2025", number: "21,000 → 7,000 kg (−67%)", source: "Payne Institute" },
    { claim: "US primary germanium refinery production, 2025", number: "None", source: "Metal Tech News" },
    { claim: "China's US export-ban pause ends", number: "Nov 27, 2026", source: "Evertiq" },
    { claim: "Germanium price, USGS 2025 average", number: "$4,100/kg", source: "Payne Institute" },
    { claim: "Germanium price, Western spot Jun–Jul 2026", number: "$6,150–6,250/kg", source: "Payne Institute" },
    { claim: "Germanium in zinc ores and fly ash actually recovered", number: "<3%", source: "Penn State review" },
    { claim: "Germanium Titan and Teck are evaluating", number: "up to ~13,000 kg/yr contained", source: "Titan release" },
    { claim: "Value of that germanium at $6,000/kg", number: "~$78M/yr", source: "SMM" },
    { claim: "Titan's grades", number: "~21 g/t plant feed, ~77 g/t some pre-flotation streams", source: "SMM" },
    { claim: "Last USGS estimate of US germanium use", number: "~30,000 kg/yr (about 2021)", source: "USGS" },
    { claim: "Titan's waste vs. last US use estimate", number: "roughly 40%", source: "Our math" },
    { claim: "Meta–Corning fiber deal", number: "up to $6B through 2030", source: "DCD" },
    { claim: "Canada's support for Trail germanium", number: "hundreds of millions of dollars (reported)", source: "Metal Tech News" },
    { claim: "MaverickX siderophore cost", number: "\"a few hundred dollars\" per kg", source: "Suman's email answers" },
];

const RISKS = [
    { risk: "We don't know Suman's germanium test results", why: "The whole idea rests on the siderophore actually capturing germanium.", handle: "Ask him before sending; if results were poor, pivot to the backup idea." },
    { risk: "Germanium is in solids, siderophore works on liquids", why: "Titan's germanium sits in non-sulfide waste material, so it must be leached first.", handle: "Pitch MaverickX as the capture step on the leach liquid; ask if that matches their tests." },
    { risk: "Siderophore isn't reusable yet", why: "Single-use pyoverdine barely breaks even.", handle: "Frame the 90-day test as the way to measure reuse." },
    { risk: "Tannin is cheap", why: "By mass, siderophore use is similar to tannin, and tannin is a commodity.", handle: "Win on selectivity (cleaner concentrate, less acid downstream) and reuse, not price per kg." },
    { risk: "The research siderophore may not be theirs", why: "Published germanium work uses DFOB; MaverickX's main siderophore may be pyoverdine.", handle: "Ask Suman which one they tested and how it compares." },
    { risk: "High prices cause substitution", why: "Buyers are already swapping germanium out of some infrared optics and solder.", handle: "Lead with fiber and photonics, where demand is stickier." },
    { risk: "Titan already has a partner", why: "Teck is evaluating the recovery path with Titan.", handle: "Pitch MaverickX as a supplier into that path, not a competitor to Teck." },
    { risk: "It's mining-adjacent", why: "TKS warned against mining ideas, and MaverickX paused mining.", handle: "Frame it as \"recovering metals from existing waste,\" paid from day one." },
    { risk: "13,000 kg isn't proven", why: "Titan's samples are too small to establish a resource.", handle: "Always say \"up to\" and \"being evaluated.\"" },
];

const ECONOMICS = [
    { case: "Small siderophore, single use", per: "~8 kg", cost: "~$2,400", western: "~$3,600", china: "~$1,400" },
    { case: "Pyoverdine, single use", per: "~19 kg", cost: "~$5,800", western: "~$200", china: "loses ~$2,000" },
    { case: "Small siderophore, reused 10×", per: "~0.8 kg", cost: "~$240", western: "~$5,760", china: "~$3,560" },
    { case: "Pyoverdine, reused 10×", per: "~1.9 kg", cost: "~$580", western: "~$5,420", china: "~$3,220" },
];

const QUESTIONS = [
    "How much germanium did your siderophore capture in the germanium-bearing liquid tests, and was it promising?",
    "Which siderophore did you test on germanium: pyoverdine, or a hydroxamate like DFOB?",
    "Did those tests capture germanium from a leach liquid, or straight from solids?",
    "Roughly how much siderophore does it take per kg of germanium captured?",
    "How many times could it be reused if the unbinding chemistry works?",
    "How much siderophore can you produce a year today?",
    "Have you tried it on gallium? Gallium mimics iron, so it may bind even better.",
    "Would a paid test with a mine like Titan be something MaverickX would take on?",
];

const SOURCES = [
    "Titan Mining: cooperation agreement with Teck (May 13, 2026)",
    "MarketScreener: Titan–Teck agreement scope",
    "Mining.com: Titan, Teck team up on germanium",
    "Metal Tech News: Titan evaluates Empire State germanium",
    "SMM: Titan district-wide germanium, ~$78M/yr",
    "Teck: Strategic Investment Agreement for Trail (Jul 7, 2026)",
    "Canadian Press: Ottawa to invest up to $400M in Trail",
    "USGS Mineral Commodity Summaries 2026: Germanium",
    "Payne Institute: North American germanium supply chain",
    "S&P Global: Germanium Market Report (Aug 2026)",
    "MMTA/Fastmarkets: AI and defence boost germanium demand",
    "Metal Tech News: Allies race to rebuild germanium supply",
    "Evertiq: China suspends gallium and germanium ban to Nov 27, 2026",
    "Skillings: Gallium and germanium 12 months after export controls",
    "Penn State: Germanium review, <3% recovered",
    "MDPI: Germanium recovery, tannin dose",
    "CDC/US Bureau of Mines: germanium recovery from leach solutions",
    "Patent: low-grade germanium concentrate costs",
    "GeoSaxonia 2024: GaLIophore siderophore recovery of Ga and Ge",
    "ERA-LEARN: SIDEREC siderophore project",
    "Optica: NVIDIA co-packaged optics for AI factories",
    "3DTested: NVIDIA says CPO a requirement for AI data centers",
    "Research and Markets: germanium in silicon photonics",
    "Navitas: GaN for NVIDIA 800V HVDC",
    "ST: 800V HVDC power boards for AI data centers",
    "SMM: Germanium weekly review, Oct 10, 2026",
    "DCD: Corning and Meta $6B fiber deal",
    "Suman's call transcript and emailed follow-up answers",
];

export default function AppendixPage() {
    return (
        <main className="relative bg-[var(--mx-canvas)]">
            <TopBrand />
            <TksMark />
            <Link
                href="/demo/tunnel"
                className="fixed left-4 top-4 z-50 rounded-full border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)]/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--mx-ink)] backdrop-blur transition-colors hover:bg-[var(--mx-canvas-dim)]"
            >
                ← Back to the experience
            </Link>

            <section className="relative px-6 py-28 sm:px-10 sm:py-36">
                <DotGrid />
                <div className="relative mx-auto max-w-4xl">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                        Appendix
                    </p>
                    <h1 className="mt-5 font-serif tracking-tight text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl">
                        Every number, every source.
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[var(--mx-faint)]">
                        Reference material supporting the pitch, pulled straight from the
                        research plan. Everything here is cited; estimates are labelled.
                    </p>
                </div>
            </section>

            <section className="relative px-6 pb-20 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif tracking-tight text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Key numbers
                    </h2>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[640px] border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-[var(--mx-ink)]/15 text-left text-xs uppercase tracking-wider text-[var(--mx-faint)]">
                                    <th className="py-3 pr-4 font-medium">Claim</th>
                                    <th className="py-3 pr-4 font-medium">Number</th>
                                    <th className="py-3 font-medium">Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {KEY_NUMBERS.map((row) => (
                                    <tr
                                        key={row.claim}
                                        className="border-b border-[var(--mx-ink)]/5"
                                    >
                                        <td className="py-3 pr-4 text-[var(--mx-ink)]">
                                            {row.claim}
                                        </td>
                                        <td className="py-3 pr-4 font-medium text-[var(--mx-ink)]">
                                            {row.number}
                                        </td>
                                        <td className="py-3 text-[var(--mx-faint)]">
                                            {row.source}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="relative px-6 pb-20 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif tracking-tight text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Risks and honest caveats
                    </h2>
                    <div className="mt-6 divide-y divide-[var(--mx-ink)]/10">
                        {RISKS.map((item) => (
                            <div key={item.risk} className="py-5">
                                <p className="text-sm font-medium text-[var(--mx-ink)]">
                                    {item.risk}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {item.why}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--mx-accent)]">
                                    → {item.handle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-6 pb-20 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif tracking-tight text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Siderophore economics (our estimate)
                    </h2>
                    <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                        Assumes $300/kg siderophore, 1:1 binding, 100% capture — real
                        numbers will be worse. China price approximate (27,250 yuan/kg,
                        Oct 9, 2026, ~7.1 yuan/$; SMM).
                    </p>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[640px] border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-[var(--mx-ink)]/15 text-left text-xs uppercase tracking-wider text-[var(--mx-faint)]">
                                    <th className="py-3 pr-4 font-medium">Case</th>
                                    <th className="py-3 pr-4 font-medium">Per kg Ge</th>
                                    <th className="py-3 pr-4 font-medium">Cost</th>
                                    <th className="py-3 pr-4 font-medium">Margin (Western)</th>
                                    <th className="py-3 font-medium">Margin (China)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ECONOMICS.map((row) => (
                                    <tr
                                        key={row.case}
                                        className="border-b border-[var(--mx-ink)]/5"
                                    >
                                        <td className="py-3 pr-4 text-[var(--mx-ink)]">
                                            {row.case}
                                        </td>
                                        <td className="py-3 pr-4 text-[var(--mx-faint)]">
                                            {row.per}
                                        </td>
                                        <td className="py-3 pr-4 text-[var(--mx-faint)]">
                                            {row.cost}
                                        </td>
                                        <td className="py-3 pr-4 font-medium text-[var(--mx-ink)]">
                                            {row.western}
                                        </td>
                                        <td className="py-3 font-medium text-[var(--mx-ink)]">
                                            {row.china}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="relative px-6 pb-20 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif tracking-tight text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Questions for Suman
                    </h2>
                    <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                        Answers to #1 and #2 decide whether the hidden-supply claim stays
                        a hypothesis or becomes final.
                    </p>
                    <ol className="mt-6 space-y-3">
                        {QUESTIONS.map((q, i) => (
                            <li key={q} className="flex gap-4 text-sm leading-relaxed">
                                <span className="shrink-0 font-mono text-[var(--mx-accent)]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-[var(--mx-ink)]">{q}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="relative px-6 pb-28 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif tracking-tight text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Sources
                    </h2>
                    <ul className="mt-6 columns-1 gap-x-10 text-sm leading-loose text-[var(--mx-faint)] sm:columns-2">
                        {SOURCES.map((s) => (
                            <li key={s} className="break-inside-avoid">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
