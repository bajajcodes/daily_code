function findPermutations(string) {
  if (string.length < 2)
    return string;

  const array = [];

  for (let index = 0; index < string.length; ++index) {
    const char = string[index];
    const remaining = string.slice(0, index) + string.slice(index + 1, string.length);

    //skip if character exists before
    if (string.indexOf(char) !== index) {
      continue;
    }

    for (let permutation of findPermutations(remaining)) {
      array.push(char + permutation);
    }

  }

  return array;
}
