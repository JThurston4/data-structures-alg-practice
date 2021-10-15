
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
  }

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  addLast(tail) {
    let node = this.head;
    while (node) {
      if (!node.next) {
        node.next = tail;
        return
      }
      node = node.next;
    }
  }

  deleteFirst() {
    this.head = this.head.next
  }

  deleteLast() {
    let node = this.head;
    while(node) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  contains(data) {
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return true
      }
      node = node.next;
    }
    return false;
  }

  indexOf(data) {
    let node = this.head;
    let count = 0;
    while(node) {
      if (node.data === data) {
        return count;
      }
      count++
      node = node.next;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  toArray() {
    let node = this.head;
    let output = [];
    while (node) {
      output.push(node.data)
      node = node.next;
    }
    return output;
  }

  reverse() {
    let arr = this.toArray();
    let head = new Node(arr[0])

    let output = new LinkedList(head)
    for (let i = 1; i < arr.length; i++) {
      output.addFirst(new Node(arr[i]));
    }
    return output;
  
  }

  getKthFromTheEnd(k) {
    if (!this.head) {
      throw new Error('Linked list is empty');
    }

    let distance = k;
    let node = this.head;
    let pointer = node;

    while (!!distance) {
      pointer = pointer.next;
      distance--;
      if (!pointer) {
        throw new Error('Invalid Argument');
      }
    }
    
    while(pointer.next) {
      pointer = pointer.next;
      node = node.next;
    }
    return node;
  }

  findMiddle() {

    let node = this.head;
    let middle = this.head;
    let counter = 0;
    while(node) {
      if (!node.next && counter % 2 === 1) {
        return [middle, middle.next]
        // console.log(middle)
      }
      node = node.next;
      counter % 2 !== 0 ? middle = middle.next : ``
      counter++
    }
    return middle;
  }

}

module.exports = {LinkedList, Node};