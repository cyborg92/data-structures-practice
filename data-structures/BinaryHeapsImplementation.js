class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  Insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElem = this.values[parentIndex];
      if (element <= parentElem) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElem;
      index = parentIndex;
    }
  }
}

let newHeap = new MaxBinaryHeap();
