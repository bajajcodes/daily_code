function mostRepeatedCharacter(string) {
  const obj = {};
  const res = { c: "", v: -1 };
  for (let index = 0; index < string.length; ++index) {
    const charac = string[index];
    obj[charac] = obj[charac] ? obj[charac] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] > res["v"]) {
      res["v"] = obj[key];
      res["c"] = key;
    }
  }
  return res;
}

// console.log(mostRepeatedCharacter("ngg"))

function split(string, charac) {
  const array = [];
  let newString = "";
  for (let index = 0; index < string.length; ++index) {
    if (string[index] === charac) {
      array.push(newString);
      newString = "";
    } else {
      newString += string[index];
    }
  }
  array.push(newString);
  return array;
}

function isASmaller(a, b) {
  return a < b ? true : false;
}

function minDate(dateA, dateB) {
  const arrayA = split(dateA, "/");
  const arrayB = split(dateB, "/");

  for (let index = arrayA.length - 1; index >= 0; --index) {
    const a = arrayA[index];
    const b = arrayB[index];
    console.log(a, b);
    if (isASmaller(Number(a), Number(b))) {
      return dateA;
    }
  }

  return dateB;
}

console.log(minDate("04/02/2023", "05/02/2022"));
