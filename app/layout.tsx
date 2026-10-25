import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import TopBrand from "@/components/top-brand";
import TksMark from "@/components/tks-mark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Editorial display serif for headline accents in the immersive experience
// (stands in for a custom MaverickX display face, same role as the serif
// accent in the learnwithzero.com reference).
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  axes: ["opsz", "SOFT", "WONK"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopBrand />
          <TksMark />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
