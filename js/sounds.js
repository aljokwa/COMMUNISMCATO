// Sound effects configuration
const soundEffects = {
    gunfire: [
        { src: 'assets/gunfire1.mp3', volume: 0.2 },
        { src: 'assets/gunfire2.mp3', volume: 0.2 },
        { src: 'assets/gunfire3.mp3', volume: 0.2 }
    ],
    explosions: [
        { src: 'assets/explosion1.mp3', volume: 0.3 },
        { src: 'assets/explosion2.mp3', volume: 0.3 },
        { src: 'assets/explosion3.mp3', volume: 0.3 }
    ]
};

// Create Howl instances for each sound
const sounds = {
    gunfire: soundEffects.gunfire.map(sound => new Howl({
        src: [sound.src],
        volume: sound.volume,
        rate: 0.8 + Math.random() * 0.4 // Random pitch between 0.8 and 1.2
    })),
    explosions: soundEffects.explosions.map(sound => new Howl({
        src: [sound.src],
        volume: sound.volume,
        rate: 0.7 + Math.random() * 0.6 // Random pitch between 0.7 and 1.3
    }))
};

// Function to play a random sound from a category
function playRandomSound(category) {
    const soundArray = sounds[category];
    const randomSound = soundArray[Math.floor(Math.random() * soundArray.length)];
    randomSound.rate(0.7 + Math.random() * 0.6); // Randomize pitch each time
    randomSound.play();
}

// Function to play sounds at random intervals
function startRandomSounds() {
    // Play gunfire every 3-7 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance to play
            playRandomSound('gunfire');
        }
    }, 3000 + Math.random() * 4000);

    // Play explosions every 8-15 seconds
    setInterval(() => {
        if (Math.random() > 0.5) { // 50% chance to play
            playRandomSound('explosions');
        }
    }, 8000 + Math.random() * 7000);
} 