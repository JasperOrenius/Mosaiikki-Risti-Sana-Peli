const score = localStorage.getItem('crosswordScore');
document.getElementById('score-display').textContent = `Pisteet: ${score}/10`;
function returnToMenu() {
    window.location.href = "../index.html";
}

function triggerAnimation() {
    const images = document.querySelectorAll('#animation-container img');
    const gameOverScreen = document.getElementById('game-over-screen');

    images.forEach((img, index) => {
        img.classList.add(`animate${index + 1}`);
    });

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('fadeInAnimation');
    }
    
    gameOverScreen.style.display = 'block';
    gameOverScreen.style.pointerEvents = 'none'; 
    gameOverScreen.classList.add('show');
}