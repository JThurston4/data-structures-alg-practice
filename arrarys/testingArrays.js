const CustomArray = require('./customArray');

let array = new CustomArray();

array.push(10);
array.push(20);
array.push(30);
array.push(40);
array.push(50);
console.log(array)
array.insertAt(60, 2);
console.log(array.indexOf(30))

console.log('-'.repeat(99))
console.log(array)
console.log('-'.repeat(99))