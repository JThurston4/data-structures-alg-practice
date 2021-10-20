const Stack = require('../stacks/Stack');
class StackQueue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    enqueue(item) {
        this.stackOne.push(item);
    };

    dequeue() {
        if (this.stackOne.isEmpty() && this.stackTwo.isEmpty()) {
            throw new Error('Queue is empty')
        }
        if (this.stackTwo.isEmpty()) {
            while (!this.stackOne.isEmpty()) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        return this.stackTwo.pop();
    };


}

module.exports = StackQueue;