'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#top" className="text-[#4A90E2] text-2xl font-bold">PL</Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about" number="01" text="About" />
          <NavLink href="#skills" number="02" text="Skills" />
          <NavLink href="#experience" number="03" text="Experience" />
          <NavLink href="#education" number="04" text="Education" />
          <a 
            href="/Sample Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#4A90E2] text-[#4A90E2] px-4 py-2 rounded hover:bg-[#4A90E2]/10 transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button className="ml-4 text-gray-900 dark:text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" number="01" text="About" onClick={closeMenu} />
            <MobileNavLink href="#skills" number="02" text="Skills" onClick={closeMenu} />
            <MobileNavLink href="#experience" number="03" text="Experience" onClick={closeMenu} />
            <MobileNavLink href="#education" number="04" text="Education" onClick={closeMenu} />
            <a 
              href="/Sample Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#4A90E2] text-[#4A90E2] px-4 py-2 rounded hover:bg-[#4A90E2]/10 transition-colors text-center"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, number, text }: { href: string; number: string; text: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="group text-gray-900 dark:text-white hover:text-[#4A90E2] dark:hover:text-[#4A90E2] transition-colors"
    >
      <span className="font-mono text-[#4A90E2] mr-1 text-sm">{number}.</span>
      {text}
    </a>
  )
}

function MobileNavLink({ href, number, text, onClick }: { href: string; number: string; text: string; onClick: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="group text-gray-900 dark:text-white hover:text-[#4A90E2] dark:hover:text-[#4A90E2] transition-colors text-lg"
    >
      <span className="font-mono text-[#4A90E2] mr-2 text-sm">{number}.</span>
      {text}
    </a>
  )
}
