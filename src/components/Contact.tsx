import { motion } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haile-melaku/' },
  { label: 'GitHub', href: 'https://github.com/Haile-08' },
  { label: 'Medium', href: 'https://medium.com/@0hailemelaku' },
  { label: 'X', href: 'https://x.com/Haile09774574' },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
      )
      .then(
        () => {
          setSubmitStatus('success');
          form.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col px-6 md:px-24 pt-48 pb-24 overflow-hidden bg-abstract-gradient">
      {/* Sidebar */}
      <aside className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-between h-3/4 py-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <div className="vertical-text">Let's Connect</div>
        <div className="h-24 w-px bg-gray-200" />
        <div className="vertical-text">2026</div>
      </aside>

      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="section-heading font-light">Contact</h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mt-4 flex items-center gap-4">
            <span className="w-8 h-px bg-gray-400" />
            Let's collaborate on your next big idea
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Send a message</h2>
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <div className="group relative border-b border-gray-200 focus-within:border-black transition-colors py-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1" htmlFor="contact-name">
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg placeholder-gray-300 outline-none"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="group relative border-b border-gray-200 focus-within:border-black transition-colors py-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg placeholder-gray-300 outline-none"
                  id="contact-email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="group relative border-b border-gray-200 focus-within:border-black transition-colors py-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1" htmlFor="contact-message">
                  Project Details
                </label>
                <textarea
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg placeholder-gray-300 resize-none outline-none"
                  id="contact-message"
                  name="message"
                  placeholder="Briefly describe your project or inquiry..."
                  rows={3}
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  className="bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm font-light">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-light">
                    Something went wrong. Please try again or email me directly at 0hailemelaku@gmail.com.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Direct info */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Direct Information</h2>
              <div className="flex flex-col space-y-8">
                <a className="group flex items-center gap-6" href="mailto:0hailemelaku@gmail.com">
                  <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                    mail
                  </span>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400">Email Me</span>
                    <span className="text-xl font-light">0hailemelaku@gmail.com</span>
                  </div>
                </a>
                <a className="group flex items-center gap-6" href="tel:+251991353349">
                  <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                    call
                  </span>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400">Call Directly</span>
                    <span className="text-xl font-light">+251 991 353 349</span>
                  </div>
                </a>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-4xl">location_on</span>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400">Location</span>
                    <span className="text-xl font-light">Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-100">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Social Presence</h2>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-gray-400 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Availability tag */}
      <div className="absolute bottom-12 left-6 md:left-24 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400">
        <span>Availability: Open for new projects</span>
      </div>
    </section>
  );
}
