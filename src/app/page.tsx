import AboutMe from '@/components/sections/AboutMe';
import Home from '@/components/sections/Home';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | John Henrich Dela Pena',
  description:
    'Full stack developer with several months experience in Full Stack Javascript Application mainly focus on web and mobile application. Lean with working on Next.js Framework. React.js Typescript Enthusiast. Keeping up with the latest emerging technology.',
};

export default function Index() {
  return (
    <main className="container mx-auto w-full px-5">
      <Home />
      <AboutMe />
    </main>
  );
}
