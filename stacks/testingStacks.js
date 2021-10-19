const Stack = require('./Stack');


const isBalanced = (string) => {
  let output = true;
  const dict = 
    {
      ']': '[',
      '>': '<',
      '}': '{',
      ')': '('
    };
  let stack = new Stack();
  
  for (let i = 0; i < string.length; i++) {
    let c = string[i];
    if (c === '[' || c === ']' || c === '<' || c === '>' || c === '{' || c === '}' || c === '(' || c === ')') {
      stack.push(c);
    }
  }

  while (stack.top) {
    if (dict[stack.pop()] === stack.peek() ) {
      stack.pop()
    } else {
      output = false;
    } 
  }
  return output;
}

console.log(isBalanced('[(])'))


const reverseString = (string) => {
  let stack = new Stack();
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

// console.log(reverseString(reverseMe))


