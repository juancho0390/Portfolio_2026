
import React from 'react';
import { TIMELINE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star, Zap, Clock } from 'lucide-react';

const TimelineCard: React.FC<{ item: { title: string, isCurrent?: boolean, year: string, description: string }, index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  const getIcon = (title: string) => {
    if (title.includes('Técnico')) return <Briefcase size={22} className="text-cyan-400" />;
    if (title.includes('Ingeniería')) return <GraduationCap size={22} className="text-violet-400" />;
    if (title.includes('Especialización')) return <Zap size={22} className="text-rose-400" />;
    return <Star size={22} className="text-amber-400" />;
  };

  return (
    <div className="relative mb-20 md:mb-32 last:mb-0 w-full group/item">
      {/* Nodo de Línea Central */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-[3px] md:border-[6px] border-[#030712] relative z-10 transition-all duration-500 ${
            item.isCurrent ? 'bg-cyan-400 shadow-[0_0_30px_#22d3ee]' : 'bg-white/20 group-hover/item:bg-white group-hover/item:scale-125'
          }`}
        />
      </div>

      {/* Contenedor Principal: Grid de 2 columnas en Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start">
        
        {/* Lado de la Fecha (Izquierda en Even, Derecha en Odd) */}
        <div className={`flex flex-col ${isEven ? 'md:items-end md:text-right order-1' : 'md:items-start md:text-left order-1 md:order-2'} pl-16 md:pl-0 pt-0 md:pt-4`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="block text-4xl md:text-8xl font-black italic tracking-tighter text-white/5 group-hover/item:text-gradient-vibrant transition-all duration-700 select-none leading-none">
              {item.year.split(' - ')[0]}
            </span>
            <span className="block text-[10px] md:text-xs font-black text-white/20 uppercase tracking-[0.4em] mt-2 md:mt-4">
               Hito Cronológico No. 0{index + 1}
            </span>
          </motion.div>
        </div>

        {/* Lado del Contenido (Derecha en Even, Izquierda en Odd) */}
        <div className={`${isEven ? 'order-2' : 'order-2 md:order-1'} pl-16 md:pl-0`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative group/card"
          >
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl">
              {/* Header de Tarjeta */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover/card:bg-white group-hover/card:text-black transition-all">
                  {getIcon(item.title)}
                </div>
                <div className="flex flex-col items-end">
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${item.isCurrent ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/40'}`}>
                    {item.isCurrent ? 'En Ejecución' : 'Completado'}
                  </div>
                  <span className="text-[10px] font-bold text-white/10 mt-2 mono-font">{item.year}</span>
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm md:text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Footer con Indicador de Progreso Sutil */}
              <div className="mt-10 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40"
                 />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 py-16 md:py-32 flex flex-col items-center overflow-visible">
      
      {/* Cabecera de Sección */}
      <div className="text-center mb-24 md:mb-48 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-[0.4em]"
        >
          <Clock size={12} className="text-rose-500" />
          Ingeniería de Experiencia
        </motion.div>
        
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] md:leading-none">
          Trayectoria <br/>
          <span className="text-gradient-vibrant">Estratégica.</span>
        </h2>
        
        <p className="text-white/30 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4">
          Un recorrido de <span className="text-white font-bold">más de una década</span> perfeccionando la simbiosis entre el hardware, el software y la experiencia de usuario.
        </p>
      </div>

      {/* Cuerpo del Timeline */}
      <div className="relative w-full">
        {/* Línea Vertical Central Dinámica */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] md:w-[2px] z-0">
          <div className="absolute inset-0 bg-white/[0.05]"></div>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 via-indigo-600 to-rose-500"
          />
        </div>

        <div className="relative z-10">
          {TIMELINE.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Cierre de Sección */}
      <div className="mt-32 md:mt-48 flex flex-col items-center gap-6">
         <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
         <span className="text-[10px] font-black text-white/10 uppercase tracking-[1em] text-center">Continúa el Crecimiento</span>
      </div>
    </div>
  );
};

export default Timeline;
