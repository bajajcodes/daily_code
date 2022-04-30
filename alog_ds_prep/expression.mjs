import Stack from "./Stack.1.mjs";

const expression = "[(])";
function isBalanced(left, right) {
  if ((left.charCodeAt(0) === 40 && right.charCodeAt(0) === 41) ||
    left.charCodeAt(0) + 2 === right.charCodeAt(0)) {
    return true;
  }

  return false;
}
function matchParenthesis(expression) {
  const stack = new Stack(expression.length);
  let index = 0;

  while (index < expression.length) {
    if (expression.charCodeAt(index) === 40 ||
      expression.charCodeAt(index) === 91 ||
      expression.charCodeAt(index) === 123) {
      stack.push(expression[index]);
    } else {
      const poppedElement = stack.pop();
      if (!isBalanced(poppedElement, expression[index])) {
        return "Not Balanced";
      }
    }
    ++index;
  }

  return "Balanced";
}
console.log(matchParenthesis(expression));
