// simple way to talk about node
// we set the data with the constructor and the this.next will either link or point that where it is going to go which in this case nowhere.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

const firstNode = new Node(5);

console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;
