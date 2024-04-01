const numbers = [1, 2, 3, 4, 5];

const doubledNumbers1 = numbers.map(function(num) {
    return num * 2;
});

const doubledNumbers2 = numbers.map(num => num * 2);

console.log("Using anonymous function:", doubledNumbers1);
console.log("Using arrow function:", doubledNumbers2);
