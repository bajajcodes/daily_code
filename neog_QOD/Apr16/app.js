function mergeStrings(stringOne, stringTwo) {
  let smallerString =
    stringOne.length <= stringTwo.length ? stringOne : stringTwo;
  let biggerString =
    stringOne.length > stringTwo.length ? stringOne : stringTwo;
  return biggerString.concat(smallerString);
}

function toUpperCase(string) {
  let newString = "";
  for (let index = 0; index < string.length; ++index) {
    let letter = string.charAt(index);
    const code = string.charCodeAt(index);
    if (code >= 87 && code <= 122) {
      letter = String.fromCharCode(code - 32);
    }
    newString += letter;
  }
  return newString;
}

function replace(S, c1, c2) {
  let newString = "";
  for(let index=0; index<S.length; ++index){
      if(S[index] === c1){
            newString += c2;
      }else{
          newString += S[index];
      }
  }

  return newString;
}

console.log(replace("abcdfefg5", "f", "@"));
