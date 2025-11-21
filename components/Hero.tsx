import React from 'react';
import { Reveal } from './Reveal';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void">
      {/* 
         Optimization: Replaced 'filter: blur()' with radial-gradients. 
         CSS Blur is very expensive on the GPU for large areas.
         Radial gradients are rendered much faster.
      */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.6)_0%,rgba(0,0,0,0)_70%)] mix-blend-screen animate-blob will-change-transform" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.6)_0%,rgba(0,0,0,0)_70%)] mix-blend-screen animate-blob animation-delay-2000 will-change-transform" />
        <div className="absolute -bottom-32 left-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(55,48,163,0.6)_0%,rgba(0,0,0,0)_70%)] mix-blend-screen animate-blob animation-delay-4000 will-change-transform" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start">
          <Reveal>
             <span className="block text-sm font-art tracking-[0.3em] text-slate-400 mb-4 ml-1">
               Portfolio 2024
             </span>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mix-blend-difference">
              DIGITAL
            </h1>
          </Reveal>
          
          <Reveal delay={0.2} className="self-end">
             <h1 className="font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-stroke text-stroke-hover transition-all duration-700 cursor-none">
               ALCHEMY
             </h1>
          </Reveal>

          <Reveal delay={0.3} width="100%">
            <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
              <p className="max-w-md text-lg text-slate-400 font-light leading-relaxed">
                Redefining web experiences through emotional design and technical precision. 
                Creating art that lives in the browser.
              </p>
              
              <div className="flex gap-8 mt-8 md:mt-0">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest mb-2">Role</span>
                  <span className="text-white font-display">Creative Dev</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-widest mb-2">Based</span>
                  <span className="text-white font-display">Global / Remote</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Rotating Scroll Indicator - Reduced SVG complexity */}
      <div className="absolute bottom-12 right-12 hidden md:flex items-center justify-center">
        <div className="relative w-32 h-32 animate-spin-slow will-change-transform">
          <svg viewBox="0 0 100 100" width="100" height="100" className="overflow-visible">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text fontSize="11">
              <textPath xlinkHref="#circle" className="fill-white font-art uppercase tracking-widest">
                Scroll to explore • Scroll to explore •
              </textPath>
            </text>
          </svg>
        </div>
        <ArrowDown className="absolute text-white" size={20} />
      </div>
    </section>
  );
};