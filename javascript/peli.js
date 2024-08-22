let selectedCharacter = null;

document.querySelectorAll('.alphabet').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.alphabet').forEach(btn => btn.classList.remove('selected-character'));
        selectedCharacter = button.textContent;
        button.classList.add('selected-character');
    });
});

document.querySelectorAll('input.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (selectedCharacter) {
            cell.value = selectedCharacter;
        }
    });
});

function checkAnswers() {
    const cells = document.querySelectorAll('input.cell');
    cells.forEach(cell => {
        if (cell.value.toUpperCase() === cell.getAttribute('data-answer')) {
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
        } else {
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
        }
    });
}