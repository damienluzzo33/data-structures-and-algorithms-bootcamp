//? SINGLY LINKED LIST

//* Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let newNode = new Node(3);
//* Creates a connection to another node that has a value of 4, however instead of writing 15 different node.next statments and instantiating nodes for each node you want to connect we use a linked list to connect them more easily
newNode.next = new Node(4);
console.log(newNode);

//* SinglyLinkedList
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let temp = current;
        while(current.next) {
            temp = current;
            current = current.next;
        }
        this.tail = temp;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return oldHead;
    }
    unshift(val) {
        const node = new Node(val); 
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    get(position) {
        if(position >= this.length || position < 0) {
            return null;
        }
        let current = this.head;
        // let i = 0;
        // while(i < position) {
        //     current = current.next;
        //     i++;
        // }
        for(let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }
    set(val, position) {
        let nodeToBeUpdated = this.get(position);
        if(!nodeToBeUpdated) return false;
        nodeToBeUpdated.value = val;
        return true;
    }
    insert(val, position) {
        if(position > this.length || position < 0) {
            return false;
        }
        if(position === 0) {
            return !!this.unshift(val);
        }
        if(position === this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val);
        let previousNode = this.get(position - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(position) {
        if(position >= this.length || position < 0) {
            return undefined;
        }
        if(position === 0) {
            return this.shift(position);
        }
        if(position === this.length - 1) {
            return this.pop();
        }
        let previousNode = this.get(position - 1);
        let deletedNode = previousNode.next;
        previousNode.next = deletedNode.next;
        this.length--;
        return deletedNode;
    }
    reverse() {
        let current = this.head;
        this.head = this.tail;
        let previous = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            //* store the next node to be reversed into variable
            next = current.next;
            //* reverse the pointer of the current node to point to the node it needs to be pointed to
            current.next = previous;
            //* keep track of the current node as the previous because we're moving to the next node to be reversed
            previous = current;
            //* move onto the next node to be reversed
            current = next;
        }
        return this;
    }
}