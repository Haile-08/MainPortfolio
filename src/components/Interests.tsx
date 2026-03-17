import { motion } from 'framer-motion';

interface Interest {
  name: string;
  tooltip: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const interests: Interest[] = [
  { name: 'Tech Entrepreneurship', size: 'xl', tooltip: 'Building scalable startups from zero to launch.' },
  { name: 'Software Development', size: 'lg', tooltip: 'Crafting clean, efficient and maintainable code.' },
  { name: 'Fitness & Weightlifting', size: 'md', tooltip: 'Discipline, consistency, and progressive overload.' },
  { name: 'Behavioral Psychology', size: 'sm', tooltip: 'Understanding what drives human decisions.' },
  { name: 'Open Source', size: 'md', tooltip: 'Contributing to the community that built my skills.' },
  { name: 'Movies (Arcane)', size: 'lg', tooltip: 'Storytelling, world-building, and visual artistry.' },
];

const sizeClasses = {
  sm: 'px-5 py-2 text-xs font-semibold',
  md: 'px-6 py-3 text-sm font-medium',
  lg: 'px-8 py-4 text-lg font-light',
  xl: 'px-8 py-5 text-xl font-light',
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Interests() {
  return (
    <section id="interests" className="relative min-h-screen flex flex-col px-6 md:px-24 pt-32 pb-24 overflow-hidden bg-abstract-gradient">
      {/* Sidebar */}
      <aside className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-between h-3/4 py-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <div className="vertical-text">Curated Passions</div>
        <div className="h-24 w-px bg-gray-200" />
        <div className="vertical-text">2024</div>
      </aside>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <motion.div
          className="relative z-10 flex flex-col justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex space-x-16 mb-16 pt-20">
            <div>
              <span className="block text-4xl font-light">06</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-500">Core Interests</span>
            </div>
            <div>
              <span className="block text-4xl font-light">∞</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-500">Curiosity</span>
            </div>
          </div>

          <div className="mb-12">
            <h1 className="hero-heading font-light">Interests</h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 mt-4 flex items-center gap-4">
              <span className="w-8 h-px bg-gray-400" />
              Beyond the pixels and code
            </p>
          </div>

          <div className="max-w-md text-gray-500 text-sm leading-relaxed">
            A collection of curiosities that fuel my creative process. Hover over any topic to see its significance.
          </div>
        </motion.div>

        {/* Right – Tags */}
        <div className="relative min-h-[500px] flex items-center justify-center lg:justify-end">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end max-w-xl">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.name}
                className="relative interest-tag"
                style={{ marginTop: i % 2 === 0 ? `${i * 8}px` : `-${i * 4}px` }}
                custom={i}
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span
                  className={`${sizeClasses[interest.size]} border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all cursor-default inline-block`}
                >
                  {interest.name}
                </span>
                <div className="tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 bg-white p-4 shadow-xl border border-gray-100 z-20 rounded-sm">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Insight</p>
                  <p className="text-xs">{interest.tooltip}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background circles */}
          <div className="absolute -z-10 opacity-5 w-[120%] h-[120%] pointer-events-none">
            <div className="absolute inset-0 border border-gray-900 rounded-full scale-110" />
            <div className="absolute inset-20 border border-gray-700 rounded-full scale-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
