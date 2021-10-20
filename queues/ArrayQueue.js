const Stack = require('../stacks/Stack');
class ArrayQueue {
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    // enqueue(item)
    enqueue(data) {
        this.items.push(data)
    }

    // dequeue()
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue already empty';
        }
        return this.items.shift();
    }

    // front()
    front() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[0];
    }

    back() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[this.items.length - 1]
    }

    // isEmpty()
    isEmpty() {
        return !this.items.length
    }

    // only allowed to add, remove, and isempty
    reverse() {
        let stack = new Stack();
        while(!this.isEmpty()) {
            stack.push(this.dequeue())
        }
        
        let output = new Queue();
        while(!stack.isEmpty()) {
            output.enqueue(stack.pop())
        }
        return output;
    }
}

module.exports = ArrayQueue;