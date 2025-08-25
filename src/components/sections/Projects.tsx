'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Define the data for the three specified projects
const projectsData = [
  {
    title: 'RateSmart',
    description: 'A platform that helps users compare and find the best loan rates from various financial institutions.',
    image: 'https://images.unsplash.com/photo-1590402494052-b88339ed3c31?q=80&w=2670&auto=format&fit=crop',
    demoLink: '#',
    githubLink: '#',
    skills: ['Next.js', 'Tailwind CSS', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'Swiftography',
    description: 'A minimalist photography portfolio website designed for a freelance photographer.',
    image: 'https://images.unsplash.com/photo-1522031758652-f38b2d189190?q=80&w=2670&auto=format&fit=crop',
    demoLink: '#',
    githubLink: '#',
    skills: ['React', 'CSS3', 'Framer Motion'],
  },
  {
    title: 'Eaglemind',
    description: 'A personal productivity dashboard that helps users track habits, set goals, and manage daily tasks.',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2670&auto=format&fit=crop',
    demoLink: '#',
    githubLink: '#',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[--color-text-primary] mb-4">Featured Projects</h2>
        <p className="text-lg text-[--color-text-primary] opacity-80 max-w-2xl mx-auto">
          Showcasing my projects with interactive cards and demo links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border-2 border-violet-500/50 hover:border-violet-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-violet-500/20 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold text-[--color-text-primary] mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-[--color-text-secondary] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 bg-gray-300/20 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium backdrop-blur-sm border border-violet-300/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-200"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-200"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;