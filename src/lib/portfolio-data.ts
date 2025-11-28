export const portfolioData = {
  name: "John Doe",
  headline: "Full-Stack Engineer",
  subheadline: "Crafting intuitive user experiences with modern JavaScript frameworks.",
  resumeUrl: "/John_Doe_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:johndoe@email.com",
  },
  navLinks: [
    { name: 'About', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  skills: [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: "code" },
        { name: "TypeScript", icon: "code" },
        { name: "Python", icon: "data_object" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "developer_mode_tv" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "air" },
        { name: "Webpack", icon: "build_circle" },

      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "dns" },
        { name: "Express", icon: "directions_bus" },
        { name: "Django", icon: "hub" },
      ],
    },
    {
      title: "Databases & Caching",
      items: [
        { name: "PostgreSQL", icon: "database" },
        { name: "MongoDB", icon: "eco" },
        { name: "Redis", icon: "speed" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: "merge_type" },
        { name: "Docker", icon: "deployed_code" },
        { name: "AWS", icon: "cloud" },
        { name: "Figma", icon: "grid_guides" },
        { name: "Jira", icon: "assignment" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with a custom CMS, product management, and a secure Stripe payment gateway integration.",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      imageId: "1",
    },
    {
      id: "project-2",
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets, featuring real-time updates and customizable chart components.",
      techStack: ["Python", "Django", "D3.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      imageId: "2",
    },
    {
      id: "project-3",
      title: "Collaborative Task Manager",
      description: "A real-time, serverless task management application allowing teams to collaborate on projects with an intuitive drag-and-drop interface.",
      techStack: ["Vue.js", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      imageId: "3",
    },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Innovate Inc.",
      period: "Jan 2022 - Present",
      description: [
        "Led the migration of a monolithic frontend to a micro-frontend architecture, improving deployment frequency by 200% and reducing page load times by 40%.",
        "Mentored two junior developers, fostering their growth in React and TypeScript through pair programming and code reviews.",
        "Developed and maintained a component library used by 5+ teams, increasing code reuse by 60% and ensuring design consistency.",
      ],
      skills: ["React", "TypeScript", "GraphQL", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      period: "Jun 2019 - Dec 2021",
      description: [
        "Collaborated in a cross-functional team to build and launch a new customer-facing analytics dashboard, resulting in a 25% increase in user engagement.",
        "Wrote and maintained comprehensive unit and integration tests with Jest and React Testing Library, increasing code coverage from 70% to 92%.",
        "Optimized application performance by implementing code splitting and lazy loading techniques, improving the Lighthouse performance score by 15 points.",
      ],
      skills: ["JavaScript", "Redux", "Jest", "Webpack"],
    },
    {
      title: "Junior Web Developer",
      company: "WebStart Co.",
      period: "Jul 2018 - May 2019",
      description: [
        "Assisted in developing and maintaining client websites using HTML, CSS, and jQuery, resulting in a 10% average increase in client satisfaction scores.",
        "Implemented responsive designs for new and existing websites, ensuring optimal viewing experience across all devices and boosting mobile traffic by 15%.",
      ],
      skills: ["HTML5", "CSS3", "jQuery"],
    },
  ],
  contact: {
    headline: "Let's Connect",
    description: "Interested in working together? I'm always open to discussing new projects and opportunities.",
  }
};

export type PortfolioData = typeof portfolioData;
