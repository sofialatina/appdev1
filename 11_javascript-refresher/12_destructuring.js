const person = {
    name: "Latina",
    age: 20,
}

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

const hobbies = ["Watching", "Reading", "Gaming (occasionally)"];
const [hobby1, hobby2, hobby3] = hobbies;
console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);
console.log("Hobby 3:", hobby3);

function printName({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printName(person);