// Priority queue implemented using heap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElem = this.values[parentIndex];
      if (element.priority >= parentElem.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElem;
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const element = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;
      if (leftIndex < length) {
        if (element.priority > this.values[leftIndex].priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        if (
          (swap === null && element.priority < this.values[rightIndex].priority) ||
          (swap !== null && this.values[rightIndex].priority < this.values[leftIndex].priority)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let newPriorityQueue = new PriorityQueue();
