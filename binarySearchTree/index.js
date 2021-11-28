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


console.log(tree.find(61))

// console.log(JSON.stringify(tree, null, 2))