import React from 'react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%">
           <h2 className="font-display font-black text-[12vw] leading-[0.8] tracking-tighter text-center mb-12 hover:text-accent transition-colors duration-500 cursor-hover">
             SAY HELLO
           </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 mt-24">
          <div>
            <Reveal delay={0.1}>
              <p className="text-2xl font-light leading-relaxed mb-8">
                Ready to start a project? Let's build something that breaks the internet (in a good way).
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="mailto:hello@lumina.design" className="text-4xl font-display font-bold underline decoration-2 underline-offset-8 hover:text-accent transition-colors cursor-hover">
                hello@lumina.design
              </a>
            </Reveal>
            
            <div className="mt-12 flex gap-8">
              {['Instagram', 'Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
                <Reveal key={social} delay={0.3 + (i * 0.1)}>
                  <a href="#" className="font-art text-sm tracking-widest hover:line-through cursor-hover">
                    {social}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <form className="space-y-0">
               <div className="border-b border-black/20 group focus-within:border-black transition-colors">
                 <input type="text" placeholder="WHAT IS YOUR NAME?" className="w-full py-6 bg-transparent text-xl font-display placeholder:text-black/30 focus:outline-none" />
               </div>
               <div className="border-b border-black/20 group focus-within:border-black transition-colors">
                 <input type="email" placeholder="YOUR EMAIL ADDRESS?" className="w-full py-6 bg-transparent text-xl font-display placeholder:text-black/30 focus:outline-none" />
               </div>
               <div className="border-b border-black/20 group focus-within:border-black transition-colors">
                 <textarea rows={3} placeholder="TELL ME ABOUT YOUR VISION..." className="w-full py-6 bg-transparent text-xl font-display placeholder:text-black/30 focus:outline-none resize-none" />
               </div>
               <button className="w-full py-8 bg-black text-white font-art font-bold tracking-widest hover:bg-accent transition-colors mt-8 cursor-hover">
                 SEND TRANSMISSION
               </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};