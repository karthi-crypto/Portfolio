import { motion } from 'framer-motion';
import { FiArrowUpRight, FiLayers, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <SectionHeading
        eyebrow="Project Archive"
        title="Premium builds with real-world utility."
        text="Interactive project cards demonstrating practical applications, technical stack, and overall impact."
      />

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <motion.article
              className="group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-slate-700/50 bg-ink/50 p-8 shadow-xl backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-[80px] transition-all group-hover:bg-primary/30" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-2xl text-primary transition-all group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-110">
                    <FiLayers />
                  </div>
                  <span className="rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
                    {project.signal}
                  </span>
                </div>
                
                <h3 className="mt-8 font-display text-2xl font-bold text-white md:text-3xl tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="mt-4 mb-8 flex-grow leading-relaxed text-slate-400">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    View Project <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
