import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', width }}>
      <div
        style={{
          // Optimization: Removed filter: blur(). 
          // Animating filters is computationally expensive. Opacity + Transform is sufficient and 60fps.
          transform: isVisible ? 'translate3d(0,0,0) scale(1)' : 'translate3d(0, 50px, 0) scale(0.98)',
          opacity: isVisible ? 1 : 0,
          transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
          willChange: 'transform, opacity' 
        }}
      >
        {children}
      </div>
    </div>
  );
};