import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import { NameTitle } from "@/components/name-title";
import "@/styles/globals.css";

export const metadata = {
  title: "Ryan Yogan | Engineering Leader & Developer",
  description:
    "Software developer and engineering leader focused on crafting exceptional user experiences.",
};

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-white antialiased text-gray-900">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="sm:mt-6 mt-4 mb-24">
            <div className="container-wide">
              <div className="space-y-24">
                <div className="sm:space-y-12 space-y-4">
                  <NameTitle />
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
