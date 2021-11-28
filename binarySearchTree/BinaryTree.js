class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while(true) {
      if (node.data < current.data) {
        if (current.leftChild === null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (current.rightChild === null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return 'Tree is empty';
    }
    let current = this.root;
    while(current !== null) {
      if (value < current.data) {
        current = current.leftChild;
      } else if(value > current.data) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false
  }
}

module.exports = BinaryTree;