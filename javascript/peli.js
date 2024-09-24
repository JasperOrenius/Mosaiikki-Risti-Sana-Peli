const level1 = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'J', clues : {above: 4}}],
    [{}, {letter: 'P', clues: {above: 9}}, {}, {}, {}, {}, {}, {}, {letter: 'S', clues: {above: 10}}, {}, {letter: 'H', clues: {above: 2}}, {}, {letter: 'Ä'}],
    [{}, {letter: 'O'}, {}, {}, {letter: 'K', clues: {above: 5, left: 6}}, {letter: 'E'}, {letter: 'T'}, {letter: 'T'}, {letter: 'U'}, {}, {letter: 'I'}, {}, {letter: 'N'}],
    [{letter: 'O', clues: {left: 8}}, {letter: 'R'}, {letter: 'A'}, {letter: 'V'}, {letter: 'A'}, {}, {}, {}, {letter: 'S'}, {}, {letter: 'R'}, {}, {letter: 'I'}],
    [{}, {letter: 'O'}, {}, {}, {letter: 'R'}, {}, {letter: 'M', clues: {above: 7}}, {}, {letter: 'I', clues: {left: 3}}, {letter: 'L'}, {letter: 'V'}, {letter: 'E'}, {letter: 'S'}],
    [{}, {}, {}, {letter: 'A', clues: {left: 1}}, {letter: 'H'}, {letter: 'M'}, {letter: 'A'}, {}, {}, {}, {letter: 'I'}, {}, {}],
    [{}, {}, {}, {}, {letter: 'U'}, {}, {letter: 'J'}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'V'}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}, {}, {}, {}],
];

const level2 = [
    [{}, {}, {}, {}, {}, {}, {}, {letter: 'K', clues : {above: 6}}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {letter: 'H', clues : {left: 1}}, {letter: 'A'}, {letter: 'R'}, {letter: 'A'}, {letter: 'K'}, {letter: 'K'}, {letter: 'A'}, {}, {}, {}, {letter: 'J', clues : {above: 3}}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'L', clues : {left: 7}}, {letter: 'E'}, {letter: 'H'}, {letter: 'T'}, {letter: 'O'}, {letter: 'K'}, {letter: 'U'}, {letter: 'R'}, {letter: 'P'}, {letter: 'P'}, {letter: 'A'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {letter: 'K', clues : {left: 5}}, {letter: 'U'}, {letter: 'R'}, {letter: 'K', clues : {above: 4}}, {letter: 'I'}, {}, {letter: 'P', clues : {left: 9}}, {letter: 'Ä'}, {letter: 'Ä'}, {letter: 'S'}, {letter: 'K'}, {letter: 'Y'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {}, {}],
    [{}, {}, {letter: 'H', clues : {left: 2}}, {letter: 'Ö'}, {letter: 'M', clues : {above: 8}}, {letter: 'Ö'}, {letter: 'T'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {letter: 'E'}, {}, {letter: 'K'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{letter: 'T', clues : {left: 10}}, {letter: 'A'}, {letter: 'L'}, {letter: 'I'}, {letter: 'T'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
];

const level3 = [
    [{}, {letter: 'S', clues : {above: 8}}, {}, {}, {}, {}, {letter: 'M', clues : {above: 7}}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'Ä'}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'R'}, {}, {}, {}, {}, {letter: 'I'}, {}, {letter: 'L', clues : {above: 5}}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'K'}, {}, {}, {letter: 'L', clues : {above: 4}}, {}, {letter: 'K'}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}],
    [{letter: 'S', clues : {left: 9}}, {letter: 'I'}, {letter: 'I'}, {letter: 'K'}, {letter: 'A'}, {}, {letter: 'K'}, {}, {letter: 'H'}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {letter: 'H', clues : {left: 2}}, {letter: 'A'}, {letter: 'U'}, {letter: 'K', clues : {above: 3}}, {letter: 'I'}, {}, {letter: 'M', clues : {above: 6}}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {letter: 'N'}, {}, {}, {letter: 'U'}, {}, {}, {letter: 'A', clues : {left: 1}}, {letter: 'H'}, {letter: 'V'}, {letter: 'E'}, {letter: 'N'}],
    [{}, {}, {}, {}, {letter: 'A'}, {}, {}, {letter: 'H'}, {}, {}, {letter: 'D'}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'T', clues : {left: 10}}, {letter: 'A'}, {letter: 'I'}, {letter: 'M'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}],
];

