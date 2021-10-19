class Stack {
  constructor() {
    this.top = 0;
    this.data = [];
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    this.top = this.top - 1;
    return this.data.pop(); 
  }

  push(data) {
    this.data[this.top] = data;
    this.top++;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1]
  }  

  isEmpty() {
    return this.top === 0;
  }
}

module.exports = Stack;