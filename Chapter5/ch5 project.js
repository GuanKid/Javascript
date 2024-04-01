let multiplicationTable = [];

let numValues = 10;

for (let i = 1; i <= numValues; i++) {
    let row = [];
    
    
    for (let j = 1; j <= numValues; j++) {
        
        row.push(i * j);
    }
    
    
    multiplicationTable.push(row);
}

console.log("Multiplication Table:");
for (let row of multiplicationTable) {
    console.log(row.join("\t"));
}
