import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
