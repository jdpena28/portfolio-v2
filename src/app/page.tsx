import AboutMe from '@/components/sections/AboutMe';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';

export default function Index() {
  return (
    <main className="container mx-auto w-full px-5">
      <Home />
      <AboutMe />
      <Projects />
    </main>
  );
}
