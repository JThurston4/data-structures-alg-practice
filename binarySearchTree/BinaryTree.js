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

  // preOrder = root left right
  // inOrder = left root right
  // postOrder = left right root
  traversePreOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.data)
    this.traversePreOrder(root.leftChild)
    this.traversePreOrder(root.rightChild)
  }

  traverseInOrder(root) {
    if (root === null) {
      return;
    }

    this.traverseInOrder(root.leftChild)
    console.log(root.data)
    this.traverseInOrder(root.rightChild)
  }

  traversePostOrder(root) {
    if (root === null) {
      return;
    }

    this.traversePostOrder(root.leftChild)
    this.traversePostOrder(root.rightChild)
    console.log(root.data)
  }

  height(root) {
    // console.log(root)
    if (root === null) {
      return -1;
    }

    return 1 + Math.max(this.height(root.leftChild), this.height(root.rightChild));
  }
}

module.exports = BinaryTree;