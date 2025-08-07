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
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-4xl font-light mb-4 text-white"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.8)',
                  color: '#FFFFFF'
                }}
              >
                <motion.span 
                  className="text-4xl md:text-6xl mr-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Welcome to
                </motion.span>
              </motion.div>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-widest leading-none mb-6"
                style={{
                  background: 'linear-gradient(135deg, hsl(206 69% 60%), hsl(206 69% 80%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px hsl(206 69% 60% / 0.5)'
                }}
              >
                {['R', 'O', 'V', 'A', 'R', 'A', 'H'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + i * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

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

          {/* Right Column - Clean Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-primary rounded-full flex items-center justify-center text-6xl md:text-8xl relative"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 50px hsl(206 69% 60% / 0.4)'
              }}
            >
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px hsl(206 69% 60%))",
                    "drop-shadow(0 0 30px hsl(206 69% 70%))",
                    "drop-shadow(0 0 20px hsl(206 69% 60%))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎮
              </motion.div>
            </motion.div>
            
            {/* Clean floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
                  style={{
                    left: `${25 + i * 12}%`,
                    top: `${35 + i * 8}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
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