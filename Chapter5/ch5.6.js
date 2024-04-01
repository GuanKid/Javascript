let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}

console.log("Array contents:", myArray);
console.log("Output using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("Output using for of loop:");
for (let value of myArray) {
    console.log(value);
}
