
// 1. Create a new syCar object for a car
let syCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    mileage: 25000,
    is_used: true
};

// 2. Create a variable to hold the string value 'color'
let colorProperty = "color";

// Use the variable to assign a new value to the 'color' property
syCar[colorProperty] = "blue";

// 3. Assign a new property string value to the variable, such as 'forsale'
let forSaleProperty = "forsale";

// Use the variable to assign a new value to the 'forsale' property
syCar[forSaleProperty] = true;

// 4. Output make and model into the console
console.log("Make:", syCar.make);
console.log("Model:", syCar.model);


// 5. Output the value of forsale into the console
console.log("For Sale:", syCar[forSaleProperty]);

