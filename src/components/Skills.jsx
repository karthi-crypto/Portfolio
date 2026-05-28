import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-slate-900/20">
      <SectionHeading
        eyebrow="Tech Stack"
        title="A practical toolkit for modern products."
        text="Frontend polish, backend logic, databases, and development tools organized as a clean engineering toolkit."
      />

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.05}>
            <motion.div className="glass-panel h-full p-8 border-slate-700/50 hover:border-primary/30 transition-colors" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 240 }}>
              <div className={`mb-6 h-1 w-16 rounded-full bg-gradient-to-r ${group.accent}`} />
              <h3 className="font-display text-xl font-bold text-white tracking-tight">{group.title}</h3>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="group flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <Icon className="text-xl text-primary transition group-hover:scale-110 group-hover:text-white" />
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
