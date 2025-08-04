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
      {/* Crazy gaming gradient background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Crazy parallax stars layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 parallax-stars opacity-30"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 parallax-stars opacity-25"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 parallax-stars opacity-20"
      />
      
      {/* Crazy animated nebula clouds */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 50%, hsl(210 100% 65% / 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, hsl(0 100% 55% / 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, hsl(210 50% 8% / 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 20%, hsl(210 100% 75% / 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 90%, hsl(0 100% 65% / 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, hsl(210 100% 65% / 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />
      
      {/* Crazy floating gaming particles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 4 === 0 ? 'w-2 h-2 bg-primary' :
            i % 4 === 1 ? 'w-1 h-1 bg-secondary' :
            i % 4 === 2 ? 'w-3 h-3 bg-primary/50' :
            'w-1 h-1 bg-secondary/50'
          }`}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 200 - 100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: `drop-shadow(0 0 ${Math.random() * 10 + 5}px currentColor)`
          }}
        />
      ))}
      
      {/* Lightning effect lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-primary to-transparent h-px"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;