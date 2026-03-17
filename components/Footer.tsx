
import React from 'react';
import { Cpu, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#030712] py-12 md:py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500/[0.02] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                <Cpu size={16} />
              </div>
              <span className="text-white font-black text-sm uppercase tracking-[0.3em]">Juan Guillermo CR</span>
            </div>
            <p className="text-white/20 text-[2vh] uppercase tracking-[0.5em] font-black">
              Strategic Digital Engineering
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-white/40 text-[1.5vh] font-black uppercase tracking-widest">
                <Globe size={12} /> Global Availability
              </div>
              <p className="text-white/10 text-[1.2vh] uppercase tracking-widest">Remote / Hybrid / On-site</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/10 text-[1.5vh] uppercase tracking-[0.4em] font-black">
            &copy; {new Date().getFullYear()} Juan Guillermo Castaño. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-white/10 text-[1.5vh] uppercase tracking-widest font-black">
            Crafted with <Heart size={10} className="text-rose-500" fill="currentColor" /> in the Digital Forge
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
