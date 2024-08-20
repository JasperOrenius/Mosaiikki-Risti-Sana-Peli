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