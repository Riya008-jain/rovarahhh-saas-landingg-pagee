import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);

  const playLaserSound = useCallback(() => {
    if (!soundEnabled) return;
    
    try {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContext.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Laser sound effect
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (error) {
      console.log('Sound not supported');
    }
  }, [soundEnabled]);

  const playSwordSound = useCallback(() => {
    if (!soundEnabled) return;
    
    try {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContext.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Sword slash sound effect
      oscillator.frequency.setValueAtTime(400, ctx.currentTime);
      oscillator.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.2);
    } catch (error) {
      console.log('Sound not supported');
    }
  }, [soundEnabled]);

  // Add sound effects to interactive elements
  const addSoundEffects = useCallback(() => {
    const buttons = document.querySelectorAll('button, a[href], .cursor-pointer');
    
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', playLaserSound);
      button.addEventListener('click', playSwordSound);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', playLaserSound);
        button.removeEventListener('click', playSwordSound);
      });
    };
  }, [playLaserSound, playSwordSound]);

  // Apply sound effects when component mounts and sound is enabled
  useEffect(() => {
    if (soundEnabled) {
      return addSoundEffects();
    }
  }, [soundEnabled, addSoundEffects]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-20 right-4 z-40"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setSoundEnabled(!soundEnabled)}
        className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
          soundEnabled 
            ? 'border-neon-primary bg-neon-primary/10 text-neon-primary hover:bg-neon-primary/20' 
            : 'border-muted text-muted-foreground hover:bg-muted/10'
        }`}
        title={soundEnabled ? 'Disable Sound Effects' : 'Enable Sound Effects'}
      >
        <motion.div
          animate={{ rotate: soundEnabled ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {soundEnabled ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.div>
      </Button>
      
      {/* Sound indicator */}
      {soundEnabled && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-neon-accent rounded-full animate-pulse"
        />
      )}
    </motion.div>
  );
};

export default SoundToggle;