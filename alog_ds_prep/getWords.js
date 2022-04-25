function getWords(string) {
  const words = [];
  let leftPos = 0;
  let rightPos = -1;

  for (let index = 0; index < string.length; ++index) {
    const chard = string[index];
    if (chard === " ") {
      if (rightPos !== -1) {
        leftPos = rightPos + 1;
        rightPos = index;
      }
      if (rightPos === -1) {
        rightPos = index;
      }
      const newString = substring(string, leftPos, rightPos);
      updateWords(newString);
    }

    if (index === string.length - 1 && chard !== " ") {
      const newString = substring(string, rightPos + 1, string.length);
      updateWords(newString);
    }
  }

  return words;

  function updateWords(newString) {
    const newIndex = getWordIndex(words, newString);
    if (newIndex !== -1) {
      words[newIndex][1] += 1;
    } else {
      words.push([newString, 1]);
    }
  }
}
function substring(string, left, right) {
  let newString = "";
  for (; left < right; ++left) {
    newString += string[left];
  }
  return newString;
}
function getWordIndex(words, word) {
  for (let index = 0; index < words.length; ++index) {
    const oldWord = words[index];
    if (oldWord[0] === word)
      return index;
  }
  return -1;
}
function find(array, cb) {
  let result;
  for (let index = 0; index < array.length; ++index) {
    const word = array[index];
    if (!result) {
      result = word;
    } else {
      result = cb(result, word);
    }
  }
  return result;
}
const largest_cb = (a, b) => (a[1] - b[1] >= 0 ? a : b);
const smallest_cb = (a, b) => (a[1] - b[1] <= 0 ? a : b);
const words = getWords(
  "This is a test string This a us is us is is is us us us us us us test string a a a a a a"
);
