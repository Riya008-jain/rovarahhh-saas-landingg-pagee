import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-pointer, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-pointer, [role="button"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {/* Outer crosshair */}
      <div className="relative w-8 h-8">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neon-primary transform -translate-y-1/2" />
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-neon-primary transform -translate-x-1/2" />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
            backgroundColor: isHovering ? 'hsl(var(--neon-accent))' : 'hsl(var(--neon-secondary))',
          }}
        />
        
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-accent" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-accent" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-accent" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-accent" />
      </div>
      
      {/* Hover glow effect */}
      {isHovering && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-neon-primary/20 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;