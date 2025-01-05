import Tree from "./tree-class.js";

const test = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9])
test.prettyPrint()
console.log(test.height(test.find(5)))