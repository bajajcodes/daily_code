function minimumOperations(array) {
  const map = new Map();
  let index = array.length;
  let max_count = 0;

  while (index--) {
    const element = array[index];
    if (map.has(element))
      map.set(element, map.get(element) + 1);
    else
      map.set(element, 1);
  }

  for (let key of map.keys()) {
    if (max_count < map.get(key))
      max_count = map.get(key);
  }

  return array.length - max_count;
}
console.log(minimumOperations([1, 1, 1, 1]));
