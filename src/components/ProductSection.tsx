import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Engine',
      description: 'Advanced machine learning creates personalized gaming experiences that adapt to your playstyle.'
    },
    {
      icon: '🌐',
      title: 'Immersive 3D Worlds',
      description: 'Cutting-edge WebGL technology delivers console-quality graphics directly in your browser.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Multiplayer',
      description: 'Lightning-fast networking ensures seamless gameplay with players worldwide.'
    },
    {
      icon: '🎯',
      title: 'Precision Controls',
      description: 'Ultra-responsive input system designed for competitive gaming excellence.'
    }
  ];

  return (
    <section id="product" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-primary">Product</span> That{' '}
            <span className="text-neon-accent">Redefines</span> Gaming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rovarah combines AI intelligence with cutting-edge 3D technology to create 
            the most immersive gaming platform ever built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-3xl flex-shrink-0"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neon-secondary group-hover:text-neon-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="card-gaming p-8 text-center">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-32 h-32 mx-auto bg-gradient-hero rounded-full flex items-center justify-center text-6xl mb-6"
              >
                🎮
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-neon-primary">
                Next-Gen Gaming Platform
              </h3>
              <p className="text-muted-foreground">
                Experience the future of interactive entertainment with Rovarah's 
                revolutionary AI-driven gaming ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;