"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/writing", label: "Writing" },
    { href: "/shelf", label: "Shelf" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className={`py-4 transition-all duration-200 z-50`}>
      <div className="mx-auto px-0">
        <ul className="flex justify-center items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-zinc-300 transition-colors font-sans"
                prefetch
              >
                {pathname === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-px bottom-0 bg-gray-800 dark:bg-zinc-400"
                  />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
