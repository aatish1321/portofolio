import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-sm font-art tracking-widest text-slate-500 mb-20">Selected Works (0{PROJECTS.length})</h2>
        </Reveal>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 group perspective-1000 cursor-hover">
                <Reveal delay={0.2}>
                  <div className="relative overflow-hidden rounded-sm transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category} Project`}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Custom View Project Button appearing on hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 z-20 mix-blend-difference">
                       <ArrowUpRight className="text-black" size={32} />
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5">
                <Reveal delay={0.3}>
                  <span className="text-accent font-art text-xs tracking-widest mb-4 block">{project.category}</span>
                  <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:text-stroke transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l border-white/20 pl-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-wider text-slate-300 hover:bg-white hover:text-black transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};