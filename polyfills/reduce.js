Array.prototype.myReduce = function (cb, initialAcc) {
  var acc = [];
  var index = 0;
  if (!initialAcc) {
    acc = this[index];
    index = 1;
  }
  for (; index < this.length; ++index) {
    acc = cb(acc, this[index]);
  }
  return acc;
};
