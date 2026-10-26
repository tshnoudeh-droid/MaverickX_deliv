import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";

/** Simple 3-step flow diagram (B4 Section 3 / B6): Waste → Siderophore
 * → Recovered germanium. Deliberately plain (a labeled flow, not a
 * literal illustration) per B3 "simple diagrams over stock photos." */
export default function ProcessDiagram({
    steps,
}: {
    steps: { label: string; detail: string }[];
}) {
    return (
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3">
            {steps.map((step, i) => (
                <div key={step.label} className="flex flex-1 items-center gap-3 sm:contents">
                    <Reveal delay={i * 0.1} className="flex-1">
                        <div className="rounded-2xl border border-[var(--mx-ink)]/15 bg-[var(--mx-canvas-dim)] p-6">
                            <span className="font-mono text-xs text-[var(--mx-accent)]">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mt-2 text-lg font-medium text-[var(--mx-ink)]">
                                {step.label}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[var(--mx-faint)]">
                                {step.detail}
                            </p>
                        </div>
                    </Reveal>
                    {i < steps.length - 1 ? (
                        <ArrowRight
                            className="hidden h-5 w-5 shrink-0 text-[var(--mx-faint)] sm:block"
                            aria-hidden="true"
                        />
                    ) : null}
                </div>
            ))}
        </div>
    );
}
