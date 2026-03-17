import { motion } from 'framer-motion';

interface SkillCategory {
  label: string;
  number: string;
  title: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    label: 'Category 01',
    number: '01',
    title: 'Frontend',
    items: ['React.js', 'Redux', 'Vue.js', 'Tailwind CSS', 'UI/UX Implementation'],
  },
  {
    label: 'Category 02',
    number: '02',
    title: 'Backend',
    items: ['Node.js / Express.js', 'MongoDB', 'MySQL', 'SQLAlchemy ORM', 'Laravel', 'Flask'],
  },
  {
    label: 'Category 03',
    number: '03',
    title: 'Languages',
    items: ['TypeScript / JavaScript', 'C', 'Python'],
  },
  {
    label: 'Category 04',
    number: '04',
    title: 'DevOps',
    items: ['Nginx', 'Docker', 'DigitalOcean', 'CI/CD Pipelines', 'HAProxy', 'System Design'],
  },
  {
    label: 'Category 05',
    number: '05',
    title: 'Soft Skills',
    items: [
      'Quality-Driven Time Management',
      'Detail-Oriented Under Pressure',
      'Security-First Mindset',
      'Growth Mindset',
      'Continuous Learner',
    ],
  },
  {
    label: 'Category 06',
    number: '06',
    title: 'Tools',
    items: [
      'Figma',
      'Miro',
      'Antigravity',
      'Google Stitch (Beta)',
      'Claude AI',
      'v0',
      'Gemini',
      'Notion',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 overflow-hidden bg-abstract-gradient">
      {/* Sidebar */}
      <aside className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-between h-3/4 py-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <div className="vertical-text">Technical Stack</div>
        <div className="h-24 w-px bg-gray-200" />
        <div className="vertical-text">Skills v1.0</div>
      </aside>

      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="page-heading font-light tracking-tighter mb-8">Expertise</h1>
          <p className="text-lg md:text-xl font-light text-gray-500 leading-relaxed">
            A curated selection of my technical toolkit, focused on building performant, scalable, and user-centric
            digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-card pl-8 py-4"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 block mb-6">{cat.label}</span>
              <h2 className="text-3xl font-light mb-10">{cat.title}</h2>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 font-light text-sm">
                    <span className="w-3 h-px bg-gray-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background circles */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex justify-center items-center opacity-[0.03] pointer-events-none">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 border border-gray-900 rounded-full" />
          <div className="absolute inset-10 border border-gray-800 rounded-full" />
          <div className="absolute inset-20 border border-gray-700 rounded-full" />
        </div>
      </div>
    </section>
  );
}
