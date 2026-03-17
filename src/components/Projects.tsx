import { motion } from 'framer-motion';

interface Project {
  title: string;
  role: string;
  year: string;
  bullets: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Ourtakeone',
    role: 'Full Stack Developer',
    year: '2026',
    bullets: [
      'Designed and developed a responsive, single-page web application using Laravel, Vue.js, and Inertia.js for a seamless user experience.',
      'Architected a community-driven platform that enables movie enthusiasts to publish, share, and engage with film reviews and opinions.',
    ],
    tech: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
  },
  {
    title: 'AirBnB Clone',
    role: 'Developer',
    year: '2023',
    bullets: [
      'Engineered a comprehensive property rental platform replicating the core functionalities of AirBnB.',
      'Built the backend architecture and routing utilizing Python and Flask, while designing a fully custom, responsive frontend using pure CSS.',
      'Developed and delivered this application as a core software engineering project during training at Holberton School.',
    ],
    tech: ['Python', 'Flask', 'CSS', 'MySQL'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-gray-400 block mb-4">Featured Work</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter">Selected Projects</h1>
          </div>
          <p className="text-gray-500 max-w-md text-lg font-light leading-relaxed">
            A showcase of end-to-end product development, prioritizing high-impact solutions and clean architecture.
          </p>
        </motion.header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card flex flex-col bg-white border border-gray-100 p-6"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Color block placeholder */}
              <div className="relative overflow-hidden mb-8 aspect-video bg-gray-50 border border-gray-200 flex items-center justify-center">
                <span className="text-6xl font-light text-gray-200 select-none">{project.title.charAt(0)}</span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-medium mb-2 tracking-tight">{project.title}</h3>
                <div className="text-sm text-gray-400 mb-6">
                  {project.role} · {project.year}
                </div>

                <div className="mb-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Key Contributions</h4>
                  <ul className="text-sm text-gray-600 space-y-3">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-white text-[10px] text-gray-500 rounded border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
