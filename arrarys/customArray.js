class CustomArray {
  constructor() {
    this.length = 0;

    this.data = {};

  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  };

  pop() {
    // let item = this.data[this.length-1];
    // delete item;
    delete this.data[this.length-1];
    this.length--
    return this.data;
  }

  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
    this.length++;
    return this.data
  }

  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--
    return this.data;
  }

  getElementAtIndex(index) {
    return this.data[index];
  }

  indexOf(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
  }
}

module.exports = CustomArray;