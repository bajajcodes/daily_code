Function.prototype.myCall = function (thisArg, ...args) {
  const context = thisArg || window;
  context._this = this;
  const result = thisArg._this(...args);
  delete context["_this"];
  return result;
};
//learned from here: https://www.youtube.com/watch?v=_pQ2hD7gQ4U
//learning: https://bigfrontend.dev/problem/create-call-method/discuss/8022
