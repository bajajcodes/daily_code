Array.prototype.myFilter = function (cb) {
  var output = [];
  for (let index = 0; index < this.length; ++index) {
    if (cb(this[index])) {
      output.push(this[index]);
    }
  }
  return output;
};
