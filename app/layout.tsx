import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Reveal from "@/components/Reveal";
import "./globals.css";

// Self-hosted at build time. Next also generates a metric-matched
// "Geist Fallback", so swapping in the real font causes no layout shift.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "César",
  description: "Personal portfolio of César García, software engineering intern.",
  icons: { icon: "/favicon.png" },
};

// Runs before first paint: marks the document as JS-capable so the reveal
// start state can live in CSS (no flash of unhidden content), and applies the
// stored theme so the page never flashes the wrong one.
const bootScript = `document.documentElement.classList.add('js');
document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-surface dark:bg-background text-body transition-colors duration-300">
        <div
          id="top"
          className="flex flex-col max-w-2xl mx-auto items-center justify-center"
        >
          {children}
        </div>
        <Reveal />
      </body>
    </html>
  );
}
