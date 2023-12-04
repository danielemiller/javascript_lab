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
            alert(`Correct! You guessed the number in ${attempts} attempts!`);
            return;
        }
    }

    alert(`Sorry, you didn't guess the number. It was ${targetNumber}.`);
}
