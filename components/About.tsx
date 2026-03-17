
import React, { useState } from 'react';
import { Palette, Code2, Fingerprint, X, Zap, ArrowRight, Eye, Rocket, Terminal, Shield, Mail as MailIcon, CreditCard, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PillarMetric {
  label: string;
  value: string;
}

interface ActionStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
  cta: string;
}

interface PillarContent {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  philosophy: string;
  contextDeep: string;
  metrics: PillarMetric[];
  actions: ActionStep[];
  color: string;
  accent: string;
  animationType: 'dna' | 'focus' | 'stream';
}

const PillarAnimation = ({ type, color }: { type: string, color: string }) => {
  if (type === 'dna') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
            className="absolute border border-white/5"
            style={{ width: 80 + i * 30, height: 80 + i * 30, borderColor: `${color}20` }}
          />
        ))}
        <Fingerprint size={40} style={{ color }} className="relative z-10 opacity-30" />
      </div>
    );
  }
  if (type === 'focus') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-32 h-32 border border-dashed rounded-full"
          style={{ borderColor: color }}
        />
        <Eye size={40} style={{ color }} className="relative z-10 opacity-30" />
      </div>
    );
  }
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [30, 80, 30], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          className="w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarContent | null>(null);

  const creativePillars: PillarContent[] = [
    {
      id: "adn",
      icon: <Fingerprint className="text-rose-400" size={24} />,
      title: "ADN Digital Único",
      desc: "No creo plantillas, construyo identidades. Cada proyecto es una pieza artesanal única.",
      philosophy: "Identidad Visual Exclusiva.",
      contextDeep: "La presencia digital de tu negocio debe ser tan única como tu propia firma. Me enfoco en capturar la esencia de lo que haces para traducirlo en una interfaz que no se parezca a nada en el mercado.",
      metrics: [
        { label: "Satisfacción", value: "100%" },
        { label: "Personalidad", value: "Alta" }
      ],
      actions: [
        {
          title: "Consultoría Inicial",
          desc: "Hablemos de tu idea sin compromisos ni costos ocultos para definir el mejor camino.",
          icon: <Headphones size={20} />,
          cta: "Agendar Gratis"
        },
        {
          title: "Paquete Integral",
          desc: "Soluciones que ya incluyen hosting de alta velocidad y certificados SSL.",
          icon: <Shield size={20} />,
          cta: "Ver Detalles"
        }
      ],
      color: "from-rose-500/20 to-transparent",
      accent: "#f43f5e",
      animationType: 'dna'
    },
    {
      id: "design",
      icon: <Palette className="text-cyan-400" size={24} />,
      title: "Diseño con Intención",
      desc: "Fusión perfecta entre estética visual y funcionalidad pragmática.",
      philosophy: "Estética que genera confianza.",
      contextDeep: "El diseño es la primera impresión que recibe tu cliente. Trabajo en crear entornos visuales que no solo sean atractivos, sino que faciliten la interacción.",
      metrics: [
        { label: "Claridad", value: "Máxima" },
        { label: "Precios", value: "Flexibles" }
      ],
      actions: [
        {
          title: "Presupuesto Ajustado",
          desc: "Planes accesibles diseñados para ajustarse a la etapa actual de tu emprendimiento.",
          icon: <CreditCard size={20} />,
          cta: "Cotizar Ahora"
        },
        {
          title: "Cuentas Corporativas",
          desc: "Configuración de correos profesionales para que tu comunicación sea siempre formal.",
          icon: <MailIcon size={20} />,
          cta: "Saber Más"
        }
      ],
      color: "from-cyan-500/20 to-transparent",
      accent: "#22d3ee",
      animationType: 'focus'
    },
    {
      id: "eng",
      icon: <Code2 className="text-violet-400" size={24} />,
      title: "Ingeniería Sensible",
      desc: "Desarrollo front-end de alto nivel que pone la tecnología al servicio de la emoción.",
      philosophy: "Solidez Técnica Garantizada.",
      contextDeep: "Una web hermosa debe funcionar a la perfección. Mi enfoque técnico asegura que tu sitio cargue rápido y se vea impecable en cualquier dispositivo.",
      metrics: [
        { label: "Velocidad", value: "Pro" },
        { label: "Soporte", value: "Continuo" }
      ],
      actions: [
        {
          title: "Análisis de Proyecto",
          desc: "Revisamos tus necesidades técnicas actuales para ofrecerte la solución más eficiente.",
          icon: <Terminal size={20} />,
          cta: "Diagnóstico"
        },
        {
          title: "Todo Incluido",
          desc: "Gestión completa de dominios, hosting y mantenimiento para que no te preocupes por nada.",
          icon: <Rocket size={20} />,
          cta: "Consultar"
        }
      ],
      color: "from-violet-500/20 to-transparent",
      accent: "#8b5cf6",
      animationType: 'stream'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-12 items-center relative z-10 py-12 md:py-24">
      <div className="flex-1 space-y-6 md:space-y-10 w-full text-center lg:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[9px] font-black uppercase tracking-[0.4em]">
            Digital Artisan & Frontend Lead
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tighter">
            Donde el Código <br className="hidden sm:block" />
            <span className="text-gradient-vibrant">Se Vuelve Identidad.</span>
          </h2>
        </div>

        <div className="grid gap-4 w-full">
          {creativePillars.map((pillar) => (
            <motion.div 
              key={pillar.id}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => setSelectedPillar(pillar)}
              className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all group cursor-pointer text-left items-center"
            >
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                {pillar.icon}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-base md:text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-medium line-clamp-1">{pillar.desc}</p>
              </div>
              <ArrowRight size={18} className="text-white/10 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block flex-1 relative group w-full max-w-[450px]">
         <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[550px] border border-white/10 p-2 bg-white/5">
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" 
            alt="Visual Design Process" 
            className="w-full h-full rounded-[3.5rem] object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#030712] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-white/40 hover:text-white transition-colors z-[210] p-2 hover:bg-white/5 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                      {selectedPillar.icon}
                    </div>
                    <div>
                      <h4 className="text-white/30 text-[10px] uppercase font-black tracking-[0.2em]">Visión 2025</h4>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{selectedPillar.title}</h3>
                    </div>
                  </div>
                  
                  <div className="aspect-video lg:aspect-square w-full rounded-[2rem] bg-black/40 border border-white/5 relative overflow-hidden">
                    <PillarAnimation type={selectedPillar.animationType} color={selectedPillar.accent} />
                  </div>
                </div>

                <div className="pt-8 grid grid-cols-2 gap-4">
                  {selectedPillar.metrics.map((m, i) => (
                    <div key={i} className="p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-white/20 text-[9px] uppercase font-black tracking-widest mb-2">{m.label}</p>
                      <p className="text-white text-xl md:text-3xl font-black" style={{ color: selectedPillar.accent }}>{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-3/5 p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="space-y-10 md:space-y-12">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-rose-500 font-black text-[11px] uppercase tracking-[0.3em]">
                      <Zap size={14} /> {selectedPillar.philosophy}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                      Ingeniería <br className="hidden md:block" />
                      <span className="text-gradient-vibrant">del Éxito.</span>
                    </h2>
                  </div>

                  <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
                    {selectedPillar.contextDeep}
                  </p>
                  
                  <div className="grid gap-4">
                    {selectedPillar.actions.map((action, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.04]">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-white/60">
                           {action.icon}
                        </div>
                        <div className="flex-1 space-y-1">
                          <h5 className="text-white font-black text-sm uppercase tracking-wider">{action.title}</h5>
                          <p className="text-white/40 text-xs leading-relaxed font-medium">{action.desc}</p>
                        </div>
                        <button 
                          onClick={() => { setSelectedPillar(null); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 hover:bg-white hover:text-black transition-all"
                        >
                          {action.cta}
                        </button>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedPillar(null)}
                    className="w-full px-10 py-5 rounded-2xl bg-white text-gray-950 font-black uppercase text-[12px] tracking-widest hover:bg-cyan-400 transition-all shadow-2xl"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
