import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPause, FaPlay } from 'react-icons/fa';

const ThemeMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Try to autoplay on mount (might be blocked)
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // Start with lower volume

            // Attempt play
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(() => setIsPlaying(false)); // Autoplay blocked
            }
        }
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}
        >
            <audio ref={audioRef} src="/sounds/theme.mp3" loop />

            {/* Music Control Button */}
            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    background: isPlaying ? 'var(--spidey-red)' : '#333',
                    color: 'white',
                    border: '3px solid white',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '5px 5px 0 black',
                    outline: 'none'
                }}
            >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} style={{ marginLeft: '4px' }} />}
            </motion.button>

            {/* Visualizer / Label */}
            <motion.div
                animate={{
                    width: isPlaying ? 'auto' : 0,
                    opacity: isPlaying ? 1 : 0
                }}
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    background: 'black',
                    color: 'var(--spidey-yellow)',
                    padding: isPlaying ? '0.5rem 1rem' : 0,
                    border: isPlaying ? '2px solid var(--spidey-blue)' : 'none',
                    fontFamily: 'var(--tech-font)',
                    fontSize: '0.8rem',
                    borderRadius: '4px'
                }}
            >
                NOW PLAYING: SPIDEY THEME 🎵
            </motion.div>
        </motion.div>
    );
};

export default ThemeMusic;
