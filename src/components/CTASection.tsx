import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import SpinWheel from './SpinWheel';

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [showSpinWheel, setShowSpinWheel] = useState(false);

  const handleWin = (prize: string) => {
    setShowSpinWheel(false);
    // Handle prize logic here
    alert(`Amazing! You won: ${prize}! Check your email for details.`);
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow">
              Dominate
            </span>
            <br />
            the Gaming World?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of gamers already experiencing the future. 
            Your epic adventure starts with a single click.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="btn-gaming text-xl px-12 py-6 group"
            >
              <span className="group-hover:animate-pulse">🚀</span>
              Start Your Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </Button>

            <div className="text-muted-foreground">or</div>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowSpinWheel(true)}
              className="btn-gaming-accent text-xl px-12 py-6 group"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="group-hover:animate-spin-slow"
              >
                🎰
              </motion.span>
              Spin for Free Days
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Gamers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-primary">5★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating action elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-4xl opacity-50"
      >
        🎮
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-4xl opacity-50"
      >
        🏆
      </motion.div>

      <SpinWheel
        isOpen={showSpinWheel}
        onClose={() => setShowSpinWheel(false)}
        onWin={handleWin}
      />
    </section>
  );
};

export default CTASection;