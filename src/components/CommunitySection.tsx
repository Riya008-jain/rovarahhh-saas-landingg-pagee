import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const CommunitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const communities = [
    {
      name: 'Discord',
      icon: '💬',
      description: 'Join our active Discord server with 50K+ gamers',
      members: '50K+ Members',
      buttonText: 'Join Discord',
      link: 'https://discord.gg/rovarah',
      color: 'primary'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      description: 'Follow us for the latest updates and gaming news',
      members: '25K+ Followers',
      buttonText: 'Follow Us',
      link: 'https://twitter.com/rovarah',
      color: 'secondary'
    },
    {
      name: 'Email Support',
      icon: '📧',
      description: 'Get direct support from our gaming experts',
      members: '24/7 Support',
      buttonText: 'Contact Us',
      link: 'mailto:support@rovarah.com',
      color: 'accent'
    }
  ];

  return (
    <section id="community" ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.03) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Rovarah Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow gamers, get support, and stay updated with the latest 
            from the Rovarah universe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-gaming h-full group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl"
                  >
                    {community.icon}
                  </motion.div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      community.color === 'primary' ? 'text-neon-primary' :
                      community.color === 'secondary' ? 'text-neon-secondary' :
                      'text-neon-accent'
                    }`}>
                      {community.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {community.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      community.color === 'primary' ? 'bg-primary/20 text-primary' :
                      community.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                      'bg-accent/20 text-accent'
                    }`}>
                      {community.members}
                    </div>
                  </div>

                  <a href={community.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className={`w-full ${
                        community.color === 'primary' ? 'btn-gaming' :
                        community.color === 'secondary' ? 'btn-gaming-secondary' :
                        'btn-gaming-accent'
                      }`}
                    >
                      {community.buttonText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card-gaming p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-neon-primary">
              🎮 Gaming Together is Better
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of a community that celebrates gaming excellence. Share strategies, 
              make friends, and level up together in the Rovarah universe.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-neon-secondary">75K+</div>
                <div className="text-xs text-muted-foreground">Total Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-accent">500+</div>
                <div className="text-xs text-muted-foreground">Daily Active</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Community</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;