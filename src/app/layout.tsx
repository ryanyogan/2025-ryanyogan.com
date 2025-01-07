import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GeistSans } from "geist/font/sans";

import { NameTitle } from "@/components/name-title";
import "@/styles/globals.css";

export const metadata = {
  title: "Ryan Yogan | Engineering Leader & Developer",
  description:
    "Software developer and engineering leader focused on crafting exceptional user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body className="font-sans bg-zinc-50 dark:bg-zinc-900 antialiased">
        <div className="max-w-3xl mx-auto px-4">
          <main className="mt-6 mb-24">
            <div className="container-wide">
              <div className="space-y-24">
                <div className="space-y-12">
                  <NameTitle />
                  {children}
                </div>
              </div>
            </div>
          </main>
          <footer className="p-6 w-full justify-center flex space-x-4 dark:text-zinc-300 text-sm">
            <a href="https://github.com/ryanyogan">Github</a>
            <a href="https://linkedin.com/in/ryanyogan">LinkedIn</a>
            <a href="https://twitter.com/ryanyogan">X</a>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
