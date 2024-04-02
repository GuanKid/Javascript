let shoppingList = ["Milk","Bread", "Apples"];
shoppingList[1] = "Bananas";
shoppingList.pop();
shoppingList.sort();
console.log(shoppingList.find(function(e) {return e==="Milk"}));
shoppingList.push("Carrots");
shoppingList.push("Lettuce");
let newList = ["Juice", "Pop"]
shoppingList = shoppingList.concat(newList);
shoppingList=shoppingList.concat(newList);
console.log(shoppingList.lastIndexOf("Pop"))
console.log(shoppingList)