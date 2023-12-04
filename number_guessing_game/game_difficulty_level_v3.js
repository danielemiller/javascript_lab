// number_guessing_game_v3.js

function generateNumber(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function calculateScore(attempts, maxAttempts) {
    return Math.max(0, maxAttempts - attempts + 1) * 10;
}

function selectDifficulty() {
    const choice = prompt("Select difficulty level:\n1. Easy\n2. Medium\n3. Hard");
    switch (choice) {
        case "1": return { min: 1, max: 50 };
        case "2": return { min: 1, max: 100 };
        case "3": return { min: 1, max: 150 };
        default: return { min: 1, max: 100 };
    }
}

function main() {
    const difficulty = selectDifficulty();
    const maxAttempts = 10;

    const targetNumber = generateNumber(difficulty.min, difficulty.max);
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
