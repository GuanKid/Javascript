function countUp(start) {

    if (start > 10) {
        return;
    }

    console.log(start);

    countUp(start + 1);
}

console.log("Counting up starting from 1:");
countUp(1);

console.log("\nCounting up starting from 5:");
countUp(5);

console.log("\nCounting up starting from 8:");
countUp(8);
