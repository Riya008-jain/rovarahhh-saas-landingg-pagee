import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Parallax stars layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 parallax-stars opacity-20"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 parallax-stars opacity-15"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 parallax-stars opacity-10"
      />
      
      {/* Animated nebula clouds */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 50%, hsl(271 76% 53% / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, hsl(217 91% 60% / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, hsl(142 76% 36% / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, hsl(271 76% 53% / 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      
      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;