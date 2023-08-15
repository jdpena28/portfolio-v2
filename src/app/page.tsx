import AboutMe from '@/components/sections/AboutMe';
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import BGParticles from '@/components/Particles';

export default function Index() {
  return (
    <main className="relative w-full px-5">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <BGParticles />
    </main>
  );
}
