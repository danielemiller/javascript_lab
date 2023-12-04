// script.js

let targetNumber = generateNumber(1, 100);
const pastGuesses = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value, 10);
    processGuess(guess);
    guessInput.value = ''; // Clear input field
});

function generateNumber(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function processGuess(guess) {
    pastGuesses.push(guess);
    let message = '';

    if (guess < targetNumber) {
        message = 'Too low!';
    } else if (guess > targetNumber) {
        message = 'Too high!';
    } else {
        message = `Correct! You guessed the number in ${pastGuesses.length} attempts!`;
        // Reset the game
        targetNumber = generateNumber(1, 100);
        pastGuesses.length = 0;
    }

    document.getElementById('result').textContent = message;
    document.getElementById('pastGuesses').textContent = `Past guesses: ${pastGuesses.join(', ')}`;
}
