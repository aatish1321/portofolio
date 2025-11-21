import React, { Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';

// Lazy load heavy components below the fold
const Work = React.lazy(() => import('./components/Work').then(module => ({ default: module.Work })));
const Skills = React.lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const ChatAssistant = React.lazy(() => import('./components/ChatAssistant').then(module => ({ default: module.ChatAssistant })));

const LoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center text-slate-500 font-art text-xs tracking-widest animate-pulse">
    Loading Asset...
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-void text-slate-200 selection:bg-white selection:text-black font-sans cursor-none">
      <CustomCursor />
      <div className="noise-bg" />
      
      <Navigation />
      
      <main>
        {/* Hero is loaded eagerly for immediate LCP */}
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Work />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      
      <footer className="bg-white text-black py-12 text-center border-t border-black/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-art text-xs tracking-widest">&copy; 2024 LUMINA</p>
          <p className="font-art text-xs tracking-widest mt-4 md:mt-0">DESIGNED WITH INTELLIGENCE</p>
        </div>
      </footer>

      <Suspense fallback={null}>
        <ChatAssistant />
      </Suspense>
    </div>
  );
};

export default App;