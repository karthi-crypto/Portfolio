import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import { navItems } from '../data/portfolio.js';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-700/50 bg-ink/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 border border-primary/30 font-mono text-lg font-bold text-primary shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all group-hover:bg-primary/20">
            <FiTerminal />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">Karthik.dev</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-700/50 bg-slate-800/30 p-1 backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-full transition-all" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="hidden md:inline-flex glass-button text-sm px-5 py-2" href="#contact">
          Init Contact
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700 bg-slate-800/50 text-xl text-slate-300 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="mx-6 mb-4 rounded-xl border border-slate-700 bg-ink/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
