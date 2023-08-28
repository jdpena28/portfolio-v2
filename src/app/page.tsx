import AboutMe from '@/components/sections/AboutMe';
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import BGParticles from '@/components/Particles';
import Analytics from '@/components/Analytics';

export default function Index() {
  return (
    <main className="relative w-full space-y-5 px-5">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <BGParticles />
      <Analytics />
    </main>
  );
}
