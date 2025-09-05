import greet, { myDetails } from './15_modules_export.js';

console.log(greet("myDetails.name"));
console.log('My name is ' + myDetails.name + ' and I am ' + myDetails.age + ' years old.');