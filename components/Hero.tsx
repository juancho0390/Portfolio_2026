
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Settings, Cpu, Brain, Layers } from 'lucide-react';

const Gear = ({ size, x, y, duration, reverse = false, color = "currentColor" }: { size: number, x: string, y: string, duration: number, reverse?: boolean, color?: string }) => (
  <div
    style={{ 
      position: 'absolute', 
      top: y, 
      left: x, 
      width: size, 
      height: size, 
      color,
      animation: `rotate ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`
    }}
    className="opacity-[0.02] md:opacity-[0.025] pointer-events-none"
  >
    <Settings size={size} strokeWidth={0.3} />
  </div>
);

const GearSystem = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <Gear size={300} x="-5%" y="-10%" duration={80} color="#22d3ee" />
    <Gear size={250} x="80%" y="40%" duration={70} reverse color="#f43f5e" />
    <div className="hidden md:block">
      <Gear size={600} x="-10%" y="-20%" duration={80} color="#22d3ee" />
      <Gear size={500} x="75%" y="50%" duration={70} reverse color="#f43f5e" />
    </div>
  </div>
);

const Hero: React.FC = () => {
  const greetings = useMemo(() => [
    "Hola, soy Juan",
    "Hi, I'm Juan",
    "Salut, je suis Juan",
    "Hallo, ich bin Juan",
    "Olá, eu sou o Juan",
    "Ciao, sono Juan"
  ], []);

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % greetings.length;
      const fullText = greetings[i];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(90);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, greetings]);

  return (
    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden">
      <GearSystem />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card w-full max-w-6xl p-6 md:p-14 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden group border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-inner">
              <Cpu size={12} className="animate-pulse" />
              Strategic Digital Artisan
            </div>
          </motion.div>

          <div className="mb-8 md:mb-12 min-h-[100px] md:min-h-[140px] flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-3xl font-extrabold mono-font mb-3 md:mb-5 text-white/20 lowercase tracking-tighter flex items-center gap-2">
              <span className="text-rose-500/40">&gt;</span> {text}
              <span className="w-1 h-5 md:w-1.5 md:h-7 bg-rose-500 cursor-blink ml-1"></span>
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1.05] mt-2">
              <span className="text-gradient-vibrant uppercase inline-block">Strategic Engineer</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-10 md:mb-12 border-y border-white/5 py-8 md:py-12">
            {[
              { icon: <Brain size={18} className="text-rose-400" />, label: "Mindset", value: "Estrategia Digital" },
              { icon: <Layers size={18} className="text-cyan-400" />, label: "Rol", value: "Frontend Leader" },
              { icon: <Cpu size={18} className="text-violet-400" />, label: "Performance", value: "Pixel Perfect", hiddenOnMobile: true }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 md:gap-3 px-4 md:border-r border-white/5 last:border-r-0 ${item.hiddenOnMobile ? 'hidden sm:flex' : ''}`}>
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-[8px] md:text-[9px] uppercase text-white/30 font-black tracking-widest">{item.label}</p>
                </div>
                <p className="text-white font-bold text-base md:text-xl tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10">
            <button 
              onClick={() => document.getElementById('perfil')?.scrollIntoView({ behavior: 'smooth' })} 
              className="w-full sm:w-auto group relative flex items-center justify-center gap-4 px-10 py-5 md:px-12 md:py-6 bg-white text-gray-950 font-black rounded-2xl transition-all hover:scale-[1.03] hover:bg-cyan-400 active:scale-95"
            >
              Explorar Portfolio
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center gap-8 md:gap-10">
              {[
                { icon: <Github size={22} />, href: "https://github.com/juancho0390" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/juan-guillermo-casta%C3%B1o-ruiz-94b4b1174/" },
                { icon: <Mail size={22} />, href: "mailto:juan.designerproject@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/25 transition-all hover:text-rose-500 hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
