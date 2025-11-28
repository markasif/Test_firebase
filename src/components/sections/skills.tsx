import { portfolioData } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-headline">
            My Tech Stack
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            A collection of the technologies, languages, and tools I use to build modern web applications.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-8">
          {portfolioData.skills.map((category) => (
            <div key={category.title}>
              <h3 className="px-4 pb-3 pt-4 text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((item) => (
                  <Card key={item.name} className="flex transform-gpu flex-col items-center justify-center gap-3 p-4 transition-transform duration-200 hover:-translate-y-1 dark:bg-slate-900/50 dark:hover:bg-slate-800/60">
                    <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400">
                      {item.icon}
                    </span>
                    <h4 className="text-base font-semibold leading-tight text-slate-800 dark:text-slate-200 text-center">
                      {item.name}
                    </h4>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
