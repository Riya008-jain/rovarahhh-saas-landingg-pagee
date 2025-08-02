import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const faqs = [
    {
      question: "What makes Rovarah different from other gaming platforms?",
      answer: "Rovarah combines cutting-edge AI technology with immersive 3D worlds to create personalized gaming experiences. Our platform adapts to your playstyle, offers real-time performance optimization, and delivers console-quality graphics directly in your browser."
    },
    {
      question: "Do I need to download any software?",
      answer: "No downloads required! Rovarah runs entirely in your web browser using advanced WebGL technology. Just sign up, log in, and start playing immediately on any device with a modern web browser."
    },
    {
      question: "What are the system requirements?",
      answer: "Rovarah works on most modern devices. For optimal performance, we recommend: Chrome/Firefox/Safari (latest versions), 8GB RAM, and a dedicated graphics card. However, our adaptive rendering ensures smooth gameplay even on lower-spec devices."
    },
    {
      question: "Can I play with friends?",
      answer: "Absolutely! Rovarah features real-time multiplayer gaming with friends worldwide. Create parties, join tournaments, and compete in leaderboards. Our advanced networking ensures lag-free gameplay even in competitive scenarios."
    },
    {
      question: "Is there a mobile version?",
      answer: "Yes! Rovarah is fully responsive and optimized for mobile devices. Play on your smartphone or tablet with touch controls specifically designed for mobile gaming. Your progress syncs across all devices."
    },
    {
      question: "How does the AI coaching work?",
      answer: "Our AI coaching (available in Pro and Elite plans) analyzes your gameplay patterns, identifies areas for improvement, and provides personalized tips and strategies. It's like having a professional coach available 24/7."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. All transactions are secured with bank-level encryption."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access to premium features until your current billing period ends."
    }
  ];

  return (
    <section id="faq" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-primary">Frequently</span> Asked{' '}
            <span className="text-neon-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Rovarah gaming platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="card-gaming px-6 border-border/20 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-neon-primary transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@rovarah.com"
            className="text-neon-primary hover:text-neon-secondary transition-colors font-semibold"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;