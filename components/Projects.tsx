
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col justify-center py-12 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 text-center md:text-left">
        <div className="max-w-3xl space-y-4 md:space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mx-auto md:mx-0"
          >
            Casos de Estudio Curados
          </motion.div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Arquitectura que <br/>
            <span className="text-gradient-vibrant">Define Mercados.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-end">
            <p className="text-white/30 text-sm md:text-base max-w-xs font-medium leading-relaxed uppercase tracking-wider">
              Cada proyecto es una declaración de <span className="text-white">excelencia técnica</span> y diseño estratégico.
            </p>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-cyan-500 hidden md:block"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative glass-card rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:border-cyan-500/40 hover:-translate-y-2 shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute top-6 right-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/40 group-hover:bg-cyan-500 group-hover:text-gray-950 transition-all border border-white/5">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                 </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 rounded-2xl bg-white text-gray-950 font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-cyan-400 transition-colors shadow-2xl"
                >
                  Ver Proyecto
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                 <span className="text-[9px] uppercase font-black text-white/20 tracking-[0.3em]">Front-End Engineering</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed line-clamp-2 font-medium">
                {project.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(j => (
                      <div key={j} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-white/5 backdrop-blur-md"></div>
                    ))}
                 </div>
                 <span className="text-[8px] font-black text-white/10 uppercase tracking-widest group-hover:text-rose-500 transition-colors">Success Rate 100%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
