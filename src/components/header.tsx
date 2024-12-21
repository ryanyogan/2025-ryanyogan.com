'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const showName = isScrolled || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
    { href: '/shelf', label: 'Shelf' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : ''
    }`}>
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            {showName && (
              <Link href="/" className={`text-sm font-medium transition-all duration-300`}>
                Ryan Yogan
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors hover:text-foreground/80 ${
                  pathname === href
                    ? 'text-foreground font-medium'
                    : 'text-foreground/60'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

