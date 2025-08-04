import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FeaturesSection from '../components/FeaturesSection';
import EmailSection from '../components/EmailSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CommunitySection from '../components/CommunitySection';
import CTASection from '../components/CTASection';
import MusicToggle from '../components/MusicToggle';
import AIAssistant from '../components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Music Toggle */}
      <MusicToggle />
      
      {/* AI Assistant */}
      <AIAssistant />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-20"
      >
        <HeroSection />
        <ProductSection />
        <FeaturesSection />
        <EmailSection />
        <PricingSection />
        <FAQSection />
        <CommunitySection />
        <CTASection />
      </motion.main>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Rovarah. The future of AI-powered gaming.
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                Rovarah is created in collaboration with Arohance.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/terms" className="text-muted-foreground hover:text-neon-primary transition-colors text-sm">
                Terms
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-neon-primary transition-colors text-sm">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
