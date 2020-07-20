// this is called dutch flag


class Node {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node 
        var node = new Node(element);

        // to store current node 
        var current;

        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }

    getHead() {
        return this.head;
    }
}

function sortLS(head) {

    const newLs = new LinkedList();

    newLs.add(2);
    newLs.add(1);
    newLs.add(0);
    newLs.add(2);
    newLs.add(1);
    newLs.add(0);
    newLs.add(2);

    let headNode = newLs.getHead();
    console.log("vinod head is", headNode);

    let zeroD = new Node(0);
    let oneD = new Node(0);
    let twoD = new Node(0);

    let zero = zeroD;
    let one = oneD;
    let two = twoD;
    let curr = headNode;

    while (curr ) {

        if (curr.element === 0) {
            zero.next = curr;
            zero = zero.next;
        } else if (curr.element === 1) {
            one.next = curr;
            one = one.next;
        } else {
            two.next = curr;
            two = two.next;
        }
        curr = curr.next;
    }
        zero.next = oneD.next;
        one.next = twoD.next;
        two.next = null;

        headNode.next = zeroD.next;

        delete zeroD;
        delete oneD;
        delete twoD;

        return headNode;

}
