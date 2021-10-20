const Queue = require('./Queue');

let q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue('hello my name is winter paladain AF')
q.enqueue(50)

q.dequeue()
console.log(q.front())
console.log(q.back())