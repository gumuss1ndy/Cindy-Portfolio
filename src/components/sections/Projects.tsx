'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Define the data for the three specified projects
const projectsData = [
  {
    title: 'Eaglemind',
    description: 'A multi-platform counseling app designed to connect users with mental health professionals.',
    image: 'eaglemind.webp',
    demoLink: 'https://counseling-system.vercel.app/login', 
    githubLink: '#',
    skills: ['Bootstrap','Node.js', 'Express', 'MongoDB'],
    hasGithub: false,
    hasDemo: true,
  },
  {
    title: 'Swiftography',
    description: 'A fan website for Taylor Swift, featuring a collection of fan-made content and information.',
    image: 'swiftography.webp',
    demoLink: '#', // Replace with an actual demo link
    githubLink: '#', // Replace with an actual GitHub link
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    hasGithub: true,
    hasDemo: true,
  },
  {
    title: 'RateSmart',
    description: 'A multi-tenant feedback application for managing feedback across different organizations.',
    image: 'ratesmart.png',
    githubLink: 'https://github.com/gumuss1ndy/ratesmart',
    skills: ['Angular', 'Laravel', 'MySQL'],
    hasGithub: true,
    hasDemo: false,
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[--color-text-primary] mb-4">Featured Projects</h2>
        <p className="text-lg text-[--color-text-primary] opacity-80 max-w-2xl mx-auto">
          Showcasing my projects with interactive cards and live links.
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
                  <motion.div
                    key={skillIndex}
                    className="relative px-3 py-1 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(31, 41, 55, 0.95)",
                      borderColor: "rgba(139, 92, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 4px 15px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span className="text-xs font-medium text-gray-300 hover:text-white transition-colors duration-300 select-none">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                {project.hasDemo && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-200"
                  >
                    <FaExternalLinkAlt /> Live Link
                  </a>
                )}
                {project.hasGithub && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-200"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;