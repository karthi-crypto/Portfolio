import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import CompetitiveProgramming from './components/CompetitiveProgramming.jsx';
import Contact from './components/Contact.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import Hero from './components/Hero.jsx';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-void text-white selection:bg-primary/30 selection:text-white">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0.18 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
