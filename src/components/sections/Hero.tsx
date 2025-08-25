// components/sections/Hero.tsx

'use client';

import { useState, useEffect } from 'react';
import Section from '../Section';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Define roles outside the component
const roles = ['developer.', 'journalist.', 'writer.'];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Mouse tracking for subtle interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (isTyping) {
        if (currentText.length < fullText.length) {
          typingTimeout = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          }, 100);
        } else {
          setIsTyping(false);
          typingTimeout = setTimeout(() => setCurrentText(fullText), 2000);
        }
      } else {
        if (currentText.length > 0) {
          typingTimeout = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          }, 50);
        } else {
          setIsTyping(true);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(typingTimeout);
  }, [currentText, isTyping, roleIndex]);

  return (
    <Section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), transparent 40%)`
          }}
        />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138, 92, 246, 0.51) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 0'
          }}
        />

        {/* Grid fade effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/50 dark:to-black/50 pointer-events-none" />

        {/* Floating elements for depth */}
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-mono text-[--color-accent-cyan] mb-6"
        >
          Hi, my name is
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[--color-text-primary] relative z-10">
            Cindy.
          </span>
          {/* Hover gradient effect */}
          <motion.span
            className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.02 }}
          >
            Cindy.
          </motion.span>
        </motion.h1>

        {/* Typing effect */}
        <div className="min-h-[40px] md:min-h-[60px] flex justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[--color-text-primary] mt-2 mb-4 md:mt-0 md:mb-0"
          >
            I am a <span className="text-[--color-accent-cyan]">{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              className="inline-block w-[3px] h-[1em] bg-[--color-accent-cyan] ml-2"
            />
          </motion.h2>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-base md:text-lg text-[--color-text-primary] max-w-2xl mx-auto leading-relaxed"
        >
          Blending creativity, journalism, and code to deliver impactful user experiences.
        </motion.p>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Projects Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-violet-500/25 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 py-4 px-8 rounded-2xl font-semibold border-2 border-violet-500/50 hover:border-violet-400 text-[--color-text-primary] hover:bg-violet-500/10 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
