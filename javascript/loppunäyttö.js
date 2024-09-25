const score = localStorage.getItem('crosswordScore');
document.getElementById('score-display').textContent = `Pisteet: ${score}/10`;
function returnToMenu() {
    window.location.href = "../index.html";
}