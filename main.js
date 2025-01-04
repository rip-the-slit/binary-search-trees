import Tree from "./tree-class.js";

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
test.prettyPrint()
test.deleteItem(4)
test.deleteItem(6)
test.prettyPrint()