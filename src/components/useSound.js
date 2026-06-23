import { useCallback, useRef } from 'react';

const useSound = () => {
  const ctxRef = useRef(null);

  const getCtx = () => {
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    return ctxRef.current;
  };

  const playTone = useCallback((freq, duration, type = 'sine', volume = 0.08) => {
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch {}
  }, []);

  const playClick = useCallback(() => playTone(800, 0.08, 'sine', 0.06), [playTone]);
  const playHover = useCallback(() => playTone(1200, 0.04, 'sine', 0.03), [playTone]);

  return { playClick, playHover };
};

export default useSound;