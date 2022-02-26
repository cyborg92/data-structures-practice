/**
 * Stacks are LIFO data structure, which means the last element added to the stack
 * will be the first element to leave the stack.
 *
 * <--------Use Case--------->
 * managing functions invocations
 * undo and redo operations
 * Routing (history Object) is treated like a stack
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size === 0) return undefined;
    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}
