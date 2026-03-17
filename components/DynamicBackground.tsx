
import React from 'react';
import { motion } from 'framer-motion';

interface DynamicBackgroundProps {
  activeIndex: number;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ activeIndex }) => {
  // Definimos posiciones para las esferas según la sección, incluyendo la nueva
  const orbPositions = [
    { top: '10%', left: '10%', color: 'rgba(34, 211, 238, 0.15)' }, // Hero
    { top: '30%', left: '40%', color: 'rgba(244, 63, 94, 0.15)' },  // Perfil (Nueva)
    { top: '40%', left: '70%', color: 'rgba(139, 92, 246, 0.15)' }, // Vision
    { top: '70%', left: '20%', color: 'rgba(244, 63, 94, 0.15)' },  // Trayectoria
    { top: '20%', left: '80%', color: 'rgba(34, 211, 238, 0.15)' }, // Showcase
    { top: '80%', left: '60%', color: 'rgba(139, 92, 246, 0.15)' }, // Maestria
    { top: '30%', left: '10%', color: 'rgba(244, 63, 94, 0.15)' },  // Feedback
    { top: '50%', left: '50%', color: 'rgba(34, 211, 238, 0.15)' }, // Contacto
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
      {/* Esferas de luz dinámicas */}
      <motion.div
        animate={{
          top: orbPositions[activeIndex]?.top || '50%',
          left: orbPositions[activeIndex]?.left || '50%',
          backgroundColor: orbPositions[activeIndex]?.color || 'rgba(34, 211, 238, 0.15)'
        }}
        transition={{ duration: 2.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-50 will-change-[top,left]"
      />
      
      <motion.div
        animate={{
          bottom: orbPositions[(activeIndex + 2) % orbPositions.length]?.top || '50%',
          right: orbPositions[(activeIndex + 2) % orbPositions.length]?.left || '50%',
          backgroundColor: orbPositions[(activeIndex + 2) % orbPositions.length]?.color || 'rgba(139, 92, 246, 0.15)'
        }}
        transition={{ duration: 3, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 will-change-[bottom,right]"
      />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default DynamicBackground;
