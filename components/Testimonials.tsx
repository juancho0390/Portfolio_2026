
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{ testimonial: { content: string, avatar: string, name: string, role: string }, index: number }> = ({ testimonial, index }) => {
  const colors = ['#22d3ee', '#f43f5e', '#8b5cf6'];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full flex flex-col"
    >
      {/* Resplandor de fondo dinámico */}
      <div 
        className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="relative flex-1 bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] backdrop-blur-3xl group-hover:bg-white/[0.04] group-hover:border-white/20 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl">
        
        {/* Badge de Verificación */}
        <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 opacity-40 group-hover:opacity-100 transition-opacity">
          <ShieldCheck size={12} className="text-white/60" />
          <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Verified Feedback</span>
        </div>

        <div>
          <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={accentColor} color={accentColor} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            ))}
          </div>

          <Quote size={40} className="text-white/5 mb-6 group-hover:text-white/10 transition-colors" />
          
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light italic mb-10 group-hover:text-white transition-colors">
            "{testimonial.content}"
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
          
          <div className="flex items-center gap-5">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-[8px] opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: accentColor }}
              ></div>
              <img 
                className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-white/40 transition-all" 
                src={testimonial.avatar} 
                alt={testimonial.name} 
              />
              <div className="absolute -bottom-1 -right-1 bg-[#030712] rounded-full p-1">
                 <CheckCircle size={14} className="text-emerald-400" fill="currentColor" />
              </div>
            </div>
            
            <div>
              <p className="font-black text-white text-base tracking-tight mb-0.5">{testimonial.name}</p>
              <p className="mono-font text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold" style={{ color: `${accentColor}80` }}>
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Decoración lineal lateral */}
        <div 
          className="absolute left-0 top-1/4 bottom-1/4 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-32 flex flex-col">
      
      {/* Cabecera Estratégica */}
      <div className="flex flex-col items-center text-center mb-24 space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          Validación Externa
        </motion.div>
        
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          Confianza <br/>
          <span className="text-gradient-vibrant">de Mis Socios.</span>
        </h2>
        
        <p className="text-white/30 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Resultados tangibles y experiencias transformadoras contadas por quienes han confiado en mi <span className="text-white font-medium">ingeniería estratégica</span>.
        </p>
      </div>

      {/* Grid de Testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            index={i} 
          />
        ))}
      </div>

      {/* Decoración de Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Testimonials;
