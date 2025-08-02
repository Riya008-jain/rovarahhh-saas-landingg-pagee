import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';

interface SpinWheelProps {
  isOpen: boolean;
  onClose: () => void;
  onWin: (prize: string) => void;
}

const SpinWheel = ({ isOpen, onClose, onWin }: SpinWheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const prizes = [
    { label: '7 Days Free', color: 'bg-primary', value: '7 days' },
    { label: '14 Days Free', color: 'bg-secondary', value: '14 days' },
    { label: '30 Days Free', color: 'bg-accent', value: '30 days' },
    { label: 'Try Again', color: 'bg-muted', value: 'try again' },
    { label: '3 Days Free', color: 'bg-primary-glow', value: '3 days' },
    { label: 'Bonus Features', color: 'bg-secondary-glow', value: 'bonus' },
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = Math.random() * 360 + 1440; // At least 4 full rotations
    setRotation(prev => prev + spins);
    
    setTimeout(() => {
      const segmentAngle = 360 / prizes.length;
      const normalizedRotation = (spins % 360 + 360) % 360;
      const prizeIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % prizes.length;
      const prize = prizes[prizeIndex];
      
      setIsSpinning(false);
      onWin(prize.value);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card p-8 rounded-2xl border border-border/20 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-neon-primary">
              🎰 Spin to Win!
            </h3>
            
            <div className="relative w-64 h-64 mx-auto mb-6">
              {/* Wheel */}
              <motion.div
                className="w-full h-full rounded-full border-4 border-primary relative overflow-hidden"
                animate={{ rotate: rotation }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index;
                  return (
                    <div
                      key={index}
                      className={`absolute w-1/2 h-1/2 ${prize.color} flex items-center justify-center text-white text-xs font-bold`}
                      style={{
                        transformOrigin: '100% 100%',
                        transform: `rotate(${angle}deg)`,
                        clipPath: `polygon(0 0, 100% 0, 100% 100%)`
                      }}
                    >
                      <span className="transform -rotate-45 text-[10px]">
                        {prize.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-accent z-10" />
            </div>
            
            <div className="text-center space-y-4">
              <Button
                onClick={handleSpin}
                disabled={isSpinning}
                className="btn-gaming w-full"
              >
                {isSpinning ? '🎲 Spinning...' : '🎯 Spin Now!'}
              </Button>
              
              <Button
                variant="outline"
                onClick={onClose}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpinWheel;