import Node from "./node-class.js";

export default class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
  buildTree(array) {
    return array;
  }
}
