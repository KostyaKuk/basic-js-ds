const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data, left = null, right = null) {
      this.data = data
      this.left = left
      this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.global = null;
}

  root() {
    return this.global;
  }

  add( data ) {
    this.global = addData(this.global, data);

    function addData(node,data){
      if (node === null) {
        return new Node(data);
    }
       if (node.data === data) {
         return node;
    }
       if (data < node.data) {
          node.left = addData(node.left, data);
    }
        if (data > node.data) {
            node.right = addData(node.right, data);
    } 
return node
    }
    }

  has( data ) {
    let current = this.global;
    while (current){
      if (data === current.data){
        return true;
      }
      data < current.data ? current = current.left : current = current.right
    }
       return false
    }

  find( data ) {
    let current = this.global
    while (current.data !== data) {
        if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
        if (current === null) {
            return null
        }
    }
    return current
}

remove(data) {
  this.root = removeData(this.global, data);

  function removeData(node, data) {
      if (!node) {
          return null;
      }

      if (data < node.data) {
          node.left = removeData(node.left, data);
          return node;
      } else if (data > node.data) {
          node.right = removeData(node.right, data);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              return null;
          }
          if (node.left === null) {
             node = node.right
             return node
          }
          if (node.right === null) {
            node = node.left
            return node
          }

          let minRight = node.right;
          while (minRight.left) {
              minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeData(node.right, minRight.data);

          return node;
      }
  }
}
  min() {
    let current = this.global
        while (current.left !== null) {
            current = current.left
        }
        return current.data
  }

  max() {
    let current = this.global
    while (current.right !== null) {
        current = current.right
    }
    return current.data
  }
}


module.exports = {
  BinarySearchTree
};