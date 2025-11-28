import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section id="experience" className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl font-headline">
          Work Experience
        </h2>
        <div className="relative mt-12 grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-12">
          {portfolioData.experience.map((job, index) => (
            <div key={job.company} className="contents">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: index === 0 ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {index === 0 ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                </div>
                {index < portfolioData.experience.length - 1 && (
                  <div className="w-0.5 flex-grow bg-slate-300 dark:bg-slate-700"></div>
                )}
              </div>
              <div className="flex flex-1 flex-col pb-16">
                <p className="text-lg font-semibold leading-normal text-slate-900 dark:text-white">{job.title}</p>
                <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">
                  {job.company} | {job.period}
                </p>
                <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-x-3">
                      <span className="material-symbols-outlined mt-1 text-primary/80">arrow_right_alt</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-5">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
