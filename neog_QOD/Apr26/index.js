function calculateKineticEnergy(m, v) {
  if (m <= 0 || v <= 0) return `No show approved.`;
  return (0.5 * m * v * v).toFixed(4);
}

function calculateSimpleInterest(P, R, T) {
  return (P * R * T) / 100;
}

function octalToDecimal(octal) {
  let rem;
  let count = 0;
  let decimal = 0;
  while (octal > 0) {
    rem = octal % 10;
    octal = parseInt(octal / 10);
    decimal += (8 ** count) * rem;
    ++count;
  }
  return decimal;
}

console.log(octalToDecimal(512));
