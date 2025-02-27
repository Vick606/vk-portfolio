'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for data visualization using Python and React",
    image: "/projects/project1.jpg",
    tags: ["Python", "React", "D3.js", "Flask"],
    github: "https://github.com/victorkoech",
    demo: "https://dashboard-demo.com"
  },
  {
    title: "ML Prediction Platform",
    description: "Machine learning platform for predictive analytics",
    image: "/projects/project2.jpg",
    tags: ["Python", "Scikit-learn", "FastAPI", "React"],
    github: "https://github.com/victorkoech",
    demo: "https://ml-platform.demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing data analysis and web development projects",
    image: "/projects/project3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/victorkoech",
    demo: "https://victorkoech.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}