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
  get(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return undefined;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }
  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert an item in linked list at a given index/place
  insert(val, index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else {
      if (index === this.length) {
        this.push(val);
        return true;
      } else if (this.index === 0) {
        this.unshift(val);
        return true;
      } else {
        let newNode = new Node(val);
        let foundNode = this.get(index - 1);
        if (foundNode) {
          let temp = foundNode.next;
          foundNode.next = newNode;
          newNode.next = temp;
        }
      }
      this.length++;
      return true;
    }
  }
  // remove an item in linked list at a given index/place
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (this.index === 0) {
      this.shift();
      return true;
    }
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    foundNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse(){
    let node=this.head;
    this.head=this.tail;
    this.tail=node;
    let next;
    let prev=null;
    for(let i=0;i<this.length;i++){
      next=node.next;
      node.next=prev;
      prev=node;
      node=next;
    }
  }
}

var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");


/* Big o complexity of the operations

Inserting data -> O(1)
Removal of data --> depends  O(1) if from start and O(n) if from end or in between
searching an element --> O(n)
Acess an element --> O(n)
*/
