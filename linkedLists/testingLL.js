const {LinkedList, Node} = require('./LinkedList');

let node1 = new Node('this is node 1');
let node2 = new Node('and this is node 2');
let node3 = new Node('node threeee');
let node4 = new Node('four');
let node5 = new Node('node five');

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

list.addLast(node5)
// console.log(list);

// list.deleteFirst();
console.log(list.getKthFromTheEnd(-1));


