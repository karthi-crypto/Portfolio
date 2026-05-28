import { motion } from 'framer-motion';
import { FiExternalLink, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { cpProfiles } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function CompetitiveProgramming() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900/20">
      <SectionHeading
        eyebrow="Problem Solving"
        title="Algorithm & Logic Discipline."
        text="Active problem solver on LeetCode and GeeksforGeeks, sharpening Data Structures, logic, and optimization."
      />

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="glass-panel p-8 md:p-10 border-slate-700/50 hover:border-primary/40 transition-colors">
          <div className="grid h-16 w-16 place-items-center rounded-xl border border-secondary/20 bg-secondary/10 text-3xl text-secondary">
            <FiTarget />
          </div>
          <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-white">500+ Problems Solved</h3>
          <p className="mt-4 leading-relaxed text-slate-400">
            Consistent algorithm practice across arrays, strings, dynamic programming, recursion, SQL, and core data
            structures. Engineering is about problem solving at its core.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
            <FiTrendingUp className="text-2xl text-primary" />
            <span className="font-medium text-slate-300">Growing through deliberate practice and debugging.</span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {cpProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Reveal key={profile.platform} delay={index * 0.1}>
                <motion.a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel group block h-full p-8 border-slate-700/50 hover:border-primary/40 hover:bg-slate-800/40 transition-colors"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Icon className="text-5xl text-slate-400 transition-colors group-hover:text-primary" />
                  <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white">{profile.platform}</h3>
                  <p className="mt-2 font-mono text-sm text-slate-500">{profile.label}</p>
                  <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{profile.metric}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    Open profile <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CompetitiveProgramming;
