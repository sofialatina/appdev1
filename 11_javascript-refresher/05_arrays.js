let favoriteFoods = ["Pizza", "Adobo", "Ice Cream"];
favoriteFoods.push("Fried Rice");
favoriteFoods.shift();
console.log("My favorite foods:");
for (let food of favoriteFoods) {
  console.log(food);
}

let foodMessages = favoriteFoods.map(food => "I like " + food);
console.log("Food messages:");
console.log(foodMessages);
