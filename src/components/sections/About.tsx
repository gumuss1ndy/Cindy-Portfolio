'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBiking, FaBookReader } from 'react-icons/fa';

// Define the tech stacks (no colors needed for pill design)
const techStacks = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'MongoDB' },
  { name: 'GraphQL' },
  { name: 'Git' },
];

// Enhanced helper function with better hover effects
const MotionDiv = ({ children, className = '', delay }) => (
  <motion.div
    className={`group bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-violet-500/50 hover:border-violet-400 shadow-lg hover:shadow-violet-500/20 hover:shadow-xl transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <Section id="about">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-[--color-text-primary] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Me</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Profile Card */}
        <MotionDiv className="lg:col-span-1 md:row-span-2" delay={0.2}>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop"
              alt="Profile"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[--color-text-primary] group-hover:text-violet-400 transition-colors duration-300">
              Cindy Luna Fernandez
            </h3>
            <p className="text-md text-[--color-text-primary] opacity-70">Full-Stack Developer</p>
            <p className="text-md text-[--color-text-primary] opacity-50 mt-1">Tuguegarao City, Philippines</p>
          </div>
        </MotionDiv>

        {/* What I Do Card */}
        <MotionDiv className="md:col-span-1 lg:col-span-2" delay={0.3}>
          <h3 className="text-2xl font-bold mb-4 text-[--color-text-primary] flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaLaptopCode className="text-violet-400" />
            </motion.div>
            What I Do
          </h3>
          <p className="text-base text-[--color-text-primary] leading-relaxed">
            I specialize in crafting elegant and efficient web applications from the ground up. My expertise spans both frontend development, where I focus on building intuitive user interfaces, and backend systems, where I design and implement robust, scalable APIs. I'm dedicated to writing clean, maintainable code that delivers exceptional performance and a seamless user experience.
          </p>
        </MotionDiv>

        {/* Tech I Use Card */}
        <MotionDiv className="md:col-span-2 lg:col-span-1" delay={0.4}>
          <h3 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Tech I Use</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {techStacks.map((tech, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  delay: 0.05 * index,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.5
                }}
              >
                {/* Badge/pill container with glow effect */}
                <motion.div
                  className="relative px-4 py-2 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all duration-300"
                  whileHover={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 4px 15px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tech name */}
                  <span className="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 select-none">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </MotionDiv>

        {/* Beyond Work Card */}
        <MotionDiv className="md:col-span-1" delay={0.5}>
          <h3 className="text-2xl font-bold mb-4 text-[--color-text-primary] flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaBookReader className="text-violet-400" />
            </motion.div>
            Beyond Work
          </h3>
          <p className="text-base text-[--color-text-primary] leading-relaxed">
            When I'm not coding, I enjoy losing myself in a good book, exploring nature on my bike, and experimenting with new recipes in the kitchen. These activities help me stay creative, balanced, and ready to tackle my next project with a fresh perspective.
          </p>
        </MotionDiv>

      </div>
    </Section>
  );
};

export default About;