let start = 10;
function countdown(value) {
    
    console.log(value);

    
    if (value < 1) {
        return;
    }
    
    
    
    countdown(value - 1);
}
function secondCountdown(value) {
    
    if (value > 0) {
    
        return secondCountdown(value - 1);
    }
}
console.log("Countdown:");
countdown(start);

console.log("\nSecond Countdown:");
secondCountdown(start);

