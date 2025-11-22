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
        <div
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000
            }}
        >
            <audio ref={audioRef} src="/sounds/theme.mp3" loop />

            {/* Music Control Button */}
            <button
                onClick={togglePlay}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
                    outline: 'none',
                    transition: 'transform 0.2s ease, background 0.3s ease'
                }}
            >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} style={{ marginLeft: '4px' }} />}
            </button>
        </div>
    );
};

export default ThemeMusic;
