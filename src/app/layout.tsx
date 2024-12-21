import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Playfair_Display } from "next/font/google";

import { Navigation } from "@/components/navigation";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navigation />
          <main className="mt-16 mb-24">{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
