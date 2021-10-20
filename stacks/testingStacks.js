const Stack = require('./Stack');

let testingMin = new Stack();
testingMin.push(5)
testingMin.push(2)
testingMin.push(10)
testingMin.push(1)
// console.log(testingMin.peek())
console.log(testingMin.minn())
testingMin.pop()
testingMin.pop()
testingMin.pop()
testingMin.pop()
testingMin.pop()
testingMin.pop()
console.log(testingMin.minn())
console.log(testingMin.maxx())


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
    const leftBrackets = ['[', '<', '{', '('];
    const rightBrackets = [']', '>', '}', ')'];
    
    if (leftBrackets.includes(c)) {
      stack.push(c);
    } else if (rightBrackets.includes(c)) {
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

// console.log(isBalanced('[hi(my{name<is>josh}how)are]you[?<.>]<'))
// console.log(isBalanced('()'))


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


