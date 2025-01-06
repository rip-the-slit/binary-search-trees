import Tree from "./tree-class.js";

const randomNumbers = [];
while (randomNumbers.length < 30)
  randomNumbers.push(Math.trunc(Math.random() * 100));

const test = new Tree(randomNumbers);

test.prettyPrint();

function checkBalance() {
  if (test.isBalanced()) console.log("Tree is balanced");
  else console.log("Tree is unbalanced");
}

checkBalance();

function printElements() {
  test.levelOrder((node) => console.log(node));
  test.preOrder((node) => console.log(node));
  test.postOrder((node) => console.log(node));
  test.inOrder((node) => console.log(node));
}

printElements()

for (let i = 0; i < 10; i++) test.insert(Math.trunc(Math.random() * 100));

checkBalance();

test.rebalance()

checkBalance()

printElements()