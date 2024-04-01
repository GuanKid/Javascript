function calculate(num1, num2) {
    return num1 + num2;
}


const results = [];


for (let i = 0; i < 10; i++) {
    
    const num1 = i * 5;
    const num2 = i * i;
    
    
    const result = calculate(num1, num2);
    
  
    results.push(result);
}


console.log(results);
