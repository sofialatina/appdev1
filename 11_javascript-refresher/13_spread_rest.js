const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers);

const user = { name: "Latina", age: 20 };
const moreUser = { ...user, hobby1: "Watching"};
console.log(moreUser);

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(4, 5, 6));