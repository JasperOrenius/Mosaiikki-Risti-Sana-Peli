function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
  }
  function toggleButtons(buttonContainer) {
    const buttons = buttonContainer.querySelector('.buttons');
    if (buttons.style.display === "none" || buttons.style.display === "") {
      buttons.style.display = "block";
    } else {
      buttons.style.display = "none";
    }
  }
  function showInstructions(url) {
    const modal = document.getElementById('instructionsModal');
    modal.style.display = 'flex';

    const startGameButton = document.getElementById('startGameButton');
    startGameButton.onclick = function() {
      window.location.href = url;
    };
}


  function openModal(imageSrc, difficultyUrl) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    
    modal.style.display = 'flex';
    modalContent.style.backgroundImage = `url(${imageSrc})`;

    const easyButton = document.getElementById('easyButton');
    const hardButton = document.getElementById('hardButton');

    easyButton.onclick = function() {
      closeModal();
      showInstructions(difficultyUrl); 
  };

    hardButton.onclick = function() {
        window.location.href = difficultyUrl; 
    };
}

  function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
  document.getElementById('instructionsModal').style.display = 'none';
}

  function toggleCategory(imageElement) {
    const categoryElement = imageElement.previousElementSibling; 
    const buttonsElement = imageElement.nextElementSibling;
  

    categoryElement.classList.toggle('show');
    buttonsElement.classList.toggle('show');
  }
  document.getElementById('imageModal').addEventListener('click', function(event) {
    const modalContent = document.getElementById('modalContent');
    
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
});