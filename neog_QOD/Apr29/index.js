function moveZerosToEnd(array) {
  if (array.length < 1) return [];
  if (array.length === 1) return array;
  let index = 0;
  let nonZeroCurrentIndex = -1;
  while (index < array.length) {
    if (array[index] !== 0) {
      ++nonZeroCurrentIndex;
      array[nonZeroCurrentIndex] = array[index];
      if (nonZeroCurrentIndex !== index) {
        array[index] = 0;
      }
    }
    ++index;
  }
  return array;
}

// console.log(moveZerosToEnd([1, 2, 0,3, 4]));

function NTimes(array) {
  if (array.length < 1) return -1;
  if (array.length === 1) return array[0];

  const frequency = {};
  const n = parseInt(array.length / 2);
  let result = -Infinity;
  for (let index = 0; index < array.length; ++index) {
    const element = array[index];
    if (!frequency[element]) frequency[element] = 1;
    else frequency[element] += 1;

    if (frequency[element] >= n) {
      if (frequency[element] > result) {
        result = element;
      }
    }
  }

  return result;
}

// console.log(NTimes([1, 1, 1, 1, 1, 1, 1, 2]));

function nonRepeatingCharacter(string, position) {
  if (string.length < 1) return -1;
  if (string.length === 1) return string;

  const data = {};
  for (let index = 0; index < string.length; ++index) {
    const element = string[index];
    if (!data[element]) data[element] = true;
    else delete data[element];
  }

  return Object.keys(data)[position] ?? -1;
}

// console.log(nonRepeatingCharacter("nneeooggccaammpp", 110));
