import Tree from "./tree-class.js";

const test = new Tree([1, 2, 3, 4, 5, 6, 7])
test.prettyPrint()
test.postOrder((node) => console.log(node.data))