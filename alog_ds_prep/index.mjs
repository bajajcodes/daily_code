
var startTime = performance.now();

import Stack from "./Stack.1.mjs";
console.log(Stack);

var endTime = performance.now();

console.log(
  `Call to doSomething took ${(endTime - startTime).toFixed(2)} milliseconds`
);
