class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //Inserting a value into heap where parent node is greater than child node, binary max heap
  Insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  // this method bubble up is used to move the element added into correct place.
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
  // used to remove the top most element from heap, mostly root.
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (element > this.values[leftIndex]) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        if (
          (swap === null && element > this.values[rightIndex]) ||
          (swap !== null && this.values[rightIndex] > this.values[leftIndex])
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

let newHeap = new MaxBinaryHeap();
