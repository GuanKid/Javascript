let myTable = [];
let numRows = 5;
let numColumns = 3;
let counter = 0;
for (let i = 0; i < numRows; i++) {
    let tempTable = [];
    for (let j = 0; j < numColumns; j++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);
