const audio = document.getElementById('birthday-music');
const playButton = document.querySelector('.play-btn');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');

// Toggle play/pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playButton.innerText = 'Pause';
    } else {
        audio.pause();
        playButton.innerText = 'Play';
    }
}

// Set volume
function setVolume(value) {
    audio.volume = value;
}

// Update time display when audio metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    duration.innerText = formatTime(audio.duration); // Set total song duration
});

// Update current time of the audio during playback
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100; // Calculate progress as percentage
    progressBar.value = progress; // Update progress bar
    currentTime.innerText = formatTime(audio.currentTime); // Update current time
});

// When the user interacts with the progress bar
function seekAudio(event) {
    const seekTime = (event.target.value / 100) * audio.duration; // Calculate the seek time based on progress bar value
    audio.currentTime = seekTime; // Seek to the new time
}

// Format time to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Ensure 2 digits for seconds
}

// Candles lighting effect
window.onload = function () {
    setTimeout(() => {
        document.getElementById('candle1').style.animation = 'candle-light 1s forwards';
        document.getElementById('candle2').style.animation = 'candle-light 1s forwards';
        document.getElementById('candle3').style.animation = 'candle-light 1s forwards';
    }, 1500);

    // Balloon animation timing delay
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        setTimeout(() => {
            balloon.style.animation = 'float 5s ease-in-out infinite';
        }, 2000 * index);
    });
}

// Animation for candles lighting
document.styleSheets[0].insertRule(`
    @keyframes candle-light {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`, 0);
