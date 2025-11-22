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

// Error Boundary to prevent white-screen crashes
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-8 text-center">
          <div>
             <h1 className="font-display text-4xl mb-4 text-red-500">System Failure</h1>
             <p className="font-mono text-sm text-slate-400">The application encountered a critical error.</p>
             <pre className="mt-4 p-4 bg-slate-900 rounded text-xs text-left overflow-auto max-w-2xl">
               {this.state.error?.toString()}
             </pre>
             <button onClick={() => window.location.reload()} className="mt-8 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200">
               Reboot System
             </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;