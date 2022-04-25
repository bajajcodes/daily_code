function Stack(size) {
  (this.stack = Array(size)),
    (this.currentIndex = -1),
    (this.push = function (item) {
      if (this.currentIndex < this.stack.length) {
        this.currentIndex++;
        this.stack[this.currentIndex] = item;
      }
    }),
    (pop = function () {
      if (!this.isEmpty()) {
        const popped = this.stack[this.currentIndex];
        this.currentIndex--;
        return popped;
      }
    }),
    (isEmpty = function () {
      return this.isEmpty === -1 ? true : false;
    });
}
function isBalanced(brackets) {
  const stack = new Stack(brackets.length);
  for (let index = 0; index < brackets.length; ++index) {
    const bracket = brackets[index];

    if (bracket === "[" || bracket === "(" || bracket === "{") {
      stack.push(bracket);
    } else if (bracket === "]" || bracket === ")" || bracket === "}") {
      const popped = stack.pop();
      if (
        (bracket === "]" && popped === "[") ||
        (bracket === ")" && popped === "(") ||
        (bracket === "}" && popped === "{")
      ) {
        continue;
      }

      return false;
    }
  }
  return true;
}
console.log(isBalanced("[()][]()[()]([]){{{{{{({[]]]})}}}}}}"));
