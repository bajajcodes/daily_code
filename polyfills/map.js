Array.prototype.myMap = function (cb) {
  var output = [];
  for (let index = 0; index < this.length; ++index) {
    output.push(cb(this[index]));
  }
  return output;
};
