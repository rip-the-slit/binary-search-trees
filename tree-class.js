import mergeSort from "./mergeSort.js";
import Node from "./node-class.js";

export default class Tree {
  constructor(array) {
    this.root = Tree.buildTree(array);
  }
  static buildTree(array, sorted = false) {
    if (!sorted) {
      return Tree.buildTree(mergeSort(array), true)
    } else {
      if (array.length == 0) return null;
      const mid = Math.ceil(array.length / 2) - 1;
      const node = new Node(array[mid]);
      node.left = Tree.buildTree(array.slice(0, mid), sorted);
      node.right = Tree.buildTree(array.slice(mid + 1, array.length), sorted);
      return node;
    }
  }
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
