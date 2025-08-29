// components/Navbar.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

// Navigation links config
const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

// Framer-motion variants for list items
// Explicitly define the Variants type to satisfy TypeScript
const linkVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Common button styles for consistent reuse
const buttonBaseStyles =
  'p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-violet-400/30 hover:border-violet-400/60 hover:bg-violet-500/20 transition-all duration-300 text-[--color-text-primary] hover:text-violet-400';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Callbacks to toggle theme and mobile menu state
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Prevent rendering on server or before theme is loaded
  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? 'bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-lg border-violet-500/20'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#hero" className="relative group" aria-label="Home">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-2xl tracking-wider">
                CLF
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {navLinks.map(({ id, name }) => (
              <motion.li key={id} variants={linkVariants}>
                <Link
                  href={`#${id}`}
                  className="relative group px-3 py-2 text-[--color-text-primary] hover:text-violet-400 transition-all duration-300 font-medium"
                >
                  {name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={buttonBaseStyles}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <FaSun className="w-4 h-4" />
                ) : (
                  <FaMoon className="w-4 h-4" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={toggleMenu}
              className={buttonBaseStyles + ' md:hidden'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <FaTimes className="w-4 h-4" />
                ) : (
                  <FaBars className="w-4 h-4" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/10 dark:bg-white/5 backdrop-blur-lg border-t border-violet-500/20"
          >
            <motion.ul
              className="flex flex-col items-center py-6 space-y-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {navLinks.map(({ id, name }) => (
                <motion.li key={id} variants={linkVariants}>
                  <Link
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="relative group px-6 py-3 text-[--color-text-primary] hover:text-violet-400 transition-all duration-300 text-lg font-medium rounded-lg hover:bg-violet-500/10"
                  >
                    {name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;