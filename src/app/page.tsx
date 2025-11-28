import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
