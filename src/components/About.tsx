import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative flex flex-col lg:flex-row items-stretch border-b border-gray-100 min-h-screen">
      {/* Left */}
      <div className="w-full lg:w-3/5 flex items-center px-6 md:px-24 pt-32 pb-12 bg-white">
        <div className="max-w-4xl">
          <motion.span
            className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get to know me / intro
          </motion.span>
          <motion.h2
            className="milestone-heading font-extrabold text-black uppercase"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About<br />Me
          </motion.h2>
          <motion.div
            className="mt-12 flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-px w-24 bg-black" />

          </motion.div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-2/5 bg-gray-50 flex flex-col justify-center px-12 md:px-24 py-20 relative">
        <motion.div
          className="max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-xs font-black uppercase tracking-widest mb-4">Profile</h3>
          <p className="text-lg leading-relaxed text-gray-700 font-light mb-8 italic">
            A down-to-earth and endlessly curious professional who loves learning fast and delivering faster. I pride
            myself on being quick on my feet and highly adaptable, specializing in speeding up workflows without ever
            sacrificing quality or security. I'm ready to bring my energy and practical mindset to the team to drive
            secure, on-time results.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Focus: Full Stack Engineering
          </div>
        </motion.div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 h-64 border border-gray-200 rounded-full opacity-30" />
      </div>
    </section>
  );
}
