"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/writing", label: "Writing" },
    { href: "/shelf", label: "Shelf" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`py-4 transition-all duration-200 z-50 ${
        isScrolled ? "bg-white shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-end items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-sans"
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
