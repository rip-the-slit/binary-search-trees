import Tree from "./tree-class.js";

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
test.root = null
test.insert(2)
test.insert(40)
test.prettyPrint()