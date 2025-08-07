import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-2xl"
            >
              🚀
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-neon-primary group-hover:text-neon-secondary transition-colors">
                Rovarah
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Future of Gaming
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-neon-primary transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-neon-secondary transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a 
              href="#what-we-offer" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('what-we-offer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-neon-accent transition-colors cursor-pointer"
            >
              What We Offer
            </a>
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-neon-primary transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="hover:text-neon-primary hover:bg-primary/10"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="gaming"
                className="btn-gaming"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;