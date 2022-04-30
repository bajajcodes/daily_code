
var startTime = performance.now();

var endTime = performance.now();

console.log(
  `Call to doSomething took ${(endTime - startTime).toFixed(2)} milliseconds`
);
