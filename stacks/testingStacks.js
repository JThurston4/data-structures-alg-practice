const Stack = require('./Stack');

let stack = new Stack();
let reverseMe = 'Winter Paladin AF';

for (let i = 0; i < reverseMe.length; i++) {
  stack.push(reverseMe[i]);
}

// console.log(stack)

let output = [];

for (let i = stack.top; i >= 0; i--) {
  output.push(stack.pop());
}

console.log(output.join(''))

