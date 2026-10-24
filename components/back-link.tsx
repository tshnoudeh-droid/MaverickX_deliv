import Link from "next/link";

export default function BackLink() {
    return (
        <Link
            href="/"
            className="fixed left-4 top-4 z-50 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-black backdrop-blur transition-colors hover:bg-white dark:border-white/15 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
        >
            ← Back
        </Link>
    );
}
