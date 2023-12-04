// script.js

document.getElementById('submitGuess').addEventListener('click', function() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value, 10);
    sendGuess(guess);
    guessInput.value = ''; // Clear input field
});

window.onload = function() {
    startNewGame();
};

function startNewGame() {
    fetch('/start')
        .then(response => response.json())
        .then(data => console.log(data.message));
}

function sendGuess(guess) {
    fetch('/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess: guess }),
    })
    .then(response => response.json())
    .then(data => updateUI(data.message));
}

function updateUI(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;

    // Reset the game if the guess is correct
    if (message === 'Correct!') {
        startNewGame();
    }
}

