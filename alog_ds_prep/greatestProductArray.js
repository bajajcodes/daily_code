function greatestProductArray(array) {
  const map = new Map();
  let index = array.length;
  let product = -1;
  while (index--) {
    if (!map.has(array[index]))
      map.set(array[index], null);
  }
  index = array.length;
  while (index--) {
    if (array[index + 1]) {
      const mul = array[index] * array[index + 1];
      if (map.has(mul)) {
        if (product <= mul) {
          product = mul;
        }
      }
    }
  }
  return product;
}
console.log(greatestProductArray([17, 21, 1, 30, 35]));
