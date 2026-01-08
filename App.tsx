import React from 'react';
import { ThemeContextProvider, useThemeContext } from './utils/themeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const AppContent: React.FC = () => {
  const { mode } = useThemeContext();

  return (
    <div className="min-h-screen flex flex-col bg-alice_blue-900 dark:bg-stormy_teal-500 transition-colors duration-300">
      <Header />

      <main className="flex-grow w-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;
