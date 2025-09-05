console.log('5' == 5);
console.log('5' === 5);

let a;
let b = null;        

console.log(a);      
console.log(b);      

console.log(typeof a);  
console.log(typeof b);  

const obj = {
  name: "Levine",
  
  regularFunc: function() {
    console.log("regularFunc this.name:", this.name); 
  },
  
  arrowFunc: () => {
    console.log("arrowFunc this.name:", this.name);    
  }
};

obj.regularFunc();
obj.arrowFunc(); 

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1);
console.log(arr2);    

let arr3 = [1, 2, 3];
let arr4 = [...arr3];  
arr4.push(5);

console.log(arr3);   
console.log(arr4); 