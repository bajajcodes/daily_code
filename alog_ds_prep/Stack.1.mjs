export default class Stack {
  data = [];
  size = 0;
  currentIndex = -1;

  constructor(size) {
    this.size = size;
    this.data = Array(size);
    this.currentIndex = -1;
  }

  push(params) {
    let succeeded = false;
    if (this.currentIndex < this.size - 1) {
      this.currentIndex++;
      this.data[this.currentIndex] = params;
      succeeded = true;
    }
    return succeeded;
  }

  pop() {
    let poppedElement = null;
    if (!this.isEmpty()) {
      poppedElement = this.data[this.currentIndex];
      this.data[this.currentIndex] = null;
      this.currentIndex--;
    }
    return poppedElement;
  }

  isEmpty() {
    return this.currentIndex === -1 ? true : false;
  }

  topOfStack() {
    let poppedElement = null;
    if (!this.isEmpty()) {
      poppedElement = this.data[this.currentIndex];
    }
    return poppedElement;
  }

  toString() {
    let contents = "";
    if (!this.isEmpty()) {
      contents = this.data.join("");
    }
    return contents;
  }

  makeStackEmpty() {
    let isDone = false;
    if (!this.isEmpty()) {
      this.currentIndex = -1;
      isDone = true;
    }
    return isDone;
  }
}


function reverseString(string) {
  let length = string.length;
  const stack = new Stack(length);
  while (length--) {
    stack.push(string[length]);
  }
  console.log(
    stack.toString(),
    stack.topOfStack(),
    stack.makeStackEmpty(),
    stack.topOfStack()
  );
}
//reverseString("Apple");
