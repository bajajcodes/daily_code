function replaceNumbersTimeCharacterRepeated(string) {
  let array = [];
  for (let index = 0; index < string.length; ++index) {
    const character = string[index];
    const res = find(array, character);
    if (res === -1) {
      array.push([character, 1]);
    } else {
      array[res][1] += 1;
    }
  }

  return array;
}
function find(array, character) {
  for (let index = 0; index < array.length; ++index) {
    const chad = array[index][0];
    if (chad === character)
      return index;
  }
  return -1;
}
