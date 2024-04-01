class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

        printSound() {
        console.log(`The ${this.species} says ${this.sound}!`);
    }
}

Animal.prototype.move = function() {
    console.log(`The ${this.species} is moving.`);
};

const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

console.log(dog);
console.log(cat);

dog.printSound();
cat.printSound();

dog.move();
cat.move();