const level4 = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P', clues : {above: 8}}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L', clues : {left: 5}}, {letter: 'E'}, {letter: 'P'}, {letter: 'P'}, {letter: 'Ä'}, {letter: 'K'}, {letter: 'E'}, {letter: 'R'}, {letter: 'T'}, {letter: 'T'}, {letter: 'U'}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P', clues : {above: 9}}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'V', clues : {left: 10}}, {letter: 'A'}, {letter: 'A'}, {letter: 'K'}, {letter: 'S'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K', clues : {above: 4}}, {}, {letter: 'K', clues : {above: 3}}, {}, {}, {}, {letter: 'Ä'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}],
    [{}, {}, {}, {}, {}, {letter: 'M', clues : {left: 6}}, {letter: 'E'}, {letter: 'H'}, {letter: 'I'}, {letter: 'L'}, {letter: 'Ä'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'H'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'M'}, {}, {letter: 'R'}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {letter: 'P'}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {letter: 'Ä'}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}],
    [{}, {}, {}, {}, {letter: 'A', clues : {left: 1}}, {letter: 'M'}, {letter: 'P'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {letter: 'E'}, {}, {}, {}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{letter: 'M', clues : {left: 7}}, {letter: 'U'}, {letter: 'U'}, {letter: 'R'}, {letter: 'A'}, {letter: 'H'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'H', clues : {left: 2}}, {letter: 'Y'}, {letter: 'T'}, {letter: 'T'}, {letter: 'Y'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
]

const level5 = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K', clues : {above: 3}}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'M', clues : {above: 7}}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'V', clues : {left: 10}}, {letter: 'A'}, {letter: 'A'}, {letter: 'L'}, {letter: 'E'}, {letter: 'A'}, {letter: 'O'}, {letter: 'R'}, {letter: 'A'}, {letter: 'K'}, {letter: 'A'}, {letter: 'S'}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {letter: 'K', clues : {above: 4, left: 6}}, {letter: 'O'}, {letter: 'R'}, {letter: 'V'}, {letter: 'A'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}, {letter: 'Ä'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'H', clues : {left: 1}}, {letter: 'E'}, {letter: 'R'}, {letter: 'K'}, {letter: 'K'}, {letter: 'U'}, {letter: 'T'}, {letter: 'A'}, {letter: 'T'}, {letter: 'T'}, {letter: 'I'}, {}, {}, {letter: 'R', clues : {left: 8}}, {letter: 'O'}, {letter: 'U'}, {letter: 'S'}, {letter: 'K'}, {letter: 'U'}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {letter: 'P'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {letter: 'Ä'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{letter: 'J', clues : {left: 2}}, {letter: 'A'}, {letter: 'U'}, {letter: 'H'}, {letter: 'O'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'V'}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'S', clues : {left: 9}}, {letter: 'U'}, {letter: 'P'}, {letter: 'P'}, {letter: 'I'}, {letter: 'L'}, {letter: 'O'}, {letter: 'V'}, {letter: 'A'}, {letter: 'H'}, {letter: 'V'}, {letter: 'E'}, {letter: 'R'}, {letter: 'O'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K', clues : {left: 5}}, {letter: 'O'}, {letter: 'I'}, {letter: 'V'}, {letter: 'U'}, {letter: 'N'}, {letter: 'K'}, {letter: 'A'}, {letter: 'N'}, {letter: 'T'}, {letter: 'O'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
];

const level6 = [
    [{}, {}, {}, {}, {}, {}, {letter: 'P', clues : {above: 7}}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'H', clues : {above: 1}}],
    [{}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {letter: 'T', clues : {above: 8}}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {letter: 'Y'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {letter: 'M', clues : {above: 6}}, {}, {}, {letter: 'K'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {letter: 'N'}, {}, {letter: 'K', clues : {above: 2}}, {}, {}, {letter: 'U'}, {}, {}, {letter: 'K'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'K', clues : {left: 3}}, {letter: 'O'}, {letter: 'R'}, {letter: 'P'}, {letter: 'I'}, {letter: 'P'}, {letter: 'A'}, {letter: 'A'}, {letter: 'T'}, {letter: 'S'}, {letter: 'A'}, {letter: 'M', clues : {above: 5}}, {letter: 'A'}],
    [{letter: 'V', clues : {left: 9}}, {letter: 'A'}, {letter: 'D'}, {letter: 'E'}, {letter: 'L'}, {letter: 'M'}, {letter: 'A'}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {letter: 'T'}, {}, {letter: 'A'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {letter: 'I'}, {}, {letter: 'N'}, {}],
    [{letter: 'V', clues : {left: 10}}, {letter: 'A'}, {letter: 'R'}, {letter: 'I'}, {letter: 'K'}, {letter: 'S'}, {letter: 'E'}, {letter: 'N'}, {letter: 'M'}, {letter: 'A'}, {letter: 'R'}, {letter: 'J'}, {letter: 'A'}, {}, {}, {letter: 'K'}, {}, {letter: 'S'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {letter: 'K'}, {}, {letter: 'I'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {letter: 'L', clues : {left: 4}}, {letter: 'A'}, {letter: 'K'}, {letter: 'K'}, {letter: 'A'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}],
];

let isTutorialScreenVisible = true;
let currentLevel = null;
let selectedCharacter = '';

function setCurrentLevel(level) {
    currentLevel = level;
    generateCrosswordGrid(level);
}

function generateCrosswordGrid(data) {
    const table = document.createElement('table');
    table.style.borderSpacing = '0';

    data.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        
        row.forEach((cellData, colIndex) => {
            const td = document.createElement('td');
            td.style.position = 'relative';
            
            if (cellData.letter) {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'cell';
                input.maxLength = 1;
                input.dataset.answer = cellData.letter;
                input.dataset.locked = false;
                input.readOnly = true;
                
                if (cellData.clues) {
                    if (cellData.clues.above) {
                        const aboveClue = document.createElement('span');
                        aboveClue.className = 'cell-number number-above';
                        aboveClue.textContent = cellData.clues.above;
                        td.appendChild(aboveClue);
                    }
                    if (cellData.clues.left) {
                        const leftClue = document.createElement('span');
                        leftClue.className = 'cell-number number-left';
                        leftClue.textContent = cellData.clues.left;
                        td.appendChild(leftClue);
                    }
                }

                td.appendChild(input);
            }

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    document.getElementById('game-container').appendChild(table);
}

function calculateScore() {
    const inputs = document.querySelectorAll('input.cell');
    let totalLetters = 0;
    let correctLetters = 0;

    inputs.forEach(input => {
        const answer = input.dataset.answer;
        if (answer) {
            totalLetters++;
            if (input.value.toUpperCase() === answer.toUpperCase()) {
                correctLetters++;
            }
        }
    });

    if (totalLetters === 0) return 0;

    const percentage = (correctLetters / totalLetters) * 10;
    const score = Math.round(percentage * 10) / 10;

    localStorage.setItem('crosswordScore', score);

    return score;
}

function scaleGrid() {
    const gameContainer = document.getElementById('game-container');
    const game = document.getElementById('game');
    const table = gameContainer.querySelector('table');
    
    const scaleX = game.clientWidth / table.offsetWidth;
    const scaleY = (game.clientHeight - 100) / table.offsetHeight;

    const scale = Math.min(scaleX, scaleY);

    table.style.transform = `scale(${scale})`;
    table.style.transformOrigin = 'top left';
}

// Event listener for alphabet buttons
document.querySelectorAll('.alphabet').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.alphabet').forEach(btn => btn.classList.remove('selected-character'));

        selectedCharacter = button.textContent;
        button.classList.add('selected-character');
    });
});

// Event listener for cell clicks
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cell') && selectedCharacter) {
        const cell = event.target;

        if (cell.dataset.locked === 'true') {
            return;
        }
        
        cell.value = selectedCharacter;

        if (cell.value.toUpperCase() === cell.dataset.answer) {
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
            cell.dataset.locked = 'true';
        } else {
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
            setTimeout(() => {
                cell.value = '';
                cell.classList.remove('incorrect');
            }, 1000);
        }
    }
    
    const score = calculateScore();
    console.log(`Current Score: ${score}`);
});

