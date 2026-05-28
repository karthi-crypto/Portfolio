import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { socials } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const contactCards = [
  { label: 'Email', value: 'karthikr3016@gmail.com', href: 'mailto:karthikr3016@gmail.com', icon: FiMail },
  { label: 'Phone', value: '+91 9042556213', href: 'tel:+919042556213', icon: FiPhone },
  { label: 'Location', value: 'Coimbatore, Tamil Nadu', href: 'https://maps.google.com/?q=Coimbatore,Tamil+Nadu', icon: FiMapPin },
];

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <SectionHeading
        eyebrow="Contact Channel"
        title="Let us build something sharp."
        text="Reach out for full stack projects, AI-powered ideas, backend systems, automation workflows, or collaboration."
      />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-6">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.label === 'Location' ? '_blank' : undefined}
                rel={card.label === 'Location' ? 'noreferrer' : undefined}
                className="glass-panel group flex items-center gap-5 p-6 border-slate-700/50 hover:border-primary/40 transition-colors"
                whileHover={{ x: 8 }}
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-2xl text-primary transition-shadow group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Icon />
                </span>
                <span>
                  <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">{card.label}</span>
                  <span className="mt-1 block font-medium text-slate-200 group-hover:text-white transition-colors">{card.value}</span>
                </span>
              </motion.a>
            );
          })}

          <div className="glass-panel p-6 border-slate-700/50">
            <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Social Links</p>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all">
                    <Icon className="text-lg" /> {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass-panel relative overflow-hidden p-8 md:p-10 border-slate-700/50"
            action="mailto:karthikr3016@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-secondary/10 blur-[80px]" />
            <div className="relative z-10 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-400">Name</span>
                  <input className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" name="name" placeholder="Your name" required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-400">Email</span>
                  <input className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-400">Subject</span>
                <input className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" name="subject" placeholder="Project / collaboration" required />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-400">Message</span>
                <textarea className="w-full min-h-[160px] resize-none rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" name="message" placeholder="Tell me what you want to build" required />
              </label>
              <button className="glass-button flex items-center justify-center gap-2 w-full sm:w-auto self-start mt-2" type="submit">
                Send Transmission <FiSend />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
