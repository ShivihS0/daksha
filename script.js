// Magical confetti creation function
function createMagicalConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff69b4', '#ffc0cb', '#ff1493', '#ffb6c1', '#ff20e1'];
    const shapes = ['circle', 'star', 'heart'];
    
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        if (shape === 'star') {
            confetti.innerHTML = '⭐';
            confetti.style.fontSize = '20px';
        } else if (shape === 'heart') {
            confetti.innerHTML = '💖';
            confetti.style.fontSize = '18px';
        } else {
            confetti.className = 'confetti';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = '50%';
        }
        
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '-10px';
        confetti.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 3}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 1 + 's';
        confetti.style.zIndex = '1000';
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}

// Create shooting stars
function createShootingStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '3px';
    star.style.height = '3px';
    star.style.borderRadius = '50%';
    star.style.backgroundColor = '#fff';
    star.style.boxShadow = '0 0 10px #fff, 0 0 20px #ff69b4, 0 0 30px #ff69b4';
    star.style.top = Math.random() * 30 + '%';
    star.style.left = '-10px';
    star.style.zIndex = '2';
    
    document.body.appendChild(star);
    
    const duration = Math.random() * 2 + 1;
    star.style.animation = `shootingStar ${duration}s linear forwards`;
    
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Add shooting star animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shootingStar {
        from {
            transform: translate(0, 0);
            opacity: 1;
        }
        to {
            transform: translate(100vw, 60vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create shooting stars periodically
setInterval(createShootingStar, 3000);

// Celebrate button functionality
const celebrateBtn = document.getElementById('celebrateBtn');
celebrateBtn.addEventListener('click', function() {
    createMagicalConfetti();
    
    // Add celebration animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Change button text temporarily
    const originalText = this.innerHTML;
    this.innerHTML = '<span style="font-size: 1.2em;">✨ Magic Happening! ✨</span>';
    setTimeout(() => {
        this.innerHTML = originalText;
    }, 2500);
    
    // Create extra sparkles around button
    createSparkleRing();
});

function createSparkleRing() {
    const button = celebrateBtn.getBoundingClientRect();
    const centerX = button.left + button.width / 2;
    const centerY = button.top + button.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 80;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        createSparkleAt(x, y);
    }
}

function createSparkleAt(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '24px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1001';
    sparkle.style.animation = 'sparkleBurst 1s ease-out forwards';
    sparkle.style.textShadow = '0 0 10px #ff69b4';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleBurst {
        from {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        to {
            opacity: 0;
            transform: scale(2) rotate(180deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Cake click functionality - blow out candle
const cake = document.querySelector('.birthday-cake');
const flameGroup = document.querySelector('.flame-group');

cake.addEventListener('click', function() {
    flameGroup.style.opacity = '0';
    flameGroup.style.transform = 'scale(0)';
    
    // Create magical smoke
    createMagicalSmoke();
    
    // Show message
    const message = document.createElement('div');
    message.textContent = '🌟 Make a wish! 🌟';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '2.5rem';
    message.style.color = '#ff69b4';
    message.style.fontWeight = 'bold';
    message.style.zIndex = '1002';
    message.style.textShadow = '0 0 20px #ff69b4, 0 0 40px #ff1493';
    message.style.animation = 'wishMessage 2s ease-out forwards';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 2000);
    
    // Relight candle after 3 seconds
    setTimeout(() => {
        flameGroup.style.opacity = '1';
        flameGroup.style.transform = 'scale(1)';
        createSparkles();
    }, 3000);
});

const wishStyle = document.createElement('style');
wishStyle.textContent = `
    @keyframes wishMessage {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(wishStyle);

function createMagicalSmoke() {
    const cakeRect = cake.getBoundingClientRect();
    const centerX = cakeRect.left + cakeRect.width / 2;
    const centerY = cakeRect.top + cakeRect.height * 0.3;
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.innerHTML = '✨';
            smoke.style.position = 'fixed';
            smoke.style.left = centerX + (Math.random() - 0.5) * 30 + 'px';
            smoke.style.top = centerY + 'px';
            smoke.style.fontSize = '30px';
            smoke.style.pointerEvents = 'none';
            smoke.style.zIndex = '1001';
            smoke.style.animation = 'smokeRise 2s ease-out forwards';
            smoke.style.color = '#ff69b4';
            
            document.body.appendChild(smoke);
            
            setTimeout(() => {
                smoke.remove();
            }, 2000);
        }, i * 200);
    }
}

const smokeStyle = document.createElement('style');
smokeStyle.textContent = `
    @keyframes smokeRise {
        from {
            opacity: 1;
            transform: translateY(0) scale(0.5);
        }
        to {
            opacity: 0;
            transform: translateY(-100px) scale(2);
        }
    }
`;
document.head.appendChild(smokeStyle);

function createSparkles() {
    const cakeRect = cake.getBoundingClientRect();
    const centerX = cakeRect.left + cakeRect.width / 2;
    const centerY = cakeRect.top + cakeRect.height * 0.3;
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '⭐';
        sparkle.style.position = 'fixed';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1001';
        sparkle.style.animation = 'sparkleExplode 1s ease-out forwards';
        sparkle.style.animationDelay = i * 0.05 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

const explodeStyle = document.createElement('style');
explodeStyle.textContent = `
    @keyframes sparkleExplode {
        from {
            opacity: 1;
            transform: translate(0, 0) scale(0);
        }
        to {
            opacity: 0;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(explodeStyle);

// Fairy dust trail on mouse move
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.92) {
        const dust = document.createElement('div');
        dust.innerHTML = '✨';
        dust.style.position = 'fixed';
        dust.style.left = e.clientX + 'px';
        dust.style.top = e.clientY + 'px';
        dust.style.fontSize = '16px';
        dust.style.pointerEvents = 'none';
        dust.style.zIndex = '999';
        dust.style.color = '#ff69b4';
        dust.style.textShadow = '0 0 10px #ff69b4';
        dust.style.animation = 'dustFade 1s ease-out forwards';
        
        document.body.appendChild(dust);
        
        setTimeout(() => {
            dust.remove();
        }, 1000);
    }
});

const dustStyle = document.createElement('style');
dustStyle.textContent = `
    @keyframes dustFade {
        from {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        to {
            opacity: 0;
            transform: scale(0.5) translateY(-30px) rotate(180deg);
        }
    }
`;
document.head.appendChild(dustStyle);

// Add fairy interactions
const fairies = document.querySelectorAll('.fairy');
fairies.forEach(fairy => {
    fairy.addEventListener('click', function() {
        // Create magical burst
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.fontSize = '20px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1001';
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 80;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.animation = `fairyBurst${i} 1s ease-out forwards`;
            
            const burstStyle = document.createElement('style');
            burstStyle.textContent = `
                @keyframes fairyBurst${i} {
                    to {
                        opacity: 0;
                        transform: translate(${endX}px, ${endY}px) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(burstStyle);
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    });
});

// Automatic confetti on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        createMagicalConfetti();
    }, 1000);
});

// Keyboard shortcuts
document.addEventListener('keypress', function(e) {
    if (e.key === 'c' || e.key === 'C') {
        createMagicalConfetti();
    }
    if (e.key === 's' || e.key === 'S') {
        createShootingStar();
    }
});