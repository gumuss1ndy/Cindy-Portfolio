'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaCode, FaRocket } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "fernandezcindy.dev@gmail.com",
      href: "mailto:fernandezcindy.dev@gmail.com",
      color: "from-purple-500 to-violet-600",
      description: "Drop me a line anytime"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Tuguegarao City, Philippines",
      href: "#",
      color: "from-blue-500 to-cyan-600",
      description: "Open to remote work"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-green-500 to-emerald-600",
      description: "Usually much faster!"
    }
  ];

  const workTypes = [
    {
      icon: <FaCode className="text-xl" />,
      title: "Full-Stack Development",
      description: "Complete web applications from concept to deployment"
    },
    {
      icon: <FaRocket className="text-xl" />,
      title: "Freelance Projects",
      description: "Custom solutions for your business needs"
    }
  ];

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[--color-text-primary] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-[--color-text-secondary] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to turn your ideas into reality? I'm always excited to work on new projects,
            collaborate with fellow developers, or discuss the latest in web development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-2xl font-bold text-[--color-text-primary] mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-500"></span>
              Get in Touch
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 rounded-2xl`} />

                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} mb-4`}>
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>

                      <h4 className="font-semibold text-[--color-text-primary] mb-2">
                        {method.title}
                      </h4>

                      <p className="text-sm text-[--color-text-secondary] mb-1">
                        {method.description}
                      </p>

                      {method.href.startsWith('mailto:') ? (
                        <a
                          href={method.href}
                          className="text-sm font-medium text-violet-400 break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[--color-text-primary]">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I Offer */}
          <div className="lg:col-span-1">
            <motion.h3
              className="text-2xl font-bold text-[--color-text-primary] mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-500"></span>
              What I Offer
            </motion.h3>

            <div className="space-y-4">
              {workTypes.map((work, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-violet-500 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 mt-1">
                      {work.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[--color-text-primary] mb-1">
                        {work.title}
                      </h4>
                      <p className="text-sm text-[--color-text-secondary] leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;