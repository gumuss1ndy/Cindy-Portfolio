'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMusic, FaBookReader, FaPen } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image'; // Import the Image component

const techStacks = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'MongoDB' },
  { name: 'GraphQL' },
  { name: 'Git' },
  { name: 'Angular' },
  { name: 'Laravel' },
  { name: 'HTML' },
  { name: 'PHP' },
  { name: 'CSS' },
  { name: 'MySQL' },
  { name: 'Bootstrap' },
  { name: 'Jira' },
  { name: 'Excel' },
];

// Define a type for the props of the MotionDiv component
interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  delay: number;
}

// Enhanced helper function with better hover effects
const MotionDiv = ({ children, className = '', delay }: MotionDivProps) => (
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
            {/* Replace <img> with Next.js's <Image /> component */}
            <Image
              src='/profile.jpg' // Next.js requires a leading slash for public folder images
              alt="Profile"
              fill={true} // Use `fill` to make the image fill its parent container
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              quality={100} // Optional: Adjust quality
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[--color-text-primary] group-hover:text-violet-400 transition-colors duration-300">
              Cindy Luna Fernandez
            </h3>
            <p className="text-md text-[--color-text-primary] opacity-70">Developer | QA Tester</p>
            <p className="text-md text-[--color-text-primary] opacity-50 mt-1">Tuguegarao City, Philippines</p>
          </div>
        </MotionDiv>

        {/* What Interests Me */}
        <MotionDiv className="md:col-span-1 lg:col-span-2" delay={0.3}>
          <h3 className="text-2xl font-bold mb-4 text-[--color-text-primary] flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaLaptopCode className="text-violet-400" />
            </motion.div>
            What Interests me
          </h3>
          <p className="text-base text-[--color-text-primary] leading-relaxed">
            From a young age, I was fascinated by technology and how it shapes the way we interact with the world. This curiosity grew stronger as I explored web development, where creativity and logic come together to solve real problems. During my internship, I discovered my passion for Quality Assurance (QA). I realized that QA requires a keen eye for detail, strong analytical thinking, and a commitment to ensuring that every part of a system works as intended. This mindset shaped how I approach development — not just as building something functional, but as crafting with precision, care, and responsibility.
           </p>
        </MotionDiv>

        {/* Tech I Use Card */}
        <MotionDiv className="md:col-span-2 lg:col-span-1" delay={0.4}>
          <h3 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Tech I Use</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {techStacks.map((tech) => (
              <motion.div
                key={tech.name} // A unique name is a better key than the index
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
                  delay: 0.05, // You can adjust this for each item or remove the delay
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

        {/* Beyond Coding Card */}
        <MotionDiv className="md:col-span-1" delay={0.5}>
          <h3 className="text-2xl font-bold mb-6 text-[--color-text-primary] flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaLaptopCode className="text-violet-400" />
            </motion.div>
            Beyond Coding
          </h3>
          
          <div className="space-y-4">
            {/* Listening to Music */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-violet-400"
              >
                <FaMusic className="text-lg" />
              </motion.div>
              <div>
                <h4 className="font-medium text-[--color-text-primary]">Listening to Music</h4>
                <p className="text-sm text-[--color-text-primary] opacity-70">Melodies & rhythms</p>
              </div>
            </div>

            {/* Reading */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-violet-400"
              >
                <FaBookReader className="text-lg" />
              </motion.div>
              <div>
                <h4 className="font-medium text-[--color-text-primary]">Reading</h4>
                <p className="text-sm text-[--color-text-primary] opacity-70">Books & articles</p>
              </div>
            </div>

            {/* Writing Stories */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-violet-400"
              >
                <FaPen className="text-lg" />
              </motion.div>
              <div>
                <h4 className="font-medium text-[--color-text-primary]">Writing Stories</h4>
                <p className="text-sm text-[--color-text-primary] opacity-70">Creative expression</p>
              </div>
            </div>
          </div>
        </MotionDiv>

      </div>
    </Section>
  );
};

export default About;