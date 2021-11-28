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


  // O(n)
  unsortedMin(root) {
    let left = root.leftChild ? this.unsortedMin(root.leftChild) : root.data;
    let right = root.rightChild ? this.unsortedMin(root.rightChild) : root.data;

    return Math.min(Math.min(left, right), root.data);
  }

  // O(log n)
  sortedMin(root) {
    if (root === null) {
      return
    }

    let current = root;
    let last;
    while (current !== null) {
      last = current;
      current = current.leftChild;
    }
    return last.data
  }

  equals(tree) {
    let current = this.root;
    if (current === null) {
      return;
    }

    if (current.data === tree.data) {
      let left = current.leftChild ? this.equals(current.leftChild) : true;
      let right = current.rightChild ? this.equals(current.rightChild) : true;
      return left === right;
    }
    return false;
  }
}

module.exports = BinaryTree;