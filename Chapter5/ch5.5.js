let grid = [];
let numCells = 64;
let counter = 0;
let row = [];
for (let i = 0; i <= numCells; i++) {
    if (i % 8 === 0) {
        if (row !== undefined) {
            grid.push(row);
        }
    
        row = [];
    }
    
    counter++;
    
    let temp = counter;
    row.push(temp);
    
    if (counter === 8) {
        
        grid.push(row);
    }
}

console.log(grid);
