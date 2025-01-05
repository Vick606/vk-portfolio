import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Hi, I'm Your Name
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center mb-8">
          Full Stack Developer
        </h2>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}