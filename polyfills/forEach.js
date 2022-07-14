Array.prototype.myForEach = function (cb) {
  for (let index = 0; index < this.length; ++index) {
    this[index] = cb(this[index]);
  }
};
