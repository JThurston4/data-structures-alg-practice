const Queue = require('./ArrayQueue');

let q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

console.log(q.reverse())