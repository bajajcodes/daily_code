var startTime = performance.now();

import Stack from "./Stack.1.mjs";

function isOperator(letter) {
  const operators = "*/+-";
  return operators.indexOf(letter) !== -1 ? true : false;
}

function calculate(operator, operand1, operand2) {
  if (operator === "/") {
    return operand1 / operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "+") {
    return operand1 + operand2;
  } else {
    return operand1 - operand2;
  }
}

function isPrefixExpression(expression) {
  const stack = new Stack(expression.length);
  let index = expression.length;
  while (index--) {
    if (isOperator(expression[index])) {
      const poppedElementLeft = stack.pop();
      const poppedElementRight = stack.pop();
      if (poppedElementLeft === null || poppedElementRight === null) {
        return false;
      }
      const res = calculate(
        expression[index],
        parseInt(poppedElementLeft),
        parseInt(poppedElementRight)
      );
      stack.push(res);
    } else {
      stack.push(expression[index]);
    }
  }
  return true;
}

function prefixToInfix(expression) {
  if (!isPrefixExpression(expression)) return "";
  const stack = new Stack(expression.length);
  let index = expression.length;
  while (index--) {
    if (isOperator(expression[index])) {
      const poppedElementLeft = stack.pop();
      const poppedElementRight = stack.pop();
      stack.push(
        `(${poppedElementLeft}${expression[index]}${poppedElementRight})`
      );
    } else {
      stack.push(expression[index]);
    }
  }
  console.log(stack.toString());
}

prefixToInfix("*-A/BC-/AKL");

var endTime = performance.now();

console.log(
  `Call to doSomething took ${(endTime - startTime).toFixed(2)} milliseconds`
);
