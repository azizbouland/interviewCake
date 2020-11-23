class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// o(n) time and space
// function find2ndLargest(tree) {
//   var largest = tree.value;
//   var secLargest = Number.NEGATIVE_INFINITY;

//   function depthFirst(tree) {
//     if (tree !== null && tree.value > largest) {
//       secLargest = largest;
//       largest = tree.value;
//     }
//     if (tree.left !== null) depthFirst(tree.left);
//     if (tree.right !== null) depthFirst(tree.right);
//   }
//   depthFirst(tree);
//   return secLargest;
// }

// average case o(log n) time o(log n) space
// worse case o(n) time and space
function find2ndLargest(tree) {
  var largest = tree.value;
  var secLargest = Number.NEGATIVE_INFINITY;

  function recurse(tree) {
    if (tree.right) {
      secLargest = largest;
      largest = tree.right.value;
      recurse(tree.right);
    }
  }

  recurse(tree)
  return secLargest;
}
