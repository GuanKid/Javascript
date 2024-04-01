function calculate(num1, num2, operator = 'add') {
    if (operator === 'add') {
        return num1 + num2;
    } else if (operator === 'subtract') {
        return num1 - num2;
    } else {
        console.log('Invalid operator. Defaulting to addition.');
        return num1 + num2;
    }
}

const num1 = 10;
const num2 = 5;

console.log(`Adding ${num1} and ${num2}:`, calculate(num1, num2, 'add'));
console.log(`Subtracting ${num1} from ${num2}:`, calculate(num1, num2, 'subtract'));
console.log(`No operator specified (defaulting to addition):`, calculate(num1, num2));
console.log(`Changing operator to 'subtract':`, calculate(num1, num2, 'subtract'));
