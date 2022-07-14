Array.prototype.myFind = function (cb) {
  for (let index = 0; index < this.length; ++index) {
    if (cb(this[index])) {
      return this[index];
    }
  }
  return;
};
