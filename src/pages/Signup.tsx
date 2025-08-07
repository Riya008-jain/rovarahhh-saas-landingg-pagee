import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gamerTag, setGamerTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add authentication logic here when Supabase is connected
    console.log('Signup attempt:', { email, password, gamerTag });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 80% 20%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Card className="w-full max-w-md card-gaming">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="text-4xl mb-4"
            >
              🎮
            </motion.div>
            <CardTitle className="text-2xl text-neon-secondary">
              Join the Rovarah Universe
            </CardTitle>
            <CardDescription>
              Create your account and start your gaming journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gamerTag" className="text-sm font-medium">
                  Gamer Tag
                </Label>
                <Input
                  id="gamerTag"
                  type="text"
                  placeholder="ProGamer2024"
                  value={gamerTag}
                  onChange={(e) => setGamerTag(e.target.value)}
                  className="bg-input border-border/30 focus:border-secondary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="gamer@rovarah.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border/30 focus:border-secondary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-border/30 focus:border-secondary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-input border-border/30 focus:border-secondary/50"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-gaming-secondary"
              >
                🚀 Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-neon-secondary hover:text-neon-primary transition-colors font-medium"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Signup;