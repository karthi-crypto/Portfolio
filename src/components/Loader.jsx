import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-void"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_40%),linear-gradient(120deg,rgba(129,140,248,0.05),transparent,rgba(20,184,166,0.05))]" />
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative h-28 w-28">
          <div className="absolute inset-0 rounded-full border border-slate-700/50" />
          <motion.div
            className="absolute inset-2 rounded-full border-t-2 border-primary border-r-transparent border-b-secondary/60 border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-6 rounded-full border border-accent/40 shadow-[0_0_15px_rgba(20,184,166,0.2)]"
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 grid place-items-center font-mono text-xl font-bold text-white tracking-widest">KR</div>
        </div>
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-400">Loading Environment</p>
          <div className="mt-5 h-1 w-64 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
