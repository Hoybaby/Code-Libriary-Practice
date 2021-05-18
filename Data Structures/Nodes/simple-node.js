// simple way to talk about node
// we set the data with the constructor and the this.next will either link or point that where it is going to go which in this case nowhere.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // we want to allow the node to be updated so it can be traversed and it can do so with this method.
    setNextNode(node) {
        this.next = node;
    }

}




const firstNode = new Node(5);

console.log(firstNode.data);
console.log(firstNode.next);

// Updating it 

const secondNode = new Node();
// with this the next is updated
firstNode.setNextNode(secondNode);

console.log(firstNode) // this will show the first node then in the next: it will reveal the next node


module.exports = Node;
