import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 px-4 py-16 text-center sm:gap-8 sm:px-10 sm:py-20">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:font-black font-headline">
              {portfolioData.contact.headline}
            </h2>
            <p className="max-w-2xl text-base font-normal leading-normal text-slate-600 dark:text-slate-400">
              {portfolioData.contact.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={portfolioData.socials.email}>Email Me</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
