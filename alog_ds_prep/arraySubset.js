function arraySubset(larger, smaller) {
  const map = new Map();
  let index = larger.length;
  while (index--) {
    const element = larger[index];
    map.set(element, null);
  }
  index = smaller.length;
  while (index--) {
    const element = smaller[index];
    if (!map.has(element))
      return `Smaller array: ${smaller} is not a subset of Larger array: ${larger}`;
  }

  return `Is subset`;
}
console.log(arraySubset([1, 3, 4, 2, 5, 6], [1, 4, 2]));
console.log(arraySubset([0, 5, 2, 23, 19], [19, 5, 3]));
