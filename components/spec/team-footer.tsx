const TEAM = ["Sidi Mohal", "Drishti Arora", "Tawfic Shnoudeh", "Armaan Sharma", "Sahana Venkataraman"];

/** Minimal persistent footer for the deep pages — who's behind the
 * pitch, kept out of the way of the reasoning itself. */
export default function TeamFooter() {
    return (
        <footer className="border-t border-[var(--mx-ink)]/10 px-6 py-10 sm:px-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-xs text-[var(--mx-faint)]">
                    MaverickX — TKS Activate Triple Ignition Challenge
                </p>
                <p className="text-xs text-[var(--mx-faint)]">{TEAM.join(" · ")}</p>
            </div>
        </footer>
    );
}
