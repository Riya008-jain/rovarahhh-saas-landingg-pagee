import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WhatWeOfferSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const offerings = [
    {
      icon: '🎮',
      title: 'Premium Gaming Platform',
      description: 'Access to cutting-edge games with AI-powered experiences and stunning 3D graphics.',
      highlight: 'Next-Gen Technology'
    },
    {
      icon: '🌟',
      title: 'Personalized Experience',
      description: 'AI that learns your preferences and creates unique gaming scenarios tailored just for you.',
      highlight: 'AI-Powered'
    },
    {
      icon: '🏆',
      title: 'Competitive Gaming',
      description: 'Join tournaments, climb leaderboards, and compete with players from around the world.',
      highlight: 'Global Competition'
    },
    {
      icon: '🛠️',
      title: 'Development Tools',
      description: 'Create your own games and experiences with our intuitive development platform.',
      highlight: 'Creator Friendly'
    }
  ];

  return (
    <section id="what-we-offer" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-primary">What</span> We{' '}
            <span className="text-neon-secondary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the revolutionary gaming solutions that make Rovarah the future of interactive entertainment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="card-gaming h-full hover:shadow-glow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4"
                  >
                    {offer.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-neon-secondary group-hover:text-neon-primary transition-colors">
                    {offer.title}
                  </CardTitle>
                  <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    {offer.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {offer.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;