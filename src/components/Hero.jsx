import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiCode, FiTerminal, FiChevronDown } from 'react-icons/fi';
import { roles, stats } from '../data/portfolio.js';
import FuturisticOrb from './FuturisticOrb.jsx';

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const current = roles[roleIndex];
    let cursor = 0;
    setTyped('');
    const typing = window.setInterval(() => {
      cursor += 1;
      setTyped(current.slice(0, cursor));
      if (cursor === current.length) {
        window.clearInterval(typing);
        window.setTimeout(() => setRoleIndex((index) => (index + 1) % roles.length), 2000);
      }
    }, 80);
    return () => window.clearInterval(typing);
  }, [roleIndex]);

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center px-6 pt-24 md:px-12 md:pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-md w-fit mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <FiTerminal className="text-primary" /> System.out.println("Hello, World!");
          </motion.div>
          <motion.h1
            className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Karthik R
            <span className="mt-4 block animate-gradient-text text-4xl sm:text-5xl md:text-6xl pb-2">
              {typed}
              <span className="text-primary animate-pulse">|</span>
            </span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl font-light"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Crafting innovative solutions through code, building scalable architectures, and engineering modern digital experiences.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-5 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <a href="#projects" className="glass-button flex items-center justify-center gap-2 group">
              View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-slate-700">
              <FiCode /> Contact Me
            </a>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-3 gap-4 sm:max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40">
                <p className="font-mono text-3xl font-bold text-white text-glow">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px] animate-pulseSlow" />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-700/50 bg-ink/80 backdrop-blur-xl shadow-2xl">
            <div className="absolute left-6 top-6 z-10 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-600" />
              <span className="h-3 w-3 rounded-full bg-slate-600" />
              <span className="h-3 w-3 rounded-full bg-slate-600" />
            </div>
            <FuturisticOrb />
            <div className="absolute bottom-6 left-6 right-6 grid gap-4 rounded-xl border border-slate-700/50 bg-void/90 p-5 backdrop-blur-md grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-mono">Core Role</p>
                <p className="mt-1 font-display font-medium text-white">Full Stack Dev</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-secondary font-mono">Focus</p>
                <p className="mt-1 font-display font-medium text-white">AI & Systems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll <FiChevronDown size={20} />
      </motion.a>
    </section>
  );
}

export default Hero;
