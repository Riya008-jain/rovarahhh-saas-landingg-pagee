import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import MusicToggle from '../components/MusicToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Music Toggle */}
      <MusicToggle />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </motion.main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Gaming SaaS. Built for gamers, by gamers. 🎮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
