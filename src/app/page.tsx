'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <motion.main 
      className="flex min-h-screen flex-col"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <Hero />
      <motion.div variants={fadeInUp}>
        <About />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Projects />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Contact />
      </motion.div>
    </motion.main>
  );
}