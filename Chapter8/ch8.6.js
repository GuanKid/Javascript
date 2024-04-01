console.log("Value of PI:", Math.PI);
console.log("Ceil value of 5.7:", Math.ceil(5.7));
console.log("Floor value of 5.7:", Math.floor(5.7));
console.log("Round value of 5.7:", Math.round(5.7));

console.log("Random value:", Math.random());

console.log("Random number from 0 to 10:", Math.floor(Math.random() * 11));

console.log("Random number from 1 to 10:", Math.floor(Math.random() * 10) + 1);

console.log("Random number from 1 to 100:", Math.floor(Math.random() * 100) + 1);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 100; i++) {
    console.log("Random number:", getRandomNumber(1, 100));
}
