// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/gumuss1ndy",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/cindyluna-fernandez-dev",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/gumuss1ndy",
      label: "Facebook",
      color: "hover:text-sky-400"
    }
  ];

  const techStack = [
    { icon: <SiReact />, name: "React", color: "text-cyan-400" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-300" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-500" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full mt-20">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-12" />

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Left Column - Personal Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-[--color-text-primary] mb-2">
              Cindy Luna Fernandez
            </h3>
            <p className="text-sm text-[--color-text-secondary] mb-4 leading-relaxed">
              A Developer, and An Aspiring QA passionate about creating beautiful, functional web experiences.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[--color-text-secondary]">
              <span>Tuguegarao City, Philippines</span>
            </div>
          </motion.div>

          {/* Center Column - Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-[--color-text-primary] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-[--color-text-secondary] hover:text-violet-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Connect */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-[--color-text-primary] mb-4 uppercase tracking-wider">
              Lets Connect
            </h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-xl text-[--color-text-secondary] ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:fernandezcindyluna.dev@gmail.com"
              className="text-sm text-violet-800 hover:text-violet-300 transition-colors duration-300"
            >
              fernandezcindyluna.dev@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright & Credits */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-2 text-sm text-[--color-text-secondary]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <span>© {currentYear} Cindy Fernandez.</span>
            </div>
          </motion.div>

          {/* Tech Stack & Back to Top */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Built with */}
            <div className="hidden md:flex items-center gap-2 text-sm text-[--color-text-secondary]">
              <span>Built with</span>
              <div className="flex items-center gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`text-lg ${tech.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3 py-2 text-sm text-[--color-text-secondary] hover:text-violet-400 bg-white/5 hover:bg-violet-500/10 rounded-lg border border-white/10 hover:border-violet-500/30 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Back to Top</span>
              <motion.div
                className="text-xs"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowUp />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;