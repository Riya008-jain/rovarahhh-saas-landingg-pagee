import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { X, MessageCircle, Send, Bot, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your AI guide for Rovarah. I can help you explore our features, pricing, or answer any questions about our AI-powered gaming platform. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    'features': "🎮 Rovarah offers cutting-edge AI-powered gaming experiences with professional-grade 3D environments. Our key features include: Real-time AI companions, Immersive 3D worlds, Advanced physics simulation, and Cross-platform compatibility.",
    'pricing': "💰 We have three plans: Free (Basic features), Pro ($29/month - Advanced AI), and Elite ($99/month - Premium features + priority support). Would you like me to scroll to the pricing section?",
    'about': "🚀 Rovarah is the future of AI-powered gaming, created in collaboration with Arohance. We combine artificial intelligence with immersive 3D entertainment to create unprecedented gaming experiences.",
    'contact': "📧 You can reach us through our community Discord, Twitter, or email. I can guide you to our Community section where you'll find all the links!",
    'demo': "🎰 Try our gamified experience! Click the 'Try Your Luck' button in the hero section to spin our prize wheel, or explore our interactive 3D showcase.",
    'signup': "✨ Ready to join? I can guide you to our signup page where you can create your account and start your Rovarah journey!",
    'help': "🤖 I can help you with: ✅ Exploring features ✅ Understanding pricing ✅ Learning about Rovarah ✅ Finding contact info ✅ Navigation assistance. Just ask me anything!"
  };

  const quickActions = [
    { label: "Show Features", action: "features", icon: "🎮" },
    { label: "View Pricing", action: "pricing", icon: "💰" },
    { label: "Get Demo", action: "demo", icon: "🎰" },
    { label: "Sign Up", action: "signup", icon: "✨" }
  ];

  const handleSendMessage = async (message: string = inputMessage) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const lowercaseMessage = message.toLowerCase();
      let response = "I understand you're asking about that! Let me help you explore Rovarah's offerings. You can check out our features, pricing, or try our interactive demo. What interests you most?";

      // Check for keywords in the message
      for (const [key, value] of Object.entries(predefinedResponses)) {
        if (lowercaseMessage.includes(key)) {
          response = value;
          break;
        }
      }

      // Handle navigation requests
      if (lowercaseMessage.includes('scroll') || lowercaseMessage.includes('go to') || lowercaseMessage.includes('show me')) {
        if (lowercaseMessage.includes('pricing')) {
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          response = "🎯 Scrolled to our pricing section! Check out our three tiers designed for different gaming needs.";
        } else if (lowercaseMessage.includes('features')) {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          response = "🎯 Here are our amazing features! Each one is designed to enhance your AI gaming experience.";
        } else if (lowercaseMessage.includes('community')) {
          document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
          response = "🎯 Welcome to our community section! Join thousands of gamers on Discord and follow us for updates.";
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative"
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="btn-gaming w-16 h-16 rounded-full shadow-glow-primary relative group"
                size="icon"
              >
                <Bot className="w-8 h-8" />
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-neon-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
              
              {/* Floating tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-primary" />
                  <span className="text-sm font-medium">AI Guide Available!</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px]"
          >
            <Card className="h-full bg-card/95 backdrop-blur-xl border-primary/30 shadow-glow-primary">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-accent rounded-full border-2 border-card"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neon-primary">Rovarah AI</h3>
                    <p className="text-xs text-muted-foreground">Your Gaming Guide</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-b border-border/30">
                <p className="text-xs text-muted-foreground mb-3">Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.action}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction(action.action)}
                      className="justify-start text-xs h-8"
                    >
                      <span className="mr-1">{action.icon}</span>
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted/50 text-foreground'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted/50 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-muted-foreground rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border/30">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about Rovarah..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 bg-background/50"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputMessage.trim() || isTyping}
                    className="btn-gaming"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;