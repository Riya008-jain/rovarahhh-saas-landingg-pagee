import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio context for background music
    // Note: In a real app, you'd want to load an actual audio file
    // For demo purposes, we'll create a simple audio context
    const createAudioContext = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Create a simple ambient gaming soundtrack using oscillators
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(volume * 0.1, audioContext.currentTime);
        
        return { audioContext, oscillator, gainNode };
      } catch (error) {
        console.log('Audio context not supported');
        return null;
      }
    };

    let audioData: any = null;

    if (isPlaying) {
      audioData = createAudioContext();
      if (audioData) {
        audioData.oscillator.start();
      }
    }

    return () => {
      if (audioData && audioData.audioContext.state !== 'closed') {
        audioData.oscillator.stop();
        audioData.audioContext.close();
      }
    };
  }, [isPlaying, volume]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed top-4 right-4 z-40 flex items-center gap-2"
    >
      <motion.div
        animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMusic}
          className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary"
        >
          {isPlaying ? (
            <span className="flex items-center gap-1">
              🎵 <span className="animate-pulse">♪</span>
            </span>
          ) : (
            '🔇'
          )}
        </Button>
      </motion.div>
      
      {isPlaying && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-2"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 accent-primary"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MusicToggle;