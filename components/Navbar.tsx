
import React, { useState } from 'react';
import { Menu, X, Rocket, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: number;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isHero = activeSection === 0;
  const showFullNav = isHero || isHovered;

  const navLinks = [
    { name: 'Perfil', href: '#perfil', id: 'perfil' },
    { name: 'Visión', href: '#vision', id: 'vision' },
    { name: 'Trayectoria', href: '#trayectoria', id: 'trayectoria' },
    { name: 'Showcase', href: '#showcase', id: 'showcase' },
    { name: 'Maestría', href: '#maestria', id: 'maestria' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const springTransition = {
    type: 'spring',
    stiffness: 40, 
    damping: 15,   
    mass: 1.5,     
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-10 px-8 pointer-events-none">
      <motion.nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        initial={false}
        animate={{ 
          width: showFullNav ? 'auto' : '64px',
          height: '64px',
          borderRadius: '32px',
          backgroundColor: isHero 
            ? 'rgba(255, 255, 255, 0.02)' 
            : (isHovered ? 'rgba(3, 7, 18, 0.98)' : 'rgba(249, 148, 188, 0.1)'),
          backdropFilter: 'blur(30px)',
          borderColor: isHovered ? 'rgba(255, 0, 0, 0.345)' : 'rgba(18, 7, 179, 0.05)',
        }}
        transition={springTransition}
        className="pointer-events-auto flex items-center border shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] overflow-hidden px-2 relative"
      >
        <div className="flex items-center h-full relative">
          {/* Centralized Icon / Home Button */}
          <motion.button 
            onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLButtonElement>, 'hero')}
            layout
            className="w-8 h-6 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-gray-950 shadow-2xl shrink-0 z-20 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          >
            <Rocket size={30} fill="currentColor"/>
          </motion.button>

          {/* Morphing Content */}
          <AnimatePresence mode="wait">
            {showFullNav && (
              <motion.div
                key="nav-expanded-content"
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -10, filter: 'blur(5px)', transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="flex items-center gap-12 ml-6 mr-4"
              >
                <span className="text-xl font-black text-white tracking-tighter uppercase italic hidden lg:block whitespace-nowrap">
                  JUAN<span className="text-rose-500">.</span>GUILLERMO
                </span>

                <div className="hidden md:flex items-center gap-10">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={(e) => handleScroll(e, link.id)}
                      className="text-white/30 hover:text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:translate-y-[-2px] whitespace-nowrap"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <a 
                  href="#contacto" 
                  onClick={(e) => handleScroll(e, 'contacto')}
                  className="hidden md:flex items-center gap-3 px-8 py-3 rounded-full bg-white text-gray-950 hover:bg-rose-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-all shadow-xl whitespace-nowrap active:scale-95"
                >
                  Contratar
                  <ChevronRight size={14} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile UI */}
          <div className="md:hidden flex ml-2 mr-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-cyan-400 transition-colors pointer-events-auto"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Backdrop Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(40px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="md:hidden fixed inset-0 z-[90] bg-black/60 flex items-center justify-center p-8 pointer-events-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm bg-gray-900/80 border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col gap-10 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.id)}
                    className="text-white text-2xl font-black uppercase tracking-[0.4em] hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contacto" 
                  onClick={(e) => handleScroll(e, 'contacto')}
                  className="mt-4 px-10 py-6 rounded-2xl bg-cyan-500 text-gray-950 text-base font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-transform inline-block"
                >
                  Hablemos ahora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
