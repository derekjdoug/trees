function preOrder(root) {
  // Root, Left, Right
  // Return single array

  let traversal = [];

  // Pushes root to traversal array first
  traversal.push(root.value);

  // If there is a left child, run preOrder on that and add to array
  if (root.left) {
    let leftTraversal = preOrder(root.left);
    traversal = traversal.concat(leftTraversal);
  }

  // If there is a right child, run preOrder on that and add to array last
  if (root.right) {
    let rightTraversal = preOrder(root.right);
    traversal = traversal.concat(rightTraversal);
  }

  return traversal;
}

function postOrder(root) {
  // Left, Right, Root
  // Return a single array
  let traversal = [];

  if(root.left) {
    let leftTraversal = postOrder(root.left);
    traversal = traversal.concat(leftTraversal);
  }
  if(root.right) {
    let rightTraversal = postOrder(root.right);
    traversal = traversal.concat(rightTraversal);
  }
  traversal.push(root.value);

  return traversal;
}

function inOrder(root) {
  // Left, Root, Right
  let traversal = [];

  if(root.left) {
    let leftTraversal = inOrder(root.left);
    traversal = traversal.concat(leftTraversal);
  }

  traversal.push(root.value);

  if(root.right) {
    let rightTraversal = inOrder(root.right);
    traversal = traversal.concat(rightTraversal);
  }

  return traversal;
}

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  preOrder() {
    let traversal = [];
    traversal.push(this.value);

    if (this.left) {
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }
    return traversal;
  }

  postOrder() {
    let traversal = [];

    if(this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = traversal.concat(leftTraversal);
    }
    if(this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = traversal.concat(rightTraversal);
    }
    traversal.push(this.value);
    return traversal;
  }

  inOrder() {
    let traversal = [];

    if(this.left) {
      let leftTraversal = this.left.inOrder();
      traversal = traversal.concat(leftTraversal);
    }

    traversal.push(this.value);

    if(this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder(){
    return preOrder(this.root);
  }
  postOrder(){
    return postOrder(this.root);
  }
  inOrder(){
    return inOrder(this.root);
  }
}

module.exports = {
  Node,
  BinaryTree,
}
