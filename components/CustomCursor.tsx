import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const followerCursor = useRef<HTMLDivElement>(null);
  
  // Use refs for state that doesn't need to trigger re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isClickedRef = useRef(false);

  useEffect(() => {
    // optimization: Use direct DOM updates to avoid React render cycle overhead on mousemove
    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      // Update main dot immediately
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = 
        ['button', 'a', 'input', 'textarea'].includes(target.tagName.toLowerCase()) ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-hover');
    };

    const onMouseDown = () => { isClickedRef.current = true; };
    const onMouseUp = () => { isClickedRef.current = false; };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });

    // Animation loop for the smooth follower
    let animationFrameId: number;
    
    const animate = () => {
      // Linear interpolation (lerp) for smooth trailing effect
      const { x: targetX, y: targetY } = positionRef.current;
      const { x: currentX, y: currentY } = followerPosRef.current;
      
      // Ease factor - 0.1 gives a nice delay
      const ease = 0.15;
      
      followerPosRef.current.x += (targetX - currentX) * ease;
      followerPosRef.current.y += (targetY - currentY) * ease;

      if (followerCursor.current) {
        const size = isHoveringRef.current ? 64 : 32;
        const scale = isClickedRef.current ? 0.8 : 1;
        const offset = isHoveringRef.current ? 32 : 16;
        
        // Using translate3d forces GPU acceleration
        followerCursor.current.style.transform = `translate3d(${followerPosRef.current.x - offset}px, ${followerPosRef.current.y - offset}px, 0) scale(${scale})`;
        followerCursor.current.style.width = `${size}px`;
        followerCursor.current.style.height = `${size}px`;
        followerCursor.current.style.backgroundColor = isHoveringRef.current ? 'white' : 'transparent';
        followerCursor.current.style.opacity = isHoveringRef.current ? '0.1' : '0.5';
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={mainCursor}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference will-change-transform"
      />
      <div
        ref={followerCursor}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border border-white mix-blend-difference transition-colors duration-300 ease-out flex items-center justify-center will-change-transform"
      />
    </>
  );
};