// Check Answers Button Logic
document.getElementById('check-answers-button').addEventListener('click', checkAnswers);

function checkAnswers() {
    const inputs = document.querySelectorAll('input.cell');
    let totalLetters = 0;
    let correctLetters = 0;

    inputs.forEach(input => {
        const answer = input.dataset.answer; // Get the correct answer
        if (answer) {
            totalLetters++; // Count total letters with answers
            if (input.value.toUpperCase() === answer.toUpperCase()) {
                correctLetters++; // Count correct answers
            }
        }
    });

    // Provide feedback based on correctness
    if (correctLetters === totalLetters && totalLetters > 0) {
        window.location.href = 'loppunäyttö.html';
    } else if (totalLetters > 0) {
        alert("Some answers are incorrect. Please try again.");
    } else {
        alert("No answers to check.");
    }
}

// Toggle tutorial screen
function toggleTutorialScreen() {
    const tutorialScreen = document.getElementById('tutorial-screen');
    const gameContainer = document.getElementById('game-container');
    isTutorialScreenVisible = !isTutorialScreenVisible;
    tutorialScreen.style.display = isTutorialScreenVisible ? 'block' : 'none';
    gameContainer.style.display = !isTutorialScreenVisible ? 'flex' : 'none';
}

const currentMode = localStorage.getItem('currentMode');
console.log(currentMode);

