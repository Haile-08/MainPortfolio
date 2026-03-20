import React from 'react';
import { motion } from 'framer-motion';
import resumeFile from '../assets/resume.pdf';
import carecentralScreen from '../assets/carecentral.png';
import atendScreen from '../assets/clients.png';

interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  location: string;
  link?: string;
  links?: { label: string; url: string }[];
  bullets: string[];
  banner?: string;
}

const experiences: ExperienceEntry[] = [
  {
    period: '07/2025',
    title: 'Full stack developer',
    company: 'Carecentral',
    location: 'Mexico (Remote)',
    link: 'https://cuidado.atend.mx/',
    links: [{ label: 'Youtube Demo', url: 'https://youtu.be/5qc2IJpZGx0' }],
    bullets: [
      'Architected and developed a multi-tenant healthcare SaaS platform from the ground up, designing the UI in Figma and building the frontend in React.js to allow diverse organizations to customize branding and toggle features.',
      'Engineered an offline-first Flutter mobile app (iOS/Android) for nurses operating in low-connectivity areas, featuring automated background syncing and offline location tracking to ensure uninterrupted patient care.',
      'Designed a robust Express.js backend and optimized MySQL database, implementing custom stored procedures and indexes to handle complex data relationships efficiently.',
      'Built a dynamic intervention scheduling system that automatically calculated nurse availability and blocked booked time slots/areas in real-time.',
      'Integrated Stripe Connect to enable seamless, tenant-specific payment processing across the platform.',
      'Thrived in a fast-paced, customer-first environment, rapidly adapting to shifting requirements to deliver high-priority features on strict deadlines.',
    ],
    banner: carecentralScreen,
  },
  {
    period: '08/2024 – 06/2025',
    title: 'Full stack developer',
    company: 'Atend',
    location: 'Mexico (Remote)',
    link: 'https://www.atend.mx/',
    bullets: [
      'Developed a secure invoice management platform that streamlines billing by allowing administrators to upload documents and providing clients with self-service login access to download their invoices.',
      'Modernized a legacy healthcare operations system by building an upgraded platform for administrators to efficiently manage service catalogs, client accounts, and patient records.',
      'Executed the complete technical handover of the system upon its acquisition, migrating the legacy codebase and operational database to the new owner\'s server infrastructure.',
    ],
    banner: atendScreen,
  },
  {
    period: '04/2025 — 07/2025',
    title: 'Founder',
    company: 'Redjebena Startup',
    location: 'Addis Ababa, Ethiopia | ALX Accelerator',
    link: 'http://redjebena.et/',
    links: [{ label: 'Youtube Demo', url: 'https://youtu.be/GsIr_OHfCRE' }],
    bullets: [
      'Founded and developed Redjebena, securing a spot in the ALX Accelerator from a pool of 400 startups.',
      'Directed the product development lifecycle, overseeing 2 engineers to build and deploy the MVP within a 3-month deadline.',
      'Defined the go-to-market strategy alongside a dedicated sales representative, resulting in the acquisition of 22 initial users.',
      'Presented product vision and technical roadmap to investors at a high-stakes Demo Day.',
    ],
  },
  {
    period: '12/2023 — 08/2024',
    title: 'Full Stack Developer',
    company: 'Gig Work',
    location: 'Addis Ababa, Ethiopia',
    links: [
      { label: 'Dragon Tower', url: 'https://dragon-tower-v2.vercel.app/' },
      { label: 'Crash', url: 'https://crash-jkdv.vercel.app/' },
    ],
    bullets: [
      'Developed a full-stack e-commerce gift shop utilizing the MERN stack (MongoDB, Express.js, React, Node.js), handling both frontend UI and backend logic.',
      'Engineered secure transaction flows by integrating local Ethiopian payment gateways, specifically Chapa and Telebirr, across multiple client applications.',
      'Built interactive frontend components for a gaming platform using React, successfully cloning the UI and game logic for "Dragon Tower" and "Crash" to meet precise client specifications.',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-5 sm:px-6 md:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 bg-abstract-gradient"
    >
      {/* Sidebar */}
      <aside className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-between h-3/4 py-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <div className="vertical-text">Profession Path</div>
        <div className="h-24 w-px bg-gray-200" />
        <div className="vertical-text">Profession Path</div>
      </aside>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-6 sm:gap-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="section-heading font-light mb-6">Experience</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
              Building high-performance digital systems, leading engineering teams, and scaling products from zero to
              production.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start md:items-end w-full md:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href={resumeFile}
              download="Haile_Resume.pdf"
              className="group flex w-full md:w-auto items-center justify-center gap-3 bg-neutral-dark text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              Download Resume
            </a>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-3 md:mr-2">PDF VERSION (2.4MB)</span>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="relative pl-6 sm:pl-8 md:pl-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div key={i} className="relative mb-16 sm:mb-20 md:mb-24 last:mb-0" variants={itemVariants}>
              {/* Dot */}
              <div
                className="absolute -left-6 sm:-left-8 md:-left-16 w-3 h-3 bg-white border border-neutral-dark rounded-full mt-2 -translate-x-1/2 z-10"
                style={{ borderColor: '#1a1a1a' }}
              />

              {/* Date & Title */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                <span className="text-sm font-semibold tracking-tighter text-gray-400 uppercase">{exp.period}</span>
                <h3 className="text-2xl sm:text-3xl font-light">{exp.title}</h3>
              </div>

              {/* Company info */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-base sm:text-lg text-gray-600">{exp.company}</span>
                <span className="text-gray-300">·</span>
                <span className="text-sm text-gray-500">{exp.location}</span>
                {exp.link && (
                  <>
                    <span className="text-gray-300">·</span>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 underline hover:text-black transition-colors"
                    >
                      Visit →
                    </a>
                  </>
                )}
                {exp.links &&
                  exp.links.map((lnk, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-gray-300">·</span>
                      <a
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 underline hover:text-black transition-colors"
                      >
                        {lnk.label} →
                      </a>
                    </React.Fragment>
                  ))}
              </div>

              {/* Banner */}
              {exp.banner && (
                <div className="relative overflow-hidden mb-8 aspect-video border border-gray-200 bg-white">
                  <img src={exp.banner} alt={`${exp.company} screen`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-700/20 to-transparent" />
                </div>
              )}

              {/* Bullets */}
              <ul className="space-y-4 text-gray-500 text-sm sm:text-base">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorative circle */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none -mr-32 -mb-32">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 border border-gray-900 rounded-full" />
          <div className="absolute inset-20 border border-gray-900 rounded-full" />
          <div className="absolute inset-40 border border-gray-900 rounded-full" />
        </div>
      </div>
    </section>
  );
}
