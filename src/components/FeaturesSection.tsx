import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [crackedFeatures, setCrackedFeatures] = useState<number[]>([]);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Gaming',
      description: 'Advanced AI that adapts to your playstyle and creates unique experiences.'
    },
    {
      icon: '🌐',
      title: '3D Immersive Worlds',
      description: 'Stunning 3D environments that push the boundaries of web gaming.'
    },
    {
      icon: '⚡',
      title: 'Real-time Performance',
      description: 'Lightning-fast response times and seamless multiplayer experiences.'
    },
    {
      icon: '🎯',
      title: 'Precision Controls',
      description: 'Ultra-responsive controls designed for competitive gaming.'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Comprehensive progression system with rewards and leaderboards.'
    },
    {
      icon: '🔧',
      title: 'Customizable Everything',
      description: 'Mod support and extensive customization options for every player.'
    }
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCrackedFeatures(prev => {
          if (prev.length < features.length) {
            return [...prev, prev.length];
          }
          clearInterval(timer);
          return prev;
        });
      }, 800);

      return () => clearInterval(timer);
    }
  }, [isInView, features.length]);

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-primary">Features</span> That{' '}
            <span className="text-neon-accent">Level Up</span> Your Game
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🥚 Watch as each feature cracks open to reveal the power within
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Egg Shell Container */}
              <div className="relative">
                {/* Egg Shell */}
                <motion.div
                  className={`card-gaming p-6 h-full relative overflow-hidden ${
                    crackedFeatures.includes(index) ? 'egg-crack cracked' : 'egg-crack'
                  }`}
                  animate={crackedFeatures.includes(index) ? {
                    background: [
                      'hsl(var(--card) / 0.5)',
                      'hsl(var(--primary) / 0.1)',
                      'hsl(var(--card) / 0.5)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Crack Animation Overlay */}
                  {crackedFeatures.includes(index) && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Crack lines */}
                      <div className="absolute top-1/4 left-1/2 w-px h-1/2 bg-accent transform -translate-x-1/2 rotate-12" />
                      <div className="absolute top-1/3 left-1/3 w-px h-1/3 bg-accent transform rotate-45" />
                      <div className="absolute top-1/2 right-1/3 w-px h-1/4 bg-accent transform -rotate-30" />
                    </motion.div>
                  )}

                  {/* Content */}
                  <motion.div
                    animate={crackedFeatures.includes(index) ? {
                      scale: [1, 1.05, 1],
                      filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-neon-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* Glow effect when cracked */}
                  {crackedFeatures.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-primary rounded-xl"
                    />
                  )}
                </motion.div>

                {/* Feature reveal animation */}
                {crackedFeatures.includes(index) && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
                    className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-glow-accent"
                  >
                    ✨
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/20">
            <span className="text-sm text-muted-foreground">Features Unlocked:</span>
            <span className="text-accent font-bold">{crackedFeatures.length}/{features.length}</span>
            <div className="flex gap-1">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    crackedFeatures.includes(index) ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;