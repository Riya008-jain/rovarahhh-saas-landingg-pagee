import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';

const EmailSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "🎉 Welcome to the Rovarah Universe!",
      description: "You're now subscribed to our newsletter. Get ready for gaming updates!",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, hsl(var(--accent) / 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Gaming Loop
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get exclusive updates, beta access, and gaming insights delivered 
            straight to your inbox. Join the Rovarah community today!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-gaming p-8 max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your gamer email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-4 bg-input border-border/30 focus:border-primary/50 text-center"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-gaming-accent"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.div>
                ) : (
                  <>
                    🚀 Join the Newsletter
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-neon-primary">5K+</div>
                <div className="text-xs text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-secondary">Weekly</div>
                <div className="text-xs text-muted-foreground">Updates</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-accent">Exclusive</div>
                <div className="text-xs text-muted-foreground">Content</div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-muted-foreground mt-6"
          >
            No spam, just pure gaming excellence. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;