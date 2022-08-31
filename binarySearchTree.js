const { Node, BinaryTree } = require("./binaryTree.js");

class BinarySearchTree extends BinaryTree {
  add(number) {
    let addedNode = new Node(number);
    console.log(addedNode);
    if (!this.root) {
      this.root = addedNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (addedNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = addedNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      if (addedNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = addedNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  contains(number) {
    let result = this.preOrder();
    console.log(result);
    let searchResult = false;
    for(let i = 0; i < result.length; i++){
      if(result[i] == number){
        searchResult = true;
      }
    }
      return searchResult;
   }

}

module.exports = { BinarySearchTree };
