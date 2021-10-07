const TestArray = require('./arrays');

let array = new TestArray();

array.push(10);
array.push(20);
array.push(30);
array.push(40);
array.push(50);
console.log(array)
array.insertAt(60, 2);

console.log('-'.repeat(99))
console.log(array)
console.log('-'.repeat(99))