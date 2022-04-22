function calculateProfitOrLoss(cp, sp) {
  const difference = sp - cp;
  if (difference < 0) {
    return `${-difference} Loss`;
  } else if (difference > 1) {
    return `${difference} Profit`;
  } else {
    return `Neutral`;
  }
}

function reduce(array, initialValue, callback) {
  let acc = initialValue;
  for (let index = 0; index < array.length; ++index) {
    acc = callback(acc, array[index]);
  }
  return acc;
}

function map(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; ++index) {
    const result = callback(array[index]);
    newArray.push(result);
  }
  return newArray;
}

function decimalToBinary(decimal) {
  let num = Number(decimal);
  let output = '';
  if (num === 0) {
    return `0`;
  }

  while (num > 0) {
    output = num % 2 + output;
    num = Math.floor(num / 2);
  }

  return output;
}

console.log(decimalToBinary(10));
