# Binary heaps

- Its very similar to a binary tree with but set of rules
- Each node can have at max 2 childen
- In MaxBinaryHeap ,parent nodes are always larger than the child nodes, but there are no gurantees on the sibling.
- A Binary heap is as compact as possible. All the children of the each node are as full as they can be and left childen are filled first.
- In MinBinaryHeap, parent nodes are always smaller than child nodes.

### Note :

- Binary Heaps are used to implement Priority Queues, which are commonly used as data structures.
- they are also used a bit for graph traversal algos

# Storing Heaps, they can be stored using an array/list

### how to find child node from parent node --->

- For an index of array n parent node :
  1. the left child is stored at 2n+1
  2. the right child is stored at 2n+2.

### how to find parent node from child node--->

- For any child node:

* The parent node is at (n-1)/2 and floor it i.e. Math.floor((n-1)/2);

### Big O of Binary Heaps :

- Insertion : O(log n)
- Removal : O(log n)
- Search : O(n)
