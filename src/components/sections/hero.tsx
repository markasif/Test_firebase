import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

export function Hero() {
  return (
    <section id="home" className="flex min-h-[calc(100vh-80px)] items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl md:text-7xl font-headline">
              {portfolioData.headline}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 md:text-xl">
              {portfolioData.subheadline}
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <a href={portfolioData.resumeUrl} download>
                Download Resume
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
