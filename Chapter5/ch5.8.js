let output = "";


let skipNumber = 5;


for (let i = 1; i <= 10; i++) {
    
    if (i === skipNumber) {
        
        continue;
    }
    
    output += i;
}

console.log("Output with continue:", output);

output = "";

for (let i = 1; i <= 10; i++) {
    
    if (i === skipNumber) {
        break;
    }
    output += i;
}
console.log("Output with break:", output);
