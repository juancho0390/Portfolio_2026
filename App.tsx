
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalIntro from './components/ProfessionalIntro';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DynamicBackground from './components/DynamicBackground';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', component: <Hero /> },
  { id: 'perfil', component: <ProfessionalIntro /> },
  { id: 'vision', component: <About /> },
  { id: 'trayectoria', component: <Timeline /> },
  { id: 'showcase', component: <Projects /> },
  { id: 'maestria', component: <Skills /> },
  { id: 'feedback', component: <Testimonials /> },
  { id: 'contacto', component: <Contact /> },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SECTIONS.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#030712] selection:bg-rose-500 selection:text-white">
      <DynamicBackground activeIndex={activeSection} />
      <Navbar activeSection={activeSection} />
      
      
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col items-center gap-6">
        <LayoutGroup id="sidebar-nav">
          {SECTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className="group relative flex items-center justify-center w-6 h-6 outline-none"
            >
              <motion.div 
                animate={{ 
                  scale: activeSection === i ? 0 : 1,
                  opacity: activeSection === i ? 0 : 0.2
                }}
                className="w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-700"
              />
              
              <AnimatePresence>
                {activeSection === i && (
                  <motion.div
                    layoutId="active-indicator-pill"
                    transition={{
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                      mass: 2
                    }}
                    className="absolute w-[2px] h-12 bg-cyan-400 rounded-full z-10"
                    style={{ 
                      boxShadow: '0 0 25px 3px rgba(34, 211, 238, 0.5)',
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="absolute right-12 flex items-center pointer-events-none">
                <span className={`
                  whitespace-nowrap text-[8px] font-black uppercase tracking-[0.6em] transition-all duration-1000 ease-out
                  ${activeSection === i 
                    ? 'text-cyan-400 opacity-100 translate-x-0 blur-0' 
                    : 'text-white/10 opacity-0 translate-x-4 blur-[4px] group-hover:opacity-40 group-hover:translate-x-2 group-hover:blur-0'
                  }
                `}>
                  {SECTIONS[i].id}
                </span>
              </div>
            </button>
          ))}
        </LayoutGroup>
      </div>

      <main ref={scrollRef} className="relative z-10">
        {SECTIONS.map((section, i) => (
          <section 
            key={section.id} 
            id={section.id} 
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {section.component}
            </motion.div>
          </section>
        ))}
        <Footer />
      </main>
    </div>
  );
};

export default App;
