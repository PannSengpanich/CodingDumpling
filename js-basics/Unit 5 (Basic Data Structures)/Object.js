let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // change code below this line
  let result = foods[scannedItem];
  return result;
}

console.log(checkInventory("apples"));
console.log(foods.apples, foods["apples"]);
console.log(foods.hasOwnProperty("apples"), "apples" in foods);

for (let object in foods) {
  console.log(object);
}

console.log(Object.keys(foods));
