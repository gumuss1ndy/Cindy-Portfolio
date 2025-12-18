// src/app/layout.tsx

'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// Do NOT import 'metadata' from here, it should be a separate file
// Do not export the metadata object from a client component

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Cindy | Full Stack Developer</title>
      </head>
      <body className={inter.className}>
        <Providers>
          {/* Global Background Elements */}
          <div className="fixed inset-0 z-0">
            {/* Subtle mouse-following gradient */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), transparent 40%)`,
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
                backgroundPosition: '0 0, 0 0',
              }}
            />

            {/* Grid fade effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/50 dark:to-black/50 pointer-events-none" />

            {/* Floating elements for depth */}
            <motion.div
              animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl"
            />
          </div>

          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}