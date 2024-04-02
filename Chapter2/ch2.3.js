let a = prompt("Enter the length of side a:");

let b = prompt("Enter the length of side b:");

a = parseFloat(a);
b = parseFloat(b);

let aSquared = a * a;
let bSquared = b * b;
let sumOfSquares = aSquared + bSquared;
let hypotenuse = Math.sqrt(sumOfSquares);

console.log("The length of the hypotenuse is:", hypotenuse);
