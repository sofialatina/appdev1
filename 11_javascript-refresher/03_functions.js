function greet(name) {
    return `Hello, ${name}! <3`;
}
console.log(greet("Levin"));

const square = (num) => num * num;
console.log(square(4));

function calculator(z, g) {
  return {
    sum: z + g,
    product: z * g
  };
}

let result = calculator(4, 7);
console.log("Sum:", result.sum);         
console.log("Product:", result.product);