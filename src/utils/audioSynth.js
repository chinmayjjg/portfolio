// Web Audio API Synthesizer for Spider-Man Theme

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (type, freq, duration, volume = 0.1) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
};

const createNoise = (duration, volume = 0.1) => {
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    noise.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noise.start();
};

export const playThwip = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const t = audioCtx.currentTime;

    // 1. The "Thwip" Impact (Noise Burst)
    const bufferSize = audioCtx.sampleRate * 0.1; // Short burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1000, t);
    noiseFilter.Q.value = 1;

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.8, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    noise.start();

    // 2. The "Zip" (Web flying)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1500, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.15); // Fast drop

    oscGain.gain.setValueAtTime(0.3, t);
    oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);

    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);

    osc.start();
    osc.stop(t + 0.15);
};

export const playHover = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    // High-tech beep
    createOscillator('sine', 1200, 0.1, 0.05);
};

export const playClick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    // Satisfying click
    createOscillator('square', 400, 0.05, 0.1);
};

export const playGlitch = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    // Random static bursts
    createNoise(0.1, 0.1);
    setTimeout(() => createNoise(0.05, 0.1), 100);
    setTimeout(() => createOscillator('sawtooth', 50, 0.1, 0.1), 50);
};
