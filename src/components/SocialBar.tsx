'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: FaGithub, 
    href: 'https://github.com/your-username',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-400/20'
  },
  { 
    name: 'X', 
    icon: FaTwitter, 
    href: 'https://twitter.com/your-username',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-400/20'
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    href: 'https://www.instagram.com/your-username',
    color: 'hover:text-pink-400',
    bgColor: 'hover:bg-pink-400/20'
  },
  { 
    name: 'Facebook', 
    icon: FaFacebook, 
    href: 'https://www.facebook.com/your-username',
    color: 'hover:text-blue-600',
    bgColor: 'hover:bg-blue-600/20'
  },
  { 
    name: 'Email', 
    icon: FaEnvelope, 
    href: 'mailto:fernandezcindy.dev@gmail.com',
    color: 'hover:text-violet-400',
    bgColor: 'hover:bg-violet-400/20'
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      type: "spring",
      stiffness: 200,
      damping: 15
    } 
  },
};

const SocialBar = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col items-center"
    >
      {/* Social Icons Container */}
      <motion.div 
        className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-violet-500/20 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <motion.ul
          className="flex flex-col space-y-3"
          variants={containerVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.li
              key={link.name}
              variants={iconVariants}
            >
              <Link 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.name}
              >
                <motion.div
                  className={`relative p-3 rounded-xl text-[--color-text-primary] ${link.color} ${link.bgColor} transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-violet-400/30`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 15 
                  }}
                >
                  <link.icon className="w-5 h-5 relative z-10" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${
                        index === 0 ? 'rgba(156, 163, 175, 0.2)' :
                        index === 1 ? 'rgba(96, 165, 250, 0.2)' :
                        index === 2 ? 'rgba(244, 114, 182, 0.2)' :
                        index === 3 ? 'rgba(37, 99, 235, 0.2)' :
                        'rgba(139, 92, 246, 0.2)'
                      }, transparent 70%)`
                    }}
                  />
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Decorative Line */}
      <motion.div 
        className="mt-6 w-px h-16 bg-gradient-to-t from-violet-500/50 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      {/* Floating Orb */}
      <motion.div
        className="mt-2 w-2 h-2 rounded-full bg-violet-400"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default SocialBar;