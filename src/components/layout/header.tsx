"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LogoIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6 text-slate-900 dark:text-white" />
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{portfolioData.name}</h2>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {portfolioData.navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm font-medium text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                {portfolioData.navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-lg font-medium text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary">
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
