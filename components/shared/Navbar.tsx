"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-black dark:text-white">V</span>
          <span className="text-blue-600">K</span>
          <span className="text-black dark:text-white">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex text-[18px]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-black/10 p-2 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            {dark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-black/10 p-2 dark:border-white/10"
          >
            {dark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-black/10 p-2 dark:border-white/10"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-black/5 bg-white/95 px-5 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-black/95 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/5 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/resume.pdf"
              target="_blank"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}