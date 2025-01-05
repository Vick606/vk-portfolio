'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
    </main>
  );
}