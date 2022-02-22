class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //method to add value to linked list at the end of the linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // method to remove last value from linked list
  // since its single linked list, we don't know the element before it, so we need to traverse the whole list and check for
  // second last item
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // removing a new node from beginning of the linked list
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }

      return temp;
    }
  }
  // adding new node at beginning of linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val<0 || val>=this.length || !this.head) {
      return undefined;
    } else {
      let current = this.head;
      for (let i = 0; i <val ; i++) {
        current = current.next;
      }
      return current;
    }
  }
}

var list = new SinglyLinkedList()

list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 
