import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="logo-container">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-xl md:text-2xl font-medium tracking-tight hover:opacity-60 transition-opacity cursor-pointer"
          style={{ letterSpacing: '-0.02em' }}
        >
          Haile
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="hover:opacity-60 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:block">
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="text-sm font-semibold border-b border-black pb-1 hover:opacity-60 transition-all flex items-center gap-1"
        >
          Contact Me
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-black transition-all ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`} />
        <span className={`block w-6 h-px bg-black transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-black transition-all ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-2xl font-light hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="mt-4 text-sm font-semibold border-b border-black pb-1 hover:opacity-60 transition-all flex items-center gap-1"
          >
            Contact Me
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}
