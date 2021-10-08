
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

  // Todo
  // addFirst
  // addLast
  // deleteFirst
  // deleteLast
  // contains
  // indexOf
}

module.exports = {LinkedList, Node};