
import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Code2, Globe } from 'lucide-react';

const SkillModule: React.FC<{ skill: { name: string, iconUrl: string }, index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ delay: index * 0.05 }}
    className="group relative"
  >
    <div className="relative p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#050918]/60 border border-white/5 backdrop-blur-xl group-hover:border-cyan-500/30 transition-all flex flex-col items-center gap-4 md:gap-6">
      <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center p-1">
        <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>

      <div className="text-center">
        <h4 className="mono-font text-[8px] md:text-[10px] font-black text-white/40 tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
          {skill.name}
        </h4>
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const coreRuntime = SKILLS.filter(s => ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'].includes(s.name));
  const logicOps = SKILLS.filter(s => ['Git', 'GitHub', 'Azure'].includes(s.name));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 py-20 md:py-32 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8 md:gap-12 text-center md:text-left">
        <div className="space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">
            Capacidades Técnicas
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Maestría <br/>
            <span className="text-gradient-vibrant">Evolutiva.</span>
          </h2>
        </div>
        
        <div className="max-w-xs mx-auto md:mx-0 space-y-4">
          <p className="text-white/30 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-wider">
            Un stack curado para la <span className="text-white font-bold">eficiencia operativa</span>.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        <div className="lg:col-span-8 space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
            <Code2 size={20} className="text-rose-500" />
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest italic">Core Runtime</h3>
            <div className="hidden sm:block flex-1 h-px bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-6">
            {coreRuntime.map((skill, i) => (
              <SkillModule key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <div className="relative p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.01] border border-white/5 overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Optimización</span>
                <h4 className="text-lg md:text-2xl font-black text-white tracking-tight">Interfaces Multi-Entorno</h4>
              </div>
              <div className="flex gap-2 items-end h-12 md:h-16">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [5, 40, 5] }}
                    transition={{ duration: 1.5 + i * 0.1, repeat: Infinity }}
                    className="w-1.5 md:w-2 rounded-full bg-cyan-500/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
            <Globe size={20} className="text-indigo-500" />
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest italic">Ops & Logic</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {logicOps.map((skill, i) => (
              <SkillModule key={skill.name} skill={skill} index={i + 5} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
