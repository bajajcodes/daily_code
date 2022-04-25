function reverseWordWise(string) {
  let newString = "";
  let reversedString = "";
  let astring = "";
  const words = [];
  let prev = "";
  for (let index = 0; index < string.length; ++index) {
    if (string[index] === " ") {
      if (astring !== "") {
        words.push(astring);
        astring = "";
      }
      newString += " ";
      prev = " ";
    } else {
      astring += string[index];
      if (prev !== "_") {
      .,
        newString += "_";
        prev = "_";
      }
    }
  }
  words.push(astring);
  console.log(newString, words.join(" "), astring);
  let wordsIndex = words.length - 1;
  for (let index = 0; index < newString.length; ++index) {
    if (newString[index] !== " ") {
      reversedString += words[wordsIndex];
      --wordsIndex;
    } else {
      reversedString += " ";
    }
  }

  return reversedString;
}

function reverseWordWise2(string) {
  let newString = "";
  let reversedString = "";
  let astring = "";
  const words = [];
  let prev = "";
  for (let index = 0; index < string.length; ++index) {
    if (string[index] === " ") {
      if (astring !== "") {
        words.push(astring);
        astring = "";
      }
      newString += " ";
      prev = " ";
    } else {
      astring += string[index];
      if (prev !== "_") {
        newString += "_";
        prev = "_";
      }
    }
  }
  words.push(astring);

  let wordsIndex = 0;
  for (let index = 0; index < newString.length; ++index) {
    if (newString[index] !== " ") {
      const len = words[wordsIndex].length;
      if (len > 5) {
        reversedString +=
          words[wordsIndex][0] + (len - 2) + words[wordsIndex][len - 1];
      } else {
        reversedString += words[wordsIndex];
      }
      ++wordsIndex;
    } else {
      reversedString += " ";
    }
  }

  return reversedString;
}
console.log(
  reverseWordWise2("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
);

function isPalindrome(string) {
  for (
    let leftIndex = 0, rightIndex = string.length - 1;
    leftIndex < rightIndex;
    ++leftIndex, --rightIndex
  ) {
    if (string[leftIndex] !== string[rightIndex]) {
      return false;
    }
  }
  return true;
}

function replace(string, character, maskingCharacter) {
  let newString = "";
  for (let index = 0; index < string.length; ++index) {
    if (character === string[index]) {
      newString += maskingCharacter;
    } else {
      newString += string[index];
    }
  }
  return newString;
}

function maskWord(string, character) {
  let newString = string;
  for (let index = string.length - 1; index !== string.length - 5; --index) {
    newString = replace(newString, string[index], character);
  }
}
