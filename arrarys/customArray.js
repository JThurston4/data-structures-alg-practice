class CustomArray {
  constructor() {
    this.length = 0;

    this.data = {};

  }
  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  };

  // O(1)
  pop() {
    // let item = this.data[this.length-1];
    // delete item;
    delete this.data[this.length-1];
    this.length--
    return this.data;
  }

  // O(n)
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
    this.length++;
    return this.data
  }

  // O(n)
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--
    return this.data;
  }

  // O(1)
  getElementAtIndex(index) {
    return this.data[index];
  }

  // O(n)
  indexOf(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
  }

  // O(n)
  // For returning largest number in array (only works on array of numbers)
  max() {
    let largest = this.data[0];
    for (let i = 1; i < this.length; i++) {
      if (Number(this.data[i]) === NaN) {
        throw new Error(`Invalid item ${this.data[i]}; Array must contain only numbers`)
      }
      this.data[i] > largest ? largest = this.data[i] : ``;
    }
    return largest;
  }

  // O(n)
  // Combines all identical values between two arrays into a new one
  intersect(array) {
    let output = new CustomArray();

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (array.data[i] === this.data[j]) {
          output.push(this.data[j]);
        }
      }
    }

    return output;
  }

  // O(n)
  reverse() {
    let output = new CustomArray();

    for (let i = this.length-1; i >= 0; i--) {
      output.push(this.data[i]);
    }
    return output
  }


}

module.exports = CustomArray;