import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import SpinWheel from './SpinWheel';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [prize, setPrize] = useState<string>('');

  const handleWin = (wonPrize: string) => {
    setPrize(wonPrize);
    setShowSpinWheel(false);
    // Here you would typically handle the prize logic
    alert(`Congratulations! You won: ${wonPrize}`);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="text-neon-primary text-6xl md:text-8xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>{' '}
              <span className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                Welcome to
              </span>
              <br />
              <motion.span 
                className="text-neon-secondary"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgb(255 0 0 / 0.8)",
                    "0 0 40px rgb(255 0 0 / 1)",
                    "0 0 20px rgb(255 0 0 / 0.8)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Rovarah
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            >
              The future of AI-powered gaming. Professional-grade 3D experiences.
              <br />
              <span className="text-neon-accent">Where artificial intelligence meets immersive entertainment.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="btn-gaming text-lg px-8 py-4"
              >
                🚀 Start Your Journey
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowSpinWheel(true)}
                className="btn-gaming-accent text-lg px-8 py-4"
              >
                🎰 Try Your Luck
              </Button>
            </motion.div>

            {prize && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/20 border border-accent/30 rounded-lg p-4"
              >
                <p className="text-accent font-semibold">
                  🎉 You won: {prize}!
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column - 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative h-96 md:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-30 blur-3xl animate-pulse-neon" />
            <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/50">
              {/* Crazy Gaming 3D Model */}
              <div className="w-full h-full flex items-center justify-center bg-card/20 backdrop-blur-sm rounded-2xl border border-primary/30 relative overflow-hidden">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [0, 15, -15, 0],
                    scale: [1, 1.2, 0.9, 1.1, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-32 h-32 md:w-48 md:h-48 bg-gradient-hero rounded-full flex items-center justify-center text-6xl md:text-8xl animate-crazy-bounce relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{
                      filter: [
                        "drop-shadow(0 0 20px rgb(0 100 255))",
                        "drop-shadow(0 0 40px rgb(255 0 0))",
                        "drop-shadow(0 0 30px rgb(0 100 255))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🎮
                  </motion.div>
                </motion.div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + i * 5}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1.5, 0.5]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Uncomment below to use actual Spline model */}
              {/* 
              <Spline
                scene="https://prod.spline.design/your-spline-model-url"
                className="w-full h-full"
              />
              */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spin Wheel Modal */}
      <SpinWheel
        isOpen={showSpinWheel}
        onClose={() => setShowSpinWheel(false)}
        onWin={handleWin}
      />
    </section>
  );
};

export default HeroSection;