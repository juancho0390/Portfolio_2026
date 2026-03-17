
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap } from 'lucide-react';
const personaImg = new URL('../assets/persona.png', import.meta.url).href;

const ProfessionalIntro: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
      {/* Columna de Imagen con Efecto Pro */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative group w-full max-w-[450px]"
      >
        <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 p-2 bg-white/5">
          <motion.img 
            src={personaImg}
            alt= "Juan Guillermo - Professional Portrait" 
            className="w-full h-full object-cover rounded-[3.5rem] transition-all duration-1000 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          
          {/* Overlay sutil al hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
            <p className="text-black font-black text-xm uppercase tracking-[0.3em] mb-2">Lead Developer</p>
            <div className="h-[2px] w-12 bg-rose-500"></div>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/10 blur-[60px] rounded-full animate-pulse"></div>
      </motion.div>

      {/* Columna de Texto - Manifiesto */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex-1 space-y-10"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <Award size={14} /> Perfil de Autor
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
            La Mente Detrás <br/>
            <span className="text-gradient-vibrant italic">De la Máquina.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-2xl">
            Soy Juan Guillermo, un arquitecto de experiencias digitales que cree firmemente que <span className="text-white font-medium">el código es un lienzo</span> y la tecnología, el medio para contar historias que trascienden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              icon: <Target size={20} className="text-rose-400" />, 
              title: "Propósito", 
              text: "Elevar marcas a través de interfaces que respiran precisión y alma." 
            },
            { 
              icon: <Zap size={20} className="text-cyan-400" />, 
              title: "Filosofía", 
              text: "Menos complejidad técnica, más impacto emocional y eficiencia bruta." 
            }
          ].map((item, i) => (
            <div key={i} className="space-y-3 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3">
                {item.icon}
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</h4>
              </div>
              <p className="text-white/30 text-xs leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col gap-2">
          <span className="signature-font text-5xl md:text-6xl text-white/90">Juan Guillermo CR.</span>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-black pl-2">Creative Engineering Director</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalIntro;
