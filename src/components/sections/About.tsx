'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer with expertise in modern web technologies.
              Passionate about creating efficient, scalable, and user-friendly applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Frontend</h4>
                <ul className="text-gray-600 dark:text-gray-300">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Backend</h4>
                <ul className="text-gray-600 dark:text-gray-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
