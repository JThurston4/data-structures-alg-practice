const ArrayQueue = require('./ArrayQueue');
const StackQueue = require('./StackQueue');

// let q = new ArrayQueue();
let q = new StackQueue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

q.dequeue()
q.enqueue(60)
q.enqueue(70)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()


console.log(q)
// console.log(q.reverse())