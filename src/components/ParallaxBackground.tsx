import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax transforms for different layers with varying speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Slow layer
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Medium layer
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]); // Fast layer
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -800]); // Fastest layer
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 0.6, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Gaming gradient background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Parallax Stars Layer 1 - Slowest */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0"
      >
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Stars Layer 2 - Medium Speed */}
      <motion.div 
        style={{ y: y2, opacity: opacity2 }}
        className="absolute inset-0"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.5, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Stars Layer 3 - Fast Speed */}
      <motion.div 
        style={{ y: y3, scale }}
        className="absolute inset-0"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-neon-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 2, 0.5],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Deep Space Layer - Fastest */}
      <motion.div 
        style={{ y: y4 }}
        className="absolute inset-0 opacity-20"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-neon-accent rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 3, 1],
              filter: ['blur(2px)', 'blur(0px)', 'blur(2px)'],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced animated nebula clouds */}
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
      
      {/* Enhanced floating gaming particles with depth */}
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 4 === 0 ? 'w-2 h-2 bg-primary' :
            i % 4 === 1 ? 'w-1 h-1 bg-secondary' :
            i % 4 === 2 ? 'w-3 h-3 bg-primary/50' :
            'w-1 h-1 bg-secondary/50'
          }`}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 300 - 150, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 2, 0.5],
            rotate: [0, 720]
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: `drop-shadow(0 0 ${Math.random() * 15 + 5}px currentColor)`,
            zIndex: Math.floor(Math.random() * 10)
          }}
        />
      ))}
      
      {/* Enhanced lightning effect lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-primary to-transparent h-px"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 150}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            filter: ['brightness(1)', 'brightness(2)', 'brightness(1)']
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 8 + 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;