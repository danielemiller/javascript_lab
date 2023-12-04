// number_guessing_game_v2.ts

function generateNumber(minVal: number, maxVal: number): number {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function calculateScore(attempts: number, maxAttempts: number): number {
    return Math.max(0, maxAttempts - attempts + 1) * 10;
}

function main(): void {
    const minVal: number = 1;
    const maxVal: number = 100;
    const maxAttempts: number = 10;

    const targetNumber: number = generateNumber(minVal, maxVal);
    let attempts: number = 0;

    while (attempts < maxAttempts) {
        const guess: number = parseInt(prompt("Enter your guess: ") || "0", 10);
        attempts++;

        if (guess < targetNumber) {
            alert("Too low!");
        } else if (guess > targetNumber) {
            alert("Too high!");
        } else {
            const score: number = calculateScore(attempts, maxAttempts);
            alert(`Correct! You guessed the number in ${attempts} attempts! Your score: ${score}`);
            return;
        }
    }

    alert(`Sorry, you didn't guess the number. It was ${targetNumber}.`);
}

main();
