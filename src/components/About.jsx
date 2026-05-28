import { motion } from 'framer-motion';
import { interests } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <SectionHeading
        eyebrow="System Overview"
        title="Engineering useful systems with a modern tech mindset."
        text="Passionate developer interested in scalable applications, automation systems, and AI-powered experiences."
      />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="glass-panel relative overflow-hidden p-8 md:p-10 border-primary/20 hover:border-primary/40 transition-colors">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-[80px]" />
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6">Developer Profile</p>
          <h3 className="font-display text-3xl font-bold text-white mb-6">Full Stack Developer</h3>
          <p className="leading-relaxed text-slate-400">
            I enjoy building clean, scalable software that connects elegant interfaces with reliable backend systems.
            My current direction blends full stack engineering with AI, automation, cloud fundamentals, and practical
            problem solving. I love turning complex logic into simple, intuitive user experiences.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {['Clean Code', 'REST APIs', 'Automation', 'Scalable UI'].map((item) => (
              <span key={item} className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 text-sm font-medium text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.1}>
          {interests.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                className="glass-panel group p-6 border-slate-700/50 hover:border-primary/40 transition-colors"
                key={item.label}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-xl text-primary transition group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Icon />
                </div>
                <p className="font-display text-lg font-semibold text-white group-hover:text-primary transition-colors">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Modern capability mapped into real products.</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="block h-[1px] w-8 bg-primary/50 group-hover:w-16 transition-all duration-300" />
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">
                    Module {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default About;
