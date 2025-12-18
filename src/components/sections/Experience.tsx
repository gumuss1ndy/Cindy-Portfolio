'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// Removed all unused Si* icons to resolve the warnings

// Define the data for your experience
const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Tuguegarao City, Philippines',
    workType: 'Remote',
    duration: 'Jul 2025 - Present',
    responsibilities: [
      'Designed and developed responsive web applications for multiple clients, integrating databases, APIs, and reusable UI components.',
      'Built scalable features using React, Next.js, Node.js, and Laravel, ensuring fast load times and high usability.',
      'Implemented automated form validations, authentication workflows, and dashboard analytics to improve user experience.',
      'Collaborated with clients to gather requirements, deploy releases, and provide technical documentation.',
    ],
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Laravel' },
      { name: 'API Integration' },
      { name: 'Database Design' },
      { name: 'Authentication' },
      { name: 'UI/UX' },
      { name: 'Client Communication' },
      { name: 'Documentation' },
    ]
  },
  {
    title: 'Quality Assurance Intern',
    company: 'North Triam Tech Inc.',
    location: 'Tuguegarao, Cagayan Valley, Philippines',
    workType: 'Hybrid',
    duration: 'June 2024 - August 2024 (3 mos)',
    responsibilities: [
      'Performed manual testing on web applications to identify and document bugs, UI inconsistencies, and functional issues.',
      'Created detailed test cases and executed test scenarios based on project requirements.',
      'Collaborated with developers and project managers through Jira to track and verify reported defects.',
      'Assisted in regression testing after deployment and verified bug fixes before production release.',
      'Contributed feedback to improve user experience and software quality across multiple projects.',
    ],
    skills: [
      { name: 'Manual Testing' },
      { name: 'Regression Testing' },
      { name: 'Functional Testing' },
      { name: 'Exploratory Testing' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Test Case Design' },
      { name: 'Bug Reporting' },
      { name: 'Collaboration' },
      { name: 'Git' },
    ]
  },
];

// Removed the unused SkillBadge component and its props type
// interface SkillBadgeProps {
//   name: string;
// }
// const SkillBadge = ({ name }: SkillBadgeProps) => (...)

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
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;