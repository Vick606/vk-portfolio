'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            VK
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link>
            <ThemeToggle />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="#about" className="block py-2 hover:text-blue-600">About</Link>
            <Link href="#projects" className="block py-2 hover:text-blue-600">Projects</Link>
            <Link href="#contact" className="block py-2 hover:text-blue-600">Contact</Link>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}