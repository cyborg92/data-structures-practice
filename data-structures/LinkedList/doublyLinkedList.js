class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add node at end
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove last node
  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      this.tail.next = null;
      removedNode.previous = null;
    }
    this.length--;
    return removedNode;
  }
  // remove node at start --> 99 100
  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.previous = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
  //add value at start eg --> 99 100
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  } // get an element from given index
  //99 100 010 1010 1010 10101 0101 10101 010101 010101
  get(index) {
    if (index < 0 || index >= this.length || !this.head) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let foundNode;
    if (index <= this.length / 2) {
      foundNode = this.head;
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next;
      }
    } else {
      foundNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        foundNode = foundNode.previous;
      }
    }
    return foundNode;
  }
  // set value at particular index in double linked list
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // add value at given index to list eg --- 99 100 --> |add here 500 | --> 101 102
  // treat 100 as before node, 101 as afternode
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    let beforeNode = this.get(index - 1);
    let newNode = new Node(val);
    let afterNode = beforeNode.next; // 101 = 100.next;
    beforeNode.next = newNode; // 100.next = 500;
    newNode.previous = beforeNode; // 500.previous = 100;
    newNode.next = afterNode; // 500.next=101;
    afterNode.previous = newNode; // 101.previous= 500
    this.length++;
    return true;
  }
  // remove value at given index to list eg --- 99 100 --> 101 102 103
  // eg. remove 101
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let beforeNode=removedNode.previous;
    beforeNode.next=removedNode.next;
    removedNode.next.previous=beforeNode;
    removedNode.next=null;
    removedNode.previous=null;
    this.length--;
    return removedNode;
  }
}
/* big O of doubly linked list
Insert and Remove -O(1)
Search and Access - O(n)

*/

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
list.push("raja");
list.push("ram");
list.push("mohan");
list.push("roy");
list.push("alex");
list.push("ajay");
list.push("raju");
