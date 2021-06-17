// this is to add a new head to the linkedList

const Node = require('./Node');

// props are not needed for a node function
class LinkedList {
    constructor() {

        this.head = null;

    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }
}

module.exports = LinkedList;