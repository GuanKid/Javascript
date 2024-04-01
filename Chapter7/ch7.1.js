class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const friend1 = new Person("John", "Doe");

const friend2 = new Person("Jane", "Smith");

console.log("Hello, " + friend1.firstName + " " + friend1.lastName + "!");
console.log("Hello, " + friend2.firstName + " " + friend2.lastName + "!");
