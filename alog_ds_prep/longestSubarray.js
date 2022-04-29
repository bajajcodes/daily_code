function longestSubarray(array, k) {
  let index = 0;
  let sum = 0;
  let max = 0;
  const mod_array = [];
  const map = new Map();

  while (index < array.length) {
    sum += array[index];
    const mod = sum % k;
    console.log(sum, mod);
    mod_array.push(mod);
    ++index;
  }
  index = 0;

  while (index < array.length) {
    if (mod_array[index] === 0) {
      max = index + 1;
      console.log(mod_array[index], index, max, "in mod");
    } else if (!map.has(mod_array[index])) {
      map.set(mod_array[index], index);
    } else if (max < index - map.get(mod_array[index])) {
      max = index - map.get(mod_array[index]);
    }
    ++index;
  }
  console.log(max);
}
longestSubarray([2, 7, 6, 1, 4, 5], 3);
