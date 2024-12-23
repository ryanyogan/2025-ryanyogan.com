"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";

const nameMapping = {
  "/": "Ryan Yogan",
  "/writing": "Writing",
  "/shelf": "Tech Shelf",
  "/about": "About Ryan",
};

export function NameTitle() {
  const pathname = usePathname() as keyof typeof nameMapping;

  const name = nameMapping[pathname] ?? "Ryan Yogan";

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between sm:items-end sm:pb-4">
      <div className="relative inline-block">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
          {name}
        </h1>
      </div>
      <Navigation />
    </div>
  );
}
