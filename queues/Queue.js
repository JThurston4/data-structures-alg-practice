class Queue {
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

    // printQueue()
    printQueue() {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " "
        }
        return str;
    }
}

module.exports = Queue;