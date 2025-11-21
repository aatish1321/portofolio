import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './Reveal';

export const Skills: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-void relative overflow-hidden">
       {/* Background Gradients */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full filter blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <Reveal>
              <h2 className="font-display font-bold text-6xl mb-8 leading-tight">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Arsenal</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-400 text-xl leading-relaxed max-w-md">
                My approach combines technical rigor with creative fluidity. 
                I don't just write code; I compose experiences using a curated stack of modern technologies.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-wrap content-start gap-4">
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.05}>
                <div className="group relative cursor-hover">
                   <div className={`
                      px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                      transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black hover:border-white
                      flex items-center gap-2
                   `}>
                      <span className="text-2xl font-display font-medium">{skill.name}</span>
                      <span className="text-xs opacity-50 font-art group-hover:opacity-100">
                         {String(skill.level).padStart(2, '0')}%
                      </span>
                   </div>
                </div>
              </Reveal>
            ))}
            
            {/* Decorative elements floating */}
            <div className="absolute right-0 top-1/2 w-32 h-32 border border-dashed border-white/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-24 h-24 border border-white/10 rotate-45 animate-float pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};