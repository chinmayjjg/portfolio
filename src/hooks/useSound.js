import { useCallback } from 'react';
import { playHover, playClick, playGlitch } from '../utils/audioSynth';

const useSound = (url, volume = 0.5) => {
    const play = useCallback(() => {
        try {
            // Map file paths to synthesizer functions
            if (url.includes('hover')) {
                playHover();
            } else if (url.includes('click')) {
                playClick();
            } else if (url.includes('glitch')) {
                playGlitch();
            } else {
                // Fallback for other files (if any)
                const audio = new Audio(url);
                audio.volume = volume;
                audio.play().catch(() => { });
            }
        } catch (e) {
            console.error("Audio error:", e);
        }
    }, [url, volume]);

    return play;
};

export default useSound;
