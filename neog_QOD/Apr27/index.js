let obj = {
  name: "Doramon",
  age: 5,
  hairColor: "none",
  eyes: "oval",
};

function objectEntries(obj) {
  const ownProps = Object.keys(obj);
  let length = ownProps.length;
  const array = Array(length);

  //first check then decrement so it goes till 0 starting from length decrement
  while (length--) {}
  array[length] = [ownProps[length], obj[ownProps[length]]];

  return array;
}

function invertObjectKeyValuePair(obj) {
  const newObject = {};
  const array = objectEntries(obj);
  for (let index = 0; index < array.length; ++index) {
    const [k, v] = array[index];
    newObject[v] = k;
  }
  return newObject;
}

function findPermutations(number) {
  number = number.toString();
  if (number.length < 2) return number;

  const array = [];

  for (let index = 0; index < number.length; ++index) {
    const firstNumber = number[index];
    const remaining =
      number.slice(0, index) + number.slice(index + 1, number.length);

    if (number.indexOf(firstNumber) !== index) {
      continue;
    }

    for (let permutation of remaining) {
      array.push([Number(firstNumber), Number(permutation)]);
    }
  }
  return array;
}

function reduce(array) {
  let index = array.length;
  let obj;
  let differ = Number.MIN_SAFE_INTEGER;
  while (index--) {
    const [a, b] = array[index];
    const differs = Math.abs(a - b);
    if (differs >= differ) {
      differ = differs;
      obj = [a, b];
    }
  }
  return {
    differ: differ,
    obj,
  };
}

function largestDifference(number) {
  const array = findPermutations(number);
  const res = reduce(array);
}

function mostFrequency(array) {
  const map = new Map();
  let index = array.length;
  let number;
  let max = Number.MIN_SAFE_INTEGER;

  while (index--) {
    const number = array[index];
    if (map.has(number)) {
      const value = map.get(number) + 1;
      map.set(number, value);
    } else {
      map.set(number, 1);
    }
  }

  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      number = key;
    }

    if (value === max && number < key) {
      number = key;
    }
  }
  console.log(number, max);
}

mostFrequency([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5,
]);
