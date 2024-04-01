let myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Object properties and values:");
for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}
let myArray = ["John", 30, "New York"];
console.log("Array values:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
