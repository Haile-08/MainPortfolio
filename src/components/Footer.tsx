const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haile-melaku/' },
  { label: 'GitHub', href: 'https://github.com/Haile-08' },
  { label: 'Medium', href: 'https://medium.com/@0hailemelaku' },
  { label: 'X', href: 'https://x.com/Haile09774574' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
      <div>© {new Date().getFullYear()} Haile • Built for performance &amp; clarity</div>
      <div className="flex gap-8 mt-4 md:mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
