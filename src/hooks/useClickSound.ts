import { useRef, useCallback } from 'react';

export const useClickSound = () => {
  const audioContext = useRef<AudioContext | null>(null);

  const playClickSound = useCallback(() => {
    try {
      // Create audio context if it doesn't exist
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContext.current;
      
      // Create oscillator for click sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Configure sound
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      // Play sound
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
      
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Click sound not supported');
    }
  }, []);

  return { playClickSound };
};