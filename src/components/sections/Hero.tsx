'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Victor K
            <span className="block text-blue-600 mt-2">Data Analyst & Developer</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Transforming data into actionable insights and building robust web solutions
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-[400px] w-[400px] mx-auto">
            <Image
              src="/profile.jpg"
              alt="Victor K"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}