import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Playfair_Display } from "next/font/google";

import { NameTitle } from "@/components/name-title";
import "@/styles/globals.css";

export const metadata = {
  title: "Ryan Yogan | Engineering Leader & Developer",
  description:
    "Software developer and engineering leader focused on crafting exceptional user experiences.",
};

const playfair_display = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const ibm = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair_display.variable} ${ibm.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
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
