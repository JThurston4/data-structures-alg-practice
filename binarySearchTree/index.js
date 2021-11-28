const BT = require('./BinaryTree');
const Nodee = require('./Nodee');

let root = new Nodee({data: 7})

let tree = new BT(root);

tree.insert(new Nodee({data: 4}))
tree.insert(new Nodee({data: 5}))
tree.insert(new Nodee({data: 9}))
tree.insert(new Nodee({data: 2}))
tree.insert(new Nodee({data: 8}))
tree.insert(new Nodee({data: 6}))

  // preOrder = root left right
  // inOrder = left root right
  // postOrder = left right root
  //       7
  //   4       9
  // 2   5   8
  //      6  

// tree.traversePreOrder(root)
// tree.traverseInOrder(root)
// tree.traversePostOrder(root)
let root2 = new Nodee({data: 20})
let tree2 = new BT(root2)

tree2.insert(new Nodee({data: 10}))
tree2.insert(new Nodee({data: 30}))
tree2.insert(new Nodee({data: 6}))
tree2.insert(new Nodee({data: 14}))
tree2.insert(new Nodee({data: 24}))
tree2.insert(new Nodee({data: 3}))
tree2.insert(new Nodee({data: 8}))
tree2.insert(new Nodee({data: 26}))

console.log(tree2.height(root2))
console.log(tree.height(root))
// tree2.traversePreOrder(root2)
// tree.traverseInOrder(root2)
// Post-order: 3, 8, 6, 14, 10, 26, 24, 30, 20 
// tree.traversePostOrder(root2)
// console.log(JSON.stringify(tree, null, 2))