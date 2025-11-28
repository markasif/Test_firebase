import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GithubIcon } from '../icons';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="projects" className="w-full py-20 sm:py-32 bg-slate-50 dark:bg-background-dark/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white font-headline">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-gray-500 dark:text-gray-400">
            A selection of my best work, showcasing problem-solving skills and technical expertise across different domains.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => {
            const projectImage = findImage(project.imageId);
            const isFullWidth = index === 2;

            return (
              <Card
                key={project.id}
                className={`group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isFullWidth ? 'lg:col-span-2' : ''}`}
              >
                {projectImage && (
                  <div className="relative w-full h-60 bg-center bg-no-repeat bg-cover">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex w-full items-center justify-start gap-4">
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-4 w-4" /> GitHub Repo
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
