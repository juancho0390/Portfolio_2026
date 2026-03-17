
import React from 'react';
import { MessageCircle, Send, Copy, CheckCircle2, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('juan.designerproject@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl px-6 relative z-10 py-12 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden rounded-[3.5rem] bg-[#050918] border border-white/5 shadow-[0_0_100px_-20px_rgba(0,0,0,1)]"
      >
        {/* Capas de Iluminación Orgánica */}
        <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-rose-500/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Lado Izquierdo: El Gancho Visual */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                Disponible ahora
              </motion.div>
              <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <Zap size={10} /> Respuesta en menos de 2h
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Inicia la <br/>
              <span className="text-gradient-vibrant italic">Transformación.</span>
            </h2>

            <p className="text-white/40 text-base md:text-lg max-w-md font-medium leading-relaxed">
              No busques un desarrollador, contrata un <span className="text-white">aliado estratégico</span> capaz de materializar tu visión con ingeniería de vanguardia.
            </p>

            <div className="hidden lg:flex items-center gap-8 pt-4">
               <div className="flex flex-col">
                  <span className="text-white font-black text-xl italic leading-none tracking-tight">Juan Guillermo CR</span>
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] mt-1">Creative Director</span>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
                  ))}
               </div>
            </div>
          </div>

          {/* Lado Derecho: Interfaz de Contacto */}
          <div className="w-full lg:w-auto flex flex-col gap-4">
            
            {/* Botón de Acción Principal */}
            <motion.a 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:juan.designerproject@gmail.com"
              className="group relative flex items-center justify-between gap-8 bg-white p-2 pl-8 rounded-3xl transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] overflow-hidden"
            >
              <div className="flex flex-col items-start py-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-cyan-600 transition-colors">Vía Correo Electrónico</span>
                <span className="text-gray-950 font-black text-lg tracking-tight">Enviar Propuesta</span>
              </div>
              <div className="bg-gray-950 text-white p-5 rounded-2xl group-hover:bg-cyan-500 transition-colors">
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>

            {/* Grid de Acciones Secundarias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button 
                onClick={copyEmail}
                whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all group"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Email</span>
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{copied ? 'Copiado' : 'Copiar'}</span>
                </div>
                {copied ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Copy size={18} className="text-white/20 group-hover:text-white" />}
              </motion.button>

              <motion.a 
                href="https://wa.me/573022735445"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: 'rgba(37,211,102,0.08)' }}
                className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all group"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">WhatsApp</span>
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Chat Directo</span>
                </div>
                <MessageCircle size={18} className="text-white/20 group-hover:text-[#25D366]" />
              </motion.a>
            </div>

            {/* Footer del Panel */}
            <div className="mt-4 flex items-center justify-center lg:justify-end gap-6 px-4">
              <div className="flex items-center gap-2">
                 <MousePointer2 size={12} className="text-white/10" />
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Interacción Prioritaria</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
              <div className="flex items-center gap-2">
                 <ArrowRight size={12} className="text-white/10" />
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Escalar Proyecto</span>
              </div>
            </div>

          </div>
        </div>
        
        {/* Barra de Proceso Decorativa Inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </motion.div>

      {/* Cierre Visual */}
      <div className="mt-12 opacity-10 hover:opacity-40 transition-opacity cursor-default flex items-center gap-6">
         <span className="text-[1rem] font-black text-white uppercase tracking-[1.5em]">Ingeniería de Clase Mundial</span>
      </div>
    </div>
  );
};

export default Contact;
