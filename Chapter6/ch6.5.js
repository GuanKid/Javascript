let value = "1000";


(function() {
    let value = "Local Value";
    console.log("Local value inside IIFE:", value);
})();


let result = (function() {
    let value = "New Local Value";
    return value;
})();

console.log("Result variable:", result); 


(function(parameter) {
    let value = parameter;
    console.log("Value assigned by the anonymous function:", value);
})("Custom Value");
