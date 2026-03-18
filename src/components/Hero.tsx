import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-24 pt-20 overflow-hidden bg-abstract-gradient">
      {/* Sidebar */}
      <aside className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-between h-3/4 py-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <div className="vertical-text">Full Stack Engineer</div>
        <div className="h-24 w-px bg-gray-200" />
        <div className="vertical-text">2026</div>
      </aside>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          className="relative z-10 flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >


          {/* Heading */}
          <div className="mb-8">
            <motion.h1
              className="hero-heading font-light"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              Hello
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-light text-gray-600 mt-4 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="w-8 h-px bg-gray-400" />
              It's Haile, a Full Stack Engineer
            </motion.p>
          </div>
        </motion.div>

        {/* Right – Animated circles */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Outer ring – slow spin */}
            <motion.div
              className="absolute inset-0 border border-gray-900 rounded-full opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Middle ring – reverse spin */}
            <motion.div
              className="absolute inset-4 border border-gray-800 rounded-full opacity-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner ring – pulsing */}
            <motion.div
              className="absolute inset-10 border border-gray-700 rounded-full opacity-10"
              animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.18, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Cross lines */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-px h-full bg-gray-400 rotate-45" />
              <div className="w-px h-full bg-gray-400 -rotate-45" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-24 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-black cursor-pointer transition-colors"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Scroll down</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </motion.div>
    </section>
  );
}
