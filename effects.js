// Terminal glitch effect
function activateTerminalGlitch() {
    const glitch = document.getElementById('terminal-glitch');
    setInterval(() => {
        if (Math.random() < 0.1) {
            glitch.style.opacity = '0.3';
            setTimeout(() => {
                glitch.style.opacity = '0';
            }, 100);
        }
    }, 3000);
}

// Time machine selection effect
function selectTimeMachine(machineElement) {
    const machines = document.querySelectorAll('.machine-option');
    machines.forEach(m => m.classList.remove('selected'));
    machineElement.classList.add('selected');
    
    // Play selection sound
    const audio = new Audio('sounds/select.mp3');
    audio.volume = 0.3;
    audio.play();
}

// Future mirror effect
function activateFutureMirror() {
    const mirror = document.getElementById('future-mirror');
    setInterval(() => {
        mirror.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(0, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    }, 1000);
}

// Rejection certificate animation
function animateRejectionCertificate() {
    const cert = document.querySelector('.certificate');
    setInterval(() => {
        cert.style.transform = `rotate(${Math.random() * 2 - 1}deg)`;
    }, 100);
}