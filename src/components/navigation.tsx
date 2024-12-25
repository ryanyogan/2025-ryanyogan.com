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
      <div className="mx-auto px-0 sm:px-6 lg:px-8">
        <ul className="flex justify-center items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative py-2 sm:text-sm text-xs text-gray-500 hover:text-gray-900 transition-colors font-sans"
              >
                {pathname === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-px bottom-0 bg-gray-400"
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
