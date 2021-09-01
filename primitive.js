// primitive data types
let num1 = 23;
let num2 = num1;
console.log(num1, num2);
num1 = 66;
console.log(num1, num2);

// non-primitive data types
const x = {job : 'Web developer'};
const y = x;
console.log(x, y);
x.job = 'front-end developer';
console.log(x, y);