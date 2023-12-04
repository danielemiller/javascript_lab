// number_guessing_game_v2.js

function generateNumber(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function calculateScore(attempts, maxAttempts) {
    return Math.max(0, maxAttempts - attempts + 1) * 10;
}

function main() {
    const minVal = 1;
    const maxVal = 100;
    const maxAttempts = 10;

    const targetNumber = generateNumber(minVal, maxVal);
    let attempts = 0;

    while (attempts < maxAttempts) {
        const guess = parseInt(prompt("Enter your guess: "), 10);
        attempts++;

        if (guess < targetNumber) {
            alert("Too low!");
        } else if (guess > targetNumber) {
            alert("Too high!");
        } else {
            const score = calculateScore(attempts, maxAttempts);
            alert(`Correct! You guessed the number in ${attempts} attempts! Your score: ${score}`);
            return;
        }
    }

    alert(`Sorry, you didn't guess the number. It was ${targetNumber}.`);
}

main();
