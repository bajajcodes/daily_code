function findArrangements(number) {
  const array = [];

  for (let index = 0; index < number.length; ++index) {
    const firstNumber = number[index];
    const remaining = number
      .slice(0, index)
      .concat(number.slice(index + 1, number.length));

    if (number.indexOf(firstNumber) !== index) {
      continue;
    }
    for (let r of remaining) {
      array.push([Number(firstNumber), Number(r)]);
    }
  }
  return array;
}

function findPair(array, target) {
  const pairs = findArrangements(array);
  for (let pair of pairs) {
    const [a, b] = pair;
    if (a + b === target) return [a, b];
  }
  return [];
}

function slice(array, start, end) {
  const newArray = [];
  console.log(start, end);
  while (start < end) {
    if (array[start]) {
      newArray.push(array[start]);
    }
    ++start;
  }
  return newArray;
}

function chunkierArray(array, k) {
  let start = 0;
  let end = k;
  let count = 1;
  let rounds = Math.ceil(array.length / k);

  while (count <= rounds) {
    const slicedArray = slice(array, start, end);
    start = end;
    end += k;
    ++count;
  }

}

chunkierArray([1, 2, 3, 4, 5, 6, 7, 8,9,10], 3);




