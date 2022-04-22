function numberOfCharacters(object, string, index) {
  if (!string[index] || string === "") return object;

  const charc = string[index];
  object[charc] = object[charc] ? object[charc] + 1 : 1;

  return numberOfCharacters(object, string, index + 1);
}

function removeTime(string) {
  const regexPattern = /((0[1-9]|1\d|2[0-4])(\s?|:)(\d{1,2})(\*?)(\s*?)[ap]m)/;
  return string.replace(regexPattern, "");
}

function removeWhitespaces(newString, string,index){
    if(!string[index]) return newString;
    newString += string[index] === " " ? "" : string[index]
    return removeWhitespaces(newString, string,index+1);
}
