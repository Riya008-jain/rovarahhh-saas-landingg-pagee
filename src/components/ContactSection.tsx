import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your gaming journey? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-gaming">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help?" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell us about your gaming needs..." 
                      className="bg-background/50 min-h-[120px]" 
                    />
                  </div>
                  <Button className="w-full btn-gaming">
                    Send Message 🚀
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Get in touch</h3>
              <p className="text-muted-foreground">
                We're here to help you unlock the future of AI-powered gaming. 
                Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email us</p>
                  <p className="text-sm text-muted-foreground">hello@rovarah.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Join our Discord</p>
                  <p className="text-sm text-muted-foreground">Connect with our community</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Support hotline</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-GAME</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Quick Response Promise</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours. 
                For urgent gaming support, please use our Discord channel for faster assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;