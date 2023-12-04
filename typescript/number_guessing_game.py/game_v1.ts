// number_guessing_game_v1.ts

function generateNumber(minVal: number, maxVal: number): number {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

main();
