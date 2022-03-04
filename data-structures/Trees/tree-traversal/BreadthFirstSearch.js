/** 
 * In this approach of traversal, we traverse the tree horizontally, that means we move from root node
 * to immediate child node and then check all the sibling nodes, once they are traversed, then we move to
 * next level of child nodes
 * eg ---- >
 *              root
 *     node1    node2     node3 ---> check all the nodes on this level, horizontal check
 *    node4 node5
 * 
*/


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
    insert(val) {
      let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        while (true) {
          let current = this.root;
          if (val === current.value) return undefined;
          if (val < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
    find(val) {
      if (this.root === null) return false;
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (val < current.value) {
          current = current.left;
        } else if (val > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return false;
      return current;
    }
    contains(val) {
      if (this.root === null) return false;
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (val < current.value) {
          current = current.left;
        } else if (val > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
    BFS(){
        let queue=[];
        let data=[];
        let node=this.root;
        queue.push(node);
        while(queue.length){
           node=queue.shift();
           //data.push(node);
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
  }

  let tree= new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);