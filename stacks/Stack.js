class Stack {
  constructor() {
    this.top = 0;
    this.data = [];
    this.min = [];
    this.max = [];
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    this.top = this.top - 1;
    if (this.min[this.min.length -1] === this.data[this.top]) {
      this.min.pop()
    } 
    if (this.max[this.max.length -1] === this.data[this.top]) {
      this.max.pop()
    }

    return this.data.pop(); 
  }

  push(data) {
    this.data[this.top] = data;
    this.top++;
    if (Number(data) || Number(data) === 0) {
      if (!this.min.length) {
        this.min.push(data);
      } else if (this.min[this.min.length - 1] > data) {
        this.min.push(data);
      }


      if (!this.max.length) {
        this.max.push(data);
      } else if (this.max[this.max.length - 1] < data) {
        this.max.push(data);
      }
    }
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

  minn() {
    return this.min[this.min.length -1];
  }

  maxx() {
    return this.max[this.max.length - 1];
  }
}

module.exports = Stack;