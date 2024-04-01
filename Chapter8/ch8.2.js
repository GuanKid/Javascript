const names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

const uniqueNames = names.filter(function(value, index, array) {
    console.log("Index:", index, "Value:", value);
    
    return array.indexOf(value) === index;
});

console.log("Unique Names:", uniqueNames);