// Animal Info Hover Logic (if applicable)
const clueImages = document.querySelectorAll('.clue-image');
clueImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => {
        if (currentMode === 'easy') {
            const animalName = event.target.alt; 
            const info = animalInfo[animalName] || "Ei tietoa.";
            showAnimalInfo(info, event);
        }
    });

    image.addEventListener('mouseout', () => {
        const infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none'; 
    });
});

function showAnimalInfo(info, event) {
    const infoBox = document.getElementById('info-box');
    infoBox.textContent = info;
    infoBox.style.display = 'block';
    infoBox.style.left = `${event.pageX + 10}px`;
    infoBox.style.top = `${event.pageY + 10}px`; 
}

const animalInfo = {
    "Clue 1": "Lyhytjalkainen ja lihaksikas peto.",
    "Clue 2": "Suurin kasvisyöjä suomessa, tunnetaan suurista koiristaan.",
    "Clue 3": "Tunnettu mustista karvatupsuista korvissaan.",
    "Clue 4": "Nopea eläin, jolla on pitkät korvat.",
    "Clue 5": "Suuri nisäkäs, joka tunnetaan voimastaan ja koosta.",
    "Clue 6": "Pieni tai keskikokoinen kaikkiruokainen nisäkäs.",
    "Clue 7": "Tunnettu padonrakennuskyvyistään.",
    "Clue 8": "Tunnettu tuuheasta hännästään ja ketteryydestään.",
    "Clue 9": "Kotieläin, joka liittyy usein arktisiin alueisiin.",
    "Clue 10": "Tunnettu laumakäyttäytymisestään ja metsästyskyvyistään.",

    "Clue 11": "Älykäs ja utelias lintu, joka on helposti tunnistettavissa mustavalkoisesta höyhenpeitteestään.",
    "Clue 12": "Pieni ja rohkea lintu, joka elää usein metsissä ja syö hyönteisiä.",
    "Clue 13": "Suuri ja majesteettinen vesilintu, joka tunnetaan pitkän kaulansa ja valkoisen höyhenpeitteensä ansiosta.",
    "Clue 14": "Voimakas saalistajalintu, jolla on terävät kynnet ja erinomainen näkökyky.",
    "Clue 15": "Korkea ja hoikka lintu, joka tunnetaan näyttävästä tanssistaan ja äänekkäästä kutsuäänestään.",
    "Clue 16": "Pieni värikäs lintu, joka viihtyy pohjoisissa metsissä ja kerää ruokaa talven varalle.",
    "Clue 17": "Metsässä pesivä lintu, jolla on pitkänomainen nokka ja se lentää usein hämärissä.",
    "Clue 18": "Suuri metsälintu, joka tunnetaan soidinmenoistaan kevätaamuisin.",
    "Clue 19": "Pieni ja ketterä lentäjä, joka tunnetaan nopeista liikkeistään ilmassa ja hyönteisten pyydystämisestä lennossa.",
    "Clue 20": "Pieni ja vilkas lintu, joka on usein nähtävissä ruokintapaikoilla ja syö siemeniä.",

    "Clue 21": "Pieni ja vahva kala, jolla on raidallinen kylki ja mieltymys matalaan veteen.",
    "Clue 22": "Pitkä ja hoikka petokala, joka tunnetaan terävistä hampaistaan ja nopeista hyökkäyksistään.",
    "Clue 23": "Syvän veden kala, jolla on suuri suu ja mieltymys hämärässä metsästämiseen.",
    "Clue 24": "Leveä kylkinen kala, joka viihtyy hitaasti virtaavissa vesissä ja syö pohjasta.",
    "Clue 25": "Suuri vaelluskala, joka tunnetaan hopeisesta kyljestään ja voimakkaasta vastarinnasta.",
    "Clue 26": "Kylmän veden pohjakala, jolla on limainen iho ja se liikkuu erityisesti talvisin.",
    "Clue 27": "Pieni ja hopeanhohtoinen kala, jota tavataan suurissa parvissa järvissä ja jokisuissa.",
    "Clue 28": "Yleinen särkikala, joka viihtyy matalissa vesissä ja syö sekä kasveja että eläimiä.",
    "Clue 29": "Vaelluskala, joka tunnetaan herkullisesta lihastaan ja arvostetaan kalastajien keskuudessa.",
    "Clue 30": "Vahva virtavesikala, joka hyppii ylös virroissa ja on tunnettu lohikalojen sukulainen.",

    "Clue 31": "Tunnistettava raidallinen hyönteinen, joka pistää puolustautuessaan.",
    "Clue 32": "Pieni ja ärsyttävä hyönteinen, joka tunnetaan erityisesti kesäiltaisin ihmisten seurana.",
    "Clue 33": "Nopeasti lentävä hyönteinen, joka viihtyy likaisissa paikoissa ja on usein sisätiloissa.",
    "Clue 34": "Pyöreä ja pörröinen hyönteinen, joka kerää mettä ja pölyttää kukkia.",
    "Clue 35": "Pieni värikäs hyönteinen, joka tunnetaan pilkullisesta selästään.",
    "Clue 36": "Tärkeä pölyttäjä, joka valmistaa hunajaa ja elää yhteiskunnallisessa rakenteessa.",
    "Clue 37": "Ahkera hyönteinen, joka elää suurissa yhteisöissä ja rakentaa monimutkaisia pesiä.",
    "Clue 38": "Lyhytikäinen hyönteinen, jonka elämänkaari liittyy tiiviisti veteen.",
    "Clue 39": "Värikäs ja siro hyönteinen, joka lentää kevyesti kukkien ympärillä.",
    "Clue 40": "Pitkäjalkainen hyönteinen, joka usein erehdytään hämähäkiksi.",

    "Clue 41": "Sieni, joka on monien suosima herkku ja kasvaa syksyisin havumetsissä.",
    "Clue 42": "Sieni, jolla on jauhoinen haju ja joka kasvaa usein lehtometsissä.",
    "Clue 43": "Kirkkaan keltainen sieni, jota kerätään paljon ruoanlaittoon.",
    "Clue 44": "Sieni, jonka kirkkaanpunainen lakki on valkopilkullinen ja erittäin myrkyllinen.",
    "Clue 45": "Sieni, joka kasvaa ryhmissä ja suosii koivujen ympäristöä.",
    "Clue 46": "Epätavallisen näköinen, ryppyinen sieni, jota tulee käsitellä varoen myrkyllisyyden vuoksi.",
    "Clue 47": "Tummanvärinen ja suppilomainen sieni, jota arvostetaan ruokasieneksi.",
    "Clue 48": "Maitoa erittävä sieni, jonka lakki on usein limainen ja ruskea.",
    "Clue 49": "Pitkävartinen suppilomainen sieni, joka kasvaa syksyisin sammaleisilla alueilla.",
    "Clue 50": "Vaalea, piikikäs sieni, joka kasvaa havumetsissä ja on ruokasienenä arvostettu.",

    "Clue 51": "Pensasmainen kasvi, jonka marjoja käytetään usein hilloihin ja mehuihin.",
    "Clue 52": "Kosteikoilla ja soilla kasvava happamanmakuinen punainen marja.",
    "Clue 53": "Tummanvioletti marja, joka kasvaa metsien reunoilla ja soilla.",
    "Clue 54": "Kultaisen oranssi marja, joka on arvostettu Lapin tunturien soilla.",
    "Clue 55": "Kesän suosikki, makea ja punainen marja, joka kasvaa monilla pihoilla.",
    "Clue 56": "Metsän sininen marja, joka on tunnettu terveydellisistä eduistaan.",
    "Clue 57": "Punainen ja hapan marja, jota käytetään monissa suomalaisissa ruokalajeissa.",
    "Clue 58": "Hapokas, oranssi marja, joka kasvaa pensaissa lähellä rannikoita.",
    "Clue 59": "Pehmeä ja makea punainen marja, jota nautitaan tuoreena ja hilloissa.",
    "Clue 60": "Tummanvioletti tai musta marja, joka kasvaa matalissa varvuissa tunturimetsissä."
};





