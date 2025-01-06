import mergeSort from "./mergeSort.js";
import Node from "./node-class.js";

export default class Tree {
  constructor(array) {
    this.root = Tree.buildTree(array);
  }
  static buildTree(array, sorted = false) {
    if (!sorted) {
      return Tree.buildTree(mergeSort(array), true);
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
  insert(value, node, subnode) {
    if (!subnode) {
      if (this.root == null) return (this.root = new Node(value));
      else node = this.root;
    } else if (node[subnode] == null) return (node[subnode] = new Node(value));
    else node = node[subnode];

    if (value < node.data) this.insert(value, node, "left");
    else this.insert(value, node, "right");
  }
  deleteItem(value, node, subnode) {
    if (node === null) return;
    if (!subnode) {
      if (this.root.data == value) {
        const subtree = [];
        this.levelOrder((i) => subtree.push(i.data), this.root.left);
        this.levelOrder((i) => subtree.push(i.data), this.root.right);
        this.root = Tree.buildTree(subtree);
        return;
      } else node = this.root;
    } else if (node?.[subnode]?.["data"] == value) {
      const subtree = [];
      this.levelOrder((i) => subtree.push(i.data), node[subnode]["left"]);
      this.levelOrder((i) => subtree.push(i.data), node[subnode]["right"]);
      node[subnode] = Tree.buildTree(subtree);
      return;
    } else node = node[subnode];

    if (value < node?.data) this.deleteItem(value, node, "left");
    else this.deleteItem(value, node, "right");
  }
  find(value, node, subnode) {
    if (node === null) return node;
    if (!subnode) {
      if (this.root.data == value) return this.root;
      else node = this.root;
    } else if (node?.[subnode]?.["data"] == value) return node[subnode];
    else node = node[subnode];

    if (value < node?.data) return this.find(value, node, "left");
    else return this.find(value, node, "right");
  }
  levelOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback function required");
    else if (root == null) return;
    else {
      const q = [root];
      while (q[0]) {
        const node = q.shift();
        callback(node);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
  }
  inOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback function required");
    else if (root == null) return;
    else {
      if (root.left) this.inOrder(callback, root.left);
      callback(root);
      if (root.right) this.inOrder(callback, root.right);
    }
  }
  preOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback function required");
    else if (root == null) return;
    else {
      callback(root);
      if (root.left) this.preOrder(callback, root.left);
      if (root.right) this.preOrder(callback, root.right);
    }
  }
  postOrder(callback, root = this.root) {
    if (!callback) throw new Error("Callback function required");
    else if (root == null) return;
    else {
      if (root.left) this.postOrder(callback, root.left);
      if (root.right) this.postOrder(callback, root.right);
      callback(root);
    }
  }
  height(node) {
    if (!node || (!node.left && !node.right)) return 0;
    const left = this.height(node.left) + 1;
    const right = this.height(node.right) + 1;
    return left > right ? left : right;
  }
  depth(node, tnode = this.root) {
    if (!node || !tnode) return null;
    if (node === tnode) return 0;
    if (node.data < tnode.data) return this.depth(node, tnode.left) + 1;
    return this.depth(node, tnode.right) + 1;
  }
  isBalanced(node = this.root) {
    if (!node) return true;
    return (
      Math.abs(this.height(node?.left) - this.height(node?.right)) <= 1 &&
      this.isBalanced(node?.left) &&
      this.isBalanced(node?.right)
    );
  }
}
