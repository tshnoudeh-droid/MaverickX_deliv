import Link from "next/link";
import DotGrid from "@/components/dot-grid";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-[var(--mx-canvas)] font-sans">
      <DotGrid />
      <main className="relative flex flex-1 w-full max-w-xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--mx-faint)]">
            MaverickX — TKS Deliverable
          </p>
          <h1 className="font-serif italic text-3xl font-medium tracking-tight text-[var(--mx-ink)]">
            The experience
          </h1>
          <p className="text-sm text-[var(--mx-faint)]">
            Placeholder content throughout — research and copy to be swapped in.
          </p>
        </div>
        <Link
          href="/demo/tunnel"
          className="rounded-full bg-[var(--mx-ink)] px-7 py-3.5 text-sm font-medium text-[var(--mx-canvas)] transition-opacity hover:opacity-85"
        >
          Enter
        </Link>
      </main>
    </div>
  );
}
