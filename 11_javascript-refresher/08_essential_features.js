const hobbies = ["Watching", "Reading", "Gaming (occasionally)"];
hobbies.map(hobby => console.log(hobby));

const student = { name: "Latina", age: 20 };
const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log(newArray);