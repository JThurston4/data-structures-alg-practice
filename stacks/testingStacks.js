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
    if (c === '[' || c === '<' || c === '{' || c === '(' ) {
      stack.push(c);
    } else if (c === ']' || c === '>' || c === '}' || c === ')') {
      if (dict[c] !== stack.pop()) {
        return false
      }
    }
  }

  if (stack.isEmpty()) {
    return true
  }
  
  return false;
}

console.log(isBalanced('[hi(my{name<is>josh}how)are]you[?<.>]'))
console.log(isBalanced('[<'))


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


