function split(string) {
  if (string.length <= 0)
    return [];
  if (string.length < 2)
    return [string];

  const array = [];
  let astringe = "";
  for (let index = 0; index < string.length; ++index) {
    const character = string[index];

    if (character === " " && astringe !== " " && astringe !== "") {
      array.push(astringe);
      astringe = "";
    }

    if (character !== " ") {
      astringe += character;
    }

    if (index === string.length - 1 && astringe !== " " && astringe !== "") {
      array.push(astringe);
    }
  }
  return array;
}
function findWordOccurrences(string) {
  const array = split(string);
  const occurrences = [];

  for (let index = 0; index < array.length; ++index) {
    const word = array[index];
    const itemIndex = findIndex(occurrences, word);
    if (itemIndex === -1) {
      occurrences.push([word, 1]);
    } else {
      occurrences[itemIndex][1] += 1;
    }
  }
  return occurrences;
}
function findIndex(array, item) {
  for (let index = 0; index < array.length; ++index) {
    if (array[index][0] === item)
      return index;
  }
  return -1;
}
console.log(
  findWordOccurrences(
    "          Hello         from hello to hello              "
  )
);
