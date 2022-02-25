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
  // remove node at start 99 100
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
  //add value at start 99 100
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
  set(index, val) {}
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
list.push("raja")
list.push("ram")
list.push("mohan")
list.push("roy")
list.push("alex")
list.push("ajay");
list.push("raju");
