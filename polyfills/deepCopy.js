// https://en.wikipedia.org/wiki/Serialization
// https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// ***
//https://blog.bitsrc.io/shallow-copy-and-deep-copy-in-javascript-d0ca570cd4cf
/**
 * 
 */
// https://javascript.plainenglish.io/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
// ***

function deepCopy(inObject) {
  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }
  var outObject = inObject.constructor === Object ? {} : [];
  for (var key in inObject) {
    var value = inObject[key];
    outObject[key] = deepCopy(value);
  }
  return outObject;
}


