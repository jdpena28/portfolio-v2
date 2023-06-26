'use client';

import AboutMe from '@/components/sections/AboutMe';
import Home from '@/components/sections/Home';

export default function Index() {
  return (
    <main className="container mx-auto w-full px-5">
      <Home />
      <AboutMe />
    </main>
  );
}
