import { motion } from 'framer-motion';

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  link: string;
  certificate?: string;
  description: string[];
  tags: string[];
}

const entries: EducationEntry[] = [
  {
    institution: 'Adama Science and Technology University',
    degree: 'B.Sc. in Computer Science and Engineering',
    period: '2018 — 2023',
    location: 'Kebele 14 Adama, Ethiopia',
    link: 'https://www.astu.edu.et/',
    description: [
      'Graduated from one of only two dedicated Science & Technology universities in Ethiopia, consistently ranked in the national top 10.',
      'Honed technical skills in a rigorous academic environment known for hosting elite national programming championships and driving tech innovation.',
      'Developed a problem-solving mindset through a curriculum heavily focused on applied engineering and real-world industrial solutions.',
    ],
    tags: ['Computer Science', 'Engineering', 'Problem Solving'],
  },
  {
    institution: 'ALX Africa / Holberton School',
    degree: 'Software Engineering Program',
    period: '08/2022 — 08/2023',
    location: 'Remote',
    link: 'https://hbtn.dev/',
    certificate: 'https://savanna.alxafrica.com/certificates/8EPRBpxXr7',
    description: [
      'Completed an intensive, 12-month project-based engineering program requiring 70+ hours a week of coding, debugging, and peer-to-peer collaboration.',
      'Foundation (8 Months): Mastered low-level programming (C), high-level languages (Python), data structures, algorithms, and basic DevOps in a terminal-first environment.',
      'Backend Specialization (4 Months): Architected and deployed robust server-side applications, designed RESTful APIs, and managed complex relational and NoSQL databases.',
      'Built a strong capacity for autonomous problem-solving and rapid adaptation to new technologies and frameworks.',
    ],
    tags: ['Systems Programming', 'Backend Engineering', 'Full Stack'],
  },
];

const entryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Education() {
  return (
    <section id="education" className="pt-32 pb-40 px-6 md:px-12 bg-white relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <motion.div
          className="flex flex-col items-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-4">Chronological Journey</h2>
          <div className="w-12 h-px bg-neutral-dark opacity-20" style={{ backgroundColor: '#1a1a1a' }} />
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 journey-line hidden md:block -translate-x-1/2" />

          <div className="space-y-40 md:space-y-32">
            {entries.map((entry, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={entry.institution}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                  variants={entryVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                >
                  {isLeft ? (
                    <>
                      {/* Content left */}
                      <div className="md:text-right md:pr-16 relative py-4">
                        <div className="hidden md:block absolute -right-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neutral-dark border-4 border-white ring-1 ring-neutral-dark/10 z-10" style={{ backgroundColor: '#1a1a1a' }} />
                        <div className="flex flex-col gap-4">
                          <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-tight" style={{ color: '#1a1a1a' }}>
                            {entry.institution}
                          </h3>
                          <div className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                            {entry.degree}
                          </div>
                          <div className="text-gray-600 leading-relaxed text-base md:text-lg font-light mt-4 md:ml-auto md:max-w-xl space-y-3">
                            {entry.description.map((d, j) => (
                              <p key={j}>{d}</p>
                            ))}
                          </div>
                          {entry.certificate && (
                            <a
                              href={entry.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-500 underline hover:text-black transition-colors mt-2 md:text-right"
                            >
                              View Certificate →
                            </a>
                          )}
                          <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
                            {entry.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 border border-gray-100 rounded-full text-[9px] uppercase tracking-widest text-gray-500">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Year right */}
                      <div className="hidden md:flex items-center justify-center pl-16">
                        <span className="year-faded text-5xl">{entry.period}</span>
                      </div>
                      <div className="md:hidden mt-2">
                        <span className="text-gray-400 font-light text-lg">{entry.period}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Year left */}
                      <div className="hidden md:flex items-center justify-center pr-16">
                        <span className="year-faded text-5xl">{entry.period}</span>
                      </div>

                      {/* Content right */}
                      <div className="md:pl-16 relative py-4">
                        <div className="hidden md:block absolute -left-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neutral-dark border-4 border-white ring-1 ring-neutral-dark/10 z-10" style={{ backgroundColor: '#1a1a1a' }} />
                        <div className="flex flex-col gap-4">
                          <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-tight" style={{ color: '#1a1a1a' }}>
                            {entry.institution}
                          </h3>
                          <div className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                            {entry.degree}
                          </div>
                          <div className="text-gray-600 leading-relaxed text-base md:text-lg font-light mt-4 md:max-w-xl space-y-3">
                            {entry.description.map((d, j) => (
                              <p key={j}>{d}</p>
                            ))}
                          </div>
                          {entry.certificate && (
                            <a
                              href={entry.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-500 underline hover:text-black transition-colors mt-2"
                            >
                              View Certificate →
                            </a>
                          )}
                          <div className="mt-4 flex flex-wrap gap-3">
                            {entry.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 border border-gray-100 rounded-full text-[9px] uppercase tracking-widest text-gray-500">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden mt-2">
                        <span className="text-gray-400 font-light text-lg">{entry.period}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
