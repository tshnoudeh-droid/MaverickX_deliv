import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
            MaverickX — TKS Deliverable
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Hero prototypes
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Pick a direction for the real hero. Placeholder content throughout.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full sm:flex-row">
          <Link
            href="/demo/tunnel"
            className="flex-1 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Perspective tunnel
          </Link>
          <Link
            href="/demo/sculpture"
            className="flex-1 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
          >
            Liquid sculpture
          </Link>
        </div>
      </main>
    </div>
  );
}
