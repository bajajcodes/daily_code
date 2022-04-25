function fahrenheitToCelsius(F) {
  return ((F - 32) * (5 / 9)).toFixed(4);
}

function sumOfNNaturalNumbers(N) {
  return (N * (N + 1)) / 2;
}

function reverseNumber(number, reversedNumber) {
  //   if (number < 0) {
  //     return `Number cannot be reversed`;
  //   }
  if (number === 0) {
    return reversedNumber;
  }
  reversedNumber += number % 10;
  number = parseInt(number / 10);
  return reverseNumber(number, reversedNumber);
}

var reversedNumber = 0;

function reverseNumber2(number) {
  if (number <= 0) return number;
  const remainder = number % 10; 
  reversedNumber = reversedNumber * 10 + remainder;
  reverseNumber2(parseInt(number / 10));
}
reverseNumber2(4526);

console.log(reversedNumber);

function reverseNumber3(number){

    reverseNumber3(number)
}