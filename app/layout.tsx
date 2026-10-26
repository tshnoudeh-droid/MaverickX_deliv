import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

// maverickx.com's actual type system: Inter for body copy, Inter Tight
// for headings. Populating the --font-sans / --font-serif / --font-mono
// slots directly (rather than renaming every `font-serif`/`font-mono`
// className across the site) — --font-serif now holds Inter Tight and
// --font-mono holds Inter, matching their brand even though the slot
// names are legacy. See globals.css for the --font-mono repoint.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MaverickX",
  description: "MaverickX TKS deliverable — germanium extraction proposal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Spec (B3) wants a dark/deep-neutral default — defaultTheme
            "dark" rather than "system" so the pitch site opens the way
            it's designed, with a toggle still available. */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
