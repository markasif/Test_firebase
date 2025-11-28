import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link href={portfolioData.socials.email} aria-label="Email me" className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary">
              <MailIcon className="h-6 w-6" />
            </Link>
            <Link href={portfolioData.socials.linkedin} aria-label="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href={portfolioData.socials.github} aria-label="Visit my GitHub profile" target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary">
              <GithubIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
