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
    <div className="flex flex-row mx-auto sm:justify-end sm:pb-4">
      <Navigation />
    </div>
  );
}
