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
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {letter: 'E'}, {letter: 'P'}, {letter: 'P'}, {letter: 'Ä'}, {letter: 'K'}, {letter: 'E'}, {letter: 'R'}, {letter: 'T'}, {letter: 'T'}, {letter: 'U'}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'V'}, {letter: 'A'}, {letter: 'A'}, {letter: 'K'}, {letter: 'S'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {}, {letter: 'K'}, {}, {}, {}, {letter: 'Ä'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}],
    [{}, {}, {}, {}, {}, {letter: 'M'}, {letter: 'E'}, {letter: 'H'}, {letter: 'I'}, {letter: 'L'}, {letter: 'Ä'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'H'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'M'}, {}, {letter: 'R'}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {letter: 'P'}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {letter: 'Ä'}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}],
    [{}, {}, {}, {}, {letter: 'A'}, {letter: 'M'}, {letter: 'P'}, {letter: 'I'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {letter: 'E'}, {}, {}, {}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{letter: 'M'}, {letter: 'U'}, {letter: 'U'}, {letter: 'R'}, {letter: 'A'}, {letter: 'H'}, {letter: 'A'}, {letter: 'I'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {letter: 'H'}, {letter: 'Y'}, {letter: 'T'}, {letter: 'T'}, {letter: 'Y'}, {letter: 'N'}, {letter: 'E'}, {letter: 'N'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
]

const level5 = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'S'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'J'}, {letter: 'A'}, {letter: 'U'}, {letter: 'H'}, {letter: 'O'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'M'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'N'}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {letter: 'H'}, {letter: 'E'}, {letter: 'R'}, {letter: 'K'}, {letter: 'K'}, {letter: 'U'}, {letter: 'T'}, {letter: 'A'}, {letter: 'T'}, {letter: 'T'}, {letter: 'I'}, {}, {}, {}, {letter: 'O'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {letter: 'V'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}, {}, {letter: 'A'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {letter: 'V'}, {letter: 'A'}, {letter: 'A'}, {letter: 'L'}, {letter: 'E'}, {letter: 'A'}, {letter: 'O'}, {letter: 'R'}, {letter: 'A'}, {letter: 'K'}, {letter: 'A'}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {letter: 'H'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {letter: 'O'}, {letter: 'R'}, {letter: 'V'}, {letter: 'A'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}, {}, {}, {letter: 'V'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'V'}, {}, {}, {}, {}, {}, {letter: 'K'}, {letter: 'Ä'}, {letter: 'R'}, {letter: 'P'}, {letter: 'Ä'}, {letter: 'S'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'S'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{letter: 'K'}, {letter: 'O'}, {letter: 'I'}, {letter: 'V'}, {letter: 'U'}, {letter: 'N'}, {letter: 'K'}, {letter: 'A'}, {letter: 'N'}, {letter: 'T'}, {letter: 'O'}, {letter: 'S'}, {letter: 'I'}, {letter: 'E'}, {letter: 'N'}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {letter: 'I'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
];

const level6 = [
    [{}, {}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'H'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'E'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {}, {}, {letter: 'T'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'R'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {}, {letter: 'Y'}, {}, {}, {}, {}, {}, {}, {}, {letter: 'U'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'U'}, {}, {}, {}, {letter: 'R'}, {}, {}, {}, {}, {letter: 'M'}, {}, {}, {letter: 'K'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'K'}, {}, {}, {}, {letter: 'N'}, {}, {letter: 'K'}, {}, {}, {letter: 'U'}, {}, {}, {letter: 'K'}],
    [{}, {}, {}, {}, {}, {}, {letter: 'K'}, {letter: 'O'}, {letter: 'R'}, {letter: 'P'}, {letter: 'I'}, {letter: 'P'}, {letter: 'A'}, {letter: 'A'}, {letter: 'T'}, {letter: 'S'}, {letter: 'A'}, {letter: 'M'}, {letter: 'A'}],
    [{letter: 'V'}, {letter: 'A'}, {letter: 'D'}, {letter: 'E'}, {letter: 'L'}, {letter: 'M'}, {letter: 'A'}, {}, {}, {}, {}, {}, {letter: 'R'}, {}, {}, {letter: 'T'}, {}, {letter: 'A'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'P'}, {}, {}, {letter: 'I'}, {}, {letter: 'N'}, {}],
    [{letter: 'V'}, {letter: 'A'}, {letter: 'R'}, {letter: 'I'}, {letter: 'K'}, {letter: 'S'}, {letter: 'E'}, {letter: 'N'}, {letter: 'M'}, {letter: 'A'}, {letter: 'R'}, {letter: 'J'}, {letter: 'A'}, {}, {}, {letter: 'K'}, {}, {letter: 'S'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'L'}, {}, {}, {letter: 'K'}, {}, {letter: 'I'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'O'}, {}, {letter: 'L'}, {letter: 'A'}, {letter: 'K'}, {letter: 'K'}, {letter: 'A'}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'K'}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {letter: 'A'}, {}],
];

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

let selectedCharacter = null;
document.querySelectorAll('.alphabet').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.alphabet').forEach(btn => btn.classList.remove('selected-character'));
        selectedCharacter = button.textContent;
        button.classList.add('selected-character');
    });
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cell') && selectedCharacter) {
        event.target.value = selectedCharacter;
    }
});

function checkAnswers() {
    const cells = document.querySelectorAll('input.cell');
    cells.forEach(cell => {
        if (cell.value.toUpperCase() === cell.dataset.answer) {
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
        } else {
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
        }
    });
}