import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for casual gamers',
      features: [
        '3 hours of gameplay per day',
        'Access to basic games',
        'Standard graphics quality',
        'Community support',
        'Basic achievements'
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      description: 'For serious gamers',
      features: [
        'Unlimited gameplay',
        'Access to all games',
        'Ultra HD graphics',
        'Priority support',
        'Advanced achievements',
        'Tournament access',
        'Custom avatars'
      ],
      buttonText: 'Go Pro',
      buttonVariant: 'gaming' as const,
      popular: true
    },
    {
      name: 'Elite',
      price: '$49',
      period: '/month',
      description: 'For professional esports',
      features: [
        'Everything in Pro',
        'Exclusive beta access',
        'AI coaching assistant',
        'Performance analytics',
        'Private tournaments',
        'VIP support',
        'Revenue sharing',
        'Brand partnerships'
      ],
      buttonText: 'Join Elite',
      buttonVariant: 'gaming-accent' as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-primary">Choose</span> Your{' '}
            <span className="text-neon-secondary">Gaming</span> Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From casual player to esports champion - we have the perfect plan for your gaming journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-glow-secondary z-10"
                >
                  🏆 Most Popular
                </motion.div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-secondary/50 shadow-glow-secondary' : ''} card-gaming hover:scale-105 transition-transform duration-300`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-neon-primary">
                    {plan.name}
                  </CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-neon-accent">✓</span>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.buttonVariant === 'gaming' ? 'btn-gaming' :
                      plan.buttonVariant === 'gaming-accent' ? 'btn-gaming-accent' :
                      'border-primary/30 hover:bg-primary/10'
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include 30-day money-back guarantee • Cancel anytime • No hidden fees
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;