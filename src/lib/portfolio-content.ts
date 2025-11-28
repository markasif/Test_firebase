import { portfolioData } from './portfolio-data';

const { name, headline, subheadline, skills, projects, experience } = portfolioData;

const skillsText = skills.map(category => 
  `${category.title}: ${category.items.map(item => item.name).join(', ')}`
).join('\n');

const projectsText = projects.map(project => 
  `Project: ${project.title}\nDescription: ${project.description}\nTechnologies: ${project.techStack.join(', ')}`
).join('\n\n');

const experienceText = experience.map(job => 
  `Title: ${job.title} at ${job.company} (${job.period})\n- ${job.description.join('\n- ')}\nSkills used: ${job.skills.join(', ')}`
).join('\n\n');

export const portfolioContent = `
# ${name} - ${headline}
${subheadline}

## Skills
${skillsText}

## Featured Projects
${projectsText}

## Work Experience
${experienceText}
`;
