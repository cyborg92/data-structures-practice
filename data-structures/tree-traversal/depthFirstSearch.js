class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      var newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
    find(value) {
      if (this.root === null) return false;
      var current = this.root,
        found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return undefined;
      return current;
    }
    contains(value) {
      if (this.root === null) return false;
      var current = this.root,
        found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
    BFS() {
      var node = this.root,
        data = [],
        queue = [];
      queue.push(node);
  
      while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data;
    }
    // visit the node first and then look left and right
    // flow followed is root,left,right
    DFSPreOrder() {
      var data = [];
      function traverse(node) {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data; // [10,6,3,8,15,20]
    }
    // visit a node after we have looked left and right 
    // flow is left, right, root,
    DFSPostOrder() {
      var data = [];
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
      }
      traverse(this.root);
      return data; // [3,8,6,20,15,10]
    }
    // flow is left root right
    DFSInOrder() {
      var data = [];
      function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data; //[3,6,8,10,15,20]
    }
  }
  
  var tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
  tree.DFSPreOrder();
  tree.DFSPostOrder();
  tree.DFSInOrder();
  