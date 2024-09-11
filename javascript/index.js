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

  function closeModal() {
    document.getElementById('instructionsModal').style.display = 'none';
  }

  function toggleCategory(imageElement) {
    const categoryElement = imageElement.previousElementSibling; 
    const buttonsElement = imageElement.nextElementSibling;
  

    categoryElement.classList.toggle('show');
    buttonsElement.classList.toggle('show');
  }
  