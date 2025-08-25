'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiJira, SiGit, SiFigma } from 'react-icons/si';

// Define the data for your experience
const experienceData = [
  {
    title: 'Software Development Intern',
    company: 'North Triam Tech Inc.',
    location: 'Tuguegarao, Cagayan Valley, Philippines',
    workType: 'Hybrid',
    duration: 'June 2024 - August 2024 (3 mos)',
    responsibilities: [
      'Developed and maintained software solutions with Laravel.',
      'Contributed to front-end development using Angular, managing tasks in Jira.',
      'Gained hands-on experience with version control using Git and GitHub.'
    ],
    skills: [
      { name: 'Laravel' },
      { name: 'Figma' },
      { name: 'Front-End Development' },
      { name: 'Back-End Web Development' },
      { name: 'Angular' },
      { name: 'Jira' },
      { name: 'GitHub' },
      { name: 'Git' },
    ]
  },
];

// Helper component for skill badges
const SkillBadge = ({ name }) => (
  <span className="inline-flex items-center px-3 py-1 bg-gray-300/20 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium backdrop-blur-sm border border-violet-300/30">
    {name}
  </span>
);

const Experience = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[--color-text-primary] mb-4">My Experience</h2>
        <p className="text-lg text-[--color-text-primary] opacity-80 max-w-2xl mx-auto">
          A timeline of my professional journey, showcasing key roles, responsibilities, and skills.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-violet-500/50 hover:border-violet-400 hover:shadow-violet-500/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header: Job Title & Company */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[--color-text-primary] mb-1">
                  {job.title}
                </h3>
                <p className="text-lg text-[--color-text-secondary]">{job.company}</p>
              </div>
              {/* Optional: Add a company logo here if you have one */}
            </div>

            {/* Sub-header: Location & Duration */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[--color-text-secondary] mb-4">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-violet-400" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-violet-400" /> {job.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/80 text-white backdrop-blur-sm border border-violet-400/50 uppercase">
                {job.workType}
              </span>
            </div>

            {/* Body: Responsibilities */}
            <ul className="list-disc list-inside space-y-2 text-[--color-text-primary] mb-6">
              {job.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex} className="text-base text-[--color-text-secondary] leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>

            {/* Footer: Skills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-violet-300/30">
              {job.skills.map((skill, skillIndex) => (
                <SkillBadge key={skillIndex} name={skill.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;