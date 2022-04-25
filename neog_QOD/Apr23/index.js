function getAreaAndPerimeterOfSquare(a) {
  const side = Number(a);
  if (isNaN(side)) return `Side is not an number`;
  if (side < 0) {
    return `Side cannot be a negative number`;
  }

  const area = (side * side).toFixed(2);
  const perimeter = (4 * side).toFixed(2);

  return `Area: ${area} and Perimeter: ${perimeter}`;
}

function getSurfaceAreaAndVolumeOfCube(a) {
  const side = Number(a);
  if (isNaN(side)) return `Side is not an number`;
  if (side < 0) {
    return `Side cannot be a negative number`;
  }

  const area = (6 * side * side).toFixed(2);
  const Volume = (side * side * side).toFixed(2);

  return `SurfaceArea: ${area} and Volume: ${Volume}`;
}

function printNOddNumber(N) {
  let oddNumbers = [];
  for (let index = 1; N > 0; index += 2) {
    if (index % 2 !== 0) {
      --N;
      oddNumbers.unshift(index);
    }
  }

  console.log(oddNumbers.join("\n"));
}

// printNOddNumber(4);

function printNOddNumber2(N, number, list) {
  if (N < 1) {
    return list;
  }
  list.unshift(number);
  --N;
  return printNOddNumber2(N, number + 2, list);
}

function printNOddNumber3(N) {
  for (let number = N + (N - 1); number > 0; number -= 2) {
    console.log(number);
  }
}

// printNOddNumber3(4);

function sliceFromLeft(string, index) {
  let newString = "";
  for (; index < string.length; ++index) {
    newString += string[index];
  }
  return newString;
}

function rotate(number, r) {
  if (typeof number === "string" && number.length < 1)
    return `Number cannot be empty`;
  if (r < 1) return `Rotation can only be a positive integer`;
  if (r === number.length) return number;
  const first = number[0];
  const rest = sliceFromLeft(number, 1);
  const newNumber = rest + first;
  return rotate(newNumber, r - 1);
}

function rotate2(number, r) {
  let num = number.toString();
  if (num.length < 1) return `Number cannot be empty`;
  if (r < 1) return number;
  num = num.slice(1) + num[0];
  return rotate2(num, r - 1);
}

// console.log(rotate("1234", 3));
console.log(rotate2("123", 2));
