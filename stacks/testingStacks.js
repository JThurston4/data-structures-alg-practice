const Stack = require('./Stack');

let stack = new Stack();


const reverseString = (string) => {
  let output = [];
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  
  for (let i = stack.top; i >= 0; i--) {
    output.push(stack.pop());
  }
  
  return output.join('');
}

let reverseMe = 'Winter Paladin AF';

console.log(reverseString(reverseMe))


